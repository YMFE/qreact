import { ATTR_KEY } from '../constants';
// qreact begin
import { loseUp } from '../util';
// qreact end
import { isSameNodeType, isNamedNode } from './index';
import { buildComponentFromVNode } from './component';
import { setAccessor, createNode, removeNode, createComment, isComment } from '../dom/index';
import { unmountComponent } from './component';
import options from '../options';

const DEV = typeof process === 'undefined' || !process.env || process.env.NODE_ENV !== 'production';


/** Queue of components that have been mounted and are awaiting componentDidMount */
export const mounts = [];

/** Diff recursion count, used to track the end of the diff cycle. */
export let diffLevel = 0;

/** Global flag indicating if the diff is currently within an SVG */
let isSvgMode = false;

/** Global flag indicating if the diff is performing hydration */
let hydrating = false;


/** Invoke queued componentDidMount lifecycle methods */
export function flushMounts() {
    let component;
    while ((component = mounts.pop())) {
        // afterMount/componentDidMount/afterUpdate/componentDidUpdate
        if (Array.isArray(component)) {
            let previousProps = component[1],
                previousState = component[2],
                previousContext = component[3];
            component = component[0];
            if (component.componentDidUpdate) component.componentDidUpdate(previousProps, previousState, previousContext);
            if (options.afterUpdate) options.afterUpdate(component);
        } else {
            if (options.afterMount) options.afterMount(component);
            if (component.componentDidMount) component.componentDidMount();
        }
    }
}


/** Apply differences in a given vnode (and it's deep children) to a real DOM Node.
 *    @param {Element} [dom=null]        A DOM node to mutate into the shape of the `vnode`
 *    @param {VNode} vnode            A VNode (with descendants forming a tree) representing the desired DOM structure
 *    @returns {Element} dom            The created/mutated element
 *    @private
 */

/**
 * vnode
 *
 * export function render(vnode, parent, merge) {
 *     return diff(merge, vnode, {}, false, parent);
 * }
 */

export function diff(dom, vnode, context, mountAll, parent, componentRoot, component) {
    // diffLevel having been 0 here indicates initial entry into the diff (not a subdiff)
    if (!diffLevel++) {
        // when first starting the diff, check if we're diffing an SVG or within an SVG
        isSvgMode = parent && typeof parent.ownerSVGElement !== 'undefined';

        // hydration is inidicated by the existing element to be diffed not having a prop cache
        hydrating = dom && !(ATTR_KEY in dom);
    }
    let nextSibling = dom && dom.nextSibling,
        ret = idiff(dom, vnode, context, mountAll, component);
    // append the element if its a new parent
    if (parent && ret && ret.parentNode !== parent) {
        parent.insertBefore(ret, nextSibling);
        loseUp(vnode, ret);
    }

    // diffLevel being reduced to 0 means we're exiting the diff
    if (!--diffLevel) {
        hydrating = false;
        // invoke queued componentDidMount lifecycle methods
        if (!componentRoot) flushMounts();
    }

    return ret;
}

