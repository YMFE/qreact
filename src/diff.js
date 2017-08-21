import { diffProps } from "./diffProps";
import { CurrentOwner } from "./createElement";
import { createDOMElement, removeDOMElement, getNs } from "./browser";
import { noop } from "./util";

import {
  processFormElement,
  postUpdateSelectedOptions
} from "./ControlledComponent";

import {
  getNodes,
  HTML_KEY,
  clearArray,
  options,
  checkNull,
  toLowerCase,
  getChildContext,
  getComponentProps
} from "./util";

import { disposeVnode } from "./dispose";

/**
 * ReactDOM.render 方法
 *
 */
export function render(vnode, container, callback) {
  return renderByAnu(vnode, container, callback);
}
/**
 * ReactDOM.unstable_renderSubtreeIntoContainer 方法， React.render的包装
 *
 */
var warnOne = 1;
export function unstable_renderSubtreeIntoContainer(
  component,
  vnode,
  container,
  callback
) {
  if (warnOne) {
    console.warn("unstable_renderSubtreeIntoContainer未见于文档的内部方法，不建议使用"); // eslint-disable-line
    warnOne = 0;
  }
  var parentContext = component && component.context || {};
  return renderByAnu(vnode, container, callback, parentContext);
}
export function unmountComponentAtNode(dom) {
  var prevVnode = dom._component;
  if (prevVnode) {
    var component = prevVnode._instance;
    alignVnode(prevVnode, {
      type: "#text",
      text: "empty",
      vtype: 0
    }, dom.firstChild, component, []);
  }
}

export function isValidElement(vnode) {
  return vnode && vnode.vtype;
}

function clearRefsAndMounts(queue) {
  queue.forEach(function (el) {
    var refFns = el.__pendingRefs;
    if (refFns) {
      // eslint-disable-next-line
      for (var i = 0, refFn; refFn = refFns[i++];) {
        refFn();
      }
      refFns.length = 0;

      if (el.componentDidMount) {
        el.componentDidMount();
        el.componentDidMount = null;
      }

      clearArray(el.__pendingCallbacks).forEach(function (fn) {
        fn.call(el);
      });
    }
    el.__hasDidMount = true;
  });
  queue.length = 0;
}

function renderByAnu(vnode, container, callback, parentContext) {
  if (!isValidElement(vnode)) {
    throw new Error(vnode + "\u5FC5\u987B\u4E3A\u7EC4\u4EF6\u6216\u5143\u7D20\u8282\u70B9, \u4F46\u73B0\u5728\u4F60\u7684\u7C7B\u578B\u5374\u662F" + Object.prototype.toString.call(vnode));
  }
  if (!container || container.nodeType !== 1) {
    console.warn(container + "\u5FC5\u987B\u4E3A\u5143\u7D20\u8282\u70B9"); // eslint-disable-line
    return;
  }
  var mountQueue = [];
  var lastVnode = container._component;
  mountQueue.mountAll = true;

  parentContext = parentContext || {};
  var rootNode = lastVnode ? alignVnode(lastVnode, vnode, container.firstChild, parentContext, mountQueue) : genVnodes(vnode, container, parentContext, mountQueue);

  // 如果存在后端渲染的对象（打包进去），那么在ReactDOM.render这个方法里，它就会判定容器的第一个孩子是否元素节点
  // 并且它有data-reactroot与data-react-checksum，有就根据数据生成字符串，得到比较数

  if (rootNode.setAttribute) {
    rootNode.setAttribute("data-reactroot", "");
  }

  var instance = vnode._instance;
  container._component = vnode;
  if (callback) {
    callback();
  }
  clearRefsAndMounts(mountQueue);
  return instance || rootNode;
  //组件返回组件实例，而普通虚拟DOM 返回元素节点
}

function genVnodes(vnode, container, context, mountQueue) {
  var nodes = getNodes(container);
  var prevRendered = null;
  //eslint-disable-next-line
  for (var i = 0, el; el = nodes[i++];) {
    if (el.getAttribute && el.getAttribute("data-reactroot") !== null) {
      prevRendered = el;
    } else {
      el.parentNode.removeChild(el);
    }
  }

  var rootNode = mountVnode(vnode, context, prevRendered, mountQueue);
  container.appendChild(rootNode);

  return rootNode;
}

var formElements = {
  select: 1,
  textarea: 1,
  input: 1
};

