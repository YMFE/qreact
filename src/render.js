import { diff, removeChildren } from './vdom/diff';

/** Render JSX into a `parent` Element.
 *    @param {VNode} vnode        A (JSX) VNode to render
 *    @param {Element} parent        DOM element to render into
 *    @param {Element} [merge]    Attempt to re-use an existing DOM tree rooted at `merge`
 *    @public
 *
 *    @example
 *    // render a div into <body>:
 *    render(<div id="hello">hello!</div>, document.body);
 *
 *    @example
 *    // render a "Thing" component into #foo:
 *    const Thing = ({ name }) => <span>{ name }</span>;
 *    render(<Thing name="one" />, document.querySelector('#foo'));
 */
export function render(vnode, parent, merge) {
    let component, nodeName = vnode && vnode.nodeName, isUpdate;
    if (parent) {
        component = parent._component;
        if (!merge) merge = parent.children[0];
        // ignore SCRIPT
        if (merge && merge.nodeName === "SCRIPT") merge = null;

        // first render clear container
        // or nodeName change, unmout the old, mount the new, or update
        if (!component || !(isUpdate = component.nodeName == nodeName)) {
            removeChildren(parent, merge);
        }
        if (vnode) {
            component = component || {};
            component.nodeName = nodeName;
        } else {
            component = null; // unmount
        }
        parent._component = component;
    }
    let ret = diff(merge, vnode, {}, false, parent, !'componentRoot', component);
    return ret;
}