function idiff(dom, vnode, context, mountAll, inst) {
    // diff with prevChildren if _renderedChildren defined. or dom
    // inst can be just a {_renderedChildren: {}}
    let prevChildren = inst && inst._renderedChildren;

    // empty values (null & undefined) render as empty Comment nodes
    // if (vnode == null) return isComment(dom) ? dom : createComment();
    // till now seems no need to create a commnent node.
    if (vnode == null) {
        // if component, create a comment
        if (inst && inst.props) return isComment(dom) ? dom : createComment();
        return vnode;
    }


    // Fast case: Strings create/update Text nodes.
    if (typeof vnode === 'string') {
        // update if it's already a Text node
        if (dom && dom instanceof Text) {
            if (dom.nodeValue != vnode) {
                dom.nodeValue = vnode;
            }
        } else {
            // it wasn't a Text node: replace it with one and recycle the old Element
            if (dom) recollectNodeTree(dom);
            dom = document.createTextNode(vnode);
        }

        // Mark for non-hydration updates
        dom[ATTR_KEY] = true;
        return dom;
    }


    // If the VNode represents a Component, perform a component diff.
    if (typeof vnode.nodeName === 'function') {
        return buildComponentFromVNode(dom, vnode, context, mountAll);
    }

    // flat children
    let childrenFlated = vnode && vnode.children != null && flatChildren(vnode.children);
    if (inst && (inst.render || inst.nodeName)) {
        inst._renderedChildren = childrenFlated;
    } else if (vnode) {
        vnode._renderedChildren = childrenFlated;
    }


    let out = dom,
        nodeName = String(vnode.nodeName), // @TODO this masks undefined component errors as `<undefined>`
        prevSvgMode = isSvgMode;


    // SVGs have special namespace stuff.
    // This tracks entering and exiting that namespace when descending through the tree.
    isSvgMode = nodeName === 'svg' ? true : nodeName === 'foreignObject' ? false : isSvgMode;


    if (!dom) {
        // case: we had no element to begin with
        // - create an element with the nodeName from VNode
        out = createNode(nodeName, isSvgMode);
        // m-start
        vnode && loseUp(vnode, out);
        // m-end
    } else if (!isNamedNode(dom, nodeName)) {
        // case: Element and VNode had different nodeNames
        // - need to create the correct Element to match VNode
        // - then migrate children from old to new

        out = createNode(nodeName, isSvgMode);
        // m-start
        vnode && loseUp(vnode, out);
        // m-end

        // instead moving children from dom to out, just remove them
        recollectNodeTree(dom);
    }


    let props = out[ATTR_KEY];

    // Attribute Hydration: if there is no prop cache on the element,
    // ...create it and populate it with the element's attributes.
    if (!props) {
        out[ATTR_KEY] = props = {};
        for (let a = out.attributes, i = a.length; i--;) props[a[i].name] = a[i].value;
    }

    // dom change, rendered children become useless
    let _component;
    if (dom === out) {
        if (_component = dom._component) {
            if (inst != _component) {
                // unmount component keep the node
                unmountComponent(_component, !!'keepTheNode');
            }
            _component = _component._renderedChildren;
        }
    }
    let attributes = vnode.attributes;
    // if set html, jump diff
    if (!(attributes && attributes.dangerouslySetInnerHTML != null)) innerDiffNode(out, childrenFlated, context, mountAll, false, out === dom && (_component || prevChildren));

    // Apply attributes/props from VNode to the DOM Element:
    diffAttributes(out, attributes, props, vnode);


    isSvgMode = prevSvgMode;

    return out;
}



/** Apply child and attribute changes between a VNode and a DOM Node to the DOM.
 *    @param {Element} dom        Element whose children should be compared & mutated
 *    @param {Array} vchildren    Array of VNodes to compare to `dom.childNodes`
 *    @param {Object} context        Implicitly descendant context object (from most recent `getChildContext()`)
 *    @param {Boolean} mountAll
 *    @param {Boolean} absorb        If `true`, consumes externally created elements similar to hydration
 */
function innerDiffNode(dom, childrenFlated, context, mountAll, absorb, childrenPrevflated) {
    let originalChildren = dom.childNodes,
        originalChildrenArr = [].slice.call(originalChildren, 0), // array never changes
        vchildren = childrenFlated && childrenFlated.children,
        mountIndexes = childrenFlated && childrenFlated.mountIndexes,
        prevChildren = childrenPrevflated && childrenPrevflated.children || {},
        prevMountIndexes = childrenPrevflated && childrenPrevflated.mountIndexes,
        index = 0,
        key,
        child,
        vchild,
        prevChild,
        prevChildNode;
    if (vchildren != null) {
        index = 0;
        let curEle = null;
        for (key in vchildren) {
            vchild = vchildren[key];
            prevChild = prevChildren[key];
            prevChildNode = child = null;
            if (prevChild != null) delete prevChildren[key];
            // ignore null or alternative using comment node
            if (vchild == null) continue;

            // new mount index
            let newIndex = mountIndexes ? mountIndexes[key] : index;
            // old mount index, first render !! eg: server render
            let prevIndex = prevMountIndexes ? prevMountIndexes[key] : index;

            prevChildNode = originalChildrenArr[prevIndex];
            let recyclable = prevChildNode && isSameNodeType(prevChildNode, vchild, hydrating);
            if (prevChildNode && recyclable) originalChildrenArr[prevIndex] = null;
            // keep/move/reorder the node if same type
            if (prevChild != null && recyclable) {
                child = idiff(prevChildNode, vchild, context, mountAll, prevChild.children != null && {
                    _renderedChildren: prevChild._renderedChildren || flatChildren(prevChild.children)
                });
                // move to
                if (newIndex > prevIndex) {
                    dom.insertBefore(child, originalChildrenArr[newIndex + 1]);
                }
                // node change, remove old
                if (child !== prevChildNode) {
                    recollectNodeTree(prevChildNode);
                }
                curEle = prevChildNode;
            } else {
                if (prevChildNode) {
                    if (recyclable) {
                        child = prevChildNode;
                    } else {
                        recollectNodeTree(prevChildNode);
                        originalChildrenArr[prevIndex] = null;
                    }
                }
                // create new or recycle exists nodes
                child = idiff(child, vchild, context, mountAll);
                curEle = curEle || originalChildren[newIndex];
                dom.insertBefore(child, curEle && curEle.nextSibling);
                curEle = child;
            }
            index++;
        }
    }

    if (prevMountIndexes) {
        for (key in prevChildren) {
            prevChildren[key] = null;
            if (child = originalChildrenArr[prevMountIndexes[key]]) recollectNodeTree(child);
        }
    } else {
        while (originalChildrenArr.length) {
            if (child = originalChildrenArr.pop()) recollectNodeTree(child);
        }
    }

    // release
    originalChildren = originalChildrenArr = child = prevMountIndexes = mountIndexes = null;
}