var patchAdapter = {
  0: mountText,
  1: mountElement,
  2: mountComponent,
  4: mountStateless,
  10: updateText,
  11: updateElement,
  12: updateComponent,
  14: updateStateless
};

function mountText(vnode, context, prevRendered) {
  var node = prevRendered && prevRendered.nodeName === vnode.type ? prevRendered : createDOMElement(vnode);
  vnode._hostNode = node;
  return node;
}

function mountVnode(vnode, context, prevRendered, mountQueue) {
  return patchAdapter[vnode.vtype](vnode, context, prevRendered, mountQueue);
}

function genMountElement(vnode, type, prevRendered) {
  if (prevRendered && toLowerCase(prevRendered.nodeName) === type) {
    return prevRendered;
  } else {
    vnode.ns = getNs(type);
    var dom = createDOMElement(vnode);
    if (prevRendered) while (prevRendered.firstChild) {
      dom.appendChild(prevRendered.firstChild);
    }

    return dom;
  }
}

function mountElement(vnode, context, prevRendered, mountQueue) {
  var type = vnode.type,
    props = vnode.props,
    _owner = vnode._owner,
    ref = vnode.ref;

  var dom = genMountElement(vnode, type, prevRendered);
  vnode._hostNode = dom;
  var method = prevRendered ? alignChildren : mountChildren;
  method(vnode, dom, context, mountQueue);

  if (vnode.checkProps) {
    diffProps(props, {}, vnode, {}, dom);
  }

  if (ref && _owner) {
    _owner.__collectRefs(ref.bind(vnode, dom));
  }
  if (formElements[type]) {
    processFormElement(vnode, dom, props);
  }

  return dom;
}

// 将虚拟DOM转换为真实DOM并插入父元素
function mountChildren(vnode, parentNode, context, mountQueue) {
  var children = vnode.props.children;
  for (var i = 0, n = children.length; i < n; i++) {
    var el = children[i];
    var curNode = mountVnode(el, context, null, mountQueue);

    parentNode.appendChild(curNode);
  }
}

function alignChildren(vnode, parentNode, context, mountQueue) {
  var children = vnode.props.children,
    childNodes = parentNode.childNodes,
    insertPoint = childNodes[0] || null,
    j = 0,
    n = children.length;
  for (var i = 0; i < n; i++) {
    var el = children[i];
    var lastDom = childNodes[j];
    var dom = mountVnode(el, context, lastDom, mountQueue);
    if (dom === lastDom) {
      j++;
    }
    parentNode.insertBefore(dom, insertPoint);
    insertPoint = dom.nextSibling;
  }
  while (childNodes[n]) {
    parentNode.removeChild(childNodes[n]);
  }
}

function mountComponent(vnode, context, prevRendered, mountQueue) {
  var type = vnode.type,
    ref = vnode.ref;

  var props = getComponentProps(vnode);
  var instance = new type(props, context); //互相持有引用
  vnode._instance = instance;
  instance.props = instance.props || props;
  instance.context = instance.context || context;

  if (instance.componentWillMount) {
    instance.componentWillMount();
    instance.state = instance.__mergeStates(props, context);
  }

  // 如果一个虚拟DOM vnode的type为函数，那么对type实例化所得的对象instance来说 instance._currentElement =
  // vnode instance有一个render方法，它会生成下一级虚拟DOM ，如果是返回false或null，则变成 空虚拟DOM {type:
  // '#comment', text: 'empty', vtype: 0} 这个下一级虚拟DOM，对于instance来说，为其_rendered属性

  var rendered = renderComponent(instance, type, vnode, context);
  instance.__dirty = false;
  instance.__hasRendered = true;

  var dom = mountVnode(rendered, instance._childContext, prevRendered, mountQueue);
  vnode._hostNode = dom;

  mountQueue.push(instance);
  if (ref) {
    instance.__collectRefs(ref.bind(vnode, instance));
  }
  options.afterMount(instance);
  return dom;
}

function renderComponent(instance, type, vnode, context) {
  CurrentOwner.cur = instance;
  var rendered = instance.render();
  instance._currentElement = vnode;
  CurrentOwner.cur = null;
  rendered = checkNull(rendered, type);
  vnode._renderedVnode = rendered;
  instance._childContext = rendered.vtype ? getChildContext(instance, context) : context; // eslint-disable-line
  return rendered;
}

