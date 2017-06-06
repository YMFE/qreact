/******/
(function(modules) { // webpackBootstrap
    /******/ // install a JSONP callback for chunk loading
    /******/
    var parentJsonpFunction = window["webpackJsonp"];
    /******/
    window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
        /******/ // add "moreModules" to the modules object,
        /******/ // then flag all "chunkIds" as loaded and fire callback
        /******/
        var moduleId, chunkId, i = 0,
            callbacks = [];
        /******/
        for (; i < chunkIds.length; i++) {
            /******/
            chunkId = chunkIds[i];
            /******/
            if (installedChunks[chunkId])
            /******/
                callbacks.push.apply(callbacks, installedChunks[chunkId]);
            /******/
            installedChunks[chunkId] = 0;
            /******/
        }
        /******/
        for (moduleId in moreModules) {
            /******/
            modules[moduleId] = moreModules[moduleId];
            /******/
        }
        /******/
        if (parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
        /******/
        while (callbacks.length)
        /******/
            callbacks.shift().call(null, __webpack_require__);

        /******/
    };

    /******/ // The module cache
    /******/
    var installedModules = {};

    /******/ // object to store loaded and loading chunks
    /******/ // "0" means "already loaded"
    /******/ // Array means "loading", array contains callbacks
    /******/
    var installedChunks = {
        /******/
        2: 0
            /******/
    };

    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {

        /******/ // Check if module is in cache
        /******/
        if (installedModules[moduleId])
        /******/
            return installedModules[moduleId].exports;

        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/
            exports: {},
            /******/
            id: moduleId,
            /******/
            loaded: false
                /******/
        };

        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

        /******/ // Flag the module as loaded
        /******/
        module.loaded = true;

        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }

    /******/ // This file contains only the entry chunk.
    /******/ // The chunk loading function for additional chunks
    /******/
    __webpack_require__.e = function requireEnsure(chunkId, callback) {
        /******/ // "0" is the signal for "already loaded"
        /******/
        if (installedChunks[chunkId] === 0)
        /******/
            return callback.call(null, __webpack_require__);

        /******/ // an array means "currently loading".
        /******/
        if (installedChunks[chunkId] !== undefined) {
            /******/
            installedChunks[chunkId].push(callback);
            /******/
        } else {
            /******/ // start chunk loading
            /******/
            installedChunks[chunkId] = [callback];
            /******/
            var head = document.getElementsByTagName('head')[0];
            /******/
            var script = document.createElement('script');
            /******/
            script.type = 'text/javascript';
            /******/
            script.charset = 'utf-8';
            /******/
            script.async = true;

            /******/
            script.src = __webpack_require__.p + "" + ({
                "0": "BlackScreen",
                "1": "BlueScreen"
            }[chunkId] || chunkId) + ".js";
            /******/
            head.appendChild(script);
            /******/
        }
        /******/
    };

    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;

    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;

    /******/ // __webpack_public_path__
    /******/
    __webpack_require__.p = "/examples/flux/js/";

    /******/ // Load entry module and return exports
    /******/
    return __webpack_require__(0);
    /******/
})
/************************************************************************/
/******/
([
    /* 0 */
    /***/
    function(module, exports, __webpack_require__) {

        __webpack_require__(6);
        module.exports = __webpack_require__(7);


        /***/
    },
    /* 1 */
    ,
    /* 2 */
    ,
    /* 3 */
    ,
    /* 4 */
    ,
    /* 5 */
    ,
    /* 6 */
    /***/
    function(module, exports, __webpack_require__) {

        /* WEBPACK VAR INJECTION */
        (function(global) {



            module.exports = function(o) {
                return new Promise(function(rs) {
                    rs(o);
                });
            };
            global.process.AsyncLoader = function(md) {
                return new Promise(function(rs, rj) {
                    __webpack_require__.e ? __webpack_require__.e(md[0], function() {
                        md = __webpack_require__(md[1]);
                        rs(md.default || md);
                    }) : rs(__webpack_require__(md[1]));
                });
            };
            /* WEBPACK VAR INJECTION */
        }.call(exports, (function() {
            return this;
        }())))

        /***/
    },
    /* 7 */
    /***/
    function(module, exports, __webpack_require__) {



        var _reactNative = __webpack_require__(8);
        var _app = __webpack_require__(9);
        var _app2 = _interopRequireDefault(_app);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        _reactNative.AppRegistry.registerComponent('ReactNativeRouterFluxDemo', function() {
            return _app2.default;
        });

        /***/
    },
    /* 8 */
    /***/
    function(module, exports) {

        module.exports = ReactWeb;

        /***/
    },
    /* 9 */
    /***/
    function(module, exports, __webpack_require__) {

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _this = this;
        var _react = __webpack_require__(10);
        var _react2 = _interopRequireDefault(_react);
        var _reactNative = __webpack_require__(8);
        var _reactNativeRouterFlux = __webpack_require__(11);

        var _ScarletScreen = __webpack_require__(62);
        var _ScarletScreen2 = _interopRequireDefault(_ScarletScreen);
        var _GrayScreen = __webpack_require__(63);
        var _GrayScreen2 = _interopRequireDefault(_GrayScreen);
        var _BlueScreen = __webpack_require__(6)([1, 4]);
        var _BlueScreen2 = _interopRequireDefault(_BlueScreen);
        var _MaizeScreen = __webpack_require__(64);
        var _MaizeScreen2 = _interopRequireDefault(_MaizeScreen);
        var _GoldScreen = __webpack_require__(65);
        var _GoldScreen2 = _interopRequireDefault(_GoldScreen);
        var _BlackScreen = __webpack_require__(6)([0, 2]);
        var _BlackScreen2 = _interopRequireDefault(_BlackScreen);
        var _ModalScreen = __webpack_require__(66);
        var _ModalScreen2 = _interopRequireDefault(_ModalScreen);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }


        var TabIcon = function TabIcon(_ref) {
            var selected = _ref.selected,
                title = _ref.title;
            return (
                (_this && _this.createElement || _react2.default.createElement)(_reactNative.Text, {
                    style: {
                        color: selected ? 'red' : 'black'
                    }
                }, title));

        };

        var App = function App() {
            var _APP =  (
                (_this && _this.createElement || _react2.default.createElement)(_reactNativeRouterFlux.Router, null,
                    (_this && _this.createElement || _react2.default.createElement)(_reactNativeRouterFlux.Scene, {
                            key: 'root'
                        },

                        (_this && _this.createElement || _react2.default.createElement)(_reactNativeRouterFlux.Scene, {
                                key: 'tabbar',
                                tabs: true,
                                tabBarStyle: {
                                    backgroundColor: '#FFFFFF'
                                }
                            },


                            (_this && _this.createElement || _react2.default.createElement)(_reactNativeRouterFlux.Scene, {
                                    key: 'osu',
                                    title: 'OSU',
                                    icon: TabIcon
                                },
                                (_this && _this.createElement || _react2.default.createElement)(_reactNativeRouterFlux.Scene, {
                                    key: 'scarlet',
                                    component: _ScarletScreen2.default,
                                    title: 'Scarlet'
                                }),

                                (_this && _this.createElement || _react2.default.createElement)(_reactNativeRouterFlux.Scene, {
                                    key: 'gray',
                                    component: _GrayScreen2.default,
                                    title: 'Gray'
                                })),



                            (_this && _this.createElement || _react2.default.createElement)(_reactNativeRouterFlux.Scene, {
                                    key: 'um',
                                    title: 'UM',
                                    icon: TabIcon
                                },
                                (_this && _this.createElement || _react2.default.createElement)(_reactNativeRouterFlux.Scene, {
                                    key: 'blue',
                                    component: _BlueScreen2.default,
                                    title: 'Blue'
                                }),

                                (_this && _this.createElement || _react2.default.createElement)(_reactNativeRouterFlux.Scene, {
                                    key: 'maize',
                                    component: _MaizeScreen2.default,
                                    title: 'Maize'
                                })),



                            (_this && _this.createElement || _react2.default.createElement)(_reactNativeRouterFlux.Scene, {
                                    key: 'vu',
                                    title: 'VU',
                                    icon: TabIcon
                                },
                                (_this && _this.createElement || _react2.default.createElement)(_reactNativeRouterFlux.Scene, {
                                    key: 'gold',
                                    component: _GoldScreen2.default,
                                    title: 'Gold'
                                }),

                                (_this && _this.createElement || _react2.default.createElement)(_reactNativeRouterFlux.Scene, {
                                    key: 'black',
                                    component: _BlackScreen2.default,
                                    title: 'Black'
                                }))),



                        (_this && _this.createElement || _react2.default.createElement)(_reactNativeRouterFlux.Scene, {
                            key: 'modal',
                            direction: 'vertical',
                            component: _ModalScreen2.default,
                            title: 'Modal',
                            hideNavBar: true
                        }))));


    return _APP;
        };
        exports.default =

            App;

        /***/
    },
    /* 10 */
    /***/
    function(module, exports) {

        module.exports = qreact;

        /***/
    },
    /* 11 */
    /***/
    function(module, exports, __webpack_require__) {

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.Util = exports.getInitialState = exports.TabbedView = exports.TabBar = exports.Switch = exports.Scene = exports.Router = exports.Reducer = exports.NavBar = exports.Modal = exports.DefaultRenderer = exports.ActionConst = exports.Actions = undefined;
        var _Actions = __webpack_require__(12);
        var _Actions2 = _interopRequireDefault(_Actions);
        var _ActionConst = __webpack_require__(15);
        var ActionConst = _interopRequireWildcard(_ActionConst);
        var _DefaultRenderer = __webpack_require__(16);
        var _DefaultRenderer2 = _interopRequireDefault(_DefaultRenderer);
        var _TabbedView = __webpack_require__(19);
        var _TabbedView2 = _interopRequireDefault(_TabbedView);
        var _Modal = __webpack_require__(57);
        var _Modal2 = _interopRequireDefault(_Modal);
        var _NavBar = __webpack_require__(22);
        var _NavBar2 = _interopRequireDefault(_NavBar);
        var _Reducer = __webpack_require__(58);
        var _Reducer2 = _interopRequireDefault(_Reducer);
        var _Router = __webpack_require__(60);
        var _Router2 = _interopRequireDefault(_Router);
        var _Scene = __webpack_require__(14);
        var _Scene2 = _interopRequireDefault(_Scene);
        var _Switch = __webpack_require__(61);
        var _Switch2 = _interopRequireDefault(_Switch);
        var _TabBar = __webpack_require__(17);
        var _TabBar2 = _interopRequireDefault(_TabBar);
        var _State = __webpack_require__(59);
        var _State2 = _interopRequireDefault(_State);
        var _Util = __webpack_require__(13);
        var _Util2 = _interopRequireDefault(_Util);

        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
                return obj;
            } else {
                var newObj = {};
                if (obj != null) {
                    for (var key in obj) {
                        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                    }
                }
                newObj.default = obj;
                return newObj;
            }
        }

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        exports.


        Actions = _Actions2.default;
        exports.
        ActionConst = ActionConst;
        exports.
        DefaultRenderer = _DefaultRenderer2.default;
        exports.
        Modal = _Modal2.default;
        exports.
        NavBar = _NavBar2.default;
        exports.
        Reducer = _Reducer2.default;
        exports.
        Router = _Router2.default;
        exports.
        Scene = _Scene2.default;
        exports.
        Switch = _Switch2.default;
        exports.
        TabBar = _TabBar2.default;
        exports.
        TabbedView = _TabbedView2.default;
        exports.
        getInitialState = _State2.default;
        exports.
        Util = _Util2.default;

        /***/
    },
    /* 12 */
    /***/
    function(module, exports, __webpack_require__) {

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.ActionsTest = exports.ActionMap = undefined;
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        var _ActionMap;



        var _Util = __webpack_require__(13);
        var _Scene = __webpack_require__(14);
        var _Scene2 = _interopRequireDefault(_Scene);
        var _ActionConst = __webpack_require__(15);
        var ActionConst = _interopRequireWildcard(_ActionConst);

        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
                return obj;
            } else {
                var newObj = {};
                if (obj != null) {
                    for (var key in obj) {
                        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                    }
                }
                newObj.default = obj;
                return newObj;
            }
        }

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _objectWithoutProperties(obj, keys) {
            var target = {};
            for (var i in obj) {
                if (keys.indexOf(i) >= 0) continue;
                if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
                target[i] = obj[i];
            }
            return target;
        }

        function _toConsumableArray(arr) {
            if (Array.isArray(arr)) {
                for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                    arr2[i] = arr[i];
                }
                return arr2;
            } else {
                return Array.from(arr);
            }
        }

        function _defineProperty(obj, key, value) {
            if (key in obj) {
                Object.defineProperty(obj, key, {
                    value: value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
            } else {
                obj[key] = value;
            }
            return obj;
        }

        var ActionMap = exports.ActionMap = (_ActionMap = {
            jump: ActionConst.JUMP,
            push: ActionConst.PUSH,
            replace: ActionConst.REPLACE,
            back: ActionConst.BACK,
            BackAction: ActionConst.BACK_ACTION,
            popAndReplace: ActionConst.POP_AND_REPLACE,
            popTo: ActionConst.POP_TO,
            refresh: ActionConst.REFRESH,
            reset: ActionConst.RESET,
            focus: ActionConst.FOCUS,
            pushOrPop: ActionConst.PUSH_OR_POP
        }, _defineProperty(_ActionMap,
            ActionConst.JUMP, ActionConst.JUMP), _defineProperty(_ActionMap,
            ActionConst.PUSH, ActionConst.PUSH), _defineProperty(_ActionMap,
            ActionConst.REPLACE, ActionConst.REPLACE), _defineProperty(_ActionMap,
            ActionConst.BACK, ActionConst.BACK), _defineProperty(_ActionMap,
            ActionConst.BACK_ACTION, ActionConst.BACK_ACTION), _defineProperty(_ActionMap,
            ActionConst.POP_AND_REPLACE, ActionConst.POP_AND_REPLACE), _defineProperty(_ActionMap,
            ActionConst.POP_TO, ActionConst.POP_TO), _defineProperty(_ActionMap,
            ActionConst.REFRESH, ActionConst.REFRESH), _defineProperty(_ActionMap,
            ActionConst.RESET, ActionConst.RESET), _defineProperty(_ActionMap,
            ActionConst.FOCUS, ActionConst.FOCUS), _defineProperty(_ActionMap,
            ActionConst.PUSH_OR_POP, ActionConst.PUSH_OR_POP), _ActionMap);


        function filterParam(data) {
            if (data.toString() !== '[object Object]') {
                return {
                    data: data
                };
            }
            var proto = (data || {}).constructor.name;

            if (!data || proto !== 'Object') {
                return {};
            }
            return data;
        }

        var reservedKeys = [
            'create',
            'callback',
            'iterate',
            'current'
        ].concat(_toConsumableArray(
            Object.keys(ActionMap)));


        function getInheritProps(props) {
            var

                key = props.key,
                style = props.style,
                type = props.type,
                component = props.component,
                tabs = props.tabs,
                sceneKey = props.sceneKey,
                parent = props.parent,
                children = props.children,
                parentProps = _objectWithoutProperties(props, ['key', 'style', 'type', 'component', 'tabs', 'sceneKey', 'parent', 'children']);
            return parentProps.passProps ? parentProps : {};
        }
        var

            Actions = function() {
            function Actions() {
                _classCallCheck(this, Actions);
                this.callback = null;
                this.create = this.create.bind(this);
                this.iterate = this.iterate.bind(this);
                this.pop = this.pop.bind(this);
                this.refresh = this.refresh.bind(this);
                this.focus = this.focus.bind(this);
            }
            _createClass(Actions, [{
                key: 'iterate',
                value: function iterate(

                    root) {
                    var parentProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    var _this = this;
                    var refsParam = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                    var wrapBy = arguments[3];
                    var refs = refsParam;
                    (0, _Util.assert)(root.props, 'props should be defined for stack');
                    var key = root.key;
                    (0, _Util.assert)(key, 'unique key should be defined ');
                    (0, _Util.assert)(
                        reservedKeys.indexOf(key) === -1, '\'' +
                        key + '\' is not allowed as key name. Reserved keys: [' + reservedKeys.join(', ') + ']');
                    var _root$props =

                        root.props,
                        children = _root$props.children,
                        component = _root$props.component,
                        staticProps = _objectWithoutProperties(_root$props, ['children', 'component']);
                    var type = root.props.type || (parentProps.tabs ? ActionConst.JUMP : ActionConst.PUSH);
                    if (type === 'switch') {
                        type = ActionConst.JUMP;
                    }
                    var inheritProps = getInheritProps(parentProps);
                    var componentProps = component ? {
                        component: wrapBy(component)
                    } : {};

                    if (wrapBy) {
                        Object.keys(staticProps).forEach(function(prop) {
                            var componentClass = staticProps[prop];
                            if (componentClass && componentClass.prototype && componentClass.prototype.render) {
                                componentProps[prop] = wrapBy(componentClass);
                                delete staticProps[prop];
                            }
                        });
                    }
                    var res = _extends({
                            key: key,
                            name: key,
                            sceneKey: key,
                            parent: parentProps.key,
                            type: type
                        },
                        inheritProps,
                        staticProps,
                        componentProps);

                    var list = children || [];
                    var normalized = [];
                    if (!(list instanceof Array)) {
                        list = [list];
                    }
                    list.forEach(function(item) {
                        if (item) {
                            if (item instanceof Array) {
                                item.forEach(function(it) {
                                    normalized.push(it);
                                });
                            } else {
                                normalized.push(item);
                            }
                        }
                    });
                    list = normalized;

                    var condition = function condition(el) {
                        return !el.props.component && !el.props.children && !el.props.onPress && (!el.props.type || ActionMap[el.props.type] === ActionConst.REFRESH);
                    };

                    var baseKey = root.key;
                    var subStateParent = parentProps.key;
                    var subStates = list.filter(condition);
                    list = list.filter(function(el) {
                        return !condition(el);
                    });
                    if (list.length) {
                        res.children = list.map(function(c) {
                            return _this.iterate(c, res, refs, wrapBy).key;
                        });
                    } else {
                        if (!staticProps.onPress) {
                            (0, _Util.assert)(component, 'component property is not set for key=' + key);
                        }

                        if (parentProps.tabs) {
                            var innerKey = res.key + '_';
                            baseKey = innerKey;
                            subStateParent = res.key;
                            var inner = _extends({}, res, {
                                name: key,
                                key: innerKey,
                                sceneKey: innerKey,
                                type: ActionConst.PUSH,
                                parent: res.key
                            });
                            refs[innerKey] = inner;
                            res.children = [innerKey];
                            delete res.component;
                        }
                        res.index = 0;
                    }
                    var _loop = function _loop(

                        el) {
                        refs[el.key] = _extends({
                            key: el.key,
                            name: el.key
                        }, el.props, {
                            type: ActionConst.REFRESH,
                            base: baseKey,
                            parent: subStateParent
                        });
                        if (_this[el.key]) {
                            console.log('Key ' + el.key + ' is already defined!');
                        }
                        _this[el.key] =
                            function() {
                                var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                                (0, _Util.assert)(_this.callback, 'Actions.callback is not defined!');
                                _this.callback(_extends({
                                    key: el.key,
                                    type: ActionConst.REFRESH
                                }, filterParam(props)));
                            };
                    };
                    for (var _iterator = subStates, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();;) {
                        var _ref;
                        if (_isArray) {
                            if (_i >= _iterator.length) break;
                            _ref = _iterator[_i++];
                        } else {
                            _i = _iterator.next();
                            if (_i.done) break;
                            _ref = _i.value;
                        }
                        var el = _ref;
                        _loop(el);
                    }
                    if (this[key]) {
                        console.log('Key ' + key + ' is already defined!');
                    }
                    this[key] =
                        function() {
                            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                            (0, _Util.assert)(_this.callback, 'Actions.callback is not defined!');
                            _this.callback(_extends({
                                key: key,
                                type: type
                            }, filterParam(props)));
                        };
                    refs[res.key] = res;

                    return res;
                }
            }, {
                key: 'popTo',
                value: function popTo()

                {
                    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    return this.callback(_extends({}, filterParam(props), {
                        type: ActionConst.POP_TO
                    }));
                }
            }, {
                key: 'pop',
                value: function pop()

                {
                    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    return this.callback(_extends({}, filterParam(props), {
                        type: ActionConst.BACK_ACTION
                    }));
                }
            }, {
                key: 'jump',
                value: function jump()

                {
                    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    return this.callback(_extends({}, filterParam(props), {
                        type: ActionConst.JUMP
                    }));
                }
            }, {
                key: 'refresh',
                value: function refresh()

                {
                    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    return this.callback(_extends({}, filterParam(props), {
                        type: ActionConst.REFRESH
                    }));
                }
            }, {
                key: 'focus',
                value: function focus()

                {
                    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    return this.callback(_extends({}, filterParam(props), {
                        type: ActionConst.FOCUS
                    }));
                }
            }, {
                key: 'create',
                value: function create(

                    scene) {
                    var wrapBy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function(x) {
                        return x;
                    };
                    (0, _Util.assert)(scene, 'root scene should be defined');
                    var refs = {};
                    this.iterate(scene, {}, refs, wrapBy);
                    return refs;
                }
            }]);
            return Actions;
        }();
        exports.


        ActionsTest = Actions;
        exports.default =
            new Actions();

        /***/
    },
    /* 13 */
    /***/
    function(module, exports) {

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.

        deepestExplicitValueForKey = deepestExplicitValueForKey;
        exports.



        assert = assert;

        function deepestExplicitValueForKey(navigationState, key) {
            var current = void 0;
            var selected = navigationState;
            while (selected.hasOwnProperty('children')) {
                if (!selected.tabs) {
                    for (var i = 0; i < selected.index; i++) {
                        if (typeof selected.children[i][key] !== 'undefined') {
                            current = selected.children[i][key];
                        }
                    }
                }
                selected = selected.children[selected.index];
                if (typeof selected[key] !== 'undefined') {
                    current = selected[key];
                }
            }
            if (typeof current === 'undefined') {
                current = navigationState[key];
            }
            return current;
        }

        function assert(expr, failDescription) {
            if (!expr) {
                throw new Error('[react-native-router-flux] ' + failDescription);
            }
        }
        exports.default =

            {
                deepestExplicitValueForKey: deepestExplicitValueForKey,
                assert: assert
            };

        /***/
    },
    /* 14 */
    /***/
    function(module, exports, __webpack_require__) {

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();



        var _react = __webpack_require__(10);
        var _react2 = _interopRequireDefault(_react);
        var _reactNative = __webpack_require__(8);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var _class = function(_React$Component) {
            _inherits(_class, _React$Component);

            function _class() {
                _classCallCheck(this, _class);
                return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
            }
            _createClass(_class, [{
                key: 'render',
                value: function render()



                {
                    return null;
                }
            }]);
            return _class;
        }(_react2.default.Component);
        _class.propTypes = {
            tabBarStyle: _reactNative.View.propTypes.style,
            tabBarSelectedItemStyle: _reactNative.View.propTypes.style,
            tabBarIconContainerStyle: _reactNative.View.propTypes.style,
            tabBarShadowStyle: _reactNative.View.propTypes.style,
            tabSceneStyle: _reactNative.View.propTypes.style,
            tabStyle: _reactNative.View.propTypes.style,
            tabTitleStyle: _reactNative.Text.propTypes.style,
            tabSelectedTitleStyle: _reactNative.Text.propTypes.style,
            tabTitle: _react.PropTypes.string
        };
        exports.default = _class;

        /***/
    },
    /* 15 */
    /***/
    function(module, exports) {

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var JUMP = exports.JUMP = 'REACT_NATIVE_ROUTER_FLUX_JUMP';
        var PUSH = exports.PUSH = 'REACT_NATIVE_ROUTER_FLUX_PUSH';
        var PUSH_OR_POP = exports.PUSH_OR_POP = 'REACT_NATIVE_ROUTER_FLUX_PUSH_OR_POP';
        var REPLACE = exports.REPLACE = 'REACT_NATIVE_ROUTER_FLUX_REPLACE';
        var BACK = exports.BACK = 'REACT_NATIVE_ROUTER_FLUX_BACK';
        var BACK_ACTION = exports.BACK_ACTION = 'REACT_NATIVE_ROUTER_FLUX_BACK_ACTION';
        var POP_AND_REPLACE = exports.POP_AND_REPLACE = 'REACT_NATIVE_ROUTER_FLUX_POP_AND_REPLACE';
        var POP_TO = exports.POP_TO = 'REACT_NATIVE_ROUTER_FLUX_POP_TO';
        var REFRESH = exports.REFRESH = 'REACT_NATIVE_ROUTER_FLUX_REFRESH';
        var RESET = exports.RESET = 'REACT_NATIVE_ROUTER_FLUX_RESET';
        var FOCUS = exports.FOCUS = 'REACT_NATIVE_ROUTER_FLUX_FOCUS';

        /***/
    },
    /* 16 */
    /***/
    function(module, exports, __webpack_require__) {

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();



        var _react = __webpack_require__(10);
        var _react2 = _interopRequireDefault(_react);



        var _reactNative = __webpack_require__(8);



        var _TabBar = __webpack_require__(17);
        var _TabBar2 = _interopRequireDefault(_TabBar);
        var _NavBar = __webpack_require__(22);
        var _NavBar2 = _interopRequireDefault(_NavBar);
        var _Actions = __webpack_require__(12);
        var _Actions2 = _interopRequireDefault(_Actions);
        var _Util = __webpack_require__(13);
        var _reactNativeExperimentalNavigation = __webpack_require__(25);
        var _reactNativeExperimentalNavigation2 = _interopRequireDefault(_reactNativeExperimentalNavigation);
        var _reactAddonsPureRenderMixin = __webpack_require__(42);
        var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        var SCREEN_WIDTH = _reactNative.Dimensions.get('window').width;
        var


            NavigationAnimatedView = _reactNativeExperimentalNavigation2.default.AnimatedView,
            NavigationCard = _reactNativeExperimentalNavigation2.default.Card;
        var



            NavigationCardStackPanResponder =

            NavigationCard.CardStackPanResponder,
            NavigationCardStackStyleInterpolator = NavigationCard.CardStackStyleInterpolator;

        var styles = _reactNative.StyleSheet.create({
            animatedView: {
                flex: 1,
                backgroundColor: 'transparent'
            },

            sceneStyle: {
                flex: 1
            }
        });



        function fadeInScene(props) {
            var

                position =

                props.position,
                scene = props.scene;

            var index = scene.index;
            var inputRange = [index - 1, index, index + 1];

            var opacity = position.interpolate({
                inputRange: inputRange,
                outputRange: [0, 1, 0.3]
            });


            var scale = position.interpolate({
                inputRange: inputRange,
                outputRange: [1, 1, 0.95]
            });


            var translateY = 0;
            var translateX = 0;

            return {
                opacity: opacity,
                transform: [{
                    scale: scale
                }, {
                    translateX: translateX
                }, {
                    translateY: translateY
                }]
            };


        }

        function leftToRight(props) {
            var

                position =

                props.position,
                scene = props.scene;

            var index = scene.index;
            var inputRange = [index - 1, index, index + 1];

            var translateX = position.interpolate({
                inputRange: inputRange,
                outputRange: [-SCREEN_WIDTH, 0, 0]
            });


            return {
                transform: [{
                    translateX: translateX
                }]
            };


        }
        var

            DefaultRenderer = function(_Component) {
            _inherits(DefaultRenderer, _Component);



            function DefaultRenderer(props) {
                _classCallCheck(this, DefaultRenderer);
                var _this = _possibleConstructorReturn(this, (DefaultRenderer.__proto__ || Object.getPrototypeOf(DefaultRenderer)).call(this,
                    props));

                _this.shouldComponentUpdate = _reactAddonsPureRenderMixin2.default.shouldComponentUpdate.bind(_this);
                _this.renderCard = _this.renderCard.bind(_this);
                _this.renderScene = _this.renderScene.bind(_this);
                _this.renderHeader = _this.renderHeader.bind(_this);
                return _this;
            }
            _createClass(DefaultRenderer, [{
                key: 'getChildContext',
                value: function getChildContext()

                {
                    return {
                        navigationState: this.props.navigationState
                    };

                }
            }, {
                key: 'componentDidMount',
                value: function componentDidMount()

                {
                    this.dispatchFocusAction(this.props);
                }
            }, {
                key: 'componentWillReceiveProps',
                value: function componentWillReceiveProps(

                    nextProps) {
                    if (nextProps.navigationState !== this.props.navigationState) {
                        this.dispatchFocusAction(nextProps);
                    }
                }
            }, {
                key: 'getPanHandlers',
                value: function getPanHandlers(

                    direction, props) {
                    return direction === 'vertical' ?
                        NavigationCardStackPanResponder.forVertical(props) :
                        NavigationCardStackPanResponder.forHorizontal(props);
                }
            }, {
                key: 'dispatchFocusAction',
                value: function dispatchFocusAction(_ref)

                {
                    var navigationState = _ref.navigationState;
                    if (!navigationState || navigationState.component || navigationState.tabs) {
                        return;
                    }
                    var scene = navigationState.children[navigationState.index];
                    _Actions2.default.focus({
                        scene: scene
                    });
                }
            }, {
                key: 'chooseInterpolator',
                value: function chooseInterpolator(

                    direction, props) {
                    switch (direction) {
                        case 'vertical':
                            return NavigationCardStackStyleInterpolator.forVertical(props);
                        case 'fade':
                            return fadeInScene(props);
                        case 'leftToRight':
                            return leftToRight(props);
                        default:
                            return NavigationCardStackStyleInterpolator.forHorizontal(props);
                    }

                }
            }, {
                key: 'renderCard',
                value: function renderCard(

                    props) {
                    var _props$scene$navigati =



                        props.scene.navigationState,
                        key = _props$scene$navigati.key,
                        direction = _props$scene$navigati.direction,
                        animation = _props$scene$navigati.animation,
                        getSceneStyle = _props$scene$navigati.getSceneStyle,
                        getPanHandlers = _props$scene$navigati.getPanHandlers;

                    var state = props.navigationState;
                    var child = state.children[state.index];
                    var selected = state.children[state.index];
                    while (selected.hasOwnProperty('children')) {
                        selected = selected.children[selected.index];
                    }
                    var _selected =
                        selected,
                        panHandlers = _selected.panHandlers,
                        animationStyle = _selected.animationStyle;
                    var isActive = child === selected;
                    var computedProps = {
                        isActive: isActive
                    };
                    if (isActive) {
                        computedProps.hideNavBar = (0, _Util.deepestExplicitValueForKey)(props.navigationState, 'hideNavBar');
                        computedProps.hideTabBar = (0, _Util.deepestExplicitValueForKey)(props.navigationState, 'hideTabBar');
                    }

                    var style = getSceneStyle ? getSceneStyle(props, computedProps) : null;


                    var animType = animation && !direction ? animation : direction;

                    if (typeof animationStyle === 'undefined') {
                        animationStyle = this.chooseInterpolator(animType, props);
                    }

                    if (typeof animationStyle === 'function') {
                        animationStyle = animationStyle(props);
                    }

                    if (typeof panHandlers === 'undefined') {
                        panHandlers = getPanHandlers ?
                            getPanHandlers(props, direction) :
                            this.getPanHandlers(direction, props);
                    }
                    return (
                        (this && this.createElement || _react2.default.createElement)(NavigationCard, _extends({},
                            props, {
                                key: 'card_' + key,
                                style: [animationStyle, style],
                                panHandlers: panHandlers,
                                renderScene: this.renderScene
                            })));


                }
            }, {
                key: 'renderScene',
                value: function renderScene(

                    props) {
                    return (
                        (this && this.createElement || _react2.default.createElement)(DefaultRenderer, {
                            key: props.scene.navigationState.key,
                            onNavigate: props.onNavigate,
                            navigationState: props.scene.navigationState
                        }));


                }
            }, {
                key: 'renderHeader',
                value: function renderHeader(

                    props) {
                    var state = props.navigationState;
                    var child = state.children[state.index];
                    var selected = state.children[state.index];
                    while (selected.hasOwnProperty('children')) {
                        selected = selected.children[selected.index];
                    }
                    if (child !== selected) {

                        return null;
                    }
                    var hideNavBar = (0, _Util.deepestExplicitValueForKey)(state, 'hideNavBar');
                    if (hideNavBar) {

                        return null;
                    }



                    if (selected.component && selected.component.renderNavigationBar) {
                        return selected.component.renderNavigationBar(_extends({}, props, selected));
                    }

                    var HeaderComponent = selected.navBar || child.navBar || state.navBar || _NavBar2.default;
                    var navBarProps = _extends({}, state, child, selected);

                    if (selected.component && selected.component.onRight) {
                        navBarProps.onRight = selected.component.onRight;
                    }

                    if (selected.component && selected.component.onLeft) {
                        navBarProps.onLeft = selected.component.onLeft;
                    }

                    if ((navBarProps.leftTitle || navBarProps.leftButtonImage) && navBarProps.onLeft) {
                        delete navBarProps.leftButton;
                    }

                    if ((navBarProps.rightTitle || navBarProps.rightButtonImage) && navBarProps.onRight) {
                        delete navBarProps.rightButton;
                    }

                    if (navBarProps.rightButton) {
                        delete navBarProps.rightTitle;
                        delete navBarProps.onRight;
                        delete navBarProps.rightButtonImage;
                    }

                    if (navBarProps.leftButton) {
                        delete navBarProps.leftTitle;
                        delete navBarProps.onLeft;
                        delete navBarProps.leftButtonImage;
                    }
                    delete navBarProps.style;

                    var getTitle = selected.getTitle || function(opts) {
                        return opts.title;
                    };
                    return (this && this.createElement || _react2.default.createElement)(HeaderComponent, _extends({}, props, navBarProps, {
                        getTitle: getTitle
                    }));
                }
            }, {
                key: 'render',
                value: function render()

                {
                    var _props =
                        this.props,
                        navigationState = _props.navigationState,
                        onNavigate = _props.onNavigate;

                    if (!navigationState || !onNavigate) {
                        console.error('navigationState and onNavigate property should be not null');
                        return null;
                    }

                    var SceneComponent = navigationState.component;

                    if (navigationState.tabs && !SceneComponent) {
                        SceneComponent = _TabBar2.default;
                    }

                    if (SceneComponent) {
                        return (
                            (this && this.createElement || _react2.default.createElement)(_reactNative.View, {
                                    style: [styles.sceneStyle, navigationState.sceneStyle]
                                },

                                (this && this.createElement || _react2.default.createElement)(SceneComponent, _extends({}, this.props, navigationState))));


                    }

                    var optionals = {};
                    var selected = navigationState.children[navigationState.index];
                    var applyAnimation = selected.applyAnimation || navigationState.applyAnimation;
                    var style = selected.style || navigationState.style;

                    if (applyAnimation) {
                        optionals.applyAnimation = applyAnimation;
                    } else {
                        (function() {
                            var duration = selected.duration;
                            if (duration === null || duration === undefined) duration = navigationState.duration;
                            if (duration !== null && duration !== undefined) {
                                optionals.applyAnimation = function(pos, navState) {
                                    if (duration === 0) {
                                        pos.setValue(navState.index);
                                    } else {
                                        _reactNative.Animated.timing(pos, {
                                            toValue: navState.index,
                                            duration: duration
                                        }).start();
                                    }
                                };
                            }
                        })();
                    }



                    return (
                        (this && this.createElement || _react2.default.createElement)(NavigationAnimatedView, _extends({
                                navigationState: navigationState,
                                style: [styles.animatedView, style],
                                renderOverlay: this.renderHeader,
                                renderScene: this.renderCard
                            },
                            optionals)));


                }
            }]);
            return DefaultRenderer;
        }(_react.Component);
        DefaultRenderer.propTypes = {
            navigationState: _react.PropTypes.object,
            onNavigate: _react.PropTypes.func
        };
        DefaultRenderer.childContextTypes = {
            navigationState: _react.PropTypes.any
        };
        exports.default = DefaultRenderer;

        /***/
    },
    /* 17 */
    /***/
    function(module, exports, __webpack_require__) {

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        var _react = __webpack_require__(10);
        var _react2 = _interopRequireDefault(_react);
        var _reactNative = __webpack_require__(8);



        var _reactNativeTabs = __webpack_require__(18);
        var _reactNativeTabs2 = _interopRequireDefault(_reactNativeTabs);
        var _DefaultRenderer = __webpack_require__(16);
        var _DefaultRenderer2 = _interopRequireDefault(_DefaultRenderer);
        var _Actions = __webpack_require__(12);
        var _Actions2 = _interopRequireDefault(_Actions);
        var _TabbedView = __webpack_require__(19);
        var _TabbedView2 = _interopRequireDefault(_TabbedView);
        var _Util = __webpack_require__(13);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var

            TabBar = function(_Component) {
            _inherits(TabBar, _Component);



            function TabBar(props, context) {
                _classCallCheck(this, TabBar);
                var _this = _possibleConstructorReturn(this, (TabBar.__proto__ || Object.getPrototypeOf(TabBar)).call(this,
                    props, context));
                _this.renderScene = _this.renderScene.bind(_this);
                return _this;
            }
            _createClass(TabBar, [{
                key: 'onSelect',
                value: function onSelect(

                    el) {
                    if (!_Actions2.default[el.props.name]) {
                        throw new Error(
                            'No action is defined for name=' + el.props.name + ' ' + ('actions: ' +
                                JSON.stringify(Object.keys(_Actions2.default))));
                    }
                    if (typeof el.props.onPress === 'function') {
                        el.props.onPress();
                    } else {
                        _Actions2.default[el.props.name]();
                    }
                }
            }, {
                key: 'renderScene',
                value: function renderScene(

                    navigationState) {
                    return (
                        (this && this.createElement || _react2.default.createElement)(_DefaultRenderer2.default, {
                            key: navigationState.key,
                            onNavigate: this.props.onNavigate,
                            navigationState: navigationState
                        }));


                }
            }, {
                key: 'render',
                value: function render()

                {
                    var _this2 = this;
                    var state = this.props.navigationState;
                    var selected = state.children[state.index];

                    var hideTabBar = this.props.unmountScenes ||
                        (0, _Util.deepestExplicitValueForKey)(state, 'hideTabBar') ||
                        this.props.hideOnChildTabs && (0, _Util.deepestExplicitValueForKey)(selected, 'tabs');

                    var contents =
                        (this && this.createElement || _react2.default.createElement)(_reactNativeTabs2.default, _extends({
                                style: state.tabBarStyle,
                                selectedIconStyle: state.tabBarSelectedItemStyle,
                                iconStyle: state.tabBarIconContainerStyle,
                                onSelect: this.onSelect
                            }, state, {
                                selected: selected.sceneKey,
                                pressOpacity: this.props.pressOpacity
                            }),

                            state.children.filter(function(el) {
                                return el.icon || _this2.props.tabIcon;
                            }).map(function(el) {
                                var Icon = el.icon || _this2.props.tabIcon;
                                return (_this2 && _this2.createElement || _react2.default.createElement)(Icon, _extends({}, _this2.props, el));
                            }));


                    return (
                        (this && this.createElement || _react2.default.createElement)(_reactNative.View, {
                                style: {
                                    flex: 1
                                }
                            },

                            (this && this.createElement || _react2.default.createElement)(_TabbedView2.default, {
                                navigationState: this.props.navigationState,
                                style: {
                                    flex: 1
                                },
                                renderScene: this.renderScene
                            }),

                            !hideTabBar && state.children.filter(function(el) {
                                return el.icon;
                            }).length > 0 && (
                                state.tabBarBackgroundImage ?
                                (this && this.createElement || _react2.default.createElement)(_reactNative.Image, {
                                        source: state.tabBarBackgroundImage
                                    },
                                    contents) :

                                contents)));



                }
            }]);
            return TabBar;
        }(_react.Component);
        TabBar.propTypes = {
            navigationState: _react.PropTypes.object,
            tabIcon: _react.PropTypes.any,
            onNavigate: _react.PropTypes.func,
            unmountScenes: _react.PropTypes.bool,
            pressOpacity: _react.PropTypes.number,
            hideOnChildTabs: _react.PropTypes.bool
        };
        exports.default =



            TabBar;

        /***/
    },
    /* 18 */
    /***/
    function(module, exports, __webpack_require__) {

        'use strict';
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();

        var _react = __webpack_require__(10);
        var _react2 = _interopRequireDefault(_react);



        var _reactNative = __webpack_require__(8);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var



            Tabs = function(_Component) {
            _inherits(Tabs, _Component);

            function Tabs() {
                _classCallCheck(this, Tabs);
                return _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));
            }
            _createClass(Tabs, [{
                key: 'onSelect',
                value: function onSelect(
                    el) {
                    if (el.props.onSelect) {
                        el.props.onSelect(el);
                    } else if (this.props.onSelect) {
                        this.props.onSelect(el);
                    }
                }
            }, {
                key: 'render',
                value: function render()

                {
                    var _this2 = this;
                    var self = this;
                    var selected = this.props.selected;
                    if (!selected) {
                        _react2.default.Children.forEach(this.props.children.filter(function(c) {
                            return c;
                        }), function(el) {
                            if (!selected || el.props.initial) {
                                selected = el.props.name || el.key;
                            }
                        });
                    }
                    return (
                        (this && this.createElement || _react2.default.createElement)(_reactNative.View, {
                                style: [styles.tabbarView, this.props.style]
                            },
                            _react2.default.Children.map(this.props.children.filter(function(c) {
                                return c;
                            }), function(el) {
                                return (
                                    (_this2 && _this2.createElement || _react2.default.createElement)(_reactNative.TouchableOpacity, {
                                            key: el.props.name + "touch",
                                            style: [styles.iconView, _this2.props.iconStyle, (el.props.name || el.key) == selected ? _this2.props.selectedIconStyle || el.props.selectedIconStyle || {} : {}],
                                            onPress: function onPress() {
                                                return !self.props.locked && self.onSelect(el);
                                            },
                                            onLongPress: function onLongPress() {
                                                return self.onSelect(el);
                                            },
                                            activeOpacity: el.props.pressOpacity
                                        },
                                        selected == (el.props.name || el.key) ? _react2.default.cloneElement(el, {
                                            selected: true,
                                            style: [el.props.style, _this2.props.selectedStyle, el.props.selectedStyle]
                                        }) : el));
                            })));



                }
            }]);
            return Tabs;
        }(_react.Component);

        var styles = _reactNative.StyleSheet.create({
            tabbarView: {
                position: 'absolute',
                bottom: 0,
                right: 0,
                left: 0,
                height: 50,
                opacity: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            },

            iconView: {
                flex: 1,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center'
            }
        });



        module.exports = Tabs;

        /***/
    },
    /* 19 */
    /***/
    function(module, exports, __webpack_require__) {

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        var _react = __webpack_require__(10);
        var _react2 = _interopRequireDefault(_react);
        var _reactNative = __webpack_require__(8);
        var _reactStaticContainer = __webpack_require__(20);
        var _reactStaticContainer2 = _interopRequireDefault(_reactStaticContainer);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        var styles = _reactNative.StyleSheet.create({
            scene: {
                bottom: 0,
                left: 0,
                position: 'absolute',
                right: 0,
                top: 0
            }
        });
        var



            TabbedView = function(_Component) {
            _inherits(TabbedView, _Component);



            function TabbedView(props, context) {
                _classCallCheck(this, TabbedView);
                var _this = _possibleConstructorReturn(this, (TabbedView.__proto__ || Object.getPrototypeOf(TabbedView)).call(this,
                    props, context));
                _this.renderedSceneKeys = {};
                _this.renderScene = _this.renderScene.bind(_this);
                return _this;
            }
            _createClass(TabbedView, [{
                key: 'renderScene',
                value: function renderScene(

                    navigationState, index) {
                    var isSelected = index === this.props.navigationState.index;
                    return (
                        (this && this.createElement || _react2.default.createElement)(_reactNative.View, {
                                key: navigationState.key,
                                pointerEvents: isSelected ? 'auto' : 'none',
                                removeClippedSubviews: !isSelected,
                                style: [
                                    styles.scene, {
                                        opacity: isSelected ? 1 : 0
                                    }
                                ]
                            },


                            (this && this.createElement || _react2.default.createElement)(_reactStaticContainer2.default, {
                                    shouldUpdate: isSelected
                                },
                                this.props.renderScene(navigationState, index))));



                }
            }, {
                key: 'render',
                value: function render()

                {
                    var _this2 = this;
                    var scenes = [];
                    var _props$navigationStat =
                        this.props.navigationState,
                        index = _props$navigationStat.index,
                        children = _props$navigationStat.children;
                    children.forEach(function(item, i) {
                        var key = item.key;
                        if (i !== index && !_this2.renderedSceneKeys[key]) {
                            return;
                        }
                        _this2.renderedSceneKeys[key] = true;
                        scenes.push(_this2.renderScene(item, i));
                    });
                    return (
                        (this && this.createElement || _react2.default.createElement)(_reactNative.View, {
                                style: this.props.style
                            },
                            scenes));


                }
            }]);
            return TabbedView;
        }(_react.Component);
        TabbedView.propTypes = {
            navigationState: _react.PropTypes.object.isRequired,
            renderScene: _react.PropTypes.func.isRequired,
            style: _reactNative.View.propTypes.style
        };
        exports.default =



            TabbedView;

        /***/
    },
    /* 20 */
    /***/
    function(module, exports, __webpack_require__) {



        module.exports = __webpack_require__(21);

        /***/
    },
    /* 21 */
    /***/
    function(module, exports, __webpack_require__) {



        'use strict';

        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ('value' in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();

        var _get = function get(_x, _x2, _x3) {
            var _again = true;
            _function: while (_again) {
                var object = _x,
                    property = _x2,
                    receiver = _x3;
                _again = false;
                if (object === null) object = Function.prototype;
                var desc = Object.getOwnPropertyDescriptor(object, property);
                if (desc === undefined) {
                    var parent = Object.getPrototypeOf(object);
                    if (parent === null) {
                        return undefined;
                    } else {
                        _x = parent;
                        _x2 = property;
                        _x3 = receiver;
                        _again = true;
                        desc = parent = undefined;
                        continue _function;
                    }
                } else if ('value' in desc) {
                    return desc.value;
                } else {
                    var getter = desc.get;
                    if (getter === undefined) {
                        return undefined;
                    }
                    return getter.call(receiver);
                }
            }
        };

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
                throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        var React = __webpack_require__(10);



        var StaticContainer = function(_React$Component) {
            _inherits(StaticContainer, _React$Component);

            function StaticContainer() {
                _classCallCheck(this, StaticContainer);

                _get(Object.getPrototypeOf(StaticContainer.prototype), 'constructor', this).apply(this, arguments);
            }

            _createClass(StaticContainer, [{
                key: 'shouldComponentUpdate',
                value: function shouldComponentUpdate(nextProps) {
                    return !!nextProps.shouldUpdate;
                }
            }, {
                key: 'render',
                value: function render() {
                    var child = this.props.children;
                    if (child === null || child === false) {
                        return null;
                    }
                    return React.Children.only(child);
                }
            }]);


            return StaticContainer;
        }(React.Component);

        module.exports = StaticContainer;

        /***/
    },
    /* 22 */
    /***/
    function(module, exports, __webpack_require__) {

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };



        var _react = __webpack_require__(10);
        var _react2 = _interopRequireDefault(_react);


        var _reactNative = __webpack_require__(8);



        var _Actions = __webpack_require__(12);
        var _Actions2 = _interopRequireDefault(_Actions);
        var _menu_burger = __webpack_require__(23);
        var _menu_burger2 = _interopRequireDefault(_menu_burger);
        var _back_chevron = __webpack_require__(24);
        var _back_chevron2 = _interopRequireDefault(_back_chevron);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        var styles = _reactNative.StyleSheet.create({
            title: {
                textAlign: 'center',
                color: '#0A0A0A',
                fontSize: 18,
                width: 180,
                alignSelf: 'center'
            },

            titleWrapper: _extends({
                    marginTop: 10,
                    position: 'absolute'
                },
                _reactNative.Platform.select({
                    ios: {
                        top: 20
                    },

                    android: {
                        top: 5
                    }
                }), {


                    left: 0,
                    right: 0
                }),

            header: _extends({
                    backgroundColor: '#EFEFF2',
                    paddingTop: 0,
                    top: 0
                },
                _reactNative.Platform.select({
                    ios: {
                        height: 64
                    },

                    android: {
                        height: 54
                    }
                }), {


                    right: 0,
                    left: 0,
                    borderBottomWidth: 0.5,
                    borderBottomColor: '#828287',
                    position: 'absolute'
                }),

            backButton: _extends({
                    width: 100,
                    height: 37,
                    position: 'absolute'
                },
                _reactNative.Platform.select({
                    ios: {
                        top: 22
                    },

                    android: {
                        top: 10
                    }
                }), {


                    left: 2,
                    padding: 8,
                    flexDirection: 'row'
                }),

            rightButton: _extends({
                    width: 100,
                    height: 37,
                    position: 'absolute'
                },
                _reactNative.Platform.select({
                    ios: {
                        top: 22
                    },

                    android: {
                        top: 10
                    }
                }), {


                    right: 2,
                    padding: 8
                }),

            leftButton: _extends({
                    width: 100,
                    height: 37,
                    position: 'absolute'
                },
                _reactNative.Platform.select({
                    ios: {
                        top: 20
                    },

                    android: {
                        top: 8
                    }
                }), {


                    left: 2,
                    padding: 8
                }),

            barRightButtonText: {
                color: 'rgb(0, 122, 255)',
                textAlign: 'right',
                fontSize: 17
            },

            barBackButtonText: {
                color: 'rgb(0, 122, 255)',
                textAlign: 'left',
                fontSize: 17,
                paddingLeft: 6
            },

            barLeftButtonText: {
                color: 'rgb(0, 122, 255)',
                textAlign: 'left',
                fontSize: 17
            },

            backButtonImage: {
                width: 13,
                height: 21
            },

            rightButtonIconStyle: {},


            defaultImageStyle: {
                height: 24,
                resizeMode: 'contain'
            }
        });



        var propTypes = {
            navigationState: _react.PropTypes.object,
            backButtonImage: _reactNative.Image.propTypes.source,
            wrapBy: _react.PropTypes.any,
            component: _react.PropTypes.any,
            backButtonTextStyle: _reactNative.Text.propTypes.style,
            leftButtonStyle: _reactNative.View.propTypes.style,
            leftButtonIconStyle: _reactNative.Image.propTypes.style,
            getTitle: _react.PropTypes.func,
            titleWrapperStyle: _reactNative.Text.propTypes.style,
            titleStyle: _reactNative.Text.propTypes.style,
            titleOpacity: _react.PropTypes.number,
            titleProps: _react.PropTypes.any,
            position: _react.PropTypes.object,
            navigationBarStyle: _reactNative.View.propTypes.style,
            navigationBarBackgroundImage: _reactNative.Image.propTypes.source,
            renderTitle: _react.PropTypes.any
        };


        var contextTypes = {
            drawer: _react.PropTypes.object
        };


        var defaultProps = {
            drawerImage: _menu_burger2.default,
            backButtonImage: _back_chevron2.default,
            titleOpacity: 1
        };
        var


            NavBar = function(_React$Component) {
            _inherits(NavBar, _React$Component);

            function NavBar(props) {
                _classCallCheck(this, NavBar);
                var _this = _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this,
                    props));

                _this.renderRightButton = _this.renderRightButton.bind(_this);
                _this.renderBackButton = _this.renderBackButton.bind(_this);
                _this.renderLeftButton = _this.renderLeftButton.bind(_this);
                _this.renderTitle = _this.renderTitle.bind(_this);
                return _this;
            }
            _createClass(NavBar, [{
                key: 'renderBackButton',
                value: function renderBackButton()

                {
                    var state = this.props.navigationState;
                    var childState = state.children[state.index];
                    var BackButton = childState.component && childState.component.backButton || state.backButton ||
                        childState.backButton;
                    var textButtonStyle = [
                        styles.barBackButtonText,
                        this.props.backButtonTextStyle,
                        state.backButtonTextStyle,
                        childState.backButtonTextStyle
                    ];

                    var style = [
                        styles.backButton,
                        this.props.leftButtonStyle,
                        state.leftButtonStyle,
                        childState.leftButtonStyle
                    ];


                    if (state.index === 0 && (!state.parentIndex || state.parentIndex === 0)) {
                        return null;
                    }

                    if (BackButton) {
                        return (
                            (this && this.createElement || _react2.default.createElement)(BackButton, _extends({
                                    testID: 'backNavButton',
                                    textButtonStyle: textButtonStyle
                                },
                                childState, {
                                    style: style
                                })));


                    }
                    var buttonImage = childState.backButtonImage ||
                        state.backButtonImage || this.props.backButtonImage;
                    var onPress = childState.onBack || childState.component.onBack;
                    if (onPress) {
                        onPress = onPress.bind(null, state);
                    } else {
                        onPress = _Actions2.default.pop;
                    }

                    var text = childState.backTitle ?
                        (this && this.createElement || _react2.default.createElement)(_reactNative.Text, {
                                style: textButtonStyle
                            },
                            childState.backTitle) :

                        null;

                    return (
                        (this && this.createElement || _react2.default.createElement)(_reactNative.TouchableOpacity, {
                                testID: 'backNavButton',
                                style: style,
                                onPress: onPress
                            },

                            buttonImage && !childState.hideBackImage &&
                            (this && this.createElement || _react2.default.createElement)(_reactNative.Image, {
                                source: buttonImage,
                                style: [
                                    styles.backButtonImage,
                                    this.props.leftButtonIconStyle,
                                    state.barButtonIconStyle,
                                    state.leftButtonIconStyle,
                                    childState.leftButtonIconStyle
                                ]
                            }),



                            text));


                }
            }, {
                key: 'renderRightButton',
                value: function renderRightButton(

                    navProps) {
                    var self = this;

                    function tryRender(state, wrapBy) {
                        if (!state) {
                            return null;
                        }
                        var rightTitle = state.getRightTitle ? state.getRightTitle(navProps) : state.rightTitle;

                        var textStyle = [styles.barRightButtonText, self.props.rightButtonTextStyle,
                            state.rightButtonTextStyle
                        ];
                        var style = [styles.rightButton, self.props.rightButtonStyle, state.rightButtonStyle];
                        if (state.rightButton) {
                            var Button = state.rightButton;
                            if (wrapBy) {
                                Button = wrapBy(Button);
                            }
                            return (
                                (this && this.createElement || _react2.default.createElement)(Button, _extends({},
                                    self.props,
                                    state, {
                                        key: 'rightNavBarBtn',
                                        testID: 'rightNavButton',
                                        style: style,
                                        textButtonStyle: textStyle
                                    })));


                        }
                        if (state.onRight && (rightTitle || state.rightButtonImage)) {
                            var onPress = state.onRight.bind(null, state);
                            return (
                                (this && this.createElement || _react2.default.createElement)(_reactNative.TouchableOpacity, {
                                        key: 'rightNavBarBtn',
                                        testID: 'rightNavButton',
                                        style: style,
                                        onPress: onPress
                                    },

                                    rightTitle &&
                                    (this && this.createElement || _react2.default.createElement)(_reactNative.Text, {
                                            style: textStyle
                                        },
                                        rightTitle),


                                    state.rightButtonImage &&
                                    (this && this.createElement || _react2.default.createElement)(_reactNative.View, {
                                            style: {
                                                flex: 1,
                                                justifyContent: 'center',
                                                alignItems: 'flex-end'
                                            }
                                        },
                                        (this && this.createElement || _react2.default.createElement)(_reactNative.Image, {
                                            source: state.rightButtonImage,
                                            style: state.rightButtonIconStyle
                                        }))));



                        }
                        if (!!state.onRight ^ !!(typeof rightTitle !== 'undefined' ||
                                typeof state.rightButtonImage !== 'undefined')) {
                            console.warn('Both onRight and rightTitle/rightButtonImage\n            must be specified for the scene: ' +

                                state.name);

                        }
                        return null;
                    }
                    return tryRender(this.props.component, this.props.wrapBy) || tryRender(this.props);
                }
            }, {
                key: 'renderLeftButton',
                value: function renderLeftButton(

                    navProps) {
                    var self = this;
                    var drawer = this.context.drawer;

                    function tryRender(state, wrapBy) {
                        var onPress = state.onLeft;
                        var buttonImage = state.leftButtonImage;
                        var menuIcon = state.drawerIcon;
                        var style = [styles.leftButton, self.props.leftButtonStyle, state.leftButtonStyle];
                        var textStyle = [styles.barLeftButtonText, self.props.leftButtonTextStyle,
                            state.leftButtonTextStyle
                        ];
                        var leftButtonStyle = [styles.defaultImageStyle, state.leftButtonIconStyle];
                        var leftTitle = state.getLeftTitle ? state.getLeftTitle(navProps) : state.leftTitle;

                        if (state.leftButton) {
                            var Button = state.leftButton;
                            if (wrapBy) {
                                Button = wrapBy(Button);
                            }
                            return (
                                (this && this.createElement || _react2.default.createElement)(Button, _extends({},
                                    self.props,
                                    state, {
                                        key: 'leftNavBarBtn',
                                        testID: 'leftNavButton',
                                        style: style,
                                        textStyle: textStyle
                                    })));


                        }

                        if (!onPress && !!drawer && typeof drawer.toggle === 'function') {
                            buttonImage = state.drawerImage;
                            if (buttonImage || menuIcon) {
                                onPress = drawer.toggle;
                            }
                            if (!menuIcon) {
                                menuIcon =
                                    (this && this.createElement || _react2.default.createElement)(_reactNative.Image, {
                                        source: buttonImage,
                                        style: leftButtonStyle
                                    });


                            }
                        }

                        if (onPress && (leftTitle || buttonImage)) {
                            onPress = onPress.bind(null, state);
                            return (
                                (this && this.createElement || _react2.default.createElement)(_reactNative.TouchableOpacity, {
                                        key: 'leftNavBarBtn',
                                        testID: 'leftNavButton',
                                        style: style,
                                        onPress: onPress
                                    },

                                    leftTitle &&
                                    (this && this.createElement || _react2.default.createElement)(_reactNative.Text, {
                                            style: textStyle
                                        },
                                        leftTitle),


                                    buttonImage &&
                                    (this && this.createElement || _react2.default.createElement)(_reactNative.View, {
                                            style: {
                                                flex: 1,
                                                justifyContent: 'center',
                                                alignItems: 'flex-start'
                                            }
                                        },
                                        menuIcon || (this && this.createElement || _react2.default.createElement)(_reactNative.Image, {
                                            source: buttonImage,
                                            style: state.leftButtonIconStyle || styles.defaultImageStyle
                                        }))));



                        }
                        if (!!state.onLeft ^ !!(leftTitle || buttonImage)) {
                            console.warn('Both onLeft and leftTitle/leftButtonImage\n            must be specified for the scene: ' +

                                state.name);

                        }
                        return null;
                    }
                    return tryRender(this.props.component, this.props.wrapBy) || tryRender(this.props);
                }
            }, {
                key: 'renderTitle',
                value: function renderTitle(

                    childState, index) {
                    var title = this.props.getTitle ? this.props.getTitle(childState) : childState.title;
                    if (title === undefined && childState.component && childState.component.title) {
                        title = childState.component.title;
                    }
                    if (typeof title === 'function') {
                        title = title(childState);
                    }
                    return (
                        (this && this.createElement || _react2.default.createElement)(_reactNative.Animated.View, {
                                key: childState.key,
                                style: [
                                    styles.titleWrapper,
                                    this.props.titleWrapperStyle
                                ]
                            },


                            (this && this.createElement || _react2.default.createElement)(_reactNative.Animated.Text, _extends({
                                        lineBreakMode: 'tail',
                                        numberOfLines: 1
                                    },
                                    this.props.titleProps, {
                                        style: [
                                            styles.title,
                                            this.props.titleStyle,
                                            this.props.navigationState.titleStyle,
                                            childState.titleStyle, {
                                                opacity: this.props.position.interpolate({
                                                    inputRange: [index - 1, index, index + 1],
                                                    outputRange: [0, this.props.titleOpacity, 0]
                                                }),

                                                left: this.props.position.interpolate({
                                                    inputRange: [index - 1, index + 1],
                                                    outputRange: [200, -200]
                                                }),

                                                right: this.props.position.interpolate({
                                                    inputRange: [index - 1, index + 1],
                                                    outputRange: [-200, 200]
                                                })
                                            }
                                        ]
                                    }),



                                title)));



                }
            }, {
                key: 'render',
                value: function render()

                {
                    var _this2 = this;
                    var state = this.props.navigationState;
                    var selected = state.children[state.index];
                    while (selected.hasOwnProperty('children')) {
                        state = selected;
                        selected = selected.children[selected.index];
                    }
                    var navProps = _extends({}, this.props, selected);

                    var wrapByStyle = function wrapByStyle(component, wrapStyle) {
                        if (!component) {
                            return null;
                        }
                        return function(props) {
                            return (_this2 && _this2.createElement || _react2.default.createElement)(_reactNative.View, {
                                style: wrapStyle
                            }, component(props));
                        };
                    };

                    var leftButtonStyle = [styles.leftButton, {
                        alignItems: 'flex-start'
                    }];
                    var rightButtonStyle = [styles.rightButton, {
                        alignItems: 'flex-end'
                    }];

                    var renderLeftButton = wrapByStyle(selected.renderLeftButton, leftButtonStyle) ||
                        wrapByStyle(selected.component.renderLeftButton, leftButtonStyle) ||
                        this.renderLeftButton;
                    var renderRightButton = wrapByStyle(selected.renderRightButton, rightButtonStyle) ||
                        wrapByStyle(selected.component.renderRightButton, rightButtonStyle) ||
                        this.renderRightButton;
                    var renderBackButton = wrapByStyle(selected.renderBackButton, leftButtonStyle) ||
                        wrapByStyle(selected.component.renderBackButton, leftButtonStyle) ||
                        this.renderBackButton;
                    var renderTitle = selected.renderTitle ||
                        selected.component.renderTitle ||
                        this.props.renderTitle;
                    var navigationBarBackgroundImage = this.props.navigationBarBackgroundImage ||
                        state.navigationBarBackgroundImage;
                    var contents =
                        (this && this.createElement || _react2.default.createElement)(_reactNative.View, null,
                            renderTitle ? renderTitle(navProps) : state.children.map(this.renderTitle, this),
                            renderBackButton(navProps) || renderLeftButton(navProps),
                            renderRightButton(navProps));


                    return (
                        (this && this.createElement || _react2.default.createElement)(_reactNative.Animated.View, {
                                style: [
                                    styles.header,
                                    this.props.navigationBarStyle,
                                    state.navigationBarStyle,
                                    selected.navigationBarStyle
                                ]
                            },


                            navigationBarBackgroundImage ?
                            (this && this.createElement || _react2.default.createElement)(_reactNative.Image, {
                                    source: navigationBarBackgroundImage
                                },
                                contents) :

                            contents));


                }
            }]);
            return NavBar;
        }(_react2.default.Component);


        NavBar.propTypes = propTypes;
        NavBar.contextTypes = contextTypes;
        NavBar.defaultProps = defaultProps;
        exports.default =

            NavBar;

        /***/
    },
    /* 23 */
    /***/
    function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "menu_burger@cee669edfce514f6aec2377aad74be49.png";

        /***/
    },
    /* 24 */
    /***/
    function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "back_chevron@fb13fafd1da1ad19e708c53cfad2e514.png";

        /***/
    },
    /* 25 */
    /***/
    function(module, exports, __webpack_require__) {



        'use strict';

        var NavigationAnimatedView = __webpack_require__(26);
        var NavigationCard = __webpack_require__(33);
        var NavigationCardStack = __webpack_require__(46);
        var NavigationContainer = __webpack_require__(27);
        var NavigationHeader = __webpack_require__(48);
        var NavigationLegacyNavigator = null;
        var NavigationReducer = __webpack_require__(52);
        var NavigationRootContainer = __webpack_require__(28);
        var NavigationStateUtils = __webpack_require__(30);
        var NavigationView = __webpack_require__(56);
        var NavigationPropTypes = __webpack_require__(29);

        var NavigationExperimental = {

            StateUtils: NavigationStateUtils,
            Reducer: NavigationReducer,


            Container: NavigationContainer,
            RootContainer: NavigationRootContainer,


            View: NavigationView,
            AnimatedView: NavigationAnimatedView,


            Card: NavigationCard,
            CardStack: NavigationCardStack,
            Header: NavigationHeader,
            LegacyNavigator: NavigationLegacyNavigator,

            PropTypes: NavigationPropTypes
        };


        module.exports = NavigationExperimental;

        /***/
    },
    /* 26 */
    /***/
    function(module, exports, __webpack_require__) {



        'use strict';
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        var Animated = __webpack_require__(8).Animated;
        var NavigationContainer = __webpack_require__(27);
        var NavigationPropTypes = __webpack_require__(29);
        var NavigationScenesReducer = __webpack_require__(32);
        var React = __webpack_require__(10);
        var StyleSheet = __webpack_require__(8).StyleSheet;
        var View = __webpack_require__(8).View;
        var



            PropTypes = React.PropTypes;

        function applyDefaultAnimation(
            position,
            navigationState) {
            Animated.spring(
                position, {
                    bounciness: 0,
                    toValue: navigationState.index
                }).

            start();
        }
        var

            NavigationAnimatedView = function(_React$Component) {
            _inherits(NavigationAnimatedView, _React$Component);



            function NavigationAnimatedView(props, context) {
                _classCallCheck(this, NavigationAnimatedView);
                var _this = _possibleConstructorReturn(this, (NavigationAnimatedView.__proto__ || Object.getPrototypeOf(NavigationAnimatedView)).call(this,
                    props, context));



                var layout = {
                    height: new Animated.Value(0),
                    initHeight: 0,
                    initWidth: 0,
                    isMeasured: false,
                    width: new Animated.Value(0)
                };


                _this.state = {
                    layout: layout,
                    position: new Animated.Value(_this.props.navigationState.index),
                    scenes: NavigationScenesReducer([], _this.props.navigationState)
                };
                return _this;

            }
            _createClass(NavigationAnimatedView, [{
                key: 'componentWillMount',
                value: function componentWillMount()

                {
                    this._onLayout = this._onLayout.bind(this);
                    this._onProgressChange = this._onProgressChange.bind(this);
                }
            }, {
                key: 'componentDidMount',
                value: function componentDidMount()

                {
                    this._positionListener =
                        this.state.position.addListener(this._onProgressChange);
                }
            }, {
                key: 'componentWillReceiveProps',
                value: function componentWillReceiveProps(

                    nextProps) {
                    if (nextProps.navigationState !== this.props.navigationState) {
                        this.setState({
                            scenes: NavigationScenesReducer(
                                this.state.scenes,
                                nextProps.navigationState,
                                this.props.navigationState)
                        });


                    }
                }
            }, {
                key: 'componentDidUpdate',
                value: function componentDidUpdate(

                    lastProps) {
                    if (lastProps.navigationState.index !== this.props.navigationState.index) {
                        this.props.applyAnimation(
                            this.state.position,
                            this.props.navigationState,
                            lastProps.navigationState);

                    }
                }
            }, {
                key: 'componentWillUnmount',
                value: function componentWillUnmount()

                {
                    this.state.position.removeListener(this._positionListener);
                }
            }, {
                key: '_onProgressChange',
                value: function _onProgressChange(

                    data) {
                    var delta = Math.abs(data.value - this.props.navigationState.index);
                    if (delta > Number.EPSILON) {
                        return;
                    }

                    var scenes = this.state.scenes.filter(function(scene) {
                        return !scene.isStale;
                    });

                    if (scenes.length !== this.state.scenes.length) {
                        this.setState({
                            scenes: scenes
                        });
                    }
                }
            }, {
                key: 'render',
                value: function render()

                {
                    var overlay = this._renderOverlay();
                    var scenes = this._renderScenes();
                    return (
                        (this && this.createElement || React.createElement)(View, {
                                onLayout: this._onLayout,
                                style: this.props.style
                            },
                            (this && this.createElement || React.createElement)(View, {
                                    style: styles.scenes,
                                    key: 'scenes'
                                },
                                scenes),

                            overlay));


                }
            }, {
                key: '_renderScenes',
                value: function _renderScenes()

                {
                    return this.state.scenes.map(this._renderScene, this);
                }
            }, {
                key: '_renderScene',
                value: function _renderScene(

                    scene) {
                    var _props =



                        this.props,
                        navigationState = _props.navigationState,
                        onNavigate = _props.onNavigate,
                        renderScene = _props.renderScene;
                    var _state =



                        this.state,
                        position = _state.position,
                        scenes = _state.scenes;

                    return renderScene({
                        layout: this.state.layout,
                        navigationState: navigationState,
                        onNavigate: onNavigate,
                        position: position,
                        scene: scene,
                        scenes: scenes
                    });

                }
            }, {
                key: '_renderOverlay',
                value: function _renderOverlay()

                {
                    if (this.props.renderOverlay) {
                        var _props2 =



                            this.props,
                            _navigationState = _props2.navigationState,
                            _onNavigate = _props2.onNavigate,
                            _renderOverlay2 = _props2.renderOverlay;
                        var _state2 =



                            this.state,
                            _position = _state2.position,
                            _scenes = _state2.scenes;

                        return _renderOverlay2({
                            layout: this.state.layout,
                            navigationState: _navigationState,
                            onNavigate: _onNavigate,
                            position: _position,
                            scene: _scenes[_navigationState.index],
                            scenes: _scenes
                        });

                    }
                    return null;
                }
            }, {
                key: '_onLayout',
                value: function _onLayout(

                    event) {
                    var _event$nativeEvent$la =
                        event.nativeEvent.layout,
                        height = _event$nativeEvent$la.height,
                        width = _event$nativeEvent$la.width;

                    var layout = _extends({},
                        this.state.layout, {
                            initHeight: height,
                            initWidth: width,
                            isMeasured: true
                        });


                    layout.height.setValue(height);
                    layout.width.setValue(width);

                    this.setState({
                        layout: layout
                    });
                }
            }]);
            return NavigationAnimatedView;
        }(React.Component);
        NavigationAnimatedView.propTypes = {
            applyAnimation: PropTypes.func,
            navigationState: NavigationPropTypes.navigationState.isRequired,
            onNavigate: PropTypes.func.isRequired,
            renderOverlay: PropTypes.func,
            renderScene: PropTypes.func.isRequired
        };
        NavigationAnimatedView.defaultProps = {
            applyAnimation: applyDefaultAnimation
        };


        var styles = StyleSheet.create({
            scenes: {
                flex: 1
            }
        });



        NavigationAnimatedView = NavigationContainer.create(NavigationAnimatedView);

        module.exports = NavigationAnimatedView;

        /***/
    },
    /* 27 */
    /***/
    function(module, exports, __webpack_require__) {



        'use strict';
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        var React = __webpack_require__(10);
        var NavigationRootContainer = __webpack_require__(28);

        function createNavigationContainer(
            Component) {
            var
                NavigationComponent = function(_React$Component) {
                    _inherits(NavigationComponent, _React$Component);

                    function NavigationComponent() {
                        _classCallCheck(this, NavigationComponent);
                        return _possibleConstructorReturn(this, (NavigationComponent.__proto__ || Object.getPrototypeOf(NavigationComponent)).apply(this, arguments));
                    }
                    _createClass(NavigationComponent, [{
                        key: 'render',
                        value: function render() {
                            return (
                                (this && this.createElement || React.createElement)(Component, _extends({
                                        onNavigate: this.getNavigationHandler()
                                    },
                                    this.props)));


                        }
                    }, {
                        key: 'getNavigationHandler',
                        value: function getNavigationHandler() {
                            return this.props.onNavigate || this.context.onNavigate;
                        }
                    }, {
                        key: 'getChildContext',
                        value: function getChildContext() {
                            return {
                                onNavigate: this.getNavigationHandler()
                            };

                        }
                    }]);
                    return NavigationComponent;
                }(React.Component);

            NavigationComponent.contextTypes = {
                onNavigate: React.PropTypes.func
            };

            NavigationComponent.childContextTypes = {
                onNavigate: React.PropTypes.func
            };

            return NavigationComponent;
        }

        var NavigationContainer = {
            create: createNavigationContainer,
            RootContainer: NavigationRootContainer
        };



        module.exports = NavigationContainer;

        /***/
    },
    /* 28 */
    /***/
    function(module, exports, __webpack_require__) {



        'use strict';
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        var AsyncStorage = __webpack_require__(8).AsyncStorage;
        var Linking = __webpack_require__(8).Linking;
        var NavigationPropTypes = __webpack_require__(29);
        var NavigationStateUtils = __webpack_require__(30);
        var Platform = __webpack_require__(8).Platform;
        var React = __webpack_require__(10);



        function getBackAction() {
            return {
                type: 'BackAction'
            };
        }
        var

            PropTypes = React.PropTypes;
        var

            NavigationRootContainer = function(_React$Component) {
            _inherits(NavigationRootContainer, _React$Component);



            function NavigationRootContainer(props) {
                _classCallCheck(this, NavigationRootContainer);
                var _this = _possibleConstructorReturn(this, (NavigationRootContainer.__proto__ || Object.getPrototypeOf(NavigationRootContainer)).call(this,
                    props));

                var navState = null;
                if (!_this.props.persistenceKey) {
                    navState = NavigationStateUtils.getParent(
                        _this.props.reducer(null, props.initialAction));

                }
                _this.state = {
                    navState: navState
                };
                return _this;
            }
            _createClass(NavigationRootContainer, [{
                key: 'componentWillMount',
                value: function componentWillMount()

                {
                    this.handleNavigation = this.handleNavigation.bind(this);
                    this._handleOpenURLEvent = this._handleOpenURLEvent.bind(this);
                }
            }, {
                key: 'componentDidMount',
                value: function componentDidMount()

                {
                    var _this2 = this;
                    if (this.props.linkingActionMap) {
                        Linking.getInitialURL().then(this._handleOpenURL.bind(this));
                        Platform.OS === 'ios' && Linking.addEventListener('url', this._handleOpenURLEvent);
                    }
                    if (this.props.persistenceKey) {
                        AsyncStorage.getItem(this.props.persistenceKey, function(err, storedString) {
                            if (err || !storedString) {
                                _this2.setState({

                                    navState: _this2.props.reducer(null, _this2.props.initialAction)
                                });

                                return;
                            }
                            _this2.setState({
                                navState: JSON.parse(storedString)
                            });

                        });
                    }
                }
            }, {
                key: 'componentWillUnmount',
                value: function componentWillUnmount()

                {
                    if (Platform.OS === 'ios') {
                        Linking.removeEventListener('url', this._handleOpenURLEvent);
                    }
                }
            }, {
                key: '_handleOpenURLEvent',
                value: function _handleOpenURLEvent(

                    event) {
                    this._handleOpenURL(event.url);
                }
            }, {
                key: '_handleOpenURL',
                value: function _handleOpenURL(

                    url) {
                    if (!this.props.linkingActionMap) {
                        return;
                    }
                    var action = this.props.linkingActionMap(url);
                    if (action) {
                        this.handleNavigation(action);
                    }
                }
            }, {
                key: 'getChildContext',
                value: function getChildContext()

                {
                    return {
                        onNavigate: this.handleNavigation
                    };

                }
            }, {
                key: 'handleNavigation',
                value: function handleNavigation(

                    action) {
                    var _this3 = this;
                    var navState = isStateResolved(this.props.reducer(this.state.navState, action));
                    if (navState === this.state.navState) {
                        return false;
                    }
                    typeof navState.then === 'function' ? navState.then(function(navState) {
                        _this3.setState({
                            navState: navState
                        });

                    }) : this.setState({

                        navState: navState
                    });


                    if (this.props.persistenceKey) {
                        AsyncStorage.setItem(this.props.persistenceKey, JSON.stringify(navState));
                    }

                    return true;
                }
            }, {
                key: 'render',
                value: function render()

                {
                    var navigation = this.props.renderNavigation(
                        this.state.navState,
                        this.handleNavigation);

                    return navigation;
                }
            }]);
            return NavigationRootContainer;
        }(React.Component);
        NavigationRootContainer.propTypes = {
            initialAction: NavigationPropTypes.action.isRequired,
            linkingActionMap: PropTypes.func,
            persistenceKey: PropTypes.string,
            reducer: PropTypes.func.isRequired,
            renderNavigation: PropTypes.func.isRequired
        };
        NavigationRootContainer.defaultProps = {
            initialAction: {
                type: 'RootContainerInitialAction'
            }
        };
        NavigationRootContainer.childContextTypes = {
            onNavigate: PropTypes.func
        };
        NavigationRootContainer.getBackAction = getBackAction;


        function isStateResolved(state) {
            var
                children = state.children,
                index = state.index;
            if (!children || !children[index]) return state;
            var current = children[index],
                component = current.component;
            if (component && component.then) {
                return component.then(function(name) {
                    return window.process.AsyncLoader(name).then(function(component) {
                        current.component = component;
                        return state;
                    });
                });
            }
            var subState = isStateResolved(current);
            return typeof subState.then === 'function' ? subState.then(function() {
                return state;
            }) : state;
        }

        module.exports = NavigationRootContainer;

        /***/
    },
    /* 29 */
    /***/
    function(module, exports, __webpack_require__) {



        'use strict';



        var Animated = __webpack_require__(8).Animated;
        var React = __webpack_require__(10);
        var

            PropTypes = React.PropTypes;


        var action = PropTypes.shape({
            type: PropTypes.string.isRequired
        });



        var animatedValue = PropTypes.instanceOf(Animated.Value);


        var navigationState = PropTypes.shape({
            key: PropTypes.string.isRequired
        });



        var navigationParentState = PropTypes.shape({
            index: PropTypes.number.isRequired,
            key: PropTypes.string.isRequired,
            children: PropTypes.arrayOf(navigationState)
        });



        var layout = PropTypes.shape({
            height: animatedValue,
            initHeight: PropTypes.number.isRequired,
            initWidth: PropTypes.number.isRequired,
            isMeasured: PropTypes.bool.isRequired,
            width: animatedValue
        });



        var scene = PropTypes.shape({
            index: PropTypes.number.isRequired,
            isStale: PropTypes.bool.isRequired,
            key: PropTypes.string.isRequired,
            navigationState: navigationState
        });



        var SceneRendererProps = {
            layout: layout.isRequired,
            navigationState: navigationParentState.isRequired,
            onNavigate: PropTypes.func.isRequired,
            position: animatedValue.isRequired,
            scene: scene.isRequired,
            scenes: PropTypes.arrayOf(scene).isRequired
        };


        var SceneRenderer = PropTypes.shape(SceneRendererProps);


        var panHandlers = PropTypes.shape({
            onMoveShouldSetResponder: PropTypes.func.isRequired,
            onMoveShouldSetResponderCapture: PropTypes.func.isRequired,
            onResponderEnd: PropTypes.func.isRequired,
            onResponderGrant: PropTypes.func.isRequired,
            onResponderMove: PropTypes.func.isRequired,
            onResponderReject: PropTypes.func.isRequired,
            onResponderRelease: PropTypes.func.isRequired,
            onResponderStart: PropTypes.func.isRequired,
            onResponderTerminate: PropTypes.func.isRequired,
            onResponderTerminationRequest: PropTypes.func.isRequired,
            onStartShouldSetResponder: PropTypes.func.isRequired,
            onStartShouldSetResponderCapture: PropTypes.func.isRequired
        });



        function extractSceneRendererProps(
            props) {
            return {
                layout: props.layout,
                navigationState: props.navigationState,
                onNavigate: props.onNavigate,
                position: props.position,
                scene: props.scene,
                scenes: props.scenes
            };

        }

        module.exports = {

            extractSceneRendererProps: extractSceneRendererProps,


            SceneRendererProps: SceneRendererProps,


            action: action,
            navigationParentState: navigationParentState,
            navigationState: navigationState,
            panHandlers: panHandlers,
            SceneRenderer: SceneRenderer
        };

        /***/
    },
    /* 30 */
    /***/
    function(module, exports, __webpack_require__) {



        'use strict';
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };

        function _toConsumableArray(arr) {
            if (Array.isArray(arr)) {
                for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                    arr2[i] = arr[i];
                }
                return arr2;
            } else {
                return Array.from(arr);
            }
        }

        var invariant = __webpack_require__(31);



        function getParent(state) {
            if (
                state instanceof Object &&
                state.children instanceof Array &&
                state.children[0] !== undefined &&
                typeof state.index === 'number' &&
                state.children[state.index] !== undefined) {
                return state;
            }
            return null;
        }

        function get(state, key) {
            var parentState = getParent(state);
            if (!parentState) {
                return null;
            }
            var childState = parentState.children.find(function(child) {
                return child.key === key;
            });
            return childState || null;
        }

        function indexOf(state, key) {
            var parentState = getParent(state);
            if (!parentState) {
                return null;
            }
            var index = parentState.children.map(function(child) {
                return child.key;
            }).indexOf(key);
            if (index === -1) {
                return null;
            }
            return index;
        }

        function push(state, newChildState) {
            var lastChildren = state.children;
            return _extends({},
                state, {
                    children: [].concat(_toConsumableArray(
                        lastChildren), [
                        newChildState
                    ]),

                    index: lastChildren.length
                });

        }

        function pop(state) {
            var lastChildren = state.children;
            return _extends({},
                state, {
                    children: lastChildren.slice(0, lastChildren.length - 1),
                    index: lastChildren.length - 2
                });

        }

        function reset(state, nextChildren, nextIndex) {
            var parentState = getParent(state);
            if (!parentState) {
                return state;
            }
            var children = nextChildren || parentState.children;
            var index = nextIndex == null ? parentState.index : nextIndex;
            if (children === parentState.children && index === parentState.index) {
                return state;
            }
            return _extends({},
                parentState, {
                    children: children,
                    index: index
                });

        }

        function set(state, key, nextChildren, nextIndex) {
            if (!state) {
                return {
                    children: nextChildren,
                    index: nextIndex,
                    key: key
                };

            }
            var parentState = getParent(state);
            if (!parentState) {
                return {
                    children: nextChildren,
                    index: nextIndex,
                    key: key
                };

            }
            if (nextChildren === parentState.children && nextIndex === parentState.index && key === parentState.key) {
                return parentState;
            }
            return _extends({},
                parentState, {
                    children: nextChildren,
                    index: nextIndex,
                    key: key
                });

        }

        function jumpToIndex(state, index) {
            var parentState = getParent(state);
            if (parentState && parentState.index === index) {
                return parentState;
            }
            return _extends({},
                parentState, {
                    index: index
                });

        }

        function jumpTo(state, key) {
            var parentState = getParent(state);
            if (!parentState) {
                return state;
            }
            var index = parentState.children.indexOf(parentState.children.find(function(child) {
                return child.key === key;
            }));
            invariant(
                index !== -1,
                'Cannot find child with matching key in this NavigationState');

            return _extends({},
                parentState, {
                    index: index
                });

        }

        function replaceAt(state, key, newState) {
            var parentState = getParent(state);
            if (!parentState) {
                return state;
            }
            var children = [].concat(_toConsumableArray(parentState.children));
            var index = parentState.children.indexOf(parentState.children.find(function(child) {
                return child.key === key;
            }));
            invariant(
                index !== -1,
                'Cannot find child with matching key in this NavigationState');

            children[index] = newState;
            return _extends({},
                parentState, {
                    children: children
                });

        }

        function replaceAtIndex(state, index, newState) {
            var parentState = getParent(state);
            if (!parentState) {
                return state;
            }
            var children = [].concat(_toConsumableArray(parentState.children));
            children[index] = newState;
            return _extends({},
                parentState, {
                    children: children
                });

        }

        var NavigationStateUtils = {
            getParent: getParent,
            get: get,
            indexOf: indexOf,
            push: push,
            pop: pop,
            reset: reset,
            set: set,
            jumpToIndex: jumpToIndex,
            jumpTo: jumpTo,
            replaceAt: replaceAt,
            replaceAtIndex: replaceAtIndex
        };


        module.exports = NavigationStateUtils;

        /***/
    },
    /* 31 */
    /***/
    function(module, exports, __webpack_require__) {



        'use strict';



        var validateFormat = function validateFormat(format) {};

        if (false) {
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
                    error = new Error(format.replace(/%s/g, function() {
                        return args[argIndex++];
                    }));
                    error.name = 'Invariant Violation';
                }

                error.framesToPop = 1;
                throw error;
            }
        }

        module.exports = invariant;

        /***/
    },
    /* 32 */
    /***/
    function(module, exports, __webpack_require__) {



        'use strict';

        var invariant = __webpack_require__(31);



        var SCENE_KEY_PREFIX = 'scene_';



        function compareKey(one, two) {
            var delta = one.length - two.length;
            if (delta > 0) {
                return 1;
            }
            if (delta < 0) {
                return -1;
            }
            return one > two ? 1 : -1;
        }



        function compareScenes(
            one,
            two) {
            if (one.index > two.index) {
                return 1;
            }
            if (one.index < two.index) {
                return -1;
            }

            return compareKey(
                one.key,
                two.key);

        }

        function areScenesShallowEqual(
            one,
            two) {
            return (
                one.key === two.key &&
                one.index === two.index &&
                one.isStale === two.isStale &&
                one.navigationState === two.navigationState &&
                one.navigationState.key === two.navigationState.key);

        }

        function NavigationScenesReducer(
            scenes,
            nextState,
            prevState) {

            var prevScenes = new Map();
            var freshScenes = new Map();
            var staleScenes = new Map();


            scenes.forEach(function(scene) {
                var
                    key = scene.key;
                if (scene.isStale) {
                    staleScenes.set(key, scene);
                }
                prevScenes.set(key, scene);
            });

            var nextKeys = new Set();
            nextState.children.forEach(function(navigationState, index) {
                var key = SCENE_KEY_PREFIX + navigationState.key;
                var scene = {
                    index: index,
                    isStale: false,
                    key: key,
                    navigationState: navigationState
                };

                invariant(!nextKeys.has(key),
                    'navigationState.children[' + index + '].key "' + key + '" conflicts with' +
                    'another child!');

                nextKeys.add(key);

                if (staleScenes.has(key)) {


                    staleScenes.delete(key);
                }
                freshScenes.set(key, scene);
            });

            if (prevState) {

                prevState.children.forEach(function(navigationState, index) {
                    var key = SCENE_KEY_PREFIX + navigationState.key;
                    if (freshScenes.has(key)) {
                        return;
                    }
                    staleScenes.set(key, {
                        index: index,
                        isStale: true,
                        key: key,
                        navigationState: navigationState
                    });

                });
            }

            var nextScenes = [];

            var mergeScene = function mergeScene(nextScene) {
                var
                    key = nextScene.key;
                var prevScene = prevScenes.has(key) ? prevScenes.get(key) : null;
                if (prevScene && areScenesShallowEqual(prevScene, nextScene)) {


                    nextScenes.push(prevScene);
                } else {
                    nextScenes.push(nextScene);
                }
            };

            staleScenes.forEach(mergeScene);
            freshScenes.forEach(mergeScene);

            return nextScenes.sort(compareScenes);
        }

        module.exports = NavigationScenesReducer;

        /***/
    },
    /* 33 */
    /***/
    function(module, exports, __webpack_require__) {



        'use strict';
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();

        function _objectWithoutProperties(obj, keys) {
            var target = {};
            for (var i in obj) {
                if (keys.indexOf(i) >= 0) continue;
                if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
                target[i] = obj[i];
            }
            return target;
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        var Animated = __webpack_require__(8).Animated;
        var NavigationCardStackPanResponder = __webpack_require__(34);
        var NavigationCardStackStyleInterpolator = __webpack_require__(37);
        var NavigationContainer = __webpack_require__(27);
        var NavigationPagerPanResponder = __webpack_require__(38);
        var NavigationPagerStyleInterpolator = __webpack_require__(39);
        var NavigationPointerEventsContainer = __webpack_require__(40);
        var NavigationPropTypes = __webpack_require__(29);
        var React = __webpack_require__(10);
        var ReactComponentWithPureRenderMixin = __webpack_require__(42);
        var StyleSheet = __webpack_require__(8).StyleSheet;
        var View = __webpack_require__(8).View;
        var



            PropTypes = React.PropTypes;
        var

            SceneView = function(_React$Component) {
            _inherits(SceneView, _React$Component);

            function SceneView() {
                _classCallCheck(this, SceneView);
                return _possibleConstructorReturn(this, (SceneView.__proto__ || Object.getPrototypeOf(SceneView)).apply(this, arguments));
            }
            _createClass(SceneView, [{
                key: 'shouldComponentUpdate',
                value: function shouldComponentUpdate(



                    nextProps, nextState) {
                    return (
                        nextProps.sceneRendererProps.scene.navigationState !==
                        this.props.sceneRendererProps.scene.navigationState);

                }
            }, {
                key: 'render',
                value: function render()

                {
                    return this.props.sceneRenderer(this.props.sceneRendererProps);
                }
            }]);
            return SceneView;
        }(React.Component);
        SceneView.propTypes = {
            sceneRenderer: PropTypes.func.isRequired,
            sceneRendererProps: NavigationPropTypes.SceneRenderer
        };
        var



            NavigationCard = function(_React$Component2) {
            _inherits(NavigationCard, _React$Component2);

            function NavigationCard() {
                _classCallCheck(this, NavigationCard);
                return _possibleConstructorReturn(this, (NavigationCard.__proto__ || Object.getPrototypeOf(NavigationCard)).apply(this, arguments));
            }
            _createClass(NavigationCard, [{
                key: 'shouldComponentUpdate',
                value: function shouldComponentUpdate(



                    nextProps, nextState) {
                    return ReactComponentWithPureRenderMixin.shouldComponentUpdate.call(
                        this,
                        nextProps,
                        nextState);

                }
            }, {
                key: 'render',
                value: function render()

                {
                    var _props =



                        this.props,
                        panHandlers = _props.panHandlers,
                        pointerEvents = _props.pointerEvents,
                        renderScene = _props.renderScene,
                        style = _props.style,
                        props = _objectWithoutProperties(_props, ['panHandlers', 'pointerEvents', 'renderScene', 'style']);

                    var viewStyle = style === undefined ?
                        NavigationCardStackStyleInterpolator.forHorizontal(props) :
                        style;

                    var viewPanHandlers = panHandlers === undefined ?
                        NavigationCardStackPanResponder.forHorizontal(props) :
                        panHandlers;

                    return (
                        (this && this.createElement || React.createElement)(Animated.View, _extends({},
                                viewPanHandlers, {
                                    pointerEvents: pointerEvents,
                                    ref: this.props.onComponentRef,
                                    style: [styles.main, viewStyle]
                                }),
                            (this && this.createElement || React.createElement)(SceneView, {
                                sceneRenderer: renderScene,
                                sceneRendererProps: props
                            })));



                }
            }]);
            return NavigationCard;
        }(React.Component);
        NavigationCard.propTypes = _extends({}, NavigationPropTypes.SceneRendererProps, {
            onComponentRef: PropTypes.func.isRequired,
            panHandlers: NavigationPropTypes.panHandlers,
            pointerEvents: PropTypes.string.isRequired,
            renderScene: PropTypes.func.isRequired,
            style: PropTypes.any
        });


        var styles = StyleSheet.create({
            main: {
                backgroundColor: 'white',
                bottom: 0,
                left: 0,
                position: 'absolute',
                right: 0,
                top: 0
            }
        });



        NavigationCard = NavigationPointerEventsContainer.create(NavigationCard);
        NavigationCard = NavigationContainer.create(NavigationCard);


        NavigationCard.CardStackPanResponder = NavigationCardStackPanResponder;
        NavigationCard.CardStackStyleInterpolator = NavigationCardStackStyleInterpolator;
        NavigationCard.PagerPanResponder = NavigationPagerPanResponder;
        NavigationCard.PagerStyleInterpolator = NavigationPagerStyleInterpolator;

        module.exports = NavigationCard;

        /***/
    },
    /* 34 */
    /***/
    function(module, exports, __webpack_require__) {



        'use strict';
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        var Animated = __webpack_require__(8).Animated;
        var NavigationAbstractPanResponder = __webpack_require__(35);

        var clamp = __webpack_require__(36);



        var ANIMATION_DURATION = 250;



        var POSITION_THRESHOLD = 1 / 3;



        var RESPOND_THRESHOLD = 15;



        var RESPOND_POSITION_MAX_HORIZONTAL = 30;
        var RESPOND_POSITION_MAX_VERTICAL = null;



        var DISTANCE_THRESHOLD = 100;



        var Directions = {
            'HORIZONTAL': 'horizontal',
            'VERTICAL': 'vertical'
        };



        var Actions = {



            BACK: {
                type: 'back'
            }
        };
        var



            NavigationCardStackPanResponder = function(_NavigationAbstractPa) {
            _inherits(NavigationCardStackPanResponder, _NavigationAbstractPa);



            function NavigationCardStackPanResponder(
                direction,
                props) {
                _classCallCheck(this, NavigationCardStackPanResponder);
                var _this = _possibleConstructorReturn(this, (NavigationCardStackPanResponder.__proto__ || Object.getPrototypeOf(NavigationCardStackPanResponder)).call(this));

                _this._isResponding = false;
                _this._isVertical = direction === Directions.VERTICAL;
                _this._props = props;
                _this._startValue = 0;
                return _this;
            }
            _createClass(NavigationCardStackPanResponder, [{
                key: 'onMoveShouldSetPanResponder',
                value: function onMoveShouldSetPanResponder(

                    event, gesture) {
                    var props = this._props;

                    if (props.navigationState.index !== props.scene.index) {
                        return false;
                    }

                    var layout = props.layout;
                    var isVertical = this._isVertical;
                    var index = props.navigationState.index;
                    var currentDragDistance = gesture[isVertical ? 'dy' : 'dx'];
                    var currentDragPosition = gesture[isVertical ? 'moveY' : 'moveX'];
                    var maxDragDistance = isVertical ?
                        layout.height.__getValue() :
                        layout.width.__getValue();

                    var positionMax = isVertical ?
                        RESPOND_POSITION_MAX_VERTICAL :
                        RESPOND_POSITION_MAX_HORIZONTAL;

                    if (positionMax != null && currentDragPosition > positionMax) {
                        return false;
                    }

                    return (
                        Math.abs(currentDragDistance) > RESPOND_THRESHOLD &&
                        maxDragDistance > 0 &&
                        index > 0);

                }
            }, {
                key: 'onPanResponderGrant',
                value: function onPanResponderGrant()

                {
                    var _this2 = this;
                    this._isResponding = false;
                    this._props.position.stopAnimation(function(value) {
                        _this2._isResponding = true;
                        _this2._startValue = value;
                    });
                }
            }, {
                key: 'onPanResponderMove',
                value: function onPanResponderMove(

                    event, gesture) {
                    if (!this._isResponding) {
                        return;
                    }

                    var props = this._props;
                    var layout = props.layout;
                    var isVertical = this._isVertical;
                    var axis = isVertical ? 'dy' : 'dx';
                    var index = props.navigationState.index;
                    var distance = isVertical ?
                        layout.height.__getValue() :
                        layout.width.__getValue();

                    var value = clamp(
                        index - 1,
                        this._startValue - gesture[axis] / distance,
                        index);


                    props.position.setValue(value);
                }
            }, {
                key: 'onPanResponderRelease',
                value: function onPanResponderRelease(

                    event, gesture) {
                    var _this3 = this;
                    if (!this._isResponding) {
                        return;
                    }

                    this._isResponding = false;

                    var props = this._props;
                    var isVertical = this._isVertical;
                    var axis = isVertical ? 'dy' : 'dx';
                    var index = props.navigationState.index;
                    var distance = gesture[axis];

                    props.position.stopAnimation(function(value) {
                        _this3._reset();
                        if (distance > DISTANCE_THRESHOLD || value <= index - POSITION_THRESHOLD) {
                            props.onNavigate(Actions.BACK);
                        }
                    });
                }
            }, {
                key: 'onPanResponderTerminate',
                value: function onPanResponderTerminate()

                {
                    this._isResponding = false;
                    this._reset();
                }
            }, {
                key: '_reset',
                value: function _reset()

                {
                    var props = this._props;
                    Animated.timing(
                        props.position, {
                            toValue: props.navigationState.index,
                            duration: ANIMATION_DURATION
                        }).

                    start();
                }
            }]);
            return NavigationCardStackPanResponder;
        }(NavigationAbstractPanResponder);


        function createPanHandlers(
            direction,
            props) {
            var responder = new NavigationCardStackPanResponder(direction, props);
            return responder.panHandlers;
        }

        function forHorizontal(
            props) {
            return createPanHandlers(Directions.HORIZONTAL, props);
        }

        function forVertical(
            props) {
            return createPanHandlers(Directions.VERTICAL, props);
        }

        module.exports = {

            ANIMATION_DURATION: ANIMATION_DURATION,
            DISTANCE_THRESHOLD: DISTANCE_THRESHOLD,
            POSITION_THRESHOLD: POSITION_THRESHOLD,
            RESPOND_THRESHOLD: RESPOND_THRESHOLD,


            Actions: Actions,
            Directions: Directions,


            forHorizontal: forHorizontal,
            forVertical: forVertical
        };

        /***/
    },
    /* 35 */
    /***/
    function(module, exports, __webpack_require__) {



        'use strict';

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var PanResponder = __webpack_require__(8).PanResponder;

        var invariant = __webpack_require__(31);



        var EmptyPanHandlers = {
            onMoveShouldSetPanResponder: null,
            onPanResponderGrant: null,
            onPanResponderMove: null,
            onPanResponderRelease: null,
            onPanResponderTerminate: null
        };
        var



            NavigationAbstractPanResponder =



            function NavigationAbstractPanResponder() {
                var _this = this;
                _classCallCheck(this, NavigationAbstractPanResponder);
                var config = {};
                Object.keys(EmptyPanHandlers).forEach(function(name) {
                    var fn = _this[name];

                    invariant(
                        typeof fn === 'function',
                        'subclass of `NavigationAbstractPanResponder` must implement method %s',
                        name);


                    config[name] = fn.bind(_this);
                }, this);

                this.panHandlers = PanResponder.create(config).panHandlers;
            };


        module.exports = NavigationAbstractPanResponder;

        /***/
    },
    /* 36 */
    /***/
    function(module, exports) {



        function clamp(min, value, max) {
            if (value < min) {
                return min;
            }
            if (value > max) {
                return max;
            }
            return value;
        }

        module.exports = clamp;

        /***/
    },
    /* 37 */
    /***/
    function(module, exports) {



        'use strict';



        function forInitial(props) {
            var

                navigationState =

                props.navigationState,
                scene = props.scene;

            var focused = navigationState.index === scene.index;
            var opacity = focused ? 1 : 0;

            var translate = focused ? 0 : 1000000;
            return {
                opacity: opacity,
                transform: [{
                    translateX: translate
                }, {
                    translateY: translate
                }]
            };


        }

        function forHorizontal(props) {
            var

                layout =


                props.layout,
                position = props.position,
                scene = props.scene;

            if (!layout.isMeasured) {
                return forInitial(props);
            }

            var index = scene.index;
            var inputRange = [index - 1, index, index + 1];
            var width = layout.initWidth;

            var opacity = position.interpolate({
                inputRange: inputRange,
                outputRange: [1, 1, 0.3]
            });


            var scale = position.interpolate({
                inputRange: inputRange,
                outputRange: [1, 1, 0.95]
            });


            var translateY = 0;
            var translateX = position.interpolate({
                inputRange: inputRange,
                outputRange: [width, 0, -10]
            });


            return {
                opacity: opacity,
                transform: [{
                    scale: scale
                }, {
                    translateX: translateX
                }, {
                    translateY: translateY
                }]
            };


        }

        function forVertical(props) {
            var

                layout =


                props.layout,
                position = props.position,
                scene = props.scene;

            if (!layout.isMeasured) {
                return forInitial(props);
            }

            var index = scene.index;
            var inputRange = [index - 1, index, index + 1];
            var height = layout.initHeight;

            var opacity = position.interpolate({
                inputRange: inputRange,
                outputRange: [1, 1, 0.3]
            });


            var scale = position.interpolate({
                inputRange: inputRange,
                outputRange: [1, 1, 0.95]
            });


            var translateX = 0;
            var translateY = position.interpolate({
                inputRange: inputRange,
                outputRange: [height, 0, -10]
            });


            return {
                opacity: opacity,
                transform: [{
                    scale: scale
                }, {
                    translateX: translateX
                }, {
                    translateY: translateY
                }]
            };


        }

        module.exports = {
            forHorizontal: forHorizontal,
            forVertical: forVertical
        };

        /***/
    },
    /* 38 */
    /***/
    function(module, exports, __webpack_require__) {



        'use strict';
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        var Animated = __webpack_require__(8).Animated;
        var NavigationAbstractPanResponder = __webpack_require__(35);
        var NavigationCardStackPanResponder = __webpack_require__(34);

        var clamp = __webpack_require__(36);
        var



            ANIMATION_DURATION =



            NavigationCardStackPanResponder.ANIMATION_DURATION,
            DISTANCE_THRESHOLD = NavigationCardStackPanResponder.DISTANCE_THRESHOLD,
            POSITION_THRESHOLD = NavigationCardStackPanResponder.POSITION_THRESHOLD,
            RESPOND_THRESHOLD = NavigationCardStackPanResponder.RESPOND_THRESHOLD,
            Directions = NavigationCardStackPanResponder.Directions;



        var Actions = {
            JUMP_BACK: {
                type: 'jump_back'
            },
            JUMP_FORWARD: {
                type: 'jump_forward'
            }
        };
        var



            NavigationPagerPanResponder = function(_NavigationAbstractPa) {
            _inherits(NavigationPagerPanResponder, _NavigationAbstractPa);



            function NavigationPagerPanResponder(
                direction,
                props) {
                _classCallCheck(this, NavigationPagerPanResponder);
                var _this = _possibleConstructorReturn(this, (NavigationPagerPanResponder.__proto__ || Object.getPrototypeOf(NavigationPagerPanResponder)).call(this));

                _this._isResponding = false;
                _this._isVertical = direction === Directions.VERTICAL;
                _this._props = props;
                _this._startValue = 0;
                return _this;
            }
            _createClass(NavigationPagerPanResponder, [{
                key: 'onMoveShouldSetPanResponder',
                value: function onMoveShouldSetPanResponder(

                    event, gesture) {
                    var props = this._props;

                    if (props.navigationState.index !== props.scene.index) {
                        return false;
                    }

                    var layout = props.layout;
                    var isVertical = this._isVertical;
                    var axis = isVertical ? 'dy' : 'dx';
                    var index = props.navigationState.index;
                    var distance = isVertical ?
                        layout.height.__getValue() :
                        layout.width.__getValue();

                    return (
                        Math.abs(gesture[axis]) > RESPOND_THRESHOLD &&
                        distance > 0 &&
                        index > 0);

                }
            }, {
                key: 'onPanResponderGrant',
                value: function onPanResponderGrant()

                {
                    var _this2 = this;
                    this._isResponding = false;
                    this._props.position.stopAnimation(function(value) {
                        _this2._isResponding = true;
                        _this2._startValue = value;
                    });
                }
            }, {
                key: 'onPanResponderMove',
                value: function onPanResponderMove(

                    event, gesture) {
                    if (!this._isResponding) {
                        return;
                    }
                    var _props =



                        this._props,
                        layout = _props.layout,
                        navigationState = _props.navigationState,
                        position = _props.position,
                        scenes = _props.scenes;

                    var isVertical = this._isVertical;
                    var axis = isVertical ? 'dy' : 'dx';
                    var index = navigationState.index;
                    var distance = isVertical ?
                        layout.height.__getValue() :
                        layout.width.__getValue();

                    var prevIndex = Math.max(
                        0,
                        index - 1);


                    var nextIndex = Math.min(
                        index + 1,
                        scenes.length - 1);


                    var value = clamp(
                        prevIndex,
                        this._startValue - gesture[axis] / distance,
                        nextIndex);


                    position.setValue(value);
                }
            }, {
                key: 'onPanResponderRelease',
                value: function onPanResponderRelease(

                    event, gesture) {
                    var _this3 = this;
                    if (!this._isResponding) {
                        return;
                    }

                    this._isResponding = false;
                    var _props2 =



                        this._props,
                        navigationState = _props2.navigationState,
                        onNavigate = _props2.onNavigate,
                        position = _props2.position;

                    var isVertical = this._isVertical;
                    var axis = isVertical ? 'dy' : 'dx';
                    var index = navigationState.index;
                    var distance = gesture[axis];

                    position.stopAnimation(function(value) {
                        _this3._reset();
                        if (
                            distance > DISTANCE_THRESHOLD ||
                            value <= index - POSITION_THRESHOLD) {
                            onNavigate(Actions.JUMP_BACK);
                            return;
                        }

                        if (
                            distance < -DISTANCE_THRESHOLD ||
                            value >= index + POSITION_THRESHOLD) {
                            onNavigate(Actions.JUMP_FORWARD);
                        }
                    });
                }
            }, {
                key: 'onPanResponderTerminate',
                value: function onPanResponderTerminate()

                {
                    this._isResponding = false;
                    this._reset();
                }
            }, {
                key: '_reset',
                value: function _reset()

                {
                    var props = this._props;
                    Animated.timing(
                        props.position, {
                            toValue: props.navigationState.index,
                            duration: ANIMATION_DURATION
                        }).

                    start();
                }
            }]);
            return NavigationPagerPanResponder;
        }(NavigationAbstractPanResponder);


        function createPanHandlers(
            direction,
            props) {
            var responder = new NavigationPagerPanResponder(direction, props);
            return responder.panHandlers;
        }

        function forHorizontal(
            props) {
            return createPanHandlers(Directions.HORIZONTAL, props);
        }

        module.exports = {
            Actions: Actions,
            forHorizontal: forHorizontal
        };

        /***/
    },
    /* 39 */
    /***/
    function(module, exports) {



        'use strict';



        function forInitial(props) {
            var

                navigationState =

                props.navigationState,
                scene = props.scene;

            var focused = navigationState.index === scene.index;
            var opacity = focused ? 1 : 0;

            var dir = scene.index > navigationState.index ? 1 : -1;
            var translate = focused ? 0 : 1000000 * dir;
            return {
                opacity: opacity,
                transform: [{
                    translateX: translate
                }, {
                    translateY: translate
                }]
            };


        }

        function forHorizontal(props) {
            var

                layout =


                props.layout,
                position = props.position,
                scene = props.scene;

            if (!layout.isMeasured) {
                return forInitial(props);
            }

            var index = scene.index;
            var inputRange = [index - 1, index, index + 1];

            var width = layout.initWidth;
            var translateX = position.interpolate({
                inputRange: inputRange,
                outputRange: [width, 0, -width]
            });


            return {
                opacity: 1,
                shadowColor: 'transparent',
                shadowRadius: 0,
                transform: [{
                    scale: 1
                }, {
                    translateX: translateX
                }, {
                    translateY: 0
                }]
            };


        }

        module.exports = {
            forHorizontal: forHorizontal
        };

        /***/
    },
    /* 40 */
    /***/
    function(module, exports, __webpack_require__) {



        'use strict';
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        var React = __webpack_require__(10);
        var NavigationAnimatedValueSubscription = __webpack_require__(41);

        var invariant = __webpack_require__(31);



        var MIN_POSITION_OFFSET = 0.01;



        function create(
            Component) {
            var

                Container = function(_React$Component) {
                _inherits(Container, _React$Component);



                function Container(props, context) {
                    _classCallCheck(this, Container);
                    var _this = _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this,
                        props, context));
                    _this._pointerEvents = _this._computePointerEvents();
                    return _this;
                }
                _createClass(Container, [{
                    key: 'componentWillMount',
                    value: function componentWillMount()

                    {
                        this._onPositionChange = this._onPositionChange.bind(this);
                        this._onComponentRef = this._onComponentRef.bind(this);
                    }
                }, {
                    key: 'componentDidMount',
                    value: function componentDidMount()

                    {
                        this._bindPosition(this.props);
                    }
                }, {
                    key: 'componentWillUnmount',
                    value: function componentWillUnmount()

                    {
                        this._positionListener && this._positionListener.remove();
                    }
                }, {
                    key: 'componentWillReceiveProps',
                    value: function componentWillReceiveProps(

                        nextProps) {
                        this._bindPosition(nextProps);
                    }
                }, {
                    key: 'render',
                    value: function render()

                    {
                        this._pointerEvents = this._computePointerEvents();
                        return (
                            (this && this.createElement || React.createElement)(Component, _extends({},
                                this.props, {
                                    pointerEvents: this._pointerEvents,
                                    onComponentRef: this._onComponentRef
                                })));


                    }
                }, {
                    key: '_onComponentRef',
                    value: function _onComponentRef(

                        component) {
                        this._component = component;
                        if (component) {
                            invariant(
                                typeof component.setNativeProps === 'function',
                                'component must implement method `setNativeProps`');

                        }
                    }
                }, {
                    key: '_bindPosition',
                    value: function _bindPosition(

                        props) {
                        this._positionListener && this._positionListener.remove();
                        this._positionListener = new NavigationAnimatedValueSubscription(
                            props.position,
                            this._onPositionChange);

                    }
                }, {
                    key: '_onPositionChange',
                    value: function _onPositionChange()

                    {
                        if (this._component) {
                            var pointerEvents = this._computePointerEvents();
                            if (this._pointerEvents !== pointerEvents) {
                                this._pointerEvents = pointerEvents;
                                this._component.setNativeProps({
                                    pointerEvents: pointerEvents
                                });
                            }
                        }
                    }
                }, {
                    key: '_computePointerEvents',
                    value: function _computePointerEvents()

                    {
                        var _props =



                            this.props,
                            navigationState = _props.navigationState,
                            position = _props.position,
                            scene = _props.scene;

                        if (scene.isStale || navigationState.index !== scene.index) {

                            return scene.index > navigationState.index ?
                                'box-only' :
                                'none';
                        }

                        var offset = position.__getAnimatedValue() - navigationState.index;
                        if (Math.abs(offset) > MIN_POSITION_OFFSET) {



                            return 'box-only';
                        }

                        return 'auto';
                    }
                }]);
                return Container;
            }(React.Component);

            return Container;
        }

        module.exports = {
            create: create
        };

        /***/
    },
    /* 41 */
    /***/
    function(module, exports) {



        'use strict';
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var



            NavigationAnimatedValueSubscription = function() {



            function NavigationAnimatedValueSubscription(value, callback) {
                _classCallCheck(this, NavigationAnimatedValueSubscription);
                this._value = value;
                this._token = value.addListener(callback);
            }
            _createClass(NavigationAnimatedValueSubscription, [{
                key: 'remove',
                value: function remove()

                {
                    this._value.removeListener(this._token);
                }
            }]);
            return NavigationAnimatedValueSubscription;
        }();


        module.exports = NavigationAnimatedValueSubscription;

        /***/
    },
    /* 42 */
    /***/
    function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__(43);

        /***/
    },
    /* 43 */
    /***/
    function(module, exports, __webpack_require__) {



        'use strict';

        var shallowCompare = __webpack_require__(44);



        var ReactComponentWithPureRenderMixin = {
            shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
                return shallowCompare(this, nextProps, nextState);
            }
        };


        module.exports = ReactComponentWithPureRenderMixin;

        /***/
    },
    /* 44 */
    /***/
    function(module, exports, __webpack_require__) {



        'use strict';

        var shallowEqual = __webpack_require__(45);



        function shallowCompare(instance, nextProps, nextState) {
            return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
        }

        module.exports = shallowCompare;

        /***/
    },
    /* 45 */
    /***/
    function(module, exports) {



        'use strict';

        var hasOwnProperty = Object.prototype.hasOwnProperty;



        function is(x, y) {

            if (x === y) {



                return x !== 0 || y !== 0 || 1 / x === 1 / y;
            } else {

                return x !== x && y !== y;
            }
        }



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


            for (var i = 0; i < keysA.length; i++) {
                if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
                    return false;
                }
            }

            return true;
        }

        module.exports = shallowEqual;

        /***/
    },
    /* 46 */
    /***/
    function(module, exports, __webpack_require__) {



        'use strict';
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        var NavigationAnimatedView = __webpack_require__(26);
        var NavigationCard = __webpack_require__(33);
        var NavigationCardStackStyleInterpolator = __webpack_require__(37);
        var NavigationContainer = __webpack_require__(27);
        var NavigationCardStackPanResponder = __webpack_require__(34);
        var NavigationPropTypes = __webpack_require__(29);
        var React = __webpack_require__(10);
        var ReactComponentWithPureRenderMixin = __webpack_require__(42);
        var StyleSheet = __webpack_require__(8).StyleSheet;

        var emptyFunction = __webpack_require__(47);
        var

            PropTypes = React.PropTypes;
        var
            Directions = NavigationCardStackPanResponder.Directions;
        var



            NavigationCardStack = function(_React$Component) {
            _inherits(NavigationCardStack, _React$Component);



            function NavigationCardStack(props, context) {
                _classCallCheck(this, NavigationCardStack);
                return _possibleConstructorReturn(this, (NavigationCardStack.__proto__ || Object.getPrototypeOf(NavigationCardStack)).call(this,
                    props, context));
            }
            _createClass(NavigationCardStack, [{
                key: 'componentWillMount',
                value: function componentWillMount()

                {
                    this._renderScene = this._renderScene.bind(this);
                }
            }, {
                key: 'shouldComponentUpdate',
                value: function shouldComponentUpdate(

                    nextProps, nextState) {
                    return ReactComponentWithPureRenderMixin.shouldComponentUpdate.call(
                        this,
                        nextProps,
                        nextState);

                }
            }, {
                key: 'render',
                value: function render()

                {
                    return (
                        (this && this.createElement || React.createElement)(NavigationAnimatedView, {
                            navigationState: this.props.navigationState,
                            renderOverlay: this.props.renderOverlay,
                            renderScene: this._renderScene,

                            style: [styles.animatedView, this.props.style]
                        }));


                }
            }, {
                key: '_renderScene',
                value: function _renderScene(

                    props) {
                    var isVertical = this.props.direction === 'vertical';

                    var style = isVertical ?
                        NavigationCardStackStyleInterpolator.forVertical(props) :
                        NavigationCardStackStyleInterpolator.forHorizontal(props);

                    var panHandlers = isVertical ?
                        NavigationCardStackPanResponder.forVertical(props) :
                        NavigationCardStackPanResponder.forHorizontal(props);

                    return (
                        (this && this.createElement || React.createElement)(NavigationCard, _extends({},
                            props, {
                                key: 'card_' + props.scene.key,
                                panHandlers: panHandlers,
                                renderScene: this.props.renderScene,
                                style: style
                            })));


                }
            }]);
            return NavigationCardStack;
        }(React.Component);
        NavigationCardStack.propTypes = {
            direction: PropTypes.oneOf([Directions.HORIZONTAL, Directions.VERTICAL]),
            navigationState: NavigationPropTypes.navigationParentState.isRequired,
            renderOverlay: PropTypes.func,
            renderScene: PropTypes.func.isRequired
        };
        NavigationCardStack.defaultProps = {
            direction: Directions.HORIZONTAL,
            renderOverlay: emptyFunction.thatReturnsNull
        };


        var styles = StyleSheet.create({
            animatedView: {
                flex: 1
            }
        });



        module.exports = NavigationContainer.create(NavigationCardStack);

        /***/
    },
    /* 47 */
    /***/
    function(module, exports) {

        "use strict";



        function makeEmptyFunction(arg) {
            return function() {
                return arg;
            };
        }



        var emptyFunction = function emptyFunction() {};

        emptyFunction.thatReturns = makeEmptyFunction;
        emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
        emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
        emptyFunction.thatReturnsNull = makeEmptyFunction(null);
        emptyFunction.thatReturnsThis = function() {
            return this;
        };
        emptyFunction.thatReturnsArgument = function(arg) {
            return arg;
        };

        module.exports = emptyFunction;

        /***/
    },
    /* 48 */
    /***/
    function(module, exports, __webpack_require__) {



        'use strict';
        var _this3 = this;
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        var React = __webpack_require__(10);
        var ReactNative = __webpack_require__(8);
        var NavigationContainer = __webpack_require__(27);
        var NavigationHeaderTitle = __webpack_require__(49);
        var NavigationHeaderBackButton = __webpack_require__(50);
        var NavigationPropTypes = __webpack_require__(29);
        var NavigationHeaderStyleInterpolator = __webpack_require__(51);
        var ReactComponentWithPureRenderMixin = __webpack_require__(42);
        var


            Animated =



            ReactNative.Animated,
            Platform = ReactNative.Platform,
            StyleSheet = ReactNative.StyleSheet,
            View = ReactNative.View;



        var APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
        var STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
        var
            PropTypes = React.PropTypes;
        var

            NavigationHeader = function(_React$Component) {
            _inherits(NavigationHeader, _React$Component);

            function NavigationHeader() {
                _classCallCheck(this, NavigationHeader);
                return _possibleConstructorReturn(this, (NavigationHeader.__proto__ || Object.getPrototypeOf(NavigationHeader)).apply(this, arguments));
            }
            _createClass(NavigationHeader, [{
                key: 'shouldComponentUpdate',
                value: function shouldComponentUpdate(



                    nextProps, nextState) {
                    return ReactComponentWithPureRenderMixin.shouldComponentUpdate.call(
                        this,
                        nextProps,
                        nextState);

                }
            }, {
                key: 'render',
                value: function render()

                {
                    var _this2 = this;
                    var _props =
                        this.props,
                        scenes = _props.scenes,
                        style = _props.style,
                        viewProps = _props.viewProps;

                    var scenesProps = scenes.map(function(scene) {
                        var props = NavigationPropTypes.extractSceneRendererProps(_this2.props);
                        props.scene = scene;
                        return props;
                    });

                    return (
                        (this && this.createElement || React.createElement)(View, _extends({
                                style: [styles.appbar, style]
                            }, viewProps),
                            scenesProps.map(this._renderLeft, this),
                            scenesProps.map(this._renderTitle, this),
                            scenesProps.map(this._renderRight, this)));


                }
            }, {
                key: '_renderLeft',
                value: function _renderLeft(

                    props) {
                    return this._renderSubView(
                        props,
                        'left',
                        this.props.renderLeftComponent,
                        NavigationHeaderStyleInterpolator.forLeft);

                }
            }, {
                key: '_renderTitle',
                value: function _renderTitle(

                    props) {
                    return this._renderSubView(
                        props,
                        'title',
                        this.props.renderTitleComponent,
                        NavigationHeaderStyleInterpolator.forCenter);

                }
            }, {
                key: '_renderRight',
                value: function _renderRight(

                    props) {
                    return this._renderSubView(
                        props,
                        'right',
                        this.props.renderRightComponent,
                        NavigationHeaderStyleInterpolator.forRight);

                }
            }, {
                key: '_renderSubView',
                value: function _renderSubView(


                    props,
                    name,
                    renderer,
                    styleInterpolator) {
                    var

                        scene =

                        props.scene,
                        navigationState = props.navigationState;
                    var


                        index =


                        scene.index,
                        isStale = scene.isStale,
                        key = scene.key;

                    var offset = navigationState.index - index;

                    if (Math.abs(offset) > 2) {


                        return null;
                    }

                    var subView = renderer(props);
                    if (subView === null) {
                        return null;
                    }

                    var pointerEvents = offset !== 0 || isStale ? 'none' : 'box-none';
                    return (
                        (this && this.createElement || React.createElement)(Animated.View, {
                                pointerEvents: pointerEvents,
                                key: name + '_' + key,
                                style: [
                                    styles[name],
                                    styleInterpolator(props)
                                ]
                            },

                            subView));


                }
            }]);
            return NavigationHeader;
        }(React.Component);
        NavigationHeader.defaultProps = {
            renderTitleComponent: function renderTitleComponent(props) {
                var navigationState = props.navigationState;
                var title = String(navigationState.title || '');
                return (_this3 && _this3.createElement || React.createElement)(NavigationHeaderTitle, null, title);
            },
            renderLeftComponent: function renderLeftComponent(props) {
                return props.scene.index > 0 ? (_this3 && _this3.createElement || React.createElement)(NavigationHeaderBackButton, null) : null;
            },
            renderRightComponent: function renderRightComponent(props) {
                return null;
            }
        };
        NavigationHeader.propTypes = _extends({}, NavigationPropTypes.SceneRendererProps, {
            renderLeftComponent: PropTypes.func,
            renderRightComponent: PropTypes.func,
            renderTitleComponent: PropTypes.func,
            style: View.propTypes.style,
            viewProps: PropTypes.shape(View.propTypes)
        });


        var styles = StyleSheet.create({
            appbar: {
                alignItems: 'center',
                backgroundColor: Platform.OS === 'ios' ? '#EFEFF2' : '#FFF',
                borderBottomColor: 'rgba(0, 0, 0, .15)',
                borderBottomWidth: Platform.OS === 'ios' ? StyleSheet.hairlineWidth : 0,
                elevation: 2,
                flexDirection: 'row',
                height: APPBAR_HEIGHT + STATUSBAR_HEIGHT,
                justifyContent: 'flex-start',
                left: 0,
                marginBottom: 16,
                position: 'absolute',
                right: 0,
                top: 0
            },


            title: {
                bottom: 0,
                left: APPBAR_HEIGHT,
                marginTop: STATUSBAR_HEIGHT,
                position: 'absolute',
                right: APPBAR_HEIGHT,
                top: 0
            },


            left: {
                bottom: 0,
                left: 0,
                marginTop: STATUSBAR_HEIGHT,
                position: 'absolute',
                top: 0
            },


            right: {
                bottom: 0,
                marginTop: STATUSBAR_HEIGHT,
                position: 'absolute',
                right: 0,
                top: 0
            }
        });



        var NavigationHeaderContainer = NavigationContainer.create(NavigationHeader);

        NavigationHeaderContainer.HEIGHT = APPBAR_HEIGHT + STATUSBAR_HEIGHT;
        NavigationHeaderContainer.Title = NavigationHeaderTitle;
        NavigationHeaderContainer.BackButton = NavigationHeaderBackButton;

        module.exports = NavigationHeaderContainer;

        /***/
    },
    /* 49 */
    /***/
    function(module, exports, __webpack_require__) {



        'use strict';
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
        var _this = this;

        var React = __webpack_require__(10);
        var ReactNative = __webpack_require__(8);
        var


            Platform =



            ReactNative.Platform,
            StyleSheet = ReactNative.StyleSheet,
            View = ReactNative.View,
            Text = ReactNative.Text;



        var NavigationHeaderTitle = function NavigationHeaderTitle(_ref) {
            var children = _ref.children,
                style = _ref.style,
                textStyle = _ref.textStyle,
                viewProps = _ref.viewProps;
            return (
                (_this && _this.createElement || React.createElement)(View, _extends({
                        style: [styles.title, style]
                    }, viewProps),
                    (_this && _this.createElement || React.createElement)(Text, {
                        style: [styles.titleText, textStyle]
                    }, children)));
        };



        var styles = StyleSheet.create({
            title: {
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 16
            },


            titleText: {
                flex: 1,
                fontSize: 18,
                fontWeight: '500',
                color: 'rgba(0, 0, 0, .9)',
                textAlign: Platform.OS === 'ios' ? 'center' : 'left'
            }
        });



        NavigationHeaderTitle.propTypes = {
            children: React.PropTypes.string.isRequired,
            style: View.propTypes.style,
            textStyle: Text.propTypes.style
        };


        module.exports = NavigationHeaderTitle;

        /***/
    },
    /* 50 */
    /***/
    function(module, exports, __webpack_require__) {



        'use strict';
        var _this = this;

        var React = __webpack_require__(10);
        var ReactNative = __webpack_require__(8);
        var NavigationContainer = __webpack_require__(27);
        var NavigationRootContainer = __webpack_require__(28);
        var


            Image =



            ReactNative.Image,
            Platform = ReactNative.Platform,
            StyleSheet = ReactNative.StyleSheet,
            TouchableOpacity = ReactNative.TouchableOpacity;



        var NavigationHeaderBackButton = function NavigationHeaderBackButton(props) {
            return (
                (_this && _this.createElement || React.createElement)(TouchableOpacity, {
                        style: styles.buttonContainer,
                        onPress: function onPress() {
                            return props.onNavigate(NavigationRootContainer.getBackAction());
                        }
                    },
                    (_this && _this.createElement || React.createElement)(Image, {
                        style: styles.button,
                        source: __webpack_require__(!(function webpackMissingModule() {
                            var e = new Error("Cannot find module \"./assets/back.png\"");
                            e.code = 'MODULE_NOT_FOUND';
                            throw e;
                        }()))
                    })));
        };



        NavigationHeaderBackButton.propTypes = {
            onNavigate: React.PropTypes.func.isRequired
        };


        var styles = StyleSheet.create({
            buttonContainer: {
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            },

            button: {
                height: 24,
                width: 24,
                margin: Platform.OS === 'ios' ? 10 : 16,
                resizeMode: 'contain'
            }
        });



        module.exports = NavigationContainer.create(NavigationHeaderBackButton);

        /***/
    },
    /* 51 */
    /***/
    function(module, exports) {



        'use strict';



        function forLeft(props) {
            var
                position = props.position,
                scene = props.scene;
            var
                index = scene.index;
            return {
                opacity: position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [0, 1, 0]
                })
            };


        }

        function forCenter(props) {
            var
                position = props.position,
                scene = props.scene;
            var
                index = scene.index;
            return {
                opacity: position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [0, 1, 0]
                }),

                transform: [{
                    translateX: position.interpolate({
                        inputRange: [index - 1, index + 1],
                        outputRange: [200, -200]
                    })
                }]
            };



        }

        function forRight(props) {
            var
                position = props.position,
                scene = props.scene;
            var
                index = scene.index;
            return {
                opacity: position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [0, 1, 0]
                })
            };


        }

        module.exports = {
            forCenter: forCenter,
            forLeft: forLeft,
            forRight: forRight
        };

        /***/
    },
    /* 52 */
    /***/
    function(module, exports, __webpack_require__) {



        'use strict';

        var NavigationFindReducer = __webpack_require__(53);
        var NavigationStackReducer = __webpack_require__(54);
        var NavigationTabsReducer = __webpack_require__(55);

        var NavigationReducer = {
            FindReducer: NavigationFindReducer,
            StackReducer: NavigationStackReducer,
            TabsReducer: NavigationTabsReducer
        };


        module.exports = NavigationReducer;

        /***/
    },
    /* 53 */
    /***/
    function(module, exports) {



        'use strict';



        function NavigationFindReducer(
            reducers,
            defaultState) {
            return function(lastState, action) {
                for (var i = 0; i < reducers.length; i++) {
                    var reducer = reducers[i];
                    var newState = reducer(lastState, action);
                    if (newState !== lastState) {
                        return newState || defaultState;
                    }
                }
                return lastState || defaultState;
            };
        }

        module.exports = NavigationFindReducer;

        /***/
    },
    /* 54 */
    /***/
    function(module, exports, __webpack_require__) {



        'use strict';
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };

        function _toConsumableArray(arr) {
            if (Array.isArray(arr)) {
                for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                    arr2[i] = arr[i];
                }
                return arr2;
            } else {
                return Array.from(arr);
            }
        }

        var NavigationStateUtils = __webpack_require__(30);



        var defaultGetReducerForState = function defaultGetReducerForState(initialState) {
            return function(state) {
                return state || initialState;
            };
        };

        function NavigationStackReducer(_ref) {
            var initialState = _ref.initialState,
                getReducerForState = _ref.getReducerForState,
                getPushedReducerForAction = _ref.getPushedReducerForAction;
            var getReducerForStateWithDefault = getReducerForState || defaultGetReducerForState;
            return function(lastState, action) {
                if (!lastState) {
                    return initialState;
                }
                var lastParentState = NavigationStateUtils.getParent(lastState);
                if (!lastParentState) {
                    return lastState;
                }

                var activeSubState = lastParentState.children[lastParentState.index];
                var activeSubReducer = getReducerForStateWithDefault(activeSubState);
                var nextActiveState = activeSubReducer(activeSubState, action);
                if (nextActiveState !== activeSubState) {
                    var nextChildren = [].concat(_toConsumableArray(lastParentState.children));
                    nextChildren[lastParentState.index] = nextActiveState;
                    return _extends({},
                        lastParentState, {
                            children: nextChildren
                        });

                }

                var subReducerToPush = getPushedReducerForAction(action, lastParentState);
                if (subReducerToPush) {
                    return NavigationStateUtils.push(
                        lastParentState,
                        subReducerToPush(null, action));

                }

                switch (action.type) {
                    case 'back':
                    case 'BackAction':
                        if (lastParentState.index === 0 || lastParentState.children.length === 1) {
                            return lastParentState;
                        }
                        return NavigationStateUtils.pop(lastParentState);
                }


                return lastParentState;
            };
        }

        module.exports = NavigationStackReducer;

        /***/
    },
    /* 55 */
    /***/
    function(module, exports, __webpack_require__) {



        'use strict';
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };

        var NavigationFindReducer = __webpack_require__(53);
        var NavigationStateUtils = __webpack_require__(30);



        var ActionTypes = {
            JUMP_TO: 'react-native/NavigationExperimental/tabs-jumpTo'
        };



        function NavigationTabsJumpToAction(index) {
            return {
                type: ActionTypes.JUMP_TO,
                index: index
            };

        }



        function NavigationTabsReducer(_ref) {
            var key = _ref.key,
                initialIndex = _ref.initialIndex,
                tabReducers = _ref.tabReducers;
            return function(lastNavState, action) {
                if (!lastNavState) {
                    lastNavState = {
                        children: tabReducers.map(function(reducer) {
                            return reducer(null, null);
                        }),
                        index: initialIndex || 0,
                        key: key
                    };

                }
                var lastParentNavState = NavigationStateUtils.getParent(lastNavState);
                if (!action || !lastParentNavState) {
                    return lastNavState;
                }
                if (
                    action.type === ActionTypes.JUMP_TO &&
                    action.index !== lastParentNavState.index) {
                    return NavigationStateUtils.jumpToIndex(
                        lastParentNavState,
                        action.index);

                }
                var subReducers = tabReducers.map(function(tabReducer, tabIndex) {
                    return function(navState, tabAction) {
                        if (!navState) {
                            return lastParentNavState;
                        }
                        var parentState = NavigationStateUtils.getParent(navState);
                        var tabState = parentState && parentState.children[tabIndex];
                        var nextTabState = tabReducer(tabState, tabAction);
                        if (nextTabState && tabState !== nextTabState) {
                            var tabs = parentState && parentState.children || [];
                            tabs[tabIndex] = nextTabState;
                            return _extends({},
                                lastParentNavState, {
                                    tabs: tabs,
                                    index: tabIndex
                                });

                        }
                        return lastParentNavState;
                    };
                });
                var selectedTabReducer = subReducers.splice(lastParentNavState.index, 1)[0];
                subReducers.unshift(function(navState, action) {
                    if (navState && action.type === 'BackAction') {
                        return NavigationStateUtils.jumpToIndex(
                            lastParentNavState,
                            initialIndex || 0);

                    }
                    return lastParentNavState;
                });
                subReducers.unshift(selectedTabReducer);
                var findReducer = NavigationFindReducer(subReducers, lastParentNavState);
                return findReducer(lastParentNavState, action);
            };
        }

        NavigationTabsReducer.JumpToAction = NavigationTabsJumpToAction;

        module.exports = NavigationTabsReducer;

        /***/
    },
    /* 56 */
    /***/
    function(module, exports, __webpack_require__) {



        'use strict';
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        var Animated = __webpack_require__(8).Animated;
        var NavigationContainer = __webpack_require__(27);
        var React = __webpack_require__(10);
        var StyleSheet = __webpack_require__(8).StyleSheet;
        var View = __webpack_require__(8).View;
        var NavigationScenesReducer = __webpack_require__(32);
        var ReactComponentWithPureRenderMixin = __webpack_require__(42);
        var



            PropTypes = React.PropTypes;
        var



            NavigationView = function(_React$Component) {
            _inherits(NavigationView, _React$Component);



            function NavigationView(props, context) {
                _classCallCheck(this, NavigationView);
                var _this = _possibleConstructorReturn(this, (NavigationView.__proto__ || Object.getPrototypeOf(NavigationView)).call(this,
                    props, context));

                var layout = {
                    initWidth: 0,
                    initHeight: 0,
                    isMeasured: false,
                    width: new Animated.Value(0),
                    height: new Animated.Value(0)
                };
                var


                    navigationState = _this.props.navigationState;

                _this._position = new Animated.Value(navigationState.index);

                _this.state = {
                    layout: layout,
                    scenes: NavigationScenesReducer([], navigationState)
                };
                return _this;

            }
            _createClass(NavigationView, [{
                key: 'shouldComponentUpdate',
                value: function shouldComponentUpdate(

                    nextProps, nextState) {
                    return ReactComponentWithPureRenderMixin.shouldComponentUpdate.call(
                        this,
                        nextProps,
                        nextState);

                }
            }, {
                key: 'componentWillReceiveProps',
                value: function componentWillReceiveProps(

                    nextProps) {
                    var _this2 = this;
                    if (nextProps.navigationState !== this.props.navigationState) {
                        (function() {
                            var
                                navigationState = nextProps.navigationState;
                            _this2.setState({
                                    scenes: NavigationScenesReducer(
                                        _this2.state.scenes,
                                        navigationState,
                                        null)
                                },


                                function() {
                                    _this2._position.setValue(navigationState.index);
                                });
                        })();

                    }
                }
            }, {
                key: 'componentWillMount',
                value: function componentWillMount()

                {
                    this._onLayout = this._onLayout.bind(this);
                }
            }, {
                key: 'render',
                value: function render()

                {
                    var _props =



                        this.props,
                        navigationState = _props.navigationState,
                        onNavigate = _props.onNavigate;
                    var _state =



                        this.state,
                        layout = _state.layout,
                        scenes = _state.scenes;

                    var sceneProps = {
                        layout: layout,
                        navigationState: navigationState,
                        onNavigate: onNavigate,
                        position: this._position,
                        scene: scenes[navigationState.index],
                        scenes: scenes
                    };


                    return (
                        (this && this.createElement || React.createElement)(View, {
                                onLayout: this._onLayout,
                                style: this.props.style
                            },
                            this._renderScene(sceneProps)));


                }
            }, {
                key: '_renderScene',
                value: function _renderScene(

                    props) {

                    var child = this.props.renderScene(props);
                    if (child === null) {
                        return null;
                    }
                    return (this && this.createElement || React.createElement)(View, {
                        key: props.scene.key,
                        style: styles.scene
                    }, child);
                }
            }, {
                key: '_onLayout',
                value: function _onLayout(

                    event) {
                    var _event$nativeEvent$la =
                        event.nativeEvent.layout,
                        height = _event$nativeEvent$la.height,
                        width = _event$nativeEvent$la.width;

                    var layout = _extends({},
                        this.state.layout, {
                            initHeight: height,
                            initWidth: width,
                            isMeasured: true
                        });


                    layout.height.setValue(height);
                    layout.width.setValue(width);

                    this.setState({
                        layout: layout
                    });
                }
            }]);
            return NavigationView;
        }(React.Component);
        NavigationView.propTypes = {
            navigationState: PropTypes.object.isRequired,
            onNavigate: PropTypes.func.isRequired,
            renderScene: PropTypes.func.isRequired
        };


        var styles = StyleSheet.create({
            scene: {
                bottom: 0,
                left: 0,
                position: 'absolute',
                right: 0,
                top: 0
            }
        });



        module.exports = NavigationContainer.create(NavigationView);

        /***/
    },
    /* 57 */
    /***/
    function(module, exports, __webpack_require__) {

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
        exports.default =



            Modal;
        var _react = __webpack_require__(10);
        var _react2 = _interopRequireDefault(_react);
        var _reactNative = __webpack_require__(8);
        var _DefaultRenderer = __webpack_require__(16);
        var _DefaultRenderer2 = _interopRequireDefault(_DefaultRenderer);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var propTypes = {
            navigationState: _react.PropTypes.shape({
                children: _react.PropTypes.array
            }),
            onNavigate: _react.PropTypes.func
        };

        function Modal(props) {
            var _this = this;
            var children = props.navigationState.children;
            var state = children[0];

            return (
                (this && this.createElement || _react2.default.createElement)(_reactNative.View, {
                        style: {
                            flex: 1
                        }
                    },
                    (this && this.createElement || _react2.default.createElement)(_DefaultRenderer2.default, _extends({
                            navigationState: state,
                            key: state.key
                        },
                        state, {
                            onNavigate: props.onNavigate
                        })),

                    children.length > 1 && children.map(function(el, i) {
                        if (i > 0 && el.component) {
                            var Component = el.component;
                            return (_this && _this.createElement || _react2.default.createElement)(Component, _extends({
                                key: el.key
                            }, el));
                        }

                        return null;
                    })));


        }

        Modal.propTypes = propTypes;

        /***/
    },
    /* 58 */
    /***/
    function(module, exports, __webpack_require__) {

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
        exports.



        findElement = findElement;
        exports.



        getCurrent = getCurrent;
        var _ActionConst = __webpack_require__(15);
        var ActionConst = _interopRequireWildcard(_ActionConst);
        var _Actions = __webpack_require__(12);
        var _Util = __webpack_require__(13);
        var _State = __webpack_require__(59);
        var _reactNative = __webpack_require__(8);

        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
                return obj;
            } else {
                var newObj = {};
                if (obj != null) {
                    for (var key in obj) {
                        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                    }
                }
                newObj.default = obj;
                return newObj;
            }
        }

        function _toConsumableArray(arr) {
            if (Array.isArray(arr)) {
                for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                    arr2[i] = arr[i];
                }
                return arr2;
            } else {
                return Array.from(arr);
            }
        }

        function checkPropertiesEqual(action, lastAction) {
            var isEqual = true;
            for (var _iterator = Object.keys(action), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();;) {
                var _ref;
                if (_isArray) {
                    if (_i >= _iterator.length) break;
                    _ref = _iterator[_i++];
                } else {
                    _i = _iterator.next();
                    if (_i.done) break;
                    _ref = _i.value;
                }
                var key = _ref;
                if (['key', 'type', 'parent'].indexOf(key) === -1) {
                    if (action[key] !== lastAction[key]) {
                        isEqual = false;
                    }
                }
            }
            return isEqual;
        }

        function resetHistoryStack(child) {
            var newChild = child;
            newChild.index = 0;
            child.children.map(function(el, i) {
                if (el.initial) {
                    newChild.index = i;
                    if (!newChild.tabs) {
                        newChild.children = [el];
                    }
                }
                if (el.children) {
                    resetHistoryStack(el);
                }
                return newChild;
            });
        }

        function refreshTopChild(children, refresh) {
            if (refresh) {
                var topChild = children[children.length - 1];
                return [].concat(_toConsumableArray(children.slice(0, -1)), [_extends({}, topChild, refresh)]);
            }
            return children;
        }

        function inject(state, action, props, scenes) {
            var condition = _Actions.ActionMap[action.type] === ActionConst.REFRESH ? state.key === props.key || state.sceneKey === action.key : state.sceneKey === props.parent;
            if (!condition) {
                if (state.children) {
                    var res = state.children.map(function(el) {
                        return inject(el, action, props, scenes);
                    });
                    var changed = false;
                    var changedIndex = -1;
                    for (var i = 0; i < res.length; i++) {
                        if (res[i] !== state.children[i]) {
                            changed = true;
                            changedIndex = i;
                            break;
                        }
                    }
                    return changed ? _extends({}, state, {
                        children: res,
                        index: changedIndex
                    }) : state;
                }
                return state;
            }
            var ind = void 0;
            switch (_Actions.ActionMap[action.type]) {
                case ActionConst.POP_TO:
                    {
                        var targetIndex = action.targetIndex;
                        return _extends({}, state, {
                            index: targetIndex,
                            children: refreshTopChild(state.children.slice(0, targetIndex + 1), action.refresh)
                        });
                    }
                case ActionConst.BACK:
                case ActionConst.BACK_ACTION:
                    {
                        (0, _Util.assert)(!state.tabs, 'pop() operation cannot be run on tab bar (tabs=true)');
                        if (_reactNative.Platform.OS === 'android') {
                            (0, _Util.assert)(state.index > 0, 'You are already in the root scene.');
                        }
                        if (state.index === 0) {
                            return state;
                        }
                        var popNum = 1;
                        if (action.popNum) {
                            (0, _Util.assert)(typeof action.popNum === 'number', 'The data is the number of scenes you want to pop, it must be Number');
                            popNum = action.popNum;
                            (0, _Util.assert)(popNum % 1 === 0, 'The data is the number of scenes you want to pop, it must be integer.');
                            (0, _Util.assert)(popNum > 1, 'The data is the number of scenes you want to pop, it must be bigger than 1.');
                            (0, _Util.assert)(popNum <= state.index, 'The data is the number of scenes you want to pop, ' + "it must be smaller than scenes stack's length.");
                        }
                        return _extends({}, state, {
                            index: state.index - popNum,
                            from: state.children[state.children.length - popNum],
                            children: refreshTopChild(state.children.slice(0, -1 * popNum), action.refresh)
                        });
                    }
                case ActionConst.POP_AND_REPLACE:
                    {
                        (0, _Util.assert)(!state.tabs, 'pop() operation cannot be run on tab bar (tabs=true)');
                        (0, _Util.assert)(state.index > 0, 'You are already in the root scene.');
                        var _popNum = 1;
                        if (action.popNum) {
                            (0, _Util.assert)(typeof action.popNum === 'number', 'The data is the number of scenes you want to pop, it must be Number');
                            _popNum = action.popNum;
                            (0, _Util.assert)(_popNum % 1 === 0, 'The data is the number of scenes you want to pop, it must be integer.');
                            (0, _Util.assert)(_popNum > 1, 'The data is the number of scenes you want to pop, it must be bigger than 1.');
                            (0, _Util.assert)(_popNum <= state.index, 'The data is the number of scenes you want to pop, ' + "it must be smaller than scenes stack's length.");
                        }
                        state = _extends({}, state, {
                            index: state.index - _popNum,
                            from: state.children[state.children.length - _popNum],
                            children: state.children.slice(0, -1 * _popNum)
                        });
                        if (state.children[state.index].sceneKey === action.key) {
                            return state;
                        }
                        var newAction = _extends({
                            duration: 0
                        }, action);delete newAction.popNum;
                        var newProps = _extends({}, props);delete newProps.popNum;state.children[state.children.length - 1] = (0, _State.getInitialState)(newProps, scenes, state.index, newAction);
                        return _extends({}, state, {
                            children: state.children
                        });
                    }
                case ActionConst.REFRESH:
                    return props.base ? _extends({
                        navBar: state.navBar
                    }, scenes.rootProps, props, {
                        key: state.key,
                        from: null
                    }) : _extends({}, state, props, {
                        key: state.key,
                        from: null
                    });
                case ActionConst.PUSH_OR_POP:
                    ind = state.children.findIndex(function(el) {
                        return el.sceneKey === action.key;
                    });
                    if (ind !== -1) {
                        return _extends({}, state, {
                            index: ind,
                            from: state.children[state.index],
                            children: refreshTopChild(state.children.slice(0, ind + 1), action.refresh)
                        });
                    }
                    return _extends({}, state, {
                        index: state.index + 1,
                        from: null,
                        children: [].concat(_toConsumableArray(state.children), [(0, _State.getInitialState)(props, scenes, state.index + 1, action)])
                    });
                case ActionConst.PUSH:
                    if (state.children[state.index].sceneKey === action.key && !props.clone && checkPropertiesEqual(action, state.children[state.index])) {
                        return state;
                    }
                    return _extends({}, state, {
                        index: state.index + 1,
                        from: null,
                        children: [].concat(_toConsumableArray(state.children), [(0, _State.getInitialState)(props, scenes, state.index + 1, action)])
                    });
                case ActionConst.JUMP:
                    {
                        (0, _Util.assert)(state.tabs, 'Parent=' + state.key + ' is not tab bar, jump action is not valid');ind = -1;state.children.forEach(function(c, i) {
                            if (c.sceneKey === action.key) {
                                ind = i;
                            }
                        });
                        (0, _Util.assert)(ind !== -1, 'Cannot find route with key=' + action.key + ' for parent=' + state.key);
                        if (action.unmountScenes) {
                            resetHistoryStack(state.children[ind]);
                        }
                        return _extends({}, state, {
                            index: ind
                        });
                    }
                case ActionConst.REPLACE:
                    if (state.children[state.index].sceneKey === action.key) {
                        return state;
                    }
                    state.children[state.children.length - 1] = (0, _State.getInitialState)(props, scenes, state.index, action);
                    return _extends({}, state, {
                        children: state.children
                    });
                case ActionConst.RESET:
                    if (state.children[state.index].sceneKey === action.key) {
                        return state;
                    }
                    state.children = state.children.splice(0, 1);
                    state.children[0] = (0, _State.getInitialState)(props, scenes, state.index, action);
                    return _extends({}, state, {
                        index: 0,
                        from: null,
                        children: state.children
                    });
                default:
                    return state;
            }
        }

        function findElement(state, key, type) {
            if (_Actions.ActionMap[type] === ActionConst.REFRESH && state.key === key || state.sceneKey === key) {
                return state;
            }
            if (state.children) {
                for (var _iterator2 = state.children, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();;) {
                    var _ref2;
                    if (_isArray2) {
                        if (_i2 >= _iterator2.length) break;
                        _ref2 = _iterator2[_i2++];
                    } else {
                        _i2 = _iterator2.next();
                        if (_i2.done) break;
                        _ref2 = _i2.value;
                    }
                    var child = _ref2;
                    var current = findElement(child, key, type);
                    if (current) return current;
                }
            }
            return null;
        }

        function getCurrent(state) {
            if (!state.children) {
                return state;
            }
            return getCurrent(state.children[state.index]);
        }

        function update(state, action) {

            var props = _extends({}, state.scenes[action.key], action);
            (0, _Util.assert)(props.parent, 'No parent is defined for route=' + action.key);
            return inject(state, action, props, state.scenes);
        }

        function reducer(_ref3) {
            var initialState = _ref3.initialState,
                scenes = _ref3.scenes;
            (0, _Util.assert)(initialState, 'initialState should not be null');
            (0, _Util.assert)(initialState.key, 'initialState.key should not be null');
            (0, _Util.assert)(scenes, 'scenes should not be null');
            return function(stateParam, actionParam) {
                var state = stateParam;
                var action = actionParam;
                state = state || _extends({}, initialState, {
                    scenes: scenes
                });
                (0, _Util.assert)(action, 'action should be defined');
                (0, _Util.assert)(action.type, 'action type should be defined');
                (0, _Util.assert)(state.scenes, 'state.scenes is missed');

                if (action.key) {
                    if (_Actions.ActionMap[action.type] === ActionConst.REFRESH) {
                        (function() {
                            var key = action.key;
                            var child = findElement(state, key, action.type) || state.scenes[key];
                            var sceneKey = child.sceneKey;
                            if (child.base) {
                                child = _extends({}, state.scenes[child.base], child);
                                (0, _Util.assert)(state.scenes[child.base], 'No scene exists for base=' + child.base);
                                key = state.scenes[child.base].key;
                                sceneKey = state.scenes[child.base].sceneKey;
                            }
                            (0, _Util.assert)(child, 'missed child data for key=' + key);

                            var evaluated = {};
                            Object.keys(action).forEach(function(el) {
                                if (typeof action[el] === 'function' && typeof child[el] !== 'undefined' &&
                                    typeof child[el] !== typeof action[el]) {
                                    evaluated[el] = action[el](child[el], child);
                                }
                            });
                            action = _extends({}, child, action, evaluated, {
                                sceneKey: sceneKey,
                                key: key
                            });
                        })();


                    } else {
                        var scene = state.scenes[action.key];
                        (0, _Util.assert)(scene, 'missed route data for key=' + action.key);

                        if (scene.clone) {
                            action.parent = getCurrent(state).parent;
                        }
                    }
                } else {

                    if (_Actions.ActionMap[action.type] === ActionConst.BACK_ACTION ||
                        _Actions.ActionMap[action.type] === ActionConst.BACK ||
                        _Actions.ActionMap[action.type] === ActionConst.POP_AND_REPLACE ||
                        _Actions.ActionMap[action.type] === ActionConst.REFRESH ||
                        _Actions.ActionMap[action.type] === ActionConst.POP_TO) {
                        if (!action.key && !action.parent) {
                            action = _extends({}, getCurrent(state), action);
                        }
                    }


                    if (_Actions.ActionMap[action.type] === ActionConst.POP_TO) {



                        var target = action.data || action.scene;
                        (0, _Util.assert)(target, 'PopTo() must be called with a single argument: ' +
                            'either the scene name (string) or an object with within the scene property ' +
                            'carrying the target scene to pop to');

                        var targetEl = findElement(state, target, action.type);
                        (0, _Util.assert)(targetEl, 'Cannot find element name named ' + target + ' within current state');


                        var parent = targetEl.sceneKey;
                        var targetIndex = 0;


                        if (!targetEl.children) {
                            var targetParent = findElement(state, targetEl.parent, action.type);
                            (0, _Util.assert)(targetParent, 'Cannot find parent for target ' + target);
                            parent = targetParent.sceneKey;

                            targetIndex = targetParent.children.indexOf(targetEl);
                            (0, _Util.assert)(targetIndex > -1, target + ' does not belong to ' + targetParent.sceneKey);
                        }

                        action.parent = parent;
                        action.targetIndex = targetIndex;
                    }


                    if (_Actions.ActionMap[action.type] === ActionConst.BACK_ACTION ||
                        _Actions.ActionMap[action.type] === ActionConst.BACK ||
                        _Actions.ActionMap[action.type] === ActionConst.POP_AND_REPLACE) {
                        var _parent = action.parent || state.scenes[action.key].parent;
                        var el = findElement(state, _parent, action.type);
                        while (el.parent && (el.children.length <= 1 || el.tabs)) {
                            el = findElement(state, el.parent, action.type);
                            (0, _Util.assert)(el, 'Cannot find element for parent=' + el.parent + ' within current state');
                        }
                        action.parent = el.sceneKey;
                    }
                }

                switch (_Actions.ActionMap[action.type]) {
                    case ActionConst.BACK:
                    case ActionConst.BACK_ACTION:
                    case ActionConst.POP_AND_REPLACE:
                    case ActionConst.POP_TO:
                    case ActionConst.REFRESH:
                    case ActionConst.PUSH:
                    case ActionConst.PUSH_OR_POP:
                    case ActionConst.JUMP:
                    case ActionConst.REPLACE:
                    case ActionConst.RESET:
                        return update(state, action);

                    default:
                        return state;
                }


            };
        }
        exports.default =

            reducer;

        /***/
    },
    /* 59 */
    /***/
    function(module, exports, __webpack_require__) {

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
        exports.



        getInitialState = getInitialState;
        exports.default =



            function(scenes) {

                var rootRoute = Object.keys(scenes).find(function(route) {
                    return (
                        scenes.hasOwnProperty(route) && !scenes[route].parent);
                });

                return getInitialState(scenes[rootRoute], scenes);
            };
        var _Util = __webpack_require__(13);
        var _ActionConst = __webpack_require__(15);
        var ActionConst = _interopRequireWildcard(_ActionConst);

        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
                return obj;
            } else {
                var newObj = {};
                if (obj != null) {
                    for (var key in obj) {
                        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                    }
                }
                newObj.default = obj;
                return newObj;
            }
        }

        function _objectWithoutProperties(obj, keys) {
            var target = {};
            for (var i in obj) {
                if (keys.indexOf(i) >= 0) continue;
                if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
                target[i] = obj[i];
            }
            return target;
        }

        function getStateFromScenes(route, scenes, props) {
            var getters = [];
            var result = {};
            var scene = route;
            while (scene) {
                if (scene.getInitialState) {
                    getters.push(scene.getInitialState);
                }
                scene = scenes[scene.parent];
            }
            if (scenes.rootProps && scenes.rootProps.getInitialState) {
                getters.push(scenes.rootProps.getInitialState);
            }
            getters.reverse().forEach(function(fn) {
                result = _extends({}, result, fn(props));
            });
            return result;
        }

        function getSceneKey(parent, key, position, sceneKey) {
            return [parent, key, position, sceneKey].filter(function(v) {
                return typeof v !== 'undefined' && v !== null;
            }).join('_');
        }

        function getInitialState(route, scenes) {
            var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var props = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var parent = props.parent,
                key = props.key,
                style = props.style,
                type = props.type,
                parentProps = _objectWithoutProperties(props, ['parent', 'key', 'style', 'type']);
            if (!route.children) {
                return _extends({}, scenes.rootProps, route, {
                    key: getSceneKey(parent, key, position, route.sceneKey)
                }, parentProps, getStateFromScenes(route, scenes, props));
            }
            var res = _extends({}, route, scenes.rootProps, parentProps);
            var index = 0;
            route.children.forEach(function(r, i) {
                (0, _Util.assert)(scenes[r], 'Empty scene for key=' + route.key);
                if (scenes[r].initial) {
                    index = i;
                }
            });
            if (route.tabs) {
                res.children = route.children.map(function(r, i) {
                    return getInitialState(scenes[r], scenes, i, _extends({}, props, {
                        parentIndex: position
                    }));
                });
                res.index = index;
            } else {
                res.children = [getInitialState(scenes[route.children[index]], scenes, 0, props)];
                res.index = 0;
            }
            if (route.type === ActionConst.JUMP) {
                res.children = res.children.map(function(child) {
                    return _extends({}, props, child);
                });
            }
            res.key = position + '_' + res.key;
            return res;
        }

        /***/
    },
    /* 60 */
    /***/
    function(module, exports, __webpack_require__) {

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();



        var _react = __webpack_require__(10);
        var _react2 = _interopRequireDefault(_react);



        var _reactNative = __webpack_require__(8);
        var _reactNativeExperimentalNavigation = __webpack_require__(25);
        var _reactNativeExperimentalNavigation2 = _interopRequireDefault(_reactNativeExperimentalNavigation);

        var _Actions = __webpack_require__(12);
        var _Actions2 = _interopRequireDefault(_Actions);
        var _State = __webpack_require__(59);
        var _State2 = _interopRequireDefault(_State);
        var _Reducer = __webpack_require__(58);
        var _Reducer2 = _interopRequireDefault(_Reducer);
        var _DefaultRenderer = __webpack_require__(16);
        var _DefaultRenderer2 = _interopRequireDefault(_DefaultRenderer);
        var _Scene = __webpack_require__(14);
        var _Scene2 = _interopRequireDefault(_Scene);
        var _ActionConst = __webpack_require__(15);
        var ActionConst = _interopRequireWildcard(_ActionConst);

        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
                return obj;
            } else {
                var newObj = {};
                if (obj != null) {
                    for (var key in obj) {
                        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                    }
                }
                newObj.default = obj;
                return newObj;
            }
        }

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _objectWithoutProperties(obj, keys) {
            var target = {};
            for (var i in obj) {
                if (keys.indexOf(i) >= 0) continue;
                if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
                target[i] = obj[i];
            }
            return target;
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var


            NavigationRootContainer = _reactNativeExperimentalNavigation2.default.RootContainer;


        var propTypes = {
            dispatch: _react.PropTypes.func,
            backAndroidHandler: _react.PropTypes.func,
            onBackAndroid: _react.PropTypes.func,
            onExitApp: _react.PropTypes.func
        };
        var


            Router = function(_Component) {
            _inherits(Router, _Component);



            function Router(props) {
                _classCallCheck(this, Router);
                var _this = _possibleConstructorReturn(this, (Router.__proto__ || Object.getPrototypeOf(Router)).call(this,
                    props));
                _this.renderNavigation = _this.renderNavigation.bind(_this);
                _this.handleProps = _this.handleProps.bind(_this);
                _this.handleBackAndroid = _this.handleBackAndroid.bind(_this);
                var reducer = _this.handleProps(props);
                _this.state = {
                    reducer: reducer
                };
                return _this;
            }
            _createClass(Router, [{
                key: 'getChildContext',
                value: function getChildContext()

                {
                    return {
                        routes: _Actions2.default
                    };

                }
            }, {
                key: 'componentDidMount',
                value: function componentDidMount()

                {
                    _reactNative.BackAndroid.addEventListener('hardwareBackPress', this.handleBackAndroid);
                }
            }, {
                key: 'componentWillReceiveProps',
                value: function componentWillReceiveProps(

                    props) {
                    var reducer = this.handleProps(props);
                    this.setState({
                        reducer: reducer
                    });
                }
            }, {
                key: 'componentWillUnmount',
                value: function componentWillUnmount()

                {
                    _reactNative.BackAndroid.removeEventListener('hardwareBackPress', this.handleBackAndroid);
                }
            }, {
                key: 'handleBackAndroid',
                value: function handleBackAndroid()

                {
                    var _props =



                        this.props,
                        backAndroidHandler = _props.backAndroidHandler,
                        onBackAndroid = _props.onBackAndroid,
                        onExitApp = _props.onExitApp;

                    if (backAndroidHandler) {
                        return backAndroidHandler();
                    }

                    try {
                        _Actions2.default.pop();
                        if (onBackAndroid) {
                            onBackAndroid();
                        }
                        return true;
                    } catch (err) {
                        if (onExitApp) {
                            return onExitApp();
                        }

                        return false;
                    }
                }
            }, {
                key: 'handleProps',
                value: function handleProps(

                    props) {
                    var scenesMap = void 0;

                    if (props.scenes) {
                        scenesMap = props.scenes;
                    } else {
                        var _scenes = props.children;

                        if (Array.isArray(props.children) || props.children.props.component) {
                            _scenes =
                                (this && this.createElement || _react2.default.createElement)(_Scene2.default, _extends({
                                            key: '__root',
                                            hideNav: true
                                        },
                                        this.props),

                                    props.children);


                        }
                        scenesMap = _Actions2.default.create(_scenes, props.wrapBy);
                    }
                    var


                        children = props.children,
                        styles = props.styles,
                        scenes = props.scenes,
                        reducer = props.reducer,
                        createReducer = props.createReducer,
                        parentProps = _objectWithoutProperties(props, ['children', 'styles', 'scenes', 'reducer', 'createReducer']);

                    scenesMap.rootProps = parentProps;

                    var initialState = (0, _State2.default)(scenesMap);
                    var reducerCreator = props.createReducer || _Reducer2.default;

                    var routerReducer = props.reducer ||
                        reducerCreator({
                            initialState: initialState,
                            scenes: scenesMap
                        });


                    return routerReducer;
                }
            }, {
                key: 'renderNavigation',
                value: function renderNavigation(

                    navigationState, onNavigate) {
                    var _this2 = this;
                    if (!navigationState) {
                        return null;
                    }
                    _Actions2.default.get = function(key) {
                        return (0, _Reducer.findElement)(navigationState, key, ActionConst.REFRESH);
                    };
                    _Actions2.default.callback = function(props) {
                        var constAction = props.type && _Actions.ActionMap[props.type] ? _Actions.ActionMap[props.type] : null;
                        if (_this2.props.dispatch) {
                            if (constAction) {
                                _this2.props.dispatch(_extends({}, props, {
                                    type: constAction
                                }));
                            } else {
                                _this2.props.dispatch(props);
                            }
                        }
                        return constAction ? onNavigate(_extends({}, props, {
                            type: constAction
                        })) : onNavigate(props);
                    };

                    return (this && this.createElement || _react2.default.createElement)(_DefaultRenderer2.default, {
                        onNavigate: onNavigate,
                        navigationState: navigationState
                    });
                }
            }, {
                key: 'render',
                value: function render()

                {
                    if (!this.state.reducer) return null;

                    return (
                        (this && this.createElement || _react2.default.createElement)(NavigationRootContainer, {
                            reducer: this.state.reducer,
                            renderNavigation: this.renderNavigation
                        }));


                }
            }]);
            return Router;
        }(_react.Component);
        Router.childContextTypes = {
            routes: _react.PropTypes.object
        };


        Router.propTypes = propTypes;
        exports.default =

            Router;

        /***/
    },
    /* 61 */
    /***/
    function(module, exports, __webpack_require__) {

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
        exports.default =



            Switch;
        var _react = __webpack_require__(10);
        var _react2 = _interopRequireDefault(_react);
        var _TabBar = __webpack_require__(17);
        var _TabBar2 = _interopRequireDefault(_TabBar);
        var _Actions = __webpack_require__(12);
        var _Actions2 = _interopRequireDefault(_Actions);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function Switch(props) {
            var navState = props.navigationState;

            var selector = props.selector;
            var statem = props.statem;
            if (!selector && !statem) console.error('Selector should be defined.');
            var index = -1;
            var selectedKey = undefined;
            if (!selector) {

                navState.children.forEach(function(el, i) {
                    if (!(el.default || el.state)) {
                        console.error('Either default or state should be defined for element=' + el.key);
                    }
                    if (el.default) {
                        index = i;
                    } else {
                        if (el.state.active) {
                            index = i;
                        }
                    }
                });
            } else {
                selectedKey = selector(props);
                if (!selectedKey) console.error('Selector should return key.');
                navState.children.forEach(function(el, i) {
                    if (el.sceneKey === selectedKey) {
                        index = i;
                    }
                });
            }
            if (index === -1) console.error('A scene for key \u201C' + selectedKey + '\u201D does not exist.');
            selectedKey = navState.children[index].sceneKey;

            var navigationState = void 0;
            if (index !== navState.index) {
                if (props.unmountScenes) {
                    navigationState = _extends({},
                        navState, {
                            children: [navState.children[navState.index]],
                            index: 0
                        });

                    setTimeout(function() {
                        _Actions2.default[selectedKey]({
                            unmountScenes: true
                        });
                    }, 1);
                } else {
                    navigationState = _extends({}, navState, {
                        index: index
                    });
                    setTimeout(function() {
                        _Actions2.default[selectedKey]();
                    }, 1);
                }
            } else {
                navigationState = navState;
            }

            return (
                (this && this.createElement || _react2.default.createElement)(_TabBar2.default, {
                    onNavigate: props.onNavigate,
                    navigationState: navigationState
                }));


        }

        Switch.propTypes = {
            navigationState: _react.PropTypes.object,
            onNavigate: _react.PropTypes.func,
            selector: _react.PropTypes.func,
            statem: _react.PropTypes.any,
            unmountScenes: _react.PropTypes.bool
        };

        /***/
    },
    /* 62 */
    /***/
    function(module, exports, __webpack_require__) {

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _this = this;
        var _react = __webpack_require__(10);
        var _react2 = _interopRequireDefault(_react);
        var _reactNative = __webpack_require__(8);



        var _reactNativeRouterFlux = __webpack_require__(11);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        var ScarletScreen = function ScarletScreen() {
            return (
                (_this && _this.createElement || _react2.default.createElement)(_reactNative.View, {
                        style: styles.container
                    },
                    (_this && _this.createElement || _react2.default.createElement)(_reactNative.Text, {
                        style: styles.welcome,
                        onPress: function onPress() {
                            return _reactNativeRouterFlux.Actions.gray();
                        }
                    }, 'Scarlet Screen'),



                    (_this && _this.createElement || _react2.default.createElement)(_reactNative.Text, {
                        style: styles.welcome,
                        onPress: function onPress() {
                            return _reactNativeRouterFlux.Actions.modal();
                        }
                    }, 'Open Modal')));



        };

        var styles = _reactNative.StyleSheet.create({
            container: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#bb0000'
            },

            welcome: {
                fontSize: 20,
                textAlign: 'center',
                margin: 10,
                color: '#ffffff'
            }
        });
        exports.default =



            ScarletScreen;

        /***/
    },
    /* 63 */
    /***/
    function(module, exports, __webpack_require__) {

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _this = this;
        var _react = __webpack_require__(10);
        var _react2 = _interopRequireDefault(_react);
        var _reactNative = __webpack_require__(8);



        var _reactNativeRouterFlux = __webpack_require__(11);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        var GrayScreen = function GrayScreen() {
            return (
                (_this && _this.createElement || _react2.default.createElement)(_reactNative.View, {
                        style: styles.container
                    },
                    (_this && _this.createElement || _react2.default.createElement)(_reactNative.Text, {
                        style: styles.welcome,
                        onPress: function onPress() {
                            return _reactNativeRouterFlux.Actions.scarlet();
                        }
                    }, 'Gray Screen')));



        };

        var styles = _reactNative.StyleSheet.create({
            container: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#666666'
            },

            welcome: {
                fontSize: 20,
                textAlign: 'center',
                margin: 10,
                color: '#ffffff'
            }
        });
        exports.default =



            GrayScreen;

        /***/
    },
    /* 64 */
    /***/
    function(module, exports, __webpack_require__) {

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _this = this;
        var _react = __webpack_require__(10);
        var _react2 = _interopRequireDefault(_react);
        var _reactNative = __webpack_require__(8);



        var _reactNativeRouterFlux = __webpack_require__(11);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        var MaizeScreen = function MaizeScreen() {
            return (
                (_this && _this.createElement || _react2.default.createElement)(_reactNative.View, {
                        style: styles.container
                    },
                    (_this && _this.createElement || _react2.default.createElement)(_reactNative.Text, {
                        style: styles.welcome,
                        onPress: function onPress() {
                            return _reactNativeRouterFlux.Actions.blue();
                        }
                    }, 'Maize Screen')));



        };

        var styles = _reactNative.StyleSheet.create({
            container: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#ffcb05'
            },

            welcome: {
                fontSize: 20,
                textAlign: 'center',
                margin: 10,
                color: '#ffffff'
            }
        });
        exports.default =



            MaizeScreen;

        /***/
    },
    /* 65 */
    /***/
    function(module, exports, __webpack_require__) {

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _this = this;
        var _react = __webpack_require__(10);
        var _react2 = _interopRequireDefault(_react);
        var _reactNative = __webpack_require__(8);



        var _reactNativeRouterFlux = __webpack_require__(11);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        var GoldScreen = function GoldScreen() {
            return (
                (_this && _this.createElement || _react2.default.createElement)(_reactNative.View, {
                        style: styles.container
                    },
                    (_this && _this.createElement || _react2.default.createElement)(_reactNative.Text, {
                        style: styles.welcome,
                        onPress: function onPress() {
                            return _reactNativeRouterFlux.Actions.black();
                        }
                    }, 'Gold Screen'),



                    (_this && _this.createElement || _react2.default.createElement)(_reactNative.Text, {
                        style: styles.welcome,
                        onPress: function onPress() {
                            return _reactNativeRouterFlux.Actions.modal();
                        }
                    }, 'Open Modal')));



        };

        var styles = _reactNative.StyleSheet.create({
            container: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#997F3D'
            },

            welcome: {
                fontSize: 20,
                textAlign: 'center',
                margin: 10,
                color: '#ffffff'
            }
        });
        exports.default =



            GoldScreen;

        /***/
    },
    /* 66 */
    /***/
    function(module, exports, __webpack_require__) {

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _this = this;
        var _react = __webpack_require__(10);
        var _react2 = _interopRequireDefault(_react);
        var _reactNative = __webpack_require__(8);



        var _reactNativeRouterFlux = __webpack_require__(11);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        var Modal = function Modal() {
            return (
                (_this && _this.createElement || _react2.default.createElement)(_reactNative.View, {
                        style: styles.container
                    },
                    (_this && _this.createElement || _react2.default.createElement)(_reactNative.Text, {
                        style: styles.welcome,
                        onPress: function onPress() {
                            return _reactNativeRouterFlux.Actions.pop();
                        }
                    }, 'Modal')));



        };

        var styles = _reactNative.StyleSheet.create({
            container: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#FF8200'
            },

            welcome: {
                fontSize: 20,
                textAlign: 'center',
                margin: 10,
                color: '#ffffff'
            }
        });
        exports.default =



            Modal;

        /***/
    }
    /******/
]);;
(function() {
    function _(n) {
        var m = Object.create(window.__mappings || null);
        for (var i in n) {
            m[i] = n[i]
        }
        window.__mappings = m
    };
    _({});
    EventEmitter.emit("rn:ready", {
        rn_version: window._rnverion || '1.5.0',
        releaseType: 'dev'
    })
})()