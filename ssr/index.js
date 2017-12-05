import { getChildContext, getContextByTypes } from "../src/util";
import { rnumber, cssNumber } from "../src/style";

const Readable = require("stream").Readable;
const React =
  typeof global === "object"
    ? global.React ? global.React : require("qreact")
    : window.React;
const skipAttributes = {
  ref: 1,
  key: 1,
  children: 1
};

function renderVNode(vnode, context) {
  const { vtype, type, props } = vnode;

  switch (type) {
  case "#text":
    return encodeEntities(vnode.text);
  case "#comment":
    return "<!--" + vnode.text + "-->";
  default:
    var innerHTML = props && props.dangerouslySetInnerHTML;
    innerHTML = innerHTML && innerHTML.__html;

    if (vtype === 1) {
      //如果是元素节点
      let attrs = [];
      for (let name in props) {
        let v = props[name];

        if (
          skipAttributes[name] ||
            (/^on[A-Z]/.test(name) && (skipAttributes[name] = true))
        ) {
          continue;
        }

        if (name === "className" || name === "class") {
          name = "class";
          if (v && typeof v === "object") {
            v = hashToClassName(v);
          }
        } else if (name.match(rXlink)) {
          name = name.toLowerCase().replace(rXlink, "xlink:$1");
        } else if (name === "style" && v && typeof v === "object") {
          v = styleObjToCss(v);
        }

        if (skipFalseAndFunction(v)) {
          attrs.push(name + "=" + encodeAttributes(v + ""));
        }
      }

      attrs = attrs.length ? " " + attrs.join(" ") : "";

      let str = "<" + type + attrs;

      if (voidTags[type]) {
        return str + "/>\n";
      }

      str += ">";

      if (innerHTML) {
        str += innerHTML;
      } else {
        //最近版本将虚拟DOM树结构调整了，children不一定为数组
        React.Children.forEach(props.children, function(el) {
          if (el && el.vtype) {
            str += renderVNode(el, context);
          } else {
            str += el || "";
          }
        });
      }

      return str + "</" + type + ">\n";
    } else if (vtype > 1) {
      let data = {
        context
      };

      vnode = toVnode(vnode, data);
      context = data.context;

      return renderVNode(vnode, context);
    } else {
      throw "数据不合法";
    }
  }
}

function* renderVNodeGen(vnode, context) {
  const vtype = vnode.vtype,
    type = vnode.type,
    props = vnode.props;

  switch (type) {
  case "#text":
    yield encodeEntities(vnode.text);
    break;
  case "#comment":
    yield "<!--" + vnode.text + "-->";
    break;
  default:
    var innerHTML$$1 = props && props.dangerouslySetInnerHTML;
    innerHTML$$1 = innerHTML$$1 && innerHTML$$1.__html;

    if (vtype === 1) {
      //如果是元素节点
      let attrs = [];

      for (let name in props) {
        let v = props[name];

        if (
          skipAttributes[name] ||
            (/^on[A-Z]/.test(name) && (skipAttributes[name] = true))
        ) {
          continue;
        }

        if (name === "className" || name === "class") {
          name = "class";
          if (
            v &&
              (typeof v === "undefined" ? "undefined" : typeof v === "object")
          ) {
            v = hashToClassName(v);
          }
        } else if (name.match(rXlink)) {
          name = name.toLowerCase().replace(rXlink, "xlink:$1");
        } else if (
          name === "style" &&
            v &&
            (typeof v === "undefined" ? "undefined" : typeof v === "object")
        ) {
          v = styleObjToCss(v);
        }

        if (skipFalseAndFunction(v)) {
          attrs.push(name + "=" + encodeAttributes(v + ""));
        }
      }

      attrs = attrs.length ? " " + attrs.join(" ") : "";
      
      yield "<" + type + attrs;
      
      if (voidTags[type]) {
        yield "/>\n";
      }
      
      yield ">";
      
      if (innerHTML$$1) {
        yield innerHTML$$1;
      } else {
        //最近版本将虚拟DOM树结构调整了，children不一定为数组
        const children = [];

        // 由于回调函数内部无法使用 yield
        // 使用 for 循环完成遍历
        React.Children.forEach(props.children, el => children.push(el));

        for (let i = 0, len = children.length; i < len; i++) {
          let el = children[i];

          if (el && el.vtype) {
            yield* renderVNodeGen(el, context);
          } else {
            yield el || "";
          }
        }
      }

      yield "</" + type + ">\n";
    } else if (vtype > 1) {
      let data = {
        context: context
      };

      vnode = toVnode(vnode, data);
      context = data.context;

      yield* renderVNodeGen(vnode, context);
    } else {
      throw "数据不合法";
    }
  }
}