function Stateless(render) {
  this.refs = {};
  this.type = render;
  this.__collectRefs = noop;
}

Stateless.prototype.render = function (vnode, context) {
  var props = getComponentProps(vnode);
  var rendered = this.type(props, context);
  rendered = checkNull(rendered, this.type);
  this.context = context;
  this.props = props;
  vnode._instance = this;
  this._currentElement = vnode;
  vnode._renderedVnode = rendered;
  return rendered;
};

function mountStateless(vnode, context, prevRendered, mountQueue) {
  var instance = new Stateless(vnode.type);
  var rendered = instance.render(vnode, context);
  var dom = mountVnode(rendered, context, prevRendered, mountQueue);
  return vnode._hostNode = dom;
}

function updateStateless(lastTypeVnode, nextTypeVnode, node, context, mountQueue) {
  var instance = lastTypeVnode._instance;
  var lastVnode = lastTypeVnode._renderedVnode;
  var nextVnode = instance.render(nextTypeVnode, context);
  var dom = alignVnode(lastVnode, nextVnode, node, context, mountQueue);
  nextTypeVnode._hostNode = nextVnode._hostNode = dom;
  return dom;
}

options.refreshComponent = refreshComponent;

function refreshComponent(instance, mountQueue) {
  // shouldComponentUpdate为false时不能阻止setState/forceUpdate cb的触发
  var dom = instance._currentElement._hostNode;

  dom = _refreshComponent(instance, dom, mountQueue);
  instance.__forceUpdate = false;

  clearArray(instance.__pendingCallbacks).forEach(function (fn) {
    fn.call(instance);
  });

  if (instance.__reRender) {
    instance.__pendingCallbacks = instance.__tempUpdateCbs;
    instance.__reRender = instance.__tempUpdateCbs = null;

    return refreshComponent(instance, []);
  }
  return dom;
}

function _refreshComponent(instance, dom, mountQueue) {
  var lastProps = instance.lastProps,
    lastContext = instance.lastContext,
    lastState = instance.state,
    nextContext = instance.context,
    vnode = instance._currentElement,
    nextProps = instance.props,
    type = instance.constructor;


  lastProps = lastProps || nextProps;
  var nextState = instance.__mergeStates(nextProps, nextContext);
  instance.props = lastProps;
  if (!instance.__forceUpdate && instance.shouldComponentUpdate && instance.shouldComponentUpdate(nextProps, nextState, nextContext) === false) {
    instance.__dirty = false;
    return dom;
  }

  //生命周期 componentWillUpdate(nextProps, nextState, nextContext)
  if (instance.componentWillUpdate) {
    instance.componentWillUpdate(nextProps, nextState, nextContext);
  }
  instance.__updating = true;
  instance.props = nextProps;
  instance.state = nextState;

  var lastRendered = vnode._renderedVnode;
  var nextElement = instance._nextElement || vnode;
  if (!lastRendered._hostNode) {
    lastRendered._hostNode = dom;
  }
  var rendered = renderComponent(instance, type, nextElement, nextContext);
  delete instance._nextElement;

  dom = alignVnode(lastRendered, rendered, dom, instance._childContext, mountQueue);

  nextElement._hostNode = dom;

  if (instance.componentDidUpdate) {
    instance.componentDidUpdate(lastProps, lastState, lastContext);
  }
  instance.__updating = false;
  instance.__dirty = false;
  instance.__reRender = instance.__rerender;

  delete instance.__rerender;
  options.afterUpdate(instance);
  return dom;
}

function alignVnode(lastVnode, nextVnode, node, context, mountQueue) {
  var dom = node;
  if (lastVnode.type !== nextVnode.type || lastVnode.key !== nextVnode.key) {
    disposeVnode(lastVnode);
    var innerMountQueue = mountQueue.mountAll ? mountQueue : nextVnode.vtype === 2 ? [] : mountQueue;
    dom = mountVnode(nextVnode, context, null, innerMountQueue);
    var p = node.parentNode;
    if (p) {
      p.replaceChild(dom, node);
      removeDOMElement(node);
    }
    if (innerMountQueue !== mountQueue) {
      clearRefsAndMounts(innerMountQueue);
    }
  } else if (lastVnode !== nextVnode) {
    dom = updateVnode(lastVnode, nextVnode, node || lastVnode._hostNode, context, mountQueue);
  }

  return dom;
}