/** Recursively recycle (or just unmount) a node an its descendants.
 *    @param {Node} node                        DOM node to start unmount/removal from
 *    @param {Boolean} [unmountOnly=false]    If `true`, only triggers unmount lifeCycle, skips removal
 */
export function recollectNodeTree(node, unmountOnly = false) {
    let component = node._component;
    if (component) {
        // if node is owned by a Component, unmount that component (ends up recursing back here)
        unmountComponent(component, !unmountOnly);
    } else {
        // m-start
        // qreact nodes
        let attributes = node[ATTR_KEY] && node[ATTR_KEY];

        // If the node's VNode had a ref function, invoke it with null here.
        // (this is part of the React spec, and smart for unsetting references)
        if (attributes && attributes.ref) node[ATTR_KEY].ref(null);

        if (unmountOnly===false || node[ATTR_KEY]==null) {
            removeNode(node);
        }

        if (attributes) {
            removeChildren(node, unmountOnly);
        }
        // m-end
    }
}


/** Recollect/unmount all children.
 *    - we use .lastChild here because it causes less reflow than .firstChild
 *    - it's also cheaper than accessing the .childNodes Live NodeList
 */
export function removeChildren(node) {
    node = node.lastChild;
    while (node) {
        let next = node.previousSibling;
        recollectNodeTree(node, true);
        node = next;
    }
}


/** Apply differences in attributes from a VNode to the given DOM Element.
 *    @param {Element} dom        Element with attributes to diff `attrs` against
 *    @param {Object} attrs        The desired end-state key-value attribute pairs
 *    @param {Object} old            Current/previous attributes (from previous VNode or element's prop cache)
 */
function diffAttributes(dom, attrs, old, inst) {
    // remove attributes no longer present on the vnode by setting them to undefined
    let name;

    for (name in old) {
        if (!(attrs && name in attrs) && old[name] != null) {
            setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode, inst);
        }
    }

    // add new & update changed attributes
    if (attrs) {
        for (name in attrs) {
            if (name !== 'children' && name !== 'innerHTML' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
                setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode, inst);
            }
        }
    }
}

// m-start
/*
    return {
        '.0': vnode,
        '.1:$key': vnode,
        '.1:2': vnode,
    }
 */
const __keyed__ = '__keyed__';
export function flatChildren(children) {
    let ret = _flatChildren(children, '.', {
            __counter__: 0
        }, {}),
        mountIndexes = ret[__keyed__];
    delete ret[__keyed__];
    delete ret.__counter__;
    return {
        children: ret,
        mountIndexes
    };
}

function _flatChildren(children, prefix, childrenFlated, existKeys, index) {
    let type = typeof children, singleNode = false;

    switch (type) {
        case 'undefined':
        case 'boolean'  :
            return childrenFlated;
        case 'object'   :
            // null or empty array
            if (children === null || children.length === 0) return childrenFlated;
            singleNode = !Array.isArray(children);
            break;
        case 'string':
        case 'number':
            singleNode = true;
            children = String(children);
            break;
    }
    if (singleNode) {
        let key = children.attributes && children.attributes.key;
        if (key != null) {
            // auto fix duplicate key prom
            if (existKeys && (key in existKeys)) {
                key = key + '@' + index;
            }
            existKeys[key] = '';
            key = prefix + '$' + key;
        } else {
            key = prefix + (index || 0);
        }
        childrenFlated[key] = children;
        let mountIndexes = childrenFlated[__keyed__] = childrenFlated[__keyed__] || {};
        mountIndexes[key] = childrenFlated.__counter__++;
    } else {
        let _prefix = prefix + (index != null ? index + ':' : '');
        existKeys = {};
        children.forEach((child, index) => {
            _flatChildren(child, _prefix, childrenFlated, existKeys, index);
        }, this);
    }
    return childrenFlated;
}
// m-end