function hashToClassName(obj) {
  let arr = [];

  for (let i in obj) {
    if (obj[i]) {
      arr.push(i);
    }
  }

  return arr.join(" ");
}

const rXlink = /^xlink:?(.+)/;

function skipFalseAndFunction(a) {
  return a !== false && Object(a) !== a;
}

function styleObjToCss(obj) {
  let arr = [];

  for (let name in obj) {
    let val = obj[name];
    if (obj != null) {
      let unit = "";
      if (rnumber.test(val) && !cssNumber[name]) {
        unit = "px";
      }
      arr.push(cssName(name) + ": " + val + unit);
    }
  }
  return arr.join("; ");
}

const voidTags = [
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
];

const cssCached = {
  styleFloat: "float",
  cssFloat: "float"
};

function cssName(name) {
  if (cssCached[name]) {
    return cssCached[name];
  }

  return (cssCached[name] = name.replace(/([A-Z])/g, "-$1").toLowerCase());
}

function toVnode(vnode, data, parentInstance) {
  let parentContext = data.context,
    Type = vnode.type,
    instance,
    rendered;

  if (vnode.vtype > 1) {
    let props = vnode.props;
    let instanceContext = getContextByTypes(parentContext, Type.contextTypes);

    if (vnode.vtype === 4) {
      //处理无状态组件
      rendered = Type(props, instanceContext);
      if (rendered && rendered.render) {
        rendered = rendered.render();
      }
      instance = {};
    } else {
      //处理普通组件
      instance = new Type(props, instanceContext);
      instance.props = instance.props || props;
      instance.context = instance.context || instanceContext;
      
      if (instance.componentWillMount) {
        try {
          instance.componentWillMount();
        } catch (e) {
          throw e;
        }
      }
      rendered = instance.render();
    }

    if (rendered === null || rendered === false) {
      rendered = {
        vtype: 0,
        type: "#comment",
        text: "empty"
      };
    }

    vnode._instance = instance;
    instance.__current = vnode;

    if (parentInstance) {
      instance.__parentInstance = parentInstance;
    }

    if (instance.componentWillMount) {
      instance.componentWillMount();
    }

    if (instance.getChildContext) {
      data.context = getChildContext(instance, parentContext); //将context往下传
    }

    return toVnode(rendered, data, instance);
  } else {
    return vnode;
  }
}

//==================实现序列化文本节点与属性值的相关方法=============

const matchHtmlRegExp = /["'&<>]/;

function escapeHtml(string) {
  let str = "" + string;
  let match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  let escape;
  let html = "";
  let index = 0;
  let lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
    case 34:
      // "
      escape = "&quot;";
      break;
    case 38:
      // &
      escape = "&amp;";
      break;
    case 39:
      // '
      escape = "&#x27;"; // modified from escape-html; used to be '&#39'
      break;
    case 60:
      // <
      escape = "&lt;";
      break;
    case 62:
      // >
      escape = "&gt;";
      break;
    default:
      continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
}

function encodeEntities(text) {
  if (typeof text === "boolean" || typeof text === "number") {
    return "" + text;
  }
  return escapeHtml(text);
}

function encodeAttributes(value) {
  return "\"" + encodeEntities(value) + "\"";
}

function renderToString(vnode, context) {
  return renderVNode(vnode, context || {});
}

function renderToNodeStream(vnode, context) {
  const rs = new Readable();
  const it = renderVNodeGen(vnode, context || {});

  rs._read = function() {
    const v = it.next();

    if (!v.done) {
      rs.push(v.value.toString());
    } else {
      rs.push(null);
    }
  };

  return rs;
}

export default {
  renderToString,
  renderToStaticMarkup: renderToString,
  renderToNodeStream,
  renderToStaticNodeStream: renderToNodeStream
};
