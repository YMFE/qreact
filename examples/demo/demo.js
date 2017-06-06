/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(1);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(92);

	var _header = __webpack_require__(148);

	var _header2 = _interopRequireDefault(_header);

	var _basic = __webpack_require__(149);

	var _basic2 = _interopRequireDefault(_basic);

	var _Event = __webpack_require__(150);

	var _Event2 = _interopRequireDefault(_Event);

	var _index = __webpack_require__(151);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var basic = [{ name: 'basic', src: '/basic', component: _basic2.default }, { name: 'event', src: '/event', component: _Event2.default }];

	var CataLog = function (_Component) {
	    _inherits(CataLog, _Component);

	    function CataLog() {
	        _classCallCheck(this, CataLog);

	        return _possibleConstructorReturn(this, (CataLog.__proto__ || Object.getPrototypeOf(CataLog)).apply(this, arguments));
	    }

	    _createClass(CataLog, [{
	        key: 'render',
	        value: function render() {
	            var s = basic.map(function (item, index) {
	                return _react2.default.createElement(
	                    _reactRouter.Link,
	                    { className: 'link', key: item.name, to: item.src },
	                    item.name
	                );
	            });

	            console.log(s);
	            return _react2.default.createElement(
	                'div',
	                { className: 'page' },
	                _react2.default.createElement(_header2.default, { text: 'demo' }),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'page-body' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'section-title' },
	                        '\u57FA\u7840'
	                    ),
	                    basic.map(function (item, index) {
	                        return _react2.default.createElement(
	                            _reactRouter.Link,
	                            { className: 'link', key: item.name, to: item.src },
	                            item.name
	                        );
	                    })
	                )
	            );
	        }
	    }]);

	    return CataLog;
	}(_react.Component);

	var Demo = function (_Component2) {
	    _inherits(Demo, _Component2);

	    function Demo() {
	        _classCallCheck(this, Demo);

	        return _possibleConstructorReturn(this, (Demo.__proto__ || Object.getPrototypeOf(Demo)).apply(this, arguments));
	    }

	    _createClass(Demo, [{
	        key: 'render',
	        value: function render() {

	            var basicCatalog = basic.map(function (item, index) {
	                return _react2.default.createElement(_reactRouter.Route, { path: '/basic', key: 'basic', component: _basic2.default });
	            });
	            return _react2.default.createElement(
	                _reactRouter.Router,
	                { history: _reactRouter.hashHistory },
	                _react2.default.createElement(_reactRouter.Route, { path: '/', component: CataLog }),
	                _react2.default.createElement(_reactRouter.Route, { path: '/basic', component: _basic2.default }),
	                _react2.default.createElement(_reactRouter.Route, { path: '/event', component: _Event2.default })
	            );
	        }
	    }]);

	    return Demo;
	}(_react.Component);

		_reactDom2.default.render(_react2.default.createElement(Demo, null), document.getElementById('example'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _objectAssign = __webpack_require__(3);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _proptypes = __webpack_require__(4);

	var _h = __webpack_require__(5);

	var _component = __webpack_require__(33);

	var _render = __webpack_require__(43);

	var _renderQueue = __webpack_require__(36);

	var _options = __webpack_require__(7);

	var _options2 = _interopRequireDefault(_options);

	var _util = __webpack_require__(10);

	var _ReactDefaultInjection = __webpack_require__(44);

	var _ReactDefaultInjection2 = _interopRequireDefault(_ReactDefaultInjection);

	var _ReactEventBridge = __webpack_require__(11);

	var _ReactEventBridge2 = _interopRequireDefault(_ReactEventBridge);

	var _ReactAdapter = __webpack_require__(83);

	var _ReactAdapter2 = _interopRequireDefault(_ReactAdapter);

	__webpack_require__(90);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // polly fill


	Object.assign = _objectAssign2.default;
	//重写render,cloneElement, h, Component, options
	//import { render as preactRender, cloneElement as preactCloneElement, h, Component as PreactComponent, options } from 'preact';

	//这个不重写， 但重写它依赖的VNode
	//Component将作为新的此文件定主的的Component的基类
	//会重写里面的event, vnode


	var version = '15.1.0'; // trick libraries to think we are react

	var ELEMENTS = 'a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan'.split(' ');

	var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

	// don't autobind these methods since they already have guaranteed context.
	var AUTOBIND_BLACKLIST = {
	    constructor: 1,
	    render: 1,
	    shouldComponentUpdate: 1,
	    componentWillReceiveProps: 1,
	    componentWillUpdate: 1,
	    componentDidUpdate: 1,
	    componentWillMount: 1,
	    componentDidMount: 1,
	    componentWillUnmount: 1,
	    componentDidUnmount: 1
	};

	var CAMEL_PROPS = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vert|word|writing|x)[A-Z]/;

	var BYPASS_HOOK = {};

	/*global process*/
	var DEV = typeof process === 'undefined' || !process.env || process.env.NODE_ENV !== 'production';

	// a component that renders nothing. Used to replace components for unmountComponentAtNode.
	var EmptyComponent = function EmptyComponent() {
	    return null;
	};

	var VNode = (0, _h.h)('').constructor;

	VNode.prototype.$$typeof = REACT_ELEMENT_TYPE;
	VNode.prototype.preactCompatUpgraded = false;
	VNode.prototype.preactCompatNormalized = false;
	Object.defineProperty(VNode.prototype, 'type', {
	    get: function get() {
	        return this.nodeName;
	    },
	    set: function set(v) {
	        this.nodeName = v;
	    },

	    configurable: true
	});

	Object.defineProperty(VNode.prototype, 'props', {
	    get: function get() {
	        return this.attributes;
	    },
	    set: function set(v) {
	        this.attributes = v;
	    },

	    configurable: true
	});

	var oldEventHook = _options2.default.event;
	_options2.default.event = function (e) {
	    e.persist = Object;
	    if (oldEventHook) e = oldEventHook(e);
	    return e;
	};

	//重写vnode方法
	var oldVnodeHook = _options2.default.vnode;
	_options2.default.vnode = function (vnode) {
	    if (!vnode.preactCompatUpgraded) {
	        vnode.preactCompatUpgraded = true;

	        var tag = vnode.nodeName,
	            attrs = vnode.attributes;

	        if (!attrs) attrs = vnode.attributes = {};

	        if (typeof tag === 'function') {
	            if (tag[COMPONENT_WRAPPER_KEY] === true || tag.prototype && 'isReactComponent' in tag.prototype) {
	                if (!vnode.preactCompatNormalized) {
	                    normalizeVNode(vnode);
	                }
	                handleComponentVNode(vnode);
	            }
	        } else if (attrs) {
	            handleElementVNode(vnode, attrs);
	        }
	    }
	    if (oldVnodeHook) oldVnodeHook(vnode);
	};

	function handleComponentVNode(vnode) {
	    var tag = vnode.nodeName,
	        a = vnode.attributes;

	    vnode.attributes = {};
	    if (tag.defaultProps) extend(vnode.attributes, tag.defaultProps);
	    if (a) extend(vnode.attributes, a);
	    a = vnode.attributes;

	    if (vnode.children && !vnode.children.length) vnode.children = undefined;

	    if (vnode.children) a.children = vnode.children;
	}

	function handleElementVNode(vnode, a) {
	    var shouldSanitize = void 0,
	        attrs = void 0,
	        i = void 0;
	    if (a) {
	        for (i in a) {
	            if (shouldSanitize = CAMEL_PROPS.test(i)) break;
	        }if (shouldSanitize) {
	            attrs = vnode.attributes = {};
	            for (i in a) {
	                if (a.hasOwnProperty(i)) {
	                    attrs[CAMEL_PROPS.test(i) ? i.replace(/([A-Z0-9])/, '-$1').toLowerCase() : i] = a[i];
	                }
	            }
	        }
	    }
	}

	// proxy render() since React returns a Component reference.
	function render(vnode, parent, callback) {
	    var prev = parent && parent._preactCompatRendered;

	    // ignore impossible previous renders
	    if (prev && prev.parentNode !== parent) prev = null;

	    // default to first Element child
	    if (!prev) prev = parent.children[0];

	    // remove unaffected siblings
	    for (var i = parent.childNodes.length; i--;) {
	        if (parent.childNodes[i] !== prev) {
	            parent.removeChild(parent.childNodes[i]);
	        }
	    }

	    var out = (0, _render.render)(vnode, parent, prev);
	    if (parent) parent._preactCompatRendered = out;
	    if (typeof callback === 'function') callback();
	    return out && out._component || out.base;
	}

	var ContextProvider = function () {
	    function ContextProvider() {
	        _classCallCheck(this, ContextProvider);
	    }

	    ContextProvider.prototype.getChildContext = function getChildContext() {
	        return this.props.context;
	    };

	    ContextProvider.prototype.render = function render(props) {
	        return props.children[0];
	    };

	    return ContextProvider;
	}();

	function renderSubtreeIntoContainer(parentComponent, vnode, container, callback) {
	    var wrap = (0, _h.h)(ContextProvider, { context: parentComponent.context }, vnode);
	    var c = render(wrap, container);
	    if (callback) callback(c);
	    return c;
	}

	function unmountComponentAtNode(container) {
	    var existing = container._preactCompatRendered;
	    if (existing && existing.parentNode === container) {
	        (0, _render.render)((0, _h.h)(EmptyComponent), container, existing);
	        return true;
	    }
	    return false;
	}

	var ARR = [];

	// This API is completely unnecessary for Preact, so it's basically passthrough.
	var Children = {
	    map: function map(children, fn, ctx) {
	        if (children == null) return null;
	        children = Children.toArray(children);
	        if (ctx && ctx !== children) fn = fn.bind(ctx);
	        return children.map(fn);
	    },
	    forEach: function forEach(children, fn, ctx) {
	        if (children == null) return null;
	        children = Children.toArray(children);
	        if (ctx && ctx !== children) fn = fn.bind(ctx);
	        children.forEach(fn);
	    },
	    count: function count(children) {
	        return children && children.length || 0;
	    },
	    only: function only(children) {
	        children = Children.toArray(children);
	        if (children.length !== 1) throw new Error('Children.only() expects only one child.');
	        return children[0];
	    },
	    toArray: function toArray(children) {
	        return Array.isArray && Array.isArray(children) ? children : ARR.concat(children);
	    }
	};

	/** Track current render() component for ref assignment */
	var currentComponent = void 0;

	function createFactory(type) {
	    return createElement.bind(null, type);
	}

	var DOM = {};
	for (var i = ELEMENTS.length; i--;) {
	    DOM[ELEMENTS[i]] = createFactory(ELEMENTS[i]);
	}

	function upgradeToVNodes(arr, offset) {
	    for (var _i = offset || 0; _i < arr.length; _i++) {
	        var obj = arr[_i];
	        if (Array.isArray(obj)) {
	            upgradeToVNodes(obj);
	        } else if (obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && !isValidElement(obj) && (obj.props && obj.type || obj.attributes && obj.nodeName || obj.children)) {
	            arr[_i] = createElement(obj.type || obj.nodeName, obj.props || obj.attributes, obj.children);
	        }
	    }
	}

	function isStatelessComponent(c) {
	    return typeof c === 'function' && !(c.prototype && c.prototype.render);
	}

	var COMPONENT_WRAPPER_KEY = typeof Symbol !== 'undefined' ? Symbol.for('__preactCompatWrapper') : '__preactCompatWrapper';

	// wraps stateless functional components in a PropTypes validator
	function wrapStatelessComponent(WrappedComponent) {
	    return createClass({
	        displayName: WrappedComponent.displayName || WrappedComponent.name,
	        render: function render(props, state, context) {
	            return WrappedComponent(props, context);
	        }
	    });
	}

	function statelessComponentHook(Ctor) {
	    var Wrapped = Ctor[COMPONENT_WRAPPER_KEY];
	    if (Wrapped) return Wrapped === true ? Ctor : Wrapped;

	    Wrapped = wrapStatelessComponent(Ctor);

	    Object.defineProperty(Wrapped, COMPONENT_WRAPPER_KEY, { configurable: true, value: true });
	    Wrapped.displayName = Ctor.displayName;
	    Wrapped.propTypes = Ctor.propTypes;
	    Wrapped.defaultProps = Ctor.defaultProps;

	    Object.defineProperty(Ctor, COMPONENT_WRAPPER_KEY, { configurable: true, value: Wrapped });

	    return Wrapped;
	}

	function createElement() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	    }

	    upgradeToVNodes(args, 2);
	    return normalizeVNode(_h.h.apply(undefined, args));
	}

	function normalizeVNode(vnode) {
	    vnode.preactCompatNormalized = true;

	    applyClassName(vnode);

	    if (isStatelessComponent(vnode.nodeName)) {
	        vnode.nodeName = statelessComponentHook(vnode.nodeName);
	    }

	    var ref = vnode.attributes.ref,
	        type = ref && (typeof ref === 'undefined' ? 'undefined' : _typeof(ref));
	    if (currentComponent && (type === 'string' || type === 'number')) {
	        vnode.attributes.ref = createStringRefProxy(ref, currentComponent);
	    }

	    applyEventNormalization(vnode);

	    return vnode;
	}

	//不使用外面的cloneElement,使用这里的
	function cloneElement(element) {
	    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    if (!isValidElement(element)) return element;
	    var elementProps = element.attributes || element.props || {};
	    var newProps = extend((0, _util.clone)(elementProps), props);
	    if (arguments.length > 2) {
	        var c = [].slice.call(arguments, 2);
	    } else {
	        var c = element.children || props.children;
	        if (!Array.isArray(c)) {
	            c = [c];
	        }
	    }

	    var node = (0, _h.h)(element.nodeName || element.type, newProps, c);
	    return normalizeVNode(node);
	}

	function isValidElement(element) {
	    return element && (element instanceof VNode || element.$$typeof === REACT_ELEMENT_TYPE);
	}

	function createStringRefProxy(name, component) {
	    return component._refProxies[name] || (component._refProxies[name] = function (resolved) {
	        if (component && component.refs) {
	            component.refs[name] = resolved;
	            if (resolved === null) {
	                delete component._refProxies[name];
	                component = null;
	            }
	        }
	    });
	}

	function applyEventNormalization(_ref) {
	    var nodeName = _ref.nodeName,
	        attributes = _ref.attributes;

	    if (!attributes || typeof nodeName !== 'string') return;
	    var props = {};
	    for (var _i2 in attributes) {
	        props[_i2.toLowerCase()] = _i2;
	    }
	    if (props.ondoubleclick) {
	        attributes.ondblclick = attributes[props.ondoubleclick];
	        delete attributes[props.ondoubleclick];
	    }
	    if (props.onchange) {
	        nodeName = nodeName.toLowerCase();
	        var attr = nodeName === 'input' && String(attributes.type).toLowerCase() === 'checkbox' ? 'onclick' : 'oninput',
	            normalized = props[attr] || attr;
	        if (!attributes[normalized]) {
	            attributes[normalized] = multihook([attributes[props[attr]], attributes[props.onchange]]);
	            delete attributes[props.onchange];
	        }
	    }
	}

	function applyClassName(_ref2) {
	    var attributes = _ref2.attributes;

	    if (!attributes) return;
	    var cl = attributes.className || attributes.class;
	    if (cl) attributes.className = cl;
	}

	/** 
	 * util.js的extend是这样的
	 function extend(obj, props) {
		if (props) {
			for (let i in props) obj[i] = props[i];
		}
		return obj;
	}
	**/
	function extend(base, props) {
	    for (var key in props) {
	        //if (props.hasOwnProperty(key)) {
	        base[key] = props[key];
	        //}
	    }
	    return base;
	}

	function shallowDiffers(a, b) {
	    for (var _i3 in a) {
	        if (!(_i3 in b)) return true;
	    }for (var _i4 in b) {
	        if (a[_i4] !== b[_i4]) return true;
	    }return false;
	}

	var findDOMNode = function findDOMNode(component) {
	    return component && component.base || component;
	};

	function F() {}

	function createClass(obj) {
	    function cl(props, context) {
	        bindAll(this);
	        Component.call(this, props, context, BYPASS_HOOK);
	        newComponentHook.call(this, props, context);
	    }

	    obj = extend({ constructor: cl }, obj);

	    // We need to apply mixins here so that getDefaultProps is correctly mixed
	    if (obj.mixins) {
	        applyMixins(obj, collateMixins(obj.mixins));
	    }
	    if (obj.statics) {
	        extend(cl, obj.statics);
	    }
	    if (obj.propTypes) {
	        cl.propTypes = obj.propTypes;
	    }
	    if (obj.defaultProps) {
	        cl.defaultProps = obj.defaultProps;
	    }
	    if (obj.getDefaultProps) {
	        cl.defaultProps = obj.getDefaultProps();
	    }

	    F.prototype = Component.prototype;
	    cl.prototype = extend(new F(), obj);

	    cl.displayName = obj.displayName || 'Component';

	    return cl;
	}

	// Flatten an Array of mixins to a map of method name to mixin implementations
	function collateMixins(mixins) {
	    var keyed = {};
	    for (var _i5 = 0; _i5 < mixins.length; _i5++) {
	        var mixin = mixins[_i5];
	        for (var key in mixin) {
	            if (mixin.hasOwnProperty(key) && typeof mixin[key] === 'function') {
	                (keyed[key] || (keyed[key] = [])).push(mixin[key]);
	            }
	        }
	    }
	    return keyed;
	}

	// apply a mapping of Arrays of mixin methods to a component prototype
	function applyMixins(proto, mixins) {
	    for (var key in mixins) {
	        if (mixins.hasOwnProperty(key)) {
	            var hooks = proto[key] ? mixins[key].concat(proto[key]) : mixins[key];
	            if (key === "getDefaultProps" || key === "getInitialState" || key === "getChildContext") {
	                proto[key] = multihook(hooks, mergeNoDupes);
	            } else {
	                proto[key] = multihook(hooks);
	            }
	        }
	    }
	}

	function bindAll(ctx) {
	    for (var _i6 in ctx) {
	        var v = ctx[_i6];
	        if (typeof v === 'function' && !v.__bound && !AUTOBIND_BLACKLIST.hasOwnProperty(_i6)) {
	            (ctx[_i6] = v.bind(ctx)).__bound = true;
	        }
	    }
	}

	function callMethod(ctx, m, args) {
	    if (typeof m === 'string') {
	        m = ctx.constructor.prototype[m];
	    }
	    if (typeof m === 'function') {
	        return m.apply(ctx, args);
	    }
	}

	function multihook(hooks, mergeFn) {
	    return function () {
	        var ret = void 0;
	        for (var _i7 = 0; _i7 < hooks.length; _i7++) {
	            var r = callMethod(this, hooks[_i7], arguments);

	            if (mergeFn) {
	                ret = mergeFn(ret, r);
	            } else if (typeof r !== 'undefined') ret = r;
	        }
	        return ret;
	    };
	}

	// Used for lifecycle hooks like getInitialState to merge the return values
	function mergeNoDupes(previous, current) {
	    if (current != null) {
	        if ((typeof current === 'undefined' ? 'undefined' : _typeof(current)) !== 'object') throw new Error('Expected return value to be an object or null.');
	        if (!previous) previous = {};

	        for (var key in current) {
	            if (current.hasOwnProperty(key)) {
	                if (previous.hasOwnProperty(key)) throw new Error('Duplicate key "' + key + '" found when merging return value.');
	                previous[key] = current[key];
	            }
	        }
	    }
	    return previous;
	}

	function newComponentHook(props, context) {
	    propsHook.call(this, props, context);
	    this.componentWillReceiveProps = multihook([propsHook, this.componentWillReceiveProps || 'componentWillReceiveProps']);
	    this.render = multihook([propsHook, beforeRender, this.render || 'render', afterRender]);
	}

	function propsHook(props, context) {
	    if (!props) return;

	    // React annoyingly special-cases single children, and some react components are ridiculously strict about this.
	    var c = props.children;
	    if (c && Array.isArray(c) && c.length === 1) {
	        props.children = c[0];

	        // but its totally still going to be an Array.
	        if (props.children && _typeof(props.children) === 'object') {
	            props.children.length = 1;
	            props.children[0] = props.children;
	        }
	    }

	    // add proptype checking
	    if (false) {
	        var ctor = typeof this === 'function' ? this : this.constructor,
	            propTypes = this.propTypes || ctor.propTypes;
	        if (propTypes) {
	            for (var prop in propTypes) {
	                if (propTypes.hasOwnProperty(prop) && typeof propTypes[prop] === 'function') {
	                    var displayName = this.displayName || ctor.name;
	                    var err = propTypes[prop](props, prop, displayName, 'prop');
	                    if (err) console.log(err, 'propTypes验证不通过');
	                }
	            }
	        }
	    }
	}

	function beforeRender(props) {
	    currentComponent = this;
	}

	function afterRender() {
	    if (currentComponent === this) {
	        currentComponent = null;
	    }
	}

	function Component(props, context, opts) {
	    _component.Component.call(this, props, context);
	    if (this.getInitialState) this.state = this.getInitialState();
	    this.refs = {};
	    this._refProxies = {};
	    if (opts !== BYPASS_HOOK) {
	        newComponentHook.call(this, props, context);
	    }
	}
	Component.prototype = new _component.Component();
	extend(Component.prototype, {
	    constructor: Component,

	    isReactComponent: {},

	    replaceState: function replaceState(state, callback) {
	        this.setState(state, callback);
	        for (var _i8 in this.state) {
	            if (!(_i8 in state)) {
	                delete this.state[_i8];
	            }
	        }
	    },
	    getDOMNode: function getDOMNode() {
	        return this.base;
	    },
	    isMounted: function isMounted() {
	        return !!this.base;
	    }
	});

	function PureComponent(props, context) {
	    Component.call(this, props, context);
	}
	PureComponent.prototype = new Component({}, {}, BYPASS_HOOK);
	PureComponent.prototype.shouldComponentUpdate = function (props, state) {
	    return shallowDiffers(this.props, props) || shallowDiffers(this.state, state);
	};

	// actually proptypes target in src/proptypes/index.js
	// ReactMobile.PropTypes = require('proptypes')

	var ReactMobile = {
	    version: version,
	    DOM: DOM,
	    PropTypes: _proptypes.PropTypes,
	    Children: Children,
	    render: render,
	    createClass: createClass,
	    createFactory: createFactory,
	    createElement: createElement,
	    cloneElement: cloneElement,
	    isValidElement: isValidElement,
	    findDOMNode: findDOMNode,
	    unmountComponentAtNode: unmountComponentAtNode,
	    Component: Component,
	    PureComponent: PureComponent,
	    unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer
	};

	_ReactAdapter2.default.adapt(ReactMobile);
	// 为什么要覆盖其他的变量
	'ReactMobile ReactDOMMobile React ReactDOM preactCompat preact'.split(' ').forEach(function (key) {
	    !(key in window) && (window[key] = ReactMobile);
	});

	_ReactDefaultInjection2.default.inject();

	// export default ReactMobile;
	module.exports = ReactMobile;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var PropTypes = exports.PropTypes = {};
	function noop() {
	    return PropTypes;
	}
	'array bool func number object string any arrayOf element instanceOf node objectOf oneOf oneOfType shape'.split(' ').forEach(function (f) {
	    PropTypes[f] = noop;
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.h = h;

	var _vnode = __webpack_require__(6);

	var _options = __webpack_require__(7);

	var _options2 = _interopRequireDefault(_options);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var stack = [];

	var EMPTY_CHILDREN = [];

	/** JSX/hyperscript reviver
	*	Benchmarks: https://esbench.com/bench/57ee8f8e330ab09900a1a1a0
	 *	@see http://jasonformat.com/wtf-is-jsx
	 *	@public
	 *  @example
	 *  /** @jsx h *\/
	 *  import { render, h } from 'preact';
	 *  render(<span>foo</span>, document.body);
	 */
	function h(nodeName, attributes) {
		var children = void 0,
		    lastSimple = void 0,
		    child = void 0,
		    simple = void 0,
		    i = void 0;
		// 收集所有的 child
		for (i = arguments.length; i-- > 2;) {
			stack.push(arguments[i]);
		}
		// 从 props 中收集 children
		if (attributes && attributes.children) {
			if (!stack.length) stack.push(attributes.children);
			delete attributes.children;
		}
		while (stack.length) {
			// 处理 child 是数组的情况
			if ((child = stack.pop()) instanceof Array) {
				for (i = child.length; i--;) {
					stack.push(child[i]);
				}
			} else if (child != null && child !== true && child !== false) {
				if (typeof child == 'number') child = String(child);
				simple = typeof child == 'string';
				// 如果两个 children 是字符串，就合并字符串
				if (simple && lastSimple) {
					children[children.length - 1] += child;
				} else {
					(children || (children = [])).push(child);
					lastSimple = simple;
				}
			}
		}

		// 创建虚拟 Node
		// VNode 是一个简单对象，包含参数中的这三个属性，和一个 key 属性
		var p = new _vnode.VNode(nodeName, attributes || undefined, children || EMPTY_CHILDREN);

		// if a "vnode hook" is defined, pass every created VNode to it
		if (_options2.default.vnode) _options2.default.vnode(p);

		return p;
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.VNode = VNode;
	/** Virtual DOM Node */
	function VNode(nodeName, attributes, children) {
		/** @type {string|function} */
		this.nodeName = nodeName;

		/** @type {object<string>|undefined} */
		this.attributes = attributes;

		/** @type {array<VNode>|undefined} */
		this.children = children;

		/** Reference to the given key. */
		this.key = attributes && attributes.key;
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _processStyle = __webpack_require__(8);

	var _processStyle2 = _interopRequireDefault(_processStyle);

	var _handleEvent = __webpack_require__(32);

	var _handleEvent2 = _interopRequireDefault(_handleEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	 * @private
	 * @description ensure each vnode has a stable and unique key
	 */
	function recomputeKey(children) {
	    children = children || [];
	    var keyMap = {},
	        outerKey = 0,
	        keyArr = [];

	    // set key and reset keyMap, keyArr
	    function setKey() {
	        keyArr.splice(0).forEach(function (info) {
	            info[2].key = info[0].key = '.' + outerKey + ':$' + String(info[1]).replace(/^\.[\S]+:\$/g, '');
	        });
	        keyMap = {};
	    }
	    children.forEach(function (vnode) {
	        var props = vnode && vnode.attributes || {},
	            key = props.key,
	            invalidKey = key === undefined && ++outerKey; // has no key & outerKey > 0
	        // duplicate key
	        /* // better to understand
	        if (key in keyMap){
	            outerKey++;
	            setKey();
	        }
	        */
	        if (key in keyMap) ++outerKey && setKey();
	        // vnode has no key
	        if (invalidKey) {
	            setKey();
	            // props, origin key, vnode
	        } else {
	            keyArr.push([props, keyMap[key] = key, vnode]);
	        }
	    });
	    // last !! outerKey++ NOT ++outerKey
	    outerKey++ && setKey();
	}

	/** Global options
	 *	@public
	 *	@namespace options {Object}
	 */
	exports.default = {

	    /** If `true`, `prop` changes trigger synchronous component updates.
	     *	@name syncComponentUpdates
	     *	@type Boolean
	     *	@default true
	     */
	    //syncComponentUpdates: true,

	    /** Processes all created VNodes.
	     *	@param {VNode} vnode	A newly-created VNode to normalize/process
	     */
	    vnode: function vnode(_vnode) {
	        // fork add to support react event sys
	        _vnode._hostParent = null;
	        _vnode._hostNode = null;
	        _vnode._rootNodeID = null;
	        recomputeKey(_vnode.children);
	    },


	    /** Hook for style process */
	    processStyle: _processStyle2.default,

	    /** Hook for event handle */
	    handleEvent: _handleEvent2.default

	    /** Hook invoked after a component is mounted. */
	    // afterMount(component) { }

	    /** Hook invoked after the DOM is updated with a component's latest render. */
	    // afterUpdate(component) { }

	    /** Hook invoked immediately before a component is unmounted. */
	    // beforeUnmount(component) { }
		};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _constants = __webpack_require__(9);

	var _util = __webpack_require__(10);

	// m-start
	// 设置style
	function processStyle(node, name, old, value) {
		// value是string的，直接赋值 ？ react是怎么处理的？
		if (!value || (0, _util.isString)(value) || (0, _util.isString)(old)) {
			node.style.cssText = value || '';
		}
		// value是对象的
		if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
			// todo 判断styles.hasOwnProperty?
			//如果上一个style存在且为对象的，循环，有属性是上次有而此次style没有的，置空
			if (!(0, _util.isString)(old)) {
				for (var i in old) {
					if (!(i in value)) node.style[i] = '';
				}
			}
			// 添加css
			// todo 增加默认的样式等等
			for (var _i in value) {
				if (!value.hasOwnProperty(_i)) {
					continue;
				}
				var styleValue = transStyleValue(_i, value[_i]);
				// mobile不用考虑IE8，直接转换为cssFloat，也不用做细拆分
				if (_i === 'float') {
					_i = 'cssFloat';
				}
				node.style[_i] = styleValue || '';
			}
		}
	}

	function transStyleValue(name, value) {
		// 考虑空值，布尔值等
		if (value == null || typeof value === 'boolean' || value === '') {
			return '';
		}

		// 只接受正值的呢？

		// 转换单位,更细致的转换方法，包括borderWidth:'1'也会转化为1px，而width:0 就不用转化了
		if (isNaN(value) || value === 0 || _constants.NON_DIMENSION_PROPS.hasOwnProperty(name) && _constants.NON_DIMENSION_PROPS[name]) {
			return '' + value;
		}
		if (typeof value === 'string') {
			value = value.trim();
		}
		return value + 'px';
	}
	// m-end


	exports.default = processStyle;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	// render modes

	var NO_RENDER = exports.NO_RENDER = 0;
	var SYNC_RENDER = exports.SYNC_RENDER = 1;
	var FORCE_RENDER = exports.FORCE_RENDER = 2;
	var ASYNC_RENDER = exports.ASYNC_RENDER = 3;

	var EMPTY = exports.EMPTY = {};

	var ATTR_KEY = exports.ATTR_KEY = typeof Symbol !== 'undefined' ? Symbol.for('preactattr') : '__preactattr_';

	// m-start
	// 对照react补齐isUnitlessNumber的属性
	var not_dimension_props_without_profixes = {
		animationIterationCount: 1,
		borderImageOutset: 1,
		borderImageSlice: 1,
		borderImageWidth: 1,
		boxFlex: 1,
		boxFlexGroup: 1,
		boxOrdinalGroup: 1,
		columnCount: 1,
		fillOpacity: 1,
		flex: 1,
		flexGrow: 1,
		flexPositive: 1,
		flexShrink: 1,
		flexNegative: 1,
		flexOrder: 1,
		gridRow: 1,
		gridColumn: 1,
		fontWeight: 1,
		lineClamp: 1,
		lineHeight: 1,
		opacity: 1,
		order: 1,
		orphans: 1,
		strokeOpacity: 1,
		tabSize: 1,
		widows: 1,
		zIndex: 1,
		zoom: 1
		// fillOpacity: 1,
		// floodOpacity: 1,
		// stopOpacity: 1,
		// strokeDasharray: 1,
		// strokeDashoffset: 1,
		// strokeMiterlimit: 1,
		// strokeOpacity: 1,
		// strokeWidth: 1
	};

	// 补齐前缀
	function prefixKey(prefix, key) {
		return prefix + key.charAt(0).toUpperCase() + key.substring(1);
	}

	var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

	Object.keys(not_dimension_props_without_profixes).forEach(function (prop) {
		prefixes.forEach(function (prefix) {
			not_dimension_props_without_profixes[prefixKey(prefix, prop)] = 1;
		});
	});

	var NON_DIMENSION_PROPS = exports.NON_DIMENSION_PROPS = not_dimension_props_without_profixes;
	// m-end


	// DOM event types that do not bubble and should be attached via useCapture
	var NON_BUBBLING_EVENTS = exports.NON_BUBBLING_EVENTS = { blur: 1, error: 1, focus: 1, load: 1, resize: 1, scroll: 1 };

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.defer = exports.toLowerCase = undefined;
	exports.loseup = loseup;
	exports.recycle = recycle;
	exports.resetNode = resetNode;
	exports.extend = extend;
	exports.clone = clone;
	exports.delve = delve;
	exports.isFunction = isFunction;
	exports.isString = isString;
	exports.hashToClassName = hashToClassName;

	var _ReactEventBridge = __webpack_require__(11);

	var _ReactEventBridge2 = _interopRequireDefault(_ReactEventBridge);

	var _options = __webpack_require__(7);

	var _options2 = _interopRequireDefault(_options);

	var _constants = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/** Copy own-properties from `props` onto `obj`.
	 *	@returns obj
	 *	@private
	 */

	/* global ReactEventBridge:false, internalInstanceKey:false */

	// m-start
	function getInternalInstanceKey() {
		if (typeof internalInstanceKey !== 'undefined') {
			return internalInstanceKey;
		}
	}

	function loseup(inst, node) {
		var key = getInternalInstanceKey();
		if (key) {
			_ReactEventBridge2.default.precacheNode(inst, node);
		}
	}

	function recycle(node) {
		var key = getInternalInstanceKey();
		if (node[key]) {
			_ReactEventBridge2.default.recycle(node, key);
		}
	}

	function resetNode(node) {
		if (node && node.style) {
			// 这里的 node[ATTR_KEY] 有没有可能为空

			_options2.default.processStyle(node, 'name', '', node[_constants.ATTR_KEY] ? node[_constants.ATTR_KEY].style || '' : ''); // reset style 
			// node.className = '' // only reset style
		}
	}
	// m-end

	function extend(obj, props) {
		if (props) {
			for (var i in props) {
				obj[i] = props[i];
			}
		}
		return obj;
	}

	/** Fast clone. Note: does not filter out non-own properties.
	 *	@see https://esbench.com/bench/56baa34f45df6895002e03b6
	 */
	function clone(obj) {
		return extend({}, obj);
	}

	/** Get a deep property value from the given object, expressed in dot-notation.
	 *	@private
	 */
	function delve(obj, key) {
		for (var p = key.split('.'), i = 0; i < p.length && obj; i++) {
			obj = obj[p[i]];
		}
		return obj;
	}

	/** @private is the given object a Function? */
	function isFunction(obj) {
		return 'function' === typeof obj;
	}

	/** @private is the given object a String? */
	function isString(obj) {
		return 'string' === typeof obj;
	}

	/** Convert a hashmap of CSS classes to a space-delimited className string
	 *	@private
	 */
	function hashToClassName(c) {
		var str = '';
		for (var prop in c) {
			if (c[prop]) {
				if (str) str += ' ';
				str += prop;
			}
		}
		return str;
	}

	/** Just a memoized String#toLowerCase */
	var lcCache = {};
	var toLowerCase = exports.toLowerCase = function toLowerCase(s) {
		return lcCache[s] || (lcCache[s] = s.toLowerCase());
	};

	/** Call a function asynchronously, as soon as possible.
	 *	@param {Function} callback
	 */
	var resolved = typeof Promise !== 'undefined' && Promise.resolve();
	var defer = exports.defer = resolved ? function (f) {
		resolved.then(f);
		} : setTimeout;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _ReactBrowserEventEmitter = __webpack_require__(12);

	var _ReactBrowserEventEmitter2 = _interopRequireDefault(_ReactBrowserEventEmitter);

	var _EventPluginHub = __webpack_require__(19);

	var _EventPluginHub2 = _interopRequireDefault(_EventPluginHub);

	var _ReactDOMComponentTree = __webpack_require__(30);

	var _ReactDOMComponentTree2 = _interopRequireDefault(_ReactDOMComponentTree);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ReactEventBridge = function ReactEventBridge(node, name, listener, inst) {
	    name = 'on' + name.substring(2).replace(/^[a-z]/g, function (a) {
	        return a.toUpperCase();
	    });
	    if (name === 'onLayout') return;
	    _ReactBrowserEventEmitter2.default.listenTo(name, document);
	    ReactEventBridge.precacheNode(inst, node);
	    if (listener) {
	        _EventPluginHub2.default.putListener(inst, name, listener);
	    } else {
	        _EventPluginHub2.default.deleteListener(inst, name);
	    }
	};

	var _rootNodeID = 0;
	ReactEventBridge.precacheNode = function (inst, node) {
	    if (inst._rootNodeID === null) inst._rootNodeID = _rootNodeID++;
	    _ReactDOMComponentTree2.default.precacheNode(inst, node);
	};

	ReactEventBridge.recycle = function (node, key) {
	    var inst = node[key];
	    if (inst) {
	        node[key] = node[key]._hostNode = node[key]._hostParent = null;
	        _EventPluginHub2.default.deleteAllListeners(inst);
	    }
	};

	exports.default = ReactEventBridge;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactBrowserEventEmitter
	 */

	'use strict';

	exports.__esModule = true;

	var _objectAssign = __webpack_require__(3);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _EventConstants = __webpack_require__(13);

	var _EventConstants2 = _interopRequireDefault(_EventConstants);

	var _EventPluginRegistry = __webpack_require__(16);

	var _EventPluginRegistry2 = _interopRequireDefault(_EventPluginRegistry);

	var _ReactEventEmitterMixin = __webpack_require__(18);

	var _ReactEventEmitterMixin2 = _interopRequireDefault(_ReactEventEmitterMixin);

	var _ViewportMetrics = __webpack_require__(26);

	var _ViewportMetrics2 = _interopRequireDefault(_ViewportMetrics);

	var _getVendorPrefixedEventName = __webpack_require__(27);

	var _getVendorPrefixedEventName2 = _interopRequireDefault(_getVendorPrefixedEventName);

	var _isEventSupported = __webpack_require__(29);

	var _isEventSupported2 = _interopRequireDefault(_isEventSupported);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Summary of `ReactBrowserEventEmitter` event handling:
	 *
	 *  - Top-level delegation is used to trap most native browser events. This
	 *    may only occur in the main thread and is the responsibility of
	 *    ReactEventListener, which is injected and can therefore support pluggable
	 *    event sources. This is the only work that occurs in the main thread.
	 *
	 *  - We normalize and de-duplicate events to account for browser quirks. This
	 *    may be done in the worker thread.
	 *
	 *  - Forward these native events (with the associated top-level type used to
	 *    trap it) to `EventPluginHub`, which in turn will ask plugins if they want
	 *    to extract any synthetic events.
	 *
	 *  - The `EventPluginHub` will then process each event by annotating them with
	 *    "dispatches", a sequence of listeners and IDs that care about that event.
	 *
	 *  - The `EventPluginHub` then dispatches the events.
	 *
	 * Overview of React and the event system:
	 *
	 * +------------+    .
	 * |    DOM     |    .
	 * +------------+    .
	 *       |           .
	 *       v           .
	 * +------------+    .
	 * | ReactEvent |    .
	 * |  Listener  |    .
	 * +------------+    .                         +-----------+
	 *       |           .               +--------+|SimpleEvent|
	 *       |           .               |         |Plugin     |
	 * +-----|------+    .               v         +-----------+
	 * |     |      |    .    +--------------+                    +------------+
	 * |     +-----------.--->|EventPluginHub|                    |    Event   |
	 * |            |    .    |              |     +-----------+  | Propagators|
	 * | ReactEvent |    .    |              |     |TapEvent   |  |------------|
	 * |  Emitter   |    .    |              |<---+|Plugin     |  |other plugin|
	 * |            |    .    |              |     +-----------+  |  utilities |
	 * |     +-----------.--->|              |                    +------------+
	 * |     |      |    .    +--------------+
	 * +-----|------+    .                ^        +-----------+
	 *       |           .                |        |Enter/Leave|
	 *       +           .                +-------+|Plugin     |
	 * +-------------+   .                         +-----------+
	 * | application |   .
	 * |-------------|   .
	 * |             |   .
	 * |             |   .
	 * +-------------+   .
	 *                   .
	 *    React Core     .  General Purpose Event Plugin System
	 */

	var hasEventPageXY;
	var alreadyListeningTo = {};
	var isMonitoringScrollValue = false;
	var reactTopListenersCounter = 0;

	// For events like 'submit' which don't consistently bubble (which we trap at a
	// lower node than `document`), binding at `document` would cause duplicate
	// events so we don't include them here
	var topEventMapping = {
	    topAbort: 'abort',
	    topAnimationEnd: (0, _getVendorPrefixedEventName2.default)('animationend') || 'animationend',
	    topAnimationIteration: (0, _getVendorPrefixedEventName2.default)('animationiteration') || 'animationiteration',
	    topAnimationStart: (0, _getVendorPrefixedEventName2.default)('animationstart') || 'animationstart',
	    topBlur: 'blur',
	    topCanPlay: 'canplay',
	    topCanPlayThrough: 'canplaythrough',
	    topChange: 'change',
	    topClick: 'click',
	    topCompositionEnd: 'compositionend',
	    topCompositionStart: 'compositionstart',
	    topCompositionUpdate: 'compositionupdate',
	    topContextMenu: 'contextmenu',
	    topCopy: 'copy',
	    topCut: 'cut',
	    topDoubleClick: 'dblclick',
	    topDrag: 'drag',
	    topDragEnd: 'dragend',
	    topDragEnter: 'dragenter',
	    topDragExit: 'dragexit',
	    topDragLeave: 'dragleave',
	    topDragOver: 'dragover',
	    topDragStart: 'dragstart',
	    topDrop: 'drop',
	    topDurationChange: 'durationchange',
	    topEmptied: 'emptied',
	    topEncrypted: 'encrypted',
	    topEnded: 'ended',
	    topError: 'error',
	    topFocus: 'focus',
	    topInput: 'input',
	    topKeyDown: 'keydown',
	    topKeyPress: 'keypress',
	    topKeyUp: 'keyup',
	    topLoadedData: 'loadeddata',
	    topLoadedMetadata: 'loadedmetadata',
	    topLoadStart: 'loadstart',
	    topMouseDown: 'mousedown',
	    topMouseMove: 'mousemove',
	    topMouseOut: 'mouseout',
	    topMouseOver: 'mouseover',
	    topMouseUp: 'mouseup',
	    topPaste: 'paste',
	    topPause: 'pause',
	    topPlay: 'play',
	    topPlaying: 'playing',
	    topProgress: 'progress',
	    topRateChange: 'ratechange',
	    topScroll: 'scroll',
	    topSeeked: 'seeked',
	    topSeeking: 'seeking',
	    topSelectionChange: 'selectionchange',
	    topStalled: 'stalled',
	    topSuspend: 'suspend',
	    topTextInput: 'textInput',
	    topTimeUpdate: 'timeupdate',
	    topTouchCancel: 'touchcancel',
	    topTouchEnd: 'touchend',
	    topTouchMove: 'touchmove',
	    topTouchStart: 'touchstart',
	    topTransitionEnd: (0, _getVendorPrefixedEventName2.default)('transitionend') || 'transitionend',
	    topVolumeChange: 'volumechange',
	    topWaiting: 'waiting',
	    topWheel: 'wheel'
	};

	/**
	 * To ensure no conflicts with other potential React instances on the page
	 */
	var topListenersIDKey = '_reactListenersID' + String(Math.random()).slice(2);

	function getListeningForDocument(mountAt) {
	    // In IE8, `mountAt` is a host object and doesn't have `hasOwnProperty`
	    // directly.
	    if (!Object.prototype.hasOwnProperty.call(mountAt, topListenersIDKey)) {
	        mountAt[topListenersIDKey] = reactTopListenersCounter++;
	        alreadyListeningTo[mountAt[topListenersIDKey]] = {};
	    }
	    return alreadyListeningTo[mountAt[topListenersIDKey]];
	}

	/**
	 * `ReactBrowserEventEmitter` is used to attach top-level event listeners. For
	 * example:
	 *
	 *   EventPluginHub.putListener('myID', 'onClick', myFunction);
	 *
	 * This would allocate a "registration" of `('onClick', myFunction)` on 'myID'.
	 *
	 * @internal
	 */
	var ReactBrowserEventEmitter = (0, _objectAssign2.default)({}, _ReactEventEmitterMixin2.default, {

	    /**
	     * Injectable event backend
	     */
	    ReactEventListener: null,

	    injection: {
	        /**
	         * @param {object} ReactEventListener
	         */
	        injectReactEventListener: function injectReactEventListener(ReactEventListener) {
	            ReactEventListener.setHandleTopLevel(ReactBrowserEventEmitter.handleTopLevel);
	            ReactBrowserEventEmitter.ReactEventListener = ReactEventListener;
	        }
	    },

	    /**
	     * Sets whether or not any created callbacks should be enabled.
	     *
	     * @param {boolean} enabled True if callbacks should be enabled.
	     */
	    setEnabled: function setEnabled(enabled) {
	        if (ReactBrowserEventEmitter.ReactEventListener) {
	            ReactBrowserEventEmitter.ReactEventListener.setEnabled(enabled);
	        }
	    },

	    /**
	     * @return {boolean} True if callbacks are enabled.
	     */
	    isEnabled: function isEnabled() {
	        return !!(ReactBrowserEventEmitter.ReactEventListener && ReactBrowserEventEmitter.ReactEventListener.isEnabled());
	    },

	    /**
	     * We listen for bubbled touch events on the document object.
	     *
	     * Firefox v8.01 (and possibly others) exhibited strange behavior when
	     * mounting `onmousemove` events at some node that was not the document
	     * element. The symptoms were that if your mouse is not moving over something
	     * contained within that mount point (for example on the background) the
	     * top-level listeners for `onmousemove` won't be called. However, if you
	     * register the `mousemove` on the document object, then it will of course
	     * catch all `mousemove`s. This along with iOS quirks, justifies restricting
	     * top-level listeners to the document object only, at least for these
	     * movement types of events and possibly all events.
	     *
	     * @see http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
	     *
	     * Also, `keyup`/`keypress`/`keydown` do not bubble to the window on IE, but
	     * they bubble to document.
	     *
	     * @param {string} registrationName Name of listener (e.g. `onClick`).
	     * @param {object} contentDocumentHandle Document which owns the container
	     */
	    listenTo: function listenTo(registrationName, contentDocumentHandle) {
	        var mountAt = contentDocumentHandle;
	        var isListening = getListeningForDocument(mountAt);
	        var dependencies = _EventPluginRegistry2.default.registrationNameDependencies[registrationName];
	        if (!dependencies) return process.env.NODE_ENV !== 'production' ? console.log('not found', registrationName) : '';

	        var topLevelTypes = _EventConstants2.default.topLevelTypes;
	        for (var i = 0; i < dependencies.length; i++) {
	            var dependency = dependencies[i];
	            if (!(isListening.hasOwnProperty(dependency) && isListening[dependency])) {
	                if (dependency === topLevelTypes.topWheel) {
	                    if ((0, _isEventSupported2.default)('wheel')) {
	                        ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, 'wheel', mountAt);
	                    } else if ((0, _isEventSupported2.default)('mousewheel')) {
	                        ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, 'mousewheel', mountAt);
	                    } else {
	                        // Firefox needs to capture a different mouse scroll event.
	                        // @see http://www.quirksmode.org/dom/events/tests/scroll.html
	                        ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, 'DOMMouseScroll', mountAt);
	                    }
	                } else if (dependency === topLevelTypes.topScroll) {

	                    if ((0, _isEventSupported2.default)('scroll', true)) {
	                        ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topScroll, 'scroll', mountAt);
	                    } else {
	                        ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topScroll, 'scroll', ReactBrowserEventEmitter.ReactEventListener.WINDOW_HANDLE);
	                    }
	                } else if (dependency === topLevelTypes.topFocus || dependency === topLevelTypes.topBlur) {

	                    //          if (isEventSupported('focus', true)) {
	                    ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topFocus, 'focus', mountAt);
	                    ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topBlur, 'blur', mountAt);
	                    //          } else if (isEventSupported('focusin')) {
	                    //            // IE has `focusin` and `focusout` events which bubble.
	                    //            // @see http://www.quirksmode.org/blog/archives/2008/04/delegating_the.html
	                    //            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topFocus, 'focusin', mountAt);
	                    //            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topBlur, 'focusout', mountAt);
	                    //          }

	                    // to make sure blur and focus event listeners are only attached once
	                    isListening[topLevelTypes.topBlur] = true;
	                    isListening[topLevelTypes.topFocus] = true;
	                } else if (topEventMapping.hasOwnProperty(dependency)) {
	                    ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(dependency, topEventMapping[dependency], mountAt);
	                }

	                isListening[dependency] = true;
	            }
	        }
	    },

	    trapBubbledEvent: function trapBubbledEvent(topLevelType, handlerBaseName, handle) {
	        return ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelType, handlerBaseName, handle);
	    },

	    trapCapturedEvent: function trapCapturedEvent(topLevelType, handlerBaseName, handle) {
	        return ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelType, handlerBaseName, handle);
	    },

	    /**
	     * Protect against document.createEvent() returning null
	     * Some popup blocker extensions appear to do this:
	     * https://github.com/facebook/react/issues/6887
	     */
	    supportsEventPageXY: function supportsEventPageXY() {
	        return true;
	        //    if (!document.createEvent) {
	        //      return false;
	        //    }
	        //    var ev = document.createEvent('MouseEvent');
	        //    return ev != null && 'pageX' in ev;
	    },

	    /**
	     * Listens to window scroll and resize events. We cache scroll values so that
	     * application code can access them without triggering reflows.
	     *
	     * ViewportMetrics is only used by SyntheticMouse/TouchEvent and only when
	     * pageX/pageY isn't supported (legacy browsers).
	     *
	     * NOTE: Scroll events do not bubble.
	     *
	     * @see http://www.quirksmode.org/dom/events/scroll.html
	     */
	    ensureScrollValueMonitoring: function ensureScrollValueMonitoring() {
	        if (hasEventPageXY === undefined) {
	            hasEventPageXY = ReactBrowserEventEmitter.supportsEventPageXY();
	        }
	        if (!hasEventPageXY && !isMonitoringScrollValue) {
	            var refresh = _ViewportMetrics2.default.refreshScrollValues;
	            ReactBrowserEventEmitter.ReactEventListener.monitorScrollValue(refresh);
	            isMonitoringScrollValue = true;
	        }
	    }

	});

		exports.default = ReactBrowserEventEmitter;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventConstants
	 */

	'use strict';

	exports.__esModule = true;

	var _keyMirror = __webpack_require__(14);

	var _keyMirror2 = _interopRequireDefault(_keyMirror);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PropagationPhases = { bubbled: 'bubbled', captured: 'captured' };

	/**
	 * Types of raw signals from the browser caught at the top level.
	 */
	var topLevelTypes = (0, _keyMirror2.default)({
	    topAbort: null,
	    topAnimationEnd: null,
	    topAnimationIteration: null,
	    topAnimationStart: null,
	    topBlur: null,
	    topCanPlay: null,
	    topCanPlayThrough: null,
	    topChange: null,
	    topClick: null,
	    topCompositionEnd: null,
	    topCompositionStart: null,
	    topCompositionUpdate: null,
	    topContextMenu: null,
	    topCopy: null,
	    topCut: null,
	    topDoubleClick: null,
	    topDrag: null,
	    topDragEnd: null,
	    topDragEnter: null,
	    topDragExit: null,
	    topDragLeave: null,
	    topDragOver: null,
	    topDragStart: null,
	    topDrop: null,
	    topDurationChange: null,
	    topEmptied: null,
	    topEncrypted: null,
	    topEnded: null,
	    topError: null,
	    topFocus: null,
	    topInput: null,
	    topInvalid: null,
	    topKeyDown: null,
	    topKeyPress: null,
	    topKeyUp: null,
	    topLoad: null,
	    topLoadedData: null,
	    topLoadedMetadata: null,
	    topLoadStart: null,
	    topMouseDown: null,
	    topMouseMove: null,
	    topMouseOut: null,
	    topMouseOver: null,
	    topMouseUp: null,
	    topPaste: null,
	    topPause: null,
	    topPlay: null,
	    topPlaying: null,
	    topProgress: null,
	    topRateChange: null,
	    topReset: null,
	    topScroll: null,
	    topSeeked: null,
	    topSeeking: null,
	    topSelectionChange: null,
	    topStalled: null,
	    topSubmit: null,
	    topSuspend: null,
	    topTextInput: null,
	    topTimeUpdate: null,
	    topTouchCancel: null,
	    topTouchEnd: null,
	    topTouchMove: null,
	    topTouchStart: null,
	    topTransitionEnd: null,
	    topVolumeChange: null,
	    topWaiting: null,
	    topWheel: null
	});

	var EventConstants = {
	    topLevelTypes: topLevelTypes,
	    PropagationPhases: PropagationPhases
	};

		exports.default = EventConstants;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks static-only
	 */

	'use strict';

	var invariant = __webpack_require__(15);

	/**
	 * Constructs an enumeration with keys equal to their value.
	 *
	 * For example:
	 *
	 *   var COLORS = keyMirror({blue: null, red: null});
	 *   var myColor = COLORS.blue;
	 *   var isColorValid = !!COLORS[myColor];
	 *
	 * The last line could not be performed if the values of the generated enum were
	 * not equal to their keys.
	 *
	 *   Input:  {key1: val1, key2: val2}
	 *   Output: {key1: key1, key2: key2}
	 *
	 * @param {object} obj
	 * @return {object}
	 */
	var keyMirror = function keyMirror(obj) {
	  var ret = {};
	  var key;
	  !(obj instanceof Object && !Array.isArray(obj)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'keyMirror(...): Argument must be an object.') : invariant(false) : void 0;
	  for (key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = key;
	  }
	  return ret;
	};

	module.exports = keyMirror;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventPluginRegistry
	 */

	'use strict';

	exports.__esModule = true;

	var _reactProdInvariant = __webpack_require__(17);

	var _reactProdInvariant2 = _interopRequireDefault(_reactProdInvariant);

	var _invariant = __webpack_require__(15);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Injectable ordering of event plugins.
	 */
	var EventPluginOrder = null;

	/**
	 * Injectable mapping from names to event plugin modules.
	 */
	var namesToPlugins = {};

	/**
	 * Recomputes the plugin list using the injected plugins and plugin ordering.
	 *
	 * @private
	 */
	function recomputePluginOrdering() {
	    if (!EventPluginOrder) {
	        // Wait until an `EventPluginOrder` is injected.
	        return;
	    }
	    for (var pluginName in namesToPlugins) {
	        var PluginModule = namesToPlugins[pluginName];
	        var pluginIndex = EventPluginOrder.indexOf(pluginName);
	        !(pluginIndex > -1) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `%s`.', pluginName) : (0, _reactProdInvariant2.default)('96', pluginName) : void 0;
	        if (EventPluginRegistry.plugins[pluginIndex]) {
	            continue;
	        }!PluginModule.extractEvents ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `%s` does not.', pluginName) : (0, _reactProdInvariant2.default)('97', pluginName) : void 0;
	        EventPluginRegistry.plugins[pluginIndex] = PluginModule;
	        var publishedEvents = PluginModule.eventTypes;
	        for (var eventName in publishedEvents) {
	            !publishEventForPlugin(publishedEvents[eventName], PluginModule, eventName) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.', eventName, pluginName) : (0, _reactProdInvariant2.default)('98', eventName, pluginName) : void 0;
	        }
	    }
	}

	/**
	 * Publishes an event so that it can be dispatched by the supplied plugin.
	 *
	 * @param {object} dispatchConfig Dispatch configuration for the event.
	 * @param {object} PluginModule Plugin publishing the event.
	 * @return {boolean} True if the event was successfully published.
	 * @private
	 */
	function publishEventForPlugin(dispatchConfig, PluginModule, eventName) {
	    !!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'EventPluginHub: More than one plugin attempted to publish the same event name, `%s`.', eventName) : (0, _reactProdInvariant2.default)('99', eventName) : void 0;
	    EventPluginRegistry.eventNameDispatchConfigs[eventName] = dispatchConfig;

	    var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
	    if (phasedRegistrationNames) {
	        for (var phaseName in phasedRegistrationNames) {
	            if (phasedRegistrationNames.hasOwnProperty(phaseName)) {
	                var phasedRegistrationName = phasedRegistrationNames[phaseName];
	                publishRegistrationName(phasedRegistrationName, PluginModule, eventName);
	            }
	        }
	        return true;
	    } else if (dispatchConfig.registrationName) {
	        publishRegistrationName(dispatchConfig.registrationName, PluginModule, eventName);
	        return true;
	    }
	    return false;
	}

	/**
	 * Publishes a registration name that is used to identify dispatched events and
	 * can be used with `EventPluginHub.putListener` to register listeners.
	 *
	 * @param {string} registrationName Registration name to add.
	 * @param {object} PluginModule Plugin publishing the event.
	 * @private
	 */
	function publishRegistrationName(registrationName, PluginModule, eventName) {
	    !!EventPluginRegistry.registrationNameModules[registrationName] ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'EventPluginHub: More than one plugin attempted to publish the same registration name, `%s`.', registrationName) : (0, _reactProdInvariant2.default)('100', registrationName) : void 0;
	    EventPluginRegistry.registrationNameModules[registrationName] = PluginModule;
	    EventPluginRegistry.registrationNameDependencies[registrationName] = PluginModule.eventTypes[eventName].dependencies;

	    if (process.env.NODE_ENV !== 'production') {
	        var lowerCasedName = registrationName.toLowerCase();
	        EventPluginRegistry.possibleRegistrationNames[lowerCasedName] = registrationName;

	        if (registrationName === 'onDoubleClick') {
	            EventPluginRegistry.possibleRegistrationNames.ondblclick = registrationName;
	        }
	    }
	}

	/**
	 * Registers plugins so that they can extract and dispatch events.
	 *
	 * @see {EventPluginHub}
	 */
	var EventPluginRegistry = {

	    /**
	     * Ordered list of injected plugins.
	     */
	    plugins: [],

	    /**
	     * Mapping from event name to dispatch config
	     */
	    eventNameDispatchConfigs: {},

	    /**
	     * Mapping from registration name to plugin module
	     */
	    registrationNameModules: {},

	    /**
	     * Mapping from registration name to event name
	     */
	    registrationNameDependencies: {},

	    /**
	     * Mapping from lowercase registration names to the properly cased version,
	     * used to warn in the case of missing event handlers. Available
	     * only in __DEV__.
	     * @type {Object}
	     */
	    possibleRegistrationNames: process.env.NODE_ENV !== 'production' ? {} : null,

	    /**
	     * Injects an ordering of plugins (by plugin name). This allows the ordering
	     * to be decoupled from injection of the actual plugins so that ordering is
	     * always deterministic regardless of packaging, on-the-fly injection, etc.
	     *
	     * @param {array} InjectedEventPluginOrder
	     * @internal
	     * @see {EventPluginHub.injection.injectEventPluginOrder}
	     */
	    injectEventPluginOrder: function injectEventPluginOrder(InjectedEventPluginOrder) {
	        !!EventPluginOrder ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React.') : (0, _reactProdInvariant2.default)('101') : void 0;
	        // Clone the ordering so it cannot be dynamically mutated.
	        EventPluginOrder = Array.prototype.slice.call(InjectedEventPluginOrder);
	        recomputePluginOrdering();
	    },

	    /**
	     * Injects plugins to be used by `EventPluginHub`. The plugin names must be
	     * in the ordering injected by `injectEventPluginOrder`.
	     *
	     * Plugins can be injected as part of page initialization or on-the-fly.
	     *
	     * @param {object} injectedNamesToPlugins Map from names to plugin modules.
	     * @internal
	     * @see {EventPluginHub.injection.injectEventPluginsByName}
	     */
	    injectEventPluginsByName: function injectEventPluginsByName(injectedNamesToPlugins) {
	        var isOrderingDirty = false;
	        for (var pluginName in injectedNamesToPlugins) {
	            if (!injectedNamesToPlugins.hasOwnProperty(pluginName)) {
	                continue;
	            }
	            var PluginModule = injectedNamesToPlugins[pluginName];
	            if (!namesToPlugins.hasOwnProperty(pluginName) || namesToPlugins[pluginName] !== PluginModule) {
	                !!namesToPlugins[pluginName] ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'EventPluginRegistry: Cannot inject two different event plugins using the same name, `%s`.', pluginName) : (0, _reactProdInvariant2.default)('102', pluginName) : void 0;
	                namesToPlugins[pluginName] = PluginModule;
	                isOrderingDirty = true;
	            }
	        }
	        if (isOrderingDirty) {
	            recomputePluginOrdering();
	        }
	    },

	    /**
	     * Looks up the plugin for the supplied event.
	     *
	     * @param {object} event A synthetic event.
	     * @return {?object} The plugin that created the supplied event.
	     * @internal
	     */
	    getPluginModuleForEvent: function getPluginModuleForEvent(event) {
	        var dispatchConfig = event.dispatchConfig;
	        if (dispatchConfig.registrationName) {
	            return EventPluginRegistry.registrationNameModules[dispatchConfig.registrationName] || null;
	        }
	        for (var phase in dispatchConfig.phasedRegistrationNames) {
	            if (!dispatchConfig.phasedRegistrationNames.hasOwnProperty(phase)) {
	                continue;
	            }
	            var PluginModule = EventPluginRegistry.registrationNameModules[dispatchConfig.phasedRegistrationNames[phase]];
	            if (PluginModule) {
	                return PluginModule;
	            }
	        }
	        return null;
	    },

	    /**
	     * Exposed for unit testing.
	     * @private
	     */
	    _resetEventPlugins: function _resetEventPlugins() {
	        EventPluginOrder = null;
	        for (var pluginName in namesToPlugins) {
	            if (namesToPlugins.hasOwnProperty(pluginName)) {
	                delete namesToPlugins[pluginName];
	            }
	        }
	        EventPluginRegistry.plugins.length = 0;

	        var eventNameDispatchConfigs = EventPluginRegistry.eventNameDispatchConfigs;
	        for (var eventName in eventNameDispatchConfigs) {
	            if (eventNameDispatchConfigs.hasOwnProperty(eventName)) {
	                delete eventNameDispatchConfigs[eventName];
	            }
	        }

	        var registrationNameModules = EventPluginRegistry.registrationNameModules;
	        for (var registrationName in registrationNameModules) {
	            if (registrationNameModules.hasOwnProperty(registrationName)) {
	                delete registrationNameModules[registrationName];
	            }
	        }

	        if (process.env.NODE_ENV !== 'production') {
	            var possibleRegistrationNames = EventPluginRegistry.possibleRegistrationNames;
	            for (var lowerCasedName in possibleRegistrationNames) {
	                if (possibleRegistrationNames.hasOwnProperty(lowerCasedName)) {
	                    delete possibleRegistrationNames[lowerCasedName];
	                }
	            }
	        }
	    }

	};

		exports.default = EventPluginRegistry;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

		exports.default = function () {};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactEventEmitterMixin
	 */

	'use strict';

	exports.__esModule = true;

	var _EventPluginHub = __webpack_require__(19);

	var _EventPluginHub2 = _interopRequireDefault(_EventPluginHub);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function runEventQueueInBatch(events) {
	  _EventPluginHub2.default.enqueueEvents(events);
	  _EventPluginHub2.default.processEventQueue(false);
	}

	var ReactEventEmitterMixin = {

	  /**
	   * Streams a fired top-level event to `EventPluginHub` where plugins have the
	   * opportunity to create `ReactEvent`s to be dispatched.
	   */
	  handleTopLevel: function handleTopLevel(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
	    var events = _EventPluginHub2.default.extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget);
	    runEventQueueInBatch(events);
	  }
	};

		exports.default = ReactEventEmitterMixin;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventPluginHub
	 */

	'use strict';

	exports.__esModule = true;

	var _EventPluginRegistry = __webpack_require__(16);

	var _EventPluginRegistry2 = _interopRequireDefault(_EventPluginRegistry);

	var _EventPluginUtils = __webpack_require__(20);

	var _EventPluginUtils2 = _interopRequireDefault(_EventPluginUtils);

	var _ReactErrorUtils = __webpack_require__(21);

	var _ReactErrorUtils2 = _interopRequireDefault(_ReactErrorUtils);

	var _accumulateInto = __webpack_require__(24);

	var _accumulateInto2 = _interopRequireDefault(_accumulateInto);

	var _forEachAccumulated = __webpack_require__(25);

	var _forEachAccumulated2 = _interopRequireDefault(_forEachAccumulated);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Internal store for event listeners
	 */
	var listenerBank = {};

	/**
	 * Internal queue of events that have accumulated their dispatches and are
	 * waiting to have their dispatches executed.
	 */
	var eventQueue = null;

	/**
	 * Dispatches an event and releases it back into the pool, unless persistent.
	 *
	 * @param {?object} event Synthetic event to be dispatched.
	 * @param {boolean} simulated If the event is simulated (changes exn behavior)
	 * @private
	 */
	var executeDispatchesAndRelease = function executeDispatchesAndRelease(event, simulated) {
	    if (event) {
	        _EventPluginUtils2.default.executeDispatchesInOrder(event, simulated);

	        if (!event.isPersistent()) {
	            event.constructor.release(event);
	        }
	    }
	};
	var executeDispatchesAndReleaseSimulated = function executeDispatchesAndReleaseSimulated(e) {
	    return executeDispatchesAndRelease(e, true);
	};
	var executeDispatchesAndReleaseTopLevel = function executeDispatchesAndReleaseTopLevel(e) {
	    return executeDispatchesAndRelease(e, false);
	};

	var getDictionaryKey = function getDictionaryKey(inst) {
	    // Prevents V8 performance issue:
	    // https://github.com/facebook/react/pull/7232
	    return '.' + inst._rootNodeID;
	};

	/**
	 * This is a unified interface for event plugins to be installed and configured.
	 *
	 * Event plugins can implement the following properties:
	 *
	 *   `extractEvents` {function(string, DOMEventTarget, string, object): *}
	 *     Required. When a top-level event is fired, this method is expected to
	 *     extract synthetic events that will in turn be queued and dispatched.
	 *
	 *   `eventTypes` {object}
	 *     Optional, plugins that fire events must publish a mapping of registration
	 *     names that are used to register listeners. Values of this mapping must
	 *     be objects that contain `registrationName` or `phasedRegistrationNames`.
	 *
	 *   `executeDispatch` {function(object, function, string)}
	 *     Optional, allows plugins to override how an event gets dispatched. By
	 *     default, the listener is simply invoked.
	 *
	 * Each plugin that is injected into `EventsPluginHub` is immediately operable.
	 *
	 * @public
	 */
	var EventPluginHub = {

	    /**
	     * Methods for injecting dependencies.
	     */
	    injection: {

	        /**
	         * @param {array} InjectedEventPluginOrder
	         * @public
	         */
	        injectEventPluginOrder: _EventPluginRegistry2.default.injectEventPluginOrder,

	        /**
	         * @param {object} injectedNamesToPlugins Map from names to plugin modules.
	         */
	        injectEventPluginsByName: _EventPluginRegistry2.default.injectEventPluginsByName

	    },

	    /**
	     * Stores `listener` at `listenerBank[registrationName][key]`. Is idempotent.
	     *
	     * @param {object} inst The instance, which is the source of events.
	     * @param {string} registrationName Name of listener (e.g. `onClick`).
	     * @param {function} listener The callback to store.
	     */
	    putListener: function putListener(inst, registrationName, listener) {

	        var key = getDictionaryKey(inst);
	        var bankForRegistrationName = listenerBank[registrationName] || (listenerBank[registrationName] = {});
	        bankForRegistrationName[key] = listener;

	        var PluginModule = _EventPluginRegistry2.default.registrationNameModules[registrationName];
	        if (PluginModule && PluginModule.didPutListener) {
	            PluginModule.didPutListener(inst, registrationName, listener);
	        }
	    },

	    /**
	     * @param {object} inst The instance, which is the source of events.
	     * @param {string} registrationName Name of listener (e.g. `onClick`).
	     * @return {?function} The stored callback.
	     */
	    getListener: function getListener(inst, registrationName) {
	        var bankForRegistrationName = listenerBank[registrationName];
	        var key = getDictionaryKey(inst);
	        return bankForRegistrationName && bankForRegistrationName[key];
	    },

	    /**
	     * Deletes a listener from the registration bank.
	     *
	     * @param {object} inst The instance, which is the source of events.
	     * @param {string} registrationName Name of listener (e.g. `onClick`).
	     */
	    deleteListener: function deleteListener(inst, registrationName) {
	        var PluginModule = _EventPluginRegistry2.default.registrationNameModules[registrationName];
	        if (PluginModule && PluginModule.willDeleteListener) {
	            PluginModule.willDeleteListener(inst, registrationName);
	        }

	        var bankForRegistrationName = listenerBank[registrationName];
	        // TODO: This should never be null -- when is it?
	        if (bankForRegistrationName) {
	            var key = getDictionaryKey(inst);
	            delete bankForRegistrationName[key];
	        }
	    },

	    /**
	     * Deletes all listeners for the DOM element with the supplied ID.
	     *
	     * @param {object} inst The instance, which is the source of events.
	     */
	    deleteAllListeners: function deleteAllListeners(inst) {
	        var key = getDictionaryKey(inst);
	        for (var registrationName in listenerBank) {
	            if (!listenerBank.hasOwnProperty(registrationName)) {
	                continue;
	            }

	            if (!listenerBank[registrationName][key]) {
	                continue;
	            }

	            var PluginModule = _EventPluginRegistry2.default.registrationNameModules[registrationName];
	            if (PluginModule && PluginModule.willDeleteListener) {
	                PluginModule.willDeleteListener(inst, registrationName);
	            }

	            delete listenerBank[registrationName][key];
	        }
	    },

	    /**
	     * Allows registered plugins an opportunity to extract events from top-level
	     * native browser events.
	     *
	     * @return {*} An accumulation of synthetic events.
	     * @internal
	     */
	    extractEvents: function extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
	        var events;
	        var plugins = _EventPluginRegistry2.default.plugins;
	        for (var i = 0; i < plugins.length; i++) {
	            // Not every plugin in the ordering may be loaded at runtime.
	            var possiblePlugin = plugins[i];
	            if (possiblePlugin) {
	                var extractedEvents = possiblePlugin.extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget);
	                if (extractedEvents) {
	                    events = (0, _accumulateInto2.default)(events, extractedEvents);
	                }
	            }
	        }
	        return events;
	    },

	    /**
	     * Enqueues a synthetic event that should be dispatched when
	     * `processEventQueue` is invoked.
	     *
	     * @param {*} events An accumulation of synthetic events.
	     * @internal
	     */
	    enqueueEvents: function enqueueEvents(events) {
	        if (events) {
	            eventQueue = (0, _accumulateInto2.default)(eventQueue, events);
	        }
	    },

	    /**
	     * Dispatches all synthetic events on the event queue.
	     *
	     * @internal
	     */
	    processEventQueue: function processEventQueue(simulated) {
	        // Set `eventQueue` to null before processing it so that we can tell if more
	        // events get enqueued while processing.
	        var processingEventQueue = eventQueue;
	        eventQueue = null;
	        if (simulated) {
	            (0, _forEachAccumulated2.default)(processingEventQueue, executeDispatchesAndReleaseSimulated);
	        } else {
	            (0, _forEachAccumulated2.default)(processingEventQueue, executeDispatchesAndReleaseTopLevel);
	        }
	        // This would be a good time to rethrow if any of the event handlers threw.
	        _ReactErrorUtils2.default.rethrowCaughtError();
	    },

	    /**
	     * These are needed for tests only. Do not use!
	     */
	    __purge: function __purge() {
	        listenerBank = {};
	    },

	    __getListenerBank: function __getListenerBank() {
	        return listenerBank;
	    }

	};

		exports.default = EventPluginHub;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventPluginUtils
	 */

	'use strict';

	exports.__esModule = true;

	var _reactProdInvariant = __webpack_require__(17);

	var _reactProdInvariant2 = _interopRequireDefault(_reactProdInvariant);

	var _EventConstants = __webpack_require__(13);

	var _EventConstants2 = _interopRequireDefault(_EventConstants);

	var _ReactErrorUtils = __webpack_require__(21);

	var _ReactErrorUtils2 = _interopRequireDefault(_ReactErrorUtils);

	var _invariant = __webpack_require__(15);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _warning = __webpack_require__(22);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Injected dependencies:
	 */

	/**
	 * - `ComponentTree`: [required] Module that can convert between React instances
	 *   and actual node references.
	 */
	var ComponentTree;
	var TreeTraversal;
	var injection = {
	  injectComponentTree: function injectComponentTree(Injected) {
	    ComponentTree = Injected;
	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(Injected && Injected.getNodeFromInstance && Injected.getInstanceFromNode, 'EventPluginUtils.injection.injectComponentTree(...): Injected ' + 'module is missing getNodeFromInstance or getInstanceFromNode.') : void 0;
	    }
	  },
	  injectTreeTraversal: function injectTreeTraversal(Injected) {
	    TreeTraversal = Injected;
	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(Injected && Injected.isAncestor && Injected.getLowestCommonAncestor, 'EventPluginUtils.injection.injectTreeTraversal(...): Injected ' + 'module is missing isAncestor or getLowestCommonAncestor.') : void 0;
	    }
	  }
	};

	var topLevelTypes = _EventConstants2.default.topLevelTypes;

	function isEndish(topLevelType) {
	  return topLevelType === topLevelTypes.topMouseUp || topLevelType === topLevelTypes.topTouchEnd || topLevelType === topLevelTypes.topTouchCancel;
	}

	function isMoveish(topLevelType) {
	  return topLevelType === topLevelTypes.topMouseMove || topLevelType === topLevelTypes.topTouchMove;
	}
	function isStartish(topLevelType) {
	  return topLevelType === topLevelTypes.topMouseDown || topLevelType === topLevelTypes.topTouchStart;
	}

	var validateEventDispatches;
	if (process.env.NODE_ENV !== 'production') {
	  validateEventDispatches = function validateEventDispatches(event) {
	    var dispatchListeners = event._dispatchListeners;
	    var dispatchInstances = event._dispatchInstances;

	    var listenersIsArr = Array.isArray(dispatchListeners);
	    var listenersLen = listenersIsArr ? dispatchListeners.length : dispatchListeners ? 1 : 0;

	    var instancesIsArr = Array.isArray(dispatchInstances);
	    var instancesLen = instancesIsArr ? dispatchInstances.length : dispatchInstances ? 1 : 0;

	    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(instancesIsArr === listenersIsArr && instancesLen === listenersLen, 'EventPluginUtils: Invalid `event`.') : void 0;
	  };
	}

	/**
	 * Dispatch the event to the listener.
	 * @param {SyntheticEvent} event SyntheticEvent to handle
	 * @param {boolean} simulated If the event is simulated (changes exn behavior)
	 * @param {function} listener Application-level callback
	 * @param {*} inst Internal component instance
	 */
	function executeDispatch(event, simulated, listener, inst) {
	  var type = event.type || 'unknown-event';
	  event.currentTarget = EventPluginUtils.getNodeFromInstance(inst);
	  if (simulated) {
	    _ReactErrorUtils2.default.invokeGuardedCallbackWithCatch(type, listener, event);
	  } else {
	    _ReactErrorUtils2.default.invokeGuardedCallback(type, listener, event);
	  }
	  event.currentTarget = null;
	}

	/**
	 * Standard/simple iteration through an event's collected dispatches.
	 */
	function executeDispatchesInOrder(event, simulated) {
	  var dispatchListeners = event._dispatchListeners;
	  var dispatchInstances = event._dispatchInstances;
	  if (process.env.NODE_ENV !== 'production') {
	    validateEventDispatches(event);
	  }
	  if (Array.isArray(dispatchListeners)) {
	    for (var i = 0; i < dispatchListeners.length; i++) {
	      if (event.isPropagationStopped()) {
	        break;
	      }
	      // Listeners and Instances are two parallel arrays that are always in sync.
	      executeDispatch(event, simulated, dispatchListeners[i], dispatchInstances[i]);
	    }
	  } else if (dispatchListeners) {
	    executeDispatch(event, simulated, dispatchListeners, dispatchInstances);
	  }
	  event._dispatchListeners = null;
	  event._dispatchInstances = null;
	}

	/**
	 * Standard/simple iteration through an event's collected dispatches, but stops
	 * at the first dispatch execution returning true, and returns that id.
	 *
	 * @return {?string} id of the first dispatch execution who's listener returns
	 * true, or null if no listener returned true.
	 */
	function executeDispatchesInOrderStopAtTrueImpl(event) {
	  var dispatchListeners = event._dispatchListeners;
	  var dispatchInstances = event._dispatchInstances;
	  if (process.env.NODE_ENV !== 'production') {
	    validateEventDispatches(event);
	  }
	  if (Array.isArray(dispatchListeners)) {
	    for (var i = 0; i < dispatchListeners.length; i++) {
	      if (event.isPropagationStopped()) {
	        break;
	      }
	      // Listeners and Instances are two parallel arrays that are always in sync.
	      if (dispatchListeners[i](event, dispatchInstances[i])) {
	        return dispatchInstances[i];
	      }
	    }
	  } else if (dispatchListeners) {
	    if (dispatchListeners(event, dispatchInstances)) {
	      return dispatchInstances;
	    }
	  }
	  return null;
	}

	/**
	 * @see executeDispatchesInOrderStopAtTrueImpl
	 */
	function executeDispatchesInOrderStopAtTrue(event) {
	  var ret = executeDispatchesInOrderStopAtTrueImpl(event);
	  event._dispatchInstances = null;
	  event._dispatchListeners = null;
	  return ret;
	}

	/**
	 * Execution of a "direct" dispatch - there must be at most one dispatch
	 * accumulated on the event or it is considered an error. It doesn't really make
	 * sense for an event with multiple dispatches (bubbled) to keep track of the
	 * return values at each dispatch execution, but it does tend to make sense when
	 * dealing with "direct" dispatches.
	 *
	 * @return {*} The return value of executing the single dispatch.
	 */
	function executeDirectDispatch(event) {
	  if (process.env.NODE_ENV !== 'production') {
	    validateEventDispatches(event);
	  }
	  var dispatchListener = event._dispatchListeners;
	  var dispatchInstance = event._dispatchInstances;
	  !!Array.isArray(dispatchListener) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'executeDirectDispatch(...): Invalid `event`.') : (0, _reactProdInvariant2.default)('103') : void 0;
	  event.currentTarget = dispatchListener ? EventPluginUtils.getNodeFromInstance(dispatchInstance) : null;
	  var res = dispatchListener ? dispatchListener(event) : null;
	  event.currentTarget = null;
	  event._dispatchListeners = null;
	  event._dispatchInstances = null;
	  return res;
	}

	/**
	 * @param {SyntheticEvent} event
	 * @return {boolean} True iff number of dispatches accumulated is greater than 0.
	 */
	function hasDispatches(event) {
	  return !!event._dispatchListeners;
	}

	/**
	 * General utilities that are useful in creating custom Event Plugins.
	 */
	var EventPluginUtils = {
	  isEndish: isEndish,
	  isMoveish: isMoveish,
	  isStartish: isStartish,

	  executeDirectDispatch: executeDirectDispatch,
	  executeDispatchesInOrder: executeDispatchesInOrder,
	  executeDispatchesInOrderStopAtTrue: executeDispatchesInOrderStopAtTrue,
	  hasDispatches: hasDispatches,

	  getInstanceFromNode: function getInstanceFromNode(node) {
	    return ComponentTree.getInstanceFromNode(node);
	  },
	  getNodeFromInstance: function getNodeFromInstance(node) {
	    return ComponentTree.getNodeFromInstance(node);
	  },
	  isAncestor: function isAncestor(a, b) {
	    return TreeTraversal.isAncestor(a, b);
	  },
	  getLowestCommonAncestor: function getLowestCommonAncestor(a, b) {
	    return TreeTraversal.getLowestCommonAncestor(a, b);
	  },
	  getParentInstance: function getParentInstance(inst) {
	    return TreeTraversal.getParentInstance(inst);
	  },
	  traverseTwoPhase: function traverseTwoPhase(target, fn, arg) {
	    return TreeTraversal.traverseTwoPhase(target, fn, arg);
	  },
	  traverseEnterLeave: function traverseEnterLeave(from, to, fn, argFrom, argTo) {
	    return TreeTraversal.traverseEnterLeave(from, to, fn, argFrom, argTo);
	  },

	  injection: injection
	};

		exports.default = EventPluginUtils;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactErrorUtils
	 */

	'use strict';

	exports.__esModule = true;
	var caughtError = null;

	/**
	 * Call a function while guarding against errors that happens within it.
	 *
	 * @param {?String} name of the guard to use for logging or debugging
	 * @param {Function} func The function to invoke
	 * @param {*} a First argument
	 * @param {*} b Second argument
	 */
	function invokeGuardedCallback(name, func, a, b) {
	  try {
	    return func(a, b);
	  } catch (x) {
	    if (caughtError === null) {
	      caughtError = x;
	    }
	    return undefined;
	  }
	}

	var ReactErrorUtils = {
	  invokeGuardedCallback: invokeGuardedCallback,

	  /**
	   * Invoked by ReactTestUtils.Simulate so that any errors thrown by the event
	   * handler are sure to be rethrown by rethrowCaughtError.
	   */
	  invokeGuardedCallbackWithCatch: invokeGuardedCallback,

	  /**
	   * During execution of guarded functions we will capture the first error which
	   * we will rethrow to be handled by the top level error handler.
	   */
	  rethrowCaughtError: function rethrowCaughtError() {
	    if (caughtError) {
	      var error = caughtError;
	      caughtError = null;
	      throw error;
	    }
	  }
	};

	if (process.env.NODE_ENV !== 'production') {
	  /**
	   * To help development we can get better devtools integration by simulating a
	   * real browser event.
	   */
	  if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function' && typeof document !== 'undefined' && typeof document.createEvent === 'function') {
	    var fakeNode = document.createElement('react');
	    ReactErrorUtils.invokeGuardedCallback = function (name, func, a, b) {
	      var boundFunc = func.bind(null, a, b);
	      var evtType = 'react-' + name;
	      fakeNode.addEventListener(evtType, boundFunc, false);
	      var evt = document.createEvent('Event');
	      evt.initEvent(evtType, false, false);
	      fakeNode.dispatchEvent(evt);
	      fakeNode.removeEventListener(evtType, boundFunc, false);
	    };
	  }
	}

	exports.default = ReactErrorUtils;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(23);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var printWarning = function printWarning(format) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    };

	    warning = function warning(condition, format) {
	      if (format === undefined) {
	        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	      }

	      if (format.indexOf('Failed Composite propType: ') === 0) {
	        return; // Ignore CompositeComponent proptype check.
	      }

	      if (!condition) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	          args[_key2 - 2] = arguments[_key2];
	        }

	        printWarning.apply(undefined, [format].concat(args));
	      }
	    };
	  })();
	}

	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	/**
	 * Accumulates items that must not be null or undefined into the first one. This
	 * is used to conserve memory by avoiding array allocations, and thus sacrifices
	 * API cleanness. Since `current` can be null before being passed in and not
	 * null after this function, make sure to assign it back to `current`:
	 *
	 * `a = accumulateInto(a, b);`
	 *
	 * This API should be sparingly used. Try `accumulate` for something cleaner.
	 *
	 * @return {*|array<*>} An accumulation of items.
	 */

	function accumulateInto(current, next) {

	    if (current == null) {
	        return next;
	    }

	    // Both are not empty. Warning: Never call x.concat(y) when you are not
	    // certain that x is an Array (x could be a string with concat method).
	    if (Array.isArray(current)) {
	        if (Array.isArray(next)) {
	            current.push.apply(current, next);
	            return current;
	        }
	        current.push(next);
	        return current;
	    }

	    if (Array.isArray(next)) {
	        // A bit too dangerous to mutate `next`.
	        return [current].concat(next);
	    }

	    return [current, next];
	}

	exports.default = accumulateInto;

/***/ },
/* 25 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule forEachAccumulated
	 * 
	 */

	'use strict';

	/**
	 * @param {array} arr an "accumulation" of items which is either an Array or
	 * a single item. Useful when paired with the `accumulate` module. This is a
	 * simple utility that allows us to reason about a collection of items, but
	 * handling the case when there is exactly one item (and we do not need to
	 * allocate an array).
	 */

	exports.__esModule = true;
	function forEachAccumulated(arr, cb, scope) {
	  if (Array.isArray(arr)) {
	    arr.forEach(cb, scope);
	  } else if (arr) {
	    cb.call(scope, arr);
	  }
	}

	exports.default = forEachAccumulated;

/***/ },
/* 26 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ViewportMetrics
	 */

	'use strict';

	exports.__esModule = true;
	var ViewportMetrics = {

	  currentScrollLeft: 0,

	  currentScrollTop: 0,

	  refreshScrollValues: function refreshScrollValues(scrollPosition) {
	    ViewportMetrics.currentScrollLeft = scrollPosition.x;
	    ViewportMetrics.currentScrollTop = scrollPosition.y;
	  }

	};

		exports.default = ViewportMetrics;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getVendorPrefixedEventName
	 */

	'use strict';

	exports.__esModule = true;

	var _ExecutionEnvironment = __webpack_require__(28);

	var _ExecutionEnvironment2 = _interopRequireDefault(_ExecutionEnvironment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Generate a mapping of standard vendor prefixes using the defined style property and event name.
	 *
	 * @param {string} styleProp
	 * @param {string} eventName
	 * @returns {object}
	 */
	function makePrefixMap(styleProp, eventName) {
	    var prefixes = {};

	    prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
	    prefixes['Webkit' + styleProp] = 'webkit' + eventName;
	    prefixes['Moz' + styleProp] = 'moz' + eventName;
	    prefixes['ms' + styleProp] = 'MS' + eventName;
	    prefixes['O' + styleProp] = 'o' + eventName.toLowerCase();

	    return prefixes;
	}

	/**
	 * A list of event names to a configurable list of vendor prefixes.
	 */
	var vendorPrefixes = {
	    animationend: makePrefixMap('Animation', 'AnimationEnd'),
	    animationiteration: makePrefixMap('Animation', 'AnimationIteration'),
	    animationstart: makePrefixMap('Animation', 'AnimationStart'),
	    transitionend: makePrefixMap('Transition', 'TransitionEnd')
	};

	/**
	 * Event names that have already been detected and prefixed (if applicable).
	 */
	var prefixedEventNames = {};

	/**
	 * Element to check for prefixes on.
	 */
	var style = {};

	/**
	 * Bootstrap if a DOM exists.
	 */
	if (_ExecutionEnvironment2.default.canUseDOM) {
	    style = document.createElement('div').style;

	    // On some platforms, in particular some releases of Android 4.x,
	    // the un-prefixed "animation" and "transition" properties are defined on the
	    // style object but the events that fire will still be prefixed, so we need
	    // to check if the un-prefixed events are usable, and if not remove them from the map.
	    if (!('AnimationEvent' in window)) {
	        delete vendorPrefixes.animationend.animation;
	        delete vendorPrefixes.animationiteration.animation;
	        delete vendorPrefixes.animationstart.animation;
	    }

	    // Same as above
	    if (!('TransitionEvent' in window)) {
	        delete vendorPrefixes.transitionend.transition;
	    }
	}

	/**
	 * Attempts to determine the correct vendor prefixed event name.
	 *
	 * @param {string} eventName
	 * @returns {string}
	 */
	function getVendorPrefixedEventName(eventName) {
	    if (prefixedEventNames[eventName]) {
	        return prefixedEventNames[eventName];
	    } else if (!vendorPrefixes[eventName]) {
	        return eventName;
	    }

	    var prefixMap = vendorPrefixes[eventName];

	    for (var styleProp in prefixMap) {
	        if (prefixMap.hasOwnProperty(styleProp) && styleProp in style) {
	            return prefixedEventNames[eventName] = prefixMap[styleProp];
	        }
	    }

	    return '';
	}

	exports.default = getVendorPrefixedEventName;

/***/ },
/* 28 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */
	var ExecutionEnvironment = {

	  canUseDOM: canUseDOM,

	  canUseWorkers: typeof Worker !== 'undefined',

	  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

	  canUseViewport: canUseDOM && !!window.screen,

	  isInWorker: !canUseDOM // For now, this is true - might change in the future.

	};

	module.exports = ExecutionEnvironment;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isEventSupported
	 */

	'use strict';

	exports.__esModule = true;

	var _ExecutionEnvironment = __webpack_require__(28);

	var _ExecutionEnvironment2 = _interopRequireDefault(_ExecutionEnvironment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var useHasFeature;
	if (_ExecutionEnvironment2.default.canUseDOM) {
	    useHasFeature = document.implementation && document.implementation.hasFeature &&
	    // always returns true in newer browsers as per the standard.
	    // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
	    document.implementation.hasFeature('', '') !== true;
	}

	/**
	 * Checks if an event is supported in the current execution environment.
	 *
	 * NOTE: This will not work correctly for non-generic events such as `change`,
	 * `reset`, `load`, `error`, and `select`.
	 *
	 * Borrows from Modernizr.
	 *
	 * @param {string} eventNameSuffix Event name, e.g. "click".
	 * @param {?boolean} capture Check if the capture phase is supported.
	 * @return {boolean} True if the event is supported.
	 * @internal
	 * @license Modernizr 3.0.0pre (Custom Build) | MIT
	 */
	function isEventSupported(eventNameSuffix, capture) {
	    if (!_ExecutionEnvironment2.default.canUseDOM || capture && !('addEventListener' in document)) {
	        return false;
	    }

	    var eventName = 'on' + eventNameSuffix;
	    var isSupported = eventName in document;

	    if (!isSupported) {
	        var element = document.createElement('div');
	        element.setAttribute(eventName, 'return;');
	        isSupported = typeof element[eventName] === 'function';
	    }

	    if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {
	        // This is the only way to test support for the `wheel` event in IE9+.
	        isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
	    }

	    return isSupported;
	}

	exports.default = isEventSupported;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMComponentTree
	 */

	'use strict';

	exports.__esModule = true;

	var _reactProdInvariant = __webpack_require__(17);

	var _reactProdInvariant2 = _interopRequireDefault(_reactProdInvariant);

	var _ReactDOMComponentFlags = __webpack_require__(31);

	var _ReactDOMComponentFlags2 = _interopRequireDefault(_ReactDOMComponentFlags);

	var _invariant = __webpack_require__(15);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// var DOMProperty = require('./DOMProperty');
	var ATTR_NAME = 'data-reactid'; //DOMProperty.ID_ATTRIBUTE_NAME;
	var Flags = _ReactDOMComponentFlags2.default;

	var internalInstanceKey = '__reactInternalInstance$' + Math.random().toString(36).slice(2);

	/**
	 * Drill down (through composites and empty components) until we get a host or
	 * host text component.
	 *
	 * This is pretty polymorphic but unavoidable with the current structure we have
	 * for `_renderedChildren`.
	 */
	function getRenderedHostOrTextFromComponent(component) {
	  var rendered;
	  while (rendered = component._renderedComponent) {
	    component = rendered;
	  }
	  return component;
	}

	/**
	 * Populate `_hostNode` on the rendered host/text component with the given
	 * DOM node. The passed `inst` can be a composite.
	 */
	function precacheNode(inst, node) {
	  var hostInst = getRenderedHostOrTextFromComponent(inst);
	  hostInst._hostNode = node;
	  if (node[internalInstanceKey]) {
	    hostInst._rootNodeID = node[internalInstanceKey]._rootNodeID;
	  }
	  node[internalInstanceKey] = hostInst;
	}

	function uncacheNode(inst) {
	  var node = inst._hostNode;
	  if (node) {
	    delete node[internalInstanceKey];
	    inst._hostNode = null;
	  }
	}

	/**
	 * Populate `_hostNode` on each child of `inst`, assuming that the children
	 * match up with the DOM (element) children of `node`.
	 *
	 * We cache entire levels at once to avoid an n^2 problem where we access the
	 * children of a node sequentially and have to walk from the start to our target
	 * node every time.
	 *
	 * Since we update `_renderedChildren` and the actual DOM at (slightly)
	 * different times, we could race here and see a newer `_renderedChildren` than
	 * the DOM nodes we see. To avoid this, ReactMultiChild calls
	 * `prepareToManageChildren` before we change `_renderedChildren`, at which
	 * time the container's child nodes are always cached (until it unmounts).
	 */
	function precacheChildNodes(inst, node) {
	  if (inst._flags & Flags.hasCachedChildNodes) {
	    return;
	  }
	  var children = inst._renderedChildren;
	  var childNode = node.firstChild;
	  outer: for (var name in children) {
	    if (!children.hasOwnProperty(name)) {
	      continue;
	    }
	    var childInst = children[name];
	    var childID = getRenderedHostOrTextFromComponent(childInst)._domID;
	    if (childID == null) {
	      // We're currently unmounting this child in ReactMultiChild; skip it.
	      continue;
	    }
	    // We assume the child nodes are in the same order as the child instances.
	    for (; childNode !== null; childNode = childNode.nextSibling) {
	      if (childNode.nodeType === 1 && childNode.getAttribute(ATTR_NAME) === String(childID) || childNode.nodeType === 8 && childNode.nodeValue === ' react-text: ' + childID + ' ' || childNode.nodeType === 8 && childNode.nodeValue === ' react-empty: ' + childID + ' ') {
	        precacheNode(childInst, childNode);
	        continue outer;
	      }
	    }
	    // We reached the end of the DOM children without finding an ID match.
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Unable to find element with ID %s.', childID) : (0, _reactProdInvariant2.default)('32', childID) : void 0;
	  }
	  inst._flags |= Flags.hasCachedChildNodes;
	}

	// 需要频繁读取 dom
	// 看情况是否需要改成构建整个 tree
	function __buildCacheTree(node, findParent) {
	  // console.time()
	  var now,
	      last,
	      closest = last = node && node[internalInstanceKey] || null;
	  // 不确定之前缓存的 _hostParent 是否需要更新
	  while (node = node && node.parentNode) {
	    now = node[internalInstanceKey];
	    if (now) {
	      closest = closest || now;
	      if (last) last._hostParent = now;
	      last = now;
	    }
	    if (node.body) break;
	  }
	  // console.timeEnd()
	  return findParent ? last : closest;
	}

	/**
	 * Given a DOM node, return the closest ReactDOMComponent or
	 * ReactDOMTextComponent instance ancestor.
	 */
	function getClosestInstanceFromNode(node) {
	  if (node[internalInstanceKey]) {
	    return node[internalInstanceKey];
	  }

	  // 实际只有绑定了事件的才会有 internalInstanceKey，所以应该：
	  // 找出节点所在分支上所有绑定了事件的节点
	  // 直接从父节点开始
	  return __buildCacheTree(node.parentNode);

	  // Walk up the tree until we find an ancestor whose instance we have cached.
	  // var parents = [];
	  // while (!node[internalInstanceKey]) {
	  //   parents.push(node);
	  //   if (node.parentNode) {
	  //     node = node.parentNode;
	  //   } else {
	  //     // Top of the tree. This node must not be part of a React tree (or is
	  //     // unmounted, potentially).
	  //     return null;
	  //   }
	  // }

	  // var closest;
	  // var inst;
	  // for (; node && (inst = node[internalInstanceKey]); node = parents.pop()) {
	  //   closest = inst;
	  //   if (parents.length) {
	  //     precacheChildNodes(inst, node);
	  //   }
	  // }

	  // return closest;
	}

	/**
	 * Given a DOM node, return the ReactDOMComponent or ReactDOMTextComponent
	 * instance, or null if the node was not rendered by this React.
	 */
	function getInstanceFromNode(node) {
	  var inst = getClosestInstanceFromNode(node);
	  if (inst != null && inst._hostNode === node) {
	    return inst;
	  } else {
	    return null;
	  }
	}

	/**
	 * Given a ReactDOMComponent or ReactDOMTextComponent, return the corresponding
	 * DOM node.
	 */
	function getNodeFromInstance(inst) {
	  // Without this first invariant, passing a non-DOM-component triggers the next
	  // invariant for a missing parent, which is super confusing.
	  !(inst._hostNode !== undefined) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'getNodeFromInstance: Invalid argument.') : (0, _reactProdInvariant2.default)('33') : void 0;

	  if (inst._hostNode) {
	    return inst._hostNode;
	  }

	  // Walk up the tree until we find an ancestor whose DOM node we have cached.
	  var parents = [];
	  while (!inst._hostNode) {
	    parents.push(inst);
	    !inst._hostParent ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'React DOM tree root should always have a node reference.') : (0, _reactProdInvariant2.default)('34') : void 0;
	    inst = inst._hostParent;
	  }

	  // Now parents contains each ancestor that does *not* have a cached native
	  // node, and `inst` is the deepest ancestor that does.
	  for (; parents.length; inst = parents.pop()) {
	    precacheChildNodes(inst, inst._hostNode);
	  }

	  return inst._hostNode;
	}

	var ReactDOMComponentTree = {
	  getClosestInstanceFromNode: getClosestInstanceFromNode,
	  getInstanceFromNode: getInstanceFromNode,
	  getNodeFromInstance: getNodeFromInstance,
	  precacheChildNodes: precacheChildNodes,
	  precacheNode: precacheNode,
	  uncacheNode: uncacheNode,
	  internalInstanceKey: internalInstanceKey,
	  __buildCacheTree: __buildCacheTree
	};

		exports.default = ReactDOMComponentTree;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 31 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMComponentFlags
	 */

	'use strict';

	exports.__esModule = true;
	var ReactDOMComponentFlags = {
	  hasCachedChildNodes: 1 << 0
	};

		exports.default = ReactDOMComponentFlags;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _ReactEventBridge = __webpack_require__(11);

	var _ReactEventBridge2 = _interopRequireDefault(_ReactEventBridge);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var event = function event() {
	    _ReactEventBridge2.default & _ReactEventBridge2.default.apply(null, arguments);
	};
	//这里要修正
	exports.default = event;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.Component = Component;

	var _constants = __webpack_require__(9);

	var _util = __webpack_require__(10);

	var _linkedState = __webpack_require__(34);

	var _component = __webpack_require__(35);

	var _renderQueue = __webpack_require__(36);

	/** Base Component class, for the ES6 Class method of creating Components
	 *	@public
	 *
	 *	@example
	 *	class MyFoo extends Component {
	 *		render(props, state) {
	 *			return <div />;
	 *		}
	 *	}
	 */
	function Component(props, context) {
		/** @private */
		this._dirty = true;
		// /** @public */
		// this._disableRendering = false;
		// /** @public */
		// this.prevState = this.prevProps = this.prevContext = this.base = this.nextBase = this._parentComponent = this._component = this.__ref = this.__key = this._linkedStates = this._renderCallbacks = null;
		/** @public */
		this.context = context;
		/** @type {object} */
		this.props = props;
		/** @type {object} */
		if (!this.state) this.state = {};
	}

	(0, _util.extend)(Component.prototype, {

		/** Returns a `boolean` value indicating if the component should re-render when receiving the given `props` and `state`.
	  *	@param {object} nextProps
	  *	@param {object} nextState
	  *	@param {object} nextContext
	  *	@returns {Boolean} should the component re-render
	  *	@name shouldComponentUpdate
	  *	@function
	  */
		// shouldComponentUpdate() {
		// 	return true;
		// },


		/** Returns a function that sets a state property when called.
	  *	Calling linkState() repeatedly with the same arguments returns a cached link function.
	  *
	  *	Provides some built-in special cases:
	  *		- Checkboxes and radio buttons link their boolean `checked` value
	  *		- Inputs automatically link their `value` property
	  *		- Event paths fall back to any associated Component if not found on an element
	  *		- If linked value is a function, will invoke it and use the result
	  *
	  *	@param {string} key		The path to set - can be a dot-notated deep key
	  *	@param {string} [eventPath]	If set, attempts to find the new state value at a given dot-notated path within the object passed to the linkedState setter.
	  *	@returns {function} linkStateSetter(e)
	  *
	  *	@example Update a "text" state value when an input changes:
	  *		<input onChange={ this.linkState('text') } />
	  *
	  *	@example Set a deep state value on click
	  *		<button onClick={ this.linkState('touch.coords', 'touches.0') }>Tap</button
	  */
		linkState: function linkState(key, eventPath) {
			var c = this._linkedStates || (this._linkedStates = {});
			return c[key + eventPath] || (c[key + eventPath] = (0, _linkedState.createLinkedState)(this, key, eventPath));
		},


		/** Update component state by copying properties from `state` to `this.state`.
	  *	@param {object} state		A hash of state properties to update with new values
	  */
		setState: function setState(state, callback) {
			var s = this.state;
			if (!this.prevState) this.prevState = (0, _util.clone)(s);
			(0, _util.extend)(s, (0, _util.isFunction)(state) ? state(s, this.props) : state);
			if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
			(0, _renderQueue.enqueueRender)(this);
		},


		/** Immediately perform a synchronous re-render of the component.
	  *	@private
	  */
		forceUpdate: function forceUpdate(callback) {
			(0, _component.renderComponent)(this, _constants.FORCE_RENDER);
			// eslint-disable-next-line
			if (typeof callback === 'function') callback();
		},


		/** Accepts `props` and `state`, and returns a new Virtual DOM tree to build.
	  *	Virtual DOM is generally constructed via [JSX](http://jasonformat.com/wtf-is-jsx).
	  *	@param {object} props		Props (eg: JSX attributes) received from parent element/component
	  *	@param {object} state		The component's current state
	  *	@param {object} context		Context object (if a parent component has provided context)
	  *	@returns VNode
	  */
		render: function render() {}
		});

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.createLinkedState = createLinkedState;

	var _util = __webpack_require__(10);

	/** Create an Event handler function that sets a given state property.
	 *	@param {Component} component	The component whose state should be updated
	 *	@param {string} key				A dot-notated key path to update in the component's state
	 *	@param {string} eventPath		A dot-notated key path to the value that should be retrieved from the Event or component
	 *	@returns {function} linkedStateHandler
	 *	@private
	 */
	function createLinkedState(component, key, eventPath) {
		var path = key.split('.');
		return function (e) {
			var t = e && e.target || this,
			    state = {},
			    obj = state,
			    v = (0, _util.isString)(eventPath) ? (0, _util.delve)(e, eventPath) : t.nodeName ? t.type.match(/^che|rad/) ? t.checked : t.value : e,
			    i = 0;
			for (; i < path.length - 1; i++) {
				obj = obj[path[i]] || (obj[path[i]] = !i && component.state[path[i]] || {});
			}
			obj[path[i]] = v;
			component.setState(state);
		};
	}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.setComponentProps = setComponentProps;
	exports.renderComponent = renderComponent;
	exports.buildComponentFromVNode = buildComponentFromVNode;
	exports.unmountComponent = unmountComponent;

	var _constants = __webpack_require__(9);

	var _options = __webpack_require__(7);

	var _options2 = _interopRequireDefault(_options);

	var _util = __webpack_require__(10);

	var _renderQueue = __webpack_require__(36);

	var _index = __webpack_require__(37);

	var _diff = __webpack_require__(39);

	var _functionalComponent = __webpack_require__(38);

	var _componentRecycler = __webpack_require__(42);

	var _index2 = __webpack_require__(40);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/** Set a component's `props` (generally derived from JSX attributes).
	 *	@param {Object} props
	 *	@param {Object} [opts]
	 *	@param {boolean} [opts.renderSync=false]	If `true` and {@link options.syncComponentUpdates} is `true`, triggers synchronous rendering.
	 *	@param {boolean} [opts.render=true]			If `false`, no render will be triggered.
	 */

	// m-end
	function setComponentProps(component, props, opts, context, mountAll) {
		if (component._disable) return;
		component._disable = true;

		// 保存下 ref 和 key
		if (component.__ref = props.ref) delete props.ref;
		if (component.__key = props.key) delete props.key;

		// 如果没有对应的 DOM 节点，说明是首次挂载
		if (!component.base || mountAll) {
			if (component.componentWillMount) component.componentWillMount();
		}
		// 否则是更新
		else if (component.componentWillReceiveProps) {
				component.componentWillReceiveProps(props, context);
			}

		if (context && context !== component.context) {
			if (!component.prevContext) component.prevContext = component.context;
			component.context = context;
		}

		if (!component.prevProps) component.prevProps = component.props;
		component.props = props;

		component._disable = false;

		if (opts !== _constants.NO_RENDER) {
			if (opts === _constants.SYNC_RENDER || _options2.default.syncComponentUpdates !== false || !component.base) {
				renderComponent(component, _constants.SYNC_RENDER, mountAll);
			} else {
				(0, _renderQueue.enqueueRender)(component);
			}
		}

		// 执行 ref
		if (component.__ref) component.__ref(component);
	}

	/** Render a Component, triggering necessary lifecycle events and taking High-Order Components into account.
	 *	@param {Component} component
	 *	@param {Object} [opts]
	 *	@param {boolean} [opts.build=false]		If `true`, component will build and store a DOM node if not already associated with one.
	 *	@private
	 */

	// m-start
	// import { isFunction, clone, extend } from '../util';
	function renderComponent(component, opts, mountAll, isChild) {
		if (component._disable) return;

		var skip = void 0,
		    rendered = void 0,
		    props = component.props,
		    state = component.state,
		    context = component.context,
		    previousProps = component.prevProps || props,
		    previousState = component.prevState || state,
		    previousContext = component.prevContext || context,

		// 如果该组件的实例关联了 DOM 节点，说明是更新
		isUpdate = component.base,
		    nextBase = component.nextBase,
		    initialBase = isUpdate || nextBase,
		    initialChildComponent = component._component,
		    inst = void 0,
		    cbase = void 0;

		// if updating
		if (isUpdate) {
			component.props = previousProps;
			component.state = previousState;
			component.context = previousContext;
			// 执行 shouldComponentUpdate
			if (opts !== _constants.FORCE_RENDER && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === false) {
				skip = true;
			} else if (component.componentWillUpdate) {
				component.componentWillUpdate(props, state, context);
			}
			component.props = props;
			component.state = state;
			component.context = context;
		}

		component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
		component._dirty = false;

		// 如果不跳过
		if (!skip) {
			// 渲染得到新的 vDOM

			// 普通组件
			if (component.render) rendered = component.render(props, state, context);

			// context to pass to the child, can be updated via (grand-)parent component
			if (component.getChildContext) {
				context = (0, _util.extend)((0, _util.clone)(context), component.getChildContext());
			}
			// 纯函数组件
			while ((0, _functionalComponent.isFunctionalComponent)(rendered)) {
				rendered = (0, _functionalComponent.buildFunctionalComponent)(rendered, context);
			}

			// 拿到渲染得到的 DOM 节点
			var childComponent = rendered && rendered.nodeName,
			    toUnmount = void 0,
			    base = void 0;

			if ((0, _util.isFunction)(childComponent)) {
				// set up high order component link

				var childProps = (0, _index.getNodeProps)(rendered);
				inst = initialChildComponent;

				if (inst && inst.constructor === childComponent && childProps.key == inst.__key) {
					setComponentProps(inst, childProps, _constants.SYNC_RENDER, context);
				} else {
					toUnmount = inst;

					inst = (0, _componentRecycler.createComponent)(childComponent, childProps, context);
					inst.nextBase = inst.nextBase || nextBase;
					inst._parentComponent = component;
					component._component = inst;
					setComponentProps(inst, childProps, _constants.NO_RENDER, context);
					renderComponent(inst, _constants.SYNC_RENDER, mountAll, true);
				}

				base = inst.base;
			} else {
				cbase = initialBase;

				// destroy high order component link
				toUnmount = initialChildComponent;
				if (toUnmount) {
					cbase = component._component = null;
				}

				if (initialBase || opts === _constants.SYNC_RENDER) {
					if (cbase) cbase._component = null;
					base = (0, _diff.diff)(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, true);
				}
			}

			if (initialBase && base !== initialBase && inst !== initialChildComponent) {
				var baseParent = initialBase.parentNode;
				if (baseParent && base !== baseParent) {
					baseParent.replaceChild(base, initialBase);

					if (!toUnmount) {
						initialBase._component = null;
						(0, _diff.recollectNodeTree)(initialBase);
					}
				}
			}

			if (toUnmount) {
				unmountComponent(toUnmount, base !== initialBase);
			}

			component.base = base;
			if (base && !isChild) {
				var componentRef = component,
				    t = component;
				while (t = t._parentComponent) {
					(componentRef = t).base = base;
				}
				base._component = componentRef;
				base._componentConstructor = componentRef.constructor;
			}
		}

		if (!isUpdate || mountAll) {
			_diff.mounts.unshift(component);
		} else if (!skip) {
			if (component.componentDidUpdate) {
				component.componentDidUpdate(previousProps, previousState, previousContext);
			}
			if (_options2.default.afterUpdate) _options2.default.afterUpdate(component);
		}

		var cb = component._renderCallbacks,
		    fn = void 0;
		if (cb) while (fn = cb.pop()) {
			fn.call(component);
		}if (!_diff.diffLevel && !isChild) (0, _diff.flushMounts)();
	}

	/** Apply the Component referenced by a VNode to the DOM.
	 *	@param {Element} dom	The DOM node to mutate
	 *	@param {VNode} vnode	A Component-referencing VNode
	 *	@returns {Element} dom	The created/mutated element
	 *	@private
	 */
	function buildComponentFromVNode(dom, vnode, context, mountAll) {
		// c 表示这个 DOM 节点对应的 component，如果是初次挂载那么 dom 为 null
		var c = dom && dom._component,
		    originalComponent = c,
		    oldDom = dom,
		    isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
		    isOwner = isDirectOwner,
		    props = (0, _index.getNodeProps)(vnode);

		// 判断这个 dom 节点是不是 VNode 的所有者
		while (c && !isOwner && (c = c._parentComponent)) {
			isOwner = c.constructor === vnode.nodeName;
		}
		// 是
		if (c && isOwner && (!mountAll || c._component)) {
			setComponentProps(c, props, _constants.ASYNC_RENDER, context, mountAll);
			dom = c.base;
		}
		// 不是
		else {
				// 如果已经挂载，需要卸掉
				if (originalComponent && !isDirectOwner) {
					unmountComponent(originalComponent, true);
					dom = oldDom = null;
				}
				// 重新创建 component
				c = (0, _componentRecycler.createComponent)(vnode.nodeName, props, context);
				if (dom && !c.nextBase) {
					c.nextBase = dom;
					// passing dom/oldDom as nextBase will recycle it if unused, so bypass recycling on L241:
					oldDom = null;
				}
				// 设置属性
				setComponentProps(c, props, _constants.SYNC_RENDER, context, mountAll);
				// 创建的 DOM 节点在 base 上
				dom = c.base;
				// 如果发现 DOM 被改变了
				if (oldDom && dom !== oldDom) {
					// 回收节点
					oldDom._component = null;
					(0, _diff.recollectNodeTree)(oldDom);
				}
			}

		return dom;
	}

	/** Remove a component from the DOM and recycle it.
	 *	@param {Element} dom			A DOM node from which to unmount the given Component
	 *	@param {Component} component	The Component instance to unmount
	 *	@private
	 */
	function unmountComponent(component, remove) {
		if (_options2.default.beforeUnmount) _options2.default.beforeUnmount(component);

		// console.log(`${remove?'Removing':'Unmounting'} component: ${component.constructor.name}`);
		var base = component.base;

		component._disable = true;

		if (component.componentWillUnmount) component.componentWillUnmount();

		// m-start
		(0, _util.resetNode)(component.base);
		// m-end
		component.base = null;

		// recursively tear down & recollect high-order component children:
		var inner = component._component;
		if (inner) {
			unmountComponent(inner, remove);
		} else if (base) {
			if (base[_constants.ATTR_KEY] && base[_constants.ATTR_KEY].ref) base[_constants.ATTR_KEY].ref(null);

			component.nextBase = base;

			if (remove) {
				(0, _index2.removeNode)(base);
				(0, _componentRecycler.collectComponent)(component);
			}
			var c = void 0;
			while (c = base.lastChild) {
				(0, _diff.recollectNodeTree)(c, !remove);
			} // removeOrphanedChildren(base.childNodes, true);
		}

		if (component.__ref) component.__ref(null);
		if (component.componentDidUnmount) component.componentDidUnmount();
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.enqueueRender = enqueueRender;
	exports.rerender = rerender;

	var _options = __webpack_require__(7);

	var _options2 = _interopRequireDefault(_options);

	var _util = __webpack_require__(10);

	var _component = __webpack_require__(35);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/** Managed queue of dirty components to be re-rendered */

	// items/itemsOffline swap on each rerender() call (just a simple pool technique)
	var items = [];

	function enqueueRender(component) {
		if (!component._dirty && (component._dirty = true) && items.push(component) == 1) {
			(_options2.default.debounceRendering || _util.defer)(rerender);
		}
	}

	function rerender() {
		var p = void 0,
		    list = items;
		items = [];
		while (p = list.pop()) {
			if (p._dirty) (0, _component.renderComponent)(p);
		}
	}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.isSameNodeType = isSameNodeType;
	exports.isNamedNode = isNamedNode;
	exports.getNodeProps = getNodeProps;

	var _util = __webpack_require__(10);

	var _functionalComponent = __webpack_require__(38);

	/** Check if two nodes are equivalent.
	 *	@param {Element} node
	 *	@param {VNode} vnode
	 *	@private
	 */
	function isSameNodeType(node, vnode) {
		if ((0, _util.isString)(vnode)) {
			return node instanceof Text;
		}
		if ((0, _util.isString)(vnode.nodeName)) {
			return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
		}
		if ((0, _util.isFunction)(vnode.nodeName)) {
			return (node._componentConstructor ? node._componentConstructor === vnode.nodeName : true) || (0, _functionalComponent.isFunctionalComponent)(vnode);
		}
	}

	function isNamedNode(node, nodeName) {
		return node.normalizedNodeName === nodeName || (0, _util.toLowerCase)(node.nodeName) === (0, _util.toLowerCase)(nodeName);
	}

	/**
	 * Reconstruct Component-style `props` from a VNode.
	 * Ensures default/fallback values from `defaultProps`:
	 * Own-properties of `defaultProps` not present in `vnode.attributes` are added.
	 * @param {VNode} vnode
	 * @returns {Object} props
	 */
	function getNodeProps(vnode) {
		var props = (0, _util.clone)(vnode.attributes);
		props.children = vnode.children;

		var defaultProps = vnode.nodeName.defaultProps;
		if (defaultProps) {
			for (var i in defaultProps) {
				if (props[i] === undefined) {
					props[i] = defaultProps[i];
				}
			}
		}

		return props;
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.isFunctionalComponent = isFunctionalComponent;
	exports.buildFunctionalComponent = buildFunctionalComponent;

	var _constants = __webpack_require__(9);

	var _index = __webpack_require__(37);

	var _util = __webpack_require__(10);

	/** Check if a VNode is a reference to a stateless functional component.
	 *	A function component is represented as a VNode whose `nodeName` property is a reference to a function.
	 *	If that function is not a Component (ie, has no `.render()` method on a prototype), it is considered a stateless functional component.
	 *	@param {VNode} vnode	A VNode
	 *	@private
	 */
	function isFunctionalComponent(vnode) {
	  var nodeName = vnode && vnode.nodeName;
	  return nodeName && (0, _util.isFunction)(nodeName) && !(nodeName.prototype && nodeName.prototype.render);
	}

	/** Construct a resultant VNode from a VNode referencing a stateless functional component.
	 *	@param {VNode} vnode	A VNode with a `nodeName` property that is a reference to a function.
	 *	@private
	 */
	function buildFunctionalComponent(vnode, context) {
	  return vnode.nodeName((0, _index.getNodeProps)(vnode), context || _constants.EMPTY);
	}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.diffLevel = exports.mounts = undefined;
	exports.flushMounts = flushMounts;
	exports.diff = diff;
	exports.recollectNodeTree = recollectNodeTree;

	var _constants = __webpack_require__(9);

	var _util = __webpack_require__(10);

	var _index = __webpack_require__(37);

	var _functionalComponent = __webpack_require__(38);

	var _component = __webpack_require__(35);

	var _index2 = __webpack_require__(40);

	var _recycler = __webpack_require__(41);

	var _options = __webpack_require__(7);

	var _options2 = _interopRequireDefault(_options);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/** Queue of components that have been mounted and are awaiting componentDidMount */

	// qreact begin
	// import { isString, isFunction } from '../util';
	var mounts = exports.mounts = [];

	/** Diff recursion count, used to track the end of the diff cycle. */

	// qreact end
	var diffLevel = exports.diffLevel = 0;

	/** Global flag indicating if the diff is currently within an SVG */
	var isSvgMode = false;

	/** Global flag indicating if the diff is performing hydration */
	var hydrating = false;

	/** Invoke queued componentDidMount lifecycle methods */
	function flushMounts() {
		var c = void 0;
		while (c = mounts.pop()) {
			if (_options2.default.afterMount) _options2.default.afterMount(c);
			if (c.componentDidMount) c.componentDidMount();
		}
	}

	/** Apply differences in a given vnode (and it's deep children) to a real DOM Node.
	 *	@param {Element} [dom=null]		A DOM node to mutate into the shape of the `vnode`
	 *	@param {VNode} vnode			A VNode (with descendants forming a tree) representing the desired DOM structure
	 *	@returns {Element} dom			The created/mutated element
	 *	@private
	 */

	/**
	 * vnode
	 *
	 * export function render(vnode, parent, merge) {
	 *	 return diff(merge, vnode, {}, false, parent);
	 * }
	 */

	function diff(dom, vnode, context, mountAll, parent, componentRoot) {
		// diffLevel having been 0 here indicates initial entry into the diff (not a subdiff)
		if (!(exports.diffLevel = diffLevel += 1, diffLevel - 1)) {
			// when first starting the diff, check if we're diffing an SVG or within an SVG
			// 判断是否在 svg 中
			isSvgMode = parent instanceof SVGElement;

			// hydration is inidicated by the existing element to be diffed not having a prop cache
			// 表示是简单节点，不是混合组件
			hydrating = dom && !(_constants.ATTR_KEY in dom);
		}

		// 在这里调用 idiff 来进行 diff, 这里面进行了节点的更新，返回的根节点
		var ret = idiff(dom, vnode, context, mountAll);

		// append the element if its a new parent
		if (parent && ret.parentNode !== parent) {
			parent.appendChild(ret);
			// m-start
			(0, _util.loseup)(vnode, ret);
			// m-end
		}

		// diffLevel being reduced to 0 means we're exiting the diff
		if (!(exports.diffLevel = diffLevel -= 1)) {
			hydrating = false;
			// invoke queued componentDidMount lifecycle methods
			// 调用组价的 DidMount 生命周期方法
			if (!componentRoot) flushMounts();
		}

		return ret;
	}

	function idiff(dom, vnode, context, mountAll) {
		var originalAttributes = vnode && vnode.attributes;

		// Resolve ephemeral Pure Functional Components
		// 如果 vnode 是一个函数就执行函数得到结果，函数返回的可能还是一个纯函数组件
		// 这里需要不断执行，直到结果不是函数
		while ((0, _functionalComponent.isFunctionalComponent)(vnode)) {
			vnode = (0, _functionalComponent.buildFunctionalComponent)(vnode, context);
		}

		// empty values (null & undefined) render as empty Text nodes
		if (vnode == null) vnode = '';

		// Fast case: Strings create/update Text nodes.
		if ((0, _util.isString)(vnode)) {
			// update if it's already a Text node
			if (dom && dom instanceof Text) {
				if (dom.nodeValue != vnode) {
					dom.nodeValue = vnode;
				}
			} else {
				// it wasn't a Text node: replace it with one and recycle the old Element
				// 如果不是文本节点，对节点进行回收
				if (dom) recollectNodeTree(dom);
				dom = document.createTextNode(vnode);
			}

			// Mark for non-hydration updates
			dom[_constants.ATTR_KEY] = true;
			return dom;
		}

		// If the VNode represents a Component, perform a component diff.
		// 如果节点是一个普通的 Component
		// 注意 isFunctionalComponent 检验是不是纯函数组件
		if ((0, _util.isFunction)(vnode.nodeName)) {
			return (0, _component.buildComponentFromVNode)(dom, vnode, context, mountAll);
		}

		var out = dom,
		    nodeName = String(vnode.nodeName),
		    // @TODO this masks undefined component errors as `<undefined>`
		prevSvgMode = isSvgMode,
		    vchildren = vnode.children;

		// SVGs have special namespace stuff.
		// This tracks entering and exiting that namespace when descending through the tree.
		isSvgMode = nodeName === 'svg' ? true : nodeName === 'foreignObject' ? false : isSvgMode;

		if (!dom) {
			// case: we had no element to begin with
			// - create an element with the nodeName from VNode
			// 调用 createElement(NS) 来创建 DOM 节点
			out = (0, _recycler.createNode)(nodeName, isSvgMode);
			// m-start
			vnode && (0, _util.loseup)(vnode, out);
			// m_end
		}
		// 如果 DOM 节点的类型和虚拟 Node 不符
		else if (!(0, _index.isNamedNode)(dom, nodeName)) {
				// case: Element and VNode had different nodeNames
				// - need to create the correct Element to match VNode
				// - then migrate children from old to new

				// 调用 createElement(NS) 来创建 DOM 节点
				out = (0, _recycler.createNode)(nodeName, isSvgMode);
				// m-start
				vnode && (0, _util.loseup)(vnode, out);
				// m_end

				// move children into the replacement node
				// 将子节点全部移入到新的节点中去
				while (dom.firstChild) {
					out.appendChild(dom.firstChild);
				} // if the previous Element was mounted into the DOM, replace it inline
				// 替换节点
				if (dom.parentNode) dom.parentNode.replaceChild(out, dom);

				// recycle the old element (skips non-Element node types)
				// 回收原节点
				recollectNodeTree(dom);
			}

		var fc = out.firstChild,
		    props = out[_constants.ATTR_KEY];

		// Attribute Hydration: if there is no prop cache on the element,
		// ...create it and populate it with the element's attributes.
		if (!props) {
			out[_constants.ATTR_KEY] = props = {};
			for (var a = out.attributes, i = a.length; i--;) {
				props[a[i].name] = a[i].value;
			}
		}

		// Optimization: fast-path for elements containing a single TextNode:
		// 以字符串为内容的节点
		if (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === 'string' && fc && fc instanceof Text && !fc.nextSibling) {
			if (fc.nodeValue != vchildren[0]) {
				fc.nodeValue = vchildren[0];
			}
		}
		// otherwise, if there are existing or new children, diff them:
		else if (vchildren && vchildren.length || fc) {
				// 对子节点进行 diff
				// 一个深度优先的遍历
				innerDiffNode(out, vchildren, context, mountAll, !!props.dangerouslySetInnerHTML);
			}

		// Apply attributes/props from VNode to the DOM Element:
		// 对属性进行 diff
		diffAttributes(out, vnode.attributes, props, vnode);

		// invoke original ref (from before resolving Pure Functional Components):

		/**
	  * 如果原来的 ref 是一个函数，就在新的节点上调用 ref
	  * <div
	  * 	ref={(ref) => this.div = ref}
	  * >
	  * </div>
	  * 可见这里 ref 就已经是 dom 节点了
	  */
		if (originalAttributes && typeof originalAttributes.ref === 'function') {
			(props.ref = originalAttributes.ref)(out);
		}

		isSvgMode = prevSvgMode;

		return out;
	}

	/** Apply child and attribute changes between a VNode and a DOM Node to the DOM.
	 *	@param {Element} dom		Element whose children should be compared & mutated
	 *	@param {Array} vchildren	Array of VNodes to compare to `dom.childNodes`
	 *	@param {Object} context		Implicitly descendant context object (from most recent `getChildContext()`)
	 *	@param {Boolean} mountAll
	 *	@param {Boolean} absorb		If `true`, consumes externally created elements similar to hydration
	 */
	function innerDiffNode(dom, vchildren, context, mountAll, absorb) {
		// 原 DOM 节点
		var originalChildren = dom.childNodes,
		    children = [],
		    keyed = {},
		    keyedLen = 0,
		    min = 0,
		    len = originalChildren.length,
		    childrenLen = 0,
		    vlen = vchildren && vchildren.length,
		    j = void 0,
		    c = void 0,
		    vchild = void 0,
		    child = void 0;

		// 如果有子 dom 节点
		if (len) {
			for (var i = 0; i < len; i++) {
				var _child = originalChildren[i],
				    props = _child[_constants.ATTR_KEY],
				    key = vlen ? (c = _child._component) ? c.__key : props ? props.key : null : null;
				// 通过 key 来记录下 child 节点
				if (key != null) {
					keyedLen++;
					keyed[key] = _child;
				}
				// 这几个单词太诡异，不太懂
				else if (hydrating || absorb || props) {
						children[childrenLen++] = _child;
					}
			}
		}

		// 如果有 vnode children
		if (vlen) {
			for (var _i = 0; _i < vlen; _i++) {
				vchild = vchildren[_i];
				child = null;

				// if (isFunctionalComponent(vchild)) {
				// 	vchild = buildFunctionalComponent(vchild);
				// }

				// attempt to find a node based on key matching
				// 拿到 key
				var _key = vchild.key;
				if (_key != null) {
					// 使用 key 从 keyed 这个 map 中寻找 DOM 节点
					if (keyedLen && _key in keyed) {
						// 找到后，将 key 对应的值置空
						child = keyed[_key];
						keyed[_key] = undefined;
						// 减小 map 记录的长度
						keyedLen--;
					}
				}
				// attempt to pluck a node of the same type from the existing children

				// 如果 key 是空的，从回收的子节点中找一个同类的
				else if (!child && min < childrenLen) {
						for (j = min; j < childrenLen; j++) {
							c = children[j];
							// 找一个同类的节点
							if (c && (0, _index.isSameNodeType)(c, vchild)) {
								child = c;
								children[j] = undefined;
								if (j === childrenLen - 1) childrenLen--;
								// min 记录了原位置和 diff 后位置开始错乱的起始点
								if (j === min) min++;
								break;
							}
						}
					}

				// morph the matched/found/created DOM child to match vchild (deep)
				// 在对 child 进行 diff
				child = idiff(child, vchild, context, mountAll);

				// 如果得出的 child 不同
				if (child && child !== dom) {
					// 虚拟 Node 表示的 child 比真实 child 多
					// 追加之
					if (_i >= len) {
						dom.appendChild(child);
					}
					// diff 出来的 DOM 和原来不同
					else if (child !== originalChildren[_i]) {
							// 如果和原来位置的后一个相同，说明需要移除原位置的 DOM 节点
							if (child === originalChildren[_i + 1]) {
								(0, _index2.removeNode)(originalChildren[_i]);
							} else {
								dom.insertBefore(child, originalChildren[_i] || null);
							}
						}
				}
			}
		}

		// 如果还有没有用完的 child 回收之
		if (keyedLen) {
			for (var _i2 in keyed) {
				if (keyed[_i2]) recollectNodeTree(keyed[_i2]);
			}
		}

		// remove orphaned children
		while (min <= childrenLen) {
			child = children[childrenLen--];
			if (child) recollectNodeTree(child);
		}
		document.body.scrollTop;
	}

	/** Recursively recycle (or just unmount) a node an its descendants.
	 *	@param {Node} node						DOM node to start unmount/removal from
	 *	@param {Boolean} [unmountOnly=false]	If `true`, only triggers unmount lifecycle, skips removal
	 */
	function recollectNodeTree(node, unmountOnly) {
		var component = node._component;
		// m-start
		(0, _util.recycle)(node);
		// m-end
		if (component) {
			// if node is owned by a Component, unmount that component (ends up recursing back here)
			(0, _component.unmountComponent)(component, !unmountOnly);
		} else {
			// If the node's VNode had a ref function, invoke it with null here.
			// (this is part of the React spec, and smart for unsetting references)
			// 置空 ref 函数
			if (node[_constants.ATTR_KEY] && node[_constants.ATTR_KEY].ref) node[_constants.ATTR_KEY].ref(null);

			if (!unmountOnly) {
				(0, _recycler.collectNode)(node);
			}

			// Recollect/unmount all children.
			// - we use .lastChild here because it causes less reflow than .firstChild
			// - it's also cheaper than accessing the .childNodes Live NodeList
			// 递归地回收所有子节点
			var c = void 0;
			while (c = node.lastChild) {
				recollectNodeTree(c, unmountOnly);
			}
		}
	}

	/** Apply differences in attributes from a VNode to the given DOM Element.
	 *	@param {Element} dom		Element with attributes to diff `attrs` against
	 *	@param {Object} attrs		The desired end-state key-value attribute pairs
	 *	@param {Object} old			Current/previous attributes (from previous VNode or element's prop cache)
	 */
	function diffAttributes(dom, attrs, old, inst) {
		// remove attributes no longer present on the vnode by setting them to undefined
		var name = void 0;
		for (name in old) {
			if (!(attrs && name in attrs) && old[name] != null) {
				(0, _index2.setAccessor)(dom, name, old[name], old[name] = undefined, isSvgMode, inst);
			}
		}

		// add new & update changed attributes
		if (attrs) {
			for (name in attrs) {
				if (name !== 'children' && name !== 'innerHTML' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
					(0, _index2.setAccessor)(dom, name, old[name], old[name] = attrs[name], isSvgMode, inst);
				}
			}
		}
	}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	// m-start


	exports.removeNode = removeNode;
	exports.setAccessor = setAccessor;

	var _constants = __webpack_require__(9);

	var _options = __webpack_require__(7);

	var _options2 = _interopRequireDefault(_options);

	var _util = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// m-end


	/** Removes a given DOM Node from its parent. */
	function removeNode(node) {
		var p = node.parentNode;
		// m-start
		(0, _util.recycle)(node);
		// m-end
		if (p) p.removeChild(node);
	}

	/** Set a named attribute on the given Node, with special behavior for some names and event handlers.
	 *	If `value` is `null`, the attribute/handler will be removed.
	 *	@param {Element} node	An element to mutate
	 *	@param {string} name	The name/key to set, such as an event or attribute name
	 *	@param {any} old	The last value that was set for this name/node pair
	 *	@param {any} value	An attribute value, such as a function to be used as an event handler
	 *	@param {Boolean} isSvg	Are we currently diffing inside an svg?
	 *	@param {Object} inst VNode instance
	 *	@private
	 */
	function setAccessor(node, name, old, value, isSvg, inst) {

		if (name === 'className') name = 'class';

		if (name === 'class' && value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
			value = (0, _util.hashToClassName)(value);
		}

		if (name === 'key') {
			// ignore
		} else if (name === 'class' && !isSvg) {
			node.className = value || '';
		} else if (name === 'style') {
			// m-start
			if (_options2.default.processStyle) {
				return _options2.default.processStyle(node, name, old, value);
			}
			// m-end

			if (!value || (0, _util.isString)(value) || (0, _util.isString)(old)) {
				node.style.cssText = value || '';
			}
			if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
				if (!(0, _util.isString)(old)) {
					for (var i in old) {
						if (!(i in value)) node.style[i] = '';
					}
				}
				for (var _i in value) {
					node.style[_i] = typeof value[_i] === 'number' && !_constants.NON_DIMENSION_PROPS[_i] ? value[_i] + 'px' : value[_i];
				}
			}
		} else if (name === 'dangerouslySetInnerHTML') {
			if (value) node.innerHTML = value.__html || '';
		} else if (name[0] == 'o' && name[1] == 'n') {
			// m-start
			if (_options2.default.handleEvent) {
				return _options2.default.handleEvent(node, name, value, inst);
			}
			// m-end

			var l = node._listeners || (node._listeners = {});
			name = (0, _util.toLowerCase)(name.substring(2));
			// @TODO: this might be worth it later, un-breaks focus/blur bubbling in IE9:
			// if (node.attachEvent) name = name=='focus'?'focusin':name=='blur'?'focusout':name;
			if (value) {
				if (!l[name]) node.addEventListener(name, eventProxy, !!_constants.NON_BUBBLING_EVENTS[name]);
			} else if (l[name]) {
				node.removeEventListener(name, eventProxy, !!_constants.NON_BUBBLING_EVENTS[name]);
			}
			l[name] = value;
		} else if (name !== 'list' && name !== 'type' && !isSvg && name in node) {
			setProperty(node, name, value == null ? '' : value);
			if (value == null || value === false) node.removeAttribute(name);
		} else {
			var ns = isSvg && name.match(/^xlink\:?(.+)/);
			if (value == null || value === false) {
				if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', (0, _util.toLowerCase)(ns[1]));else node.removeAttribute(name);
			} else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object' && !(0, _util.isFunction)(value)) {
				if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', (0, _util.toLowerCase)(ns[1]), value);else node.setAttribute(name, value);
			}
		}
	}

	/** Attempt to set a DOM property to the given value.
	 *	IE & FF throw for certain property-value combinations.
	 */
	function setProperty(node, name, value) {
		try {
			node[name] = value;
		} catch (e) {}
	}

	/** Proxy an event to hooked event handlers
	 *	@private
	 */
	function eventProxy(e) {
		return this._listeners[e.type](_options2.default.event && _options2.default.event(e) || e);
	}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.collectNode = collectNode;
	exports.createNode = createNode;

	var _util = __webpack_require__(10);

	var _index = __webpack_require__(40);

	/** DOM node pool, keyed on nodeName. */

	// qreact begin
	// import { toLowerCase } from '../util';
	var nodes = {};
	// qreact end
	function collectNode(node) {
		(0, _index.removeNode)(node);

		if (node instanceof Element) {
			// qreact begin
			(0, _util.resetNode)(node);
			// qreact end

			node._component = node._componentConstructor = null;

			var name = node.normalizedNodeName || (0, _util.toLowerCase)(node.nodeName);
			(nodes[name] || (nodes[name] = [])).push(node);
		}
	}

	function createNode(nodeName, isSvg) {
		var name = (0, _util.toLowerCase)(nodeName),
		    node = nodes[name] && nodes[name].pop() || (isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName));
		node.normalizedNodeName = name;
		return node;
	}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.collectComponent = collectComponent;
	exports.createComponent = createComponent;

	var _component = __webpack_require__(33);

	/** Retains a pool of Components for re-use, keyed on component name.
	 *	Note: since component names are not unique or even necessarily available, these are primarily a form of sharding.
	 *	@private
	 */
	var components = {};

	function collectComponent(component) {
		var name = component.constructor.name,
		    list = components[name];
		if (list) list.push(component);else components[name] = [component];
	}

	function createComponent(Ctor, props, context) {
		// 这里的 Ctor 是使用 extends Component 得到的组件构造函数
		var inst = new Ctor(props, context),
		    list = components[Ctor.name];
		// 为啥这里还要这么做一次 ？
		_component.Component.call(inst, props, context);
		if (list) {
			for (var i = list.length; i--;) {
				if (list[i].constructor === Ctor) {
					inst.nextBase = list[i].nextBase;
					list.splice(i, 1);
					break;
				}
			}
		}
		return inst;
	}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.render = render;

	var _diff = __webpack_require__(39);

	/** Render JSX into a `parent` Element.
	 *	@param {VNode} vnode		A (JSX) VNode to render
	 *	@param {Element} parent		DOM element to render into
	 *	@param {Element} [merge]	Attempt to re-use an existing DOM tree rooted at `merge`
	 *	@public
	 *
	 *	@example
	 *	// render a div into <body>:
	 *	render(<div id="hello">hello!</div>, document.body);
	 *
	 *	@example
	 *	// render a "Thing" component into #foo:
	 *	const Thing = ({ name }) => <span>{ name }</span>;
	 *	render(<Thing name="one" />, document.querySelector('#foo'));
	 */
	function render(vnode, parent, merge) {
	  return (0, _diff.diff)(merge, vnode, {}, false, parent);
	}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	exports.__esModule = true;

	var _BeforeInputEventPlugin = __webpack_require__(45);

	var _BeforeInputEventPlugin2 = _interopRequireDefault(_BeforeInputEventPlugin);

	var _ChangeEventPlugin = __webpack_require__(51);

	var _ChangeEventPlugin2 = _interopRequireDefault(_ChangeEventPlugin);

	var _DefaultEventPluginOrder = __webpack_require__(54);

	var _DefaultEventPluginOrder2 = _interopRequireDefault(_DefaultEventPluginOrder);

	var _ReactDOMTreeTraversal = __webpack_require__(55);

	var _ReactDOMTreeTraversal2 = _interopRequireDefault(_ReactDOMTreeTraversal);

	var _ReactEventListener = __webpack_require__(56);

	var _ReactEventListener2 = _interopRequireDefault(_ReactEventListener);

	var _ReactDOMComponentTree = __webpack_require__(30);

	var _ReactDOMComponentTree2 = _interopRequireDefault(_ReactDOMComponentTree);

	var _ReactBrowserEventEmitter = __webpack_require__(12);

	var _ReactBrowserEventEmitter2 = _interopRequireDefault(_ReactBrowserEventEmitter);

	var _EventPluginHub = __webpack_require__(19);

	var _EventPluginHub2 = _interopRequireDefault(_EventPluginHub);

	var _EventPluginUtils = __webpack_require__(20);

	var _EventPluginUtils2 = _interopRequireDefault(_EventPluginUtils);

	var _SelectEventPlugin = __webpack_require__(59);

	var _SelectEventPlugin2 = _interopRequireDefault(_SelectEventPlugin);

	var _SimpleEventPlugin = __webpack_require__(69);

	var _SimpleEventPlugin2 = _interopRequireDefault(_SimpleEventPlugin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ReactInjection = {}; /**
	                          * Copyright 2013-present, Facebook, Inc.
	                          * All rights reserved.
	                          *
	                          * This source code is licensed under the BSD-style license found in the
	                          * LICENSE file in the root directory of this source tree. An additional grant
	                          * of patent rights can be found in the PATENTS file in the same directory.
	                          *
	                          * @providesModule ReactDefaultInjection
	                          */

	global.internalInstanceKey = _ReactDOMComponentTree2.default.internalInstanceKey;

	ReactInjection.EventEmitter = _ReactBrowserEventEmitter2.default.injection;

	ReactInjection.EventPluginHub = _EventPluginHub2.default.injection;

	ReactInjection.EventPluginUtils = _EventPluginUtils2.default.injection;

	/**
	 * onTouchTap事件可选.想用,可以
	 * var TapEventPlugin = require('./TapEventPlugin');
	 * ReactInjection.EventPluginHub.injectEventPluginsByName({
	 *    TapEventPlugin: TapEventPlugin
	 * })
	 *
	 */

	var alreadyInjected = false;

	function inject() {
	  if (alreadyInjected) {
	    // TODO: This is currently true because these injections are shared between
	    // the client and the server package. They should be built independently
	    // and not share any injection state. Then this problem will be solved.
	    return;
	  }
	  alreadyInjected = true;

	  ReactInjection.EventEmitter.injectReactEventListener(_ReactEventListener2.default);

	  /**
	   * Inject modules for resolving DOM hierarchy and plugin ordering.
	   */
	  ReactInjection.EventPluginHub.injectEventPluginOrder(_DefaultEventPluginOrder2.default);
	  ReactInjection.EventPluginUtils.injectComponentTree(_ReactDOMComponentTree2.default);
	  ReactInjection.EventPluginUtils.injectTreeTraversal(_ReactDOMTreeTraversal2.default);

	  /**
	   * Some important event plugins included by default (without having to require
	   * them).
	   */
	  ReactInjection.EventPluginHub.injectEventPluginsByName({
	    SimpleEventPlugin: _SimpleEventPlugin2.default,

	    ChangeEventPlugin: _ChangeEventPlugin2.default,
	    SelectEventPlugin: _SelectEventPlugin2.default,
	    BeforeInputEventPlugin: _BeforeInputEventPlugin2.default
	  });
	}

	exports.default = {
	  inject: inject
		};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule BeforeInputEventPlugin
	 */

	'use strict';

	// var EventConstants = require('./EventConstants');

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	// var FallbackCompositionState = require('./FallbackCompositionState');


	var _EventPropagators = __webpack_require__(46);

	var _EventPropagators2 = _interopRequireDefault(_EventPropagators);

	var _ExecutionEnvironment = __webpack_require__(28);

	var _ExecutionEnvironment2 = _interopRequireDefault(_ExecutionEnvironment);

	var _SyntheticInputEvent = __webpack_require__(47);

	var _SyntheticInputEvent2 = _interopRequireDefault(_SyntheticInputEvent);

	var _SyntheticCompositionEvent = __webpack_require__(50);

	var _SyntheticCompositionEvent2 = _interopRequireDefault(_SyntheticCompositionEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var END_KEYCODES = [9, 13, 27, 32]; // Tab, Return, Esc, Space
	var START_KEYCODE = 229;

	var canUseCompositionEvent = _ExecutionEnvironment2.default.canUseDOM && 'CompositionEvent' in window;

	var documentMode = null;
	if (_ExecutionEnvironment2.default.canUseDOM && 'documentMode' in document) {
	    documentMode = document.documentMode;
	}

	// Webkit offers a very useful `textInput` event that can be used to
	// directly represent `beforeInput`. The IE `textinput` event is not as
	// useful, so we don't use it.
	// var canUseTextInputEvent = ExecutionEnvironment.canUseDOM && 'TextEvent' in window && !documentMode && !isPresto();
	// 不处理IE
	// In IE9+, we have access to composition events, but the data supplied
	// by the native compositionend event may be incorrect. Japanese ideographic
	// spaces, for instance (\u3000) are not recorded correctly.
	// var useFallbackCompositionData = ExecutionEnvironment.canUseDOM && (!canUseCompositionEvent || documentMode && documentMode > 8 && documentMode <= 11);

	/**
	 * 不再支持旧的opera
	 * Opera <= 12 includes TextEvent in window, but does not fire
	 * text input events. Rely on keypress instead.
	 */

	var SPACEBAR_CODE = 32;
	var SPACEBAR_CHAR = String.fromCharCode(SPACEBAR_CODE);

	// var topLevelTypes = EventConstants.topLevelTypes;

	// Events and their corresponding property names.
	var eventTypes = {
	    beforeInput: {
	        phasedRegistrationNames: {
	            bubbled: 'onBeforeInput',
	            captured: 'onBeforeInputCapture'
	        },
	        dependencies: ['topCompositionEnd', 'topKeyPress', 'topTextInput', 'topPaste']
	    },
	    compositionEnd: {
	        phasedRegistrationNames: {
	            bubbled: 'onCompositionEnd',
	            captured: 'onCompositionEndCapture'
	        },
	        dependencies: ['topBlur', 'topCompositionEnd', 'topKeyDown', 'topKeyPress', 'topKeyUp', 'topMouseDown']
	    },
	    compositionStart: {
	        phasedRegistrationNames: {
	            bubbled: 'onCompositionStart',
	            captured: 'onCompositionStartCapture'
	        },
	        dependencies: ['topBlur', 'topCompositionStart', 'topKeyDown', 'topKeyPress', 'topKeyUp', 'topMouseDown']
	    },
	    compositionUpdate: {
	        phasedRegistrationNames: {
	            bubbled: 'onCompositionUpdate',
	            captured: 'onCompositionUpdateCapture'
	        },
	        dependencies: ['topBlur', 'topCompositionUpdate', 'topKeyDown', 'topKeyPress', 'topKeyUp', 'topMouseDown']
	    }
	};

	// Track whether we've ever handled a keypress on the space key.
	var hasSpaceKeypress = false;

	/**
	 * Return whether a native keypress event is assumed to be a command.
	 * This is required because Firefox fires `keypress` events for key commands
	 * (cut, copy, select-all, etc.) even though no character is inserted.
	 */
	function isKeypressCommand(nativeEvent) {
	    return (nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) &&
	    // ctrlKey && altKey is equivalent to AltGr, and is not a command.
	    !(nativeEvent.ctrlKey && nativeEvent.altKey);
	}

	/**
	 * Translate native top level events into event types.
	 *
	 * @param {string} topLevelType
	 * @return {object}
	 */
	function getCompositionEventType(topLevelType) {
	    switch (topLevelType) {
	        case 'topCompositionStart':
	            return eventTypes.compositionStart;
	        case 'topCompositionEnd':
	            return eventTypes.compositionEnd;
	        case 'topCompositionUpdate':
	            return eventTypes.compositionUpdate;
	    }
	}

	/**
	 * Does our fallback best-guess model think this event signifies that
	 * composition has begun?
	 *
	 * @param {string} topLevelType
	 * @param {object} nativeEvent
	 * @return {boolean}
	 */
	function isFallbackCompositionStart(topLevelType, nativeEvent) {
	    return topLevelType === 'topKeyDown' && nativeEvent.keyCode === START_KEYCODE;
	}

	/**
	 * Does our fallback mode think that this event is the end of composition?
	 *
	 * @param {string} topLevelType
	 * @param {object} nativeEvent
	 * @return {boolean}
	 */
	function isFallbackCompositionEnd(topLevelType, nativeEvent) {
	    switch (topLevelType) {
	        case 'topKeyUp':
	            // Command keys insert or clear IME input.
	            return END_KEYCODES.indexOf(nativeEvent.keyCode) !== -1;
	        case 'topKeyDown':
	            // Expect IME keyCode on each keydown. If we get any other
	            // code we must have exited earlier.
	            return nativeEvent.keyCode !== START_KEYCODE;
	        case 'topKeyPress':
	        case 'topMouseDown':
	        case 'topBlur':
	            // Events are not possible without cancelling IME.
	            return true;
	        default:
	            return false;
	    }
	}

	/**
	 * Google Input Tools provides composition data via a CustomEvent,
	 * with the `data` property populated in the `detail` object. If this
	 * is available on the event object, use it. If not, this is a plain
	 * composition event and we have nothing special to extract.
	 *
	 * @param {object} nativeEvent
	 * @return {?string}
	 */
	function getDataFromCustomEvent(nativeEvent) {
	    var detail = nativeEvent.detail;
	    if ((typeof detail === 'undefined' ? 'undefined' : _typeof(detail)) === 'object' && 'data' in detail) {
	        return detail.data;
	    }
	    return null;
	}

	// Track the current IME composition fallback object, if any.
	var currentComposition = null;

	/**
	 * @return {?object} A SyntheticCompositionEvent.
	 */
	function extractCompositionEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
	    var eventType;
	    var fallbackData;

	    if (canUseCompositionEvent) {
	        eventType = getCompositionEventType(topLevelType);
	    } else if (!currentComposition) {
	        if (isFallbackCompositionStart(topLevelType, nativeEvent)) {
	            eventType = eventTypes.compositionStart;
	        }
	    } else if (isFallbackCompositionEnd(topLevelType, nativeEvent)) {
	        eventType = eventTypes.compositionEnd;
	    }

	    if (!eventType) {
	        return null;
	    }

	    var event = _SyntheticCompositionEvent2.default.getPooled(eventType, targetInst, nativeEvent, nativeEventTarget);

	    var customData = getDataFromCustomEvent(nativeEvent);
	    if (customData !== null) {
	        event.data = customData;
	    }

	    _EventPropagators2.default.accumulateTwoPhaseDispatches(event);
	    return event;
	}

	/**
	 * @param {string} topLevelType Record from `EventConstants`.
	 * @param {object} nativeEvent Native browser event.
	 * @return {?string} The string corresponding to this `beforeInput` event.
	 */
	function getNativeBeforeInputChars(topLevelType, nativeEvent) {
	    switch (topLevelType) {
	        case 'topCompositionEnd':
	            return getDataFromCustomEvent(nativeEvent);
	        case 'topKeyPress':
	            /**
	             * If native `textInput` events are available, our goal is to make
	             * use of them. However, there is a special case: the spacebar key.
	             * In Webkit, preventing default on a spacebar `textInput` event
	             * cancels character insertion, but it *also* causes the browser
	             * to fall back to its default spacebar behavior of scrolling the
	             * page.
	             *
	             * Tracking at:
	             * https://code.google.com/p/chromium/issues/detail?id=355103
	             *
	             * To avoid this issue, use the keypress event as if no `textInput`
	             * event is available.
	             */
	            var which = nativeEvent.which;
	            if (which !== SPACEBAR_CODE) {
	                return null;
	            }

	            hasSpaceKeypress = true;
	            return SPACEBAR_CHAR;

	        case 'topTextInput':
	            // Record the characters to be added to the DOM.
	            var chars = nativeEvent.data;

	            // If it's a spacebar character, assume that we have already handled
	            // it at the keypress level and bail immediately. Android Chrome
	            // doesn't give us keycodes, so we need to blacklist it.
	            if (chars === SPACEBAR_CHAR && hasSpaceKeypress) {
	                return null;
	            }

	            return chars;

	        default:
	            // For other native event types, do nothing.
	            return null;
	    }
	}

	/**
	 * Extract a SyntheticInputEvent for `beforeInput`, based on either native
	 * `textInput` or fallback behavior.
	 *
	 * @return {?object} A SyntheticInputEvent.
	 */
	function extractBeforeInputEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
	    var chars;

	    //   if (canUseTextInputEvent) {
	    chars = getNativeBeforeInputChars(topLevelType, nativeEvent);
	    //    } else {
	    //        chars = getFallbackBeforeInputChars(topLevelType, nativeEvent);
	    //    }

	    // If no characters are being inserted, no BeforeInput event should
	    // be fired.
	    if (!chars) {
	        return null;
	    }

	    var event = _SyntheticInputEvent2.default.getPooled(eventTypes.beforeInput, targetInst, nativeEvent, nativeEventTarget);

	    event.data = chars;
	    _EventPropagators2.default.accumulateTwoPhaseDispatches(event);
	    return event;
	}

	/**
	 * Create an `onBeforeInput` event to match
	 * http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105/#events-inputevents.
	 *
	 * This event plugin is based on the native `textInput` event
	 * available in Chrome, Safari, Opera, and IE. This event fires after
	 * `onKeyPress` and `onCompositionEnd`, but before `onInput`.
	 *
	 * `beforeInput` is spec'd but not implemented in any browsers, and
	 * the `input` event does not provide any useful information about what has
	 * actually been added, contrary to the spec. Thus, `textInput` is the best
	 * available event to identify the characters that have actually been inserted
	 * into the target node.
	 *
	 * This plugin is also responsible for emitting `composition` events, thus
	 * allowing us to share composition fallback code for both `beforeInput` and
	 * `composition` event types.
	 */
	var BeforeInputEventPlugin = {

	    eventTypes: eventTypes,

	    extractEvents: function extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
	        return [extractCompositionEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget), extractBeforeInputEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget)];
	    }
	};

		exports.default = BeforeInputEventPlugin;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventPropagators
	 */

	'use strict';

	exports.__esModule = true;

	var _EventConstants = __webpack_require__(13);

	var _EventConstants2 = _interopRequireDefault(_EventConstants);

	var _EventPluginHub = __webpack_require__(19);

	var _EventPluginHub2 = _interopRequireDefault(_EventPluginHub);

	var _EventPluginUtils = __webpack_require__(20);

	var _EventPluginUtils2 = _interopRequireDefault(_EventPluginUtils);

	var _accumulateInto = __webpack_require__(24);

	var _accumulateInto2 = _interopRequireDefault(_accumulateInto);

	var _forEachAccumulated = __webpack_require__(25);

	var _forEachAccumulated2 = _interopRequireDefault(_forEachAccumulated);

	var _warning = __webpack_require__(22);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PropagationPhases = _EventConstants2.default.PropagationPhases;
	var getListener = _EventPluginHub2.default.getListener;

	/**
	 * Some event types have a notion of different registration names for different
	 * "phases" of propagation. This finds listeners by a given phase.
	 */
	function listenerAtPhase(inst, event, propagationPhase) {
	  var registrationName = event.dispatchConfig.phasedRegistrationNames[propagationPhase];
	  return getListener(inst, registrationName);
	}

	/**
	 * Tags a `SyntheticEvent` with dispatched listeners. Creating this function
	 * here, allows us to not have to bind or create functions for each event.
	 * Mutating the event's members allows us to not have to create a wrapping
	 * "dispatch" object that pairs the event with the listener.
	 */
	function accumulateDirectionalDispatches(inst, upwards, event) {
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(inst, 'Dispatching inst must not be null') : void 0;
	  }
	  var phase = upwards ? PropagationPhases.bubbled : PropagationPhases.captured;
	  var listener = listenerAtPhase(inst, event, phase);
	  if (listener) {
	    event._dispatchListeners = (0, _accumulateInto2.default)(event._dispatchListeners, listener);
	    event._dispatchInstances = (0, _accumulateInto2.default)(event._dispatchInstances, inst);
	  }
	}

	/**
	 * Collect dispatches (must be entirely collected before dispatching - see unit
	 * tests). Lazily allocate the array to conserve memory.  We must loop through
	 * each event and perform the traversal for each one. We cannot perform a
	 * single traversal for the entire collection of events because each event may
	 * have a different target.
	 */
	function accumulateTwoPhaseDispatchesSingle(event) {
	  if (event && event.dispatchConfig.phasedRegistrationNames) {
	    _EventPluginUtils2.default.traverseTwoPhase(event._targetInst, accumulateDirectionalDispatches, event);
	  }
	}

	/**
	 * Same as `accumulateTwoPhaseDispatchesSingle`, but skips over the targetID.
	 */
	function accumulateTwoPhaseDispatchesSingleSkipTarget(event) {
	  if (event && event.dispatchConfig.phasedRegistrationNames) {
	    var targetInst = event._targetInst;
	    var parentInst = targetInst ? _EventPluginUtils2.default.getParentInstance(targetInst) : null;
	    _EventPluginUtils2.default.traverseTwoPhase(parentInst, accumulateDirectionalDispatches, event);
	  }
	}

	/**
	 * Accumulates without regard to direction, does not look for phased
	 * registration names. Same as `accumulateDirectDispatchesSingle` but without
	 * requiring that the `dispatchMarker` be the same as the dispatched ID.
	 */
	function accumulateDispatches(inst, ignoredDirection, event) {
	  if (event && event.dispatchConfig.registrationName) {
	    var registrationName = event.dispatchConfig.registrationName;
	    var listener = getListener(inst, registrationName);
	    if (listener) {
	      event._dispatchListeners = (0, _accumulateInto2.default)(event._dispatchListeners, listener);
	      event._dispatchInstances = (0, _accumulateInto2.default)(event._dispatchInstances, inst);
	    }
	  }
	}

	/**
	 * Accumulates dispatches on an `SyntheticEvent`, but only for the
	 * `dispatchMarker`.
	 * @param {SyntheticEvent} event
	 */
	function accumulateDirectDispatchesSingle(event) {
	  if (event && event.dispatchConfig.registrationName) {
	    accumulateDispatches(event._targetInst, null, event);
	  }
	}

	function accumulateTwoPhaseDispatches(events) {
	  (0, _forEachAccumulated2.default)(events, accumulateTwoPhaseDispatchesSingle);
	}

	function accumulateTwoPhaseDispatchesSkipTarget(events) {
	  (0, _forEachAccumulated2.default)(events, accumulateTwoPhaseDispatchesSingleSkipTarget);
	}

	function accumulateEnterLeaveDispatches(leave, enter, from, to) {
	  _EventPluginUtils2.default.traverseEnterLeave(from, to, accumulateDispatches, leave, enter);
	}

	function accumulateDirectDispatches(events) {
	  (0, _forEachAccumulated2.default)(events, accumulateDirectDispatchesSingle);
	}

	/**
	 * A small set of propagation patterns, each of which will accept a small amount
	 * of information, and generate a set of "dispatch ready event objects" - which
	 * are sets of events that have already been annotated with a set of dispatched
	 * listener functions/ids. The API is designed this way to discourage these
	 * propagation strategies from actually executing the dispatches, since we
	 * always want to collect the entire set of dispatches before executing event a
	 * single one.
	 *
	 * @constructor EventPropagators
	 */
	var EventPropagators = {
	  accumulateTwoPhaseDispatches: accumulateTwoPhaseDispatches,
	  accumulateTwoPhaseDispatchesSkipTarget: accumulateTwoPhaseDispatchesSkipTarget,
	  accumulateDirectDispatches: accumulateDirectDispatches,
	  accumulateEnterLeaveDispatches: accumulateEnterLeaveDispatches
	};

		exports.default = EventPropagators;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticInputEvent
	 */

	'use strict';

	exports.__esModule = true;

	var _SyntheticEvent = __webpack_require__(48);

	var _SyntheticEvent2 = _interopRequireDefault(_SyntheticEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105
	 *      /#events-inputevents
	 */
	//var InputEventInterface = {
	//  data: null
	//};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	//function SyntheticInputEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	//  return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	//}
	//
	//SyntheticEvent.augmentClass(SyntheticInputEvent, InputEventInterface);

	exports.default = _SyntheticEvent2.default;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticEvent
	 */

	'use strict';

	exports.__esModule = true;

	var _objectAssign = __webpack_require__(3);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _PooledClass = __webpack_require__(49);

	var _PooledClass2 = _interopRequireDefault(_PooledClass);

	var _emptyFunction = __webpack_require__(23);

	var _emptyFunction2 = _interopRequireDefault(_emptyFunction);

	var _warning = __webpack_require__(22);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var didWarnForAddedNewProperty = false;
	var isProxySupported = typeof Proxy === 'function';

	var shouldBeReleasedProperties = ['dispatchConfig', '_targetInst', 'nativeEvent', 'isDefaultPrevented', 'isPropagationStopped', '_dispatchListeners', '_dispatchInstances'];

	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var EventInterface = {
	  type: null,
	  target: null,
	  // currentTarget is set when dispatching; no use in copying it here
	  currentTarget: _emptyFunction2.default.thatReturnsNull,
	  eventPhase: null,
	  bubbles: null,
	  cancelable: null,
	  timeStamp: function timeStamp(event) {
	    return event.timeStamp || Date.now();
	  },
	  defaultPrevented: null,
	  isTrusted: null
	};

	/**
	 * Synthetic events are dispatched by event plugins, typically in response to a
	 * top-level event delegation handler.
	 *
	 * These systems should generally use pooling to reduce the frequency of garbage
	 * collection. The system should check `isPersistent` to determine whether the
	 * event should be released into the pool after being dispatched. Users that
	 * need a persisted event should invoke `persist`.
	 *
	 * Synthetic events (and subclasses) implement the DOM Level 3 Events API by
	 * normalizing browser quirks. Subclasses do not necessarily have to implement a
	 * DOM interface; custom application-specific events can also subclass this.
	 *
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {*} targetInst Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @param {DOMEventTarget} nativeEventTarget Target node.
	 */
	function SyntheticEvent(dispatchConfig, targetInst, nativeEvent, nativeEventTarget) {
	  if (process.env.NODE_ENV !== 'production') {
	    // these have a getter/setter for warnings
	    delete this.nativeEvent;
	    delete this.preventDefault;
	    delete this.stopPropagation;
	  }

	  this.dispatchConfig = dispatchConfig;
	  this._targetInst = targetInst;
	  this.nativeEvent = nativeEvent;
	  for (var i in nativeEvent) {
	    var val = nativeEvent[i];
	    if (typeof val !== 'function') {
	      this[i] = val;
	    }
	  }
	  var Interface = this.constructor.Interface;
	  for (var propName in Interface) {
	    if (!Interface.hasOwnProperty(propName)) {
	      continue;
	    }
	    var normalize = Interface[propName];
	    if (typeof normalize === 'function') {
	      this[propName] = normalize(nativeEvent);
	    }

	    this.target = nativeEventTarget;
	  }

	  var defaultPrevented = nativeEvent.defaultPrevented != null ? nativeEvent.defaultPrevented : nativeEvent.returnValue === false;
	  if (defaultPrevented) {
	    this.isDefaultPrevented = _emptyFunction2.default.thatReturnsTrue;
	  } else {
	    this.isDefaultPrevented = _emptyFunction2.default.thatReturnsFalse;
	  }
	  this.isPropagationStopped = _emptyFunction2.default.thatReturnsFalse;
	  return this;
	}

	(0, _objectAssign2.default)(SyntheticEvent.prototype, {

	  preventDefault: function preventDefault() {
	    this.defaultPrevented = true;
	    var event = this.nativeEvent;
	    if (!event) {
	      return;
	    }

	    if (event.preventDefault) {
	      event.preventDefault();
	    } else if (typeof event.returnValue !== 'unknown') {
	      // eslint-disable-line valid-typeof
	      event.returnValue = false;
	    }
	    this.isDefaultPrevented = _emptyFunction2.default.thatReturnsTrue;
	  },

	  stopPropagation: function stopPropagation() {
	    var event = this.nativeEvent;
	    if (!event) {
	      return;
	    }

	    if (event.stopPropagation) {
	      event.stopPropagation();
	    } else if (typeof event.cancelBubble !== 'unknown') {
	      // eslint-disable-line valid-typeof
	      // The ChangeEventPlugin registers a "propertychange" event for
	      // IE. This event does not support bubbling or cancelling, and
	      // any references to cancelBubble throw "Member not found".  A
	      // typeof check of "unknown" circumvents this issue (and is also
	      // IE specific).
	      event.cancelBubble = true;
	    }

	    this.isPropagationStopped = _emptyFunction2.default.thatReturnsTrue;
	  },

	  /**
	   * We release all dispatched `SyntheticEvent`s after each event loop, adding
	   * them back into the pool. This allows a way to hold onto a reference that
	   * won't be added back into the pool.
	   */
	  persist: function persist() {
	    this.isPersistent = _emptyFunction2.default.thatReturnsTrue;
	  },

	  /**
	   * Checks if this event should be released back into the pool.
	   *
	   * @return {boolean} True if this should not be released, false otherwise.
	   */
	  isPersistent: _emptyFunction2.default.thatReturnsFalse,

	  /**
	   * `PooledClass` looks for `destructor` on each instance it releases.
	   */
	  destructor: function destructor() {
	    var Interface = this.constructor.Interface;
	    for (var propName in Interface) {

	      this[propName] = null;
	    }
	    for (var i = 0; i < shouldBeReleasedProperties.length; i++) {
	      this[shouldBeReleasedProperties[i]] = null;
	    }
	  }

	});

	SyntheticEvent.Interface = EventInterface;

	if (process.env.NODE_ENV !== 'production') {
	  if (isProxySupported) {
	    /*eslint-disable no-func-assign */
	    SyntheticEvent = new Proxy(SyntheticEvent, {
	      construct: function construct(target, args) {
	        return this.apply(target, Object.create(target.prototype), args);
	      },
	      apply: function apply(constructor, that, args) {
	        return new Proxy(constructor.apply(that, args), {
	          set: function set(target, prop, value) {
	            if (prop !== 'isPersistent' && !target.constructor.Interface.hasOwnProperty(prop) && shouldBeReleasedProperties.indexOf(prop) === -1) {
	              process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(didWarnForAddedNewProperty || target.isPersistent(), 'This synthetic event is reused for performance reasons. If you\'re ' + 'seeing this, you\'re adding a new property in the synthetic event object. ' + 'The property is never released. See ' + 'https://fb.me/react-event-pooling for more information.') : void 0;
	              didWarnForAddedNewProperty = true;
	            }
	            target[prop] = value;
	            return true;
	          }
	        });
	      }
	    });
	    /*eslint-enable no-func-assign */
	  }
	}
	/**
	 * Helper to reduce boilerplate when creating subclasses.
	 *
	 * @param {function} Class
	 * @param {?object} Interface
	 */
	SyntheticEvent.augmentClass = function (Class, Interface) {
	  var Super = this;

	  var E = function E() {};
	  E.prototype = Super.prototype;
	  var prototype = new E();

	  (0, _objectAssign2.default)(prototype, Class.prototype);
	  Class.prototype = prototype;
	  Class.prototype.constructor = Class;

	  Class.Interface = (0, _objectAssign2.default)({}, Super.Interface, Interface);
	  Class.augmentClass = Super.augmentClass;

	  _PooledClass2.default.addPoolingTo(Class, _PooledClass2.default.fourArgumentPooler);
	};

	_PooledClass2.default.addPoolingTo(SyntheticEvent, _PooledClass2.default.fourArgumentPooler);

	exports.default = SyntheticEvent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule PooledClass
	 */

	'use strict';

	exports.__esModule = true;

	var _reactProdInvariant = __webpack_require__(17);

	var _reactProdInvariant2 = _interopRequireDefault(_reactProdInvariant);

	var _invariant = __webpack_require__(15);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Static poolers. Several custom versions for each potential number of
	 * arguments. A completely generic pooler is easy to implement, but would
	 * require accessing the `arguments` object. In each of these, `this` refers to
	 * the Class itself, not an instance. If any others are needed, simply add them
	 * here, or in their own files.
	 */
	var oneArgumentPooler = function oneArgumentPooler(copyFieldsFrom) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, copyFieldsFrom);
	    return instance;
	  } else {
	    return new Klass(copyFieldsFrom);
	  }
	};

	var twoArgumentPooler = function twoArgumentPooler(a1, a2) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2);
	    return instance;
	  } else {
	    return new Klass(a1, a2);
	  }
	};

	var threeArgumentPooler = function threeArgumentPooler(a1, a2, a3) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3);
	  }
	};

	var fourArgumentPooler = function fourArgumentPooler(a1, a2, a3, a4) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4);
	  }
	};

	var fiveArgumentPooler = function fiveArgumentPooler(a1, a2, a3, a4, a5) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4, a5);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4, a5);
	  }
	};

	var standardReleaser = function standardReleaser(instance) {
	  var Klass = this;
	  !(instance instanceof Klass) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Trying to release an instance into a pool of a different type.') : (0, _reactProdInvariant2.default)('25') : void 0;
	  instance.destructor();
	  if (Klass.instancePool.length < Klass.poolSize) {
	    Klass.instancePool.push(instance);
	  }
	};

	var DEFAULT_POOL_SIZE = 10;
	var DEFAULT_POOLER = oneArgumentPooler;

	/**
	 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
	 * itself (statically) not adding any prototypical fields. Any CopyConstructor
	 * you give this may have a `poolSize` property, and will look for a
	 * prototypical `destructor` on instances.
	 *
	 * @param {Function} CopyConstructor Constructor that can be used to reset.
	 * @param {Function} pooler Customizable pooler.
	 */
	var addPoolingTo = function addPoolingTo(CopyConstructor, pooler) {
	  var NewKlass = CopyConstructor;
	  NewKlass.instancePool = [];
	  NewKlass.getPooled = pooler || DEFAULT_POOLER;
	  if (!NewKlass.poolSize) {
	    NewKlass.poolSize = DEFAULT_POOL_SIZE;
	  }
	  NewKlass.release = standardReleaser;
	  return NewKlass;
	};

	var PooledClass = {
	  addPoolingTo: addPoolingTo,
	  oneArgumentPooler: oneArgumentPooler,
	  twoArgumentPooler: twoArgumentPooler,
	  threeArgumentPooler: threeArgumentPooler,
	  fourArgumentPooler: fourArgumentPooler,
	  fiveArgumentPooler: fiveArgumentPooler
	};

		exports.default = PooledClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticCompositionEvent
	 */

	'use strict';

	exports.__esModule = true;

	var _SyntheticEvent = __webpack_require__(48);

	var _SyntheticEvent2 = _interopRequireDefault(_SyntheticEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/#events-compositionevents
	 */
	//var CompositionEventInterface = {
	//  data: null
	//};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	//function SyntheticCompositionEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	//  return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	//}
	//
	//SyntheticEvent.augmentClass(SyntheticCompositionEvent, CompositionEventInterface);

	exports.default = _SyntheticEvent2.default;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ChangeEventPlugin
	 */

	'use strict';

	// var EventConstants = require('./EventConstants');

	exports.__esModule = true;

	var _EventPluginHub = __webpack_require__(19);

	var _EventPluginHub2 = _interopRequireDefault(_EventPluginHub);

	var _EventPropagators = __webpack_require__(46);

	var _EventPropagators2 = _interopRequireDefault(_EventPropagators);

	var _ExecutionEnvironment = __webpack_require__(28);

	var _ExecutionEnvironment2 = _interopRequireDefault(_ExecutionEnvironment);

	var _ReactDOMComponentTree = __webpack_require__(30);

	var _ReactDOMComponentTree2 = _interopRequireDefault(_ReactDOMComponentTree);

	var _SyntheticEvent = __webpack_require__(48);

	var _SyntheticEvent2 = _interopRequireDefault(_SyntheticEvent);

	var _getEventTarget = __webpack_require__(52);

	var _getEventTarget2 = _interopRequireDefault(_getEventTarget);

	var _isEventSupported = __webpack_require__(29);

	var _isEventSupported2 = _interopRequireDefault(_isEventSupported);

	var _isTextInputElement = __webpack_require__(53);

	var _isTextInputElement2 = _interopRequireDefault(_isTextInputElement);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// var ReactUpdates = require('./ReactUpdates');
	var eventTypes = {
	    change: {
	        phasedRegistrationNames: {
	            bubbled: 'onChange',
	            captured: 'onChangeCapture'
	        },
	        dependencies: ['topBlur', 'topChange', 'topClick', 'topFocus', 'topInput', 'topKeyDown', 'topKeyUp', 'topSelectionChange']
	    }
	};

	/**
	 * For IE shims
	 */
	var activeElement = null;
	var activeElementInst = null;
	var activeElementValue = null;
	var activeElementValueProp = null;

	/**
	 * SECTION: handle `change` event
	 */
	function shouldUseChangeEvent(elem) {
	    var nodeName = elem.nodeName && elem.nodeName.toLowerCase();
	    return nodeName === 'select' || nodeName === 'input' && elem.type === 'file';
	}

	var doesChangeEventBubble = false;
	if (_ExecutionEnvironment2.default.canUseDOM) {
	    // See `handleChange` comment below
	    doesChangeEventBubble = (0, _isEventSupported2.default)('change') && (!document.documentMode || document.documentMode > 8);
	}

	function manualDispatchChangeEvent(nativeEvent) {
	    var event = _SyntheticEvent2.default.getPooled(eventTypes.change, activeElementInst, nativeEvent, (0, _getEventTarget2.default)(nativeEvent));
	    _EventPropagators2.default.accumulateTwoPhaseDispatches(event);

	    // If change and propertychange bubbled, we'd just bind to it like all the
	    // other events and have it go through ReactBrowserEventEmitter. Since it
	    // doesn't, we manually listen for the events and so we have to enqueue and
	    // process the abstract event manually.
	    //
	    // Batching is necessary here in order to ensure that all event handlers run
	    // before the next rerender (including event handlers attached to ancestor
	    // elements instead of directly on the input). Without this, controlled
	    // components don't work properly in conjunction with event bubbling because
	    // the component is rerendered and the value reverted before all the event
	    // handlers can run. See https://github.com/facebook/react/issues/708.
	    // ReactUpdates.batchedUpdates(runEventInBatch, event);
	}

	function runEventInBatch(event) {
	    _EventPluginHub2.default.enqueueEvents(event);
	    _EventPluginHub2.default.processEventQueue(false);
	}

	//function startWatchingForChangeEventIE8(target, targetInst) {
	//    activeElement = target;
	//    activeElementInst = targetInst;
	//    activeElement.attachEvent('onchange', manualDispatchChangeEvent);
	//}
	//
	//function stopWatchingForChangeEventIE8() {
	//    if (!activeElement) {
	//        return;
	//    }
	//    activeElement.detachEvent('onchange', manualDispatchChangeEvent);
	//    activeElement = null;
	//    activeElementInst = null;
	//}

	function getTargetInstForChangeEvent(topLevelType, targetInst) {
	    if (topLevelType === 'topChange') {
	        return targetInst;
	    }
	}

	//function handleEventsForChangeEventIE8(topLevelType, target, targetInst) {
	//    if (topLevelType === 'topFocus') {
	//        // stopWatching() should be a noop here but we call it just in case we
	//        // missed a blur event somehow.
	//        stopWatchingForChangeEventIE8();
	//        startWatchingForChangeEventIE8(target, targetInst);
	//    } else if (topLevelType === 'topBlur') {
	//        stopWatchingForChangeEventIE8();
	//    }
	//}

	/**
	 * SECTION: handle `input` event
	 */
	var isInputEventSupported = false;
	if (_ExecutionEnvironment2.default.canUseDOM) {
	    // IE9 claims to support the input event but fails to trigger it when
	    // deleting text, so we ignore its input events.
	    // IE10+ fire input events to often, such when a placeholder
	    // changes or when an input with a placeholder is focused.
	    isInputEventSupported = (0, _isEventSupported2.default)('input') && (!document.documentMode || document.documentMode > 11);
	}

	/**
	 * (For IE <=11) Replacement getter/setter for the `value` property that gets
	 * set on the active element.
	 */
	var newValueProp = {
	    get: function get() {
	        return activeElementValueProp.get.call(this);
	    },
	    set: function set(val) {
	        // Cast to a string so we can do equality checks.
	        activeElementValue = '' + val;
	        activeElementValueProp.set.call(this, val);
	    }
	};

	/**
	 * (For IE <=11) Starts tracking propertychange events on the passed-in element
	 * and override the value property so that we can distinguish user events from
	 * value changes in JS.
	 */
	function startWatchingForValueChange(target, targetInst) {
	    activeElement = target;
	    activeElementInst = targetInst;
	    activeElementValue = target.value;
	    activeElementValueProp = Object.getOwnPropertyDescriptor(target.constructor.prototype, 'value');

	    // Not guarded in a canDefineProperty check: IE8 supports defineProperty only
	    // on DOM elements
	    Object.defineProperty(activeElement, 'value', newValueProp);
	    if (activeElement.attachEvent) {
	        activeElement.attachEvent('onpropertychange', handlePropertyChange);
	    } else {
	        activeElement.addEventListener('propertychange', handlePropertyChange, false);
	    }
	}

	/**
	 * (For IE <=11) Removes the event listeners from the currently-tracked element,
	 * if any exists.
	 */
	function stopWatchingForValueChange() {
	    if (!activeElement) {
	        return;
	    }

	    // delete restores the original property definition
	    delete activeElement.value;

	    if (activeElement.detachEvent) {
	        activeElement.detachEvent('onpropertychange', handlePropertyChange);
	    } else {
	        activeElement.removeEventListener('propertychange', handlePropertyChange, false);
	    }

	    activeElement = null;
	    activeElementInst = null;
	    activeElementValue = null;
	    activeElementValueProp = null;
	}

	/**
	 * (For IE <=11) Handles a propertychange event, sending a `change` event if
	 * the value of the active element has changed.
	 */
	function handlePropertyChange(nativeEvent) {
	    if (nativeEvent.propertyName !== 'value') {
	        return;
	    }
	    var value = nativeEvent.srcElement.value;
	    if (value === activeElementValue) {
	        return;
	    }
	    activeElementValue = value;

	    manualDispatchChangeEvent(nativeEvent);
	}

	/**
	 * If a `change` event should be fired, returns the target's ID.
	 */
	function getTargetInstForInputEvent(topLevelType, targetInst) {
	    if (topLevelType === 'topInput') {
	        // In modern browsers (i.e., not IE8 or IE9), the input event is exactly
	        // what we want so fall through here and trigger an abstract event
	        return targetInst;
	    }
	}

	function handleEventsForInputEventIE(topLevelType, target, targetInst) {
	    if (topLevelType === 'topFocus') {
	        // In IE8, we can capture almost all .value changes by adding a
	        // propertychange handler and looking for events with propertyName
	        // equal to 'value'
	        // In IE9-11, propertychange fires for most input events but is buggy and
	        // doesn't fire when text is deleted, but conveniently, selectionchange
	        // appears to fire in all of the remaining cases so we catch those and
	        // forward the event if the value has changed
	        // In either case, we don't want to call the event handler if the value
	        // is changed from JS so we redefine a setter for `.value` that updates
	        // our activeElementValue variable, allowing us to ignore those changes
	        //
	        // stopWatching() should be a noop here but we call it just in case we
	        // missed a blur event somehow.
	        stopWatchingForValueChange();
	        startWatchingForValueChange(target, targetInst);
	    } else if (topLevelType === 'topBlur') {
	        stopWatchingForValueChange();
	    }
	}

	// For IE8 and IE9.
	function getTargetInstForInputEventIE(topLevelType, targetInst) {
	    if (topLevelType === 'topSelectionChange' || topLevelType === 'topKeyUp' || topLevelType === 'topKeyDown') {
	        // On the selectionchange event, the target is just document which isn't
	        // helpful for us so just check activeElement instead.
	        //
	        // 99% of the time, keydown and keyup aren't necessary. IE8 fails to fire
	        // propertychange on the first input event after setting `value` from a
	        // script and fires only keydown, keypress, keyup. Catching keyup usually
	        // gets it and catching keydown lets us fire an event for the first
	        // keystroke if user does a key repeat (it'll be a little delayed: right
	        // before the second keystroke). Other input methods (e.g., paste) seem to
	        // fire selectionchange normally.
	        if (activeElement && activeElement.value !== activeElementValue) {
	            activeElementValue = activeElement.value;
	            return activeElementInst;
	        }
	    }
	}

	/**
	 * SECTION: handle `click` event
	 */
	function shouldUseClickEvent(elem) {
	    // Use the `click` event to detect changes to checkbox and radio inputs.
	    // This approach works across all browsers, whereas `change` does not fire
	    // until `blur` in IE8.
	    return elem.nodeName && elem.nodeName.toLowerCase() === 'input' && (elem.type === 'checkbox' || elem.type === 'radio');
	}

	function getTargetInstForClickEvent(topLevelType, targetInst) {
	    if (topLevelType === 'topClick') {
	        return targetInst;
	    }
	}

	/**
	 * This plugin creates an `onChange` event that normalizes change events
	 * across form elements. This event fires at a time when it's possible to
	 * change the element's value without seeing a flicker.
	 *
	 * Supported elements are:
	 * - input (see `isTextInputElement`)
	 * - textarea
	 * - select
	 */
	var ChangeEventPlugin = {

	    eventTypes: eventTypes,

	    extractEvents: function extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
	        var targetNode = targetInst ? _ReactDOMComponentTree2.default.getNodeFromInstance(targetInst) : window;

	        var getTargetInstFunc, handleEventFunc;
	        if (shouldUseChangeEvent(targetNode)) {
	            if (doesChangeEventBubble) {
	                getTargetInstFunc = getTargetInstForChangeEvent;
	            } else {
	                //  handleEventFunc = handleEventsForChangeEventIE8;
	            }
	        } else if ((0, _isTextInputElement2.default)(targetNode)) {
	            if (isInputEventSupported) {
	                getTargetInstFunc = getTargetInstForInputEvent;
	            } else {
	                getTargetInstFunc = getTargetInstForInputEventIE;
	                handleEventFunc = handleEventsForInputEventIE;
	            }
	        } else if (shouldUseClickEvent(targetNode)) {
	            getTargetInstFunc = getTargetInstForClickEvent;
	        }

	        if (getTargetInstFunc) {
	            var inst = getTargetInstFunc(topLevelType, targetInst);
	            if (inst) {
	                var event = _SyntheticEvent2.default.getPooled(eventTypes.change, inst, nativeEvent, nativeEventTarget);
	                event.type = 'change';
	                _EventPropagators2.default.accumulateTwoPhaseDispatches(event);
	                return event;
	            }
	        }

	        if (handleEventFunc) {
	            handleEventFunc(topLevelType, targetNode, targetInst);
	        }
	    }

	};

		exports.default = ChangeEventPlugin;

/***/ },
/* 52 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getEventTarget
	 */

	/**
	 * Gets the target node from a native browser event by accounting for
	 * inconsistencies in browser DOM APIs.
	 *
	 * @param {object} nativeEvent Native browser event.
	 * @return {DOMEventTarget} Target node.
	 */

	function getEventTarget(nativeEvent) {
	  var target = nativeEvent.target || nativeEvent.srcElement || window;

	  // Normalize SVG <use> element events #4963
	  if (target.correspondingUseElement) {
	    target = target.correspondingUseElement;
	  }

	  // Safari may fire events on text nodes (Node.TEXT_NODE is 3).
	  // @see http://www.quirksmode.org/js/events_properties.html
	  return target.nodeType === 3 ? target.parentNode : target;
	}

	exports.default = getEventTarget;

/***/ },
/* 53 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isTextInputElement
	 * 
	 */

	'use strict';

	/**
	 * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
	 */

	exports.__esModule = true;
	var supportedInputTypes = {
	  'color': true,
	  'date': true,
	  'datetime': true,
	  'datetime-local': true,
	  'email': true,
	  'month': true,
	  'number': true,
	  'password': true,
	  'range': true,
	  'search': true,
	  'tel': true,
	  'text': true,
	  'time': true,
	  'url': true,
	  'week': true
	};

	function isTextInputElement(elem) {
	  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();

	  if (nodeName === 'input') {
	    return !!supportedInputTypes[elem.type];
	  }

	  if (nodeName === 'textarea') {
	    return true;
	  }

	  return false;
	}

	exports.default = isTextInputElement;

/***/ },
/* 54 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DefaultEventPluginOrder
	 */

	'use strict';

	/**
	 * Module that is injectable into `EventPluginHub`, that specifies a
	 * deterministic ordering of `EventPlugin`s. A convenient way to reason about
	 * plugins, without having to package every one of them. This is better than
	 * having plugins be ordered in the same order that they are injected because
	 * that ordering would be influenced by the packaging order.
	 * `ResponderEventPlugin` must occur before `SimpleEventPlugin` so that
	 * preventing default on events is convenient in `SimpleEventPlugin` handlers.
	 */

	exports.__esModule = true;
	var DefaultEventPluginOrder = ['ResponderEventPlugin', 'SimpleEventPlugin', 'TapEventPlugin', 'EnterLeaveEventPlugin', 'ChangeEventPlugin', 'SelectEventPlugin', 'BeforeInputEventPlugin'];

		exports.default = DefaultEventPluginOrder;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMTreeTraversal
	 */

	'use strict';

	exports.__esModule = true;

	var _reactProdInvariant = __webpack_require__(17);

	var _reactProdInvariant2 = _interopRequireDefault(_reactProdInvariant);

	var _invariant = __webpack_require__(15);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Return the lowest common ancestor of A and B, or null if they are in
	 * different trees.
	 */
	function getLowestCommonAncestor(instA, instB) {
	  !('_hostNode' in instA) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'getNodeFromInstance: Invalid argument.') : (0, _reactProdInvariant2.default)('33') : void 0;
	  !('_hostNode' in instB) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'getNodeFromInstance: Invalid argument.') : (0, _reactProdInvariant2.default)('33') : void 0;

	  var depthA = 0;
	  for (var tempA = instA; tempA; tempA = tempA._hostParent) {
	    depthA++;
	  }
	  var depthB = 0;
	  for (var tempB = instB; tempB; tempB = tempB._hostParent) {
	    depthB++;
	  }

	  // If A is deeper, crawl up.
	  while (depthA - depthB > 0) {
	    instA = instA._hostParent;
	    depthA--;
	  }

	  // If B is deeper, crawl up.
	  while (depthB - depthA > 0) {
	    instB = instB._hostParent;
	    depthB--;
	  }

	  // Walk in lockstep until we find a match.
	  var depth = depthA;
	  while (depth--) {
	    if (instA === instB) {
	      return instA;
	    }
	    instA = instA._hostParent;
	    instB = instB._hostParent;
	  }
	  return null;
	}

	/**
	 * Return if A is an ancestor of B.
	 */
	function isAncestor(instA, instB) {
	  !('_hostNode' in instA) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'isAncestor: Invalid argument.') : (0, _reactProdInvariant2.default)('35') : void 0;
	  !('_hostNode' in instB) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'isAncestor: Invalid argument.') : (0, _reactProdInvariant2.default)('35') : void 0;

	  while (instB) {
	    if (instB === instA) {
	      return true;
	    }
	    instB = instB._hostParent;
	  }
	  return false;
	}

	/**
	 * Return the parent instance of the passed-in instance.
	 */
	function getParentInstance(inst) {
	  !('_hostNode' in inst) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'getParentInstance: Invalid argument.') : (0, _reactProdInvariant2.default)('36') : void 0;

	  return inst._hostParent;
	}

	/**
	 * Simulates the traversal of a two-phase, capture/bubble event dispatch.
	 */
	function traverseTwoPhase(inst, fn, arg) {
	  var path = [];
	  while (inst) {
	    path.push(inst);
	    inst = inst._hostParent;
	  }
	  var i;
	  for (i = path.length; i-- > 0;) {
	    fn(path[i], false, arg);
	  }
	  for (i = 0; i < path.length; i++) {
	    fn(path[i], true, arg);
	  }
	}

	/**
	 * Traverses the ID hierarchy and invokes the supplied `cb` on any IDs that
	 * should would receive a `mouseEnter` or `mouseLeave` event.
	 *
	 * Does not invoke the callback on the nearest common ancestor because nothing
	 * "entered" or "left" that element.
	 */
	function traverseEnterLeave(from, to, fn, argFrom, argTo) {
	  var common = from && to ? getLowestCommonAncestor(from, to) : null;
	  var pathFrom = [];
	  while (from && from !== common) {
	    pathFrom.push(from);
	    from = from._hostParent;
	  }
	  var pathTo = [];
	  while (to && to !== common) {
	    pathTo.push(to);
	    to = to._hostParent;
	  }
	  var i;
	  for (i = 0; i < pathFrom.length; i++) {
	    fn(pathFrom[i], true, argFrom);
	  }
	  for (i = pathTo.length; i-- > 0;) {
	    fn(pathTo[i], false, argTo);
	  }
	}

	exports.default = {
	  isAncestor: isAncestor,
	  getLowestCommonAncestor: getLowestCommonAncestor,
	  getParentInstance: getParentInstance,
	  traverseTwoPhase: traverseTwoPhase,
	  traverseEnterLeave: traverseEnterLeave
		};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactEventListener
	 */

	'use strict';

	exports.__esModule = true;

	var _objectAssign = __webpack_require__(3);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _EventListener = __webpack_require__(57);

	var _EventListener2 = _interopRequireDefault(_EventListener);

	var _ExecutionEnvironment = __webpack_require__(28);

	var _ExecutionEnvironment2 = _interopRequireDefault(_ExecutionEnvironment);

	var _PooledClass = __webpack_require__(49);

	var _PooledClass2 = _interopRequireDefault(_PooledClass);

	var _ReactDOMComponentTree = __webpack_require__(30);

	var _ReactDOMComponentTree2 = _interopRequireDefault(_ReactDOMComponentTree);

	var _getEventTarget = __webpack_require__(52);

	var _getEventTarget2 = _interopRequireDefault(_getEventTarget);

	var _getUnboundedScrollPosition = __webpack_require__(58);

	var _getUnboundedScrollPosition2 = _interopRequireDefault(_getUnboundedScrollPosition);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Find the deepest React component completely containing the root of the
	 * passed-in instance (for use when entire React trees are nested within each
	 * other). If React trees are not nested, returns null.
	 */

	// var ReactUpdates = require('./ReactUpdates');

	// import { extend as _assign } from '../util';

	function findParent(inst) {
	    // TODO: It may be a good idea to cache this to prevent unnecessary DOM
	    // traversal, but caching is difficult to do correctly without using a
	    // mutation observer to listen for all DOM changes.
	    // while (inst._hostParent) {
	    //   inst = inst._hostParent;
	    // }
	    inst = _ReactDOMComponentTree2.default.__buildCacheTree(inst._hostNode, !!'findParent');
	    var rootNode = _ReactDOMComponentTree2.default.getNodeFromInstance(inst);
	    var container = rootNode.parentNode;
	    return _ReactDOMComponentTree2.default.getClosestInstanceFromNode(container);
	}

	// Used to store ancestor hierarchy in top level callback
	function TopLevelCallbackBookKeeping(topLevelType, nativeEvent) {
	    this.topLevelType = topLevelType;
	    this.nativeEvent = nativeEvent;
	    this.ancestors = [];
	}
	(0, _objectAssign2.default)(TopLevelCallbackBookKeeping.prototype, {
	    destructor: function destructor() {
	        this.topLevelType = null;
	        this.nativeEvent = null;
	        this.ancestors.length = 0;
	    }
	});
	_PooledClass2.default.addPoolingTo(TopLevelCallbackBookKeeping, _PooledClass2.default.twoArgumentPooler);

	function handleTopLevelImpl(bookKeeping) {
	    var nativeEventTarget = (0, _getEventTarget2.default)(bookKeeping.nativeEvent);
	    var targetInst = _ReactDOMComponentTree2.default.getClosestInstanceFromNode(nativeEventTarget);

	    // Loop through the hierarchy, in case there's any nested components.
	    // It's important that we build the array of ancestors before calling any
	    // event handlers, because event handlers can modify the DOM, leading to
	    // inconsistencies with ReactMount's node cache. See #1105.
	    var ancestor = targetInst;
	    do {
	        bookKeeping.ancestors.push(ancestor);
	        ancestor = ancestor && findParent(ancestor);
	    } while (ancestor);

	    for (var i = 0; i < bookKeeping.ancestors.length; i++) {
	        targetInst = bookKeeping.ancestors[i];
	        ReactEventListener._handleTopLevel(bookKeeping.topLevelType, targetInst, bookKeeping.nativeEvent, (0, _getEventTarget2.default)(bookKeeping.nativeEvent));
	    }
	}

	function scrollValueMonitor(cb) {
	    var scrollPosition = (0, _getUnboundedScrollPosition2.default)(window);
	    cb(scrollPosition);
	}

	var ReactEventListener = {
	    _enabled: true,
	    _handleTopLevel: null,

	    WINDOW_HANDLE: _ExecutionEnvironment2.default.canUseDOM ? window : null,

	    setHandleTopLevel: function setHandleTopLevel(handleTopLevel) {
	        ReactEventListener._handleTopLevel = handleTopLevel;
	    },

	    setEnabled: function setEnabled(enabled) {
	        ReactEventListener._enabled = !!enabled;
	    },

	    isEnabled: function isEnabled() {
	        return ReactEventListener._enabled;
	    },

	    /**
	     * Traps top-level events by using event bubbling.
	     *
	     * @param {string} topLevelType Record from `EventConstants`.
	     * @param {string} handlerBaseName Event name (e.g. "click").
	     * @param {object} handle Element on which to attach listener.
	     * @return {?object} An object with a remove function which will forcefully
	     *                  remove the listener.
	     * @internal
	     */
	    trapBubbledEvent: function trapBubbledEvent(topLevelType, handlerBaseName, handle) {
	        var element = handle;
	        if (!element) {
	            return null;
	        }
	        return _EventListener2.default.listen(element, handlerBaseName, ReactEventListener.dispatchEvent.bind(null, topLevelType));
	    },

	    /**
	     * Traps a top-level event by using event capturing.
	     *
	     * @param {string} topLevelType Record from `EventConstants`.
	     * @param {string} handlerBaseName Event name (e.g. "click").
	     * @param {object} handle Element on which to attach listener.
	     * @return {?object} An object with a remove function which will forcefully
	     *                  remove the listener.
	     * @internal
	     */
	    trapCapturedEvent: function trapCapturedEvent(topLevelType, handlerBaseName, handle) {
	        var element = handle;
	        if (!element) {
	            return null;
	        }
	        return _EventListener2.default.capture(element, handlerBaseName, ReactEventListener.dispatchEvent.bind(null, topLevelType));
	    },

	    monitorScrollValue: function monitorScrollValue(refresh) {
	        var callback = scrollValueMonitor.bind(null, refresh);
	        _EventListener2.default.listen(window, 'scroll', callback);
	    },

	    dispatchEvent: function dispatchEvent(topLevelType, nativeEvent) {
	        if (!ReactEventListener._enabled) {
	            return;
	        }

	        var bookKeeping = TopLevelCallbackBookKeeping.getPooled(topLevelType, nativeEvent);
	        try {
	            // Event queue being processed in the same cycle allows
	            // `preventDefault`.
	            // ReactUpdates.batchedUpdates(handleTopLevelImpl, bookKeeping);
	            handleTopLevelImpl(bookKeeping);
	        } finally {
	            TopLevelCallbackBookKeeping.release(bookKeeping);
	        }
	    }
	};

		exports.default = ReactEventListener;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @typechecks
	 */

	var emptyFunction = __webpack_require__(23);

	/**
	 * Upstream version of event listener. Does not take into account specific
	 * nature of platform.
	 */
	var EventListener = {
	  /**
	   * Listen to DOM events during the bubble phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	  listen: function listen(target, eventType, callback) {
	    if (target.addEventListener) {
	      target.addEventListener(eventType, callback, false);
	      return {
	        remove: function remove() {
	          target.removeEventListener(eventType, callback, false);
	        }
	      };
	    } else if (target.attachEvent) {
	      target.attachEvent('on' + eventType, callback);
	      return {
	        remove: function remove() {
	          target.detachEvent('on' + eventType, callback);
	        }
	      };
	    }
	  },

	  /**
	   * Listen to DOM events during the capture phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	  capture: function capture(target, eventType, callback) {
	    if (target.addEventListener) {
	      target.addEventListener(eventType, callback, true);
	      return {
	        remove: function remove() {
	          target.removeEventListener(eventType, callback, true);
	        }
	      };
	    } else {
	      if (process.env.NODE_ENV !== 'production') {
	        console.error('Attempted to listen to events during the capture phase on a ' + 'browser that does not support the capture phase. Your application ' + 'will not receive some events.');
	      }
	      return {
	        remove: emptyFunction
	      };
	    }
	  },

	  registerDefault: function registerDefault() {}
	};

	module.exports = EventListener;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 58 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	'use strict';

	/**
	 * Gets the scroll position of the supplied element or window.
	 *
	 * The return values are unbounded, unlike `getScrollPosition`. This means they
	 * may be negative or exceed the element boundaries (which is possible using
	 * inertial scrolling).
	 *
	 * @param {DOMWindow|DOMElement} scrollable
	 * @return {object} Map with `x` and `y` keys.
	 */

	function getUnboundedScrollPosition(scrollable) {
	  if (scrollable === window) {
	    return {
	      x: window.pageXOffset || document.documentElement.scrollLeft,
	      y: window.pageYOffset || document.documentElement.scrollTop
	    };
	  }
	  return {
	    x: scrollable.scrollLeft,
	    y: scrollable.scrollTop
	  };
	}

	module.exports = getUnboundedScrollPosition;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SelectEventPlugin
	 */

	'use strict';

	exports.__esModule = true;

	var _EventConstants = __webpack_require__(13);

	var _EventConstants2 = _interopRequireDefault(_EventConstants);

	var _EventPropagators = __webpack_require__(46);

	var _EventPropagators2 = _interopRequireDefault(_EventPropagators);

	var _ExecutionEnvironment = __webpack_require__(28);

	var _ExecutionEnvironment2 = _interopRequireDefault(_ExecutionEnvironment);

	var _ReactDOMComponentTree = __webpack_require__(30);

	var _ReactDOMComponentTree2 = _interopRequireDefault(_ReactDOMComponentTree);

	var _ReactInputSelection = __webpack_require__(60);

	var _ReactInputSelection2 = _interopRequireDefault(_ReactInputSelection);

	var _SyntheticEvent = __webpack_require__(48);

	var _SyntheticEvent2 = _interopRequireDefault(_SyntheticEvent);

	var _getActiveElement = __webpack_require__(67);

	var _getActiveElement2 = _interopRequireDefault(_getActiveElement);

	var _isTextInputElement = __webpack_require__(53);

	var _isTextInputElement2 = _interopRequireDefault(_isTextInputElement);

	var _shallowEqual = __webpack_require__(68);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var topLevelTypes = _EventConstants2.default.topLevelTypes;
	// var keyOf = require('fbjs/lib/keyOf');


	var skipSelectionChangeEvent = _ExecutionEnvironment2.default.canUseDOM && 'documentMode' in document && document.documentMode <= 11;

	var eventTypes = {
	  select: {
	    phasedRegistrationNames: {
	      bubbled: 'onSelect',
	      captured: 'onSelectCapture'
	    },
	    dependencies: [topLevelTypes.topBlur, topLevelTypes.topContextMenu, topLevelTypes.topFocus, topLevelTypes.topKeyDown, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown, topLevelTypes.topMouseUp, topLevelTypes.topSelectionChange]
	  }
	};

	var activeElement = null;
	var activeElementInst = null;
	var lastSelection = null;
	var mouseDown = false;

	// Track whether a listener exists for this plugin. If none exist, we do
	// not extract events. See #3639.
	var hasListener = false;
	var ON_SELECT_KEY = 'onSelect';

	/**
	 * Get an object which is a unique representation of the current selection.
	 *
	 * The return value will not be consistent across nodes or browsers, but
	 * two identical selections on the same node will return identical objects.
	 *
	 * @param {DOMElement} node
	 * @return {object}
	 */
	function getSelection(node) {
	  if ('selectionStart' in node && _ReactInputSelection2.default.hasSelectionCapabilities(node)) {
	    return {
	      start: node.selectionStart,
	      end: node.selectionEnd
	    };
	  } else if (window.getSelection) {
	    var selection = window.getSelection();
	    return {
	      anchorNode: selection.anchorNode,
	      anchorOffset: selection.anchorOffset,
	      focusNode: selection.focusNode,
	      focusOffset: selection.focusOffset
	    };
	  }
	}

	/**
	 * Poll selection to see whether it's changed.
	 *
	 * @param {object} nativeEvent
	 * @return {?SyntheticEvent}
	 */
	function constructSelectEvent(nativeEvent, nativeEventTarget) {
	  // Ensure we have the right element, and that the user is not dragging a
	  // selection (this matches native `select` event behavior). In HTML5, select
	  // fires only on input and textarea thus if there's no focused element we
	  // won't dispatch.
	  if (mouseDown || activeElement == null || activeElement !== (0, _getActiveElement2.default)()) {
	    return null;
	  }

	  // Only fire when selection has actually changed.
	  var currentSelection = getSelection(activeElement);
	  if (!lastSelection || !(0, _shallowEqual2.default)(lastSelection, currentSelection)) {
	    lastSelection = currentSelection;

	    var syntheticEvent = _SyntheticEvent2.default.getPooled(eventTypes.select, activeElementInst, nativeEvent, nativeEventTarget);

	    syntheticEvent.type = 'select';
	    syntheticEvent.target = activeElement;

	    _EventPropagators2.default.accumulateTwoPhaseDispatches(syntheticEvent);

	    return syntheticEvent;
	  }

	  return null;
	}

	/**
	 * This plugin creates an `onSelect` event that normalizes select events
	 * across form elements.
	 *
	 * Supported elements are:
	 * - input (see `isTextInputElement`)
	 * - textarea
	 * - contentEditable
	 *
	 * This differs from native browser implementations in the following ways:
	 * - Fires on contentEditable fields as well as inputs.
	 * - Fires for collapsed selection.
	 * - Fires after user input.
	 */
	var SelectEventPlugin = {

	  eventTypes: eventTypes,

	  extractEvents: function extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
	    if (!hasListener) {
	      return null;
	    }

	    var targetNode = targetInst ? _ReactDOMComponentTree2.default.getNodeFromInstance(targetInst) : window;

	    switch (topLevelType) {
	      // Track the input node that has focus.
	      case topLevelTypes.topFocus:
	        if ((0, _isTextInputElement2.default)(targetNode) || targetNode.contentEditable === 'true') {
	          activeElement = targetNode;
	          activeElementInst = targetInst;
	          lastSelection = null;
	        }
	        break;
	      case topLevelTypes.topBlur:
	        activeElement = null;
	        activeElementInst = null;
	        lastSelection = null;
	        break;

	      // Don't fire the event while the user is dragging. This matches the
	      // semantics of the native select event.
	      case topLevelTypes.topMouseDown:
	        mouseDown = true;
	        break;
	      case topLevelTypes.topContextMenu:
	      case topLevelTypes.topMouseUp:
	        mouseDown = false;
	        return constructSelectEvent(nativeEvent, nativeEventTarget);

	      // Chrome and IE fire non-standard event when selection is changed (and
	      // sometimes when it hasn't). IE's event fires out of order with respect
	      // to key and input events on deletion, so we discard it.
	      //
	      // Firefox doesn't support selectionchange, so check selection status
	      // after each key entry. The selection changes after keydown and before
	      // keyup, but we check on keydown as well in the case of holding down a
	      // key, when multiple keydown events are fired but only one keyup is.
	      // This is also our approach for IE handling, for the reason above.
	      case topLevelTypes.topSelectionChange:
	        if (skipSelectionChangeEvent) {
	          break;
	        }
	      // falls through
	      case topLevelTypes.topKeyDown:
	      case topLevelTypes.topKeyUp:
	        return constructSelectEvent(nativeEvent, nativeEventTarget);
	    }

	    return null;
	  },

	  didPutListener: function didPutListener(inst, registrationName, listener) {
	    if (registrationName === ON_SELECT_KEY) {
	      hasListener = true;
	    }
	  }
	};

		exports.default = SelectEventPlugin;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInputSelection
	 */

	'use strict';

	exports.__esModule = true;

	var _ReactDOMSelection = __webpack_require__(61);

	var _ReactDOMSelection2 = _interopRequireDefault(_ReactDOMSelection);

	var _containsNode = __webpack_require__(63);

	var _containsNode2 = _interopRequireDefault(_containsNode);

	var _focusNode = __webpack_require__(66);

	var _focusNode2 = _interopRequireDefault(_focusNode);

	var _getActiveElement = __webpack_require__(67);

	var _getActiveElement2 = _interopRequireDefault(_getActiveElement);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isInDocument(node) {
	  return (0, _containsNode2.default)(document.documentElement, node);
	}

	/**
	 * @ReactInputSelection: React input selection module. Based on Selection.js,
	 * but modified to be suitable for react and has a couple of bug fixes (doesn't
	 * assume buttons have range selections allowed).
	 * Input selection module for React.
	 */
	var ReactInputSelection = {

	  hasSelectionCapabilities: function hasSelectionCapabilities(elem) {
	    var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
	    return nodeName && (nodeName === 'input' && elem.type === 'text' || nodeName === 'textarea' || elem.contentEditable === 'true');
	  },

	  getSelectionInformation: function getSelectionInformation() {
	    var focusedElem = (0, _getActiveElement2.default)();
	    return {
	      focusedElem: focusedElem,
	      selectionRange: ReactInputSelection.hasSelectionCapabilities(focusedElem) ? ReactInputSelection.getSelection(focusedElem) : null
	    };
	  },

	  /**
	   * @restoreSelection: If any selection information was potentially lost,
	   * restore it. This is useful when performing operations that could remove dom
	   * nodes and place them back in, resulting in focus being lost.
	   */
	  restoreSelection: function restoreSelection(priorSelectionInformation) {
	    var curFocusedElem = (0, _getActiveElement2.default)();
	    var priorFocusedElem = priorSelectionInformation.focusedElem;
	    var priorSelectionRange = priorSelectionInformation.selectionRange;
	    if (curFocusedElem !== priorFocusedElem && isInDocument(priorFocusedElem)) {
	      if (ReactInputSelection.hasSelectionCapabilities(priorFocusedElem)) {
	        ReactInputSelection.setSelection(priorFocusedElem, priorSelectionRange);
	      }
	      (0, _focusNode2.default)(priorFocusedElem);
	    }
	  },

	  /**
	   * @getSelection: Gets the selection bounds of a focused textarea, input or
	   * contentEditable node.
	   * -@input: Look up selection bounds of this input
	   * -@return {start: selectionStart, end: selectionEnd}
	   */
	  getSelection: function getSelection(input) {
	    var selection;

	    if ('selectionStart' in input) {
	      // Modern browser with input or textarea.
	      selection = {
	        start: input.selectionStart,
	        end: input.selectionEnd
	      };
	    } else if (document.selection && input.nodeName && input.nodeName.toLowerCase() === 'input') {
	      // IE8 input.
	      var range = document.selection.createRange();
	      // There can only be one selection per document in IE, so it must
	      // be in our element.
	      if (range.parentElement() === input) {
	        selection = {
	          start: -range.moveStart('character', -input.value.length),
	          end: -range.moveEnd('character', -input.value.length)
	        };
	      }
	    } else {
	      // Content editable or old IE textarea.
	      selection = _ReactDOMSelection2.default.getOffsets(input);
	    }

	    return selection || { start: 0, end: 0 };
	  },

	  /**
	   * @setSelection: Sets the selection bounds of a textarea or input and focuses
	   * the input.
	   * -@input     Set selection bounds of this input or textarea
	   * -@offsets   Object of same form that is returned from get*
	   */
	  setSelection: function setSelection(input, offsets) {
	    var start = offsets.start;
	    var end = offsets.end;
	    if (end === undefined) {
	      end = start;
	    }

	    if ('selectionStart' in input) {
	      input.selectionStart = start;
	      input.selectionEnd = Math.min(end, input.value.length);
	    } else if (document.selection && input.nodeName && input.nodeName.toLowerCase() === 'input') {
	      var range = input.createTextRange();
	      range.collapse(true);
	      range.moveStart('character', start);
	      range.moveEnd('character', end - start);
	      range.select();
	    } else {
	      _ReactDOMSelection2.default.setOffsets(input, offsets);
	    }
	  }
	};

		exports.default = ReactInputSelection;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMSelection
	 */

	'use strict';

	exports.__esModule = true;

	var _ExecutionEnvironment = __webpack_require__(28);

	var _ExecutionEnvironment2 = _interopRequireDefault(_ExecutionEnvironment);

	var _getNodeForCharacterOffset = __webpack_require__(62);

	var _getNodeForCharacterOffset2 = _interopRequireDefault(_getNodeForCharacterOffset);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var getTextContentAccessor = function getTextContentAccessor() {
	  return 'textContent';
	};

	/**
	 * While `isCollapsed` is available on the Selection object and `collapsed`
	 * is available on the Range object, IE11 sometimes gets them wrong.
	 * If the anchor/focus nodes and offsets are the same, the range is collapsed.
	 */
	function isCollapsed(anchorNode, anchorOffset, focusNode, focusOffset) {
	  return anchorNode === focusNode && anchorOffset === focusOffset;
	}

	/**
	 * @param {DOMElement} node
	 * @return {?object}
	 */
	function getModernOffsets(node) {
	  var selection = window.getSelection && window.getSelection();

	  if (!selection || selection.rangeCount === 0) {
	    return null;
	  }

	  var anchorNode = selection.anchorNode;
	  var anchorOffset = selection.anchorOffset;
	  var focusNode = selection.focusNode;
	  var focusOffset = selection.focusOffset;

	  var currentRange = selection.getRangeAt(0);

	  // In Firefox, range.startContainer and range.endContainer can be "anonymous
	  // divs", e.g. the up/down buttons on an <input type="number">. Anonymous
	  // divs do not seem to expose properties, triggering a "Permission denied
	  // error" if any of its properties are accessed. The only seemingly possible
	  // way to avoid erroring is to access a property that typically works for
	  // non-anonymous divs and catch any error that may otherwise arise. See
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=208427
	  try {
	    /* eslint-disable no-unused-expressions */
	    currentRange.startContainer.nodeType;
	    currentRange.endContainer.nodeType;
	    /* eslint-enable no-unused-expressions */
	  } catch (e) {
	    return null;
	  }

	  // If the node and offset values are the same, the selection is collapsed.
	  // `Selection.isCollapsed` is available natively, but IE sometimes gets
	  // this value wrong.
	  var isSelectionCollapsed = isCollapsed(selection.anchorNode, selection.anchorOffset, selection.focusNode, selection.focusOffset);

	  var rangeLength = isSelectionCollapsed ? 0 : currentRange.toString().length;

	  var tempRange = currentRange.cloneRange();
	  tempRange.selectNodeContents(node);
	  tempRange.setEnd(currentRange.startContainer, currentRange.startOffset);

	  var isTempRangeCollapsed = isCollapsed(tempRange.startContainer, tempRange.startOffset, tempRange.endContainer, tempRange.endOffset);

	  var start = isTempRangeCollapsed ? 0 : tempRange.toString().length;
	  var end = start + rangeLength;

	  // Detect whether the selection is backward.
	  var detectionRange = document.createRange();
	  detectionRange.setStart(anchorNode, anchorOffset);
	  detectionRange.setEnd(focusNode, focusOffset);
	  var isBackward = detectionRange.collapsed;

	  return {
	    start: isBackward ? end : start,
	    end: isBackward ? start : end
	  };
	}

	/**
	 * In modern non-IE browsers, we can support both forward and backward
	 * selections.
	 *
	 * Note: IE10+ supports the Selection object, but it does not support
	 * the `extend` method, which means that even in modern IE, it's not possible
	 * to programmatically create a backward selection. Thus, for all IE
	 * versions, we use the old IE API to create our selections.
	 *
	 * @param {DOMElement|DOMTextNode} node
	 * @param {object} offsets
	 */
	function setModernOffsets(node, offsets) {
	  if (!window.getSelection) {
	    return;
	  }

	  var selection = window.getSelection();
	  var length = node[getTextContentAccessor()].length;
	  var start = Math.min(offsets.start, length);
	  var end = offsets.end === undefined ? start : Math.min(offsets.end, length);

	  // IE 11 uses modern selection, but doesn't support the extend method.
	  // Flip backward selections, so we can set with a single range.
	  if (!selection.extend && start > end) {
	    var temp = end;
	    end = start;
	    start = temp;
	  }

	  var startMarker = (0, _getNodeForCharacterOffset2.default)(node, start);
	  var endMarker = (0, _getNodeForCharacterOffset2.default)(node, end);

	  if (startMarker && endMarker) {
	    var range = document.createRange();
	    range.setStart(startMarker.node, startMarker.offset);
	    selection.removeAllRanges();

	    if (start > end) {
	      selection.addRange(range);
	      selection.extend(endMarker.node, endMarker.offset);
	    } else {
	      range.setEnd(endMarker.node, endMarker.offset);
	      selection.addRange(range);
	    }
	  }
	}

	// var useIEOffsets = ExecutionEnvironment.canUseDOM && 'selection' in document && !('getSelection' in window);

	var ReactDOMSelection = {
	  /**
	   * @param {DOMElement} node
	   */
	  getOffsets: getModernOffsets, //useIEOffsets ? getIEOffsets : getModernOffsets,

	  /**
	   * @param {DOMElement|DOMTextNode} node
	   * @param {object} offsets
	   */
	  setOffsets: setModernOffsets //useIEOffsets ? setIEOffsets : setModernOffsets
	};

		exports.default = ReactDOMSelection;

/***/ },
/* 62 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getNodeForCharacterOffset
	 */

	'use strict';

	/**
	 * Given any node return the first leaf node without children.
	 *
	 * @param {DOMElement|DOMTextNode} node
	 * @return {DOMElement|DOMTextNode}
	 */

	exports.__esModule = true;
	function getLeafNode(node) {
	  while (node && node.firstChild) {
	    node = node.firstChild;
	  }
	  return node;
	}

	/**
	 * Get the next sibling within a container. This will walk up the
	 * DOM if a node's siblings have been exhausted.
	 *
	 * @param {DOMElement|DOMTextNode} node
	 * @return {?DOMElement|DOMTextNode}
	 */
	function getSiblingNode(node) {
	  while (node) {
	    if (node.nextSibling) {
	      return node.nextSibling;
	    }
	    node = node.parentNode;
	  }
	}

	/**
	 * Get object describing the nodes which contain characters at offset.
	 *
	 * @param {DOMElement|DOMTextNode} root
	 * @param {number} offset
	 * @return {?object}
	 */
	function getNodeForCharacterOffset(root, offset) {
	  var node = getLeafNode(root);
	  var nodeStart = 0;
	  var nodeEnd = 0;

	  while (node) {
	    if (node.nodeType === 3) {
	      nodeEnd = nodeStart + node.textContent.length;

	      if (nodeStart <= offset && nodeEnd >= offset) {
	        return {
	          node: node,
	          offset: offset - nodeStart
	        };
	      }

	      nodeStart = nodeEnd;
	    }

	    node = getLeafNode(getSiblingNode(node));
	  }
	}

	exports.default = getNodeForCharacterOffset;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	var isTextNode = __webpack_require__(64);

	/*eslint-disable no-bitwise */

	/**
	 * Checks if a given DOM node contains or is another DOM node.
	 */
	function containsNode(outerNode, innerNode) {
	  if (!outerNode || !innerNode) {
	    return false;
	  } else if (outerNode === innerNode) {
	    return true;
	  } else if (isTextNode(outerNode)) {
	    return false;
	  } else if (isTextNode(innerNode)) {
	    return containsNode(outerNode, innerNode.parentNode);
	  } else if ('contains' in outerNode) {
	    return outerNode.contains(innerNode);
	  } else if (outerNode.compareDocumentPosition) {
	    return !!(outerNode.compareDocumentPosition(innerNode) & 16);
	  } else {
	    return false;
	  }
	}

	module.exports = containsNode;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	var isNode = __webpack_require__(65);

	/**
	 * @param {*} object The object to check.
	 * @return {boolean} Whether or not the object is a DOM text node.
	 */
	function isTextNode(object) {
	  return isNode(object) && object.nodeType == 3;
	}

	module.exports = isTextNode;

/***/ },
/* 65 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	/**
	 * @param {*} object The object to check.
	 * @return {boolean} Whether or not the object is a DOM node.
	 */
	function isNode(object) {
	  return !!(object && (typeof Node === 'function' ? object instanceof Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
	}

	module.exports = isNode;

/***/ },
/* 66 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * @param {DOMElement} node input/textarea to focus
	 */

	function focusNode(node) {
	  // IE8 can throw "Can't move focus to the control because it is invisible,
	  // not enabled, or of a type that does not accept the focus." for all kinds of
	  // reasons that are too expensive and fragile to test.
	  try {
	    node.focus();
	  } catch (e) {}
	}

	module.exports = focusNode;

/***/ },
/* 67 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	/* eslint-disable fb-www/typeof-undefined */

	/**
	 * Same as document.activeElement but wraps in a try-catch block. In IE it is
	 * not safe to call document.activeElement if there is nothing focused.
	 *
	 * The activeElement will be null only if the document or document body is not
	 * yet defined.
	 */
	function getActiveElement() /*?DOMElement*/{
	  if (typeof document === 'undefined') {
	    return null;
	  }
	  try {
	    return document.activeElement || document.body;
	  } catch (e) {
	    return document.body;
	  }
	}

	module.exports = getActiveElement;

/***/ },
/* 68 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * 
	 */

	/*eslint-disable no-self-compare */

	'use strict';

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    // Added the nonzero y check to make Flow happy, but it is redundant
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}

	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) {
	    return true;
	  }

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = shallowEqual;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SimpleEventPlugin
	 */

	'use strict';

	exports.__esModule = true;

	var _reactProdInvariant = __webpack_require__(17);

	var _reactProdInvariant2 = _interopRequireDefault(_reactProdInvariant);

	var _EventConstants = __webpack_require__(13);

	var _EventConstants2 = _interopRequireDefault(_EventConstants);

	var _EventListener = __webpack_require__(57);

	var _EventListener2 = _interopRequireDefault(_EventListener);

	var _EventPropagators = __webpack_require__(46);

	var _EventPropagators2 = _interopRequireDefault(_EventPropagators);

	var _ReactDOMComponentTree = __webpack_require__(30);

	var _ReactDOMComponentTree2 = _interopRequireDefault(_ReactDOMComponentTree);

	var _SyntheticEvent = __webpack_require__(48);

	var _SyntheticEvent2 = _interopRequireDefault(_SyntheticEvent);

	var _SyntheticFocusEvent = __webpack_require__(70);

	var _SyntheticFocusEvent2 = _interopRequireDefault(_SyntheticFocusEvent);

	var _SyntheticMouseEvent = __webpack_require__(72);

	var _SyntheticMouseEvent2 = _interopRequireDefault(_SyntheticMouseEvent);

	var _SyntheticDragEvent = __webpack_require__(73);

	var _SyntheticDragEvent2 = _interopRequireDefault(_SyntheticDragEvent);

	var _SyntheticTouchEvent = __webpack_require__(74);

	var _SyntheticTouchEvent2 = _interopRequireDefault(_SyntheticTouchEvent);

	var _SyntheticTransitionEvent = __webpack_require__(75);

	var _SyntheticTransitionEvent2 = _interopRequireDefault(_SyntheticTransitionEvent);

	var _SyntheticUIEvent = __webpack_require__(71);

	var _SyntheticUIEvent2 = _interopRequireDefault(_SyntheticUIEvent);

	var _SyntheticAnimationEvent = __webpack_require__(76);

	var _SyntheticAnimationEvent2 = _interopRequireDefault(_SyntheticAnimationEvent);

	var _SyntheticKeyboardEvent = __webpack_require__(77);

	var _SyntheticKeyboardEvent2 = _interopRequireDefault(_SyntheticKeyboardEvent);

	var _SyntheticClipboardEvent = __webpack_require__(81);

	var _SyntheticClipboardEvent2 = _interopRequireDefault(_SyntheticClipboardEvent);

	var _SyntheticWheelEvent = __webpack_require__(82);

	var _SyntheticWheelEvent2 = _interopRequireDefault(_SyntheticWheelEvent);

	var _emptyFunction = __webpack_require__(23);

	var _emptyFunction2 = _interopRequireDefault(_emptyFunction);

	var _getEventCharCode = __webpack_require__(79);

	var _getEventCharCode2 = _interopRequireDefault(_getEventCharCode);

	var _invariant = __webpack_require__(15);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var topLevelTypes = _EventConstants2.default.topLevelTypes;

	var eventTypes = {};

	var topLevelEventsToDispatchConfig = [];
	Array('abort', 'animationEnd', 'animationIteration', 'animationStart', 'blur', 'canPlay', 'canPlayThrough', 'click', 'contextMenu', 'copy', 'cut', 'doubleClick', 'drag', 'dragEnd', 'dragEnter', 'dragExit', 'dragLeave', 'dragOver', 'dragStart', 'drop', 'durationChange', 'emptied', 'encrypted', 'ended', 'error', 'focus', 'input', 'invalid', 'keyDown', 'keyPress', 'keyUp', 'load', 'loadedData', 'loadedMetadata', 'loadStart', 'mouseDown', 'mouseMove', 'mouseOut', 'mouseOver', 'mouseUp', 'paste', 'pause', 'play', 'playing', 'progress', 'rateChange', 'reset', 'scroll', 'seeked', 'seeking', 'stalled', 'submit', 'suspend', 'timeUpdate', 'touchCancel', 'touchEnd', 'touchMove', 'touchStart', 'transitionEnd', 'volumeChange', 'waiting', 'wheel').forEach(function (event) {
	  var capitalizedEvent = event[0].toUpperCase() + event.slice(1);
	  var onEvent = 'on' + capitalizedEvent;
	  var topEvent = 'top' + capitalizedEvent;

	  var type = {
	    phasedRegistrationNames: {
	      bubbled: onEvent,
	      captured: onEvent + 'Capture'
	    },
	    dependencies: [topEvent]
	  };
	  eventTypes[event] = type;
	  topLevelEventsToDispatchConfig[topEvent] = type;
	});

	var ON_CLICK_KEY = 'onClick';
	var onClickListeners = {};

	function getDictionaryKey(inst) {
	  // Prevents V8 performance issue:
	  // https://github.com/facebook/react/pull/7232
	  return '.' + inst._rootNodeID;
	}

	var SimpleEventPlugin = {

	  eventTypes: eventTypes,

	  extractEvents: function extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
	    var dispatchConfig = topLevelEventsToDispatchConfig[topLevelType];
	    if (!dispatchConfig) {
	      return null;
	    }
	    var EventConstructor;
	    switch (topLevelType) {
	      case topLevelTypes.topAbort:
	      case topLevelTypes.topCanPlay:
	      case topLevelTypes.topCanPlayThrough:
	      case topLevelTypes.topDurationChange:
	      case topLevelTypes.topEmptied:
	      case topLevelTypes.topEncrypted:
	      case topLevelTypes.topEnded:
	      case topLevelTypes.topError:
	      case topLevelTypes.topInput:
	      case topLevelTypes.topInvalid:
	      case topLevelTypes.topLoad:
	      case topLevelTypes.topLoadedData:
	      case topLevelTypes.topLoadedMetadata:
	      case topLevelTypes.topLoadStart:
	      case topLevelTypes.topPause:
	      case topLevelTypes.topPlay:
	      case topLevelTypes.topPlaying:
	      case topLevelTypes.topProgress:
	      case topLevelTypes.topRateChange:
	      case topLevelTypes.topReset:
	      case topLevelTypes.topSeeked:
	      case topLevelTypes.topSeeking:
	      case topLevelTypes.topStalled:
	      case topLevelTypes.topSubmit:
	      case topLevelTypes.topSuspend:
	      case topLevelTypes.topTimeUpdate:
	      case topLevelTypes.topVolumeChange:
	      case topLevelTypes.topWaiting:
	        // HTML Events
	        // @see http://www.w3.org/TR/html5/index.html#events-0
	        EventConstructor = _SyntheticEvent2.default;
	        break;
	      case topLevelTypes.topKeyPress:
	        // Firefox creates a keypress event for function keys too. This removes
	        // the unwanted keypress events. Enter is however both printable and
	        // non-printable. One would expect Tab to be as well (but it isn't).
	        if ((0, _getEventCharCode2.default)(nativeEvent) === 0) {
	          return null;
	        }
	      /* falls through */
	      case topLevelTypes.topKeyDown:
	      case topLevelTypes.topKeyUp:
	        EventConstructor = _SyntheticKeyboardEvent2.default;
	        break;
	      case topLevelTypes.topBlur:
	      case topLevelTypes.topFocus:
	        EventConstructor = _SyntheticFocusEvent2.default;
	        break;
	      case topLevelTypes.topClick:
	        // Firefox creates a click event on right mouse clicks. This removes the
	        // unwanted click events.
	        if (nativeEvent.button === 2) {
	          return null;
	        }
	      /* falls through */
	      case topLevelTypes.topContextMenu:
	      case topLevelTypes.topDoubleClick:
	      case topLevelTypes.topMouseDown:
	      case topLevelTypes.topMouseMove:
	      case topLevelTypes.topMouseOut:
	      case topLevelTypes.topMouseOver:
	      case topLevelTypes.topMouseUp:
	        EventConstructor = _SyntheticMouseEvent2.default;
	        break;
	      case topLevelTypes.topDrag:
	      case topLevelTypes.topDragEnd:
	      case topLevelTypes.topDragEnter:
	      case topLevelTypes.topDragExit:
	      case topLevelTypes.topDragLeave:
	      case topLevelTypes.topDragOver:
	      case topLevelTypes.topDragStart:
	      case topLevelTypes.topDrop:
	        EventConstructor = _SyntheticDragEvent2.default;
	        break;
	      case topLevelTypes.topTouchCancel:
	      case topLevelTypes.topTouchEnd:
	      case topLevelTypes.topTouchMove:
	      case topLevelTypes.topTouchStart:
	        EventConstructor = _SyntheticTouchEvent2.default;
	        break;
	      case topLevelTypes.topAnimationEnd:
	      case topLevelTypes.topAnimationIteration:
	      case topLevelTypes.topAnimationStart:
	        EventConstructor = _SyntheticAnimationEvent2.default;
	        break;
	      case topLevelTypes.topTransitionEnd:
	        EventConstructor = _SyntheticTransitionEvent2.default;
	        break;
	      case topLevelTypes.topScroll:
	        EventConstructor = _SyntheticUIEvent2.default;
	        break;
	      case topLevelTypes.topWheel:
	        EventConstructor = _SyntheticWheelEvent2.default;
	        break;
	      case topLevelTypes.topCopy:
	      case topLevelTypes.topCut:
	      case topLevelTypes.topPaste:
	        EventConstructor = _SyntheticClipboardEvent2.default;
	        break;
	    }
	    !EventConstructor ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'SimpleEventPlugin: Unhandled event type, `%s`.', topLevelType) : (0, _reactProdInvariant2.default)('86', topLevelType) : void 0;
	    if (!EventConstructor) return console.log(topLevelType);
	    var event = EventConstructor.getPooled(dispatchConfig, targetInst, nativeEvent, nativeEventTarget);
	    _EventPropagators2.default.accumulateTwoPhaseDispatches(event);
	    return event;
	  },

	  didPutListener: function didPutListener(inst, registrationName, listener) {
	    // Mobile Safari does not fire properly bubble click events on
	    // non-interactive elements, which means delegated click listeners do not
	    // fire. The workaround for this bug involves attaching an empty click
	    // listener on the target node.
	    if (registrationName === ON_CLICK_KEY) {
	      var key = getDictionaryKey(inst);
	      var node = _ReactDOMComponentTree2.default.getNodeFromInstance(inst);
	      if (!onClickListeners[key]) {
	        onClickListeners[key] = _EventListener2.default.listen(node, 'click', _emptyFunction2.default);
	      }
	    }
	  },

	  willDeleteListener: function willDeleteListener(inst, registrationName) {
	    if (registrationName === ON_CLICK_KEY) {
	      var key = getDictionaryKey(inst);
	      if (onClickListeners[key]) {
	        onClickListeners[key].remove();
	        delete onClickListeners[key];
	      }
	    }
	  }

	};

		exports.default = SimpleEventPlugin;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticFocusEvent
	 */

	'use strict';

	exports.__esModule = true;

	var _SyntheticUIEvent = __webpack_require__(71);

	var _SyntheticUIEvent2 = _interopRequireDefault(_SyntheticUIEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @interface FocusEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	//var FocusEventInterface = {
	//  relatedTarget: null
	//};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	//function SyntheticFocusEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	//  return SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	//}
	//
	//SyntheticUIEvent.augmentClass(SyntheticFocusEvent, FocusEventInterface);

	exports.default = _SyntheticUIEvent2.default;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticUIEvent
	 */

	'use strict';

	exports.__esModule = true;

	var _SyntheticEvent = __webpack_require__(48);

	var _SyntheticEvent2 = _interopRequireDefault(_SyntheticEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//var getEventTarget = require('./getEventTarget');

	/**
	 * @interface UIEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	//var UIEventInterface = {
	//  view: function (event) {
	//    if (event.view) {
	//      return event.view;
	//    }
	//
	//    var target = getEventTarget(event);
	//    if (target.window === target) {
	//      // target is a window object
	//      return target;
	//    }
	//
	//    var doc = target.ownerDocument;
	//    // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
	//    if (doc) {
	//      return doc.defaultView || doc.parentWindow;
	//    } else {
	//      return window;
	//    }
	//  },
	//  detail: function (event) {
	//    return event.detail || 0;
	//  }
	//};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticEvent}
	 */
	//function SyntheticUIEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	//  return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	//}
	//
	//SyntheticEvent.augmentClass(SyntheticUIEvent, UIEventInterface);

	exports.default = _SyntheticEvent2.default;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticMouseEvent
	 */

	'use strict';

	exports.__esModule = true;

	var _SyntheticUIEvent = __webpack_require__(71);

	var _SyntheticUIEvent2 = _interopRequireDefault(_SyntheticUIEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//var ViewportMetrics = require('./ViewportMetrics');
	//
	//var getEventModifierState = require('./getEventModifierState');

	/**
	 * @interface MouseEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var MouseEventInterface = {
	  //  screenX: null,
	  //  screenY: null,
	  //  clientX: null,
	  //  clientY: null,
	  //  ctrlKey: null,
	  //  shiftKey: null,
	  //  altKey: null,
	  //  metaKey: null,
	  //  getModifierState: getEventModifierState,
	  button: function button(event) {
	    // Webkit, Firefox, IE9+
	    // which:  1 2 3
	    // button: 0 1 2 (standard)
	    var button = event.button;
	    if ('which' in event) {
	      return button;
	    }
	    // IE<9
	    // which:  undefined
	    // button: 0 0 0
	    // button: 1 4 2 (onmouseup)
	    return button === 2 ? 2 : button === 4 ? 1 : 0;
	  }
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticMouseEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  return _SyntheticUIEvent2.default.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	_SyntheticUIEvent2.default.augmentClass(SyntheticMouseEvent, MouseEventInterface);

	exports.default = SyntheticMouseEvent;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticDragEvent
	 */

	'use strict';

	exports.__esModule = true;

	var _SyntheticMouseEvent = __webpack_require__(72);

	var _SyntheticMouseEvent2 = _interopRequireDefault(_SyntheticMouseEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @interface DragEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	//var DragEventInterface = {
	//  dataTransfer: null
	//};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	//function SyntheticDragEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	//  return SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	//}
	//
	//SyntheticMouseEvent.augmentClass(SyntheticDragEvent, DragEventInterface);

	exports.default = _SyntheticMouseEvent2.default;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticTouchEvent
	 */

	'use strict';

	exports.__esModule = true;

	var _SyntheticUIEvent = __webpack_require__(71);

	var _SyntheticUIEvent2 = _interopRequireDefault(_SyntheticUIEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//var getEventModifierState = require('./getEventModifierState');
	//
	///**
	// * @interface TouchEvent
	// * @see http://www.w3.org/TR/touch-events/
	// */
	//var TouchEventInterface = {
	//  touches: null,
	//  targetTouches: null,
	//  changedTouches: null,
	//  altKey: null,
	//  metaKey: null,
	//  ctrlKey: null,
	//  shiftKey: null,
	//  getModifierState: getEventModifierState
	//};
	//
	///**
	// * @param {object} dispatchConfig Configuration used to dispatch this event.
	// * @param {string} dispatchMarker Marker identifying the event target.
	// * @param {object} nativeEvent Native browser event.
	// * @extends {SyntheticUIEvent}
	// */
	//function SyntheticTouchEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	//  return SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	//}
	//
	//SyntheticUIEvent.augmentClass(SyntheticTouchEvent, TouchEventInterface);

	exports.default = _SyntheticUIEvent2.default;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _SyntheticEvent = __webpack_require__(48);

	var _SyntheticEvent2 = _interopRequireDefault(_SyntheticEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/2009/WD-css3-transitions-20090320/#transition-events-
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent
	 */
	//var TransitionEventInterface = {
	//  propertyName: null,
	//  elapsedTime: null,
	//  pseudoElement: null
	//};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticEvent}
	 */
	//function SyntheticTransitionEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	//  return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	//}
	//
	//SyntheticEvent.augmentClass(SyntheticTransitionEvent, TransitionEventInterface);

	exports.default = _SyntheticEvent2.default; /**
	                                             * Copyright 2013-present, Facebook, Inc.
	                                             * All rights reserved.
	                                             *
	                                             * This source code is licensed under the BSD-style license found in the
	                                             * LICENSE file in the root directory of this source tree. An additional grant
	                                             * of patent rights can be found in the PATENTS file in the same directory.
	                                             *
	                                             * @providesModule SyntheticTransitionEvent
	                                             */

		//'use strict';

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticAnimationEvent
	 */

	'use strict';

	exports.__esModule = true;

	var _SyntheticEvent = __webpack_require__(48);

	var _SyntheticEvent2 = _interopRequireDefault(_SyntheticEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/css3-animations/#AnimationEvent-interface
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent
	 */
	//var AnimationEventInterface = {
	//  animationName: null,
	//  elapsedTime: null,
	//  pseudoElement: null
	//};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticEvent}
	 */
	//function SyntheticAnimationEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	//  return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	//}
	//
	//SyntheticEvent.augmentClass(SyntheticAnimationEvent, AnimationEventInterface);

	exports.default = _SyntheticEvent2.default;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticKeyboardEvent
	 */

	'use strict';

	exports.__esModule = true;

	var _SyntheticUIEvent = __webpack_require__(71);

	var _SyntheticUIEvent2 = _interopRequireDefault(_SyntheticUIEvent);

	var _getEventKey = __webpack_require__(78);

	var _getEventKey2 = _interopRequireDefault(_getEventKey);

	var _getEventModifierState = __webpack_require__(80);

	var _getEventModifierState2 = _interopRequireDefault(_getEventModifierState);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @interface KeyboardEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */


	//var getEventCharCode = require('./getEventCharCode');
	var KeyboardEventInterface = {
	  key: _getEventKey2.default,
	  //  location: null,
	  //  ctrlKey: null,
	  //  shiftKey: null,
	  //  altKey: null,
	  //  metaKey: null,
	  //  repeat: null,
	  //  locale: null,
	  getModifierState: _getEventModifierState2.default
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticKeyboardEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  return _SyntheticUIEvent2.default.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	_SyntheticUIEvent2.default.augmentClass(SyntheticKeyboardEvent, KeyboardEventInterface);

	exports.default = SyntheticKeyboardEvent;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getEventKey
	 */

	'use strict';

	exports.__esModule = true;

	var _getEventCharCode = __webpack_require__(79);

	var _getEventCharCode2 = _interopRequireDefault(_getEventCharCode);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Normalization of deprecated HTML5 `key` values
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
	 */
	var normalizeKey = {
	  'Esc': 'Escape',
	  'Spacebar': ' ',
	  'Left': 'ArrowLeft',
	  'Up': 'ArrowUp',
	  'Right': 'ArrowRight',
	  'Down': 'ArrowDown',
	  'Del': 'Delete',
	  'Win': 'OS',
	  'Menu': 'ContextMenu',
	  'Apps': 'ContextMenu',
	  'Scroll': 'ScrollLock',
	  'MozPrintableKey': 'Unidentified'
	};

	/**
	 * Translation from legacy `keyCode` to HTML5 `key`
	 * Only special keys supported, all others depend on keyboard layout or browser
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
	 */
	var translateToKey = {
	  8: 'Backspace',
	  9: 'Tab',
	  12: 'Clear',
	  13: 'Enter',
	  16: 'Shift',
	  17: 'Control',
	  18: 'Alt',
	  19: 'Pause',
	  20: 'CapsLock',
	  27: 'Escape',
	  32: ' ',
	  33: 'PageUp',
	  34: 'PageDown',
	  35: 'End',
	  36: 'Home',
	  37: 'ArrowLeft',
	  38: 'ArrowUp',
	  39: 'ArrowRight',
	  40: 'ArrowDown',
	  45: 'Insert',
	  46: 'Delete',
	  112: 'F1', 113: 'F2', 114: 'F3', 115: 'F4', 116: 'F5', 117: 'F6',
	  118: 'F7', 119: 'F8', 120: 'F9', 121: 'F10', 122: 'F11', 123: 'F12',
	  144: 'NumLock',
	  145: 'ScrollLock',
	  224: 'Meta'
	};

	/**
	 * @param {object} nativeEvent Native browser event.
	 * @return {string} Normalized `key` property.
	 */
	function getEventKey(nativeEvent) {
	  if (nativeEvent.key) {
	    // Normalize inconsistent values reported by browsers due to
	    // implementations of a working draft specification.

	    // FireFox implements `key` but returns `MozPrintableKey` for all
	    // printable characters (normalized to `Unidentified`), ignore it.
	    var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
	    if (key !== 'Unidentified') {
	      return key;
	    }
	  }

	  // Browser does not implement `key`, polyfill as much of it as we can.
	  if (nativeEvent.type === 'keypress') {
	    var charCode = (0, _getEventCharCode2.default)(nativeEvent);

	    // The enter-key is technically both printable and non-printable and can
	    // thus be captured by `keypress`, no other non-printable key should.
	    return charCode === 13 ? 'Enter' : String.fromCharCode(charCode);
	  }
	  if (nativeEvent.type === 'keydown' || nativeEvent.type === 'keyup') {
	    // While user keyboard layout determines the actual meaning of each
	    // `keyCode` value, almost all function keys have a universal value.
	    return translateToKey[nativeEvent.keyCode] || 'Unidentified';
	  }
	  return '';
	}

	exports.default = getEventKey;

/***/ },
/* 79 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getEventCharCode
	 */

	'use strict';

	/**
	 * `charCode` represents the actual "character code" and is safe to use with
	 * `String.fromCharCode`. As such, only keys that correspond to printable
	 * characters produce a valid `charCode`, the only exception to this is Enter.
	 * The Tab-key is considered non-printable and does not have a `charCode`,
	 * presumably because it does not produce a tab-character in browsers.
	 *
	 * @param {object} nativeEvent Native browser event.
	 * @return {number} Normalized `charCode` property.
	 */

	exports.__esModule = true;
	function getEventCharCode(nativeEvent) {
	  var charCode;
	  var keyCode = nativeEvent.keyCode;

	  if ('charCode' in nativeEvent) {
	    charCode = nativeEvent.charCode;

	    // FF does not set `charCode` for the Enter-key, check against `keyCode`.
	    if (charCode === 0 && keyCode === 13) {
	      charCode = 13;
	    }
	  } else {
	    // IE8 does not implement `charCode`, but `keyCode` has the correct value.
	    charCode = keyCode;
	  }

	  // Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
	  // Must not discard the (non-)printable Enter-key.
	  if (charCode >= 32 || charCode === 13) {
	    return charCode;
	  }

	  return 0;
	}

	exports.default = getEventCharCode;

/***/ },
/* 80 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getEventModifierState
	 */

	'use strict';

	/**
	 * Translation from modifier key to the associated property in the event.
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/#keys-Modifiers
	 */

	exports.__esModule = true;
	var modifierKeyToProp = {
	  'Alt': 'altKey',
	  'Control': 'ctrlKey',
	  'Meta': 'metaKey',
	  'Shift': 'shiftKey'
	};

	// IE8 does not implement getModifierState so we simply map it to the only
	// modifier keys exposed by the event itself, does not support Lock-keys.
	// Currently, all major browsers except Chrome seems to support Lock-keys.
	function modifierStateGetter(keyArg) {
	  var syntheticEvent = this;
	  var nativeEvent = syntheticEvent.nativeEvent;
	  if (nativeEvent.getModifierState) {
	    return nativeEvent.getModifierState(keyArg);
	  }
	  var keyProp = modifierKeyToProp[keyArg];
	  return keyProp ? !!nativeEvent[keyProp] : false;
	}

	function getEventModifierState(nativeEvent) {
	  return modifierStateGetter;
	}

	exports.default = getEventModifierState;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticClipboardEvent
	 */

	'use strict';

	exports.__esModule = true;

	var _SyntheticEvent = __webpack_require__(48);

	var _SyntheticEvent2 = _interopRequireDefault(_SyntheticEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/clipboard-apis/
	 */
	var ClipboardEventInterface = {
	  clipboardData: function clipboardData(event) {
	    return 'clipboardData' in event ? event.clipboardData : window.clipboardData;
	  }
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticClipboardEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  return _SyntheticEvent2.default.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	_SyntheticEvent2.default.augmentClass(SyntheticClipboardEvent, ClipboardEventInterface);

	exports.default = SyntheticClipboardEvent;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticWheelEvent
	 */

	'use strict';

	exports.__esModule = true;

	var _SyntheticMouseEvent = __webpack_require__(72);

	var _SyntheticMouseEvent2 = _interopRequireDefault(_SyntheticMouseEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @interface WheelEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var WheelEventInterface = {
	  deltaX: function deltaX(event) {
	    return 'deltaX' in event ? event.deltaX :
	    // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
	    'wheelDeltaX' in event ? -event.wheelDeltaX : 0;
	  },
	  deltaY: function deltaY(event) {
	    return 'deltaY' in event ? event.deltaY :
	    // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
	    'wheelDeltaY' in event ? -event.wheelDeltaY :
	    // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
	    'wheelDelta' in event ? -event.wheelDelta : 0;
	  },
	  deltaZ: null,

	  // Browsers without "deltaMode" is reporting in raw wheel delta where one
	  // notch on the scroll is always +/- 120, roughly equivalent to pixels.
	  // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
	  // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
	  deltaMode: null
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticMouseEvent}
	 */
	function SyntheticWheelEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  return _SyntheticMouseEvent2.default.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	_SyntheticMouseEvent2.default.augmentClass(SyntheticWheelEvent, WheelEventInterface);

	exports.default = SyntheticWheelEvent;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _EventConstants = __webpack_require__(13);

	var _EventConstants2 = _interopRequireDefault(_EventConstants);

	var _TouchHistoryMath = __webpack_require__(84);

	var _TouchHistoryMath2 = _interopRequireDefault(_TouchHistoryMath);

	var _EventPluginRegistry = __webpack_require__(16);

	var _EventPluginRegistry2 = _interopRequireDefault(_EventPluginRegistry);

	var _ResponderEventPlugin = __webpack_require__(85);

	var _ResponderEventPlugin2 = _interopRequireDefault(_ResponderEventPlugin);

	var _ResponderTouchHistoryStore = __webpack_require__(87);

	var _ResponderTouchHistoryStore2 = _interopRequireDefault(_ResponderTouchHistoryStore);

	var _CSSPropertyOperations = __webpack_require__(89);

	var _CSSPropertyOperations2 = _interopRequireDefault(_CSSPropertyOperations);

	var _PooledClass = __webpack_require__(49);

	var _PooledClass2 = _interopRequireDefault(_PooledClass);

	var _reactProdInvariant = __webpack_require__(17);

	var _reactProdInvariant2 = _interopRequireDefault(_reactProdInvariant);

	var _SyntheticUIEvent = __webpack_require__(71);

	var _SyntheticUIEvent2 = _interopRequireDefault(_SyntheticUIEvent);

	var _EventPropagators = __webpack_require__(46);

	var _EventPropagators2 = _interopRequireDefault(_EventPropagators);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import findNodeHandle from './findNodeHandle';


	var ReactWebAdapter = {
	    adapt: function adaptReactWeb(ReactMobile) {
	        ReactMobile.EventConstants = _EventConstants2.default;
	        ReactMobile.TouchHistoryMath = _TouchHistoryMath2.default;
	        ReactMobile.EventPluginRegistry = _EventPluginRegistry2.default;
	        ReactMobile.ResponderEventPlugin = _ResponderEventPlugin2.default;
	        ReactMobile.ResponderTouchHistoryStore = _ResponderTouchHistoryStore2.default;
	        ReactMobile.CSSPropertyOperations = _CSSPropertyOperations2.default;
	        ReactMobile.PooledClass = _PooledClass2.default;
	        ReactMobile.reactProdInvariant = _reactProdInvariant2.default;
	        ReactMobile.SyntheticUIEvent = _SyntheticUIEvent2.default;
	        ReactMobile.EventPropagators = _EventPropagators2.default;
	        // below adapter in ReactDefaultInjection.js
	        /*
	            ReactMobile.EventPluginUtils
	            ReactMobile.EventPluginHub
	            ReactMobile.EventEmitter
	        */

	        ReactMobile.findNodeHandle = function (componentOrHandle) {
	            if (componentOrHandle == null || typeof componentOrHandle === 'number') return componentOrHandle;
	            // in preact base is _hostNode
	            return componentOrHandle.base || componentOrHandle._hostNode;
	        };
	        // first and only child
	        ReactMobile.onlyChild = function (children) {
	            if (children instanceof Array) children = children.length === 1 && children[0];
	            if ((typeof children === 'undefined' ? 'undefined' : _typeof(children)) === 'object' && children !== null) return children;
	        };
	    }
	};

		exports.default = ReactWebAdapter;

/***/ },
/* 84 */
/***/ function(module, exports) {

	/**
	 * @providesModule TouchHistoryMath
	 */

	'use strict';

	exports.__esModule = true;
	var TouchHistoryMath = {
	  /**
	   * This code is optimized and not intended to look beautiful. This allows
	   * computing of touch centroids that have moved after `touchesChangedAfter`
	   * timeStamp. You can compute the current centroid involving all touches
	   * moves after `touchesChangedAfter`, or you can compute the previous
	   * centroid of all touches that were moved after `touchesChangedAfter`.
	   *
	   * @param {TouchHistoryMath} touchHistory Standard Responder touch track
	   * data.
	   * @param {number} touchesChangedAfter timeStamp after which moved touches
	   * are considered "actively moving" - not just "active".
	   * @param {boolean} isXAxis Consider `x` dimension vs. `y` dimension.
	   * @param {boolean} ofCurrent Compute current centroid for actively moving
	   * touches vs. previous centroid of now actively moving touches.
	   * @return {number} value of centroid in specified dimension.
	   */
	  centroidDimension: function centroidDimension(touchHistory, touchesChangedAfter, isXAxis, ofCurrent) {
	    var touchBank = touchHistory.touchBank;
	    var total = 0;
	    var count = 0;

	    var oneTouchData = touchHistory.numberActiveTouches === 1 ? touchHistory.touchBank[touchHistory.indexOfSingleActiveTouch] : null;

	    if (oneTouchData !== null) {
	      if (oneTouchData.touchActive && oneTouchData.currentTimeStamp > touchesChangedAfter) {
	        total += ofCurrent && isXAxis ? oneTouchData.currentPageX : ofCurrent && !isXAxis ? oneTouchData.currentPageY : !ofCurrent && isXAxis ? oneTouchData.previousPageX : oneTouchData.previousPageY;
	        count = 1;
	      }
	    } else {
	      for (var i = 0; i < touchBank.length; i++) {
	        var touchTrack = touchBank[i];
	        if (touchTrack !== null && touchTrack !== undefined && touchTrack.touchActive && touchTrack.currentTimeStamp >= touchesChangedAfter) {
	          var toAdd; // Yuck, program temporarily in invalid state.
	          if (ofCurrent && isXAxis) {
	            toAdd = touchTrack.currentPageX;
	          } else if (ofCurrent && !isXAxis) {
	            toAdd = touchTrack.currentPageY;
	          } else if (!ofCurrent && isXAxis) {
	            toAdd = touchTrack.previousPageX;
	          } else {
	            toAdd = touchTrack.previousPageY;
	          }
	          total += toAdd;
	          count++;
	        }
	      }
	    }
	    return count > 0 ? total / count : TouchHistoryMath.noCentroid;
	  },

	  currentCentroidXOfTouchesChangedAfter: function currentCentroidXOfTouchesChangedAfter(touchHistory, touchesChangedAfter) {
	    return TouchHistoryMath.centroidDimension(touchHistory, touchesChangedAfter, true, // isXAxis
	    true // ofCurrent
	    );
	  },

	  currentCentroidYOfTouchesChangedAfter: function currentCentroidYOfTouchesChangedAfter(touchHistory, touchesChangedAfter) {
	    return TouchHistoryMath.centroidDimension(touchHistory, touchesChangedAfter, false, // isXAxis
	    true // ofCurrent
	    );
	  },

	  previousCentroidXOfTouchesChangedAfter: function previousCentroidXOfTouchesChangedAfter(touchHistory, touchesChangedAfter) {
	    return TouchHistoryMath.centroidDimension(touchHistory, touchesChangedAfter, true, // isXAxis
	    false // ofCurrent
	    );
	  },

	  previousCentroidYOfTouchesChangedAfter: function previousCentroidYOfTouchesChangedAfter(touchHistory, touchesChangedAfter) {
	    return TouchHistoryMath.centroidDimension(touchHistory, touchesChangedAfter, false, // isXAxis
	    false // ofCurrent
	    );
	  },

	  currentCentroidX: function currentCentroidX(touchHistory) {
	    return TouchHistoryMath.centroidDimension(touchHistory, 0, // touchesChangedAfter
	    true, // isXAxis
	    true // ofCurrent
	    );
	  },

	  currentCentroidY: function currentCentroidY(touchHistory) {
	    return TouchHistoryMath.centroidDimension(touchHistory, 0, // touchesChangedAfter
	    false, // isXAxis
	    true // ofCurrent
	    );
	  },

	  noCentroid: -1
	};

		exports.default = TouchHistoryMath;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ResponderEventPlugin
	 */

	'use strict';

	// var EventConstants = require('./EventConstants');

	exports.__esModule = true;

	var _EventPluginUtils = __webpack_require__(20);

	var _EventPluginUtils2 = _interopRequireDefault(_EventPluginUtils);

	var _EventPropagators = __webpack_require__(46);

	var _EventPropagators2 = _interopRequireDefault(_EventPropagators);

	var _ResponderSyntheticEvent = __webpack_require__(86);

	var _ResponderSyntheticEvent2 = _interopRequireDefault(_ResponderSyntheticEvent);

	var _ResponderTouchHistoryStore = __webpack_require__(87);

	var _ResponderTouchHistoryStore2 = _interopRequireDefault(_ResponderTouchHistoryStore);

	var _accumulate = __webpack_require__(88);

	var _accumulate2 = _interopRequireDefault(_accumulate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isStartish = _EventPluginUtils2.default.isStartish;
	var isMoveish = _EventPluginUtils2.default.isMoveish;
	var isEndish = _EventPluginUtils2.default.isEndish;
	var executeDirectDispatch = _EventPluginUtils2.default.executeDirectDispatch;
	var hasDispatches = _EventPluginUtils2.default.hasDispatches;
	var executeDispatchesInOrderStopAtTrue = _EventPluginUtils2.default.executeDispatchesInOrderStopAtTrue;

	/**
	 * Instance of element that should respond to touch/move types of interactions,
	 * as indicated explicitly by relevant callbacks.
	 */
	var responderInst = null;

	/**
	 * Count of current touches. A textInput should become responder iff the
	 * selection changes while there is a touch on the screen.
	 */
	var trackedTouchCount = 0;

	/**
	 * Last reported number of active touches.
	 */
	var previousActiveTouches = 0;

	var changeResponder = function changeResponder(nextResponderInst, blockHostResponder) {
	    var oldResponderInst = responderInst;
	    responderInst = nextResponderInst;
	    if (ResponderEventPlugin.GlobalResponderHandler !== null) {
	        ResponderEventPlugin.GlobalResponderHandler.onChange(oldResponderInst, nextResponderInst, blockHostResponder);
	    }
	};

	var eventTypes = {
	    /**
	     * On a `touchStart`/`mouseDown`, is it desired that this element become the
	     * responder?
	     */
	    startShouldSetResponder: {
	        phasedRegistrationNames: {
	            bubbled: 'onStartShouldSetResponder',
	            captured: 'onStartShouldSetResponderCapture'
	        }
	    },

	    /**
	     * On a `scroll`, is it desired that this element become the responder? This
	     * is usually not needed, but should be used to retroactively infer that a
	     * `touchStart` had occurred during momentum scroll. During a momentum scroll,
	     * a touch start will be immediately followed by a scroll event if the view is
	     * currently scrolling.
	     *
	     * TODO: This shouldn't bubble.
	     */
	    scrollShouldSetResponder: {
	        phasedRegistrationNames: {
	            bubbled: 'onScrollShouldSetResponder',
	            captured: 'onScrollShouldSetResponderCapture'
	        }
	    },

	    /**
	     * On text selection change, should this element become the responder? This
	     * is needed for text inputs or other views with native selection, so the
	     * JS view can claim the responder.
	     *
	     * TODO: This shouldn't bubble.
	     */
	    selectionChangeShouldSetResponder: {
	        phasedRegistrationNames: {
	            bubbled: 'onSelectionChangeShouldSetResponder',
	            captured: 'onSelectionChangeShouldSetResponderCapture'
	        }
	    },

	    /**
	     * On a `touchMove`/`mouseMove`, is it desired that this element become the
	     * responder?
	     */
	    moveShouldSetResponder: {
	        phasedRegistrationNames: {
	            bubbled: 'onMoveShouldSetResponder',
	            captured: 'onMoveShouldSetResponderCapture'
	        }
	    },

	    /**
	     * Direct responder events dispatched directly to responder. Do not bubble.
	     */
	    responderStart: { registrationName: 'onResponderStart' },
	    responderMove: { registrationName: 'onResponderMove' },
	    responderEnd: { registrationName: 'onResponderEnd' },
	    responderRelease: { registrationName: 'onResponderRelease' },
	    responderTerminationRequest: {
	        registrationName: 'onResponderTerminationRequest'
	    },
	    responderGrant: { registrationName: 'onResponderGrant' },
	    responderReject: { registrationName: 'onResponderReject' },
	    responderTerminate: { registrationName: 'onResponderTerminate' }
	};

	/**
	 *
	 * Responder System:
	 * ----------------
	 *
	 * - A global, solitary "interaction lock" on a view.
	 * - If a node becomes the responder, it should convey visual feedback
	 *   immediately to indicate so, either by highlighting or moving accordingly.
	 * - To be the responder means, that touches are exclusively important to that
	 *   responder view, and no other view.
	 * - While touches are still occurring, the responder lock can be transferred to
	 *   a new view, but only to increasingly "higher" views (meaning ancestors of
	 *   the current responder).
	 *
	 * Responder being granted:
	 * ------------------------
	 *
	 * - Touch starts, moves, and scrolls can cause an ID to become the responder.
	 * - We capture/bubble `startShouldSetResponder`/`moveShouldSetResponder` to
	 *   the "appropriate place".
	 * - If nothing is currently the responder, the "appropriate place" is the
	 *   initiating event's `targetID`.
	 * - If something *is* already the responder, the "appropriate place" is the
	 *   first common ancestor of the event target and the current `responderInst`.
	 * - Some negotiation happens: See the timing diagram below.
	 * - Scrolled views automatically become responder. The reasoning is that a
	 *   platform scroll view that isn't built on top of the responder system has
	 *   began scrolling, and the active responder must now be notified that the
	 *   interaction is no longer locked to it - the system has taken over.
	 *
	 * - Responder being released:
	 *   As soon as no more touches that *started* inside of descendants of the
	 *   *current* responderInst, an `onResponderRelease` event is dispatched to the
	 *   current responder, and the responder lock is released.
	 *
	 * TODO:
	 * - on "end", a callback hook for `onResponderEndShouldRemainResponder` that
	 *   determines if the responder lock should remain.
	 * - If a view shouldn't "remain" the responder, any active touches should by
	 *   default be considered "dead" and do not influence future negotiations or
	 *   bubble paths. It should be as if those touches do not exist.
	 * -- For multitouch: Usually a translate-z will choose to "remain" responder
	 *  after one out of many touches ended. For translate-y, usually the view
	 *  doesn't wish to "remain" responder after one of many touches end.
	 * - Consider building this on top of a `stopPropagation` model similar to
	 *   `W3C` events.
	 * - Ensure that `onResponderTerminate` is called on touch cancels, whether or
	 *   not `onResponderTerminationRequest` returns `true` or `false`.
	 *
	 */

	/*                                             Negotiation Performed
	                                             +-----------------------+
	                                            /                         \
	Process low level events to    +     Current Responder      +   wantsResponderID
	determine who to perform negot-|   (if any exists at all)   |
	iation/transition              | Otherwise just pass through|
	-------------------------------+----------------------------+------------------+
	Bubble to find first ID        |                            |
	to return true:wantsResponderID|                            |
	                               |                            |
	     +-------------+           |                            |
	     | onTouchStart|           |                            |
	     +------+------+     none  |                            |
	            |            return|                            |
	+-----------v-------------+true| +------------------------+ |
	|onStartShouldSetResponder|----->|onResponderStart (cur)  |<-----------+
	+-----------+-------------+    | +------------------------+ |          |
	            |                  |                            | +--------+-------+
	            | returned true for|       false:REJECT +-------->|onResponderReject
	            | wantsResponderID |                    |       | +----------------+
	            | (now attempt     | +------------------+-----+ |
	            |  handoff)        | |   onResponder          | |
	            +------------------->|      TerminationRequest| |
	                               | +------------------+-----+ |
	                               |                    |       | +----------------+
	                               |         true:GRANT +-------->|onResponderGrant|
	                               |                            | +--------+-------+
	                               | +------------------------+ |          |
	                               | |   onResponderTerminate |<-----------+
	                               | +------------------+-----+ |
	                               |                    |       | +----------------+
	                               |                    +-------->|onResponderStart|
	                               |                            | +----------------+
	Bubble to find first ID        |                            |
	to return true:wantsResponderID|                            |
	                               |                            |
	     +-------------+           |                            |
	     | onTouchMove |           |                            |
	     +------+------+     none  |                            |
	            |            return|                            |
	+-----------v-------------+true| +------------------------+ |
	|onMoveShouldSetResponder |----->|onResponderMove (cur)   |<-----------+
	+-----------+-------------+    | +------------------------+ |          |
	            |                  |                            | +--------+-------+
	            | returned true for|       false:REJECT +-------->|onResponderRejec|
	            | wantsResponderID |                    |       | +----------------+
	            | (now attempt     | +------------------+-----+ |
	            |  handoff)        | |   onResponder          | |
	            +------------------->|      TerminationRequest| |
	                               | +------------------+-----+ |
	                               |                    |       | +----------------+
	                               |         true:GRANT +-------->|onResponderGrant|
	                               |                            | +--------+-------+
	                               | +------------------------+ |          |
	                               | |   onResponderTerminate |<-----------+
	                               | +------------------+-----+ |
	                               |                    |       | +----------------+
	                               |                    +-------->|onResponderMove |
	                               |                            | +----------------+
	                               |                            |
	                               |                            |
	      Some active touch started|                            |
	      inside current responder | +------------------------+ |
	      +------------------------->|      onResponderEnd    | |
	      |                        | +------------------------+ |
	  +---+---------+              |                            |
	  | onTouchEnd  |              |                            |
	  +---+---------+              |                            |
	      |                        | +------------------------+ |
	      +------------------------->|     onResponderEnd     | |
	      No active touches started| +-----------+------------+ |
	      inside current responder |             |              |
	                               |             v              |
	                               | +------------------------+ |
	                               | |    onResponderRelease  | |
	                               | +------------------------+ |
	                               |                            |
	                               +                            + */

	/**
	 * A note about event ordering in the `EventPluginHub`.
	 *
	 * Suppose plugins are injected in the following order:
	 *
	 * `[R, S, C]`
	 *
	 * To help illustrate the example, assume `S` is `SimpleEventPlugin` (for
	 * `onClick` etc) and `R` is `ResponderEventPlugin`.
	 *
	 * "Deferred-Dispatched Events":
	 *
	 * - The current event plugin system will traverse the list of injected plugins,
	 *   in order, and extract events by collecting the plugin's return value of
	 *   `extractEvents()`.
	 * - These events that are returned from `extractEvents` are "deferred
	 *   dispatched events".
	 * - When returned from `extractEvents`, deferred-dispatched events contain an
	 *   "accumulation" of deferred dispatches.
	 * - These deferred dispatches are accumulated/collected before they are
	 *   returned, but processed at a later time by the `EventPluginHub` (hence the
	 *   name deferred).
	 *
	 * In the process of returning their deferred-dispatched events, event plugins
	 * themselves can dispatch events on-demand without returning them from
	 * `extractEvents`. Plugins might want to do this, so that they can use event
	 * dispatching as a tool that helps them decide which events should be extracted
	 * in the first place.
	 *
	 * "On-Demand-Dispatched Events":
	 *
	 * - On-demand-dispatched events are not returned from `extractEvents`.
	 * - On-demand-dispatched events are dispatched during the process of returning
	 *   the deferred-dispatched events.
	 * - They should not have side effects.
	 * - They should be avoided, and/or eventually be replaced with another
	 *   abstraction that allows event plugins to perform multiple "rounds" of event
	 *   extraction.
	 *
	 * Therefore, the sequence of event dispatches becomes:
	 *
	 * - `R`s on-demand events (if any)   (dispatched by `R` on-demand)
	 * - `S`s on-demand events (if any)   (dispatched by `S` on-demand)
	 * - `C`s on-demand events (if any)   (dispatched by `C` on-demand)
	 * - `R`s extracted events (if any)   (dispatched by `EventPluginHub`)
	 * - `S`s extracted events (if any)   (dispatched by `EventPluginHub`)
	 * - `C`s extracted events (if any)   (dispatched by `EventPluginHub`)
	 *
	 * In the case of `ResponderEventPlugin`: If the `startShouldSetResponder`
	 * on-demand dispatch returns `true` (and some other details are satisfied) the
	 * `onResponderGrant` deferred dispatched event is returned from
	 * `extractEvents`. The sequence of dispatch executions in this case
	 * will appear as follows:
	 *
	 * - `startShouldSetResponder` (`ResponderEventPlugin` dispatches on-demand)
	 * - `touchStartCapture`       (`EventPluginHub` dispatches as usual)
	 * - `touchStart`              (`EventPluginHub` dispatches as usual)
	 * - `responderGrant/Reject`   (`EventPluginHub` dispatches as usual)
	 */

	function setResponderAndExtractTransfer(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
	    var shouldSetEventType = isStartish(topLevelType) ? eventTypes.startShouldSetResponder : isMoveish(topLevelType) ? eventTypes.moveShouldSetResponder : topLevelType === 'topSelectionChange' ? eventTypes.selectionChangeShouldSetResponder : eventTypes.scrollShouldSetResponder;

	    // TODO: stop one short of the current responder.
	    var bubbleShouldSetFrom = !responderInst ? targetInst : _EventPluginUtils2.default.getLowestCommonAncestor(responderInst, targetInst);

	    // When capturing/bubbling the "shouldSet" event, we want to skip the target
	    // (deepest ID) if it happens to be the current responder. The reasoning:
	    // It's strange to get an `onMoveShouldSetResponder` when you're *already*
	    // the responder.
	    var skipOverBubbleShouldSetFrom = bubbleShouldSetFrom === responderInst;
	    var shouldSetEvent = _ResponderSyntheticEvent2.default.getPooled(shouldSetEventType, bubbleShouldSetFrom, nativeEvent, nativeEventTarget);
	    shouldSetEvent.touchHistory = _ResponderTouchHistoryStore2.default.touchHistory;
	    if (skipOverBubbleShouldSetFrom) {
	        _EventPropagators2.default.accumulateTwoPhaseDispatchesSkipTarget(shouldSetEvent);
	    } else {
	        _EventPropagators2.default.accumulateTwoPhaseDispatches(shouldSetEvent);
	    }
	    var wantsResponderInst = executeDispatchesInOrderStopAtTrue(shouldSetEvent);
	    if (!shouldSetEvent.isPersistent()) {
	        shouldSetEvent.constructor.release(shouldSetEvent);
	    }

	    if (!wantsResponderInst || wantsResponderInst === responderInst) {
	        return null;
	    }
	    var extracted;
	    var grantEvent = _ResponderSyntheticEvent2.default.getPooled(eventTypes.responderGrant, wantsResponderInst, nativeEvent, nativeEventTarget);
	    grantEvent.touchHistory = _ResponderTouchHistoryStore2.default.touchHistory;

	    _EventPropagators2.default.accumulateDirectDispatches(grantEvent);
	    var blockHostResponder = executeDirectDispatch(grantEvent) === true;
	    if (responderInst) {

	        var terminationRequestEvent = _ResponderSyntheticEvent2.default.getPooled(eventTypes.responderTerminationRequest, responderInst, nativeEvent, nativeEventTarget);
	        terminationRequestEvent.touchHistory = _ResponderTouchHistoryStore2.default.touchHistory;
	        _EventPropagators2.default.accumulateDirectDispatches(terminationRequestEvent);
	        var shouldSwitch = !hasDispatches(terminationRequestEvent) || executeDirectDispatch(terminationRequestEvent);
	        if (!terminationRequestEvent.isPersistent()) {
	            terminationRequestEvent.constructor.release(terminationRequestEvent);
	        }

	        if (shouldSwitch) {
	            var terminateEvent = _ResponderSyntheticEvent2.default.getPooled(eventTypes.responderTerminate, responderInst, nativeEvent, nativeEventTarget);
	            terminateEvent.touchHistory = _ResponderTouchHistoryStore2.default.touchHistory;
	            _EventPropagators2.default.accumulateDirectDispatches(terminateEvent);
	            extracted = (0, _accumulate2.default)(extracted, [grantEvent, terminateEvent]);
	            changeResponder(wantsResponderInst, blockHostResponder);
	        } else {
	            var rejectEvent = _ResponderSyntheticEvent2.default.getPooled(eventTypes.responderReject, wantsResponderInst, nativeEvent, nativeEventTarget);
	            rejectEvent.touchHistory = _ResponderTouchHistoryStore2.default.touchHistory;
	            _EventPropagators2.default.accumulateDirectDispatches(rejectEvent);
	            extracted = (0, _accumulate2.default)(extracted, rejectEvent);
	        }
	    } else {
	        extracted = (0, _accumulate2.default)(extracted, grantEvent);
	        changeResponder(wantsResponderInst, blockHostResponder);
	    }
	    return extracted;
	}

	/**
	 * A transfer is a negotiation between a currently set responder and the next
	 * element to claim responder status. Any start event could trigger a transfer
	 * of responderInst. Any move event could trigger a transfer.
	 *
	 * @param {string} topLevelType Record from `EventConstants`.
	 * @return {boolean} True if a transfer of responder could possibly occur.
	 */
	function canTriggerTransfer(topLevelType, topLevelInst, nativeEvent) {
	    return topLevelInst && (
	    // responderIgnoreScroll: We are trying to migrate away from specifically
	    // tracking native scroll events here and responderIgnoreScroll indicates we
	    // will send topTouchCancel to handle canceling touch events instead
	    topLevelType === 'topScroll' && !nativeEvent.responderIgnoreScroll || trackedTouchCount > 0 && topLevelType === 'topSelectionChange' || isStartish(topLevelType) || isMoveish(topLevelType));
	}

	/**
	 * Returns whether or not this touch end event makes it such that there are no
	 * longer any touches that started inside of the current `responderInst`.
	 *
	 * @param {NativeEvent} nativeEvent Native touch end event.
	 * @return {boolean} Whether or not this touch end event ends the responder.
	 */
	function noResponderTouches(nativeEvent) {
	    var touches = nativeEvent.touches;
	    if (!touches || touches.length === 0) {
	        return true;
	    }
	    for (var i = 0; i < touches.length; i++) {
	        var activeTouch = touches[i];
	        var target = activeTouch.target;
	        if (target !== null && target !== undefined && target !== 0) {
	            // Is the original touch location inside of the current responder?
	            var targetInst = _EventPluginUtils2.default.getInstanceFromNode(target);
	            if (_EventPluginUtils2.default.isAncestor(responderInst, targetInst)) {
	                return false;
	            }
	        }
	    }
	    return true;
	}

	var ResponderEventPlugin = {

	    /* For unit testing only */
	    _getResponderID: function _getResponderID() {
	        return responderInst ? responderInst._rootNodeID : null;
	    },

	    eventTypes: eventTypes,

	    /**
	     * We must be resilient to `targetInst` being `null` on `touchMove` or
	     * `touchEnd`. On certain platforms, this means that a native scroll has
	     * assumed control and the original touch targets are destroyed.
	     */
	    extractEvents: function extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
	        if (isStartish(topLevelType)) {
	            trackedTouchCount += 1;
	        } else if (isEndish(topLevelType)) {
	            if (trackedTouchCount >= 0) {
	                trackedTouchCount -= 1;
	            } else {
	                console.error('Ended a touch event which was not counted in `trackedTouchCount`.');
	                return null;
	            }
	        }

	        _ResponderTouchHistoryStore2.default.recordTouchTrack(topLevelType, nativeEvent);

	        var extracted = canTriggerTransfer(topLevelType, targetInst, nativeEvent) ? setResponderAndExtractTransfer(topLevelType, targetInst, nativeEvent, nativeEventTarget) : null;
	        // Responder may or may not have transferred on a new touch start/move.
	        // Regardless, whoever is the responder after any potential transfer, we
	        // direct all touch start/move/ends to them in the form of
	        // `onResponderMove/Start/End`. These will be called for *every* additional
	        // finger that move/start/end, dispatched directly to whoever is the
	        // current responder at that moment, until the responder is "released".
	        //
	        // These multiple individual change touch events are are always bookended
	        // by `onResponderGrant`, and one of
	        // (`onResponderRelease/onResponderTerminate`).
	        var isResponderTouchStart = responderInst && isStartish(topLevelType);
	        var isResponderTouchMove = responderInst && isMoveish(topLevelType);
	        var isResponderTouchEnd = responderInst && isEndish(topLevelType);
	        var incrementalTouch = isResponderTouchStart ? eventTypes.responderStart : isResponderTouchMove ? eventTypes.responderMove : isResponderTouchEnd ? eventTypes.responderEnd : null;

	        if (incrementalTouch) {
	            var gesture = _ResponderSyntheticEvent2.default.getPooled(incrementalTouch, responderInst, nativeEvent, nativeEventTarget);
	            gesture.touchHistory = _ResponderTouchHistoryStore2.default.touchHistory;
	            _EventPropagators2.default.accumulateDirectDispatches(gesture);
	            extracted = (0, _accumulate2.default)(extracted, gesture);
	        }

	        var isResponderTerminate = responderInst && topLevelType === 'topTouchCancel';
	        var isResponderRelease = responderInst && !isResponderTerminate && isEndish(topLevelType) && noResponderTouches(nativeEvent);
	        var finalTouch = isResponderTerminate ? eventTypes.responderTerminate : isResponderRelease ? eventTypes.responderRelease : null;
	        if (finalTouch) {
	            var finalEvent = _ResponderSyntheticEvent2.default.getPooled(finalTouch, responderInst, nativeEvent, nativeEventTarget);
	            finalEvent.touchHistory = _ResponderTouchHistoryStore2.default.touchHistory;
	            _EventPropagators2.default.accumulateDirectDispatches(finalEvent);
	            extracted = (0, _accumulate2.default)(extracted, finalEvent);
	            changeResponder(null);
	        }

	        var numberActiveTouches = _ResponderTouchHistoryStore2.default.touchHistory.numberActiveTouches;
	        if (ResponderEventPlugin.GlobalInteractionHandler && numberActiveTouches !== previousActiveTouches) {
	            ResponderEventPlugin.GlobalInteractionHandler.onChange(numberActiveTouches);
	        }
	        previousActiveTouches = numberActiveTouches;

	        return extracted;
	    },

	    GlobalResponderHandler: null,
	    GlobalInteractionHandler: null,

	    injection: {
	        /**
	         * @param {{onChange: (ReactID, ReactID) => void} GlobalResponderHandler
	         * Object that handles any change in responder. Use this to inject
	         * integration with an existing touch handling system etc.
	         */
	        injectGlobalResponderHandler: function injectGlobalResponderHandler(GlobalResponderHandler) {
	            ResponderEventPlugin.GlobalResponderHandler = GlobalResponderHandler;
	        },

	        /**
	         * @param {{onChange: (numberActiveTouches) => void} GlobalInteractionHandler
	         * Object that handles any change in the number of active touches.
	         */
	        injectGlobalInteractionHandler: function injectGlobalInteractionHandler(GlobalInteractionHandler) {
	            ResponderEventPlugin.GlobalInteractionHandler = GlobalInteractionHandler;
	        }
	    }
	};

		exports.default = ResponderEventPlugin;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ResponderSyntheticEvent
	 */

	'use strict';

	exports.__esModule = true;

	var _SyntheticEvent = __webpack_require__(48);

	var _SyntheticEvent2 = _interopRequireDefault(_SyntheticEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * `touchHistory` isn't actually on the native event, but putting it in the
	 * interface will ensure that it is cleaned up when pooled/destroyed. The
	 * `ResponderEventPlugin` will populate it appropriately.
	 */
	var ResponderEventInterface = {
	  touchHistory: function touchHistory(nativeEvent) {
	    return null; // Actually doesn't even look at the native event.
	  }
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native event.
	 * @extends {SyntheticEvent}
	 */
	function ResponderSyntheticEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  return _SyntheticEvent2.default.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	_SyntheticEvent2.default.augmentClass(ResponderSyntheticEvent, ResponderEventInterface);

	exports.default = ResponderSyntheticEvent;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ResponderTouchHistoryStore
	 * 
	 */

	'use strict';

	exports.__esModule = true;

	var _reactProdInvariant = __webpack_require__(17);

	var _reactProdInvariant2 = _interopRequireDefault(_reactProdInvariant);

	var _EventPluginUtils = __webpack_require__(20);

	var _EventPluginUtils2 = _interopRequireDefault(_EventPluginUtils);

	var _invariant = __webpack_require__(15);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _warning = __webpack_require__(22);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isEndish = _EventPluginUtils2.default.isEndish;
	var isMoveish = _EventPluginUtils2.default.isMoveish;
	var isStartish = _EventPluginUtils2.default.isStartish;

	/**
	 * Tracks the position and time of each active touch by `touch.identifier`. We
	 * should typically only see IDs in the range of 1-20 because IDs get recycled
	 * when touches end and start again.
	 */

	var MAX_TOUCH_BANK = 20;
	var touchBank = [];
	var touchHistory = {
	  touchBank: touchBank,
	  numberActiveTouches: 0,
	  // If there is only one active touch, we remember its location. This prevents
	  // us having to loop through all of the touches all the time in the most
	  // common case.
	  indexOfSingleActiveTouch: -1,
	  mostRecentTimeStamp: 0
	};

	function timestampForTouch(touch) {
	  // The legacy internal implementation provides "timeStamp", which has been
	  // renamed to "timestamp". Let both work for now while we iron it out
	  // TODO (evv): rename timeStamp to timestamp in internal code
	  return touch.timeStamp || touch.timestamp;
	}

	/**
	 * TODO: Instead of making gestures recompute filtered velocity, we could
	 * include a built in velocity computation that can be reused globally.
	 */
	function createTouchRecord(touch) {
	  return {
	    touchActive: true,
	    startPageX: touch.pageX,
	    startPageY: touch.pageY,
	    startTimeStamp: timestampForTouch(touch),
	    currentPageX: touch.pageX,
	    currentPageY: touch.pageY,
	    currentTimeStamp: timestampForTouch(touch),
	    previousPageX: touch.pageX,
	    previousPageY: touch.pageY,
	    previousTimeStamp: timestampForTouch(touch)
	  };
	}

	function resetTouchRecord(touchRecord, touch) {
	  touchRecord.touchActive = true;
	  touchRecord.startPageX = touch.pageX;
	  touchRecord.startPageY = touch.pageY;
	  touchRecord.startTimeStamp = timestampForTouch(touch);
	  touchRecord.currentPageX = touch.pageX;
	  touchRecord.currentPageY = touch.pageY;
	  touchRecord.currentTimeStamp = timestampForTouch(touch);
	  touchRecord.previousPageX = touch.pageX;
	  touchRecord.previousPageY = touch.pageY;
	  touchRecord.previousTimeStamp = timestampForTouch(touch);
	}

	function getTouchIdentifier(_ref) {
	  var identifier = _ref.identifier;

	  !(identifier != null) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Touch object is missing identifier.') : (0, _reactProdInvariant2.default)('138') : void 0;
	  process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(identifier <= MAX_TOUCH_BANK, 'Touch identifier %s is greater than maximum supported %s which causes ' + 'performance issues backfilling array locations for all of the indices.', identifier, MAX_TOUCH_BANK) : void 0;
	  return identifier;
	}

	function recordTouchStart(touch) {
	  var identifier = getTouchIdentifier(touch);
	  var touchRecord = touchBank[identifier];
	  if (touchRecord) {
	    resetTouchRecord(touchRecord, touch);
	  } else {
	    touchBank[identifier] = createTouchRecord(touch);
	  }
	  touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
	}

	function recordTouchMove(touch) {
	  var touchRecord = touchBank[getTouchIdentifier(touch)];
	  if (touchRecord) {
	    touchRecord.touchActive = true;
	    touchRecord.previousPageX = touchRecord.currentPageX;
	    touchRecord.previousPageY = touchRecord.currentPageY;
	    touchRecord.previousTimeStamp = touchRecord.currentTimeStamp;
	    touchRecord.currentPageX = touch.pageX;
	    touchRecord.currentPageY = touch.pageY;
	    touchRecord.currentTimeStamp = timestampForTouch(touch);
	    touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
	  } else {
	    console.error('Cannot record touch move without a touch start.\n' + 'Touch Move: %s\n', 'Touch Bank: %s', printTouch(touch), printTouchBank());
	  }
	}

	function recordTouchEnd(touch) {
	  var touchRecord = touchBank[getTouchIdentifier(touch)];
	  if (touchRecord) {
	    touchRecord.touchActive = false;
	    touchRecord.previousPageX = touchRecord.currentPageX;
	    touchRecord.previousPageY = touchRecord.currentPageY;
	    touchRecord.previousTimeStamp = touchRecord.currentTimeStamp;
	    touchRecord.currentPageX = touch.pageX;
	    touchRecord.currentPageY = touch.pageY;
	    touchRecord.currentTimeStamp = timestampForTouch(touch);
	    touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
	  } else {
	    console.error('Cannot record touch end without a touch start.\n' + 'Touch End: %s\n', 'Touch Bank: %s', printTouch(touch), printTouchBank());
	  }
	}

	function printTouch(touch) {
	  return JSON.stringify({
	    identifier: touch.identifier,
	    pageX: touch.pageX,
	    pageY: touch.pageY,
	    timestamp: timestampForTouch(touch)
	  });
	}

	function printTouchBank() {
	  var printed = JSON.stringify(touchBank.slice(0, MAX_TOUCH_BANK));
	  if (touchBank.length > MAX_TOUCH_BANK) {
	    printed += ' (original size: ' + touchBank.length + ')';
	  }
	  return printed;
	}

	var ResponderTouchHistoryStore = {
	  recordTouchTrack: function recordTouchTrack(topLevelType, nativeEvent) {
	    if (isMoveish(topLevelType)) {
	      nativeEvent.changedTouches.forEach(recordTouchMove);
	    } else if (isStartish(topLevelType)) {
	      nativeEvent.changedTouches.forEach(recordTouchStart);
	      touchHistory.numberActiveTouches = nativeEvent.touches.length;
	      if (touchHistory.numberActiveTouches === 1) {
	        touchHistory.indexOfSingleActiveTouch = nativeEvent.touches[0].identifier;
	      }
	    } else if (isEndish(topLevelType)) {
	      nativeEvent.changedTouches.forEach(recordTouchEnd);
	      touchHistory.numberActiveTouches = nativeEvent.touches.length;
	      if (touchHistory.numberActiveTouches === 1) {
	        for (var i = 0; i < touchBank.length; i++) {
	          var touchTrackToCheck = touchBank[i];
	          if (touchTrackToCheck != null && touchTrackToCheck.touchActive) {
	            touchHistory.indexOfSingleActiveTouch = i;
	            break;
	          }
	        }
	        if (process.env.NODE_ENV !== 'production') {
	          var activeRecord = touchBank[touchHistory.indexOfSingleActiveTouch];
	          process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(activeRecord != null && activeRecord.touchActive, 'Cannot find single active touch.') : void 0;
	        }
	      }
	    }
	  },

	  touchHistory: touchHistory
	};

		exports.default = ResponderTouchHistoryStore;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 88 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	/**
	 * Accumulates items that must not be null or undefined.
	 *
	 * This is used to conserve memory by avoiding array allocations.
	 *
	 * @return {*|array<*>} An accumulation of items.
	 */
	function accumulate(current, next) {

	    if (current == null) {
	        return next;
	    }

	    // Both are not empty. Warning: Never call x.concat(y) when you are not
	    // certain that x is an Array (x could be a string with concat method).
	    if (Array.isArray(current)) {
	        return current.concat(next);
	    }

	    if (Array.isArray(next)) {
	        return [current].concat(next);
	    }

	    return [current, next];
	}

	exports.default = accumulate;

/***/ },
/* 89 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	/**
	 * CSS Property Operations
	 */

	/**
	 * CSS properties which accept numbers but are not in units of "px".
	 */
	var isUnitlessNumber = {
	    animationIterationCount: 1,
	    borderImageOutset: 1,
	    borderImageSlice: 1,
	    borderImageWidth: 1,
	    boxFlex: 1,
	    boxFlexGroup: 1,
	    boxOrdinalGroup: 1,
	    columnCount: 1,
	    flex: 1,
	    flexGrow: 1,
	    flexPositive: 1,
	    flexShrink: 1,
	    flexNegative: 1,
	    flexOrder: 1,
	    gridRow: 1,
	    gridColumn: 1,
	    fontWeight: 1,
	    lineClamp: 1,
	    lineHeight: 1,
	    opacity: 1,
	    order: 1,
	    orphans: 1,
	    tabSize: 1,
	    widows: 1,
	    zIndex: 1,
	    zoom: 1,

	    // SVG-related properties
	    fillOpacity: 1,
	    floodOpacity: 1,
	    stopOpacity: 1,
	    strokeDasharray: 1,
	    strokeDashoffset: 1,
	    strokeMiterlimit: 1,
	    strokeOpacity: 1,
	    strokeWidth: 1
	};

	function prefixKey(prefix, key) {
	    return prefix + key.charAt(0).toUpperCase() + key.substring(1);
	}
	var prefixes = ['Webkit', 'ms', 'Moz', 'O'];
	Object.keys(isUnitlessNumber).forEach(function (prop) {
	    prefixes.forEach(function (prefix) {
	        isUnitlessNumber[prefixKey(prefix, prop)] = 1;
	    });
	});

	var RE_NUMBER = /^-?\d+(\.\d+)?$/,
	    rnweb = {
	    hasFixed: 1,
	    useFlexbox: 1
	};
	exports.default = {
	    // this is for react web
	    setValueForStyles: function setValueForStyles(node, styles, component) {
	        var style = node.style;
	        for (var styleName in styles) {
	            if (styleName in rnweb) continue;
	            var styleValue = styles[styleName];
	            if (styleValue == null || typeof styleValue === 'boolean') {
	                styleValue = '';
	            } else if (!isUnitlessNumber[styleName] && RE_NUMBER.test(styleValue)) {
	                styleValue = styleValue + 'px';
	            }
	            if (styleName === 'float') styleName = 'cssFloat';
	            style[styleName] = styleValue;
	        }
	    }
		};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _EventConstants = __webpack_require__(13);

	var _EventConstants2 = _interopRequireDefault(_EventConstants);

	var _EventPluginRegistry = __webpack_require__(16);

	var _EventPluginRegistry2 = _interopRequireDefault(_EventPluginRegistry);

	var _ResponderEventPlugin = __webpack_require__(85);

	var _ResponderEventPlugin2 = _interopRequireDefault(_ResponderEventPlugin);

	var _ResponderTouchHistoryStore = __webpack_require__(87);

	var _ResponderTouchHistoryStore2 = _interopRequireDefault(_ResponderTouchHistoryStore);

	var _normalizeNativeEvent = __webpack_require__(91);

	var _normalizeNativeEvent2 = _interopRequireDefault(_normalizeNativeEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _EventConstants$topLe = _EventConstants2.default.topLevelTypes,
	    topMouseMove = _EventConstants$topLe.topMouseMove,
	    topScroll = _EventConstants$topLe.topScroll,
	    topSelectionChange = _EventConstants$topLe.topSelectionChange,
	    topTouchCancel = _EventConstants$topLe.topTouchCancel,
	    topTouchEnd = _EventConstants$topLe.topTouchEnd,
	    topTouchMove = _EventConstants$topLe.topTouchMove,
	    topTouchStart = _EventConstants$topLe.topTouchStart;


	var endDependencies = [topTouchCancel, topTouchEnd];
	var moveDependencies = [topTouchMove];
	var startDependencies = [topTouchStart];

	/**
	 * Setup ResponderEventPlugin dependencies
	 */
	_ResponderEventPlugin2.default.eventTypes.responderMove.dependencies = moveDependencies;
	_ResponderEventPlugin2.default.eventTypes.responderEnd.dependencies = endDependencies;
	_ResponderEventPlugin2.default.eventTypes.responderStart.dependencies = startDependencies;
	_ResponderEventPlugin2.default.eventTypes.responderRelease.dependencies = endDependencies;
	_ResponderEventPlugin2.default.eventTypes.responderTerminationRequest.dependencies = [];
	_ResponderEventPlugin2.default.eventTypes.responderGrant.dependencies = [];
	_ResponderEventPlugin2.default.eventTypes.responderReject.dependencies = [];
	_ResponderEventPlugin2.default.eventTypes.responderTerminate.dependencies = [];
	_ResponderEventPlugin2.default.eventTypes.moveShouldSetResponder.dependencies = moveDependencies;
	_ResponderEventPlugin2.default.eventTypes.selectionChangeShouldSetResponder.dependencies = [topSelectionChange];
	_ResponderEventPlugin2.default.eventTypes.scrollShouldSetResponder.dependencies = [topScroll];
	_ResponderEventPlugin2.default.eventTypes.startShouldSetResponder.dependencies = startDependencies;

	var originalRecordTouchTrack = _ResponderTouchHistoryStore2.default.recordTouchTrack;

	_ResponderTouchHistoryStore2.default.recordTouchTrack = function (topLevelType, nativeEvent) {
	  // Filter out mouse-move events when the mouse button is not down
	  if (topLevelType === topMouseMove && !_ResponderTouchHistoryStore2.default.touchHistory.touchBank.length) {
	    return;
	  }
	  originalRecordTouchTrack.call(_ResponderTouchHistoryStore2.default, topLevelType, (0, _normalizeNativeEvent2.default)(nativeEvent));
	};

	_EventPluginRegistry2.default.injectEventPluginsByName({
	  ResponderEventPlugin: _ResponderEventPlugin2.default
		});

/***/ },
/* 91 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	/*
	* A native event is a synthetic touch event with the following form:
	*
	*  - `nativeEvent`
	*      + `changedTouches` - Array of all touch events that have changed since the last event
	*      + `identifier` - The ID of the touch
	*      + `locationX` - The X position of the touch, relative to the element
	*      + `locationY` - The Y position of the touch, relative to the element
	*      + `pageX` - The X position of the touch, relative to the root element
	*      + `pageY` - The Y position of the touch, relative to the root element
	*      + `target` - The node id of the element receiving the touch event
	*      + `timestamp` - A time identifier for the touch, useful for velocity calculation
	*      + `touches` - Array of all current touches on the screen
	*
	* A `gestureState` object has the following:
	*
	*  - `stateID` - ID of the gestureState- persisted as long as there at least
	*     one touch on screen
	*  - `moveX` - the latest screen coordinates of the recently-moved touch
	*  - `moveY` - the latest screen coordinates of the recently-moved touch
	*  - `x0` - the screen coordinates of the responder grant
	*  - `y0` - the screen coordinates of the responder grant
	*  - `dx` - accumulated distance of the gesture since the touch started
	*  - `dy` - accumulated distance of the gesture since the touch started
	*  - `vx` - current velocity of the gesture
	*  - `vy` - current velocity of the gesture
	*  - `numberActiveTouches` - Number of touches currently on screen
	*/

	// Mobile Safari re-uses touch objects, so we copy the properties we want and normalize the identifier


	var normalizeTouches = function normalizeTouches() {
	  var touches = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  return Array.prototype.slice.call(touches).map(function (touch) {
	    var identifier = touch.identifier > 20 ? touch.identifier % 20 : touch.identifier;

	    var rect = touch.target && touch.target.getBoundingClientRect();
	    var locationX = touch.pageX - rect.left;
	    var locationY = touch.pageY - rect.top;

	    return {
	      clientX: touch.clientX,
	      clientY: touch.clientY,
	      force: touch.force,
	      locationX: locationX,
	      locationY: locationY,
	      identifier: identifier,
	      pageX: touch.pageX,
	      pageY: touch.pageY,
	      radiusX: touch.radiusX,
	      radiusY: touch.radiusY,
	      rotationAngle: touch.rotationAngle,
	      screenX: touch.screenX,
	      screenY: touch.screenY,
	      target: touch.target,
	      // normalize the timestamp
	      // https://stackoverflow.com/questions/26177087/ios-8-mobile-safari-wrong-timestamp-on-touch-events
	      timestamp: Date.now()
	    };
	  });
	};

	function normalizeTouchEvent(nativeEvent) {
	  var changedTouches = normalizeTouches(nativeEvent.changedTouches);
	  var touches = normalizeTouches(nativeEvent.touches);

	  var event = {
	    changedTouches: changedTouches,
	    type: nativeEvent.type,
	    pageX: nativeEvent.pageX,
	    pageY: nativeEvent.pageY,
	    target: nativeEvent.target,
	    // normalize the timestamp
	    // https://stackoverflow.com/questions/26177087/ios-8-mobile-safari-wrong-timestamp-on-touch-events
	    timestamp: Date.now(),
	    touches: touches
	  };

	  if (changedTouches[0]) {
	    event.identifier = changedTouches[0].identifier;
	    event.pageX = changedTouches[0].pageX;
	    event.pageY = changedTouches[0].pageY;
	    event.locationX = changedTouches[0].locationX;
	    event.locationY = changedTouches[0].locationY;
	  }

	  return event;
	}

	function normalizeMouseEvent(nativeEvent) {
	  var touches = [{
	    clientX: nativeEvent.clientX,
	    clientY: nativeEvent.clientY,
	    force: nativeEvent.force,
	    locationX: nativeEvent.clientX,
	    locationY: nativeEvent.clientY,
	    identifier: 0,
	    pageX: nativeEvent.pageX,
	    pageY: nativeEvent.pageY,
	    screenX: nativeEvent.screenX,
	    screenY: nativeEvent.screenY,
	    target: nativeEvent.target,
	    timestamp: nativeEvent.timestamp || Date.now()
	  }];
	  return {
	    type: nativeEvent.type,
	    changedTouches: touches,
	    identifier: touches[0].identifier,
	    locationX: nativeEvent.offsetX,
	    locationY: nativeEvent.offsetY,
	    pageX: nativeEvent.pageX,
	    pageY: nativeEvent.pageY,
	    target: nativeEvent.target,
	    timestamp: touches[0].timestamp,
	    touches: nativeEvent.type === 'mouseup' ? [] : touches
	  };
	}

	function normalizeNativeEvent(nativeEvent) {
	  var mouse = nativeEvent.type.indexOf('mouse') >= 0;
	  return mouse ? normalizeMouseEvent(nativeEvent) : normalizeTouchEvent(nativeEvent);
	}

	exports.default = normalizeNativeEvent;

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.createMemoryHistory = exports.hashHistory = exports.browserHistory = exports.applyRouterMiddleware = exports.formatPattern = exports.useRouterHistory = exports.match = exports.routerShape = exports.locationShape = exports.RouterContext = exports.createRoutes = exports.Route = exports.Redirect = exports.IndexRoute = exports.IndexRedirect = exports.withRouter = exports.IndexLink = exports.Link = exports.Router = undefined;

	var _RouteUtils = __webpack_require__(93);

	Object.defineProperty(exports, 'createRoutes', {
	  enumerable: true,
	  get: function get() {
	    return _RouteUtils.createRoutes;
	  }
	});

	var _PropTypes = __webpack_require__(94);

	Object.defineProperty(exports, 'locationShape', {
	  enumerable: true,
	  get: function get() {
	    return _PropTypes.locationShape;
	  }
	});
	Object.defineProperty(exports, 'routerShape', {
	  enumerable: true,
	  get: function get() {
	    return _PropTypes.routerShape;
	  }
	});

	var _PatternUtils = __webpack_require__(95);

	Object.defineProperty(exports, 'formatPattern', {
	  enumerable: true,
	  get: function get() {
	    return _PatternUtils.formatPattern;
	  }
	});

	var _Router2 = __webpack_require__(97);

	var _Router3 = _interopRequireDefault(_Router2);

	var _Link2 = __webpack_require__(113);

	var _Link3 = _interopRequireDefault(_Link2);

	var _IndexLink2 = __webpack_require__(114);

	var _IndexLink3 = _interopRequireDefault(_IndexLink2);

	var _withRouter2 = __webpack_require__(115);

	var _withRouter3 = _interopRequireDefault(_withRouter2);

	var _IndexRedirect2 = __webpack_require__(117);

	var _IndexRedirect3 = _interopRequireDefault(_IndexRedirect2);

	var _IndexRoute2 = __webpack_require__(119);

	var _IndexRoute3 = _interopRequireDefault(_IndexRoute2);

	var _Redirect2 = __webpack_require__(118);

	var _Redirect3 = _interopRequireDefault(_Redirect2);

	var _Route2 = __webpack_require__(120);

	var _Route3 = _interopRequireDefault(_Route2);

	var _RouterContext2 = __webpack_require__(109);

	var _RouterContext3 = _interopRequireDefault(_RouterContext2);

	var _match2 = __webpack_require__(121);

	var _match3 = _interopRequireDefault(_match2);

	var _useRouterHistory2 = __webpack_require__(135);

	var _useRouterHistory3 = _interopRequireDefault(_useRouterHistory2);

	var _applyRouterMiddleware2 = __webpack_require__(136);

	var _applyRouterMiddleware3 = _interopRequireDefault(_applyRouterMiddleware2);

	var _browserHistory2 = __webpack_require__(137);

	var _browserHistory3 = _interopRequireDefault(_browserHistory2);

	var _hashHistory2 = __webpack_require__(145);

	var _hashHistory3 = _interopRequireDefault(_hashHistory2);

	var _createMemoryHistory2 = __webpack_require__(123);

	var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Router = _Router3.default; /* components */

	exports.Link = _Link3.default;
	exports.IndexLink = _IndexLink3.default;
	exports.withRouter = _withRouter3.default;

	/* components (configuration) */

	exports.IndexRedirect = _IndexRedirect3.default;
	exports.IndexRoute = _IndexRoute3.default;
	exports.Redirect = _Redirect3.default;
	exports.Route = _Route3.default;

	/* utils */

	exports.RouterContext = _RouterContext3.default;
	exports.match = _match3.default;
	exports.useRouterHistory = _useRouterHistory3.default;
	exports.applyRouterMiddleware = _applyRouterMiddleware3.default;

	/* histories */

	exports.browserHistory = _browserHistory3.default;
	exports.hashHistory = _hashHistory3.default;
	exports.createMemoryHistory = _createMemoryHistory3.default;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.isReactChildren = isReactChildren;
	exports.createRouteFromReactElement = createRouteFromReactElement;
	exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
	exports.createRoutes = createRoutes;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isValidChild(object) {
	  return object == null || _react2.default.isValidElement(object);
	}

	function isReactChildren(object) {
	  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
	}

	function createRoute(defaultProps, props) {
	  return _extends({}, defaultProps, props);
	}

	function createRouteFromReactElement(element) {
	  var type = element.type;
	  var route = createRoute(type.defaultProps, element.props);

	  if (route.children) {
	    var childRoutes = createRoutesFromReactChildren(route.children, route);

	    if (childRoutes.length) route.childRoutes = childRoutes;

	    delete route.children;
	  }

	  return route;
	}

	/**
	 * Creates and returns a routes object from the given ReactChildren. JSX
	 * provides a convenient way to visualize how routes in the hierarchy are
	 * nested.
	 *
	 *   import { Route, createRoutesFromReactChildren } from 'react-router'
	 *
	 *   const routes = createRoutesFromReactChildren(
	 *     <Route component={App}>
	 *       <Route path="home" component={Dashboard}/>
	 *       <Route path="news" component={NewsFeed}/>
	 *     </Route>
	 *   )
	 *
	 * Note: This method is automatically used when you provide <Route> children
	 * to a <Router> component.
	 */
	function createRoutesFromReactChildren(children, parentRoute) {
	  var routes = [];

	  _react2.default.Children.forEach(children, function (element) {
	    if (_react2.default.isValidElement(element)) {
	      // Component classes may have a static create* method.
	      if (element.type.createRouteFromReactElement) {
	        var route = element.type.createRouteFromReactElement(element, parentRoute);

	        if (route) routes.push(route);
	      } else {
	        routes.push(createRouteFromReactElement(element));
	      }
	    }
	  });

	  return routes;
	}

	/**
	 * Creates and returns an array of routes from the given object which
	 * may be a JSX route, a plain object route, or an array of either.
	 */
	function createRoutes(routes) {
	  if (isReactChildren(routes)) {
	    routes = createRoutesFromReactChildren(routes);
	  } else if (routes && !Array.isArray(routes)) {
	    routes = [routes];
	  }

	  return routes;
	}

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.locationShape = exports.routerShape = undefined;

	var _react = __webpack_require__(1);

	var func = _react.PropTypes.func,
	    object = _react.PropTypes.object,
	    shape = _react.PropTypes.shape,
	    string = _react.PropTypes.string;
	var routerShape = exports.routerShape = shape({
	  push: func.isRequired,
	  replace: func.isRequired,
	  go: func.isRequired,
	  goBack: func.isRequired,
	  goForward: func.isRequired,
	  setRouteLeaveHook: func.isRequired,
	  isActive: func.isRequired
	});

	var locationShape = exports.locationShape = shape({
	  pathname: string.isRequired,
	  search: string.isRequired,
	  state: object,
	  action: string.isRequired,
	  key: string
	});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.compilePattern = compilePattern;
	exports.matchPattern = matchPattern;
	exports.getParamNames = getParamNames;
	exports.getParams = getParams;
	exports.formatPattern = formatPattern;

	var _invariant = __webpack_require__(96);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function escapeRegExp(string) {
	  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}

	function _compilePattern(pattern) {
	  var regexpSource = '';
	  var paramNames = [];
	  var tokens = [];

	  var match = void 0,
	      lastIndex = 0,
	      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)|\\\(|\\\)/g;
	  while (match = matcher.exec(pattern)) {
	    if (match.index !== lastIndex) {
	      tokens.push(pattern.slice(lastIndex, match.index));
	      regexpSource += escapeRegExp(pattern.slice(lastIndex, match.index));
	    }

	    if (match[1]) {
	      regexpSource += '([^/]+)';
	      paramNames.push(match[1]);
	    } else if (match[0] === '**') {
	      regexpSource += '(.*)';
	      paramNames.push('splat');
	    } else if (match[0] === '*') {
	      regexpSource += '(.*?)';
	      paramNames.push('splat');
	    } else if (match[0] === '(') {
	      regexpSource += '(?:';
	    } else if (match[0] === ')') {
	      regexpSource += ')?';
	    } else if (match[0] === '\\(') {
	      regexpSource += '\\(';
	    } else if (match[0] === '\\)') {
	      regexpSource += '\\)';
	    }

	    tokens.push(match[0]);

	    lastIndex = matcher.lastIndex;
	  }

	  if (lastIndex !== pattern.length) {
	    tokens.push(pattern.slice(lastIndex, pattern.length));
	    regexpSource += escapeRegExp(pattern.slice(lastIndex, pattern.length));
	  }

	  return {
	    pattern: pattern,
	    regexpSource: regexpSource,
	    paramNames: paramNames,
	    tokens: tokens
	  };
	}

	var CompiledPatternsCache = Object.create(null);

	function compilePattern(pattern) {
	  if (!CompiledPatternsCache[pattern]) CompiledPatternsCache[pattern] = _compilePattern(pattern);

	  return CompiledPatternsCache[pattern];
	}

	/**
	 * Attempts to match a pattern on the given pathname. Patterns may use
	 * the following special characters:
	 *
	 * - :paramName     Matches a URL segment up to the next /, ?, or #. The
	 *                  captured string is considered a "param"
	 * - ()             Wraps a segment of the URL that is optional
	 * - *              Consumes (non-greedy) all characters up to the next
	 *                  character in the pattern, or to the end of the URL if
	 *                  there is none
	 * - **             Consumes (greedy) all characters up to the next character
	 *                  in the pattern, or to the end of the URL if there is none
	 *
	 *  The function calls callback(error, matched) when finished.
	 * The return value is an object with the following properties:
	 *
	 * - remainingPathname
	 * - paramNames
	 * - paramValues
	 */
	function matchPattern(pattern, pathname) {
	  // Ensure pattern starts with leading slash for consistency with pathname.
	  if (pattern.charAt(0) !== '/') {
	    pattern = '/' + pattern;
	  }

	  var _compilePattern2 = compilePattern(pattern),
	      regexpSource = _compilePattern2.regexpSource,
	      paramNames = _compilePattern2.paramNames,
	      tokens = _compilePattern2.tokens;

	  if (pattern.charAt(pattern.length - 1) !== '/') {
	    regexpSource += '/?'; // Allow optional path separator at end.
	  }

	  // Special-case patterns like '*' for catch-all routes.
	  if (tokens[tokens.length - 1] === '*') {
	    regexpSource += '$';
	  }

	  var match = pathname.match(new RegExp('^' + regexpSource, 'i'));
	  if (match == null) {
	    return null;
	  }

	  var matchedPath = match[0];
	  var remainingPathname = pathname.substr(matchedPath.length);

	  if (remainingPathname) {
	    // Require that the match ends at a path separator, if we didn't match
	    // the full path, so any remaining pathname is a new path segment.
	    if (matchedPath.charAt(matchedPath.length - 1) !== '/') {
	      return null;
	    }

	    // If there is a remaining pathname, treat the path separator as part of
	    // the remaining pathname for properly continuing the match.
	    remainingPathname = '/' + remainingPathname;
	  }

	  return {
	    remainingPathname: remainingPathname,
	    paramNames: paramNames,
	    paramValues: match.slice(1).map(function (v) {
	      return v && decodeURIComponent(v);
	    })
	  };
	}

	function getParamNames(pattern) {
	  return compilePattern(pattern).paramNames;
	}

	function getParams(pattern, pathname) {
	  var match = matchPattern(pattern, pathname);
	  if (!match) {
	    return null;
	  }

	  var paramNames = match.paramNames,
	      paramValues = match.paramValues;

	  var params = {};

	  paramNames.forEach(function (paramName, index) {
	    params[paramName] = paramValues[index];
	  });

	  return params;
	}

	/**
	 * Returns a version of the given pattern with params interpolated. Throws
	 * if there is a dynamic segment of the pattern for which there is no param.
	 */
	function formatPattern(pattern, params) {
	  params = params || {};

	  var _compilePattern3 = compilePattern(pattern),
	      tokens = _compilePattern3.tokens;

	  var parenCount = 0,
	      pathname = '',
	      splatIndex = 0,
	      parenHistory = [];

	  var token = void 0,
	      paramName = void 0,
	      paramValue = void 0;
	  for (var i = 0, len = tokens.length; i < len; ++i) {
	    token = tokens[i];

	    if (token === '*' || token === '**') {
	      paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;

	      !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Missing splat #%s for path "%s"', splatIndex, pattern) : (0, _invariant2.default)(false) : void 0;

	      if (paramValue != null) pathname += encodeURI(paramValue);
	    } else if (token === '(') {
	      parenHistory[parenCount] = '';
	      parenCount += 1;
	    } else if (token === ')') {
	      var parenText = parenHistory.pop();
	      parenCount -= 1;

	      if (parenCount) parenHistory[parenCount - 1] += parenText;else pathname += parenText;
	    } else if (token === '\\(') {
	      pathname += '(';
	    } else if (token === '\\)') {
	      pathname += ')';
	    } else if (token.charAt(0) === ':') {
	      paramName = token.substring(1);
	      paramValue = params[paramName];

	      !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Missing "%s" parameter for path "%s"', paramName, pattern) : (0, _invariant2.default)(false) : void 0;

	      if (paramValue == null) {
	        if (parenCount) {
	          parenHistory[parenCount - 1] = '';

	          var curTokenIdx = tokens.indexOf(token);
	          var tokensSubset = tokens.slice(curTokenIdx, tokens.length);
	          var nextParenIdx = -1;

	          for (var _i = 0; _i < tokensSubset.length; _i++) {
	            if (tokensSubset[_i] == ')') {
	              nextParenIdx = _i;
	              break;
	            }
	          }

	          !(nextParenIdx > 0) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Path "%s" is missing end paren at segment "%s"', pattern, tokensSubset.join('')) : (0, _invariant2.default)(false) : void 0;

	          // jump to ending paren
	          i = curTokenIdx + nextParenIdx - 1;
	        }
	      } else if (parenCount) parenHistory[parenCount - 1] += encodeURIComponent(paramValue);else pathname += encodeURIComponent(paramValue);
	    } else {
	      if (parenCount) parenHistory[parenCount - 1] += token;else pathname += token;
	    }
	  }

	  !(parenCount <= 0) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Path "%s" is missing end paren', pattern) : (0, _invariant2.default)(false) : void 0;

	  return pathname.replace(/\/+/g, '/');
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _invariant = __webpack_require__(96);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _createTransitionManager2 = __webpack_require__(98);

	var _createTransitionManager3 = _interopRequireDefault(_createTransitionManager2);

	var _InternalPropTypes = __webpack_require__(108);

	var _RouterContext = __webpack_require__(109);

	var _RouterContext2 = _interopRequireDefault(_RouterContext);

	var _RouteUtils = __webpack_require__(93);

	var _RouterUtils = __webpack_require__(112);

	var _routerWarning = __webpack_require__(99);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _React$PropTypes = _react2.default.PropTypes,
	    func = _React$PropTypes.func,
	    object = _React$PropTypes.object;

	/**
	 * A <Router> is a high-level API for automatically setting up
	 * a router that renders a <RouterContext> with all the props
	 * it needs each time the URL changes.
	 */

	var Router = _react2.default.createClass({
	  displayName: 'Router',


	  propTypes: {
	    history: object,
	    children: _InternalPropTypes.routes,
	    routes: _InternalPropTypes.routes, // alias for children
	    render: func,
	    createElement: func,
	    onError: func,
	    onUpdate: func,

	    // PRIVATE: For client-side rehydration of server match.
	    matchContext: object
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      render: function render(props) {
	        return _react2.default.createElement(_RouterContext2.default, props);
	      }
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      location: null,
	      routes: null,
	      params: null,
	      components: null
	    };
	  },
	  handleError: function handleError(error) {
	    if (this.props.onError) {
	      this.props.onError.call(this, error);
	    } else {
	      // Throw errors by default so we don't silently swallow them!
	      throw error; // This error probably occurred in getChildRoutes or getComponents.
	    }
	  },
	  createRouterObject: function createRouterObject(state) {
	    var matchContext = this.props.matchContext;

	    if (matchContext) {
	      return matchContext.router;
	    }

	    var history = this.props.history;

	    return (0, _RouterUtils.createRouterObject)(history, this.transitionManager, state);
	  },
	  createTransitionManager: function createTransitionManager() {
	    var matchContext = this.props.matchContext;

	    if (matchContext) {
	      return matchContext.transitionManager;
	    }

	    var history = this.props.history;
	    var _props = this.props,
	        routes = _props.routes,
	        children = _props.children;


	    !history.getCurrentLocation ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'You have provided a history object created with history v4.x or v2.x ' + 'and earlier. This version of React Router is only compatible with v3 ' + 'history objects. Please change to history v3.x.') : (0, _invariant2.default)(false) : void 0;

	    return (0, _createTransitionManager3.default)(history, (0, _RouteUtils.createRoutes)(routes || children));
	  },
	  componentWillMount: function componentWillMount() {
	    var _this = this;

	    this.transitionManager = this.createTransitionManager();
	    this.router = this.createRouterObject(this.state);

	    this._unlisten = this.transitionManager.listen(function (error, state) {
	      if (error) {
	        _this.handleError(error);
	      } else {
	        // Keep the identity of this.router because of a caveat in ContextUtils:
	        // they only work if the object identity is preserved.
	        (0, _RouterUtils.assignRouterState)(_this.router, state);
	        _this.setState(state, _this.props.onUpdate);
	      }
	    });
	  },


	  /* istanbul ignore next: sanity check */
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(nextProps.history === this.props.history, 'You cannot change <Router history>; it will be ignored') : void 0;

	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)((nextProps.routes || nextProps.children) === (this.props.routes || this.props.children), 'You cannot change <Router routes>; it will be ignored') : void 0;
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (this._unlisten) this._unlisten();
	  },
	  render: function render() {
	    var _state = this.state,
	        location = _state.location,
	        routes = _state.routes,
	        params = _state.params,
	        components = _state.components;

	    var _props2 = this.props,
	        createElement = _props2.createElement,
	        render = _props2.render,
	        props = _objectWithoutProperties(_props2, ['createElement', 'render']);

	    if (location == null) return null; // Async match

	    // Only forward non-Router-specific props to routing context, as those are
	    // the only ones that might be custom routing context props.
	    Object.keys(Router.propTypes).forEach(function (propType) {
	      return delete props[propType];
	    });

	    return render(_extends({}, props, {
	      router: this.router,
	      location: location,
	      routes: routes,
	      params: params,
	      components: components,
	      createElement: createElement
	    }));
	  }
	});

	exports.default = Router;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = createTransitionManager;

	var _routerWarning = __webpack_require__(99);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _computeChangedRoutes2 = __webpack_require__(101);

	var _computeChangedRoutes3 = _interopRequireDefault(_computeChangedRoutes2);

	var _TransitionUtils = __webpack_require__(102);

	var _isActive2 = __webpack_require__(104);

	var _isActive3 = _interopRequireDefault(_isActive2);

	var _getComponents = __webpack_require__(105);

	var _getComponents2 = _interopRequireDefault(_getComponents);

	var _matchRoutes = __webpack_require__(107);

	var _matchRoutes2 = _interopRequireDefault(_matchRoutes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function hasAnyProperties(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p)) return true;
	  }return false;
	}

	function createTransitionManager(history, routes) {
	  var state = {};

	  // Signature should be (location, indexOnly), but needs to support (path,
	  // query, indexOnly)
	  function isActive(location, indexOnly) {
	    location = history.createLocation(location);

	    return (0, _isActive3.default)(location, indexOnly, state.location, state.routes, state.params);
	  }

	  var partialNextState = void 0;

	  function match(location, callback) {
	    if (partialNextState && partialNextState.location === location) {
	      // Continue from where we left off.
	      finishMatch(partialNextState, callback);
	    } else {
	      (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
	        if (error) {
	          callback(error);
	        } else if (nextState) {
	          finishMatch(_extends({}, nextState, { location: location }), callback);
	        } else {
	          callback();
	        }
	      });
	    }
	  }

	  function finishMatch(nextState, callback) {
	    var _computeChangedRoutes = (0, _computeChangedRoutes3.default)(state, nextState),
	        leaveRoutes = _computeChangedRoutes.leaveRoutes,
	        changeRoutes = _computeChangedRoutes.changeRoutes,
	        enterRoutes = _computeChangedRoutes.enterRoutes;

	    (0, _TransitionUtils.runLeaveHooks)(leaveRoutes, state);

	    // Tear down confirmation hooks for left routes
	    leaveRoutes.filter(function (route) {
	      return enterRoutes.indexOf(route) === -1;
	    }).forEach(removeListenBeforeHooksForRoute);

	    // change and enter hooks are run in series
	    (0, _TransitionUtils.runChangeHooks)(changeRoutes, state, nextState, function (error, redirectInfo) {
	      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);

	      (0, _TransitionUtils.runEnterHooks)(enterRoutes, nextState, finishEnterHooks);
	    });

	    function finishEnterHooks(error, redirectInfo) {
	      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);

	      // TODO: Fetch components after state is updated.
	      (0, _getComponents2.default)(nextState, function (error, components) {
	        if (error) {
	          callback(error);
	        } else {
	          // TODO: Make match a pure function and have some other API
	          // for "match and update state".
	          callback(null, null, state = _extends({}, nextState, { components: components }));
	        }
	      });
	    }

	    function handleErrorOrRedirect(error, redirectInfo) {
	      if (error) callback(error);else callback(null, redirectInfo);
	    }
	  }

	  var RouteGuid = 1;

	  function getRouteID(route) {
	    var create = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	    return route.__id__ || create && (route.__id__ = RouteGuid++);
	  }

	  var RouteHooks = Object.create(null);

	  function getRouteHooksForRoutes(routes) {
	    return routes.map(function (route) {
	      return RouteHooks[getRouteID(route)];
	    }).filter(function (hook) {
	      return hook;
	    });
	  }

	  function transitionHook(location, callback) {
	    (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
	      if (nextState == null) {
	        // TODO: We didn't actually match anything, but hang
	        // onto error/nextState so we don't have to matchRoutes
	        // again in the listen callback.
	        callback();
	        return;
	      }

	      // Cache some state here so we don't have to
	      // matchRoutes() again in the listen callback.
	      partialNextState = _extends({}, nextState, { location: location });

	      var hooks = getRouteHooksForRoutes((0, _computeChangedRoutes3.default)(state, partialNextState).leaveRoutes);

	      var result = void 0;
	      for (var i = 0, len = hooks.length; result == null && i < len; ++i) {
	        // Passing the location arg here indicates to
	        // the user that this is a transition hook.
	        result = hooks[i](location);
	      }

	      callback(result);
	    });
	  }

	  /* istanbul ignore next: untestable with Karma */
	  function beforeUnloadHook() {
	    // Synchronously check to see if any route hooks want
	    // to prevent the current window/tab from closing.
	    if (state.routes) {
	      var hooks = getRouteHooksForRoutes(state.routes);

	      var message = void 0;
	      for (var i = 0, len = hooks.length; typeof message !== 'string' && i < len; ++i) {
	        // Passing no args indicates to the user that this is a
	        // beforeunload hook. We don't know the next location.
	        message = hooks[i]();
	      }

	      return message;
	    }
	  }

	  var unlistenBefore = void 0,
	      unlistenBeforeUnload = void 0;

	  function removeListenBeforeHooksForRoute(route) {
	    var routeID = getRouteID(route);
	    if (!routeID) {
	      return;
	    }

	    delete RouteHooks[routeID];

	    if (!hasAnyProperties(RouteHooks)) {
	      // teardown transition & beforeunload hooks
	      if (unlistenBefore) {
	        unlistenBefore();
	        unlistenBefore = null;
	      }

	      if (unlistenBeforeUnload) {
	        unlistenBeforeUnload();
	        unlistenBeforeUnload = null;
	      }
	    }
	  }

	  /**
	   * Registers the given hook function to run before leaving the given route.
	   *
	   * During a normal transition, the hook function receives the next location
	   * as its only argument and can return either a prompt message (string) to show the user,
	   * to make sure they want to leave the page; or `false`, to prevent the transition.
	   * Any other return value will have no effect.
	   *
	   * During the beforeunload event (in browsers) the hook receives no arguments.
	   * In this case it must return a prompt message to prevent the transition.
	   *
	   * Returns a function that may be used to unbind the listener.
	   */
	  function listenBeforeLeavingRoute(route, hook) {
	    var thereWereNoRouteHooks = !hasAnyProperties(RouteHooks);
	    var routeID = getRouteID(route, true);

	    RouteHooks[routeID] = hook;

	    if (thereWereNoRouteHooks) {
	      // setup transition & beforeunload hooks
	      unlistenBefore = history.listenBefore(transitionHook);

	      if (history.listenBeforeUnload) unlistenBeforeUnload = history.listenBeforeUnload(beforeUnloadHook);
	    }

	    return function () {
	      removeListenBeforeHooksForRoute(route);
	    };
	  }

	  /**
	   * This is the API for stateful environments. As the location
	   * changes, we update state and call the listener. We can also
	   * gracefully handle errors and redirects.
	   */
	  function listen(listener) {
	    function historyListener(location) {
	      if (state.location === location) {
	        listener(null, state);
	      } else {
	        match(location, function (error, redirectLocation, nextState) {
	          if (error) {
	            listener(error);
	          } else if (redirectLocation) {
	            history.replace(redirectLocation);
	          } else if (nextState) {
	            listener(null, nextState);
	          } else {
	            process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'Location "%s" did not match any routes', location.pathname + location.search + location.hash) : void 0;
	          }
	        });
	      }
	    }

	    // TODO: Only use a single history listener. Otherwise we'll end up with
	    // multiple concurrent calls to match.

	    // Set up the history listener first in case the initial match redirects.
	    var unsubscribe = history.listen(historyListener);

	    if (state.location) {
	      // Picking up on a matchContext.
	      listener(null, state);
	    } else {
	      historyListener(history.getCurrentLocation());
	    }

	    return unsubscribe;
	  }

	  return {
	    isActive: isActive,
	    match: match,
	    listenBeforeLeavingRoute: listenBeforeLeavingRoute,
	    listen: listen
	  };
	}
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = routerWarning;
	exports._resetWarned = _resetWarned;

	var _warning = __webpack_require__(100);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var warned = {};

	function routerWarning(falseToWarn, message) {
	  // Only issue deprecation warnings once.
	  if (message.indexOf('deprecated') !== -1) {
	    if (warned[message]) {
	      return;
	    }

	    warned[message] = true;
	  }

	  message = '[react-router] ' + message;

	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }

	  _warning2.default.apply(undefined, [falseToWarn, message].concat(args));
	}

	function _resetWarned() {
	  warned = {};
	}

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(95);

	function routeParamsChanged(route, prevState, nextState) {
	  if (!route.path) return false;

	  var paramNames = (0, _PatternUtils.getParamNames)(route.path);

	  return paramNames.some(function (paramName) {
	    return prevState.params[paramName] !== nextState.params[paramName];
	  });
	}

	/**
	 * Returns an object of { leaveRoutes, changeRoutes, enterRoutes } determined by
	 * the change from prevState to nextState. We leave routes if either
	 * 1) they are not in the next state or 2) they are in the next state
	 * but their params have changed (i.e. /users/123 => /users/456).
	 *
	 * leaveRoutes are ordered starting at the leaf route of the tree
	 * we're leaving up to the common parent route. enterRoutes are ordered
	 * from the top of the tree we're entering down to the leaf route.
	 *
	 * changeRoutes are any routes that didn't leave or enter during
	 * the transition.
	 */
	function computeChangedRoutes(prevState, nextState) {
	  var prevRoutes = prevState && prevState.routes;
	  var nextRoutes = nextState.routes;

	  var leaveRoutes = void 0,
	      changeRoutes = void 0,
	      enterRoutes = void 0;
	  if (prevRoutes) {
	    (function () {
	      var parentIsLeaving = false;
	      leaveRoutes = prevRoutes.filter(function (route) {
	        if (parentIsLeaving) {
	          return true;
	        } else {
	          var isLeaving = nextRoutes.indexOf(route) === -1 || routeParamsChanged(route, prevState, nextState);
	          if (isLeaving) parentIsLeaving = true;
	          return isLeaving;
	        }
	      });

	      // onLeave hooks start at the leaf route.
	      leaveRoutes.reverse();

	      enterRoutes = [];
	      changeRoutes = [];

	      nextRoutes.forEach(function (route) {
	        var isNew = prevRoutes.indexOf(route) === -1;
	        var paramsChanged = leaveRoutes.indexOf(route) !== -1;

	        if (isNew || paramsChanged) enterRoutes.push(route);else changeRoutes.push(route);
	      });
	    })();
	  } else {
	    leaveRoutes = [];
	    changeRoutes = [];
	    enterRoutes = nextRoutes;
	  }

	  return {
	    leaveRoutes: leaveRoutes,
	    changeRoutes: changeRoutes,
	    enterRoutes: enterRoutes
	  };
	}

	exports.default = computeChangedRoutes;
	module.exports = exports['default'];

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.runEnterHooks = runEnterHooks;
	exports.runChangeHooks = runChangeHooks;
	exports.runLeaveHooks = runLeaveHooks;

	var _AsyncUtils = __webpack_require__(103);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PendingHooks = function PendingHooks() {
	  var _this = this;

	  _classCallCheck(this, PendingHooks);

	  this.hooks = [];

	  this.add = function (hook) {
	    return _this.hooks.push(hook);
	  };

	  this.remove = function (hook) {
	    return _this.hooks = _this.hooks.filter(function (h) {
	      return h !== hook;
	    });
	  };

	  this.has = function (hook) {
	    return _this.hooks.indexOf(hook) !== -1;
	  };

	  this.clear = function () {
	    return _this.hooks = [];
	  };
	};

	var enterHooks = new PendingHooks();
	var changeHooks = new PendingHooks();

	function createTransitionHook(hook, route, asyncArity, pendingHooks) {
	  var isSync = hook.length < asyncArity;

	  var transitionHook = function transitionHook() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    hook.apply(route, args);

	    if (isSync) {
	      var callback = args[args.length - 1];
	      // Assume hook executes synchronously and
	      // automatically call the callback.
	      callback();
	    }
	  };

	  pendingHooks.add(transitionHook);

	  return transitionHook;
	}

	function getEnterHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onEnter) hooks.push(createTransitionHook(route.onEnter, route, 3, enterHooks));
	    return hooks;
	  }, []);
	}

	function getChangeHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onChange) hooks.push(createTransitionHook(route.onChange, route, 4, changeHooks));
	    return hooks;
	  }, []);
	}

	function runTransitionHooks(length, iter, callback) {
	  if (!length) {
	    callback();
	    return;
	  }

	  var redirectInfo = void 0;
	  function replace(location) {
	    redirectInfo = location;
	  }

	  (0, _AsyncUtils.loopAsync)(length, function (index, next, done) {
	    iter(index, replace, function (error) {
	      if (error || redirectInfo) {
	        done(error, redirectInfo); // No need to continue.
	      } else {
	        next();
	      }
	    });
	  }, callback);
	}

	/**
	 * Runs all onEnter hooks in the given array of routes in order
	 * with onEnter(nextState, replace, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replace short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */
	function runEnterHooks(routes, nextState, callback) {
	  enterHooks.clear();
	  var hooks = getEnterHooks(routes);
	  return runTransitionHooks(hooks.length, function (index, replace, next) {
	    var wrappedNext = function wrappedNext() {
	      if (enterHooks.has(hooks[index])) {
	        next.apply(undefined, arguments);
	        enterHooks.remove(hooks[index]);
	      }
	    };
	    hooks[index](nextState, replace, wrappedNext);
	  }, callback);
	}

	/**
	 * Runs all onChange hooks in the given array of routes in order
	 * with onChange(prevState, nextState, replace, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replace short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */
	function runChangeHooks(routes, state, nextState, callback) {
	  changeHooks.clear();
	  var hooks = getChangeHooks(routes);
	  return runTransitionHooks(hooks.length, function (index, replace, next) {
	    var wrappedNext = function wrappedNext() {
	      if (changeHooks.has(hooks[index])) {
	        next.apply(undefined, arguments);
	        changeHooks.remove(hooks[index]);
	      }
	    };
	    hooks[index](state, nextState, replace, wrappedNext);
	  }, callback);
	}

	/**
	 * Runs all onLeave hooks in the given array of routes in order.
	 */
	function runLeaveHooks(routes, prevState) {
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    if (routes[i].onLeave) routes[i].onLeave.call(routes[i], prevState);
	  }
	}

/***/ },
/* 103 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.loopAsync = loopAsync;
	exports.mapAsync = mapAsync;
	function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;
	  var sync = false,
	      hasNext = false,
	      doneArgs = void 0;

	  function done() {
	    isDone = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      doneArgs = [].concat(Array.prototype.slice.call(arguments));
	      return;
	    }

	    callback.apply(this, arguments);
	  }

	  function next() {
	    if (isDone) {
	      return;
	    }

	    hasNext = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      return;
	    }

	    sync = true;

	    while (!isDone && currentTurn < turns && hasNext) {
	      hasNext = false;
	      work.call(this, currentTurn++, next, done);
	    }

	    sync = false;

	    if (isDone) {
	      // This means the loop finished synchronously.
	      callback.apply(this, doneArgs);
	      return;
	    }

	    if (currentTurn >= turns && hasNext) {
	      isDone = true;
	      callback();
	    }
	  }

	  next();
	}

	function mapAsync(array, work, callback) {
	  var length = array.length;
	  var values = [];

	  if (length === 0) return callback(null, values);

	  var isDone = false,
	      doneCount = 0;

	  function done(index, error, value) {
	    if (isDone) return;

	    if (error) {
	      isDone = true;
	      callback(error);
	    } else {
	      values[index] = value;

	      isDone = ++doneCount === length;

	      if (isDone) callback(null, values);
	    }
	  }

	  array.forEach(function (item, index) {
	    work(item, index, function (error, value) {
	      done(index, error, value);
	    });
	  });
	}

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = isActive;

	var _PatternUtils = __webpack_require__(95);

	function deepEqual(a, b) {
	  if (a == b) return true;

	  if (a == null || b == null) return false;

	  if (Array.isArray(a)) {
	    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
	      return deepEqual(item, b[index]);
	    });
	  }

	  if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') {
	    for (var p in a) {
	      if (!Object.prototype.hasOwnProperty.call(a, p)) {
	        continue;
	      }

	      if (a[p] === undefined) {
	        if (b[p] !== undefined) {
	          return false;
	        }
	      } else if (!Object.prototype.hasOwnProperty.call(b, p)) {
	        return false;
	      } else if (!deepEqual(a[p], b[p])) {
	        return false;
	      }
	    }

	    return true;
	  }

	  return String(a) === String(b);
	}

	/**
	 * Returns true if the current pathname matches the supplied one, net of
	 * leading and trailing slash normalization. This is sufficient for an
	 * indexOnly route match.
	 */
	function pathIsActive(pathname, currentPathname) {
	  // Normalize leading slash for consistency. Leading slash on pathname has
	  // already been normalized in isActive. See caveat there.
	  if (currentPathname.charAt(0) !== '/') {
	    currentPathname = '/' + currentPathname;
	  }

	  // Normalize the end of both path names too. Maybe `/foo/` shouldn't show
	  // `/foo` as active, but in this case, we would already have failed the
	  // match.
	  if (pathname.charAt(pathname.length - 1) !== '/') {
	    pathname += '/';
	  }
	  if (currentPathname.charAt(currentPathname.length - 1) !== '/') {
	    currentPathname += '/';
	  }

	  return currentPathname === pathname;
	}

	/**
	 * Returns true if the given pathname matches the active routes and params.
	 */
	function routeIsActive(pathname, routes, params) {
	  var remainingPathname = pathname,
	      paramNames = [],
	      paramValues = [];

	  // for...of would work here but it's probably slower post-transpilation.
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    var route = routes[i];
	    var pattern = route.path || '';

	    if (pattern.charAt(0) === '/') {
	      remainingPathname = pathname;
	      paramNames = [];
	      paramValues = [];
	    }

	    if (remainingPathname !== null && pattern) {
	      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
	      if (matched) {
	        remainingPathname = matched.remainingPathname;
	        paramNames = [].concat(paramNames, matched.paramNames);
	        paramValues = [].concat(paramValues, matched.paramValues);
	      } else {
	        remainingPathname = null;
	      }

	      if (remainingPathname === '') {
	        // We have an exact match on the route. Just check that all the params
	        // match.
	        // FIXME: This doesn't work on repeated params.
	        return paramNames.every(function (paramName, index) {
	          return String(paramValues[index]) === String(params[paramName]);
	        });
	      }
	    }
	  }

	  return false;
	}

	/**
	 * Returns true if all key/value pairs in the given query are
	 * currently active.
	 */
	function queryIsActive(query, activeQuery) {
	  if (activeQuery == null) return query == null;

	  if (query == null) return true;

	  return deepEqual(query, activeQuery);
	}

	/**
	 * Returns true if a <Link> to the given pathname/query combination is
	 * currently active.
	 */
	function isActive(_ref, indexOnly, currentLocation, routes, params) {
	  var pathname = _ref.pathname,
	      query = _ref.query;

	  if (currentLocation == null) return false;

	  // TODO: This is a bit ugly. It keeps around support for treating pathnames
	  // without preceding slashes as absolute paths, but possibly also works
	  // around the same quirks with basenames as in matchRoutes.
	  if (pathname.charAt(0) !== '/') {
	    pathname = '/' + pathname;
	  }

	  if (!pathIsActive(pathname, currentLocation.pathname)) {
	    // The path check is necessary and sufficient for indexOnly, but otherwise
	    // we still need to check the routes.
	    if (indexOnly || !routeIsActive(pathname, routes, params)) {
	      return false;
	    }
	  }

	  return queryIsActive(query, currentLocation.query);
	}
	module.exports = exports['default'];

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _AsyncUtils = __webpack_require__(103);

	var _PromiseUtils = __webpack_require__(106);

	function getComponentsForRoute(nextState, route, callback) {
	  if (route.component || route.components) {
	    callback(null, route.component || route.components);
	    return;
	  }

	  var getComponent = route.getComponent || route.getComponents;
	  if (getComponent) {
	    var componentReturn = getComponent.call(route, nextState, callback);
	    if ((0, _PromiseUtils.isPromise)(componentReturn)) componentReturn.then(function (component) {
	      return callback(null, component);
	    }, callback);
	  } else {
	    callback();
	  }
	}

	/**
	 * Asynchronously fetches all components needed for the given router
	 * state and calls callback(error, components) when finished.
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getComponents method.
	 */
	function getComponents(nextState, callback) {
	  (0, _AsyncUtils.mapAsync)(nextState.routes, function (route, index, callback) {
	    getComponentsForRoute(nextState, route, callback);
	  }, callback);
	}

	exports.default = getComponents;
	module.exports = exports['default'];

/***/ },
/* 106 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.isPromise = isPromise;
	function isPromise(obj) {
	  return obj && typeof obj.then === 'function';
	}

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = matchRoutes;

	var _AsyncUtils = __webpack_require__(103);

	var _PromiseUtils = __webpack_require__(106);

	var _PatternUtils = __webpack_require__(95);

	var _routerWarning = __webpack_require__(99);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _RouteUtils = __webpack_require__(93);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getChildRoutes(route, location, paramNames, paramValues, callback) {
	  if (route.childRoutes) {
	    return [null, route.childRoutes];
	  }
	  if (!route.getChildRoutes) {
	    return [];
	  }

	  var sync = true,
	      result = void 0;

	  var partialNextState = {
	    location: location,
	    params: createParams(paramNames, paramValues)
	  };

	  var childRoutesReturn = route.getChildRoutes(partialNextState, function (error, childRoutes) {
	    childRoutes = !error && (0, _RouteUtils.createRoutes)(childRoutes);
	    if (sync) {
	      result = [error, childRoutes];
	      return;
	    }

	    callback(error, childRoutes);
	  });

	  if ((0, _PromiseUtils.isPromise)(childRoutesReturn)) childRoutesReturn.then(function (childRoutes) {
	    return callback(null, (0, _RouteUtils.createRoutes)(childRoutes));
	  }, callback);

	  sync = false;
	  return result; // Might be undefined.
	}

	function getIndexRoute(route, location, paramNames, paramValues, callback) {
	  if (route.indexRoute) {
	    callback(null, route.indexRoute);
	  } else if (route.getIndexRoute) {
	    var partialNextState = {
	      location: location,
	      params: createParams(paramNames, paramValues)
	    };

	    var indexRoutesReturn = route.getIndexRoute(partialNextState, function (error, indexRoute) {
	      callback(error, !error && (0, _RouteUtils.createRoutes)(indexRoute)[0]);
	    });

	    if ((0, _PromiseUtils.isPromise)(indexRoutesReturn)) indexRoutesReturn.then(function (indexRoute) {
	      return callback(null, (0, _RouteUtils.createRoutes)(indexRoute)[0]);
	    }, callback);
	  } else if (route.childRoutes || route.getChildRoutes) {
	    var onChildRoutes = function onChildRoutes(error, childRoutes) {
	      if (error) {
	        callback(error);
	        return;
	      }

	      var pathless = childRoutes.filter(function (childRoute) {
	        return !childRoute.path;
	      });

	      (0, _AsyncUtils.loopAsync)(pathless.length, function (index, next, done) {
	        getIndexRoute(pathless[index], location, paramNames, paramValues, function (error, indexRoute) {
	          if (error || indexRoute) {
	            var routes = [pathless[index]].concat(Array.isArray(indexRoute) ? indexRoute : [indexRoute]);
	            done(error, routes);
	          } else {
	            next();
	          }
	        });
	      }, function (err, routes) {
	        callback(null, routes);
	      });
	    };

	    var result = getChildRoutes(route, location, paramNames, paramValues, onChildRoutes);
	    if (result) {
	      onChildRoutes.apply(undefined, result);
	    }
	  } else {
	    callback();
	  }
	}

	function assignParams(params, paramNames, paramValues) {
	  return paramNames.reduce(function (params, paramName, index) {
	    var paramValue = paramValues && paramValues[index];

	    if (Array.isArray(params[paramName])) {
	      params[paramName].push(paramValue);
	    } else if (paramName in params) {
	      params[paramName] = [params[paramName], paramValue];
	    } else {
	      params[paramName] = paramValue;
	    }

	    return params;
	  }, params);
	}

	function createParams(paramNames, paramValues) {
	  return assignParams({}, paramNames, paramValues);
	}

	function matchRouteDeep(route, location, remainingPathname, paramNames, paramValues, callback) {
	  var pattern = route.path || '';

	  if (pattern.charAt(0) === '/') {
	    remainingPathname = location.pathname;
	    paramNames = [];
	    paramValues = [];
	  }

	  // Only try to match the path if the route actually has a pattern, and if
	  // we're not just searching for potential nested absolute paths.
	  if (remainingPathname !== null && pattern) {
	    try {
	      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
	      if (matched) {
	        remainingPathname = matched.remainingPathname;
	        paramNames = [].concat(paramNames, matched.paramNames);
	        paramValues = [].concat(paramValues, matched.paramValues);
	      } else {
	        remainingPathname = null;
	      }
	    } catch (error) {
	      callback(error);
	    }

	    // By assumption, pattern is non-empty here, which is the prerequisite for
	    // actually terminating a match.
	    if (remainingPathname === '') {
	      var _ret = function () {
	        var match = {
	          routes: [route],
	          params: createParams(paramNames, paramValues)
	        };

	        getIndexRoute(route, location, paramNames, paramValues, function (error, indexRoute) {
	          if (error) {
	            callback(error);
	          } else {
	            if (Array.isArray(indexRoute)) {
	              var _match$routes;

	              process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(indexRoute.every(function (route) {
	                return !route.path;
	              }), 'Index routes should not have paths') : void 0;
	              (_match$routes = match.routes).push.apply(_match$routes, indexRoute);
	            } else if (indexRoute) {
	              process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(!indexRoute.path, 'Index routes should not have paths') : void 0;
	              match.routes.push(indexRoute);
	            }

	            callback(null, match);
	          }
	        });

	        return {
	          v: void 0
	        };
	      }();

	      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	    }
	  }

	  if (remainingPathname != null || route.childRoutes) {
	    // Either a) this route matched at least some of the path or b)
	    // we don't have to load this route's children asynchronously. In
	    // either case continue checking for matches in the subtree.
	    var onChildRoutes = function onChildRoutes(error, childRoutes) {
	      if (error) {
	        callback(error);
	      } else if (childRoutes) {
	        // Check the child routes to see if any of them match.
	        matchRoutes(childRoutes, location, function (error, match) {
	          if (error) {
	            callback(error);
	          } else if (match) {
	            // A child route matched! Augment the match and pass it up the stack.
	            match.routes.unshift(route);
	            callback(null, match);
	          } else {
	            callback();
	          }
	        }, remainingPathname, paramNames, paramValues);
	      } else {
	        callback();
	      }
	    };

	    var result = getChildRoutes(route, location, paramNames, paramValues, onChildRoutes);
	    if (result) {
	      onChildRoutes.apply(undefined, result);
	    }
	  } else {
	    callback();
	  }
	}

	/**
	 * Asynchronously matches the given location to a set of routes and calls
	 * callback(error, state) when finished. The state object will have the
	 * following properties:
	 *
	 * - routes       An array of routes that matched, in hierarchical order
	 * - params       An object of URL parameters
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getChildRoutes method.
	 */
	function matchRoutes(routes, location, callback, remainingPathname) {
	  var paramNames = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
	  var paramValues = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];

	  if (remainingPathname === undefined) {
	    // TODO: This is a little bit ugly, but it works around a quirk in history
	    // that strips the leading slash from pathnames when using basenames with
	    // trailing slashes.
	    if (location.pathname.charAt(0) !== '/') {
	      location = _extends({}, location, {
	        pathname: '/' + location.pathname
	      });
	    }
	    remainingPathname = location.pathname;
	  }

	  (0, _AsyncUtils.loopAsync)(routes.length, function (index, next, done) {
	    matchRouteDeep(routes[index], location, remainingPathname, paramNames, paramValues, function (error, match) {
	      if (error || match) {
	        done(error, match);
	      } else {
	        next();
	      }
	    });
	  }, callback);
	}
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.routes = exports.route = exports.components = exports.component = exports.history = undefined;
	exports.falsy = falsy;

	var _react = __webpack_require__(1);

	var func = _react.PropTypes.func,
	    object = _react.PropTypes.object,
	    arrayOf = _react.PropTypes.arrayOf,
	    oneOfType = _react.PropTypes.oneOfType,
	    element = _react.PropTypes.element,
	    shape = _react.PropTypes.shape,
	    string = _react.PropTypes.string;
	function falsy(props, propName, componentName) {
	  if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
	}

	var history = exports.history = shape({
	  listen: func.isRequired,
	  push: func.isRequired,
	  replace: func.isRequired,
	  go: func.isRequired,
	  goBack: func.isRequired,
	  goForward: func.isRequired
	});

	var component = exports.component = oneOfType([func, string]);
	var components = exports.components = oneOfType([component, object]);
	var route = exports.route = oneOfType([object, element]);
	var routes = exports.routes = oneOfType([route, arrayOf(route)]);

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _invariant = __webpack_require__(96);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _getRouteParams = __webpack_require__(110);

	var _getRouteParams2 = _interopRequireDefault(_getRouteParams);

	var _ContextUtils = __webpack_require__(111);

	var _RouteUtils = __webpack_require__(93);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes,
	    array = _React$PropTypes.array,
	    func = _React$PropTypes.func,
	    object = _React$PropTypes.object;

	/**
	 * A <RouterContext> renders the component tree for a given router state
	 * and sets the history object and the current location in context.
	 */

	var RouterContext = _react2.default.createClass({
	  displayName: 'RouterContext',


	  mixins: [(0, _ContextUtils.ContextProvider)('router')],

	  propTypes: {
	    router: object.isRequired,
	    location: object.isRequired,
	    routes: array.isRequired,
	    params: object.isRequired,
	    components: array.isRequired,
	    createElement: func.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      createElement: _react2.default.createElement
	    };
	  },


	  childContextTypes: {
	    router: object.isRequired
	  },

	  getChildContext: function getChildContext() {
	    return {
	      router: this.props.router
	    };
	  },
	  createElement: function createElement(component, props) {
	    return component == null ? null : this.props.createElement(component, props);
	  },
	  render: function render() {
	    var _this = this;

	    var _props = this.props,
	        location = _props.location,
	        routes = _props.routes,
	        params = _props.params,
	        components = _props.components,
	        router = _props.router;

	    var element = null;

	    if (components) {
	      element = components.reduceRight(function (element, components, index) {
	        if (components == null) return element; // Don't create new children; use the grandchildren.

	        var route = routes[index];
	        var routeParams = (0, _getRouteParams2.default)(route, params);
	        var props = {
	          location: location,
	          params: params,
	          route: route,
	          router: router,
	          routeParams: routeParams,
	          routes: routes
	        };

	        if ((0, _RouteUtils.isReactChildren)(element)) {
	          props.children = element;
	        } else if (element) {
	          for (var prop in element) {
	            if (Object.prototype.hasOwnProperty.call(element, prop)) props[prop] = element[prop];
	          }
	        }

	        if ((typeof components === 'undefined' ? 'undefined' : _typeof(components)) === 'object') {
	          var elements = {};

	          for (var key in components) {
	            if (Object.prototype.hasOwnProperty.call(components, key)) {
	              // Pass through the key as a prop to createElement to allow
	              // custom createElement functions to know which named component
	              // they're rendering, for e.g. matching up to fetched data.
	              elements[key] = _this.createElement(components[key], _extends({
	                key: key }, props));
	            }
	          }

	          return elements;
	        }

	        return _this.createElement(components, props);
	      }, element);
	    }

	    !(element === null || element === false || _react2.default.isValidElement(element)) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The root route must render a single element') : (0, _invariant2.default)(false) : void 0;

	    return element;
	  }
	});

	exports.default = RouterContext;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(95);

	/**
	 * Extracts an object of params the given route cares about from
	 * the given params object.
	 */
	function getRouteParams(route, params) {
	  var routeParams = {};

	  if (!route.path) return routeParams;

	  (0, _PatternUtils.getParamNames)(route.path).forEach(function (p) {
	    if (Object.prototype.hasOwnProperty.call(params, p)) {
	      routeParams[p] = params[p];
	    }
	  });

	  return routeParams;
	}

	exports.default = getRouteParams;
	module.exports = exports['default'];

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ContextProvider = ContextProvider;
	exports.ContextSubscriber = ContextSubscriber;

	var _react = __webpack_require__(1);

	// Works around issues with context updates failing to propagate.
	// Caveat: the context value is expected to never change its identity.
	// https://github.com/facebook/react/issues/2517
	// https://github.com/reactjs/react-router/issues/470

	var contextProviderShape = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  eventIndex: _react.PropTypes.number.isRequired
	});

	function makeContextName(name) {
	  return '@@contextSubscriber/' + name;
	}

	function ContextProvider(name) {
	  var _childContextTypes, _ref2;

	  var contextName = makeContextName(name);
	  var listenersKey = contextName + '/listeners';
	  var eventIndexKey = contextName + '/eventIndex';
	  var subscribeKey = contextName + '/subscribe';

	  return _ref2 = {
	    childContextTypes: (_childContextTypes = {}, _childContextTypes[contextName] = contextProviderShape.isRequired, _childContextTypes),

	    getChildContext: function getChildContext() {
	      var _ref;

	      return _ref = {}, _ref[contextName] = {
	        eventIndex: this[eventIndexKey],
	        subscribe: this[subscribeKey]
	      }, _ref;
	    },
	    componentWillMount: function componentWillMount() {
	      this[listenersKey] = [];
	      this[eventIndexKey] = 0;
	    },
	    componentWillReceiveProps: function componentWillReceiveProps() {
	      this[eventIndexKey]++;
	    },
	    componentDidUpdate: function componentDidUpdate() {
	      var _this = this;

	      this[listenersKey].forEach(function (listener) {
	        return listener(_this[eventIndexKey]);
	      });
	    }
	  }, _ref2[subscribeKey] = function (listener) {
	    var _this2 = this;

	    // No need to immediately call listener here.
	    this[listenersKey].push(listener);

	    return function () {
	      _this2[listenersKey] = _this2[listenersKey].filter(function (item) {
	        return item !== listener;
	      });
	    };
	  }, _ref2;
	}

	function ContextSubscriber(name) {
	  var _contextTypes, _ref4;

	  var contextName = makeContextName(name);
	  var lastRenderedEventIndexKey = contextName + '/lastRenderedEventIndex';
	  var handleContextUpdateKey = contextName + '/handleContextUpdate';
	  var unsubscribeKey = contextName + '/unsubscribe';

	  return _ref4 = {
	    contextTypes: (_contextTypes = {}, _contextTypes[contextName] = contextProviderShape, _contextTypes),

	    getInitialState: function getInitialState() {
	      var _ref3;

	      if (!this.context[contextName]) {
	        return {};
	      }

	      return _ref3 = {}, _ref3[lastRenderedEventIndexKey] = this.context[contextName].eventIndex, _ref3;
	    },
	    componentDidMount: function componentDidMount() {
	      if (!this.context[contextName]) {
	        return;
	      }

	      this[unsubscribeKey] = this.context[contextName].subscribe(this[handleContextUpdateKey]);
	    },
	    componentWillReceiveProps: function componentWillReceiveProps() {
	      var _setState;

	      if (!this.context[contextName]) {
	        return;
	      }

	      this.setState((_setState = {}, _setState[lastRenderedEventIndexKey] = this.context[contextName].eventIndex, _setState));
	    },
	    componentWillUnmount: function componentWillUnmount() {
	      if (!this[unsubscribeKey]) {
	        return;
	      }

	      this[unsubscribeKey]();
	      this[unsubscribeKey] = null;
	    }
	  }, _ref4[handleContextUpdateKey] = function (eventIndex) {
	    if (eventIndex !== this.state[lastRenderedEventIndexKey]) {
	      var _setState2;

	      this.setState((_setState2 = {}, _setState2[lastRenderedEventIndexKey] = eventIndex, _setState2));
	    }
	  }, _ref4;
	}

/***/ },
/* 112 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.createRouterObject = createRouterObject;
	exports.assignRouterState = assignRouterState;
	function createRouterObject(history, transitionManager, state) {
	  var router = _extends({}, history, {
	    setRouteLeaveHook: transitionManager.listenBeforeLeavingRoute,
	    isActive: transitionManager.isActive
	  });

	  return assignRouterState(router, state);
	}

	function assignRouterState(router, _ref) {
	  var location = _ref.location,
	      params = _ref.params,
	      routes = _ref.routes;

	  router.location = location;
	  router.params = params;
	  router.routes = routes;

	  return router;
	}

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(96);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _PropTypes = __webpack_require__(94);

	var _ContextUtils = __webpack_require__(111);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _React$PropTypes = _react2.default.PropTypes,
	    bool = _React$PropTypes.bool,
	    object = _React$PropTypes.object,
	    string = _React$PropTypes.string,
	    func = _React$PropTypes.func,
	    oneOfType = _React$PropTypes.oneOfType;


	function isLeftClickEvent(event) {
	  return event.button === 0;
	}

	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}

	// TODO: De-duplicate against hasAnyProperties in createTransitionManager.
	function isEmptyObject(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p)) return false;
	  }return true;
	}

	function resolveToLocation(to, router) {
	  return typeof to === 'function' ? to(router.location) : to;
	}

	/**
	 * A <Link> is used to create an <a> element that links to a route.
	 * When that route is active, the link gets the value of its
	 * activeClassName prop.
	 *
	 * For example, assuming you have the following route:
	 *
	 *   <Route path="/posts/:postID" component={Post} />
	 *
	 * You could use the following component to link to that route:
	 *
	 *   <Link to={`/posts/${post.id}`} />
	 *
	 * Links may pass along location state and/or query string parameters
	 * in the state/query props, respectively.
	 *
	 *   <Link ... query={{ show: true }} state={{ the: 'state' }} />
	 */
	var Link = _react2.default.createClass({
	  displayName: 'Link',


	  mixins: [(0, _ContextUtils.ContextSubscriber)('router')],

	  contextTypes: {
	    router: _PropTypes.routerShape
	  },

	  propTypes: {
	    to: oneOfType([string, object, func]),
	    query: object,
	    hash: string,
	    state: object,
	    activeStyle: object,
	    activeClassName: string,
	    onlyActiveOnIndex: bool.isRequired,
	    onClick: func,
	    target: string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      onlyActiveOnIndex: false,
	      style: {}
	    };
	  },
	  handleClick: function handleClick(event) {
	    if (this.props.onClick) this.props.onClick(event);

	    if (event.defaultPrevented) return;

	    var router = this.context.router;

	    !router ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Link>s rendered outside of a router context cannot navigate.') : (0, _invariant2.default)(false) : void 0;

	    if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;

	    // If target prop is set (e.g. to "_blank"), let browser handle link.
	    /* istanbul ignore if: untestable with Karma */
	    if (this.props.target) return;

	    event.preventDefault();

	    router.push(resolveToLocation(this.props.to, router));
	  },
	  render: function render() {
	    var _props = this.props,
	        to = _props.to,
	        activeClassName = _props.activeClassName,
	        activeStyle = _props.activeStyle,
	        onlyActiveOnIndex = _props.onlyActiveOnIndex,
	        props = _objectWithoutProperties(_props, ['to', 'activeClassName', 'activeStyle', 'onlyActiveOnIndex']);

	    // Ignore if rendered outside the context of router to simplify unit testing.


	    var router = this.context.router;


	    if (router) {
	      // If user does not specify a `to` prop, return an empty anchor tag.
	      if (!to) {
	        return _react2.default.createElement('a', props);
	      }

	      var toLocation = resolveToLocation(to, router);
	      props.href = router.createHref(toLocation);

	      if (activeClassName || activeStyle != null && !isEmptyObject(activeStyle)) {
	        if (router.isActive(toLocation, onlyActiveOnIndex)) {
	          if (activeClassName) {
	            if (props.className) {
	              props.className += ' ' + activeClassName;
	            } else {
	              props.className = activeClassName;
	            }
	          }

	          if (activeStyle) props.style = _extends({}, props.style, activeStyle);
	        }
	      }
	    }

	    return _react2.default.createElement('a', _extends({}, props, { onClick: this.handleClick }));
	  }
	});

	exports.default = Link;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Link = __webpack_require__(113);

	var _Link2 = _interopRequireDefault(_Link);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * An <IndexLink> is used to link to an <IndexRoute>.
	 */
	var IndexLink = _react2.default.createClass({
	  displayName: 'IndexLink',
	  render: function render() {
	    return _react2.default.createElement(_Link2.default, _extends({}, this.props, { onlyActiveOnIndex: true }));
	  }
	});

	exports.default = IndexLink;
	module.exports = exports['default'];

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = withRouter;

	var _invariant = __webpack_require__(96);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _hoistNonReactStatics = __webpack_require__(116);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _ContextUtils = __webpack_require__(111);

	var _PropTypes = __webpack_require__(94);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	function withRouter(WrappedComponent, options) {
	  var withRef = options && options.withRef;

	  var WithRouter = _react2.default.createClass({
	    displayName: 'WithRouter',

	    mixins: [(0, _ContextUtils.ContextSubscriber)('router')],

	    contextTypes: { router: _PropTypes.routerShape },
	    propTypes: { router: _PropTypes.routerShape },

	    getWrappedInstance: function getWrappedInstance() {
	      !withRef ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'To access the wrapped instance, you need to specify ' + '`{ withRef: true }` as the second argument of the withRouter() call.') : (0, _invariant2.default)(false) : void 0;

	      return this.wrappedInstance;
	    },
	    render: function render() {
	      var _this = this;

	      var router = this.props.router || this.context.router;
	      if (!router) {
	        return _react2.default.createElement(WrappedComponent, this.props);
	      }

	      var params = router.params,
	          location = router.location,
	          routes = router.routes;

	      var props = _extends({}, this.props, { router: router, params: params, location: location, routes: routes });

	      if (withRef) {
	        props.ref = function (c) {
	          _this.wrappedInstance = c;
	        };
	      }

	      return _react2.default.createElement(WrappedComponent, props);
	    }
	  });

	  WithRouter.displayName = 'withRouter(' + getDisplayName(WrappedComponent) + ')';
	  WithRouter.WrappedComponent = WrappedComponent;

	  return (0, _hoistNonReactStatics2.default)(WithRouter, WrappedComponent);
	}
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 116 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);

	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }

	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {

	                }
	            }
	        }
	    }

	    return targetComponent;
	};


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _routerWarning = __webpack_require__(99);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _invariant = __webpack_require__(96);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Redirect = __webpack_require__(118);

	var _Redirect2 = _interopRequireDefault(_Redirect);

	var _InternalPropTypes = __webpack_require__(108);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes,
	    string = _React$PropTypes.string,
	    object = _React$PropTypes.object;

	/**
	 * An <IndexRedirect> is used to redirect from an indexRoute.
	 */
	/* eslint-disable react/require-render-return */

	var IndexRedirect = _react2.default.createClass({
	  displayName: 'IndexRedirect',


	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
	      /* istanbul ignore else: sanity check */
	      if (parentRoute) {
	        parentRoute.indexRoute = _Redirect2.default.createRouteFromReactElement(element);
	      } else {
	        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'An <IndexRedirect> does not make sense at the root of your route config') : void 0;
	      }
	    }
	  },

	  propTypes: {
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _InternalPropTypes.falsy,
	    children: _InternalPropTypes.falsy
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<IndexRedirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = IndexRedirect;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(96);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(93);

	var _PatternUtils = __webpack_require__(95);

	var _InternalPropTypes = __webpack_require__(108);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes,
	    string = _React$PropTypes.string,
	    object = _React$PropTypes.object;

	/**
	 * A <Redirect> is used to declare another URL path a client should
	 * be sent to when they request a given URL.
	 *
	 * Redirects are placed alongside routes in the route configuration
	 * and are traversed in the same manner.
	 */
	/* eslint-disable react/require-render-return */

	var Redirect = _react2.default.createClass({
	  displayName: 'Redirect',


	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element) {
	      var route = (0, _RouteUtils.createRouteFromReactElement)(element);

	      if (route.from) route.path = route.from;

	      route.onEnter = function (nextState, replace) {
	        var location = nextState.location,
	            params = nextState.params;


	        var pathname = void 0;
	        if (route.to.charAt(0) === '/') {
	          pathname = (0, _PatternUtils.formatPattern)(route.to, params);
	        } else if (!route.to) {
	          pathname = location.pathname;
	        } else {
	          var routeIndex = nextState.routes.indexOf(route);
	          var parentPattern = Redirect.getRoutePattern(nextState.routes, routeIndex - 1);
	          var pattern = parentPattern.replace(/\/*$/, '/') + route.to;
	          pathname = (0, _PatternUtils.formatPattern)(pattern, params);
	        }

	        replace({
	          pathname: pathname,
	          query: route.query || location.query,
	          state: route.state || location.state
	        });
	      };

	      return route;
	    },
	    getRoutePattern: function getRoutePattern(routes, routeIndex) {
	      var parentPattern = '';

	      for (var i = routeIndex; i >= 0; i--) {
	        var route = routes[i];
	        var pattern = route.path || '';

	        parentPattern = pattern.replace(/\/*$/, '/') + parentPattern;

	        if (pattern.indexOf('/') === 0) break;
	      }

	      return '/' + parentPattern;
	    }
	  },

	  propTypes: {
	    path: string,
	    from: string, // Alias for path
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _InternalPropTypes.falsy,
	    children: _InternalPropTypes.falsy
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Redirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = Redirect;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _routerWarning = __webpack_require__(99);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _invariant = __webpack_require__(96);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(93);

	var _InternalPropTypes = __webpack_require__(108);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var func = _react2.default.PropTypes.func;

	/**
	 * An <IndexRoute> is used to specify its parent's <Route indexRoute> in
	 * a JSX route config.
	 */
	/* eslint-disable react/require-render-return */

	var IndexRoute = _react2.default.createClass({
	  displayName: 'IndexRoute',


	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
	      /* istanbul ignore else: sanity check */
	      if (parentRoute) {
	        parentRoute.indexRoute = (0, _RouteUtils.createRouteFromReactElement)(element);
	      } else {
	        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'An <IndexRoute> does not make sense at the root of your route config') : void 0;
	      }
	    }
	  },

	  propTypes: {
	    path: _InternalPropTypes.falsy,
	    component: _InternalPropTypes.component,
	    components: _InternalPropTypes.components,
	    getComponent: func,
	    getComponents: func
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<IndexRoute> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = IndexRoute;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(96);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(93);

	var _InternalPropTypes = __webpack_require__(108);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes,
	    string = _React$PropTypes.string,
	    func = _React$PropTypes.func;

	/**
	 * A <Route> is used to declare which components are rendered to the
	 * page when the URL matches a given pattern.
	 *
	 * Routes are arranged in a nested tree structure. When a new URL is
	 * requested, the tree is searched depth-first to find a route whose
	 * path matches the URL.  When one is found, all routes in the tree
	 * that lead to it are considered "active" and their components are
	 * rendered into the DOM, nested in the same order as in the tree.
	 */
	/* eslint-disable react/require-render-return */

	var Route = _react2.default.createClass({
	  displayName: 'Route',


	  statics: {
	    createRouteFromReactElement: _RouteUtils.createRouteFromReactElement
	  },

	  propTypes: {
	    path: string,
	    component: _InternalPropTypes.component,
	    components: _InternalPropTypes.components,
	    getComponent: func,
	    getComponents: func
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Route> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = Route;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _Actions = __webpack_require__(122);

	var _invariant = __webpack_require__(96);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _createMemoryHistory = __webpack_require__(123);

	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

	var _createTransitionManager = __webpack_require__(98);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _RouteUtils = __webpack_require__(93);

	var _RouterUtils = __webpack_require__(112);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/**
	 * A high-level API to be used for server-side rendering.
	 *
	 * This function matches a location to a set of routes and calls
	 * callback(error, redirectLocation, renderProps) when finished.
	 *
	 * Note: You probably don't want to use this in a browser unless you're using
	 * server-side rendering with async routes.
	 */
	function match(_ref, callback) {
	  var history = _ref.history,
	      routes = _ref.routes,
	      location = _ref.location,
	      options = _objectWithoutProperties(_ref, ['history', 'routes', 'location']);

	  !(history || location) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'match needs a history or a location') : (0, _invariant2.default)(false) : void 0;

	  history = history ? history : (0, _createMemoryHistory2.default)(options);
	  var transitionManager = (0, _createTransitionManager2.default)(history, (0, _RouteUtils.createRoutes)(routes));

	  if (location) {
	    // Allow match({ location: '/the/path', ... })
	    location = history.createLocation(location);
	  } else {
	    location = history.getCurrentLocation();
	  }

	  transitionManager.match(location, function (error, redirectLocation, nextState) {
	    var renderProps = void 0;

	    if (nextState) {
	      var router = (0, _RouterUtils.createRouterObject)(history, transitionManager, nextState);
	      renderProps = _extends({}, nextState, {
	        router: router,
	        matchContext: { transitionManager: transitionManager, router: router }
	      });
	    }

	    callback(error, redirectLocation && history.createLocation(redirectLocation, _Actions.REPLACE), renderProps);
	  });
	}

	exports.default = match;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 122 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	/**
	 * Indicates that navigation was caused by a call to history.push.
	 */
	var PUSH = exports.PUSH = 'PUSH';

	/**
	 * Indicates that navigation was caused by a call to history.replace.
	 */
	var REPLACE = exports.REPLACE = 'REPLACE';

	/**
	 * Indicates that navigation was caused by some other action such
	 * as using a browser's back/forward buttons and/or manually manipulating
	 * the URL in a browser's location bar. This is the default.
	 *
	 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
	 * for more information.
	 */
	var POP = exports.POP = 'POP';

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = createMemoryHistory;

	var _useQueries = __webpack_require__(124);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	var _useBasename = __webpack_require__(131);

	var _useBasename2 = _interopRequireDefault(_useBasename);

	var _createMemoryHistory = __webpack_require__(132);

	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createMemoryHistory(options) {
	  // signatures and type checking differ between `useQueries` and
	  // `createMemoryHistory`, have to create `memoryHistory` first because
	  // `useQueries` doesn't understand the signature
	  var memoryHistory = (0, _createMemoryHistory2.default)(options);
	  var createHistory = function createHistory() {
	    return memoryHistory;
	  };
	  var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
	  return history;
	}
	module.exports = exports['default'];

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _queryString = __webpack_require__(125);

	var _runTransitionHook = __webpack_require__(128);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _LocationUtils = __webpack_require__(129);

	var _PathUtils = __webpack_require__(130);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaultStringifyQuery = function defaultStringifyQuery(query) {
	  return (0, _queryString.stringify)(query).replace(/%20/g, '+');
	};

	var defaultParseQueryString = _queryString.parse;

	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know how to handle URL queries.
	 */
	var useQueries = function useQueries(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var history = createHistory(options);
	    var stringifyQuery = options.stringifyQuery;
	    var parseQueryString = options.parseQueryString;


	    if (typeof stringifyQuery !== 'function') stringifyQuery = defaultStringifyQuery;

	    if (typeof parseQueryString !== 'function') parseQueryString = defaultParseQueryString;

	    var decodeQuery = function decodeQuery(location) {
	      if (!location) return location;

	      if (location.query == null) location.query = parseQueryString(location.search.substring(1));

	      return location;
	    };

	    var encodeQuery = function encodeQuery(location, query) {
	      if (query == null) return location;

	      var object = typeof location === 'string' ? (0, _PathUtils.parsePath)(location) : location;
	      var queryString = stringifyQuery(query);
	      var search = queryString ? '?' + queryString : '';

	      return _extends({}, object, {
	        search: search
	      });
	    };

	    // Override all read methods with query-aware versions.
	    var getCurrentLocation = function getCurrentLocation() {
	      return decodeQuery(history.getCurrentLocation());
	    };

	    var listenBefore = function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        return (0, _runTransitionHook2.default)(hook, decodeQuery(location), callback);
	      });
	    };

	    var listen = function listen(listener) {
	      return history.listen(function (location) {
	        return listener(decodeQuery(location));
	      });
	    };

	    // Override all write methods with query-aware versions.
	    var push = function push(location) {
	      return history.push(encodeQuery(location, location.query));
	    };

	    var replace = function replace(location) {
	      return history.replace(encodeQuery(location, location.query));
	    };

	    var createPath = function createPath(location) {
	      return history.createPath(encodeQuery(location, location.query));
	    };

	    var createHref = function createHref(location) {
	      return history.createHref(encodeQuery(location, location.query));
	    };

	    var createLocation = function createLocation(location) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var newLocation = history.createLocation.apply(history, [encodeQuery(location, location.query)].concat(args));

	      if (location.query) newLocation.query = (0, _LocationUtils.createQuery)(location.query);

	      return decodeQuery(newLocation);
	    };

	    return _extends({}, history, {
	      getCurrentLocation: getCurrentLocation,
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation
	    });
	  };
	};

	exports.default = useQueries;

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strictUriEncode = __webpack_require__(126);
	var objectAssign = __webpack_require__(127);

	function encoderForArrayFormat(opts) {
		switch (opts.arrayFormat) {
			case 'index':
				return function (key, value, index) {
					return value === null ? [
						encode(key, opts),
						'[',
						index,
						']'
					].join('') : [
						encode(key, opts),
						'[',
						encode(index, opts),
						']=',
						encode(value, opts)
					].join('');
				};

			case 'bracket':
				return function (key, value) {
					return value === null ? encode(key, opts) : [
						encode(key, opts),
						'[]=',
						encode(value, opts)
					].join('');
				};

			default:
				return function (key, value) {
					return value === null ? encode(key, opts) : [
						encode(key, opts),
						'=',
						encode(value, opts)
					].join('');
				};
		}
	}

	function parserForArrayFormat(opts) {
		var result;

		switch (opts.arrayFormat) {
			case 'index':
				return function (key, value, accumulator) {
					result = /\[(\d*)]$/.exec(key);

					key = key.replace(/\[\d*]$/, '');

					if (!result) {
						accumulator[key] = value;
						return;
					}

					if (accumulator[key] === undefined) {
						accumulator[key] = {};
					}

					accumulator[key][result[1]] = value;
				};

			case 'bracket':
				return function (key, value, accumulator) {
					result = /(\[])$/.exec(key);

					key = key.replace(/\[]$/, '');

					if (!result || accumulator[key] === undefined) {
						accumulator[key] = value;
						return;
					}

					accumulator[key] = [].concat(accumulator[key], value);
				};

			default:
				return function (key, value, accumulator) {
					if (accumulator[key] === undefined) {
						accumulator[key] = value;
						return;
					}

					accumulator[key] = [].concat(accumulator[key], value);
				};
		}
	}

	function encode(value, opts) {
		if (opts.encode) {
			return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
		}

		return value;
	}

	function keysSorter(input) {
		if (Array.isArray(input)) {
			return input.sort();
		} else if (typeof input === 'object') {
			return keysSorter(Object.keys(input)).sort(function (a, b) {
				return Number(a) - Number(b);
			}).map(function (key) {
				return input[key];
			});
		}

		return input;
	}

	exports.extract = function (str) {
		return str.split('?')[1] || '';
	};

	exports.parse = function (str, opts) {
		opts = objectAssign({arrayFormat: 'none'}, opts);

		var formatter = parserForArrayFormat(opts);

		// Create an object with no prototype
		// https://github.com/sindresorhus/query-string/issues/47
		var ret = Object.create(null);

		if (typeof str !== 'string') {
			return ret;
		}

		str = str.trim().replace(/^(\?|#|&)/, '');

		if (!str) {
			return ret;
		}

		str.split('&').forEach(function (param) {
			var parts = param.replace(/\+/g, ' ').split('=');
			// Firefox (pre 40) decodes `%3D` to `=`
			// https://github.com/sindresorhus/query-string/pull/37
			var key = parts.shift();
			var val = parts.length > 0 ? parts.join('=') : undefined;

			// missing `=` should be `null`:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
			val = val === undefined ? null : decodeURIComponent(val);

			formatter(decodeURIComponent(key), val, ret);
		});

		return Object.keys(ret).sort().reduce(function (result, key) {
			var val = ret[key];
			if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
				// Sort object keys, not values
				result[key] = keysSorter(val);
			} else {
				result[key] = val;
			}

			return result;
		}, Object.create(null));
	};

	exports.stringify = function (obj, opts) {
		var defaults = {
			encode: true,
			strict: true,
			arrayFormat: 'none'
		};

		opts = objectAssign(defaults, opts);

		var formatter = encoderForArrayFormat(opts);

		return obj ? Object.keys(obj).sort().map(function (key) {
			var val = obj[key];

			if (val === undefined) {
				return '';
			}

			if (val === null) {
				return encode(key, opts);
			}

			if (Array.isArray(val)) {
				var result = [];

				val.slice().forEach(function (val2) {
					if (val2 === undefined) {
						return;
					}

					result.push(formatter(key, val2, result.length));
				});

				return result.join('&');
			}

			return encode(key, opts) + '=' + encode(val, opts);
		}).filter(function (x) {
			return x.length > 0;
		}).join('&') : '';
	};


/***/ },
/* 126 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function (str) {
		return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
			return '%' + c.charCodeAt(0).toString(16).toUpperCase();
		});
	};


/***/ },
/* 127 */
/***/ function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _warning = __webpack_require__(100);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var runTransitionHook = function runTransitionHook(hook, location, callback) {
	  var result = hook(location, callback);

	  if (hook.length < 2) {
	    // Assume the hook runs synchronously and automatically
	    // call the callback with the return value.
	    callback(result);
	  } else {
	    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(result === undefined, 'You should not "return" in a transition hook with a callback argument; ' + 'call the callback instead') : void 0;
	  }
	};

	exports.default = runTransitionHook;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.locationsAreEqual = exports.statesAreEqual = exports.createLocation = exports.createQuery = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _invariant = __webpack_require__(96);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _warning = __webpack_require__(100);

	var _warning2 = _interopRequireDefault(_warning);

	var _PathUtils = __webpack_require__(130);

	var _Actions = __webpack_require__(122);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createQuery = exports.createQuery = function createQuery(props) {
	  return _extends(Object.create(null), props);
	};

	var createLocation = exports.createLocation = function createLocation() {
	  var input = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
	  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
	  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	  var object = typeof input === 'string' ? (0, _PathUtils.parsePath)(input) : input;

	  process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(!object.path, 'Location descriptor objects should have a `pathname`, not a `path`.') : void 0;

	  var pathname = object.pathname || '/';
	  var search = object.search || '';
	  var hash = object.hash || '';
	  var state = object.state;

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash,
	    state: state,
	    action: action,
	    key: key
	  };
	};

	var isDate = function isDate(object) {
	  return Object.prototype.toString.call(object) === '[object Date]';
	};

	var statesAreEqual = exports.statesAreEqual = function statesAreEqual(a, b) {
	  if (a === b) return true;

	  var typeofA = typeof a === 'undefined' ? 'undefined' : _typeof(a);
	  var typeofB = typeof b === 'undefined' ? 'undefined' : _typeof(b);

	  if (typeofA !== typeofB) return false;

	  !(typeofA !== 'function') ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'You must not store functions in location state') : (0, _invariant2.default)(false) : void 0;

	  // Not the same object, but same type.
	  if (typeofA === 'object') {
	    !!(isDate(a) && isDate(b)) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'You must not store Date objects in location state') : (0, _invariant2.default)(false) : void 0;

	    if (!Array.isArray(a)) {
	      var keysofA = Object.keys(a);
	      var keysofB = Object.keys(b);
	      return keysofA.length === keysofB.length && keysofA.every(function (key) {
	        return statesAreEqual(a[key], b[key]);
	      });
	    }

	    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
	      return statesAreEqual(item, b[index]);
	    });
	  }

	  // All other serializable types (string, number, boolean)
	  // should be strict equal.
	  return false;
	};

	var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
	  return a.key === b.key &&
	  // a.action === b.action && // Different action !== location change.
	  a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && statesAreEqual(a.state, b.state);
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.createPath = exports.parsePath = exports.getQueryStringValueFromPath = exports.stripQueryStringValueFromPath = exports.addQueryStringValueToPath = undefined;

	var _warning = __webpack_require__(100);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var addQueryStringValueToPath = exports.addQueryStringValueToPath = function addQueryStringValueToPath(path, key, value) {
	  var _parsePath = parsePath(path);

	  var pathname = _parsePath.pathname;
	  var search = _parsePath.search;
	  var hash = _parsePath.hash;


	  return createPath({
	    pathname: pathname,
	    search: search + (search.indexOf('?') === -1 ? '?' : '&') + key + '=' + value,
	    hash: hash
	  });
	};

	var stripQueryStringValueFromPath = exports.stripQueryStringValueFromPath = function stripQueryStringValueFromPath(path, key) {
	  var _parsePath2 = parsePath(path);

	  var pathname = _parsePath2.pathname;
	  var search = _parsePath2.search;
	  var hash = _parsePath2.hash;


	  return createPath({
	    pathname: pathname,
	    search: search.replace(new RegExp('([?&])' + key + '=[a-zA-Z0-9]+(&?)'), function (match, prefix, suffix) {
	      return prefix === '?' ? prefix : suffix;
	    }),
	    hash: hash
	  });
	};

	var getQueryStringValueFromPath = exports.getQueryStringValueFromPath = function getQueryStringValueFromPath(path, key) {
	  var _parsePath3 = parsePath(path);

	  var search = _parsePath3.search;

	  var match = search.match(new RegExp('[?&]' + key + '=([a-zA-Z0-9]+)'));
	  return match && match[1];
	};

	var extractPath = function extractPath(string) {
	  var match = string.match(/^(https?:)?\/\/[^\/]*/);
	  return match == null ? string : string.substring(match[0].length);
	};

	var parsePath = exports.parsePath = function parsePath(path) {
	  var pathname = extractPath(path);
	  var search = '';
	  var hash = '';

	  process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(path === pathname, 'A path must be pathname + search + hash only, not a full URL like "%s"', path) : void 0;

	  var hashIndex = pathname.indexOf('#');
	  if (hashIndex !== -1) {
	    hash = pathname.substring(hashIndex);
	    pathname = pathname.substring(0, hashIndex);
	  }

	  var searchIndex = pathname.indexOf('?');
	  if (searchIndex !== -1) {
	    search = pathname.substring(searchIndex);
	    pathname = pathname.substring(0, searchIndex);
	  }

	  if (pathname === '') pathname = '/';

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash
	  };
	};

	var createPath = exports.createPath = function createPath(location) {
	  if (location == null || typeof location === 'string') return location;

	  var basename = location.basename;
	  var pathname = location.pathname;
	  var search = location.search;
	  var hash = location.hash;

	  var path = (basename || '') + pathname;

	  if (search && search !== '?') path += search;

	  if (hash) path += hash;

	  return path;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _runTransitionHook = __webpack_require__(128);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _PathUtils = __webpack_require__(130);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var useBasename = function useBasename(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var history = createHistory(options);
	    var basename = options.basename;


	    var addBasename = function addBasename(location) {
	      if (!location) return location;

	      if (basename && location.basename == null) {
	        if (location.pathname.indexOf(basename) === 0) {
	          location.pathname = location.pathname.substring(basename.length);
	          location.basename = basename;

	          if (location.pathname === '') location.pathname = '/';
	        } else {
	          location.basename = '';
	        }
	      }

	      return location;
	    };

	    var prependBasename = function prependBasename(location) {
	      if (!basename) return location;

	      var object = typeof location === 'string' ? (0, _PathUtils.parsePath)(location) : location;
	      var pname = object.pathname;
	      var normalizedBasename = basename.slice(-1) === '/' ? basename : basename + '/';
	      var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
	      var pathname = normalizedBasename + normalizedPathname;

	      return _extends({}, object, {
	        pathname: pathname
	      });
	    };

	    // Override all read methods with basename-aware versions.
	    var getCurrentLocation = function getCurrentLocation() {
	      return addBasename(history.getCurrentLocation());
	    };

	    var listenBefore = function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        return (0, _runTransitionHook2.default)(hook, addBasename(location), callback);
	      });
	    };

	    var listen = function listen(listener) {
	      return history.listen(function (location) {
	        return listener(addBasename(location));
	      });
	    };

	    // Override all write methods with basename-aware versions.
	    var push = function push(location) {
	      return history.push(prependBasename(location));
	    };

	    var replace = function replace(location) {
	      return history.replace(prependBasename(location));
	    };

	    var createPath = function createPath(location) {
	      return history.createPath(prependBasename(location));
	    };

	    var createHref = function createHref(location) {
	      return history.createHref(prependBasename(location));
	    };

	    var createLocation = function createLocation(location) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      return addBasename(history.createLocation.apply(history, [prependBasename(location)].concat(args)));
	    };

	    return _extends({}, history, {
	      getCurrentLocation: getCurrentLocation,
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation
	    });
	  };
	};

	exports.default = useBasename;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _warning = __webpack_require__(100);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(96);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _LocationUtils = __webpack_require__(129);

	var _PathUtils = __webpack_require__(130);

	var _createHistory = __webpack_require__(133);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	var _Actions = __webpack_require__(122);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createStateStorage = function createStateStorage(entries) {
	  return entries.filter(function (entry) {
	    return entry.state;
	  }).reduce(function (memo, entry) {
	    memo[entry.key] = entry.state;
	    return memo;
	  }, {});
	};

	var createMemoryHistory = function createMemoryHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  if (Array.isArray(options)) {
	    options = { entries: options };
	  } else if (typeof options === 'string') {
	    options = { entries: [options] };
	  }

	  var getCurrentLocation = function getCurrentLocation() {
	    var entry = entries[current];
	    var path = (0, _PathUtils.createPath)(entry);

	    var key = void 0,
	        state = void 0;
	    if (entry.key) {
	      key = entry.key;
	      state = readState(key);
	    }

	    var init = (0, _PathUtils.parsePath)(path);

	    return (0, _LocationUtils.createLocation)(_extends({}, init, { state: state }), undefined, key);
	  };

	  var canGo = function canGo(n) {
	    var index = current + n;
	    return index >= 0 && index < entries.length;
	  };

	  var go = function go(n) {
	    if (!n) return;

	    if (!canGo(n)) {
	      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'Cannot go(%s) there is not enough history', n) : void 0;

	      return;
	    }

	    current += n;
	    var currentLocation = getCurrentLocation();

	    // Change action to POP
	    history.transitionTo(_extends({}, currentLocation, { action: _Actions.POP }));
	  };

	  var pushLocation = function pushLocation(location) {
	    current += 1;

	    if (current < entries.length) entries.splice(current);

	    entries.push(location);

	    saveState(location.key, location.state);
	  };

	  var replaceLocation = function replaceLocation(location) {
	    entries[current] = location;
	    saveState(location.key, location.state);
	  };

	  var history = (0, _createHistory2.default)(_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    pushLocation: pushLocation,
	    replaceLocation: replaceLocation,
	    go: go
	  }));

	  var _options = options;
	  var entries = _options.entries;
	  var current = _options.current;


	  if (typeof entries === 'string') {
	    entries = [entries];
	  } else if (!Array.isArray(entries)) {
	    entries = ['/'];
	  }

	  entries = entries.map(function (entry) {
	    return (0, _LocationUtils.createLocation)(entry);
	  });

	  if (current == null) {
	    current = entries.length - 1;
	  } else {
	    !(current >= 0 && current < entries.length) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : (0, _invariant2.default)(false) : void 0;
	  }

	  var storage = createStateStorage(entries);

	  var saveState = function saveState(key, state) {
	    return storage[key] = state;
	  };

	  var readState = function readState(key) {
	    return storage[key];
	  };

	  return _extends({}, history, {
	    canGo: canGo
	  });
	};

	exports.default = createMemoryHistory;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _AsyncUtils = __webpack_require__(134);

	var _PathUtils = __webpack_require__(130);

	var _runTransitionHook = __webpack_require__(128);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _Actions = __webpack_require__(122);

	var _LocationUtils = __webpack_require__(129);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createHistory = function createHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var getCurrentLocation = options.getCurrentLocation;
	  var getUserConfirmation = options.getUserConfirmation;
	  var pushLocation = options.pushLocation;
	  var replaceLocation = options.replaceLocation;
	  var go = options.go;
	  var keyLength = options.keyLength;


	  var currentLocation = void 0;
	  var pendingLocation = void 0;
	  var beforeListeners = [];
	  var listeners = [];
	  var allKeys = [];

	  var getCurrentIndex = function getCurrentIndex() {
	    if (pendingLocation && pendingLocation.action === _Actions.POP) return allKeys.indexOf(pendingLocation.key);

	    if (currentLocation) return allKeys.indexOf(currentLocation.key);

	    return -1;
	  };

	  var updateLocation = function updateLocation(nextLocation) {
	    var currentIndex = getCurrentIndex();

	    currentLocation = nextLocation;

	    if (currentLocation.action === _Actions.PUSH) {
	      allKeys = [].concat(allKeys.slice(0, currentIndex + 1), [currentLocation.key]);
	    } else if (currentLocation.action === _Actions.REPLACE) {
	      allKeys[currentIndex] = currentLocation.key;
	    }

	    listeners.forEach(function (listener) {
	      return listener(currentLocation);
	    });
	  };

	  var listenBefore = function listenBefore(listener) {
	    beforeListeners.push(listener);

	    return function () {
	      return beforeListeners = beforeListeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  };

	  var listen = function listen(listener) {
	    listeners.push(listener);

	    return function () {
	      return listeners = listeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  };

	  var confirmTransitionTo = function confirmTransitionTo(location, callback) {
	    (0, _AsyncUtils.loopAsync)(beforeListeners.length, function (index, next, done) {
	      (0, _runTransitionHook2.default)(beforeListeners[index], location, function (result) {
	        return result != null ? done(result) : next();
	      });
	    }, function (message) {
	      if (getUserConfirmation && typeof message === 'string') {
	        getUserConfirmation(message, function (ok) {
	          return callback(ok !== false);
	        });
	      } else {
	        callback(message !== false);
	      }
	    });
	  };

	  var transitionTo = function transitionTo(nextLocation) {
	    if (currentLocation && (0, _LocationUtils.locationsAreEqual)(currentLocation, nextLocation) || pendingLocation && (0, _LocationUtils.locationsAreEqual)(pendingLocation, nextLocation)) return; // Nothing to do

	    pendingLocation = nextLocation;

	    confirmTransitionTo(nextLocation, function (ok) {
	      if (pendingLocation !== nextLocation) return; // Transition was interrupted during confirmation

	      pendingLocation = null;

	      if (ok) {
	        // Treat PUSH to same path like REPLACE to be consistent with browsers
	        if (nextLocation.action === _Actions.PUSH) {
	          var prevPath = (0, _PathUtils.createPath)(currentLocation);
	          var nextPath = (0, _PathUtils.createPath)(nextLocation);

	          if (nextPath === prevPath && (0, _LocationUtils.statesAreEqual)(currentLocation.state, nextLocation.state)) nextLocation.action = _Actions.REPLACE;
	        }

	        if (nextLocation.action === _Actions.POP) {
	          updateLocation(nextLocation);
	        } else if (nextLocation.action === _Actions.PUSH) {
	          if (pushLocation(nextLocation) !== false) updateLocation(nextLocation);
	        } else if (nextLocation.action === _Actions.REPLACE) {
	          if (replaceLocation(nextLocation) !== false) updateLocation(nextLocation);
	        }
	      } else if (currentLocation && nextLocation.action === _Actions.POP) {
	        var prevIndex = allKeys.indexOf(currentLocation.key);
	        var nextIndex = allKeys.indexOf(nextLocation.key);

	        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL
	      }
	    });
	  };

	  var push = function push(input) {
	    return transitionTo(createLocation(input, _Actions.PUSH));
	  };

	  var replace = function replace(input) {
	    return transitionTo(createLocation(input, _Actions.REPLACE));
	  };

	  var goBack = function goBack() {
	    return go(-1);
	  };

	  var goForward = function goForward() {
	    return go(1);
	  };

	  var createKey = function createKey() {
	    return Math.random().toString(36).substr(2, keyLength || 6);
	  };

	  var createHref = function createHref(location) {
	    return (0, _PathUtils.createPath)(location);
	  };

	  var createLocation = function createLocation(location, action) {
	    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];
	    return (0, _LocationUtils.createLocation)(location, action, key);
	  };

	  return {
	    getCurrentLocation: getCurrentLocation,
	    listenBefore: listenBefore,
	    listen: listen,
	    transitionTo: transitionTo,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    createKey: createKey,
	    createPath: _PathUtils.createPath,
	    createHref: createHref,
	    createLocation: createLocation
	  };
	};

	exports.default = createHistory;

/***/ },
/* 134 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	var loopAsync = exports.loopAsync = function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;
	  var isSync = false,
	      hasNext = false,
	      doneArgs = void 0;

	  var done = function done() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    isDone = true;

	    if (isSync) {
	      // Iterate instead of recursing if possible.
	      doneArgs = args;
	      return;
	    }

	    callback.apply(undefined, args);
	  };

	  var next = function next() {
	    if (isDone) return;

	    hasNext = true;

	    if (isSync) return; // Iterate instead of recursing if possible.

	    isSync = true;

	    while (!isDone && currentTurn < turns && hasNext) {
	      hasNext = false;
	      work(currentTurn++, next, done);
	    }

	    isSync = false;

	    if (isDone) {
	      // This means the loop finished synchronously.
	      callback.apply(undefined, doneArgs);
	      return;
	    }

	    if (currentTurn >= turns && hasNext) {
	      isDone = true;
	      callback();
	    }
	  };

	  next();
	};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = useRouterHistory;

	var _useQueries = __webpack_require__(124);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	var _useBasename = __webpack_require__(131);

	var _useBasename2 = _interopRequireDefault(_useBasename);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function useRouterHistory(createHistory) {
	  return function (options) {
	    var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
	    return history;
	  };
	}
	module.exports = exports['default'];

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _RouterContext = __webpack_require__(109);

	var _RouterContext2 = _interopRequireDefault(_RouterContext);

	var _routerWarning = __webpack_require__(99);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  if (process.env.NODE_ENV !== 'production') {
	    middlewares.forEach(function (middleware, index) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(middleware.renderRouterContext || middleware.renderRouteComponent, 'The middleware specified at index ' + index + ' does not appear to be ' + 'a valid React Router middleware.') : void 0;
	    });
	  }

	  var withContext = middlewares.map(function (middleware) {
	    return middleware.renderRouterContext;
	  }).filter(Boolean);
	  var withComponent = middlewares.map(function (middleware) {
	    return middleware.renderRouteComponent;
	  }).filter(Boolean);

	  var makeCreateElement = function makeCreateElement() {
	    var baseCreateElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _react.createElement;
	    return function (Component, props) {
	      return withComponent.reduceRight(function (previous, renderRouteComponent) {
	        return renderRouteComponent(previous, props);
	      }, baseCreateElement(Component, props));
	    };
	  };

	  return function (renderProps) {
	    return withContext.reduceRight(function (previous, renderRouterContext) {
	      return renderRouterContext(previous, renderProps);
	    }, _react2.default.createElement(_RouterContext2.default, _extends({}, renderProps, {
	      createElement: makeCreateElement(renderProps.createElement)
	    })));
	  };
	};

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createBrowserHistory = __webpack_require__(138);

	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

	var _createRouterHistory = __webpack_require__(144);

	var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _createRouterHistory2.default)(_createBrowserHistory2.default);
	module.exports = exports['default'];

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _invariant = __webpack_require__(96);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _ExecutionEnvironment = __webpack_require__(139);

	var _BrowserProtocol = __webpack_require__(140);

	var BrowserProtocol = _interopRequireWildcard(_BrowserProtocol);

	var _RefreshProtocol = __webpack_require__(143);

	var RefreshProtocol = _interopRequireWildcard(_RefreshProtocol);

	var _DOMUtils = __webpack_require__(141);

	var _createHistory = __webpack_require__(133);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Creates and returns a history object that uses HTML5's history API
	 * (pushState, replaceState, and the popstate event) to manage history.
	 * This is the recommended method of managing history in browsers because
	 * it provides the cleanest URLs.
	 *
	 * Note: In browsers that do not support the HTML5 history API full
	 * page reloads will be used to preserve clean URLs. You can force this
	 * behavior using { forceRefresh: true } in options.
	 */
	var createBrowserHistory = function createBrowserHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Browser history needs a DOM') : (0, _invariant2.default)(false) : void 0;

	  var useRefresh = options.forceRefresh || !(0, _DOMUtils.supportsHistory)();
	  var Protocol = useRefresh ? RefreshProtocol : BrowserProtocol;

	  var getUserConfirmation = Protocol.getUserConfirmation;
	  var getCurrentLocation = Protocol.getCurrentLocation;
	  var pushLocation = Protocol.pushLocation;
	  var replaceLocation = Protocol.replaceLocation;
	  var go = Protocol.go;


	  var history = (0, _createHistory2.default)(_extends({
	    getUserConfirmation: getUserConfirmation }, options, {
	    getCurrentLocation: getCurrentLocation,
	    pushLocation: pushLocation,
	    replaceLocation: replaceLocation,
	    go: go
	  }));

	  var listenerCount = 0,
	      stopListener = void 0;

	  var startListener = function startListener(listener, before) {
	    if (++listenerCount === 1) stopListener = BrowserProtocol.startListener(history.transitionTo);

	    var unlisten = before ? history.listenBefore(listener) : history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopListener();
	    };
	  };

	  var listenBefore = function listenBefore(listener) {
	    return startListener(listener, true);
	  };

	  var listen = function listen(listener) {
	    return startListener(listener, false);
	  };

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen
	  });
	};

	exports.default = createBrowserHistory;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 139 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.go = exports.replaceLocation = exports.pushLocation = exports.startListener = exports.getUserConfirmation = exports.getCurrentLocation = undefined;

	var _LocationUtils = __webpack_require__(129);

	var _DOMUtils = __webpack_require__(141);

	var _DOMStateStorage = __webpack_require__(142);

	var _PathUtils = __webpack_require__(130);

	var _ExecutionEnvironment = __webpack_require__(139);

	var PopStateEvent = 'popstate';
	var HashChangeEvent = 'hashchange';

	var needsHashchangeListener = _ExecutionEnvironment.canUseDOM && !(0, _DOMUtils.supportsPopstateOnHashchange)();

	var _createLocation = function _createLocation(historyState) {
	  var key = historyState && historyState.key;

	  return (0, _LocationUtils.createLocation)({
	    pathname: window.location.pathname,
	    search: window.location.search,
	    hash: window.location.hash,
	    state: key ? (0, _DOMStateStorage.readState)(key) : undefined
	  }, undefined, key);
	};

	var getCurrentLocation = exports.getCurrentLocation = function getCurrentLocation() {
	  var historyState = void 0;
	  try {
	    historyState = window.history.state || {};
	  } catch (error) {
	    // IE 11 sometimes throws when accessing window.history.state
	    // See https://github.com/ReactTraining/history/pull/289
	    historyState = {};
	  }

	  return _createLocation(historyState);
	};

	var getUserConfirmation = exports.getUserConfirmation = function getUserConfirmation(message, callback) {
	  return callback(window.confirm(message));
	}; // eslint-disable-line no-alert

	var startListener = exports.startListener = function startListener(listener) {
	  var handlePopState = function handlePopState(event) {
	    if (event.state !== undefined) // Ignore extraneous popstate events in WebKit
	      listener(_createLocation(event.state));
	  };

	  (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

	  var handleUnpoppedHashChange = function handleUnpoppedHashChange() {
	    return listener(getCurrentLocation());
	  };

	  if (needsHashchangeListener) {
	    (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleUnpoppedHashChange);
	  }

	  return function () {
	    (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

	    if (needsHashchangeListener) {
	      (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleUnpoppedHashChange);
	    }
	  };
	};

	var updateLocation = function updateLocation(location, updateState) {
	  var state = location.state;
	  var key = location.key;


	  if (state !== undefined) (0, _DOMStateStorage.saveState)(key, state);

	  updateState({ key: key }, (0, _PathUtils.createPath)(location));
	};

	var pushLocation = exports.pushLocation = function pushLocation(location) {
	  return updateLocation(location, function (state, path) {
	    return window.history.pushState(state, null, path);
	  });
	};

	var replaceLocation = exports.replaceLocation = function replaceLocation(location) {
	  return updateLocation(location, function (state, path) {
	    return window.history.replaceState(state, null, path);
	  });
	};

	var go = exports.go = function go(n) {
	  if (n) window.history.go(n);
	};

/***/ },
/* 141 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
	  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
	};

	var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
	  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
	};

	/**
	 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
	 *
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
	 */
	var supportsHistory = exports.supportsHistory = function supportsHistory() {
	  var ua = window.navigator.userAgent;

	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

	  return window.history && 'pushState' in window.history;
	};

	/**
	 * Returns false if using go(n) with hash history causes a full page reload.
	 */
	var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
	  return window.navigator.userAgent.indexOf('Firefox') === -1;
	};

	/**
	 * Returns true if browser fires popstate on hash change.
	 * IE10 and IE11 do not.
	 */
	var supportsPopstateOnHashchange = exports.supportsPopstateOnHashchange = function supportsPopstateOnHashchange() {
	  return window.navigator.userAgent.indexOf('Trident') === -1;
	};

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.readState = exports.saveState = undefined;

	var _warning = __webpack_require__(100);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var QuotaExceededErrors = {
	  QuotaExceededError: true,
	  QUOTA_EXCEEDED_ERR: true
	};

	var SecurityErrors = {
	  SecurityError: true
	};

	var KeyPrefix = '@@History/';

	var createKey = function createKey(key) {
	  return KeyPrefix + key;
	};

	var saveState = exports.saveState = function saveState(key, state) {
	  if (!window.sessionStorage) {
	    // Session storage is not available or hidden.
	    // sessionStorage is undefined in Internet Explorer when served via file protocol.
	    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '[history] Unable to save state; sessionStorage is not available') : void 0;

	    return;
	  }

	  try {
	    if (state == null) {
	      window.sessionStorage.removeItem(createKey(key));
	    } else {
	      window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
	    }
	  } catch (error) {
	    if (SecurityErrors[error.name]) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '[history] Unable to save state; sessionStorage is not available due to security settings') : void 0;

	      return;
	    }

	    if (QuotaExceededErrors[error.name] && window.sessionStorage.length === 0) {
	      // Safari "private mode" throws QuotaExceededError.
	      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : void 0;

	      return;
	    }

	    throw error;
	  }
	};

	var readState = exports.readState = function readState(key) {
	  var json = void 0;
	  try {
	    json = window.sessionStorage.getItem(createKey(key));
	  } catch (error) {
	    if (SecurityErrors[error.name]) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '[history] Unable to read state; sessionStorage is not available due to security settings') : void 0;

	      return undefined;
	    }
	  }

	  if (json) {
	    try {
	      return JSON.parse(json);
	    } catch (error) {
	      // Ignore invalid JSON.
	    }
	  }

	  return undefined;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.replaceLocation = exports.pushLocation = exports.getCurrentLocation = exports.go = exports.getUserConfirmation = undefined;

	var _BrowserProtocol = __webpack_require__(140);

	Object.defineProperty(exports, 'getUserConfirmation', {
	  enumerable: true,
	  get: function get() {
	    return _BrowserProtocol.getUserConfirmation;
	  }
	});
	Object.defineProperty(exports, 'go', {
	  enumerable: true,
	  get: function get() {
	    return _BrowserProtocol.go;
	  }
	});

	var _LocationUtils = __webpack_require__(129);

	var _PathUtils = __webpack_require__(130);

	var getCurrentLocation = exports.getCurrentLocation = function getCurrentLocation() {
	  return (0, _LocationUtils.createLocation)(window.location);
	};

	var pushLocation = exports.pushLocation = function pushLocation(location) {
	  window.location.href = (0, _PathUtils.createPath)(location);
	  return false; // Don't update location
	};

	var replaceLocation = exports.replaceLocation = function replaceLocation(location) {
	  window.location.replace((0, _PathUtils.createPath)(location));
	  return false; // Don't update location
	};

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	exports.default = function (createHistory) {
	  var history = void 0;
	  if (canUseDOM) history = (0, _useRouterHistory2.default)(createHistory)();
	  return history;
	};

	var _useRouterHistory = __webpack_require__(135);

	var _useRouterHistory2 = _interopRequireDefault(_useRouterHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	module.exports = exports['default'];

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createHashHistory = __webpack_require__(146);

	var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

	var _createRouterHistory = __webpack_require__(144);

	var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _createRouterHistory2.default)(_createHashHistory2.default);
	module.exports = exports['default'];

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _warning = __webpack_require__(100);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(96);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _ExecutionEnvironment = __webpack_require__(139);

	var _DOMUtils = __webpack_require__(141);

	var _HashProtocol = __webpack_require__(147);

	var HashProtocol = _interopRequireWildcard(_HashProtocol);

	var _createHistory = __webpack_require__(133);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DefaultQueryKey = '_k';

	var addLeadingSlash = function addLeadingSlash(path) {
	  return path.charAt(0) === '/' ? path : '/' + path;
	};

	var HashPathCoders = {
	  hashbang: {
	    encodePath: function encodePath(path) {
	      return path.charAt(0) === '!' ? path : '!' + path;
	    },
	    decodePath: function decodePath(path) {
	      return path.charAt(0) === '!' ? path.substring(1) : path;
	    }
	  },
	  noslash: {
	    encodePath: function encodePath(path) {
	      return path.charAt(0) === '/' ? path.substring(1) : path;
	    },
	    decodePath: addLeadingSlash
	  },
	  slash: {
	    encodePath: addLeadingSlash,
	    decodePath: addLeadingSlash
	  }
	};

	var createHashHistory = function createHashHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Hash history needs a DOM') : (0, _invariant2.default)(false) : void 0;

	  var queryKey = options.queryKey;
	  var hashType = options.hashType;


	  process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(queryKey !== false, 'Using { queryKey: false } no longer works. Instead, just don\'t ' + 'use location state if you don\'t want a key in your URL query string') : void 0;

	  if (typeof queryKey !== 'string') queryKey = DefaultQueryKey;

	  if (hashType == null) hashType = 'slash';

	  if (!(hashType in HashPathCoders)) {
	    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'Invalid hash type: %s', hashType) : void 0;

	    hashType = 'slash';
	  }

	  var pathCoder = HashPathCoders[hashType];

	  var getUserConfirmation = HashProtocol.getUserConfirmation;


	  var getCurrentLocation = function getCurrentLocation() {
	    return HashProtocol.getCurrentLocation(pathCoder, queryKey);
	  };

	  var pushLocation = function pushLocation(location) {
	    return HashProtocol.pushLocation(location, pathCoder, queryKey);
	  };

	  var replaceLocation = function replaceLocation(location) {
	    return HashProtocol.replaceLocation(location, pathCoder, queryKey);
	  };

	  var history = (0, _createHistory2.default)(_extends({
	    getUserConfirmation: getUserConfirmation }, options, {
	    getCurrentLocation: getCurrentLocation,
	    pushLocation: pushLocation,
	    replaceLocation: replaceLocation,
	    go: HashProtocol.go
	  }));

	  var listenerCount = 0,
	      stopListener = void 0;

	  var startListener = function startListener(listener, before) {
	    if (++listenerCount === 1) stopListener = HashProtocol.startListener(history.transitionTo, pathCoder, queryKey);

	    var unlisten = before ? history.listenBefore(listener) : history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopListener();
	    };
	  };

	  var listenBefore = function listenBefore(listener) {
	    return startListener(listener, true);
	  };

	  var listen = function listen(listener) {
	    return startListener(listener, false);
	  };

	  var goIsSupportedWithoutReload = (0, _DOMUtils.supportsGoWithoutReloadUsingHash)();

	  var go = function go(n) {
	    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(goIsSupportedWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : void 0;

	    history.go(n);
	  };

	  var createHref = function createHref(path) {
	    return '#' + pathCoder.encodePath(history.createHref(path));
	  };

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    go: go,
	    createHref: createHref
	  });
	};

	exports.default = createHashHistory;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.replaceLocation = exports.pushLocation = exports.startListener = exports.getCurrentLocation = exports.go = exports.getUserConfirmation = undefined;

	var _BrowserProtocol = __webpack_require__(140);

	Object.defineProperty(exports, 'getUserConfirmation', {
	  enumerable: true,
	  get: function get() {
	    return _BrowserProtocol.getUserConfirmation;
	  }
	});
	Object.defineProperty(exports, 'go', {
	  enumerable: true,
	  get: function get() {
	    return _BrowserProtocol.go;
	  }
	});

	var _warning = __webpack_require__(100);

	var _warning2 = _interopRequireDefault(_warning);

	var _LocationUtils = __webpack_require__(129);

	var _DOMUtils = __webpack_require__(141);

	var _DOMStateStorage = __webpack_require__(142);

	var _PathUtils = __webpack_require__(130);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HashChangeEvent = 'hashchange';

	var getHashPath = function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  var href = window.location.href;
	  var hashIndex = href.indexOf('#');
	  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
	};

	var pushHashPath = function pushHashPath(path) {
	  return window.location.hash = path;
	};

	var replaceHashPath = function replaceHashPath(path) {
	  var hashIndex = window.location.href.indexOf('#');

	  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
	};

	var getCurrentLocation = exports.getCurrentLocation = function getCurrentLocation(pathCoder, queryKey) {
	  var path = pathCoder.decodePath(getHashPath());
	  var key = (0, _PathUtils.getQueryStringValueFromPath)(path, queryKey);

	  var state = void 0;
	  if (key) {
	    path = (0, _PathUtils.stripQueryStringValueFromPath)(path, queryKey);
	    state = (0, _DOMStateStorage.readState)(key);
	  }

	  var init = (0, _PathUtils.parsePath)(path);
	  init.state = state;

	  return (0, _LocationUtils.createLocation)(init, undefined, key);
	};

	var prevLocation = void 0;

	var startListener = exports.startListener = function startListener(listener, pathCoder, queryKey) {
	  var handleHashChange = function handleHashChange() {
	    var path = getHashPath();
	    var encodedPath = pathCoder.encodePath(path);

	    if (path !== encodedPath) {
	      // Always be sure we have a properly-encoded hash.
	      replaceHashPath(encodedPath);
	    } else {
	      var currentLocation = getCurrentLocation(pathCoder, queryKey);

	      if (prevLocation && currentLocation.key && prevLocation.key === currentLocation.key) return; // Ignore extraneous hashchange events

	      prevLocation = currentLocation;

	      listener(currentLocation);
	    }
	  };

	  // Ensure the hash is encoded properly.
	  var path = getHashPath();
	  var encodedPath = pathCoder.encodePath(path);

	  if (path !== encodedPath) replaceHashPath(encodedPath);

	  (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);

	  return function () {
	    return (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
	  };
	};

	var updateLocation = function updateLocation(location, pathCoder, queryKey, updateHash) {
	  var state = location.state;
	  var key = location.key;


	  var path = pathCoder.encodePath((0, _PathUtils.createPath)(location));

	  if (state !== undefined) {
	    path = (0, _PathUtils.addQueryStringValueToPath)(path, queryKey, key);
	    (0, _DOMStateStorage.saveState)(key, state);
	  }

	  prevLocation = location;

	  updateHash(path);
	};

	var pushLocation = exports.pushLocation = function pushLocation(location, pathCoder, queryKey) {
	  return updateLocation(location, pathCoder, queryKey, function (path) {
	    if (getHashPath() !== path) {
	      pushHashPath(path);
	    } else {
	      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'You cannot PUSH the same path using hash history') : void 0;
	    }
	  });
	};

	var replaceLocation = exports.replaceLocation = function replaceLocation(location, pathCoder, queryKey) {
	  return updateLocation(location, pathCoder, queryKey, function (path) {
	    if (getHashPath() !== path) replaceHashPath(path);
	  });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(1);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(92);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Header = function (_Component) {
	    _inherits(Header, _Component);

	    function Header() {
	        _classCallCheck(this, Header);

	        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	    }

	    _createClass(Header, [{
	        key: 'render',
	        value: function render() {
	            var back = this.props.back ? _react2.default.createElement(
	                _reactRouter.Link,
	                { className: 'back', to: this.props.back },
	                '\u8FD4\u56DE'
	            ) : null;
	            return _react2.default.createElement(
	                'div',
	                { className: 'page-header' },
	                back,
	                this.props.text
	            );
	        }
	    }]);

	    return Header;
	}(_react.Component);

		exports.default = Header;

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(1);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _header = __webpack_require__(148);

	var _header2 = _interopRequireDefault(_header);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BasicDemo = function (_Component) {
	    _inherits(BasicDemo, _Component);

	    function BasicDemo() {
	        _classCallCheck(this, BasicDemo);

	        return _possibleConstructorReturn(this, (BasicDemo.__proto__ || Object.getPrototypeOf(BasicDemo)).apply(this, arguments));
	    }

	    _createClass(BasicDemo, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'page' },
	                _react2.default.createElement(_header2.default, { text: 'Basic', back: '/' }),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'page-body' },
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        'todo'
	                    )
	                )
	            );
	        }
	    }]);

	    return BasicDemo;
	}(_react.Component);

		exports.default = BasicDemo;

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(1);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _header = __webpack_require__(148);

	var _header2 = _interopRequireDefault(_header);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Button = function (_Component) {
	    _inherits(Button, _Component);

	    function Button(props) {
	        _classCallCheck(this, Button);

	        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

	        _this.state = {
	            log: []
	        };
	        return _this;
	    }

	    _createClass(Button, [{
	        key: 'updateLog',
	        value: function updateLog(e, info) {
	            var newState = this.state.log;
	            var clicklog = newState.length + e.type + ':' + info;
	            newState.unshift(clicklog);
	            this.setState({
	                log: newState
	            });
	            console.log(e, e.nativeEvent);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var log = this.state.log.length >= 1 ? _react2.default.createElement(
	                'div',
	                { className: 'log-block' },
	                this.state.log.join(' ')
	            ) : null;

	            return _react2.default.createElement(
	                'div',
	                { className: 'section-body' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'box' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'outer', onClick: function onClick(e) {
	                                return _this2.updateLog(e, 'outer');
	                            } },
	                        'onClick',
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'inner', onClick: function onClick(e) {
	                                    return _this2.updateLog(e, 'inner');
	                                } },
	                            'onClick'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'outer', onClickCapture: function onClickCapture(e) {
	                                return _this2.updateLog(e, 'outer capture');
	                            } },
	                        'onClickCapture',
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'inner', onClick: function onClick(e) {
	                                    return _this2.updateLog(e, 'inner');
	                                } },
	                            'onClick'
	                        )
	                    )
	                ),
	                log
	            );
	        }
	    }]);

	    return Button;
	}(_react.Component);

	var Input = function (_Component2) {
	    _inherits(Input, _Component2);

	    function Input(props) {
	        _classCallCheck(this, Input);

	        var _this3 = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

	        _this3.state = {
	            log: 'log'
	        };
	        return _this3;
	    }

	    _createClass(Input, [{
	        key: 'updateLog',
	        value: function updateLog(e, info) {
	            this.setState({ log: info });
	            console.log(e, info);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this4 = this;

	            return _react2.default.createElement(
	                'div',
	                { className: 'section-body' },
	                _react2.default.createElement('input', {
	                    className: 'basic-input',
	                    onFocus: function onFocus(e) {
	                        return _this4.updateLog(e, 'input onFocus');
	                    },
	                    onBlur: function onBlur(e) {
	                        return _this4.updateLog(e, 'input onBlur');
	                    },
	                    onChange: function onChange(e) {
	                        return _this4.updateLog(e, 'input onChange');
	                    },
	                    onInput: function onInput(e) {
	                        return _this4.updateLog(e, 'input onInput');
	                    },

	                    onCompositionStart: function onCompositionStart(e) {
	                        return _this4.updateLog(e, 'input onCompositionStart');
	                    },
	                    onCompositionUpdate: function onCompositionUpdate(e) {
	                        return _this4.updateLog(e, 'input onCompositionUpdate');
	                    },
	                    onCompositionEnd: function onCompositionEnd(e) {
	                        return _this4.updateLog(e, 'input onCompositionEnd');
	                    },

	                    onCopy: function onCopy(e) {
	                        return _this4.updateLog(e, 'input onCopy');
	                    },
	                    onCut: function onCut(e) {
	                        return _this4.updateLog(e, 'input onCut');
	                    },
	                    onPaste: function onPaste(e) {
	                        return _this4.updateLog(e, 'input onPaste');
	                    }
	                }),
	                _react2.default.createElement('textarea', { className: 'basic-textarea', onSelect: function onSelect(e) {
	                        return _this4.updateLog(e, 'textarea onSelect');
	                    } }),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'log-inline' },
	                    this.state.log
	                )
	            );
	        }
	    }]);

	    return Input;
	}(_react.Component);

	var TouchEvent = function (_Component3) {
	    _inherits(TouchEvent, _Component3);

	    function TouchEvent(props) {
	        _classCallCheck(this, TouchEvent);

	        var _this5 = _possibleConstructorReturn(this, (TouchEvent.__proto__ || Object.getPrototypeOf(TouchEvent)).call(this, props));

	        _this5.state = {
	            type: '',
	            pageX: '',
	            pageY: ''
	        };
	        return _this5;
	    }

	    _createClass(TouchEvent, [{
	        key: 'updateLog',
	        value: function updateLog(e) {
	            console.log(e.nativeEvent);
	            var point = e.nativeEvent.touches[0] || e.nativeEvent.changedTouches[0] || {};
	            this.setState({ type: e.type });
	            this.setState({ pageX: point.pageX });
	            this.setState({ pageY: point.pageY });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this6 = this;

	            return _react2.default.createElement(
	                'div',
	                { className: 'section-body' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'touch-box',
	                        onTouchStart: function onTouchStart(e) {
	                            return _this6.updateLog(e);
	                        },
	                        onTouchMove: function onTouchMove(e) {
	                            return _this6.updateLog(e);
	                        },
	                        onTouchEnd: function onTouchEnd(e) {
	                            return _this6.updateLog(e);
	                        }
	                    },
	                    '\u5728\u6B64\u5904\u62D6\u62FD'
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'log-block' },
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        'type: ',
	                        this.state.type
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        'pageX: ',
	                        this.state.pageX
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        'pageY: ',
	                        this.state.pageY
	                    )
	                )
	            );
	        }
	    }]);

	    return TouchEvent;
	}(_react.Component);

	var Other = function (_Component4) {
	    _inherits(Other, _Component4);

	    function Other(props) {
	        _classCallCheck(this, Other);

	        var _this7 = _possibleConstructorReturn(this, (Other.__proto__ || Object.getPrototypeOf(Other)).call(this, props));

	        _this7.state = {
	            log: 'log'
	        };
	        return _this7;
	    }

	    _createClass(Other, [{
	        key: 'updateLog',
	        value: function updateLog(e) {
	            this.setState({ log: e.type });
	            console.log(e);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this8 = this;

	            return _react2.default.createElement(
	                'div',
	                { className: 'section-body' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'other-box',
	                        onScroll: function onScroll(e) {
	                            return _this8.updateLog(e);
	                        },
	                        onSelect: function onSelect(e) {
	                            return _this8.updateLog(e);
	                        }
	                    },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'other-cell' },
	                        '\u4F60\u53EF\u4EE5\u6D4B\u8BD5',
	                        _react2.default.createElement('br', null),
	                        '\u6ED1\u52A8onScroll',
	                        _react2.default.createElement('br', null)
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'log-inline' },
	                    this.state.log
	                )
	            );
	        }
	    }]);

	    return Other;
	}(_react.Component);

	var Animation = function (_Component5) {
	    _inherits(Animation, _Component5);

	    function Animation(props) {
	        _classCallCheck(this, Animation);

	        var _this9 = _possibleConstructorReturn(this, (Animation.__proto__ || Object.getPrototypeOf(Animation)).call(this, props));

	        _this9.state = {
	            log: 'log',
	            animation: false,
	            transition: false
	        };
	        return _this9;
	    }

	    _createClass(Animation, [{
	        key: 'updateLog',
	        value: function updateLog(e) {
	            this.setState({ log: e.type });
	            if (e.type === 'animationEnd') {
	                this.setState({ play: false });
	            }
	            console.log(e);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this10 = this;

	            return _react2.default.createElement(
	                'div',
	                { className: 'section-body' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'animation-buttons' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'basic-button',
	                            onClick: function onClick() {
	                                _this10.setState({ animation: true });
	                            } },
	                        'startAnimation'
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'basic-button',
	                            onClick: function onClick() {
	                                _this10.setState({ animation: false });
	                            } },
	                        'resetAnimation'
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'animation-buttons' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'basic-button',
	                            onClick: function onClick() {
	                                _this10.setState({ transition: true });
	                            } },
	                        'startTransion'
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'basic-button',
	                            onClick: function onClick() {
	                                _this10.setState({ transition: false });
	                            } },
	                        'resetTransition'
	                    )
	                ),
	                _react2.default.createElement('div', { className: this.state.animation ? 'animation-box animate' : this.state.transition ? 'animation-box transition' : 'animation-box',
	                    onAnimationStart: this.updateLog.bind(this),
	                    onAnimationIteration: this.updateLog.bind(this),
	                    onAnimationEnd: this.updateLog.bind(this),
	                    onTransitionEnd: this.updateLog.bind(this)
	                }),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'log-inline' },
	                    this.state.log
	                )
	            );
	        }
	    }]);

	    return Animation;
	}(_react.Component);

	var EventDemo = function (_Component6) {
	    _inherits(EventDemo, _Component6);

	    function EventDemo() {
	        _classCallCheck(this, EventDemo);

	        return _possibleConstructorReturn(this, (EventDemo.__proto__ || Object.getPrototypeOf(EventDemo)).apply(this, arguments));
	    }

	    _createClass(EventDemo, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'page' },
	                _react2.default.createElement(_header2.default, { text: 'Basic', back: '/' }),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'page-body page-event' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'section-title' },
	                        'onClick & onClickCapture'
	                    ),
	                    _react2.default.createElement(Button, null),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'section-title' },
	                        'Input'
	                    ),
	                    _react2.default.createElement(Input, null),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'section-title' },
	                        'TouchEvent'
	                    ),
	                    _react2.default.createElement(TouchEvent, null),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'section-title' },
	                        'Other'
	                    ),
	                    _react2.default.createElement(Other, null),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'section-title' },
	                        'Animation'
	                    ),
	                    _react2.default.createElement(Animation, null)
	                )
	            );
	        }
	    }]);

	    return EventDemo;
	}(_react.Component);

		exports.default = EventDemo;

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(152);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(154)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./index.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(153)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/**\n * @module Flexbox\n * @description 定义伸缩盒子元素的流动方向\n * @method flex-direction\n * @version 1.0.0\n * @param {String} $flex-direction 取值与`flex-direction`属性一致，默认值：row <1.0.0>\n */\nhtml {\n  width: 100%;\n  height: 100%;\n  font-size: 100px;\n  padding: 0;\n  margin: 0;\n  position: relative;\n  font-family: Helvetica, \"Microsoft YaHei\", Tahoma, Arial; }\n\nbody {\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  position: absolute; }\n\ndiv {\n  box-sizing: border-box;\n  font-size: 0.16rem; }\n\n.page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  flex-direction: column; }\n\n.page-header {\n  height: 0.40rem;\n  line-height: 0.40rem;\n  background-color: #1ba9ba;\n  text-align: center;\n  position: relative;\n  color: #fff;\n  font-size: 0.18rem; }\n  .page-header .back {\n    display: block;\n    position: absolute;\n    left: 10px;\n    line-height: 0.40rem;\n    height: 0.40rem;\n    font-size: 0.14rem;\n    text-decoration: none;\n    color: #fff; }\n\n.page-body {\n  background-color: #efefef;\n  position: absolute;\n  top: 0.40rem;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: scroll; }\n  .page-body .section-title {\n    width: 100%;\n    height: 0.40rem;\n    line-height: 0.40rem;\n    padding-left: 0.20rem; }\n  .page-body .link {\n    display: block;\n    width: 100%;\n    height: 0.40rem;\n    line-height: 0.40rem;\n    background-color: #fff;\n    border-bottom: 1px solid #eee;\n    text-decoration: none;\n    color: #333;\n    padding-left: 0.15rem; }\n  .page-body .section-body {\n    padding: 0.15rem;\n    background: #fff; }\n  .page-body .log-block {\n    margin: 0.1rem 0;\n    padding: 0.1rem 0.15rem;\n    height: 0.8rem;\n    overflow: scroll;\n    border: 1px solid #333;\n    border-radius: 0.05rem; }\n  .page-body .log-inline {\n    margin: 0.1rem 0;\n    padding: 0.1rem 0.15rem; }\n  .page-body .basic-input {\n    width: 100%;\n    height: 0.35rem;\n    border: 1px solid #333; }\n  .page-body .basic-textarea {\n    width: 100%;\n    height: 0.6rem;\n    border: 1px solid #333; }\n  .page-body .basic-button {\n    width: 1.2rem;\n    height: 0.35rem;\n    line-height: 0.35rem;\n    text-align: center;\n    color: #fff;\n    font-size: 0.14rem;\n    background: #1ba9ba;\n    border-radius: 0.05rem; }\n\n.page-event .box {\n  padding: 0.1rem;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: space-around;\n  justify-content: space-around; }\n  .page-event .box .outer {\n    width: 1rem;\n    height: 1rem;\n    background: #d1d1d1;\n    color: #333;\n    font-size: 0.12rem;\n    text-align: center;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    align-items: center;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n    justify-content: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n    flex-direction: column; }\n    .page-event .box .outer .inner {\n      width: 0.5rem;\n      height: 0.5rem;\n      background: #a1a1a1;\n      font-size: 0.12rem; }\n\n.page-event .touch-box {\n  width: 100%;\n  height: 1rem;\n  line-height: 1rem;\n  background-color: #d1d1d1;\n  text-align: center;\n  margin-bottom: 0.15rem; }\n\n.page-event .other-box {\n  width: 100%;\n  height: 1rem;\n  line-height: 0.22rem;\n  background-color: #d1d1d1;\n  text-align: center;\n  margin-bottom: 0.15rem;\n  overflow: scroll; }\n  .page-event .other-box .other-cell {\n    height: 3rem; }\n\n.page-event .animation-buttons {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: space-around;\n  justify-content: space-around;\n  margin-bottom: 0.2rem; }\n\n.page-event .animation-box {\n  width: 0.6rem;\n  height: 0.6rem;\n  margin-top: 0.2rem;\n  color: #fff;\n  background-color: #d1d1d1;\n  border-radius: 50%;\n  -webkit-transition: width 1s ease-in-out;\n  transition: width 1s ease-in-out; }\n  .page-event .animation-box.animate {\n    -webkit-animation: animationBox 1000ms ease-in-out;\n    animation: animationBox 1000ms ease-in-out; }\n  .page-event .animation-box.transition {\n    width: 1.8rem; }\n\n@-webkit-keyframes animationBox {\n  from {\n    -webkit-transform: translateX(0); }\n  to {\n    -webkit-transform: translateX(300%); } }\n\n@keyframes animationBox {\n  from {\n    transform: translateX(0); }\n  to {\n    transform: translateX(300%); } }\n", ""]);

	// exports


/***/ },
/* 153 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);
//# sourceMappingURL=demo.js.map