export function findDOMNode(ref) {
  if (ref == null) {
    return null;
  }
  if (ref.nodeType === 1) {
    return ref;
  }
  var vnode = ref._currentElement;
  return vnode._hostNode || null;
}

function updateText(lastVnode, nextVnode, dom) {
  nextVnode._hostNode = dom;
  if (lastVnode.text !== nextVnode.text) {
    dom.nodeValue = nextVnode.text;
  }
  return dom;
}

function updateElement(lastVnode, nextVnode, node, context, mountQueue) {
  var lastProps = lastVnode.props;
  var nextProps = nextVnode.props;
  nextVnode._hostNode = node;
  if (nextProps[HTML_KEY]) {
    lastProps.children.forEach(function (el) {
      disposeVnode(el);
    });
  } else {
    if (lastProps[HTML_KEY]) {
      while (node.firstChild) {
        node.removeChild(node.firstChild);
      }
      mountChildren(nextVnode, node, context, mountQueue);
    } else {
      updateChildren(lastVnode, nextVnode, node, context, mountQueue);
    }
  }

  if (lastVnode.checkProps || nextVnode.checkProps) {
    diffProps(nextProps, lastProps, nextVnode, lastVnode, node);
  }
  if (nextVnode.type === "select") {
    postUpdateSelectedOptions(nextVnode);
  }
  if (nextVnode.ref) {
    nextVnode.ref(node);
  }
  return node;
}

function updateComponent(lastVnode, nextVnode, node, context, mountQueue) {
  var instance = nextVnode._instance = lastVnode._instance;
  instance._nextElement = nextVnode;

  var nextProps = getComponentProps(nextVnode);
  instance.lastProps = instance.props;
  instance.lastContext = instance.context;

  if (instance.componentWillReceiveProps) {
    instance.__dirty = true;
    instance.componentWillReceiveProps(nextProps, context);
    instance.__dirty = false;
  }

  instance.props = nextProps;
  instance.context = context;
  if (nextVnode.ref) {
    nextVnode.ref(instance);
  }
  return refreshComponent(instance, mountQueue);
}

function updateVnode(lastVnode, nextVnode, node, context, mountQueue) {
  return patchAdapter[lastVnode.vtype + 10](lastVnode, nextVnode, node, context, mountQueue);
}

function updateChildren(lastVnode, nextVnode, parentNode, context, mountQueue) {
  var lastChildren = lastVnode.props.children;
  var nextChildren = nextVnode.props.children;
  var childNodes = parentNode.childNodes;
  var mountAll = mountQueue.mountAll;
  if (nextChildren.length == 0) {
    lastChildren.forEach(function (el) {
      var node = el._hostNode;
      if (node) {
        removeDOMElement(node);
      }
      disposeVnode(el);
    });
    return;
  }

  var hashcode = {};
  lastChildren.forEach(function (el) {
    var key = el.type + (el.key || "");
    var list = hashcode[key];
    if (list) {
      list.push(el);
    } else {
      hashcode[key] = [el];
    }
  });
  nextChildren.forEach(function (el) {
    var key = el.type + (el.key || "");
    var list = hashcode[key];
    if (list) {
      var old = list.shift();
      if (old) {
        el.old = old;
      } else {
        delete hashcode[key];
      }
    }
  });
  for (var i in hashcode) {
    var list = hashcode[i];
    if (Array.isArray(list)) {
      list.forEach(function (el) {
        var node = el._hostNode;
        if (node) {
          removeDOMElement(node);
        }
        disposeVnode(el);
      });
    }
  }
  nextChildren.forEach(function (el, index) {
    var old = el.old,
      ref = void 0,
      dom = void 0,
      queue = mountAll ? mountQueue : [];
    if (old) {
      delete el.old;

      if (el === old && old._hostNode) {
        //cloneElement
        dom = old._hostNode;
      } else {
        dom = updateVnode(old, el, old._hostNode, context, queue);
      }
    } else {
      dom = mountVnode(el, context, null, queue);
    }
    ref = childNodes[index];
    if (dom !== ref) insertDOM(parentNode, dom, ref);
    if (!mountAll) {
      clearRefsAndMounts(queue);
    }
  });
}

function insertDOM(parentNode, dom, ref) {
  if (!ref) {
    parentNode.appendChild(dom);
  } else {
    parentNode.insertBefore(dom, ref);
  }
}
