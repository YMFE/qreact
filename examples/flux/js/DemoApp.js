/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/prdm/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 88);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = QunarReactWeb;

/***/ }),
/* 1 */
/***/ (function(module, exports) {





module.exports={
'loading':'http://s.qunarzz.com/dev_test/qunar_react_native_demo/loading.png',
'minion':'http://s.qunarzz.com/dev_test/qunar_react_native_demo/minion.png',
'progress':'http://s.qunarzz.com/dev_test/qunar_react_native_demo/progress.png',
'track':'http://s.qunarzz.com/dev_test/qunar_react_native_demo/track.png',
'uie_thumb_normal':'http://s.qunarzz.com/dev_test/qunar_react_native_demo/uie_thumb_normal.png',
'uie_thumb_selected':'http://s.qunarzz.com/dev_test/qunar_react_native_demo/uie_thumb_selected.png',
'uie_comment_normal':'http://s.qunarzz.com/dev_test/qunar_react_native_demo/uie_comment_normal.png',
'uie_comment_highlighted':'http://s.qunarzz.com/dev_test/qunar_react_native_demo/uie_comment_highlighted.png',
'story-background':'http://s.qunarzz.com/dev_test/qunar_react_native_demo/story-background.png',
'bunny':'http://s.qunarzz.com/dev_test/qunar_react_native_demo/bunny.png',
'logo_og':'http://s.qunarzz.com/dev_test/qunar_react_native_demo/facebook/logo_og.png',
'logo_og_error':'http://s.qunarzz.com/dev_test/qunar_react_native_demo/facebook/logo_og_error.png',
'blog_hero':'http://s.qunarzz.com/dev_test/qunar_react_native_demo/facebook/blog_hero.jpg',
'birds':'http://s.qunarzz.com/dev_test/qunar_react_native_demo/facebook/birds.jpg'};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactWeb;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}




var styles={
header:{
padding:8,
backgroundColor:'#fff',
alignItems:'center',
borderBottomWidth:1,
borderBottomColor:"#ccc"},

headerText:{
fontSize:16,
fontWeight:'bold'},

headerReturn:{
position:'absolute',
left:12,
top:12},

headerReturnText:{
fontSize:14,
color:'#666'},

section:{
margin:10,
backgroundColor:'#fff',
borderRadius:3},

sectionHeader:{
padding:10,
borderBottomWidth:1,
borderColor:'#ccc',
borderRadius:3,
backgroundColor:'#f6f7f8'},

description:{
padding:7,
borderBottomWidth:1,
borderColor:'#ccc',
backgroundColor:'#f1f1f1'},

sectionBody:{
paddingTop:20,
paddingBottom:20,
paddingLeft:10,
paddingRight:10},

container:{
flex:1},

scene:{
flex:1,
marginTop:20,
alignItems:'stretch',
backgroundColor:'#e9eaed'},

titleContainer:{
margin:10,
padding:10,
justifyContent:'center',
alignItems:'center',
borderStyle:'dashed',
borderRadius:5,
borderColor:'#1ba9ba',
borderWidth:1},

title:{
fontSize:20,
color:'#1ba9ba'},

list:{
flex:1,
paddingBottom:40,

backgroundColor:'#ffffff'},

noteWrap:{
height:50,
paddingLeft:21,
flexDirection:'row',
alignItems:'center',
borderBottomWidth:2,
borderColor:'#1ba9ba'},

noteWrapText:{
fontWeight:'bold',
fontSize:16,
color:'#1ba9ba'},

noteWrapTextIcon:{
fontFamily:'qunar_react_native',
fontSize:14,
width:14,
height:14,
marginRight:5,
color:'#1ba9ba'},

listRow:{
flexDirection:'row',
paddingTop:8,
paddingBottom:8,
paddingLeft:40,
borderBottomWidth:1/_qunarReactNative.PixelRatio.get(),
borderBottomColor:"#eeeeee",
backgroundColor:'#fff'},

listRowText:{
fontSize:16,
color:'#444'},

logo:{
marginLeft:10,
marginRight:10,
width:20,
height:20},

valueText:{
marginBottom:12,
textAlign:'center'},

wrapper:{
flex:1}};exports.default=



styles;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);

var _styles=__webpack_require__(3);var _styles2=_interopRequireDefault(_styles);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

ExampleRender=function(_QView){_inherits(ExampleRender,_QView);

function ExampleRender(props){_classCallCheck(this,ExampleRender);return _possibleConstructorReturn(this,(ExampleRender.__proto__||Object.getPrototypeOf(ExampleRender)).call(this,
props));
}_createClass(ExampleRender,[{key:'render',value:function render()

{var _this2=this;var _props$param=
this.props.param,example=_props$param.example,name=_props$param.name,type=_props$param.type;
if(!example||!example.render){
example=__webpack_require__(7).getExample(name,type);
if(!example)return null;
}
var content=void 0,examples=example.examples;
var ExampleWrapper=example.scroll?_qunarReactNative.ScrollView:_qunarReactNative.View;

if(examples.length==1&&!examples[0].subtitle){
content=_qunarReactNative2.default.cloneElement(examples[0].render());
}else{
content=examples.map(function(item,i){var
subtitle=item.subtitle,description=item.description,platform=item.platform;
if(platform){
if(_qunarReactNative.Platform.OS!==platform){
return null;
}
subtitle+=' ('+platform+' only)';
}
return(

(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:_styles2.default.section,key:i},
(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:_styles2.default.sectionHeader},
(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:_styles2.default.sectionHeaderText},subtitle)),

item.description&&(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:_styles2.default.description},
(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,item.description)),

(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:_styles2.default.sectionBody},
_qunarReactNative2.default.cloneElement(item.render()))));



});

}

return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:_styles2.default.container},
(this&&this.createElement||_qunarReactNative2.default.createElement)(ExampleWrapper,{style:_styles2.default.wrapper},content)));


}}]);return ExampleRender;}(QView);ExampleRender=Ext?Ext.register(ExampleRender,'ExampleRender'):ExampleRender;
;exports.default=

ExampleRender;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var React=__webpack_require__(0);var

StyleSheet=


React.StyleSheet,Text=React.Text,TouchableHighlight=React.TouchableHighlight;

var UIExplorerButton=React.createClass({displayName:'UIExplorerButton',
propTypes:{
onPress:React.PropTypes.func},

render:function render(){
return(
(this&&this.createElement||React.createElement)(TouchableHighlight,{
onPress:this.props.onPress,
style:styles.button,
underlayColor:'grey'},
(this&&this.createElement||React.createElement)(Text,null,
this.props.children)));



}});


var styles=StyleSheet.create({
button:{
borderColor:'#696969',
borderRadius:8,
borderWidth:1,
padding:10,
margin:5,
alignItems:'center',
justifyContent:'center',
backgroundColor:'#d3d3d3'}});



module.exports=UIExplorerButton;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var g;


g=function(){
return this;
}();

try{

g=g||Function("return this")()||(1,eval)("this");
}catch(e){

if(typeof window==="object")
g=window;
}





module.exports=g;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);












var _ExampleRender=__webpack_require__(4);var _ExampleRender2=_interopRequireDefault(_ExampleRender);
var _styles=__webpack_require__(3);var _styles2=_interopRequireDefault(_styles);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var componentExamples={
Slider:__webpack_require__(74),
ProgressView:__webpack_require__(60),
Tab:__webpack_require__(77),
Loading:__webpack_require__(57),
Button:__webpack_require__(45),
TabBar:__webpack_require__(76),
ScrollView:__webpack_require__(65),
RefreshControl:__webpack_require__(64),
LoadControl:__webpack_require__(56),
ListView:__webpack_require__(51),
InfiniteListView:__webpack_require__(47),
QLoading:__webpack_require__(62),
QLoadingError:__webpack_require__(61),
TimePicker:__webpack_require__(78),
Picker:__webpack_require__(59),
Checked:__webpack_require__(46),
Radio:__webpack_require__(63),
Modal:__webpack_require__(58)};








var basicExamples={

View:__webpack_require__(44),
Image:__webpack_require__(41),
Text:__webpack_require__(42),
TextInput:__webpack_require__(43),
Switch:__webpack_require__(75)};






var apiExamples={
StorageManagerExample:__webpack_require__(33),
QunarApiModuleExapmle:__webpack_require__(32),
ActionSheet:__webpack_require__(13),
Alert:__webpack_require__(14),
Animated:__webpack_require__(15),
AnExApp:__webpack_require__(16),
AppState:__webpack_require__(22),

Border:__webpack_require__(23),

Clipboard:__webpack_require__(24),
CookieManager:__webpack_require__(25),
Geolocation:__webpack_require__(26),
Layout:__webpack_require__(27),
NetInfo:__webpack_require__(28),
PanResponder:__webpack_require__(29),
PointerEvents:__webpack_require__(30),
Timer:__webpack_require__(34),
Transform:__webpack_require__(35),
VibrationIOS:__webpack_require__(39)};





var qrnApiExamples={
DeviceInfo:__webpack_require__(82),
LoginManager:__webpack_require__(83),
CookieManager:__webpack_require__(81),
CameraRoll:__webpack_require__(80),
Toast:__webpack_require__(85),
QStatusBar:__webpack_require__(84),
QShareExample:__webpack_require__(31)};var


BasicDemo=function(_QView){_inherits(BasicDemo,_QView);function BasicDemo(){var _ref;var _temp,_this,_ret;_classCallCheck(this,BasicDemo);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=BasicDemo.__proto__||Object.getPrototypeOf(BasicDemo)).call.apply(_ref,[this].concat(args))),_this),_this.
styles=_styles2.default,_temp),_possibleConstructorReturn(_this,_ret);}_createClass(BasicDemo,[{key:'render',value:function render()





{
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.ScrollView,{style:_styles2.default.container},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:_styles2.default.list},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:_styles2.default.noteWrap},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:_styles2.default.noteWrapTextIcon},'\uF07F'),(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:_styles2.default.noteWrapText},'BASIC COMPONENT')),


this.renderList(basicExamples,'basicExamples'),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:_styles2.default.noteWrap},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:_styles2.default.noteWrapTextIcon},'\uF07F'),(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:_styles2.default.noteWrapText},'CORE COMPONENT')),


this.renderList(componentExamples,'componentExamples'),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:_styles2.default.noteWrap},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:_styles2.default.noteWrapTextIcon},'\uF07F'),(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:_styles2.default.noteWrapText},'QRN API')),

this.renderList(qrnApiExamples,'qrnApiExamples'),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:_styles2.default.noteWrap},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:_styles2.default.noteWrapTextIcon},'\uF07F'),(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:_styles2.default.noteWrapText},'RN API')),

this.renderList(apiExamples,'apiExamples'))));



}},{key:'gotoExample',value:function gotoExample(



example,exampleName,examplesType){
setTimeout(function(){
Ext.open('ExampleRender',{
title:example.title,
param:{example:example,
name:exampleName,
type:examplesType}});


});
}},{key:'renderList',value:function renderList(

examples,examplesType){var _this2=this;
return Object.keys(examples).map(function(exampleName,i){return(
(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableOpacity,{
key:i,
style:_styles2.default.listRow,
onPress:_this2.gotoExample.bind(_this2,examples[exampleName],exampleName,examplesType)},
(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:_styles2.default.listRowText},exampleName)));});


}}]);return BasicDemo;}(QView);BasicDemo.routerPlugin={title:'Qunar-React-Native Demo'};BasicDemo=Ext?Ext.register(BasicDemo,'BasicDemo'):BasicDemo;


module.exports.getExample=function(name,type){
switch(type){
case'apiExamples':return apiExamples[name];
case'basicExamples':return basicExamples[name];
case'componentExamples':return componentExamples[name];
case'qrnApiExamples':return qrnApiExamples[name];
case'ScrollViewList':return componentExamples.ScrollView.exampleList[name];
case'ListViewExample':return componentExamples.ListView.exampleList[name];
case'InfiniteListViewExample':return componentExamples.InfiniteListView.exampleList[name];
default:return null;}

};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {










var GLOBAL=typeof window==='undefined'?global:window;

var setter=function setter(_setter,_clearer,array){
return function(callback,delta){
var id=_setter(function(){
_clearer.call(this,id);
callback.apply(this,arguments);
}.bind(this),delta);

if(!this[array]){
this[array]=[id];
}else{
this[array].push(id);
}
return id;
};
};

var clearer=function clearer(_clearer,array){
return function(id){
if(this[array]){
var index=this[array].indexOf(id);
if(index!==-1){
this[array].splice(index,1);
}
}
_clearer(id);
};
};

var _timeouts='TimerMixin_timeouts';
var _clearTimeout=clearer(GLOBAL.clearTimeout,_timeouts);
var _setTimeout=setter(GLOBAL.setTimeout,_clearTimeout,_timeouts);

var _intervals='TimerMixin_intervals';
var _clearInterval=clearer(GLOBAL.clearInterval,_intervals);
var _setInterval=setter(GLOBAL.setInterval,function(){},_intervals);

var _immediates='TimerMixin_immediates';
var _clearImmediate=clearer(GLOBAL.clearImmediate,_immediates);
var _setImmediate=setter(GLOBAL.setImmediate,_clearImmediate,_immediates);

var _rafs='TimerMixin_rafs';
var _cancelAnimationFrame=clearer(GLOBAL.cancelAnimationFrame,_rafs);
var _requestAnimationFrame=setter(GLOBAL.requestAnimationFrame,_cancelAnimationFrame,_rafs);

var TimerMixin={
componentWillUnmount:function componentWillUnmount(){
this[_timeouts]&&this[_timeouts].forEach(function(id){
GLOBAL.clearTimeout(id);
});
this[_timeouts]=null;
this[_intervals]&&this[_intervals].forEach(function(id){
GLOBAL.clearInterval(id);
});
this[_intervals]=null;
this[_immediates]&&this[_immediates].forEach(function(id){
GLOBAL.clearImmediate(id);
});
this[_immediates]=null;
this[_rafs]&&this[_rafs].forEach(function(id){
GLOBAL.cancelAnimationFrame(id);
});
this[_rafs]=null;
},

setTimeout:_setTimeout,
clearTimeout:_clearTimeout,

setInterval:_setInterval,
clearInterval:_clearInterval,

setImmediate:_setImmediate,
clearImmediate:_clearImmediate,

requestAnimationFrame:_requestAnimationFrame,
cancelAnimationFrame:_cancelAnimationFrame};


module.exports=TimerMixin;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {








__webpack_require__(86);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {





QunarReactWeb.QImageSet=__webpack_require__(1);
QunarReactWeb.QFontSet=__webpack_require__(79);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {



module.exports=function(o){
return new Promise(function(rs){
rs(o);
});
};
global.process.AsyncLoader=function(md){
return new Promise(function(rs,rj){
__webpack_require__.e?__webpack_require__.e(md[0],function(){
md=__webpack_require__(md[1]);
rs(md.default||md);
}):rs(__webpack_require__(md[1]));
});
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var _this7=this;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var React=__webpack_require__(0);var

Component=




React.Component,ActionSheetIOS=React.ActionSheetIOS,StyleSheet=React.StyleSheet,Text=React.Text,View=React.View;

var BUTTONS=[
'Option 0',
'Option 1',
'Option 2',
'Delete',
'Cancel'];

var DESTRUCTIVE_INDEX=3;
var CANCEL_INDEX=4;var

ActionSheetExample=function(_Component){_inherits(ActionSheetExample,_Component);
function ActionSheetExample(props,context){_classCallCheck(this,ActionSheetExample);var _this=_possibleConstructorReturn(this,(ActionSheetExample.__proto__||Object.getPrototypeOf(ActionSheetExample)).call(this,
props,context));
_this.state={clicked:'none'};return _this;
}_createClass(ActionSheetExample,[{key:'render',value:function render()

{
return(
(this&&this.createElement||React.createElement)(View,null,
(this&&this.createElement||React.createElement)(Text,{onPress:this.showActionSheet.bind(this),style:style.button},'Click to show the ActionSheet'),


(this&&this.createElement||React.createElement)(Text,null,'Clicked button: ',
this.state.clicked)));



}},{key:'showActionSheet',value:function showActionSheet()

{var _this2=this;
ActionSheetIOS.showActionSheetWithOptions(
{
options:BUTTONS,
cancelButtonIndex:CANCEL_INDEX,
destructiveButtonIndex:DESTRUCTIVE_INDEX},

function(buttonIndex){
_this2.setState({clicked:BUTTONS[buttonIndex]});
});

}}]);return ActionSheetExample;}(Component);var


ActionSheetTintExample=function(_Component2){_inherits(ActionSheetTintExample,_Component2);
function ActionSheetTintExample(props,context){_classCallCheck(this,ActionSheetTintExample);var _this3=_possibleConstructorReturn(this,(ActionSheetTintExample.__proto__||Object.getPrototypeOf(ActionSheetTintExample)).call(this,
props,context));
_this3.state={clicked:'none'};return _this3;
}_createClass(ActionSheetTintExample,[{key:'render',value:function render()

{
return(
(this&&this.createElement||React.createElement)(View,null,
(this&&this.createElement||React.createElement)(Text,{onPress:this.showActionSheet.bind(this),style:style.button},'Click to show the ActionSheet'),


(this&&this.createElement||React.createElement)(Text,null,'Clicked button: ',
this.state.clicked)));



}},{key:'showActionSheet',value:function showActionSheet()

{var _this4=this;
ActionSheetIOS.showActionSheetWithOptions(
{
options:BUTTONS,
cancelButtonIndex:CANCEL_INDEX,
destructiveButtonIndex:DESTRUCTIVE_INDEX,
tintColor:'green'},

function(buttonIndex){
_this4.setState({clicked:BUTTONS[buttonIndex]});
});

}}]);return ActionSheetTintExample;}(Component);var


ShareActionSheetExample=function(_Component3){_inherits(ShareActionSheetExample,_Component3);
function ShareActionSheetExample(props,context){_classCallCheck(this,ShareActionSheetExample);var _this5=_possibleConstructorReturn(this,(ShareActionSheetExample.__proto__||Object.getPrototypeOf(ShareActionSheetExample)).call(this,
props,context));
_this5.state={text:''};return _this5;
}_createClass(ShareActionSheetExample,[{key:'render',value:function render()

{
return(
(this&&this.createElement||React.createElement)(View,null,
(this&&this.createElement||React.createElement)(Text,{onPress:this.showShareActionSheet.bind(this),style:style.button},'Click to show the Share ActionSheet'),


(this&&this.createElement||React.createElement)(Text,null,
this.state.text)));



}},{key:'showShareActionSheet',value:function showShareActionSheet()

{var _this6=this;
ActionSheetIOS.showShareActionSheetWithOptions(
{
url:this.props.url,
message:'message to go with the shared url',
subject:'a subject to go in the email heading',
excludedActivityTypes:[
'com.apple.UIKit.activity.PostToTwitter']},


function(error){return alert(error);},
function(success,method){
var text;
if(success){
text='Shared via '+method;
}else{
text='You didn\'t share';
}
_this6.setState({text:text});
});

}}]);return ShareActionSheetExample;}(Component);


var style=StyleSheet.create({
button:{
marginBottom:10,
fontWeight:'500'}});



exports.title='ActionSheetIOS';
exports.description='Interface to show iOS\' action sheets';
exports.examples=[
{
subtitle:'Show Action Sheet',
render:function render(){return(_this7&&_this7.createElement||React.createElement)(ActionSheetExample,null);}},

{
subtitle:'Show Action Sheet with tinted buttons',
render:function render(){return(_this7&&_this7.createElement||React.createElement)(ActionSheetTintExample,null);}},

{
subtitle:'Show Share Action Sheet',
render:function render(){return(_this7&&_this7.createElement||React.createElement)(ShareActionSheetExample,{url:'https://code.facebook.com'});}},

{
subtitle:'Share Local Image',
render:function render(){return(_this7&&_this7.createElement||React.createElement)(ShareActionSheetExample,{url:'bunny.png'});}}];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=_qunarReactNative.StyleSheet.create({
wrapper:{
borderRadius:5,
marginBottom:5},

button:{
backgroundColor:'#eeeeee',
padding:10},

text:{
padding:10}});



var alertMessage='Credibly reintermediate next-generation potentialities after goal-oriented '+
'catalysts for change. Dynamically revolutionize.';var

AlertExample=function(_Component){_inherits(AlertExample,_Component);
function AlertExample(props){_classCallCheck(this,AlertExample);var _this=_possibleConstructorReturn(this,(AlertExample.__proto__||Object.getPrototypeOf(AlertExample)).call(this,
props));
_this.state={
threeButtonValue:'none',
tooManyButtonValue:'none'};return _this;

}_createClass(AlertExample,[{key:'getConsoleButton',value:function getConsoleButton(

arr,stateKey){var _this2=this;
return arr.map(function(key){
return{
text:key,
onPress:function onPress(){return _this2.setState(_defineProperty({},
stateKey,key));}};


});
}},{key:'render',value:function render()

{
var threeButtonValue=this.getConsoleButton(['乖乖站好','啊♂','幻想乡'],'threeButtonValue');
var tooMany=new Array(10).fill('').map(function(_,index){return'Button '+index;});
var tooManyButtonValue=this.getConsoleButton(tooMany,'tooManyButtonValue');

return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableHighlight,{
style:styles.wrapper,
onPress:function onPress(){return _qunarReactNative.Alert.alert(
'Alert Title',
alertMessage);}},

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.button},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'Alert with message and default button'))),


(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableHighlight,{
style:styles.wrapper,
onPress:function onPress(){return _qunarReactNative.Alert.alert(
'Alert Title',
alertMessage,
[{text:'OK',onPress:function onPress(){return console.log('OK Pressed!');}}]);}},

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.button},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'Alert with one button'))),


(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableHighlight,{
style:styles.wrapper,
onPress:function onPress(){return _qunarReactNative.Alert.alert(
'Alert Title',
alertMessage,
[
{text:'Cancel',onPress:function onPress(){return console.log('Cancel Pressed!');}},
{text:'OK',onPress:function onPress(){return console.log('OK Pressed!');}}]);}},


(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.button},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'Alert with two buttons'))),


(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableHighlight,{
style:styles.wrapper,
onPress:function onPress(){return _qunarReactNative.Alert.alert(
'Alert Title',
null,
threeButtonValue);}},

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.button},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'Alert with three buttons'))),


(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.text},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'You selected: ',this.state.threeButtonValue)),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableHighlight,{
style:styles.wrapper,
onPress:function onPress(){return _qunarReactNative.Alert.alert(
'Foo Title',
alertMessage,
tooManyButtonValue);}},

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.button},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'Alert with too many buttons'))),


(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.text},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'You selected: ',this.state.tooManyButtonValue)),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableHighlight,{
style:styles.wrapper,
onPress:function onPress(){return _qunarReactNative.Alert.alert(
'Only Title',
null);}},

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.button},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'Alert with no message but title'))),


(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableHighlight,{
style:styles.wrapper,
onPress:function onPress(){return _qunarReactNative.Alert.alert(
null,
'Only Message');}},

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.button},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'Alert with no title but message')))));




}}]);return AlertExample;}(_qunarReactNative.Component);



module.exports={
title:'Alert',
scroll:true,
examples:[{
render:function render(){
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(AlertExample,null));

}}]};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var _this6=this;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var React=__webpack_require__(0);var

Animated=




React.Animated,Easing=React.Easing,StyleSheet=React.StyleSheet,Text=React.Text,View=React.View;
var UIExplorerButton=__webpack_require__(5);

exports.framework='React';
exports.title='Animated - Examples';
exports.scroll=true;

exports.examples=[
{
subtitle:'淡入',
description:'当组件启动时使用简单计时器动画将组件透明度由0改为1',
render:function render(){var
FadeInView=function(_React$Component){_inherits(FadeInView,_React$Component);
function FadeInView(props){_classCallCheck(this,FadeInView);var _this=_possibleConstructorReturn(this,(FadeInView.__proto__||Object.getPrototypeOf(FadeInView)).call(this,
props));
_this.state={
fadeAnim:new Animated.Value(0)};return _this;

}_createClass(FadeInView,[{key:'componentDidMount',value:function componentDidMount()
{
Animated.timing(
this.state.fadeAnim,
{
toValue:1,
duration:2000}).

start();
}},{key:'render',value:function render()
{
return(
(this&&this.createElement||React.createElement)(Animated.View,{
style:{opacity:this.state.fadeAnim}},
this.props.children));


}}]);return FadeInView;}(React.Component);var

FadeInExample=function(_React$Component2){_inherits(FadeInExample,_React$Component2);
function FadeInExample(props){_classCallCheck(this,FadeInExample);var _this2=_possibleConstructorReturn(this,(FadeInExample.__proto__||Object.getPrototypeOf(FadeInExample)).call(this,
props));
_this2.state={
show:true};return _this2;

}_createClass(FadeInExample,[{key:'render',value:function render()
{var _this3=this;
return(
(this&&this.createElement||React.createElement)(View,null,
(this&&this.createElement||React.createElement)(UIExplorerButton,{
onPress:function onPress(){return _this3.setState(function(state){return{show:!state.show};});}},'Press to ',
this.state.show?'Hide':'Show'),

this.state.show&&(this&&this.createElement||React.createElement)(FadeInView,null,
(this&&this.createElement||React.createElement)(View,{style:styles.content},
(this&&this.createElement||React.createElement)(Text,null,'FadeInView')))));




}}]);return FadeInExample;}(React.Component);

return(this&&this.createElement||React.createElement)(FadeInExample,null);
}},

{
subtitle:'变换跳跃',
description:'Animated.Value 是被由自定义常量组成的 spring 驱动, 这些常量会应用到成一系列 transform 变换上. 每一个 transform 都有一个 interpolation 将值转换为正确的返回和单位',
render:function render(){var _this4=this;
this.anim=this.anim||new Animated.Value(0);
return(
(this&&this.createElement||React.createElement)(View,null,
(this&&this.createElement||React.createElement)(UIExplorerButton,{onPress:function onPress(){return(
Animated.spring(_this4.anim,{
toValue:0,
velocity:3,
tension:-10,
friction:1}).
start());}},'Press to Fling it!'),



(this&&this.createElement||React.createElement)(Animated.View,{
style:[styles.content,{
transform:[
{scale:this.anim.interpolate({
inputRange:[0,1],
outputRange:[1,4]})},

{translateX:this.anim.interpolate({
inputRange:[0,1],
outputRange:[0,500]})},

{rotate:this.anim.interpolate({
inputRange:[0,1],
outputRange:[
'0deg','360deg']})}]}]},





(this&&this.createElement||React.createElement)(Text,null,'Transforms!'))));



}},

{
subtitle:'Composite Animations with Easing',
description:'Sequence, parallel, delay, and '+
'stagger with different easing functions.',
render:function render(){var _this5=this;
this.anims=this.anims||[1,2,3].map(
function(){return new Animated.Value(0);});

return(
(this&&this.createElement||React.createElement)(View,null,
(this&&this.createElement||React.createElement)(UIExplorerButton,{onPress:function onPress(){
var timing=Animated.timing;
Animated.sequence([
timing(_this5.anims[0],{
toValue:200,
easing:Easing.linear}),

Animated.delay(400),
timing(_this5.anims[0],{
toValue:0,
easing:Easing.elastic(2)}),

Animated.delay(400),
Animated.stagger(200,
_this5.anims.map(function(anim){return timing(
anim,{toValue:200});}).
concat(
_this5.anims.map(function(anim){return timing(
anim,{toValue:0});}))),


Animated.delay(400),
Animated.parallel([
Easing.inOut(Easing.quad),
Easing.back(1.5),
Easing.ease].
map(function(easing,ii){return(
timing(_this5.anims[ii],{
toValue:320,easing:easing,duration:3000}));})),


Animated.delay(400),
Animated.stagger(200,
_this5.anims.map(function(anim){return timing(anim,{
toValue:0,
easing:Easing.bounce,
duration:2000});}))]).


start();}},'Press to Animate'),


['Composite','Easing','Animations!'].map(
function(text,ii){return(
(_this5&&_this5.createElement||React.createElement)(Animated.View,{
key:text,
style:[styles.content,{
left:_this5.anims[ii]}]},

(_this5&&_this5.createElement||React.createElement)(Text,null,text)));})));





}},

{
subtitle:'Continuous Interactions',
description:'Gesture events, chaining, 2D '+
'values, interrupting and transitioning '+
'animations, etc.',
render:function render(){return(
(_this6&&_this6.createElement||React.createElement)(Text,null,'Checkout the Gratuitous Animation App!'));}}];




var styles=StyleSheet.create({
content:{
backgroundColor:'deepskyblue',
borderWidth:1,
borderColor:'dodgerblue',
padding:20,
margin:20,
borderRadius:10,
alignItems:'center'}});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
















var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var React=__webpack_require__(0);var

Animated=




React.Animated,LayoutAnimation=React.LayoutAnimation,PanResponder=React.PanResponder,StyleSheet=React.StyleSheet,View=React.View;

var AnExSet=__webpack_require__(20);

var CIRCLE_SIZE=80;
var CIRCLE_MARGIN=18;
var NUM_CIRCLES=30;var

Circle=function(_React$Component){_inherits(Circle,_React$Component);


function Circle(props){_classCallCheck(this,Circle);var _this=_possibleConstructorReturn(this,(Circle.__proto__||Object.getPrototypeOf(Circle)).call(this));

_this._onLongPress=_this._onLongPress.bind(_this);
_this._toggleIsActive=_this._toggleIsActive.bind(_this);
_this.state={
isActive:false,
pan:new Animated.ValueXY(),
pop:new Animated.Value(0)};return _this;

}_createClass(Circle,[{key:'_onLongPress',value:function _onLongPress()

{var _this2=this;
var config={tension:40,friction:3};
this.state.pan.addListener(function(value){
_this2.props.onMove&&_this2.props.onMove(value);
});
Animated.spring(this.state.pop,_extends({
toValue:1},
config)).
start();
this.setState({panResponder:PanResponder.create({
onPanResponderMove:Animated.event([
null,
{dx:this.state.pan.x,dy:this.state.pan.y}]),

onPanResponderRelease:function onPanResponderRelease(e,gestureState){
LayoutAnimation.easeInEaseOut();
Animated.spring(_this2.state.pop,_extends({
toValue:0},
config)).
start();
_this2.setState({panResponder:undefined});
_this2.props.onMove&&_this2.props.onMove({
x:gestureState.dx+_this2.props.restLayout.x,
y:gestureState.dy+_this2.props.restLayout.y});

_this2.props.onDeactivate();
}})},
function(){
_this2.props.onActivate();
});
}},{key:'render',value:function render()

{var _this3=this;
if(this.state.panResponder){
var handlers=this.state.panResponder.panHandlers;
var dragStyle=_extends({
position:'absolute'},
this.state.pan.getLayout());

}else{
handlers={
onStartShouldSetResponder:function onStartShouldSetResponder(){return!_this3.state.isActive;},
onResponderGrant:function onResponderGrant(){
_this3.state.pan.setValue({x:0,y:0});
_this3.state.pan.setOffset(_this3.props.restLayout);
_this3.longTimer=setTimeout(_this3._onLongPress,300);
},
onResponderRelease:function onResponderRelease(){
if(!_this3.state.panResponder){
clearTimeout(_this3.longTimer);
_this3._toggleIsActive();
}
}};

}
var animatedStyle={
shadowOpacity:this.state.pop,
transform:[
{scale:this.state.pop.interpolate({
inputRange:[0,1],
outputRange:[1,1.3]})}]};



var openVal=this.props.openVal;
if(this.props.dummy){
animatedStyle.opacity=0;
}else if(this.state.isActive){
var innerOpenStyle=[styles.open,{
left:openVal.interpolate({inputRange:[0,1],outputRange:[this.props.restLayout.x,0]}),
top:openVal.interpolate({inputRange:[0,1],outputRange:[this.props.restLayout.y,0]}),
width:openVal.interpolate({inputRange:[0,1],outputRange:[CIRCLE_SIZE,this.props.containerLayout.width]}),
height:openVal.interpolate({inputRange:[0,1],outputRange:[CIRCLE_SIZE,this.props.containerLayout.height]}),
margin:openVal.interpolate({inputRange:[0,1],outputRange:[CIRCLE_MARGIN,0]}),
borderRadius:openVal.interpolate({inputRange:[-0.15,0,0.5,1],outputRange:[0,CIRCLE_SIZE/2,CIRCLE_SIZE*1.3,0]})}];

}
return(
(this&&this.createElement||React.createElement)(Animated.View,_extends({
onLayout:this.props.onLayout,
style:[styles.dragView,dragStyle,animatedStyle,this.state.isActive?styles.open:null]},
handlers),
(this&&this.createElement||React.createElement)(Animated.View,{style:[styles.circle,innerOpenStyle]},
(this&&this.createElement||React.createElement)(AnExSet,{
containerLayout:this.props.containerLayout,
id:this.props.id,
isActive:this.state.isActive,
openVal:this.props.openVal,
onDismiss:this._toggleIsActive}))));




}},{key:'_toggleIsActive',value:function _toggleIsActive(
velocity){var _this4=this;
var config={tension:30,friction:7};
if(this.state.isActive){
Animated.spring(this.props.openVal,_extends({toValue:0},config)).start(function(){
_this4.setState({isActive:false},_this4.props.onDeactivate);
});
}else{
this.props.onActivate();
this.setState({isActive:true,panResponder:undefined},function(){

Animated.spring(_this4.props.openVal,_extends({toValue:1},config)).start();
});
}
}}]);return Circle;}(React.Component);var


AnExApp=function(_React$Component2){_inherits(AnExApp,_React$Component2);

function AnExApp(props){_classCallCheck(this,AnExApp);var _this5=_possibleConstructorReturn(this,(AnExApp.__proto__||Object.getPrototypeOf(AnExApp)).call(this,
props));
var keys=[];
for(var idx=0;idx<NUM_CIRCLES;idx++){
keys.push('E'+idx);
}
_this5.state={
keys:keys,
restLayouts:[],
openVal:new Animated.Value(0)};

_this5._onMove=_this5._onMove.bind(_this5);return _this5;
}_createClass(AnExApp,[{key:'render',value:function render()

{var _this6=this;
var circles=this.state.keys.map(function(key,idx){
if(key===_this6.state.activeKey){
return(_this6&&_this6.createElement||React.createElement)(Circle,{key:key+'d',dummy:true});
}else{
if(!_this6.state.restLayouts[idx]){
var onLayout=function(index,e){
var layout=e.nativeEvent.layout;
this.setState(function(state){
state.restLayouts[index]=layout;
return state;
});
}.bind(_this6,idx);
}
return(
(_this6&&_this6.createElement||React.createElement)(Circle,{
key:key,
id:key,
openVal:_this6.state.openVal,
onLayout:onLayout,
restLayout:_this6.state.restLayouts[idx],
onActivate:_this6.setState.bind(_this6,{
activeKey:key,
activeInitialLayout:_this6.state.restLayouts[idx]})}));



}
});
if(this.state.activeKey){
circles.push(
(this&&this.createElement||React.createElement)(Animated.View,{key:'dark',style:[styles.darkening,{opacity:this.state.openVal}]}));

circles.push(
(this&&this.createElement||React.createElement)(Circle,{
openVal:this.state.openVal,
key:this.state.activeKey,
id:this.state.activeKey,
restLayout:this.state.activeInitialLayout,
containerLayout:this.state.layout,
onMove:this._onMove,
onDeactivate:function onDeactivate(){_this6.setState({activeKey:undefined});}}));


}
return(
(this&&this.createElement||React.createElement)(View,{style:styles.container},
(this&&this.createElement||React.createElement)(View,{style:styles.grid,onLayout:function onLayout(e){return _this6.setState({layout:e.nativeEvent.layout});}},
circles)));



}},{key:'_onMove',value:function _onMove(

position){
var newKeys=moveToClosest(this.state,position);
if(newKeys!==this.state.keys){
LayoutAnimation.easeInEaseOut();
this.setState({keys:newKeys});
}
}}]);return AnExApp;}(React.Component);



function distance(p1,p2){
var dx=p1.x-p2.x;
var dy=p1.y-p2.y;
return dx*dx+dy*dy;
}

function moveToClosest(_ref,position){var activeKey=_ref.activeKey,keys=_ref.keys,restLayouts=_ref.restLayouts;
var activeIdx=-1;
var closestIdx=activeIdx;
var minDist=Infinity;
var newKeys=[];
keys.forEach(function(key,idx){
var dist=distance(position,restLayouts[idx]);
if(key===activeKey){
idx=activeIdx;
}else{
newKeys.push(key);
}
if(dist<minDist){
minDist=dist;
closestIdx=idx;
}
});
if(closestIdx===activeIdx){
return keys;
}else{
newKeys.splice(closestIdx,0,activeKey);
return newKeys;
}
}

AnExApp.title='Animated - Gratuitous App';
AnExApp.description='Bunch of Animations - tap a circle to '+
'open a view with more animations, or longPress and drag to reorder circles.';

var styles=StyleSheet.create({
container:{
flex:1,
paddingTop:64},

grid:{
flex:1,
justifyContent:'center',
flexDirection:'row',
flexWrap:'wrap',
backgroundColor:'transparent'},

circle:{
width:CIRCLE_SIZE,
height:CIRCLE_SIZE,
borderRadius:CIRCLE_SIZE/2,
borderWidth:1,
borderColor:'black',
margin:CIRCLE_MARGIN,
overflow:'hidden'},

dragView:{
shadowRadius:10,
shadowColor:'rgba(0,0,0,0.7)',
shadowOffset:{height:8},
alignSelf:'flex-start',
backgroundColor:'transparent'},

open:{
position:'absolute',
left:0,
top:0,
right:0,
bottom:0,
width:undefined,
height:undefined,
borderRadius:0},

darkening:{
backgroundColor:'black',
position:'absolute',
left:0,
top:0,
right:0,
bottom:0}});



module.exports={
title:'AnExApp',
scroll:true,
examples:[{
render:function render(){
return(
(this&&this.createElement||React.createElement)(AnExApp,null));

}}]};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
















var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}

var React=__webpack_require__(0);var

Animated=




React.Animated,Image=React.Image,PanResponder=React.PanResponder,StyleSheet=React.StyleSheet,View=React.View;

var NUM_BOBBLES=5;
var RAD_EACH=Math.PI/2/(NUM_BOBBLES-2);
var RADIUS=160;
var BOBBLE_SPOTS=[].concat(_toConsumableArray(Array(NUM_BOBBLES))).map(function(_,i){
return i===0?{x:0,y:0}:{
x:-Math.cos(RAD_EACH*(i-1))*RADIUS,
y:-Math.sin(RAD_EACH*(i-1))*RADIUS};

});var

AnExBobble=function(_React$Component){_inherits(AnExBobble,_React$Component);
function AnExBobble(props){_classCallCheck(this,AnExBobble);var _this=_possibleConstructorReturn(this,(AnExBobble.__proto__||Object.getPrototypeOf(AnExBobble)).call(this,
props));
_this.state={};
_this.state.bobbles=BOBBLE_SPOTS.map(function(_,i){
return new Animated.ValueXY();
});
_this.state.selectedBobble=null;
var bobblePanListener=function bobblePanListener(e,gestureState){
var newSelected=computeNewSelected(gestureState);
if(_this.state.selectedBobble!==newSelected){
if(_this.state.selectedBobble!==null){
var restSpot=BOBBLE_SPOTS[_this.state.selectedBobble];
Animated.spring(_this.state.bobbles[_this.state.selectedBobble],{
toValue:restSpot}).
start();
}
if(newSelected!==null&&newSelected!==0){
Animated.spring(_this.state.bobbles[newSelected],{
toValue:_this.state.bobbles[0]}).
start();
}
_this.state.selectedBobble=newSelected;
}
};
var releaseBobble=function releaseBobble(){
_this.state.bobbles.forEach(function(bobble,i){
Animated.spring(bobble,{
toValue:{x:0,y:0}}).
start();
});
};
_this.state.bobbleResponder=PanResponder.create({
onStartShouldSetPanResponder:function onStartShouldSetPanResponder(){return true;},
onPanResponderGrant:function onPanResponderGrant(){
BOBBLE_SPOTS.forEach(function(spot,idx){
Animated.spring(_this.state.bobbles[idx],{
toValue:spot,
friction:3}).
start();
});
},
onPanResponderMove:Animated.event(
[null,{dx:_this.state.bobbles[0].x,dy:_this.state.bobbles[0].y}],
{listener:bobblePanListener}),

onPanResponderRelease:releaseBobble,
onPanResponderTerminate:releaseBobble});return _this;

}_createClass(AnExBobble,[{key:'render',value:function render()

{var _this2=this;
return(
(this&&this.createElement||React.createElement)(View,{style:styles.bobbleContainer},
this.state.bobbles.map(function(_,i){
var j=_this2.state.bobbles.length-i-1;
var handlers=j>0?{}:_this2.state.bobbleResponder.panHandlers;
return(
(_this2&&_this2.createElement||React.createElement)(Animated.Image,_extends({},
handlers,{
key:i,
source:{uri:BOBBLE_IMGS[j]},
style:[styles.circle,{
backgroundColor:randColor(),
transform:_this2.state.bobbles[j].getTranslateTransform()}]})));



})));


}}]);return AnExBobble;}(React.Component);


var styles=StyleSheet.create({
circle:{
position:'absolute',
height:60,
width:60,
borderRadius:30,
borderWidth:0.5},

bobbleContainer:{
top:-68,
paddingRight:66,
flexDirection:'row',
flex:1,
justifyContent:'flex-end',
backgroundColor:'transparent'}});



function computeNewSelected(
gestureState)
{var
dx=gestureState.dx,dy=gestureState.dy;
var minDist=Infinity;
var newSelected=null;
var pointRadius=Math.sqrt(dx*dx+dy*dy);
if(Math.abs(RADIUS-pointRadius)<80){
BOBBLE_SPOTS.forEach(function(spot,idx){
var delta={x:spot.x-dx,y:spot.y-dy};
var dist=delta.x*delta.x+delta.y*delta.y;
if(dist<minDist){
minDist=dist;
newSelected=idx;
}
});
}
return newSelected;
}

function randColor(){
var colors=[0,1,2].map(function(){return Math.floor(Math.random()*150+100);});
return'rgb('+colors.join(',')+')';
}

var BOBBLE_IMGS=[
'https://scontent-sea1-1.xx.fbcdn.net/hphotos-xpf1/t39.1997-6/10173489_272703316237267_1025826781_n.png',
'https://scontent-sea1-1.xx.fbcdn.net/hphotos-xaf1/l/t39.1997-6/p240x240/851578_631487400212668_2087073502_n.png',
'https://scontent-sea1-1.xx.fbcdn.net/hphotos-xaf1/t39.1997-6/p240x240/851583_654446917903722_178118452_n.png',
'https://scontent-sea1-1.xx.fbcdn.net/hphotos-xaf1/t39.1997-6/p240x240/851565_641023175913294_875343096_n.png',
'https://scontent-sea1-1.xx.fbcdn.net/hphotos-xaf1/t39.1997-6/851562_575284782557566_1188781517_n.png'];


module.exports=AnExBobble;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
















var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var React=__webpack_require__(0);var

Animated=




React.Animated,Image=React.Image,PanResponder=React.PanResponder,StyleSheet=React.StyleSheet,View=React.View;var

AnExChained=function(_React$Component){_inherits(AnExChained,_React$Component);
function AnExChained(props){_classCallCheck(this,AnExChained);var _this=_possibleConstructorReturn(this,(AnExChained.__proto__||Object.getPrototypeOf(AnExChained)).call(this,
props));
_this.state={
stickers:[new Animated.ValueXY()]};

var stickerConfig={tension:2,friction:3};
for(var i=0;i<4;i++){
var sticker=new Animated.ValueXY();
Animated.spring(sticker,_extends({},
stickerConfig,{
toValue:_this.state.stickers[i]})).
start();
_this.state.stickers.push(sticker);
}
var releaseChain=function releaseChain(e,gestureState){
_this.state.stickers[0].flattenOffset();
Animated.sequence([
Animated.decay(_this.state.stickers[0],{
velocity:{x:gestureState.vx,y:gestureState.vy},
deceleration:0.997}),

Animated.spring(_this.state.stickers[0],{
toValue:{x:0,y:0}})]).

start();
};
_this.state.chainResponder=PanResponder.create({
onStartShouldSetPanResponder:function onStartShouldSetPanResponder(){return true;},
onPanResponderGrant:function onPanResponderGrant(){
_this.state.stickers[0].stopAnimation(function(value){
_this.state.stickers[0].setOffset(value);
_this.state.stickers[0].setValue({x:0,y:0});
});
},
onPanResponderMove:Animated.event(
[null,{dx:_this.state.stickers[0].x,dy:_this.state.stickers[0].y}]),

onPanResponderRelease:releaseChain,
onPanResponderTerminate:releaseChain});return _this;

}_createClass(AnExChained,[{key:'render',value:function render()

{var _this2=this;
return(
(this&&this.createElement||React.createElement)(View,{style:styles.chained},
this.state.stickers.map(function(_,i){
var j=_this2.state.stickers.length-i-1;
var handlers=j===0?_this2.state.chainResponder.panHandlers:{};
return(
(_this2&&_this2.createElement||React.createElement)(Animated.Image,_extends({},
handlers,{
key:i,
source:{uri:CHAIN_IMGS[j]},
style:[styles.sticker,{
transform:_this2.state.stickers[j].getTranslateTransform()}]})));



})));


}}]);return AnExChained;}(React.Component);


var styles=StyleSheet.create({
chained:{
alignSelf:'flex-end',
top:-160,
right:126},

sticker:{
position:'absolute',
height:120,
width:120,
backgroundColor:'transparent'}});



var CHAIN_IMGS=[
'https://scontent-sea1-1.xx.fbcdn.net/hphotos-xpf1/t39.1997-6/p160x160/10574705_1529175770666007_724328156_n.png',
'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-xfa1/t39.1997-6/p160x160/851575_392309884199657_1917957497_n.png',
'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-xfa1/t39.1997-6/p160x160/851567_555288911225630_1628791128_n.png',
'https://scontent-sea1-1.xx.fbcdn.net/hphotos-xfa1/t39.1997-6/p160x160/851583_531111513625557_903469595_n.png',
'https://scontent-sea1-1.xx.fbcdn.net/hphotos-xpa1/t39.1997-6/p160x160/851577_510515972354399_2147096990_n.png'];


module.exports=AnExChained;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";















var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var React=__webpack_require__(0);var

Animated=





React.Animated,Image=React.Image,ScrollView=React.ScrollView,StyleSheet=React.StyleSheet,Text=React.Text,View=React.View;var

AnExScroll=function(_React$Component){_inherits(AnExScroll,_React$Component);
function AnExScroll(props){_classCallCheck(this,AnExScroll);var _this=_possibleConstructorReturn(this,(AnExScroll.__proto__||Object.getPrototypeOf(AnExScroll)).call(this,
props));
_this.state={
scrollX:new Animated.Value(0)};return _this;

}_createClass(AnExScroll,[{key:'render',value:function render()

{
var width=this.props.panelWidth;
return(
(this&&this.createElement||React.createElement)(View,{style:styles.container},
(this&&this.createElement||React.createElement)(ScrollView,{
automaticallyAdjustContentInsets:false,
scrollEventThrottle:16,
onScroll:Animated.event(
[{nativeEvent:{contentOffset:{x:this.state.scrollX}}}]),

contentContainerStyle:{flex:1,padding:10},
pagingEnabled:true,
horizontal:true},
(this&&this.createElement||React.createElement)(View,{style:[styles.page,{width:width}]},
(this&&this.createElement||React.createElement)(Image,{
style:{width:180,height:180},
source:HAWK_PIC}),

(this&&this.createElement||React.createElement)(Text,{style:styles.text},
'I\'ll find something to put here.')),


(this&&this.createElement||React.createElement)(View,{style:[styles.page,{width:width}]},
(this&&this.createElement||React.createElement)(Text,{style:styles.text},'And here.')),

(this&&this.createElement||React.createElement)(View,{style:[styles.page,{width:width}]},
(this&&this.createElement||React.createElement)(Text,null,'But not here.'))),


(this&&this.createElement||React.createElement)(Animated.Image,{
pointerEvents:'none',
style:[styles.bunny,{transform:[
{translateX:this.state.scrollX.interpolate({
inputRange:[0,width,2*width],
outputRange:[0,0,width/3]}),
extrapolate:'clamp'},
{translateY:this.state.scrollX.interpolate({
inputRange:[0,width,2*width],
outputRange:[0,-200,-260]}),
extrapolate:'clamp'},
{scale:this.state.scrollX.interpolate({
inputRange:[0,width,2*width],
outputRange:[0.5,0.5,2]}),
extrapolate:'clamp'}]}],

source:BUNNY_PIC})));



}}]);return AnExScroll;}(React.Component);


var styles=StyleSheet.create({
container:{
backgroundColor:'transparent',
flex:1},

text:{
padding:4,
paddingBottom:10,
fontWeight:'bold',
fontSize:18,
backgroundColor:'transparent'},

bunny:{
backgroundColor:'transparent',
position:'absolute',
height:160,
width:160},

page:{
alignItems:'center',
justifyContent:'flex-end'}});



var HAWK_PIC={uri:'https://scontent-sea1-1.xx.fbcdn.net/hphotos-xfa1/t39.1997-6/10734304_1562225620659674_837511701_n.png'};
var BUNNY_PIC={uri:'https://scontent-sea1-1.xx.fbcdn.net/hphotos-xaf1/t39.1997-6/851564_531111380292237_1898871086_n.png'};

module.exports=AnExScroll;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
















var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var React=__webpack_require__(0);var

Animated=




React.Animated,PanResponder=React.PanResponder,StyleSheet=React.StyleSheet,Text=React.Text,View=React.View;

var AnExBobble=__webpack_require__(17);
var AnExChained=__webpack_require__(18);
var AnExScroll=__webpack_require__(19);
var AnExTilt=__webpack_require__(21);var

AnExSet=function(_React$Component){_inherits(AnExSet,_React$Component);
function AnExSet(props){_classCallCheck(this,AnExSet);var _this=_possibleConstructorReturn(this,(AnExSet.__proto__||Object.getPrototypeOf(AnExSet)).call(this,
props));
function randColor(){
var colors=[0,1,2].map(function(){return Math.floor(Math.random()*150+100);});
return'rgb('+colors.join(',')+')';
}
_this.state={
closeColor:randColor(),
openColor:randColor()};return _this;

}_createClass(AnExSet,[{key:'render',value:function render()
{
var backgroundColor=this.props.openVal?
this.props.openVal.interpolate({
inputRange:[0,1],
outputRange:[
this.state.closeColor,
this.state.openColor]}):


this.state.closeColor;
var panelWidth=this.props.containerLayout&&this.props.containerLayout.width||320;
return(
(this&&this.createElement||React.createElement)(View,{style:styles.container},
(this&&this.createElement||React.createElement)(Animated.View,_extends({
style:[styles.header,{backgroundColor:backgroundColor}]},
this.state.dismissResponder.panHandlers),
(this&&this.createElement||React.createElement)(Text,{style:[styles.text,styles.headerText]},
this.props.id)),


this.props.isActive&&
(this&&this.createElement||React.createElement)(View,{style:styles.stream},
(this&&this.createElement||React.createElement)(View,{style:styles.card},
(this&&this.createElement||React.createElement)(Text,{style:styles.text},'July 2nd'),


(this&&this.createElement||React.createElement)(AnExTilt,{isActive:this.props.isActive}),
(this&&this.createElement||React.createElement)(AnExBobble,null)),

(this&&this.createElement||React.createElement)(AnExScroll,{panelWidth:panelWidth}),
(this&&this.createElement||React.createElement)(AnExChained,null))));




}},{key:'componentWillMount',value:function componentWillMount()

{var _this2=this;
this.state.dismissY=new Animated.Value(0);
this.state.dismissResponder=PanResponder.create({
onStartShouldSetPanResponder:function onStartShouldSetPanResponder(){return _this2.props.isActive;},
onPanResponderGrant:function onPanResponderGrant(){
Animated.spring(_this2.props.openVal,{
toValue:_this2.state.dismissY.interpolate({
inputRange:[0,300],
outputRange:[1,0]})}).

start();
},
onPanResponderMove:Animated.event(
[null,{dy:this.state.dismissY}]),

onPanResponderRelease:function onPanResponderRelease(e,gestureState){
if(gestureState.dy>100){
_this2.props.onDismiss(gestureState.vy);
}else{
Animated.spring(_this2.props.openVal,{
toValue:1}).
start();
}
}});

}}]);return AnExSet;}(React.Component);


var styles=StyleSheet.create({
container:{
flex:1},

header:{
alignItems:'center',
paddingTop:18,
height:90},

stream:{
flex:1,
backgroundColor:'rgb(230, 230, 230)'},

card:{
margin:8,
padding:8,
borderRadius:6,
backgroundColor:'white',
shadowRadius:2,
shadowColor:'black',
shadowOpacity:0.2,
shadowOffset:{height:0.5}},

text:{
padding:4,
paddingBottom:10,
fontWeight:'bold',
fontSize:18,
backgroundColor:'transparent'},

headerText:{
fontSize:25,
color:'white',
shadowRadius:3,
shadowColor:'black',
shadowOpacity:1,
shadowOffset:{height:1}}});



module.exports=AnExSet;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
















var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var React=__webpack_require__(0);var

Animated=




React.Animated,Image=React.Image,PanResponder=React.PanResponder,StyleSheet=React.StyleSheet,View=React.View;var

AnExTilt=function(_React$Component){_inherits(AnExTilt,_React$Component);
function AnExTilt(props){_classCallCheck(this,AnExTilt);var _this=_possibleConstructorReturn(this,(AnExTilt.__proto__||Object.getPrototypeOf(AnExTilt)).call(this,
props));
_this.state={
panX:new Animated.Value(0),
opacity:new Animated.Value(1),
burns:new Animated.Value(1.15)};

_this.state.tiltPanResponder=PanResponder.create({
onStartShouldSetPanResponder:function onStartShouldSetPanResponder(){return true;},
onPanResponderGrant:function onPanResponderGrant(){
Animated.timing(_this.state.opacity,{
toValue:_this.state.panX.interpolate({
inputRange:[-300,0,300],
outputRange:[0,1,0]}),

duration:0}).
start();
},
onPanResponderMove:Animated.event(
[null,{dx:_this.state.panX}]),

onPanResponderRelease:function onPanResponderRelease(e,gestureState){
var toValue=0;
if(gestureState.dx>100){
toValue=500;
}else if(gestureState.dx<-100){
toValue=-500;
}
Animated.spring(_this.state.panX,{
toValue:toValue,
velocity:gestureState.vx,
tension:10,
friction:3}).
start();
_this.state.panX.removeAllListeners();
var id=_this.state.panX.addListener(function(_ref){var value=_ref.value;
if(Math.abs(value)>400){
_this.state.panX.removeListener(id);
Animated.timing(_this.state.opacity,{
toValue:1}).
start();
_this.state.panX.setValue(0);
toValue!==0&&_this._startBurnsZoom();
}
});
}});return _this;

}_createClass(AnExTilt,[{key:'_startBurnsZoom',value:function _startBurnsZoom()

{
this.state.burns.setValue(1);
Animated.decay(this.state.burns,{
velocity:1,
deceleration:0.9999}).
start();
}},{key:'componentWillMount',value:function componentWillMount()

{
this._startBurnsZoom();
}},{key:'render',value:function render()

{
return(
(this&&this.createElement||React.createElement)(Animated.View,_extends({},
this.state.tiltPanResponder.panHandlers,{
style:[styles.tilt,{
opacity:this.state.opacity,
transform:[
{rotate:this.state.panX.interpolate({
inputRange:[-320,320],
outputRange:['-15deg','15deg']})},
{translateX:this.state.panX}]}]}),


(this&&this.createElement||React.createElement)(Animated.Image,{
pointerEvents:'none',
style:{
flex:1,
transform:[
{translateX:this.state.panX.interpolate({
inputRange:[-3,3],
outputRange:[2,-2]})},

{scale:this.state.burns.interpolate({
inputRange:[1,3000],
outputRange:[1,1.25]})}]},



source:NATURE_IMAGE})));



}}]);return AnExTilt;}(React.Component);


var styles=StyleSheet.create({
tilt:{
overflow:'hidden',
height:200,
marginBottom:4,
backgroundColor:'rgb(130, 130, 255)',
borderColor:'rgba(0, 0, 0, 0.2)',
borderWidth:1,
borderRadius:20}});



var NATURE_IMAGE={uri:'http://www.deshow.net/d/file/travel/2009-04/scenic-beauty-of-nature-photography-2-504-4.jpg'};

module.exports=AnExTilt;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var _this2=this;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var React=__webpack_require__(0);var

AppState=



React.AppState,Component=React.Component,Text=React.Text,View=React.View;var

AppStateSubscription=function(_Component){_inherits(AppStateSubscription,_Component);
function AppStateSubscription(props){_classCallCheck(this,AppStateSubscription);var _this=_possibleConstructorReturn(this,(AppStateSubscription.__proto__||Object.getPrototypeOf(AppStateSubscription)).call(this,
props));
_this.state={
appState:AppState.currentState,
previousAppStates:[]};return _this;

}_createClass(AppStateSubscription,[{key:'componentDidMount',value:function componentDidMount()

{
AppState.addEventListener('change',this._handleAppStateChange.bind(this));
}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
AppState.removeEventListener('change',this._handleAppStateChange.bind(this));
}},{key:'_handleAppStateChange',value:function _handleAppStateChange(

appState){
var previousAppStates=this.state.previousAppStates.slice();
previousAppStates.push(this.state.appState);
this.setState({
appState:appState,
previousAppStates:previousAppStates});

}},{key:'render',value:function render()

{
return(
(this&&this.createElement||React.createElement)(View,null,
this.props.showCurrentOnly?
(this&&this.createElement||React.createElement)(Text,null,this.state.appState):
(this&&this.createElement||React.createElement)(Text,null,JSON.stringify(this.state.previousAppStates))));



}}]);return AppStateSubscription;}(Component);


exports.title='AppState';
exports.description='app background status';
exports.examples=[
{
subtitle:'AppState.currentState',
description:'在 APP 初始化的时候是 null',
render:function render(){return(_this2&&_this2.createElement||React.createElement)(Text,null,AppState.currentState);}},

{
subtitle:'订阅 AppState',
description:'根据当前状态改变, 所以你只能看到它被渲染为 "active"',
render:function render(){return(_this2&&_this2.createElement||React.createElement)(AppStateSubscription,{showCurrentOnly:true});}},

{
subtitle:'之前的状态列表',
render:function render(){return(_this2&&_this2.createElement||React.createElement)(AppStateSubscription,null);}}];

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var React=__webpack_require__(0);var

StyleSheet=

React.StyleSheet,View=React.View;

var styles=StyleSheet.create({
box:{
width:100,
height:100},

border1:{
borderWidth:10,
borderColor:'brown'},

borderRadius:{
borderWidth:10,
borderRadius:10,
borderColor:'cyan'},

border2:{
borderWidth:10,
borderTopColor:'red',
borderRightColor:'yellow',
borderBottomColor:'green',
borderLeftColor:'blue'},

border3:{
borderColor:'purple',
borderTopWidth:10,
borderRightWidth:20,
borderBottomWidth:30,
borderLeftWidth:40},

border4:{
borderTopWidth:10,
borderTopColor:'red',
borderRightWidth:20,
borderRightColor:'yellow',
borderBottomWidth:30,
borderBottomColor:'green',
borderLeftWidth:40,
borderLeftColor:'blue'},

border5:{
borderRadius:50,
borderTopWidth:10,
borderTopColor:'red',
borderRightWidth:20,
borderRightColor:'yellow',
borderBottomWidth:30,
borderBottomColor:'green',
borderLeftWidth:40,
borderLeftColor:'blue'},

border6:{
borderTopWidth:10,
borderTopColor:'red',
borderRightWidth:20,
borderRightColor:'yellow',
borderBottomWidth:30,
borderBottomColor:'green',
borderLeftWidth:40,
borderLeftColor:'blue',

borderTopLeftRadius:100},

border7:{
borderWidth:10,
borderColor:'#f007',
borderRadius:30,
overflow:'hidden'},

border7_inner:{
backgroundColor:'blue',
width:100,
height:100},

border8:{
width:60,
height:60,
borderColor:'black',
marginRight:10,
backgroundColor:'lightgrey'}});



exports.title='Border';
exports.scroll=true;
exports.description='Demonstrates some of the border styles available to Views.';
exports.examples=[
{
subtitle:'Equal-Width / Same-Color',
description:'borderWidth & borderColor',
render:function render(){
return(this&&this.createElement||React.createElement)(View,{style:[styles.box,styles.border1]});
}},

{
subtitle:'Equal-Width / Same-Color',
description:'borderWidth & borderColor & borderRadius',
render:function render(){
return(this&&this.createElement||React.createElement)(View,{style:[styles.box,styles.borderRadius]});
}},

{
subtitle:'Equal-Width Borders',
description:'borderWidth & border*Color',
render:function render(){
return(this&&this.createElement||React.createElement)(View,{style:[styles.box,styles.border2]});
}},

{
subtitle:'Same-Color Borders',
description:'border*Width & borderColor',
render:function render(){
return(this&&this.createElement||React.createElement)(View,{style:[styles.box,styles.border3]});
}},

{
subtitle:'Custom Borders',
description:'border*Width & border*Color',
render:function render(){
return(this&&this.createElement||React.createElement)(View,{style:[styles.box,styles.border4]});
}},

{
subtitle:'Custom Borders',
description:'border*Width & border*Color',
platform:'ios',
render:function render(){
return(this&&this.createElement||React.createElement)(View,{style:[styles.box,styles.border5]});
}},

{
subtitle:'Custom Borders',
description:'border*Width & border*Color',
platform:'ios',
render:function render(){
return(this&&this.createElement||React.createElement)(View,{style:[styles.box,styles.border6]});
}},

{
subtitle:'Custom Borders',
description:'borderRadius & clipping',
platform:'ios',
render:function render(){
return(
(this&&this.createElement||React.createElement)(View,{style:[styles.box,styles.border7]},
(this&&this.createElement||React.createElement)(View,{style:styles.border7_inner})));


}},

{
subtitle:'Single Borders',
description:'top, left, bottom right',
render:function render(){
return(
(this&&this.createElement||React.createElement)(View,{style:{flexDirection:'row'}},
(this&&this.createElement||React.createElement)(View,{style:[styles.box,styles.border8,{borderTopWidth:5}]}),
(this&&this.createElement||React.createElement)(View,{style:[styles.box,styles.border8,{borderLeftWidth:5}]}),
(this&&this.createElement||React.createElement)(View,{style:[styles.box,styles.border8,{borderBottomWidth:5}]}),
(this&&this.createElement||React.createElement)(View,{style:[styles.box,styles.border8,{borderRightWidth:5}]})));


}}];

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var React=__webpack_require__(0);var

Component=



React.Component,Clipboard=React.Clipboard,View=React.View,Text=React.Text;var

ClipboardExample=function(_Component){_inherits(ClipboardExample,_Component);
function ClipboardExample(props){_classCallCheck(this,ClipboardExample);var _this=_possibleConstructorReturn(this,(ClipboardExample.__proto__||Object.getPrototypeOf(ClipboardExample)).call(this,
props));
_this.state={
content:'Content will appear here'};return _this;

}_createClass(ClipboardExample,[{key:'_setClipboardContent',value:function _setClipboardContent(){var content;return regeneratorRuntime.async(function _setClipboardContent$(_context){while(1){switch(_context.prev=_context.next){case 0:


Clipboard.setString('Hello World');_context.prev=1;_context.next=4;return regeneratorRuntime.awrap(

Clipboard.getString());case 4:content=_context.sent;
this.setState({content:content});_context.next=11;break;case 8:_context.prev=8;_context.t0=_context['catch'](1);

this.setState({content:_context.t0.message});case 11:case'end':return _context.stop();}}},null,this,[[1,8]]);}},{key:'render',value:function render()



{
return(
(this&&this.createElement||React.createElement)(View,null,
(this&&this.createElement||React.createElement)(Text,{onPress:this._setClipboardContent.bind(this),style:{color:'blue'}},'Tap to put "Hello World" in the clipboard'),


(this&&this.createElement||React.createElement)(Text,{style:{color:'red',marginTop:20}},
this.state.content)));



}}]);return ClipboardExample;}(Component);


exports.title='Clipboard';
exports.description='Show Clipboard contents.';
exports.examples=[
{
title:'Clipboard.setString() and getString()',
render:function render(){
return(this&&this.createElement||React.createElement)(ClipboardExample,null);
}}];

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _this4=this;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=__webpack_require__(9);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var UIExplorerButton=__webpack_require__(5);var

CookieManagerExample=function(_Component){_inherits(CookieManagerExample,_Component);
function CookieManagerExample(props){_classCallCheck(this,CookieManagerExample);var _this=_possibleConstructorReturn(this,(CookieManagerExample.__proto__||Object.getPrototypeOf(CookieManagerExample)).call(this,
props));
_this.state={
key:'',
domain:'',
value:'',
cookie:{}};return _this;

}_createClass(CookieManagerExample,[{key:'getCookie',value:function getCookie()

{var _this2=this;var _state=
this.state,key=_state.key,domain=_state.domain;
_reactNative.CookieManager.getCookieForKey(
key,'http://'+
domain,
function(cookie){return _this2.setState({cookie:cookie});},
function(){});

}},{key:'setCookie',value:function setCookie()

{var _arguments=arguments;var _state2=
this.state,key=_state2.key,domain=_state2.domain,value=_state2.value;

_reactNative.CookieManager.setCookie(
{key:key,domain:domain,value:value},
function(){return console.log(_arguments);});

}},{key:'render',value:function render()

{var _this3=this;
var cookie=JSON.stringify(this.state.cookie,null,4);

return(
(this&&this.createElement||_react2.default.createElement)(_reactNative.View,null,
(this&&this.createElement||_react2.default.createElement)(_reactNative.Text,null,'Key'),
(this&&this.createElement||_react2.default.createElement)(_reactNative.TextInput,{
autoCapitalize:'none',
style:style.textInput,
onChangeText:function onChangeText(key){return _this3.setState({key:key});},
value:this.state.key}),

(this&&this.createElement||_react2.default.createElement)(_reactNative.Text,null,'Domain'),
(this&&this.createElement||_react2.default.createElement)(_reactNative.TextInput,{
autoCapitalize:'none',
style:style.textInput,
onChangeText:function onChangeText(domain){return _this3.setState({domain:domain});},
value:this.state.domain}),

(this&&this.createElement||_react2.default.createElement)(_reactNative.Text,null,'Value'),
(this&&this.createElement||_react2.default.createElement)(_reactNative.TextInput,{
autoCapitalize:'none',
style:style.textInput,
onChangeText:function onChangeText(value){return _this3.setState({value:value});},
value:this.state.value}),


(this&&this.createElement||_react2.default.createElement)(UIExplorerButton,{
onPress:this.getCookie.bind(this)},'getCookies'),


(this&&this.createElement||_react2.default.createElement)(UIExplorerButton,{
onPress:this.setCookie.bind(this)},'setCookies'),



(this&&this.createElement||_react2.default.createElement)(_reactNative.Text,null,'cookies: ',cookie)));


}}]);return CookieManagerExample;}(_react.Component);


var style=_reactNative.StyleSheet.create({
textInput:{
height:40,
borderColor:'gray',
borderWidth:1}});



module.exports={
title:'CookieManager',
examples:[
{
subtitle:'cookies',
render:function render(){return(_this4&&_this4.createElement||_react2.default.createElement)(CookieManagerExample,null);}}]};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
















var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _this=this;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}


var React=__webpack_require__(0);var

Component=



React.Component,StyleSheet=React.StyleSheet,Text=React.Text,View=React.View;

exports.framework='React';
exports.title='Geolocation';
exports.description='Examples of using the Geolocation API.';

exports.examples=[
{
subtitle:'navigator.geolocation',
render:function render(){return(_this&&_this.createElement||React.createElement)(GeolocationExample,null);}}];var



GeolocationExample=function(_Component){_inherits(GeolocationExample,_Component);
function GeolocationExample(props){_classCallCheck(this,GeolocationExample);var _this2=_possibleConstructorReturn(this,(GeolocationExample.__proto__||Object.getPrototypeOf(GeolocationExample)).call(this,
props));
_this2.watchID=null;
_this2.state={
initialPosition:'unknown',
lastPosition:'unknown'};return _this2;

}_createClass(GeolocationExample,[{key:'componentDidMount',value:function componentDidMount()

{var _this3=this;
navigator.geolocation.getCurrentPosition(
function(position){
var initialPosition=JSON.stringify(position,null,4);
_this3.setState({initialPosition:initialPosition});
},
function(error){return console.log(error.message);},
{enableHighAccuracy:true,timeout:20000,maximumAge:1000});

this.watchID=navigator.geolocation.watchPosition(function(position){
var lastPosition=JSON.stringify(position,null,4);
_this3.setState({lastPosition:lastPosition});
});
}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
navigator.geolocation.clearWatch(this.watchID);
}},{key:'render',value:function render()

{
return(
(this&&this.createElement||React.createElement)(View,null,
(this&&this.createElement||React.createElement)(Text,null,
(this&&this.createElement||React.createElement)(Text,{style:styles.title},'Initial position: '),
this.state.initialPosition),

(this&&this.createElement||React.createElement)(Text,null,
(this&&this.createElement||React.createElement)(Text,{style:styles.title},'Current position: '),
this.state.lastPosition)));



}}]);return GeolocationExample;}(Component);


var styles=StyleSheet.create({
title:{
fontWeight:'500'}});

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var React=__webpack_require__(0);var

Component=



React.Component,StyleSheet=React.StyleSheet,Text=React.Text,View=React.View;

var UIExplorerBlock=__webpack_require__(36);
var UIExplorerPage=__webpack_require__(37);var

Circle=function(_Component){_inherits(Circle,_Component);function Circle(){_classCallCheck(this,Circle);return _possibleConstructorReturn(this,(Circle.__proto__||Object.getPrototypeOf(Circle)).apply(this,arguments));}_createClass(Circle,[{key:'render',value:function render()
{
var size=this.props.size||20;
return(
(this&&this.createElement||React.createElement)(View,{
style:{
borderRadius:size/2,
backgroundColor:'#527fe4',
width:size,
height:size,
margin:1}}));



}}]);return Circle;}(Component);var


CircleBlock=function(_Component2){_inherits(CircleBlock,_Component2);function CircleBlock(){_classCallCheck(this,CircleBlock);return _possibleConstructorReturn(this,(CircleBlock.__proto__||Object.getPrototypeOf(CircleBlock)).apply(this,arguments));}_createClass(CircleBlock,[{key:'render',value:function render()
{
var circleStyle={
flexDirection:'row',
backgroundColor:'#f6f7f8',
borderWidth:0.5,
borderColor:'#d6d7da',
marginBottom:2};

return(
(this&&this.createElement||React.createElement)(View,{style:[circleStyle,this.props.style]},
this.props.children));


}}]);return CircleBlock;}(Component);var


LayoutExample=function(_Component3){_inherits(LayoutExample,_Component3);function LayoutExample(){var _ref;var _temp,_this3,_ret;_classCallCheck(this,LayoutExample);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this3=_possibleConstructorReturn(this,(_ref=LayoutExample.__proto__||Object.getPrototypeOf(LayoutExample)).call.apply(_ref,[this].concat(args))),_this3),_this3.
statics={
title:'Layout - Flexbox',
description:'Examples of using the flexbox API to layout views.'},_temp),_possibleConstructorReturn(_this3,_ret);}_createClass(LayoutExample,[{key:'render',value:function render()


{var _this4=this;
return(
(this&&this.createElement||React.createElement)(UIExplorerPage,{title:this.props.navigator?null:'Layout'},
(this&&this.createElement||React.createElement)(UIExplorerBlock,{title:'Flex Direction'},
(this&&this.createElement||React.createElement)(Text,null,'row'),
(this&&this.createElement||React.createElement)(CircleBlock,{style:{flexDirection:'row'}},
(this&&this.createElement||React.createElement)(Circle,null),(this&&this.createElement||React.createElement)(Circle,null),(this&&this.createElement||React.createElement)(Circle,null),(this&&this.createElement||React.createElement)(Circle,null),(this&&this.createElement||React.createElement)(Circle,null)),

(this&&this.createElement||React.createElement)(Text,null,'column'),
(this&&this.createElement||React.createElement)(CircleBlock,{style:{flexDirection:'column'}},
(this&&this.createElement||React.createElement)(Circle,null),(this&&this.createElement||React.createElement)(Circle,null),(this&&this.createElement||React.createElement)(Circle,null),(this&&this.createElement||React.createElement)(Circle,null),(this&&this.createElement||React.createElement)(Circle,null)),

(this&&this.createElement||React.createElement)(View,{style:[styles.overlay,{position:'absolute',top:15,left:160}]},
(this&&this.createElement||React.createElement)(Text,null,'top: 15, left: 160'))),



(this&&this.createElement||React.createElement)(UIExplorerBlock,{title:'Justify Content - Main Direction'},
(this&&this.createElement||React.createElement)(Text,null,'flex-start'),
(this&&this.createElement||React.createElement)(CircleBlock,{style:{justifyContent:'flex-start'}},
(this&&this.createElement||React.createElement)(Circle,null),(this&&this.createElement||React.createElement)(Circle,null),(this&&this.createElement||React.createElement)(Circle,null),(this&&this.createElement||React.createElement)(Circle,null),(this&&this.createElement||React.createElement)(Circle,null)),

(this&&this.createElement||React.createElement)(Text,null,'center'),
(this&&this.createElement||React.createElement)(CircleBlock,{style:{justifyContent:'center'}},
(this&&this.createElement||React.createElement)(Circle,null),(this&&this.createElement||React.createElement)(Circle,null),(this&&this.createElement||React.createElement)(Circle,null),(this&&this.createElement||React.createElement)(Circle,null),(this&&this.createElement||React.createElement)(Circle,null)),

(this&&this.createElement||React.createElement)(Text,null,'flex-end'),
(this&&this.createElement||React.createElement)(CircleBlock,{style:{justifyContent:'flex-end'}},
(this&&this.createElement||React.createElement)(Circle,null),(this&&this.createElement||React.createElement)(Circle,null),(this&&this.createElement||React.createElement)(Circle,null),(this&&this.createElement||React.createElement)(Circle,null),(this&&this.createElement||React.createElement)(Circle,null)),

(this&&this.createElement||React.createElement)(Text,null,'space-between'),
(this&&this.createElement||React.createElement)(CircleBlock,{style:{justifyContent:'space-between'}},
(this&&this.createElement||React.createElement)(Circle,null),(this&&this.createElement||React.createElement)(Circle,null),(this&&this.createElement||React.createElement)(Circle,null),(this&&this.createElement||React.createElement)(Circle,null),(this&&this.createElement||React.createElement)(Circle,null)),

(this&&this.createElement||React.createElement)(Text,null,'space-around'),
(this&&this.createElement||React.createElement)(CircleBlock,{style:{justifyContent:'space-around'}},
(this&&this.createElement||React.createElement)(Circle,null),(this&&this.createElement||React.createElement)(Circle,null),(this&&this.createElement||React.createElement)(Circle,null),(this&&this.createElement||React.createElement)(Circle,null),(this&&this.createElement||React.createElement)(Circle,null))),


(this&&this.createElement||React.createElement)(UIExplorerBlock,{title:'Align Items - Other Direction'},
(this&&this.createElement||React.createElement)(Text,null,'flex-start'),
(this&&this.createElement||React.createElement)(CircleBlock,{style:{alignItems:'flex-start',height:30}},
(this&&this.createElement||React.createElement)(Circle,{size:15}),(this&&this.createElement||React.createElement)(Circle,{size:10}),(this&&this.createElement||React.createElement)(Circle,{size:20}),
(this&&this.createElement||React.createElement)(Circle,{size:17}),(this&&this.createElement||React.createElement)(Circle,{size:12}),(this&&this.createElement||React.createElement)(Circle,{size:15}),
(this&&this.createElement||React.createElement)(Circle,{size:10}),(this&&this.createElement||React.createElement)(Circle,{size:20}),(this&&this.createElement||React.createElement)(Circle,{size:17}),
(this&&this.createElement||React.createElement)(Circle,{size:12}),(this&&this.createElement||React.createElement)(Circle,{size:15}),(this&&this.createElement||React.createElement)(Circle,{size:10}),
(this&&this.createElement||React.createElement)(Circle,{size:20}),(this&&this.createElement||React.createElement)(Circle,{size:17}),(this&&this.createElement||React.createElement)(Circle,{size:12}),
(this&&this.createElement||React.createElement)(Circle,{size:15}),(this&&this.createElement||React.createElement)(Circle,{size:8})),

(this&&this.createElement||React.createElement)(Text,null,'center'),
(this&&this.createElement||React.createElement)(CircleBlock,{style:{alignItems:'center',height:30}},
(this&&this.createElement||React.createElement)(Circle,{size:15}),(this&&this.createElement||React.createElement)(Circle,{size:10}),(this&&this.createElement||React.createElement)(Circle,{size:20}),
(this&&this.createElement||React.createElement)(Circle,{size:17}),(this&&this.createElement||React.createElement)(Circle,{size:12}),(this&&this.createElement||React.createElement)(Circle,{size:15}),
(this&&this.createElement||React.createElement)(Circle,{size:10}),(this&&this.createElement||React.createElement)(Circle,{size:20}),(this&&this.createElement||React.createElement)(Circle,{size:17}),
(this&&this.createElement||React.createElement)(Circle,{size:12}),(this&&this.createElement||React.createElement)(Circle,{size:15}),(this&&this.createElement||React.createElement)(Circle,{size:10}),
(this&&this.createElement||React.createElement)(Circle,{size:20}),(this&&this.createElement||React.createElement)(Circle,{size:17}),(this&&this.createElement||React.createElement)(Circle,{size:12}),
(this&&this.createElement||React.createElement)(Circle,{size:15}),(this&&this.createElement||React.createElement)(Circle,{size:8})),

(this&&this.createElement||React.createElement)(Text,null,'flex-end'),
(this&&this.createElement||React.createElement)(CircleBlock,{style:{alignItems:'flex-end',height:30}},
(this&&this.createElement||React.createElement)(Circle,{size:15}),(this&&this.createElement||React.createElement)(Circle,{size:10}),(this&&this.createElement||React.createElement)(Circle,{size:20}),
(this&&this.createElement||React.createElement)(Circle,{size:17}),(this&&this.createElement||React.createElement)(Circle,{size:12}),(this&&this.createElement||React.createElement)(Circle,{size:15}),
(this&&this.createElement||React.createElement)(Circle,{size:10}),(this&&this.createElement||React.createElement)(Circle,{size:20}),(this&&this.createElement||React.createElement)(Circle,{size:17}),
(this&&this.createElement||React.createElement)(Circle,{size:12}),(this&&this.createElement||React.createElement)(Circle,{size:15}),(this&&this.createElement||React.createElement)(Circle,{size:10}),
(this&&this.createElement||React.createElement)(Circle,{size:20}),(this&&this.createElement||React.createElement)(Circle,{size:17}),(this&&this.createElement||React.createElement)(Circle,{size:12}),
(this&&this.createElement||React.createElement)(Circle,{size:15}),(this&&this.createElement||React.createElement)(Circle,{size:8}))),


(this&&this.createElement||React.createElement)(UIExplorerBlock,{title:'Flex Wrap'},
(this&&this.createElement||React.createElement)(CircleBlock,{style:{flexWrap:'wrap'}},
'oooooooooooooooo'.split('').map(function(char,i){return(_this4&&_this4.createElement||React.createElement)(Circle,{key:i});})))));




}}]);return LayoutExample;}(Component);


var styles=StyleSheet.create({
overlay:{
backgroundColor:'#aaccff',
borderRadius:10,
borderWidth:0.5,
opacity:0.5,
padding:5}});



exports.title='layout example';
exports.examples=[{
render:function render(){
return(this&&this.createElement||React.createElement)(LayoutExample,null);
}}];

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var _this7=this;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var React=__webpack_require__(0);var

Component=




React.Component,NetInfo=React.NetInfo,Text=React.Text,View=React.View,TouchableWithoutFeedback=React.TouchableWithoutFeedback;var

ConnectionInfoSubscription=function(_Component){_inherits(ConnectionInfoSubscription,_Component);
function ConnectionInfoSubscription(props){_classCallCheck(this,ConnectionInfoSubscription);var _this=_possibleConstructorReturn(this,(ConnectionInfoSubscription.__proto__||Object.getPrototypeOf(ConnectionInfoSubscription)).call(this,
props));_this.



















_handleConnectionInfoChange=function(connectionInfo){
var connectionInfoHistory=_this.state.connectionInfoHistory.slice();
connectionInfoHistory.push(connectionInfo);
_this.setState({
connectionInfoHistory:connectionInfoHistory});

};_this.state={connectionInfoHistory:[]};return _this;}_createClass(ConnectionInfoSubscription,[{key:'componentDidMount',value:function componentDidMount(){NetInfo.addEventListener('change',this._handleConnectionInfoChange);}},{key:'componentWillUnmount',value:function componentWillUnmount(){NetInfo.removeEventListener('change',this._handleConnectionInfoChange);}},{key:'render',value:function render()

{
return(
(this&&this.createElement||React.createElement)(View,null,
(this&&this.createElement||React.createElement)(Text,null,JSON.stringify(this.state.connectionInfoHistory))));


}}]);return ConnectionInfoSubscription;}(Component);var


ConnectionInfoCurrent=function(_Component2){_inherits(ConnectionInfoCurrent,_Component2);
function ConnectionInfoCurrent(props){_classCallCheck(this,ConnectionInfoCurrent);var _this2=_possibleConstructorReturn(this,(ConnectionInfoCurrent.__proto__||Object.getPrototypeOf(ConnectionInfoCurrent)).call(this,
props));_this2.






















_handleConnectionInfoChange=function(connectionInfo){
_this2.setState({
connectionInfo:connectionInfo});

};_this2.state={connectionInfo:null};return _this2;}_createClass(ConnectionInfoCurrent,[{key:'componentDidMount',value:function componentDidMount(){var _this3=this;NetInfo.addEventListener('change',this._handleConnectionInfoChange);NetInfo.fetch().done(function(connectionInfo){_this3.setState({connectionInfo:connectionInfo});});}},{key:'componentWillUnmount',value:function componentWillUnmount(){NetInfo.removeEventListener('change',this._handleConnectionInfoChange);}},{key:'render',value:function render()

{
return(
(this&&this.createElement||React.createElement)(View,null,
(this&&this.createElement||React.createElement)(Text,null,this.state.connectionInfo)));


}}]);return ConnectionInfoCurrent;}(Component);var


IsConnected=function(_Component3){_inherits(IsConnected,_Component3);
function IsConnected(props){_classCallCheck(this,IsConnected);var _this4=_possibleConstructorReturn(this,(IsConnected.__proto__||Object.getPrototypeOf(IsConnected)).call(this,
props));_this4.






















_handleConnectivityChange=function(isConnected){
_this4.setState({
isConnected:isConnected});

};_this4.state={isConnected:null};return _this4;}_createClass(IsConnected,[{key:'componentDidMount',value:function componentDidMount(){var _this5=this;NetInfo.isConnected.addEventListener('change',this._handleConnectivityChange);NetInfo.isConnected.fetch().done(function(isConnected){_this5.setState({isConnected:isConnected});});}},{key:'componentWillUnmount',value:function componentWillUnmount(){NetInfo.isConnected.removeEventListener('change',this._handleConnectivityChange);}},{key:'render',value:function render()

{
return(
(this&&this.createElement||React.createElement)(View,null,
(this&&this.createElement||React.createElement)(Text,null,this.state.isConnected?'Online':'Offline')));


}}]);return IsConnected;}(Component);var


IsConnectionExpensive=function(_Component4){_inherits(IsConnectionExpensive,_Component4);
function IsConnectionExpensive(props){_classCallCheck(this,IsConnectionExpensive);var _this6=_possibleConstructorReturn(this,(IsConnectionExpensive.__proto__||Object.getPrototypeOf(IsConnectionExpensive)).call(this,
props));_this6.





_checkIfExpensive=function(){
NetInfo.isConnectionExpensive(
function(isConnectionExpensive){_this6.setState({isConnectionExpensive:isConnectionExpensive});});

};_this6.state={isConnectionExpensive:null};return _this6;}_createClass(IsConnectionExpensive,[{key:'render',value:function render()

{
return(
(this&&this.createElement||React.createElement)(View,null,
(this&&this.createElement||React.createElement)(TouchableWithoutFeedback,{onPress:this._checkIfExpensive.bind(this)},
(this&&this.createElement||React.createElement)(View,null,
(this&&this.createElement||React.createElement)(Text,null,'Click to see if connection is expensive:',
this.state.isConnectionExpensive===true?'Expensive':
this.state.isConnectionExpensive===false?'Not expensive':
'Unknown')))));





}}]);return IsConnectionExpensive;}(Component);


exports.title='NetInfo';
exports.description='Monitor network status';
exports.examples=[
{
subtitle:'NetInfo.isConnected',
description:'Asynchronously load and observe connectivity',
render:function render(){return(_this7&&_this7.createElement||React.createElement)(IsConnected,null);}},

{
subtitle:'NetInfo.update',
description:'Asynchronously load and observe connectionInfo',
render:function render(){return(_this7&&_this7.createElement||React.createElement)(ConnectionInfoCurrent,null);}},

{
subtitle:'NetInfo.updateHistory',
description:'Observed updates to connectionInfo',
render:function render(){return(_this7&&_this7.createElement||React.createElement)(ConnectionInfoSubscription,null);}},

{
platform:'android',
subtitle:'NetInfo.isConnectionExpensive (Android)',
description:'Asynchronously check isConnectionExpensive',
render:function render(){return(_this7&&_this7.createElement||React.createElement)(IsConnectionExpensive,null);}}];

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var React=__webpack_require__(0);var

PanResponder=



React.PanResponder,StyleSheet=React.StyleSheet,View=React.View,processColor=React.processColor;

var CIRCLE_SIZE=80;
var CIRCLE_COLOR='blue';
var CIRCLE_HIGHLIGHT_COLOR='green';

var PanResponderExample=React.createClass({displayName:'PanResponderExample',

statics:{
title:'PanResponder Sample',
description:'Shows the use of PanResponder to provide basic gesture handling.'},


_panResponder:{},
_previousLeft:0,
_previousTop:0,
_circleStyles:{},
circle:null,

componentWillMount:function componentWillMount(){
this._panResponder=PanResponder.create({
onStartShouldSetPanResponder:this._handleStartShouldSetPanResponder,
onMoveShouldSetPanResponder:this._handleMoveShouldSetPanResponder,
onPanResponderGrant:this._handlePanResponderGrant,
onPanResponderMove:this._handlePanResponderMove,
onPanResponderRelease:this._handlePanResponderEnd,
onPanResponderTerminate:this._handlePanResponderEnd});

this._previousLeft=20;
this._previousTop=84;
this._circleStyles={
style:{
left:this._previousLeft,
top:this._previousTop}};


},

componentDidMount:function componentDidMount(){
this._updatePosition();
},

render:function render(){var _this=this;
return(
(this&&this.createElement||React.createElement)(View,{
style:styles.container},
(this&&this.createElement||React.createElement)(View,_extends({
ref:function ref(circle){
_this.circle=circle;
},
style:styles.circle},
this._panResponder.panHandlers))));



},

_highlight:function _highlight(){
var circle=this.circle;
circle&&circle.setNativeProps({
style:{
backgroundColor:processColor(CIRCLE_HIGHLIGHT_COLOR)}});


},

_unHighlight:function _unHighlight(){
var circle=this.circle;
circle&&circle.setNativeProps({
style:{
backgroundColor:processColor(CIRCLE_COLOR)}});


},

_updatePosition:function _updatePosition(){
this.circle&&this.circle.setNativeProps(this._circleStyles);
},

_handleStartShouldSetPanResponder:function _handleStartShouldSetPanResponder(e,gestureState){

return true;
},

_handleMoveShouldSetPanResponder:function _handleMoveShouldSetPanResponder(e,gestureState){

return true;
},

_handlePanResponderGrant:function _handlePanResponderGrant(e,gestureState){
this._highlight();
},
_handlePanResponderMove:function _handlePanResponderMove(e,gestureState){
this._circleStyles.style.left=this._previousLeft+gestureState.dx;
this._circleStyles.style.top=this._previousTop+gestureState.dy;
this._updatePosition();
},
_handlePanResponderEnd:function _handlePanResponderEnd(e,gestureState){
this._unHighlight();
this._previousLeft+=gestureState.dx;
this._previousTop+=gestureState.dy;
}});


var styles=StyleSheet.create({
circle:{
width:CIRCLE_SIZE,
height:CIRCLE_SIZE,
borderRadius:CIRCLE_SIZE/2,
backgroundColor:CIRCLE_COLOR,
position:'absolute',
left:0,
top:0},

container:{
flex:1,
paddingTop:64}});



exports.title='PanResponder';
exports.examples=[{
render:function render(){
return(this&&this.createElement||React.createElement)(PanResponderExample,null);
}}];

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var React=__webpack_require__(0);var

StyleSheet=


React.StyleSheet,Text=React.Text,View=React.View;

var ExampleBox=React.createClass({displayName:'ExampleBox',
getInitialState:function getInitialState(){
return{
log:[]};

},
handleLog:function handleLog(msg){
this.state.log=this.state.log.concat([msg]);
},
flushReactChanges:function flushReactChanges(){
this.forceUpdate();
},




handleTouchCapture:function handleTouchCapture(){
this.state.log=this.state.log.concat(['---']);
},
render:function render(){
return(
(this&&this.createElement||React.createElement)(View,null,
(this&&this.createElement||React.createElement)(View,{
onTouchEndCapture:this.handleTouchCapture,
onTouchStart:this.flushReactChanges},
(this&&this.createElement||React.createElement)(this.props.Component,{onLog:this.handleLog})),

(this&&this.createElement||React.createElement)(View,{
style:styles.logBox},
(this&&this.createElement||React.createElement)(DemoText,{style:styles.logText},
this.state.log.join('\n')))));




}});



var NoneExample=React.createClass({displayName:'NoneExample',
render:function render(){var _this=this;
return(
(this&&this.createElement||React.createElement)(View,{
onTouchStart:function onTouchStart(){return _this.props.onLog('A unspecified touched');},
style:styles.box},
(this&&this.createElement||React.createElement)(DemoText,{style:styles.text},'A: unspecified'),


(this&&this.createElement||React.createElement)(View,{
pointerEvents:'none',
onTouchStart:function onTouchStart(){return _this.props.onLog('B none touched');},
style:[styles.box,styles.boxPassedThrough]},
(this&&this.createElement||React.createElement)(DemoText,{style:[styles.text,styles.textPassedThrough]},'B: none'),


(this&&this.createElement||React.createElement)(View,{
onTouchStart:function onTouchStart(){return _this.props.onLog('C unspecified touched');},
style:[styles.box,styles.boxPassedThrough]},
(this&&this.createElement||React.createElement)(DemoText,{style:[styles.text,styles.textPassedThrough]},'C: unspecified')))));






}});






var DemoText=React.createClass({displayName:'DemoText',
render:function render(){
return(
(this&&this.createElement||React.createElement)(View,{pointerEvents:'none'},
(this&&this.createElement||React.createElement)(Text,{
style:this.props.style},
this.props.children)));



}});


var BoxNoneExample=React.createClass({displayName:'BoxNoneExample',
render:function render(){var _this2=this;
return(
(this&&this.createElement||React.createElement)(View,{
onTouchStart:function onTouchStart(){return _this2.props.onLog('A unspecified touched');},
style:styles.box},
(this&&this.createElement||React.createElement)(DemoText,{style:styles.text},'A: unspecified'),


(this&&this.createElement||React.createElement)(View,{
pointerEvents:'box-none',
onTouchStart:function onTouchStart(){return _this2.props.onLog('B box-none touched');},
style:[styles.box,styles.boxPassedThrough]},
(this&&this.createElement||React.createElement)(DemoText,{style:[styles.text,styles.textPassedThrough]},'B: box-none'),


(this&&this.createElement||React.createElement)(View,{
onTouchStart:function onTouchStart(){return _this2.props.onLog('C unspecified touched');},
style:styles.box},
(this&&this.createElement||React.createElement)(DemoText,{style:styles.text},'C: unspecified')),



(this&&this.createElement||React.createElement)(View,{
pointerEvents:'auto',
onTouchStart:function onTouchStart(){return _this2.props.onLog('C explicitly unspecified touched');},
style:[styles.box]},
(this&&this.createElement||React.createElement)(DemoText,{style:[styles.text]},'C: explicitly unspecified')))));






}});


var BoxOnlyExample=React.createClass({displayName:'BoxOnlyExample',
render:function render(){var _this3=this;
return(
(this&&this.createElement||React.createElement)(View,{
onTouchStart:function onTouchStart(){return _this3.props.onLog('A unspecified touched');},
style:styles.box},
(this&&this.createElement||React.createElement)(DemoText,{style:styles.text},'A: unspecified'),


(this&&this.createElement||React.createElement)(View,{
pointerEvents:'box-only',
onTouchStart:function onTouchStart(){return _this3.props.onLog('B box-only touched');},
style:styles.box},
(this&&this.createElement||React.createElement)(DemoText,{style:styles.text},'B: box-only'),


(this&&this.createElement||React.createElement)(View,{
onTouchStart:function onTouchStart(){return _this3.props.onLog('C unspecified touched');},
style:[styles.box,styles.boxPassedThrough]},
(this&&this.createElement||React.createElement)(DemoText,{style:[styles.text,styles.textPassedThrough]},'C: unspecified')),



(this&&this.createElement||React.createElement)(View,{
pointerEvents:'auto',
onTouchStart:function onTouchStart(){return _this3.props.onLog('C explicitly unspecified touched');},
style:[styles.box,styles.boxPassedThrough]},
(this&&this.createElement||React.createElement)(DemoText,{style:[styles.text,styles.textPassedThrough]},'C: explicitly unspecified')))));






}});


var exampleClasses=[
{
Component:NoneExample,
title:'`none`',
description:'`none` causes touch events on the container and its child components to pass through to the parent container.'},

{
Component:BoxNoneExample,
title:'`box-none`',
description:'`box-none` causes touch events on the container to pass through and will only detect touch events on its child components.'},

{
Component:BoxOnlyExample,
title:'`box-only`',
description:'`box-only` causes touch events on the container\'s child components to pass through and will only detect touch events on the container itself.'}];



var infoToExample=function infoToExample(info){
return{
subtitle:info.title,
description:info.description,
render:function render(){
return(this&&this.createElement||React.createElement)(ExampleBox,{key:info.title,Component:info.Component});
}};

};

var styles=StyleSheet.create({
text:{
fontSize:10,
color:'#5577cc'},

textPassedThrough:{
color:'#88aadd'},

box:{
backgroundColor:'#aaccff',
borderWidth:1,
borderColor:'#7799cc',
padding:10,
margin:5},

boxPassedThrough:{
borderColor:'#99bbee'},

logText:{
fontSize:9},

logBox:{
padding:20,
margin:10,
borderWidth:0.5,
borderColor:'#f0f0f0',
backgroundColor:'#f9f9f9'},

bottomSpacer:{
marginBottom:100}});



exports.framework='React';
exports.title='Pointer Events';
exports.description='Demonstrates the use of the pointerEvents prop of a '+
'View to control how touches should be handled.';
exports.scroll=true;
exports.examples=exampleClasses.map(infoToExample);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=_qunarReactNative.StyleSheet.create({
wrapper:{
borderRadius:5,
marginBottom:5},

button:{
backgroundColor:'#eeeeee',
padding:10},

text:{
padding:10}});var




QShareExample=function(_Component){_inherits(QShareExample,_Component);function QShareExample(){_classCallCheck(this,QShareExample);return _possibleConstructorReturn(this,(QShareExample.__proto__||Object.getPrototypeOf(QShareExample)).apply(this,arguments));}_createClass(QShareExample,[{key:'getConsoleButton',value:function getConsoleButton(
arr,stateKey){var _this2=this;
return arr.map(function(key){
return{
text:key,
onPress:function onPress(){return _this2.setState(_defineProperty({},
stateKey,key));}};


});
}},{key:'render',value:function render()

{

return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableHighlight,{
style:styles.wrapper,
onPress:function onPress(){
_qunarReactNative.QShare.doShare({
com:{
title:'去哪儿网',
desc:'聪明你的旅行',
link:'http://app.qunar.com/',
imgUrl:'http://source.qunarzz.com/common/hf/logo.png'}},

function(data){
alert(JSON.stringify(data));
},function(err){
alert(JSON.stringify(err));
});
}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.button},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'Share with common settings'))),


(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableHighlight,{
style:styles.wrapper,
onPress:function onPress(){
_qunarReactNative.QShare.doShare({
com:{
title:'去哪儿网',
desc:'聪明你的旅行',
link:'http://app.qunar.com/',
imgUrl:'http://source.qunarzz.com/common/hf/logo.png'},

wechatTimeline:{
title:'朋友圈',
desc:'朋友圈分享',
link:'http://www.qunar.com/',
imgUrl:'http://img1.qunarzz.com/p/p78/1601/74/93df1e3741e903f7.jpg'}},

function(data){
alert(JSON.stringify(data));
},function(err){
alert(JSON.stringify(err));
});
}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.button},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'Share use special wechatTimeline'))),


(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableHighlight,{
style:styles.wrapper,
onPress:function onPress(){
_qunarReactNative.QShare.doShare({
com:{
title:'去哪儿网',
desc:'聪明你的旅行',
link:'http://app.qunar.com/',
imgUrl:'http://source.qunarzz.com/common/hf/logo.png'},
types:[
_qunarReactNative.QShare.wechatTimeline,
_qunarReactNative.QShare.sinaWeibo]},

function(data){
alert(JSON.stringify(data));
},function(err){
alert(JSON.stringify(err));
});
}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.button},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'Share only wechatTimeline and sinaWeibo'))),


(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableHighlight,{
style:styles.wrapper,
onPress:function onPress(){
_qunarReactNative.QShare.doShare({
com:{
title:'去哪儿网',
desc:'聪明你的旅行',
link:'http://app.qunar.com/',
imgUrl:'http://source.qunarzz.com/common/hf/logo.png'},
types:[
_qunarReactNative.QShare.wechatTimeline,
_qunarReactNative.QShare.sinaWeibo,
'sinnaweibo']},

function(data){
alert(JSON.stringify(data));
},function(err){
alert(JSON.stringify(err));
});
}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.button},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'Share with wrong type')))));




}}]);return QShareExample;}(_qunarReactNative.Component);



module.exports={
title:'QShare',
scroll:true,
examples:[{
render:function render(){
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(QShareExample,null));

}}]};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}
var QRCTPhotoManager=_qunarReactNative.NativeModules.QRCTPhotoManager;
var SchemeManager=_qunarReactNative.NativeModules.QRCTJumpHandleManager;
var ABTestManager=_qunarReactNative.NativeModules.QRCTABTest;
var StorageManager=_qunarReactNative.NativeModules.StorageManager;
var QRCTQpInfoManager=_qunarReactNative.NativeModules.QRCTQpInfoManager;
var QAV=_qunarReactNative.NativeModules.QAV;
var QShareManager=_qunarReactNative.NativeModules.QShareManager;
var QRCTDeviceInfo=_qunarReactNative.NativeModules.QRCTDeviceInfo;

var styles=_qunarReactNative.StyleSheet.create({
wrapper:{
borderRadius:5,
marginBottom:5},

button:{
backgroundColor:'#1ba9ba',
padding:10,
color:'#fff'},

text:{
padding:10}});var




QunarApiExample=function(_Component){_inherits(QunarApiExample,_Component);
function QunarApiExample(props){_classCallCheck(this,QunarApiExample);var _this=_possibleConstructorReturn(this,(QunarApiExample.__proto__||Object.getPrototypeOf(QunarApiExample)).call(this,
props));
_this.state={
threeButtonValue:'none',
tooManyButtonValue:'none',
imageUrl:''};return _this;

}_createClass(QunarApiExample,[{key:'getConsoleButton',value:function getConsoleButton(

arr,stateKey){var _this2=this;
return arr.map(function(key){
return{
text:key,
onPress:function onPress(){return _this2.setState(_defineProperty({},
stateKey,key));}};


});
}},{key:'render',value:function render()

{var _this3=this;
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableHighlight,{
style:styles.wrapper,
onPress:function onPress(){return _qunarReactNative.UELog.log(['sss','ddd']);}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.button},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'Uelog.log()'))),


(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableHighlight,{
style:styles.wrapper,
onPress:function onPress(){return _qunarReactNative.UELog.logOrigin('llllll');}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.button},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'Uelog.logOrigin()'))),


(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableHighlight,{
style:styles.wrapper,
onPress:function onPress(){return _this3.sendScheme();}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.button},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'sendScheme()'))),


(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableHighlight,{
style:styles.wrapper,
onPress:function onPress(){return _this3.sendABTest();}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.button},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'ABTest()'))),


(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableHighlight,{
style:styles.wrapper,
onPress:function onPress(){return _this3.postRequest();}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.button},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'QHotDogNetWork.postRequest()'))),



(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableHighlight,{
style:styles.wrapper,
onPress:function onPress(){return _this3.showError();}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.button},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'showError()'))),



(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableHighlight,{
style:styles.wrapper,
onPress:function onPress(){return _this3.share();}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.button},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'share()'))),



(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableHighlight,{
style:styles.wrapper,
onPress:function onPress(){return _this3.postRequest2();}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.button},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'QHotDogNetWork.postRequest2()'))),


(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableHighlight,{
style:styles.wrapper,
onPress:function onPress(){return _this3.postRequest3();}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.button},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'QHotDogNetWork.postRequest3()'))),


(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableHighlight,{
style:styles.wrapper,
onPress:function onPress(){return _this3.postRequest4();}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.button},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'QHotDogNetWork.postRequest4()'))),



(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableHighlight,{
style:styles.wrapper,
onPress:function onPress(){return _this3.postRequestTrain();}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.button},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'QHotDogNetWork.postRequestTrain()'))),



(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableHighlight,{
style:styles.wrapper,
onPress:function onPress(){return _this3.takePhoto();}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.button},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'takePhoto'))),




(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableHighlight,{
style:styles.wrapper,
onPress:function onPress(){return _this3.saveData();}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.button},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'StorageManager.saveData()'))),


(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableHighlight,{
style:styles.wrapper,
onPress:function onPress(){return _this3.getData();}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.button},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'StorageManager.getData()'))),


(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableHighlight,{
style:styles.wrapper,
onPress:function onPress(){return _this3.removeData();}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.button},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'StorageManager.removeData()'))),



(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableHighlight,{
style:styles.wrapper,
onPress:function onPress(){return _this3.abTestInfo();}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.button},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'abTestInfo'))),



(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableHighlight,{
style:styles.wrapper,
onPress:function onPress(){return _this3.getQpInfo();}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.button},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'getQpInfo'))),




(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableHighlight,{
style:styles.wrapper,
onPress:function onPress(){return _this3.qavSend();}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.button},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'qavSend'))),




(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableHighlight,{
style:styles.wrapper,
onPress:function onPress(){return _this3.qavPageToPage();}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.button},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'qavPageToPage'))),



(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableHighlight,{
style:styles.wrapper,
onPress:function onPress(){return _this3.fetchData();}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.button},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'fetchData'))),



(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableHighlight,{
style:styles.wrapper,
onPress:function onPress(){return _this3.qavinfo();}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.button},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'qavinfo'))),



(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableHighlight,{
style:styles.wrapper,
onPress:function onPress(){return _this3.deviceInfo();}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.button},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'deviceInfo'))),



(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableHighlight,{
style:styles.wrapper,
onPress:function onPress(){return _qunarReactNative.QStatusBar.setTranslucent(false,function(success){console.log(success);},function(fail){console.log(fail);});}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.button},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'setTranslucent(false)'))),


(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableHighlight,{
style:styles.wrapper,
onPress:function onPress(){return _qunarReactNative.QStatusBar.setColor('#7FFFD4',true,function(success){console.log(success);},function(fail){console.log(fail);});}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.button},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'setColor(true)'))),


(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableHighlight,{
style:styles.wrapper,
onPress:function onPress(){return _qunarReactNative.QStatusBar.setColor('#8A2BE2',false,function(success){console.log(success);},function(fail){console.log(fail);});}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.button},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'setColor(false)'))),



this.state.imageUrl!=''?(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{style:{width:400,height:400},source:{uri:this.state.imageUrl}}):null));



}},{key:'deviceInfo',value:function deviceInfo()




{
console.log("version:"+QRCTDeviceInfo.qrn_version);
}},{key:'fetchData',value:function fetchData()

{
fetch('http://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json',
{headers:{'User-Agent':'android10010'}}).
then(function(response){console.log("response:");}).
then(function(responseData){
console.log("responseDate:");
}).
done();
}},{key:'qavPageToPage',value:function qavPageToPage()

{
QAV.pageToPage({from:'PageA',to:'PageB'});
}},{key:'qavinfo',value:function qavinfo()

{
QAV.testQav({id:100});
}},{key:'showError',value:function showError()

{
throw new Error("ll");
}},{key:'qavSend',value:function qavSend()

{
QAV.send({type:'avtype',id:'avid',xpath:'avxpath',text:'avtext'});
}},{key:'getQpInfo',value:function getQpInfo()

{
QRCTQpInfoManager.getQpInfo('bnbrn',function(success){console.log("success:"+success.version);},function(fail){console.log('fail');});
}},{key:'share',value:function share()


{
QShareManager.doShare(
[{
type:'QQFriend',
title:'qunar大放送',
desc:'优惠券来了~',
link:'www.qunar.com',
imgUrl:'http://img1.qunarzz.com/p/tts1/1602/b0/71dc30e564657f7.jpg_r_390x260x90_65929027.jpg'},

{
type:'QQZone',
title:'qunar大放送',
desc:'优惠券来了~',
link:'www.qunar.com',
imgUrl:'http://img1.qunarzz.com/p/tts1/1602/b0/71dc30e564657f7.jpg_r_390x260x90_65929027.jpg'},

{
type:'sms',
title:'qunar大放送',
desc:'优惠券来了~',
link:'www.qunar.com',
imgUrl:'http://img1.qunarzz.com/p/tts1/1602/b0/71dc30e564657f7.jpg_r_390x260x90_65929027.jpg'},

{
type:'wechatTimeline',
title:'qunar大放送',
desc:'优惠券来了~',
link:'www.qunar.com',
imgUrl:'http://img1.qunarzz.com/p/tts1/1602/b0/71dc30e564657f7.jpg_r_390x260x90_65929027.jpg'},

{
type:'QQFav',
title:'qunar大放送',
desc:'优惠券来了~',
link:'www.qunar.com',
imgUrl:'http://img1.qunarzz.com/p/tts1/1602/b0/71dc30e564657f7.jpg_r_390x260x90_65929027.jpg'}],

function(){console.log("success");},function(){console.log("fail");});

}},{key:'abTestInfo',value:function abTestInfo()

{
var abId='160616_ho_yhty_innd';
var simpleName='HotelList';
ABTestManager.abTest(abId,simpleName,
function(ABTestInfo){



console.log("success"+ABTestInfo.ab_type);


},function(err){



console.log("fail");

});
}},{key:'takePhoto',value:function takePhoto()

{var _this4=this;
QRCTPhotoManager.takePhotoAndSave(
function(data){
console.log('success='+JSON.stringify(data));
_this4.setState({
imageUrl:data.uri});

console.log(_this4.state.imageUrl);},
function(data){console.log('faile='+JSON.stringify(data));});
}},{key:'saveData',value:function saveData()

{
StorageManager.saveData(
'qunarone',
'name',
{value:'wangtao'},
function(){console.log('save date success');},
function(){console.log('save dtae faile');});
}},{key:'getData',value:function getData()

{
StorageManager.getData(
'qunarone',
'name',
'string',
function(data){console.log(JSON.stringify(data)+" success");},
function(fail){console.log(JSON.stringify(fail)+" faile");});
}},{key:'removeData',value:function removeData()

{
StorageManager.removeData(
'qunarone',
'name');

}},{key:'postRequestTrain',value:function postRequestTrain()

{

_qunarReactNative.QHotDogNetWork.postRequest({serviceType:"",
url:"http://searchtouch.qunar.com/travelbook/routeList.json?destType=1&destId=299861&query=%E5%8D%97%E4%BA%AC",
param:{},
useCache:false,
cacheKey:"",
successCallback:function successCallback(sucess){console.log(sucess+"sucess");},
failCallback:function failCallback(fail){console.log(fail+"fail");},
cacheCallback:function cacheCallback(cache){console.log(cache+"cache");}});

}},{key:'postRequest',value:function postRequest()



{
_qunarReactNative.QHotDogNetWork.postRequest({serviceType:"aroundtravel_",
url:"http://wap1.beta.cn0.qunar.com/fca",
param:{"latitude":"40.003774","length":20,"locationCity":"北京","longitude":"116.349656","queryCity":"","requestId":"DE5A565E-F862-7728-5562-8D3BCF72627F_1460791232842","start":0},
useCache:true,
cacheKey:"ss",
successCallback:function successCallback(sucess){console.log(sucess+"sucess");},
failCallback:function failCallback(fail){console.log(fail+"fail");},
cacheCallback:function cacheCallback(cache){console.log(cache+"cache");}});

}},{key:'sendScheme',value:function sendScheme()

{
SchemeManager.sendScheme('qunaraphone://react/open?hybridId=bnbrn&moduleName=bnbrn',{},'',function(data){console.log(data);});
}},{key:'sendABTest',value:function sendABTest()
{
ABTestManager.abTest('123','love',function(){console.log("success");},function(){console.log("fail");});
}},{key:'postRequest2',value:function postRequest2()

{
var param={
source:'StatusPage'};

_qunarReactNative.QHotDogNetWork.postRequest({
serviceType:'f_homepage_banner',
url:"http://pitcher.corp.qunar.com/fca/",
param:param,
useCache:false,
cacheKey:"",
successCallback:function successCallback(sucess){console.log(sucess+"sucess");},
failCallback:function failCallback(fail){console.log(fail+"fail");},
cacheCallback:function cacheCallback(cache){console.log(cache+"cache");}});

}},{key:'postRequest3',value:function postRequest3()

{

var b={
cityUrl:"beijing_city",
cityTag:"beijing_city",
fromDate:"2016-05-24",
toDate:"2016-05-25",
ids:"beijing_city_32164",
currLatitude:"0.000000",
currLongitude:"0.000000",
fromForLog:60,
uuid:"",
userName:"",
userId:"",
coordConvert:0,
cs:"bnb"};

_qunarReactNative.QHotDogNetWork.postRequest({serviceType:"h_hdetailpriceinn",
url:"",
param:b,
useCache:false,
cacheKey:'',
successCallback:function successCallback(sucess){console.log(sucess+"sucess3");},
failCallback:function failCallback(fail){console.log(fail+"fail3");},
cacheCallback:function cacheCallback(cache){console.log(cache+"cache3");}});

}},{key:'postRequest4',value:function postRequest4()

{

var b={
cityUrl:"beijing_city",
cityTag:"beijing_city",
fromDate:"2016-05-24",
toDate:"2016-05-25",
ids:"beijing_city_32164",
currLatitude:"0.000000",
currLongitude:"0.000000",
fromForLog:60,
uuid:"",
userName:"",
userId:"",
coordConvert:0,
cs:"bnb"};

_qunarReactNative.QHotDogNetWork.postRequest({serviceType:"h_hdetail",
url:"",
param:b,
useCache:false,
cacheKey:'',
successCallback:function successCallback(sucess){console.log(sucess+"sucess3");},
failCallback:function failCallback(fail){console.log(fail+"fail3");},
cacheCallback:function cacheCallback(cache){console.log(cache+"cache3");}});

}}]);return QunarApiExample;}(_qunarReactNative.Component);




module.exports={
title:'QunarApi',
scroll:true,
examples:[{
render:function render(){
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(QunarApiExample,null));

}}]};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


StorageManagerEx=function(_Component){_inherits(StorageManagerEx,_Component);function StorageManagerEx(){_classCallCheck(this,StorageManagerEx);return _possibleConstructorReturn(this,(StorageManagerEx.__proto__||Object.getPrototypeOf(StorageManagerEx)).apply(this,arguments));}_createClass(StorageManagerEx,[{key:'render',value:function render()

{
var SaveDateValue='ss';
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.container},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{
style:styles.button,
onPress:function onPress(){
_qunarReactNative.QStorageManager.saveData('hotel','manager',{value:SaveDateValue},function(){
_qunarReactNative.Alert.alert('保存成功');
},function(err){
_qunarReactNative.Alert.alert(JSON.stringify(err.message));
});
}},' saveData'),



(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{
style:styles.button,
onPress:function onPress(){
_qunarReactNative.QStorageManager.removeData('hotel','manager');
}},' remove'),



(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{
style:styles.button,
onPress:function onPress(){
_qunarReactNative.QStorageManager.getData('hotel','manager','string',function(data){
_qunarReactNative.Alert.alert(JSON.stringify(data));
},function(err){
_qunarReactNative.Alert.alert(JSON.stringify(err.message));
});
}},' getData')));





}}]);return StorageManagerEx;}(_qunarReactNative.Component);


var styles;
styles=_qunarReactNative.StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
alignItems:'center',
backgroundColor:'#D0D0D0'},

welcome:{
fontSize:20,
textAlign:'center',
margin:10,
color:'red',
height:200},


instructions:{
textAlign:'center',
color:'#333333',
marginBottom:5},

button:{
height:30,
width:80,
borderWidth:3,
borderColor:'#f099f0',
borderRadius:3,
textAlign:'center',
justifyContent:'center'},


button2:{
marginBottom:10,
fontWeight:'500'}});




module.exports={
title:'StorageManager',
scroll:true,
examples:[{
render:function render(){
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(StorageManagerEx,null));

}}]};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var React=__webpack_require__(0);var

AlertIOS=



React.AlertIOS,Platform=React.Platform,ToastAndroid=React.ToastAndroid,View=React.View;
var TimerMixin=__webpack_require__(8);
var UIExplorerButton=__webpack_require__(5);

var TimerTester=React.createClass({displayName:'TimerTester',
mixins:[TimerMixin],

_ii:0,
_iters:0,
_start:0,
_timerFn:null,
_handle:null,

render:function render(){
var args='fn'+(this.props.dt!==undefined?', '+this.props.dt:'');
return(
(this&&this.createElement||React.createElement)(UIExplorerButton,{onPress:this._run},'Measure: ',
this.props.type,'(',args,') - ',this._ii||0));


},

_run:function _run(){var _this=this;
if(!this._start){
var d=new Date();
this._start=d.getTime();
this._iters=100;
this._ii=0;
if(this.props.type==='setTimeout'){
if(this.props.dt<1){
this._iters=5000;
}else if(this.props.dt>20){
this._iters=10;
}
this._timerFn=function(){return _this.setTimeout(_this._run,_this.props.dt);};
}else if(this.props.type==='requestAnimationFrame'){
this._timerFn=function(){return _this.requestAnimationFrame(_this._run);};
}else if(this.props.type==='setImmediate'){
this._iters=5000;
this._timerFn=function(){return _this.setImmediate(_this._run);};
}else if(this.props.type==='setInterval'){
this._iters=30;
this._timerFn=null;
this._handle=this.setInterval(this._run,this.props.dt);
}
}
if(this._ii>=this._iters&&!this._handle){
var d=new Date();
var e=d.getTime()-this._start;
var msg='Finished '+this._ii+' '+this.props.type+' calls.\n'+
'Elapsed time: '+e+' ms\n'+e/this._ii+' ms / iter';
console.log(msg);
if(Platform.OS==='ios'){
AlertIOS.alert(msg);
}else if(Platform.OS==='android'){
ToastAndroid.show(msg,ToastAndroid.SHORT);
}
this._start=0;
this.forceUpdate(function(){_this._ii=0;});
return;
}
this._ii++;

if(this._ii%(this._iters/5)===0){
this.forceUpdate();
}
this._timerFn&&this._timerFn();
},

clear:function clear(){
this.clearInterval(this._handle);
if(this._handle){

this._handle=null;
this._iters=this._ii;
this._run();
}
}});


exports.framework='React';
exports.title='Timers, TimerMixin';
exports.scroll=true;
exports.description='The TimerMixin provides timer functions for executing '+
'code in the future that are safely cleaned up when the component unmounts.';

exports.examples=[
{
subtitle:'this.setTimeout(fn, t)',
description:'Execute function fn t milliseconds in the future.  If '+
't === 0, it will be enqueued immediately in the next event loop.  '+
'Larger values will fire on the closest frame.',
render:function render(){
return(
(this&&this.createElement||React.createElement)(View,null,
(this&&this.createElement||React.createElement)(TimerTester,{type:'setTimeout',dt:0}),
(this&&this.createElement||React.createElement)(TimerTester,{type:'setTimeout',dt:1}),
(this&&this.createElement||React.createElement)(TimerTester,{type:'setTimeout',dt:100})));


}},

{
subtitle:'this.requestAnimationFrame(fn)',
description:'Execute function fn on the next frame.',
render:function render(){
return(
(this&&this.createElement||React.createElement)(View,null,
(this&&this.createElement||React.createElement)(TimerTester,{type:'requestAnimationFrame'})));


}},

{
subtitle:'this.setImmediate(fn)',
description:'Execute function fn at the end of the current JS event loop.',
render:function render(){
return(
(this&&this.createElement||React.createElement)(View,null,
(this&&this.createElement||React.createElement)(TimerTester,{type:'setImmediate'})));


}},

{
subtitle:'this.setInterval(fn, t)',
description:'Execute function fn every t milliseconds until cancelled '+
'or component is unmounted.',
render:function render(){
var IntervalExample=React.createClass({displayName:'IntervalExample',
getInitialState:function getInitialState(){
return{
showTimer:true};

},

render:function render(){var _this2=this;
if(this.state.showTimer){
var timer=[
(this&&this.createElement||React.createElement)(TimerTester,{ref:'interval',dt:25,type:'setInterval'}),
(this&&this.createElement||React.createElement)(UIExplorerButton,{onPress:function onPress(){return _this2.refs.interval.clear();}},'Clear interval')];



var toggleText='Unmount timer';
}else{
var timer=null;
var toggleText='Mount new timer';
}
return(
(this&&this.createElement||React.createElement)(View,null,
this.state.showTimer&&this._renderTimer(),
(this&&this.createElement||React.createElement)(UIExplorerButton,{onPress:this._toggleTimer},
this.state.showTimer?'Unmount timer':'Mount new timer')));



},

_renderTimer:function _renderTimer(){var _this3=this;
return(
(this&&this.createElement||React.createElement)(View,null,
(this&&this.createElement||React.createElement)(TimerTester,{ref:'interval',dt:25,type:'setInterval'}),
(this&&this.createElement||React.createElement)(UIExplorerButton,{onPress:function onPress(){return _this3.refs.interval.clear();}},'Clear interval')));




},

_toggleTimer:function _toggleTimer(){
this.setState({showTimer:!this.state.showTimer});
}});

return(this&&this.createElement||React.createElement)(IntervalExample,null);
}}];

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var React=__webpack_require__(0);var

Animated=



React.Animated,StyleSheet=React.StyleSheet,Text=React.Text,View=React.View;

var Flip=React.createClass({displayName:'Flip',
getInitialState:function getInitialState(){
return{
theta:new Animated.Value(45)};

},

componentDidMount:function componentDidMount(){
this._animate();
},

_animate:function _animate(){
this.state.theta.setValue(0);
Animated.timing(this.state.theta,{
toValue:360,
duration:5000}).
start(this._animate);
},

render:function render(){
return(
(this&&this.createElement||React.createElement)(View,{style:styles.flipCardContainer},
(this&&this.createElement||React.createElement)(Animated.View,{style:[
styles.flipCard,
{transform:[
{perspective:850},
{rotateX:this.state.theta.interpolate({
inputRange:[0,180],
outputRange:['0deg','180deg']})}]}]},


(this&&this.createElement||React.createElement)(Text,{style:styles.flipText},'This text is flipping great.')),



(this&&this.createElement||React.createElement)(Animated.View,{style:[styles.flipCard,{
position:'absolute',
top:0,
backgroundColor:'red',
transform:[
{perspective:850},
{rotateX:this.state.theta.interpolate({
inputRange:[0,180],
outputRange:['180deg','360deg']})}]}]},


(this&&this.createElement||React.createElement)(Text,{style:styles.flipText},'On the flip side...'))));





}});


var styles=StyleSheet.create({
container:{
height:500},

box1:{
left:0,
backgroundColor:'green',
height:50,
position:'absolute',
top:0,
transform:[
{translateX:100},
{translateY:50},
{rotate:'30deg'},
{scaleX:2},
{scaleY:2}],

width:50},

box2:{
left:0,
backgroundColor:'purple',
height:50,
position:'absolute',
top:0,
transform:[
{scaleX:2},
{scaleY:2},
{translateX:100},
{translateY:50},
{rotate:'30deg'}],

width:50},

box3step1:{
left:0,
backgroundColor:'lightpink',
height:50,
position:'absolute',
top:0,
transform:[
{rotate:'30deg'}],

width:50},

box3step2:{
left:0,
backgroundColor:'hotpink',
height:50,
opacity:0.5,
position:'absolute',
top:0,
transform:[
{rotate:'30deg'},
{scaleX:2},
{scaleY:2}],

width:50},

box3step3:{
left:0,
backgroundColor:'deeppink',
height:50,
opacity:0.5,
position:'absolute',
top:0,
transform:[
{rotate:'30deg'},
{scaleX:2},
{scaleY:2},
{translateX:100},
{translateY:50}],

width:50},

box4:{
left:0,
backgroundColor:'darkorange',
height:50,
position:'absolute',
top:0,
transform:[
{translate:[200,350]},
{scale:2.5},
{rotate:'-0.2rad'}],

width:100},

box5:{
backgroundColor:'maroon',
height:50,
position:'absolute',
right:0,
top:0,
width:50},

box5Transform:{
transform:[
{translate:[-50,35]},
{rotate:'50deg'},
{scale:2}]},


flipCardContainer:{
marginVertical:40,
flex:1,
alignSelf:'center'},

flipCard:{
width:200,
height:200,
alignItems:'center',
justifyContent:'center',
backgroundColor:'blue',
backfaceVisibility:'hidden'},

flipText:{
width:90,
fontSize:20,
color:'white',
fontWeight:'bold'}});



exports.title='Transforms';
exports.description='View transforms';
exports.scroll=true;
exports.examples=[
{
subtitle:'Perspective',
description:'perspective: 850, rotateX: Animated.timing(0 -> 360)',
render:function render(){return(this&&this.createElement||React.createElement)(Flip,null);}},

{
subtitle:'Translate, Rotate, Scale',
description:"translateX: 100, translateY: 50, rotate: '30deg', scaleX: 2, scaleY: 2",
render:function render(){
return(
(this&&this.createElement||React.createElement)(View,{style:styles.container},
(this&&this.createElement||React.createElement)(View,{style:styles.box1})));


}},

{
subtitle:'Scale, Translate, Rotate, ',
description:"scaleX: 2, scaleY: 2, translateX: 100, translateY: 50, rotate: '30deg'",
render:function render(){
return(
(this&&this.createElement||React.createElement)(View,{style:styles.container},
(this&&this.createElement||React.createElement)(View,{style:styles.box2})));


}},

{
subtitle:'Rotate',
description:"rotate: '30deg'",
render:function render(){
return(
(this&&this.createElement||React.createElement)(View,{style:styles.container},
(this&&this.createElement||React.createElement)(View,{style:styles.box3step1})));


}},

{
subtitle:'Rotate, Scale',
description:"rotate: '30deg', scaleX: 2, scaleY: 2",
render:function render(){
return(
(this&&this.createElement||React.createElement)(View,{style:styles.container},
(this&&this.createElement||React.createElement)(View,{style:styles.box3step2})));


}},

{
subtitle:'Rotate, Scale, Translate ',
description:"rotate: '30deg', scaleX: 2, scaleY: 2, translateX: 100, translateY: 50",
render:function render(){
return(
(this&&this.createElement||React.createElement)(View,{style:styles.container},
(this&&this.createElement||React.createElement)(View,{style:styles.box3step3})));


}},

{
subtitle:'Translate, Scale, Rotate',
description:"translate: [200, 350], scale: 2.5, rotate: '-0.2rad'",
render:function render(){
return(
(this&&this.createElement||React.createElement)(View,{style:styles.container},
(this&&this.createElement||React.createElement)(View,{style:styles.box4})));


}},

{
subtitle:'Translate, Rotate, Scale',
description:"translate: [-50, 35], rotate: '50deg', scale: 2",
render:function render(){
return(
(this&&this.createElement||React.createElement)(View,{style:styles.container},
(this&&this.createElement||React.createElement)(View,{style:[styles.box5,styles.box5Transform]})));


}}];

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var React=__webpack_require__(0);var

StyleSheet=


React.StyleSheet,Text=React.Text,View=React.View;

var UIExplorerBlock=React.createClass({displayName:'UIExplorerBlock',
propTypes:{
title:React.PropTypes.string,
description:React.PropTypes.string},


getInitialState:function getInitialState(){
return{description:null};
},

render:function render(){
var description;
if(this.props.description){
description=
(this&&this.createElement||React.createElement)(Text,{style:styles.descriptionText},
this.props.description);

}

return(
(this&&this.createElement||React.createElement)(View,{style:styles.container},
(this&&this.createElement||React.createElement)(View,{style:styles.titleContainer},
(this&&this.createElement||React.createElement)(Text,{style:styles.titleText},
this.props.title),

description),

(this&&this.createElement||React.createElement)(View,{style:styles.children},
this.props.children)));



}});


var styles=StyleSheet.create({
container:{
borderRadius:3,
borderWidth:0.5,
borderColor:'#d6d7da',
backgroundColor:'#ffffff',
margin:10,
marginVertical:5,
overflow:'hidden'},

titleContainer:{
borderBottomWidth:0.5,
borderTopLeftRadius:3,
borderTopRightRadius:2.5,
borderBottomColor:'#d6d7da',
backgroundColor:'#f6f7f8',
paddingHorizontal:10,
paddingVertical:5},

titleText:{
fontSize:14,
fontWeight:'500'},

descriptionText:{
fontSize:14},

disclosure:{
position:'absolute',
top:0,
right:0,
padding:10},

disclosureIcon:{
width:12,
height:8},

children:{
margin:10}});



module.exports=UIExplorerBlock;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var React=__webpack_require__(0);var

ScrollView=


React.ScrollView,StyleSheet=React.StyleSheet,View=React.View;

var UIExplorerTitle=__webpack_require__(38);

var UIExplorerPage=React.createClass({displayName:'UIExplorerPage',

propTypes:{
keyboardShouldPersistTaps:React.PropTypes.bool,
noScroll:React.PropTypes.bool,
noSpacer:React.PropTypes.bool},


render:function render(){
var ContentWrapper;
var wrapperProps={};
if(this.props.noScroll){
ContentWrapper=View;
}else{
ContentWrapper=ScrollView;
wrapperProps.automaticallyAdjustContentInsets=!this.props.title;
wrapperProps.keyboardShouldPersistTaps=true;
wrapperProps.keyboardDismissMode='interactive';
}
var title=this.props.title?
(this&&this.createElement||React.createElement)(UIExplorerTitle,{title:this.props.title}):
null;
var spacer=this.props.noSpacer?null:(this&&this.createElement||React.createElement)(View,{style:styles.spacer});
return(
(this&&this.createElement||React.createElement)(View,{style:styles.container},
title,
(this&&this.createElement||React.createElement)(ContentWrapper,_extends({
style:styles.wrapper},
wrapperProps),
this.props.children,
spacer)));



}});


var styles=StyleSheet.create({
container:{
backgroundColor:'#e9eaed',
flex:1},

spacer:{
height:270},

wrapper:{
flex:1,
paddingTop:10}});



module.exports=UIExplorerPage;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var React=__webpack_require__(0);var

StyleSheet=


React.StyleSheet,Text=React.Text,View=React.View;

var UIExplorerTitle=React.createClass({displayName:'UIExplorerTitle',
render:function render(){
return(
(this&&this.createElement||React.createElement)(View,{style:styles.container},
(this&&this.createElement||React.createElement)(Text,{style:styles.text},
this.props.title)));



}});


var styles=StyleSheet.create({
container:{
borderRadius:4,
borderWidth:0.5,
borderColor:'#d6d7da',
margin:10,
marginBottom:0,
height:45,
padding:10,
backgroundColor:'white'},

text:{
fontSize:19,
fontWeight:'500'}});



module.exports=UIExplorerTitle;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

















var React=__webpack_require__(2);var

StyleSheet=




React.StyleSheet,View=React.View,Text=React.Text,TouchableHighlight=React.TouchableHighlight,VibrationIOS=React.VibrationIOS;

exports.framework='React';
exports.title='VibrationIOS';
exports.description='Vibration API for iOS';
exports.examples=[{
subtitle:'VibrationIOS.vibrate()',
render:function render(){
return(
(this&&this.createElement||React.createElement)(TouchableHighlight,{
style:styles.wrapper,
onPress:function onPress(){return VibrationIOS.vibrate();}},
(this&&this.createElement||React.createElement)(View,{style:styles.button},
(this&&this.createElement||React.createElement)(Text,null,'Vibrate'))));



}}];


var styles=StyleSheet.create({
wrapper:{
borderRadius:5,
marginBottom:5},

button:{
backgroundColor:'#eeeeee',
padding:10}});

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";























var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var React=__webpack_require__(9);
var ReactNative=__webpack_require__(2);var

Image=



ReactNative.Image,StyleSheet=ReactNative.StyleSheet,Text=ReactNative.Text,View=ReactNative.View;var

ImageCapInsetsExample=function(_React$Component){_inherits(ImageCapInsetsExample,_React$Component);function ImageCapInsetsExample(){_classCallCheck(this,ImageCapInsetsExample);return _possibleConstructorReturn(this,(ImageCapInsetsExample.__proto__||Object.getPrototypeOf(ImageCapInsetsExample)).apply(this,arguments));}_createClass(ImageCapInsetsExample,[{key:'render',value:function render()
{
return(
(this&&this.createElement||React.createElement)(View,null,
(this&&this.createElement||React.createElement)(View,{style:styles.background},
(this&&this.createElement||React.createElement)(Text,null,'capInsets: none'),


(this&&this.createElement||React.createElement)(Image,{
source:{uri:__webpack_require__(1)['story-background']},
style:styles.storyBackground,
resizeMode:Image.resizeMode.stretch,
capInsets:{left:0,right:0,bottom:0,top:0}})),


(this&&this.createElement||React.createElement)(View,{style:[styles.background,{paddingTop:10}]},
(this&&this.createElement||React.createElement)(Text,null,'capInsets: 15'),


(this&&this.createElement||React.createElement)(Image,{
source:{uri:__webpack_require__(1)['story-background']},
style:styles.storyBackground,
resizeMode:Image.resizeMode.stretch,
capInsets:{left:15,right:15,bottom:15,top:15}}))));




}}]);return ImageCapInsetsExample;}(React.Component);


var styles=StyleSheet.create({
background:{
backgroundColor:'#F6F6F6',
justifyContent:'center',
alignItems:'center'},

horizontal:{
flexDirection:'row'},

storyBackground:{
width:250,
height:150,
borderWidth:1},

text:{
fontSize:13.5}});



module.exports=ImageCapInsetsExample;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}










var base64Icon='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';

var ImageCapInsetsExample=__webpack_require__(40);var

NetworkImageCallbackExample=function(_Component){_inherits(NetworkImageCallbackExample,_Component);
function NetworkImageCallbackExample(){_classCallCheck(this,NetworkImageCallbackExample);var _this=_possibleConstructorReturn(this,(NetworkImageCallbackExample.__proto__||Object.getPrototypeOf(NetworkImageCallbackExample)).call(this));

_this._loadEventFired=_this._loadEventFired.bind(_this);
_this.state={
events:[],
mountTime:new Date()};return _this;

}_createClass(NetworkImageCallbackExample,[{key:'componentWillMount',value:function componentWillMount()

{
this.setState({mountTime:new Date()});
}},{key:'render',value:function render()

{var _this2=this;var
mountTime=this.state.mountTime;

return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
source:this.props.source,
style:[styles.base,{overflow:'visible'}],
onLoadStart:function onLoadStart(){return _this2._loadEventFired('\u2714 onLoadStart (+'+(new Date()-mountTime)+'ms)');},
onLoad:function onLoad(){return _this2._loadEventFired('\u2714 onLoad (+'+(new Date()-mountTime)+'ms)');},
onLoadEnd:function onLoadEnd(){return _this2._loadEventFired('\u2714 onLoadEnd (+'+(new Date()-mountTime)+'ms)');}}),


(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:{marginTop:20}},
this.state.events.join('\n'))));



}},{key:'_loadEventFired',value:function _loadEventFired(

event){
this.setState(function(state){
return state.events=[].concat(_toConsumableArray(state.events),[event]);
});
}}]);return NetworkImageCallbackExample;}(_qunarReactNative.Component);var


NetworkImageExample=function(_Component2){_inherits(NetworkImageExample,_Component2);
function NetworkImageExample(){_classCallCheck(this,NetworkImageExample);var _this3=_possibleConstructorReturn(this,(NetworkImageExample.__proto__||Object.getPrototypeOf(NetworkImageExample)).call(this));

_this3.state={
error:false,
loading:false,
progress:0};return _this3;

}_createClass(NetworkImageExample,[{key:'render',value:function render()

{var _this4=this;
var loader=this.state.loading?
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.progress},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,this.state.progress,'%'),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.ActivityIndicatorIOS,{style:{marginLeft:5}})):
null;
return this.state.error?
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,this.state.error):
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
source:this.props.source,
style:[styles.base,{overflow:'visible'}],
onLoadStart:function onLoadStart(e){return _this4.setState({loading:true});},
onError:function onError(e){return _this4.setState({error:e.nativeEvent.error,loading:false});},
onProgress:function onProgress(e){return _this4.setState({progress:Math.round(100*e.nativeEvent.loaded/e.nativeEvent.total)});},
onLoad:function onLoad(){return _this4.setState({loading:false,error:false});}},
loader);

}}]);return NetworkImageExample;}(_qunarReactNative.Component);var


ImageSizeExample=function(_Component3){_inherits(ImageSizeExample,_Component3);
function ImageSizeExample(){_classCallCheck(this,ImageSizeExample);var _this5=_possibleConstructorReturn(this,(ImageSizeExample.__proto__||Object.getPrototypeOf(ImageSizeExample)).call(this));

_this5.state={
width:0,
height:0};return _this5;

}_createClass(ImageSizeExample,[{key:'componentDidMount',value:function componentDidMount()

{var _this6=this;
_qunarReactNative.Image.getSize(this.props.source.uri,function(width,height){
_this6.setState({width:width,height:height});
});
}},{key:'render',value:function render()

{
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{flexDirection:'row'}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
style:{
width:60,
height:60,
backgroundColor:'transparent',
marginRight:10},

source:this.props.source}),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'Actual dimensions:',
'\n','Width: ',
this.state.width,', Height: ',this.state.height)));



}}]);return ImageSizeExample;}(_qunarReactNative.Component);


module.exports={
title:'<Image>',
scroll:true,
examples:[
{
subtitle:'Plain Network Image',
description:'If the `source` prop `uri` property is prefixed with '+
'"http", then it will be downloaded from the network.',
render:function render(){
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
source:{uri:__webpack_require__(1).logo_og},
style:styles.base}));


}},

{
subtitle:'Plain Static Image',
description:'Static assets should be placed in the source code tree, and '+
'required in the same way as JavaScript modules.',
render:function render(){
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.horizontal},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{source:{uri:__webpack_require__(1).uie_thumb_normal},style:styles.icon}),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{source:{uri:__webpack_require__(1).uie_thumb_selected},style:styles.icon}),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{source:{uri:__webpack_require__(1).uie_comment_normal},style:styles.icon}),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{source:{uri:__webpack_require__(1).uie_comment_highlighted},style:styles.icon})));


}},

{
subtitle:'Image Loading Events',
render:function render(){
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(NetworkImageCallbackExample,{source:{uri:__webpack_require__(1).blog_hero}}));

}},

{
subtitle:'Error Handler',
render:function render(){
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(NetworkImageExample,{source:{uri:__webpack_require__(1).logo_og_error}}));

},
platform:'ios'},

{
subtitle:'Image Download Progress',
render:function render(){
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(NetworkImageExample,{source:{uri:__webpack_require__(1).blog_hero}}));

},
platform:'ios'},















{
subtitle:'Border Color',
render:function render(){
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.horizontal},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
source:smallImage,
style:[
styles.base,
styles.background,
{borderWidth:3,borderColor:'#f099f0'}]})));




}},

{
subtitle:'Border Width',
render:function render(){
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.horizontal},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
source:smallImage,
style:[
styles.base,
styles.background,
{borderWidth:5,borderColor:'#f099f0'}]})));




}},

{
subtitle:'Border Radius',
render:function render(){
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.horizontal},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
style:[styles.base,{borderRadius:5}],
source:fullImage}),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
style:[styles.base,styles.leftMargin,{borderRadius:19}],
source:fullImage})));



}},

{
subtitle:'Background Color',
render:function render(){
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.horizontal},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{source:smallImage,style:styles.base}),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
style:[
styles.base,
styles.leftMargin,
{backgroundColor:'rgba(0, 0, 100, 0.25)'}],

source:smallImage}),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
style:[styles.base,styles.leftMargin,{backgroundColor:'red'}],
source:smallImage}),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
style:[styles.base,styles.leftMargin,{backgroundColor:'black'}],
source:smallImage})));



}},

{
subtitle:'Opacity',
render:function render(){
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.horizontal},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
style:[styles.base,{opacity:1}],
source:fullImage}),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
style:[styles.base,styles.leftMargin,{opacity:0.8}],
source:fullImage}),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
style:[styles.base,styles.leftMargin,{opacity:0.6}],
source:fullImage}),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
style:[styles.base,styles.leftMargin,{opacity:0.4}],
source:fullImage}),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
style:[styles.base,styles.leftMargin,{opacity:0.2}],
source:fullImage}),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
style:[styles.base,styles.leftMargin,{opacity:0}],
source:fullImage})));



}},

{
subtitle:'Nesting',
render:function render(){
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
style:{width:60,height:60,backgroundColor:'transparent'},
source:fullImage},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.nestedText},'React')));




}},

{
subtitle:'Tint Color',
description:'The `tintColor` style prop changes all the non-alpha '+
'pixels to the tint color.',
render:function render(){
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.horizontal},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
source:{uri:__webpack_require__(1).uie_thumb_normal},
style:[styles.icon,{borderRadius:5,tintColor:'#5ac8fa'}]}),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
source:{uri:__webpack_require__(1).uie_thumb_normal},
style:[styles.icon,styles.leftMargin,{borderRadius:5,tintColor:'#4cd964'}]}),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
source:{uri:__webpack_require__(1).uie_thumb_normal},
style:[styles.icon,styles.leftMargin,{borderRadius:5,tintColor:'#ff2d55'}]}),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
source:{uri:__webpack_require__(1).uie_thumb_normal},
style:[styles.icon,styles.leftMargin,{borderRadius:5,tintColor:'#8e8e93'}]})),


(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.sectionText},'It also works with downloaded images:'),


(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.horizontal},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
source:smallImage,
style:[styles.base,{borderRadius:5,tintColor:'#5ac8fa'}]}),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
source:smallImage,
style:[styles.base,styles.leftMargin,{borderRadius:5,tintColor:'#4cd964'}]}),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
source:smallImage,
style:[styles.base,styles.leftMargin,{borderRadius:5,tintColor:'#ff2d55'}]}),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
source:smallImage,
style:[styles.base,styles.leftMargin,{borderRadius:5,tintColor:'#8e8e93'}]}))));




}},

{
subtitle:'Resize Mode',
description:'The `resizeMode` style prop controls how the image is '+
'rendered within the frame.',
render:function render(){var _this7=this;
return(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
[smallImage,fullImage].map(function(image,index){
return(
(_this7&&_this7.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{key:index},
(_this7&&_this7.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.horizontal},
(_this7&&_this7.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(_this7&&_this7.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.resizeModeText]},'Contain\nfitCenter'),


(_this7&&_this7.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
style:styles.resizeMode,
resizeMode:_qunarReactNative.Image.resizeMode.fitCenter,
source:image})),


(_this7&&_this7.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.leftMargin},
(_this7&&_this7.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.resizeModeText]},'Cover\ncenterCrop'),


(_this7&&_this7.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
style:styles.resizeMode,
resizeMode:_qunarReactNative.Image.resizeMode.centerCrop,
source:image}))),



(_this7&&_this7.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.horizontal},
(_this7&&_this7.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(_this7&&_this7.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.resizeModeText]},'Stretch(fitXy)'),


(_this7&&_this7.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
style:styles.resizeMode,
resizeMode:_qunarReactNative.Image.resizeMode.fitXy,
source:image})),


_qunarReactNative.Platform.OS==='ios'?
(_this7&&_this7.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.leftMargin},
(_this7&&_this7.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.resizeModeText]},'Repeat'),


(_this7&&_this7.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
style:styles.resizeMode,
resizeMode:_qunarReactNative.Image.resizeMode.repeat,
source:image})):


null,
_qunarReactNative.Platform.OS==='android'?
(_this7&&_this7.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.leftMargin},
(_this7&&_this7.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.resizeModeText]},'Center'),


(_this7&&_this7.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
style:styles.resizeMode,
resizeMode:_qunarReactNative.Image.resizeMode.center,
source:image})):


null),

(_this7&&_this7.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.horizontal},
(_this7&&_this7.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(_this7&&_this7.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.resizeModeText]},'fitStart'),


(_this7&&_this7.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
style:styles.resizeMode,
resizeMode:_qunarReactNative.Image.resizeMode.fitStart,
source:image})),


(_this7&&_this7.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.leftMargin},
(_this7&&_this7.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.resizeModeText]},'fitEnd'),


(_this7&&_this7.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
style:styles.resizeMode,
resizeMode:_qunarReactNative.Image.resizeMode.fitEnd,
source:image}))),



(_this7&&_this7.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.horizontal},
(_this7&&_this7.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(_this7&&_this7.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.resizeModeText]},'focusCrop\nfocusPoint (0,0)'),


(_this7&&_this7.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
style:styles.resizeMode,
resizeMode:_qunarReactNative.Image.resizeMode.focusCrop,
focusPoint:{x:0,y:0},
source:image})),


(_this7&&_this7.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.leftMargin},
(_this7&&_this7.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.resizeModeText]},'focusCrop\nfocusPoint (1,1)'),


(_this7&&_this7.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
style:styles.resizeMode,
resizeMode:_qunarReactNative.Image.resizeMode.focusCrop,
focusPoint:{x:1,y:1},
source:image}))),



(_this7&&_this7.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.horizontal},
(_this7&&_this7.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(_this7&&_this7.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.resizeModeText]},'center'),


(_this7&&_this7.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
style:styles.resizeMode,
resizeMode:_qunarReactNative.Image.resizeMode.center,
source:image})),


(_this7&&_this7.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.leftMargin},
(_this7&&_this7.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.resizeModeText]},'centerInside'),


(_this7&&_this7.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
style:styles.resizeMode,
resizeMode:_qunarReactNative.Image.resizeMode.centerInside,
source:image})))));





}));


}},

{
subtitle:'Animated GIF',
render:function render(){
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
style:styles.gif,
source:{uri:'http://s.qunarzz.com/dev_test/test_pic_006.gif'}}));


}},

{
subtitle:'Base64 image',
render:function render(){
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
style:styles.base64,
source:{uri:base64Icon,scale:3}}));


}},

{
subtitle:'Cap Insets',
description:
'When the image is resized, the corners of the size specified '+
'by capInsets will stay a fixed size, but the center content and '+
'borders of the image will be stretched. This is useful for creating '+
'resizable rounded buttons, shadows, and other resizable assets.',
render:function render(){
return(this&&this.createElement||_qunarReactNative2.default.createElement)(ImageCapInsetsExample,null);
},
platform:'ios'},

{
subtitle:'Image Size',
render:function render(){
return(this&&this.createElement||_qunarReactNative2.default.createElement)(ImageSizeExample,{source:fullImage});
}}]};




var fullImage={uri:__webpack_require__(1).logo_og};
var smallImage={uri:'http://facebook.github.io/react/img/logo_small_2x.png'};

var styles=_qunarReactNative.StyleSheet.create({
base:{
width:38,
height:38},

progress:{
flex:1,
alignItems:'center',
flexDirection:'row',
width:100},

leftMargin:{
marginLeft:20},

background:{
backgroundColor:'#222222'},

sectionText:{
marginVertical:6},

nestedText:{
marginLeft:12,
marginTop:20,
backgroundColor:'transparent',
color:'white'},

resizeMode:{
width:90,
height:60,
borderWidth:0.5,
borderColor:'black'},

resizeModeText:{
fontSize:11,
marginBottom:3},

icon:{
width:15,
height:15},

horizontal:{
flexDirection:'row',
justifyContent:'center',
flexWrap:'wrap'},

gif:{
flex:1,
height:200},

base64:{
flex:1,
height:50,
resizeMode:'contain'}});

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";




var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var styles=_qunarReactNative.StyleSheet.create({
box:{
backgroundColor:'#527FE4',
borderColor:'#000033',
borderWidth:1}});



var FONTLIST=[
{value:'\uF027',name:'上'},
{value:'\uF028',name:'上'},
{value:'\uF029',name:'三角形-上'},
{value:'\uF031',name:'下'},
{value:'\uF032',name:'下'},
{value:'\uF033',name:'三角形-下'},
{value:'\uF04A',name:'坐标'},
{value:'\uF04B',name:'wifi'},
{value:'\uF063',name:'删除'},
{value:'\uF067',name:'搜索'},
{value:'\uF077',name:'加载错误'},
{value:'\uF078',name:'加载成功'},
{value:'\uF079',name:'上拉'},
{value:'\uF07A',name:'加载中'},
{value:'\uF07B',name:'下拉'},
{value:'\uF07D',name:'返回'},
{value:'\uF07E',name:'类别'},
{value:'\uF07F',name:'向右'},
{value:'\uF083',name:'点'},
{value:'\uF089',name:'加载'},
{value:'\uF238',name:'人民币符号'},
{value:'\uF2AD',name:'上翻页'},
{value:'\uF2AE',name:'下翻页'},
{value:'\uF2F7',name:'确认'},
{value:'\uF3B3',name:'[24pt] 五角星'},
{value:'\uF3B4',name:'[24pt] 五角星'}];


module.exports={
title:'Text',
scroll:true,
examples:[
{
subtitle:'Text',
render:function render(){
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{backgroundColor:'#ffffff',padding:5}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'\u8FD9\u5C31\u662F\u4E00\u6BB5\u666E\u901A\u7684\u6587\u5B57\u3002')));




}},

{
subtitle:'Iconfont',
render:function render(){var _this=this;
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{backgroundColor:'#ffffff',padding:5}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'\u4EE5\u4E0B\u662Fqrn\u5185\u7F6E\u7684\u5B57\u4F53\u7684\u5185\u5BB9\uFF0C\u5B57\u4F53\u540D\u4E3A qunar_react_native \u3002')),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{padding:15}},
FONTLIST.map(function(item,index){return(
(_this&&_this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{key:index,style:{fontFamily:'qunar_react_native',fontSize:14,height:40}},item.value,'  ',item.name));}))));




}}]};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";















var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var







WithLabel=function(_Component){_inherits(WithLabel,_Component);function WithLabel(){_classCallCheck(this,WithLabel);return _possibleConstructorReturn(this,(WithLabel.__proto__||Object.getPrototypeOf(WithLabel)).apply(this,arguments));}_createClass(WithLabel,[{key:'render',value:function render()
{
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.labelContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.label},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,this.props.label)),

this.props.children));


}}]);return WithLabel;}(_qunarReactNative.Component);var


TextEventsExample=function(_Component2){_inherits(TextEventsExample,_Component2);
function TextEventsExample(){_classCallCheck(this,TextEventsExample);var _this2=_possibleConstructorReturn(this,(TextEventsExample.__proto__||Object.getPrototypeOf(TextEventsExample)).call(this));

_this2.updateText=_this2.updateText.bind(_this2);
_this2.state={
curText:'<No Event>',
prevText:'<No Event>',
prev2Text:'<No Event>',
prev3Text:'<No Event>'};return _this2;

}_createClass(TextEventsExample,[{key:'updateText',value:function updateText(

text){
this.setState(function(state){
return{
curText:text,
prevText:state.curText,
prev2Text:state.prevText,
prev3Text:state.prev2Text};

});
}},{key:'render',value:function render()

{var _this3=this;
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TextInput,{
multiline:true,
autoCapitalize:'none',
placeholder:'Enter text to see events',
autoCorrect:false,
onFocus:function onFocus(){return _this3.updateText('onFocus');},
onBlur:function onBlur(){return _this3.updateText('onBlur');},
onChange:function onChange(event){return _this3.updateText(
'onChange text: '+event.nativeEvent.text);},

onEndEditing:function onEndEditing(event){return _this3.updateText(
'onEndEditing text: '+event.nativeEvent.text);},

onSubmitEditing:function onSubmitEditing(event){return _this3.updateText(
'onSubmitEditing text: '+event.nativeEvent.text);},

onSelectionChange:function onSelectionChange(event){return _this3.updateText(
'onSelectionChange range: '+
event.nativeEvent.selection.start+','+
event.nativeEvent.selection.end);},

onKeyPress:function onKeyPress(event){
_this3.updateText('onKeyPress key: '+event.nativeEvent.key);
},
style:styles.default}),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.eventLabel},
this.state.curText,'\n','(prev: ',
this.state.prevText,')','\n','(prev2: ',
this.state.prev2Text,')','\n','(prev3: ',
this.state.prev3Text,')')));



}}]);return TextEventsExample;}(_qunarReactNative.Component);var


AutoExpandingTextInput=function(_React$Component){_inherits(AutoExpandingTextInput,_React$Component);
function AutoExpandingTextInput(props){_classCallCheck(this,AutoExpandingTextInput);var _this4=_possibleConstructorReturn(this,(AutoExpandingTextInput.__proto__||Object.getPrototypeOf(AutoExpandingTextInput)).call(this,
props));
_this4.state={text:'',height:0};return _this4;
}_createClass(AutoExpandingTextInput,[{key:'render',value:function render()
{var _this5=this;
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TextInput,_extends({},
this.props,{
multiline:true,
onChange:function onChange(event){
_this5.setState({
text:event.nativeEvent.text,
height:event.nativeEvent.contentSize.height});

},
style:[styles.default,{height:Math.max(35,this.state.height)}],
value:this.state.text})));


}}]);return AutoExpandingTextInput;}(_qunarReactNative2.default.Component);var


RewriteExample=function(_React$Component2){_inherits(RewriteExample,_React$Component2);
function RewriteExample(props){_classCallCheck(this,RewriteExample);var _this6=_possibleConstructorReturn(this,(RewriteExample.__proto__||Object.getPrototypeOf(RewriteExample)).call(this,
props));
_this6.state={text:''};return _this6;
}_createClass(RewriteExample,[{key:'render',value:function render()
{var _this7=this;
var limit=20;
var remainder=limit-this.state.text.length;
var remainderColor=remainder>5?'blue':'red';
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.rewriteContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TextInput,{
multiline:false,
maxLength:limit,
onChangeText:function onChangeText(text){
text=text.replace(/ /g,'_');
_this7.setState({text:text});
},
style:styles.default,
value:this.state.text}),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.remainder,{color:remainderColor}]},
remainder)));



}}]);return RewriteExample;}(_qunarReactNative2.default.Component);var


RewriteExampleInvalidCharacters=function(_React$Component3){_inherits(RewriteExampleInvalidCharacters,_React$Component3);
function RewriteExampleInvalidCharacters(props){_classCallCheck(this,RewriteExampleInvalidCharacters);var _this8=_possibleConstructorReturn(this,(RewriteExampleInvalidCharacters.__proto__||Object.getPrototypeOf(RewriteExampleInvalidCharacters)).call(this,
props));
_this8.state={text:''};return _this8;
}_createClass(RewriteExampleInvalidCharacters,[{key:'render',value:function render()
{var _this9=this;
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.rewriteContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TextInput,{
multiline:false,
onChangeText:function onChangeText(text){
_this9.setState({text:text.replace(/\s/g,'')});
},
style:styles.default,
value:this.state.text})));



}}]);return RewriteExampleInvalidCharacters;}(_qunarReactNative2.default.Component);var


TokenizedTextExample=function(_React$Component4){_inherits(TokenizedTextExample,_React$Component4);
function TokenizedTextExample(props){_classCallCheck(this,TokenizedTextExample);var _this10=_possibleConstructorReturn(this,(TokenizedTextExample.__proto__||Object.getPrototypeOf(TokenizedTextExample)).call(this,
props));
_this10.state={text:'Hello #World'};return _this10;
}_createClass(TokenizedTextExample,[{key:'render',value:function render()
{var _this11=this;


var delimiter=/\s+/;


var _text=this.state.text;
var token=void 0,index=void 0,parts=[];
while(_text){
delimiter.lastIndex=0;
token=delimiter.exec(_text);
if(token===null){
break;
}
index=token.index;
if(token[0].length===0){
index=1;
}
parts.push(_text.substr(0,index));
parts.push(token[0]);
index=index+token[0].length;
_text=_text.slice(index);
}
parts.push(_text);


parts=parts.map(function(text){
if(/^#/.test(text)){
return(_this11&&_this11.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{key:text,style:styles.hashtag},text);
}else{
return text;
}
});

return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TextInput,{
multiline:true,
style:styles.multiline,
onChangeText:function onChangeText(text){
_this11.setState({text:text});
}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,parts))));



}}]);return TokenizedTextExample;}(_qunarReactNative2.default.Component);var


BlurOnSubmitExample=function(_Component3){_inherits(BlurOnSubmitExample,_Component3);
function BlurOnSubmitExample(){_classCallCheck(this,BlurOnSubmitExample);var _this12=_possibleConstructorReturn(this,(BlurOnSubmitExample.__proto__||Object.getPrototypeOf(BlurOnSubmitExample)).call(this));

_this12.focusNextField=_this12.focusNextField.bind(_this12);return _this12;
}_createClass(BlurOnSubmitExample,[{key:'focusNextField',value:function focusNextField(

nextField){
this.refs[nextField].focus();
}},{key:'render',value:function render()

{var _this13=this;
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TextInput,{
ref:'1',
style:styles.default,
placeholder:'blurOnSubmit = false',
returnKeyType:'next',
blurOnSubmit:false,
onSubmitEditing:function onSubmitEditing(){return _this13.focusNextField('2');}}),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TextInput,{
ref:'2',
style:styles.default,
keyboardType:'email-address',
placeholder:'blurOnSubmit = false',
returnKeyType:'next',
blurOnSubmit:false,
onSubmitEditing:function onSubmitEditing(){return _this13.focusNextField('3');}}),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TextInput,{
ref:'3',
style:styles.default,
keyboardType:'url',
placeholder:'blurOnSubmit = false',
returnKeyType:'next',
blurOnSubmit:false,
onSubmitEditing:function onSubmitEditing(){return _this13.focusNextField('4');}}),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TextInput,{
ref:'4',
style:styles.default,
keyboardType:'numeric',
placeholder:'blurOnSubmit = false',
blurOnSubmit:false,
onSubmitEditing:function onSubmitEditing(){return _this13.focusNextField('5');}}),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TextInput,{
ref:'5',
style:styles.default,
keyboardType:'numbers-and-punctuation',
placeholder:'blurOnSubmit = true',
returnKeyType:'done'})));



}}]);return BlurOnSubmitExample;}(_qunarReactNative.Component);


var styles=_qunarReactNative.StyleSheet.create({
page:{
paddingBottom:300},

default:{
height:26,
borderWidth:0.5,
borderColor:'#0f0f0f',
flex:1,
fontSize:13,
padding:4},

multiline:{
borderWidth:0.5,
borderColor:'#0f0f0f',
flex:1,
fontSize:13,
height:50,
padding:4,
marginBottom:4},

multilineWithFontStyles:{
color:'blue',
fontWeight:'bold',
fontSize:18,
fontFamily:'Cochin',
height:60},

multilineChild:{
width:50,
height:40,
position:'absolute',
right:5,
backgroundColor:'red'},

eventLabel:{
margin:3,
fontSize:12},

labelContainer:{
flexDirection:'row',
marginVertical:2,
flex:1},

label:{
width:115,
alignItems:'flex-end',
marginRight:10,
paddingTop:2},

rewriteContainer:{
flexDirection:'row',
alignItems:'center'},

remainder:{
textAlign:'right',
width:24},

hashtag:{
color:'blue',
fontWeight:'bold'}});



module.exports={
title:'<TextInput>',
scroll:true,
examples:[
{
subtitle:'Auto-focus',
render:function render(){
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TextInput,{
autoFocus:true,
style:styles.default,
accessibilityLabel:'I am the accessibility label for text input'}));


}},

{
subtitle:"Live Re-Write (<sp>  ->  '_') + maxLength",
render:function render(){
return(this&&this.createElement||_qunarReactNative2.default.createElement)(RewriteExample,null);
}},

{
subtitle:'Live Re-Write (no spaces allowed)',
render:function render(){
return(this&&this.createElement||_qunarReactNative2.default.createElement)(RewriteExampleInvalidCharacters,null);
}},

{
subtitle:'Auto-capitalize',
render:function render(){
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(WithLabel,{label:'none'},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TextInput,{
autoCapitalize:'none',
style:styles.default})),


(this&&this.createElement||_qunarReactNative2.default.createElement)(WithLabel,{label:'sentences'},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TextInput,{
autoCapitalize:'sentences',
style:styles.default})),


(this&&this.createElement||_qunarReactNative2.default.createElement)(WithLabel,{label:'words'},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TextInput,{
autoCapitalize:'words',
style:styles.default})),


(this&&this.createElement||_qunarReactNative2.default.createElement)(WithLabel,{label:'characters'},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TextInput,{
autoCapitalize:'characters',
style:styles.default}))));




}},

{
subtitle:'Auto-correct',
render:function render(){
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(WithLabel,{label:'true'},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TextInput,{autoCorrect:true,style:styles.default})),

(this&&this.createElement||_qunarReactNative2.default.createElement)(WithLabel,{label:'false'},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TextInput,{autoCorrect:false,style:styles.default}))));



}},

{
subtitle:'Keyboard types',
render:function render(){var _this14=this;
var keyboardTypes=[
'default',
'ascii-capable',
'numbers-and-punctuation',
'url',
'number-pad',
'phone-pad',
'name-phone-pad',
'email-address',
'decimal-pad',
'twitter',
'web-search',
'numeric'];

var examples=keyboardTypes.map(function(type){
return(
(_this14&&_this14.createElement||_qunarReactNative2.default.createElement)(WithLabel,{key:type,label:type},
(_this14&&_this14.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TextInput,{
keyboardType:type,
style:styles.default})));



});
return(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,examples);
}},

{
subtitle:'Keyboard appearance',
render:function render(){var _this15=this;
var keyboardAppearance=[
'default',
'light',
'dark'];

var examples=keyboardAppearance.map(function(type){
return(
(_this15&&_this15.createElement||_qunarReactNative2.default.createElement)(WithLabel,{key:type,label:type},
(_this15&&_this15.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TextInput,{
keyboardAppearance:type,
style:styles.default})));



});
return(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,examples);
}},

{
subtitle:'Return key types',
render:function render(){var _this16=this;
var returnKeyTypes=[
'default',
'go',
'google',
'join',
'next',
'route',
'search',
'send',
'yahoo',
'done',
'emergency-call'];

var examples=returnKeyTypes.map(function(type){
return(
(_this16&&_this16.createElement||_qunarReactNative2.default.createElement)(WithLabel,{key:type,label:type},
(_this16&&_this16.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TextInput,{
returnKeyType:type,
style:styles.default})));



});
return(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,examples);
}},

{
subtitle:'Enable return key automatically',
render:function render(){
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(WithLabel,{label:'true'},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TextInput,{enablesReturnKeyAutomatically:true,style:styles.default}))));



}},

{
subtitle:'Secure text entry',
render:function render(){
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(WithLabel,{label:'true'},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TextInput,{password:true,style:styles.default,defaultValue:'abc'}))));



}},

{
subtitle:'Event handling',
render:function render(){return(this&&this.createElement||_qunarReactNative2.default.createElement)(TextEventsExample,null);}},

{
subtitle:'Colored input text',
render:function render(){
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TextInput,{
style:[styles.default,{color:'blue'}],
defaultValue:'Blue'}),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TextInput,{
style:[styles.default,{color:'green'}],
defaultValue:'Green'})));



}},

{
subtitle:'Colored highlight/cursor for text input',
render:function render(){
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TextInput,{
style:styles.default,
selectionColor:"green",
defaultValue:'Highlight me'}),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TextInput,{
style:styles.default,
selectionColor:"rgba(86, 76, 205, 1)",
defaultValue:'Highlight me'})));



}},

{
subtitle:'Clear button mode',
render:function render(){
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(WithLabel,{label:'never'},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TextInput,{
style:styles.default,
clearButtonMode:'never'})),


(this&&this.createElement||_qunarReactNative2.default.createElement)(WithLabel,{label:'while editing'},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TextInput,{
style:styles.default,
clearButtonMode:'while-editing'})),


(this&&this.createElement||_qunarReactNative2.default.createElement)(WithLabel,{label:'unless editing'},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TextInput,{
style:styles.default,
clearButtonMode:'unless-editing'})),


(this&&this.createElement||_qunarReactNative2.default.createElement)(WithLabel,{label:'always'},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TextInput,{
style:styles.default,
clearButtonMode:'always'}))));




}},

{
subtitle:'Clear and select',
render:function render(){
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(WithLabel,{label:'clearTextOnFocus'},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TextInput,{
placeholder:'text is cleared on focus',
defaultValue:'text is cleared on focus',
style:styles.default,
clearTextOnFocus:true})),


(this&&this.createElement||_qunarReactNative2.default.createElement)(WithLabel,{label:'selectTextOnFocus'},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TextInput,{
placeholder:'text is selected on focus',
defaultValue:'text is selected on focus',
style:styles.default,
selectTextOnFocus:true}))));




}},

{
subtitle:'Blur on submit',
render:function render(){return(this&&this.createElement||_qunarReactNative2.default.createElement)(BlurOnSubmitExample,null);}},

{
subtitle:'Multiline blur on submit',
render:function render(){
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TextInput,{
style:styles.multiline,
placeholder:'blurOnSubmit = true',
returnKeyType:'next',
blurOnSubmit:true,
multiline:true,
onSubmitEditing:function onSubmitEditing(event){return alert(event.nativeEvent.text);}})));



}},

{
subtitle:'Multiline',
render:function render(){
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TextInput,{
placeholder:'multiline text input',
multiline:true,
style:styles.multiline}),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TextInput,{
placeholder:'multiline text input with font styles and placeholder',
multiline:true,
clearTextOnFocus:true,
autoCorrect:true,
autoCapitalize:'words',
placeholderTextColor:'red',
keyboardType:'url',
style:[styles.multiline,styles.multilineWithFontStyles]}),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TextInput,{
placeholder:'uneditable multiline text input',
editable:false,
multiline:true,
style:styles.multiline})));



}},

{
subtitle:'Auto-expanding',
render:function render(){
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(AutoExpandingTextInput,{
placeholder:'height increases with content',
enablesReturnKeyAutomatically:true,
returnKeyType:'done'})));



}}]};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=_qunarReactNative.StyleSheet.create({
box:{
backgroundColor:'#527FE4',
borderColor:'#000033',
borderWidth:1}});var



ViewBorderStyleExample=function(_Component){_inherits(ViewBorderStyleExample,_Component);
function ViewBorderStyleExample(){_classCallCheck(this,ViewBorderStyleExample);var _this=_possibleConstructorReturn(this,(ViewBorderStyleExample.__proto__||Object.getPrototypeOf(ViewBorderStyleExample)).call(this));

_this._handlePress=_this._handlePress.bind(_this);
_this.state={
showBorder:true};return _this;

}_createClass(ViewBorderStyleExample,[{key:'render',value:function render()

{
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableWithoutFeedback,{onPress:this._handlePress},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{
borderWidth:1,
borderRadius:5,
borderStyle:this.state.showBorder?'dashed':null,
padding:5}},

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:{fontSize:11}},'Dashed border style')),



(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{
marginTop:5,
borderWidth:1,
borderRadius:5,
borderStyle:this.state.showBorder?'dotted':null,
padding:5}},

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:{fontSize:11}},'Dotted border style')))));






}},{key:'_handlePress',value:function _handlePress()

{
this.setState({showBorder:!this.state.showBorder});
}}]);return ViewBorderStyleExample;}(_qunarReactNative.Component);


module.exports={
title:'<View>',
scroll:true,
examples:[
{
subtitle:'Background Color',
render:function render(){
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{backgroundColor:'#527FE4',padding:5}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:{fontSize:11}},'Blue background')));




}},
{
subtitle:'Border',
render:function render(){
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{borderColor:'#527FE4',borderWidth:5,padding:10}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:{fontSize:11}},'5px blue border')));


}},
{
subtitle:'Padding/Margin',
render:function render(){
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{borderColor:'#bb0000',borderWidth:0.5}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:[styles.box,{padding:5}]},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:{fontSize:11}},'5px padding')),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:[styles.box,{margin:5}]},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:{fontSize:11}},'5px margin')),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:[styles.box,{margin:5,padding:5,alignSelf:'flex-start'}]},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:{fontSize:11}},'5px margin and padding,'),


(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:{fontSize:11}},'widthAutonomous=true'))));





}},
{
subtitle:'Border Radius',
render:function render(){
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{borderWidth:0.5,borderRadius:5,padding:5}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:{fontSize:11}},'Too much use of `borderRadius` (especially large radii) on anything which is scrolling may result in dropped frames. Use sparingly.')));






}},
{
subtitle:'Border Style',
render:function render(){
return(this&&this.createElement||_qunarReactNative2.default.createElement)(ViewBorderStyleExample,null);
}},
{
subtitle:'Circle with Border Radius',
render:function render(){
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{borderRadius:10,borderWidth:1,width:20,height:20}}));

}},
{
subtitle:'Overflow',
render:function render(){
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{flexDirection:'row'}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{
style:{
width:95,
height:10,
marginRight:10,
marginBottom:5,
overflow:'hidden',
borderWidth:0.5}},

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{width:200,height:20}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'Overflow hidden'))),


(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{width:95,height:10,marginBottom:5,borderWidth:0.5}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{width:200,height:20}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'Overflow visible')))));




}},
{
subtitle:'Opacity',
render:function render(){
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{opacity:0}},(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'Opacity 0')),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{opacity:0.1}},(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'Opacity 0.1')),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{opacity:0.3}},(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'Opacity 0.3')),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{opacity:0.5}},(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'Opacity 0.5')),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{opacity:0.7}},(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'Opacity 0.7')),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{opacity:0.9}},(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'Opacity 0.9')),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{opacity:1}},(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'Opacity 1'))));


}}]};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _this=this;

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var styles=_qunarReactNative.StyleSheet.create({
container:{
flexDirection:'row',
justifyContent:'space-around'}});



module.exports={
title:'Button',
scroll:true,
examples:[{
subtitle:'Default settings(abled & disabled)',
render:function render(){
return(
(_this&&_this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.container},
(_this&&_this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,null),
(_this&&_this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{disabled:true})));


}},
{
subtitle:'Custom Style(default / actived / disabled)',
render:function render(){
return(
(_this&&_this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.container},
(_this&&_this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{
style:{backgroundColor:'yellow'},
activedStyle:{backgroundColor:'red',opacity:1},
disabledStyle:{backgroundColor:'grey'}}),

(_this&&_this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{disabled:true,
style:{backgroundColor:'yellow'},
activedStyle:{backgroundColor:'red',opacity:1},
disabledStyle:{backgroundColor:'grey'}})));



}},
{
subtitle:'Custom Text && TextStyle(default / actived / disabled)',
render:function render(){
return(
(_this&&_this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.container},
(_this&&_this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{
text:'\u4F60\u70B9\u6211\u5440',
activedText:'\u4F60\u70B9\u6211\u4E86',
disabledText:'\u4F60\u70B9\u4E0D\u5230\u6211',
textStyle:{color:'green'},
activedTextStyle:{color:'red',fontSize:20},
disabledTextStyle:{color:'black'}}),

(_this&&_this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{disabled:true,
text:'\u4F60\u70B9\u6211\u5440',
activedText:'\u4F60\u70B9\u6211\u4E86',
disabledText:'\u4F60\u70B9\u4E0D\u5230\u6211',
textStyle:{color:'green'},
activedTextStyle:{color:'red',fontSize:20},
disabledTextStyle:{color:'black'}})));



}},
{
subtitle:'Tap event can be detected',
render:function render(){
return(
(_this&&_this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(_this&&_this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.container},
(_this&&_this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{
onPress:function onPress(){return alert('onPress');},
onLongPress:function onLongPress(){return alert('onLongPress');},
onPressIn:function onPressIn(){return console.log('onPressIn');},
onPressOut:function onPressOut(){return console.log('onPressOut');}}),

(_this&&_this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{disabled:true,
onPress:function onPress(){return alert('onPress');},
onLongPress:function onLongPress(){return alert('onLongPress');},
onPressIn:function onPressIn(){return console.log('onPressIn');},
onPressOut:function onPressOut(){return console.log('onPressOut');}}))));




}}]};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _this11=this;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


CheckedSingleExample=function(_Component){_inherits(CheckedSingleExample,_Component);
function CheckedSingleExample(props){_classCallCheck(this,CheckedSingleExample);var _this=_possibleConstructorReturn(this,(CheckedSingleExample.__proto__||Object.getPrototypeOf(CheckedSingleExample)).call(this,
props));
_this.state={
selectedIndex:-1};return _this;

}_createClass(CheckedSingleExample,[{key:'render',value:function render()

{var _this2=this;var
exampleType=this.props.exampleType;var
selectedIndex=this.state.selectedIndex;

var ROWS_INDEX=[0,1,2];
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,

ROWS_INDEX.map(function(rowIndex){
return(
(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableOpacity,{
key:rowIndex,
activeOpacity:1,
style:styles.exampleRow,
onPress:function onPress(){return _this2.setState({selectedIndex:rowIndex});}},

(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:selectedIndex===rowIndex?{color:'#1ba9ba'}:null},'\u9009\u62E9\u8BE5\u884C\u63A7\u5236checked'),
(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Checked,{checked:selectedIndex===rowIndex})));


})));



}}]);return CheckedSingleExample;}(_qunarReactNative.Component);var



CheckedMultipleExample=function(_Component2){_inherits(CheckedMultipleExample,_Component2);
function CheckedMultipleExample(props){_classCallCheck(this,CheckedMultipleExample);var _this3=_possibleConstructorReturn(this,(CheckedMultipleExample.__proto__||Object.getPrototypeOf(CheckedMultipleExample)).call(this,
props));
_this3.state={
selectedIndexes:[]};return _this3;

}_createClass(CheckedMultipleExample,[{key:'render',value:function render()

{var _this4=this;var
exampleType=this.props.exampleType;var
selectedIndexes=this.state.selectedIndexes;

var ROWS_INDEX=[0,1,2];
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,

ROWS_INDEX.map(function(rowIndex){
return(
(_this4&&_this4.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableOpacity,{
key:rowIndex,
activeOpacity:1,
style:styles.exampleRow,
onPress:function onPress(e){
var indexOfRowIndex=selectedIndexes.indexOf(rowIndex);
if(indexOfRowIndex>-1){
selectedIndexes.splice(indexOfRowIndex,1);
}else{
selectedIndexes.push(rowIndex);
}
_this4.setState({selectedIndexes:selectedIndexes});
}},

(_this4&&_this4.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:selectedIndexes.indexOf(rowIndex)>-1?{color:'#1ba9ba'}:null},'\u9009\u62E9\u8BE5\u884C\u63A7\u5236checked'),


(_this4&&_this4.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Checked,{hasBorder:true,checked:selectedIndexes.indexOf(rowIndex)>-1})));


})));



}}]);return CheckedMultipleExample;}(_qunarReactNative.Component);var



CheckedMixedExample=function(_Component3){_inherits(CheckedMixedExample,_Component3);
function CheckedMixedExample(props){_classCallCheck(this,CheckedMixedExample);var _this5=_possibleConstructorReturn(this,(CheckedMixedExample.__proto__||Object.getPrototypeOf(CheckedMixedExample)).call(this,
props));
_this5.state={
selectedAll:false,
selectedIndexes:[]};return _this5;

}_createClass(CheckedMixedExample,[{key:'render',value:function render()

{var _this6=this;var
exampleType=this.props.exampleType;var _state=
this.state,selectedIndexes=_state.selectedIndexes,selectedAll=_state.selectedAll;

var ROWS_INDEX=[0,1,2];
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableOpacity,{
activeOpacity:1,
style:styles.exampleRow,
onPress:function onPress(){
if(selectedAll){
_this6.setState({
selectedAll:false,
selectedIndexes:[]});

}else{
_this6.setState({
selectedAll:true,
selectedIndexes:ROWS_INDEX});

}
}},

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:selectedAll?{color:'#1ba9ba'}:null},'\u5168\u9009'),


(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Checked,{checked:selectedAll})),


ROWS_INDEX.map(function(rowIndex){
return(
(_this6&&_this6.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableOpacity,{
key:rowIndex,
activeOpacity:1,
style:styles.exampleRow,
onPress:function onPress(){
var indexOfRowIndex=selectedIndexes.indexOf(rowIndex);
if(indexOfRowIndex>-1){
selectedIndexes.splice(indexOfRowIndex,1);
}else{
selectedIndexes.push(rowIndex);
}

selectedAll=ROWS_INDEX.length===selectedIndexes.length;

_this6.setState({selectedIndexes:selectedIndexes,selectedAll:selectedAll});
}},

(_this6&&_this6.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:selectedIndexes.indexOf(rowIndex)>-1?{color:'#1ba9ba'}:null},'\u9009\u9879',
rowIndex),

(_this6&&_this6.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Checked,{hasBorder:true,checked:selectedIndexes.indexOf(rowIndex)>-1})));


})));



}}]);return CheckedMixedExample;}(_qunarReactNative.Component);var



CheckedCallbackExample=function(_Component4){_inherits(CheckedCallbackExample,_Component4);
function CheckedCallbackExample(props){_classCallCheck(this,CheckedCallbackExample);var _this7=_possibleConstructorReturn(this,(CheckedCallbackExample.__proto__||Object.getPrototypeOf(CheckedCallbackExample)).call(this,
props));
_this7.state={
selected:false};return _this7;

}_createClass(CheckedCallbackExample,[{key:'render',value:function render()

{var _this8=this;var
exampleType=this.props.exampleType;var
selected=this.state.selected;

return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.exampleRow},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:selected?{color:'#1ba9ba'}:null},'\u70B9\u51FBChecked\u89E6\u53D1\u56DE\u8C03'),


(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Checked,{hasBorder:true,
checked:selected,
onPress:function onPress(e){_this8.setState({selected:!e.target.checked});}})));



}}]);return CheckedCallbackExample;}(_qunarReactNative.Component);var



CheckedStyleExample=function(_Component5){_inherits(CheckedStyleExample,_Component5);
function CheckedStyleExample(props){_classCallCheck(this,CheckedStyleExample);var _this9=_possibleConstructorReturn(this,(CheckedStyleExample.__proto__||Object.getPrototypeOf(CheckedStyleExample)).call(this,
props));
_this9.state={
selectedIndex:-1};return _this9;

}_createClass(CheckedStyleExample,[{key:'render',value:function render()

{var _this10=this;var
exampleType=this.props.exampleType;var
selectedIndex=this.state.selectedIndex;

return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableOpacity,{
activeOpacity:1,
style:styles.exampleRow,
onPress:function onPress(){_this10.setState({selectedIndex:0});}},

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:selectedIndex===0?{color:'#1ba9ba'}:null},'hasBorder: false - \u81EA\u5B9A\u4E49\u6837\u5F0F'),


(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Checked,{hasBorder:false,
checked:selectedIndex===0,
style:{width:20,height:20,fontSize:20},
uncheckStyle:{color:'#aaa'},
checkStyle:{color:'red'}})),


(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableOpacity,{
activeOpacity:1,
style:styles.exampleRow,
onPress:function onPress(){_this10.setState({selectedIndex:1});}},

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:selectedIndex===1?{color:'#1ba9ba'}:null},'hasBorder: true - \u81EA\u5B9A\u4E49\u6837\u5F0F'),


(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Checked,{hasBorder:true,
style:{width:20,height:20,fontSize:14,padding:2,borderRadius:0},
checked:selectedIndex===1}))));




}}]);return CheckedStyleExample;}(_qunarReactNative.Component);


var styles=_qunarReactNative.StyleSheet.create({
exampleRow:{
flexDirection:'row',
justifyContent:'space-between',
paddingTop:2,
paddingBottom:2}});



module.exports={
title:'Checked',
scroll:true,
examples:[{
subtitle:'默认checked: 单选列表',
render:function render(){
return(_this11&&_this11.createElement||_qunarReactNative2.default.createElement)(CheckedSingleExample,null);
}},
{
subtitle:'checked(hasBorder={true}): 多选列表',
render:function render(){
return(_this11&&_this11.createElement||_qunarReactNative2.default.createElement)(CheckedMultipleExample,null);
}},
{
subtitle:'混合全选列表',
render:function render(){
return(_this11&&_this11.createElement||_qunarReactNative2.default.createElement)(CheckedMixedExample,null);
}},
{
subtitle:'onPress回调',
render:function render(){
return(_this11&&_this11.createElement||_qunarReactNative2.default.createElement)(CheckedCallbackExample,null);
}},
{
subtitle:'单选列表 自定义样式',
render:function render(){
return(_this11&&_this11.createElement||_qunarReactNative2.default.createElement)(CheckedStyleExample,null);
}}]};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _this3=this;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);







var _ExampleRender=__webpack_require__(4);var _ExampleRender2=_interopRequireDefault(_ExampleRender);
var _styles=__webpack_require__(3);var _styles2=_interopRequireDefault(_styles);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var exampleList={
'ImageTextList':__webpack_require__(48),
'RefreshControl':__webpack_require__(49),
'VariousHeight':__webpack_require__(50)};var



ExampleList=function(_React$Component){_inherits(ExampleList,_React$Component);function ExampleList(){_classCallCheck(this,ExampleList);return _possibleConstructorReturn(this,(ExampleList.__proto__||Object.getPrototypeOf(ExampleList)).apply(this,arguments));}_createClass(ExampleList,[{key:'goExampleScene',value:function goExampleScene(

example,exampleName,examplesType){
Ext.open('ExampleRender',{
title:example.title,
param:{
example:example,
name:exampleName,
type:examplesType}});


}},{key:'render',value:function render()

{var _this2=this;
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:_styles2.default.container},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.ScrollView,{style:_styles2.default.list},

Object.keys(exampleList).map(function(exampleName,i){return(
(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableOpacity,{
key:i,
style:_styles2.default.listRow,
onPress:_this2.goExampleScene.bind(_this2,exampleList[exampleName],exampleName,'InfiniteListViewExample')},
(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:_styles2.default.listRowText},exampleName)));}))));






}}]);return ExampleList;}(_qunarReactNative2.default.Component);


module.exports={
title:'InfiniteListView',
examples:[{
render:function render(){
return(
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(ExampleList,null));

}}],

exampleList:exampleList};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _this4=this;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var









InfiniteListViewExample=function(_Component){_inherits(InfiniteListViewExample,_Component);
function InfiniteListViewExample(props){_classCallCheck(this,InfiniteListViewExample);var _this=_possibleConstructorReturn(this,(InfiniteListViewExample.__proto__||Object.getPrototypeOf(InfiniteListViewExample)).call(this,
props));

var ds=new _qunarReactNative.InfiniteListView.DataSource({
rowHasChanged:function rowHasChanged(r1,r2){return r1!==r2;}});

var rows=[];
for(var i=0;i<200;i++){
rows.push(i);
}
_this.state={
rows:rows,
dataSource:ds.cloneWithRows(rows)};


_this.count=0;return _this;
}_createClass(InfiniteListViewExample,[{key:'backToTop',value:function backToTop()

{
this.refs.InfiniteListView.scrollToTop({animated:true});
}},{key:'scrollTo',value:function scrollTo()

{
this.refs.InfiniteListView.scrollTo({y:5000,animated:true});
}},{key:'update',value:function update()

{
var ds=new _qunarReactNative.InfiniteListView.DataSource({
rowHasChanged:function rowHasChanged(r1,r2){return r1!==r2;}});

var rows=[];

if(this.count===0){
for(var i=0;i<2;i++){
rows.push(i);
}
}else if(this.count===1){
for(var _i=0;_i<10;_i++){
rows.push(_i);
}
}else{
for(var _i2=0;_i2<Math.floor(Math.random()*10);_i2++){
rows.push(_i2);
}
}

console.log('update',rows);
this.count++;
this.setState({
rows:rows,
dataSource:ds.cloneWithRows(rows)});

}},{key:'render',value:function render()



{var _this2=this;
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.container},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.InfiniteListView,{
ref:'InfiniteListView',
dataSource:this.state.dataSource,
renderRow:function renderRow(rowData){return(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(ListViewExampleRow,{title:rowData,text:_this2.state.text});}}),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{
position:'absolute',
top:0,
left:0,
right:0,
height:30,
flexDirection:'row',
alignItems:'center',
justifyContent:'space-around',
backgroundColor:'#09c',
opacity:0.8}},

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableOpacity,{onPress:function onPress(){return _this2.backToTop();},style:styles.operationButton},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:{color:'#fff'}},'back top')),



(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableOpacity,{onPress:function onPress(){return _this2.update();},style:styles.operationButton},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:{color:'#fff'}},'update')),



(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableOpacity,{onPress:function onPress(){return _this2.scrollTo();},style:styles.operationButton},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:{color:'#fff'}},'scroll to')))));







}}]);return InfiniteListViewExample;}(_qunarReactNative.Component);var


ListViewExampleRow=function(_Component2){_inherits(ListViewExampleRow,_Component2);
function ListViewExampleRow(props){_classCallCheck(this,ListViewExampleRow);return _possibleConstructorReturn(this,(ListViewExampleRow.__proto__||Object.getPrototypeOf(ListViewExampleRow)).call(this,
props));
}_createClass(ListViewExampleRow,[{key:'render',value:function render()

{var _props=
this.props,title=_props.title,text=_props.text;
var url='http://placeholdit.imgix.net/~text?txtsize=33&bg=666&txtclr=fff&txt='+title+'&w=100&h=110',
randomText=Number(title)%100;

return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.row},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
style:[styles.rowImg],
source:{uri:'http://placeholdit.imgix.net/~text?txtsize=33&bg=666&txtclr=fff&txt='+title+'&w=100&h=110'}}),


(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:[styles.rowContent]},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{flexDirection:'row'}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.titleText},title)),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:{color:'#25a4bb'}},randomText,'\u5206 / ',randomText,'\u6761\u8BC4\u8BBA'),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.alignRight,{color:'orange'}]},randomText,'\u8D77')),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:[styles.labelWrap]},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.labelText]},'label',randomText),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.labelText]},'label',randomText),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.labelText]},'label',randomText)),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.alignRight]},randomText,'\u6298vip')),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.detailText},'\u5730\u70B9\uFF1A\u9996\u90FD\u673A\u573A',randomText),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableOpacity,{style:[styles.alignRight]},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.button]},'\u9884\u5B9A'))))));





}}]);return ListViewExampleRow;}(_qunarReactNative.Component);


var styles=_qunarReactNative.StyleSheet.create({
container:{
flex:1,
backgroundColor:'#fff'},

row:{
flexDirection:'row',
alignItems:'center',
overflow:'hidden'},

rowImg:{
flex:1,
height:100,
resizeMode:'stretch'},

rowContent:{
flex:3,
padding:7},

titleText:{
fontWeight:'bold',
fontSize:14},

detailText:{
marginTop:3,
color:'#999',
fontSize:12},

alignRight:{
position:'absolute',
top:0,
right:0},

button:{
padding:2,
borderRadius:4,
color:'#fff',
backgroundColor:'#09c'},

labelWrap:{
flexDirection:'row'},

labelText:{
marginRight:3,
borderRadius:3,
borderWidth:1,
borderColor:'#09c'},

operationButton:{
padding:5,
borderWidth:1,
borderColor:'#069',
borderRadius:5}});



module.exports={
title:'ImageTextList',
examples:[{
render:function render(){
return(_this4&&_this4.createElement||_qunarReactNative2.default.createElement)(InfiniteListViewExample,null);
}}]};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _this6=this;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var












InfiniteListViewExample=function(_Component){_inherits(InfiniteListViewExample,_Component);
function InfiniteListViewExample(props){_classCallCheck(this,InfiniteListViewExample);var _this=_possibleConstructorReturn(this,(InfiniteListViewExample.__proto__||Object.getPrototypeOf(InfiniteListViewExample)).call(this,
props));

_this.componentTimeouts=[];

var ds=new _qunarReactNative.InfiniteListView.DataSource({
rowHasChanged:function rowHasChanged(r1,r2){return r1!==r2;}});

var rows=[];
for(var i=0;i<30;i++){
rows.push(i);
}
_this.state={
rows:rows,
dataSource:ds.cloneWithRows(rows)};return _this;

}_createClass(InfiniteListViewExample,[{key:'onRefresh',value:function onRefresh()


{var _this2=this;
this.componentTimeouts.push(setTimeout(function(){
_this2.pushRows(10);
_this2.refs.InfiniteListView.stopRefreshing();
},2000));
}},{key:'onLoad',value:function onLoad()


{var _this3=this;
this.componentTimeouts.push(setTimeout(function(){
_this3.pushRows(20);
_this3.refs.InfiniteListView.stopLoading();
},2000));
}},{key:'pushRows',value:function pushRows(

number){
var ds=new _qunarReactNative.InfiniteListView.DataSource({
rowHasChanged:function rowHasChanged(r1,r2){return r1!==r2;}});


var rows=this.state.rows,
len=rows.length;

for(var i=0;i<number;i++){
rows.push(len+i);
}

this.setState({
rows:rows,
dataSource:ds.cloneWithRows(rows)});

}},{key:'render',value:function render()

{var _this4=this;
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.container},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.InfiniteListView,{
ref:'InfiniteListView',
dataSource:this.state.dataSource,
renderRow:function renderRow(rowData){return(_this4&&_this4.createElement||_qunarReactNative2.default.createElement)(ListViewExampleRow,{title:rowData});},
refreshControl:(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.RefreshControl,{onRefresh:this.onRefresh.bind(this)}),
loadControl:
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.LoadControl,{onLoad:function onLoad(){return _this4.onLoad();},
onPress:function onPress(){
_this4.refs.InfiniteListView.startLoading();
_this4.onLoad();
}})})));





}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
for(var _iterator=this.componentTimeouts,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var timeout=_ref;
clearTimeout(timeout);
}
}}]);return InfiniteListViewExample;}(_qunarReactNative.Component);var



ListViewExampleRow=function(_Component2){_inherits(ListViewExampleRow,_Component2);
function ListViewExampleRow(props){_classCallCheck(this,ListViewExampleRow);return _possibleConstructorReturn(this,(ListViewExampleRow.__proto__||Object.getPrototypeOf(ListViewExampleRow)).call(this,
props));
}_createClass(ListViewExampleRow,[{key:'render',value:function render()

{var
title=this.props.title;
var url='http://placeholdit.imgix.net/~text?txtsize=33&bg=666&txtclr=fff&txt='+title+'&w=100&h=110',
randomText=Number(title)%100;

return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.row},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
style:[styles.rowImg],
source:{uri:'http://placeholdit.imgix.net/~text?txtsize=33&bg=666&txtclr=fff&txt='+title+'&w=100&h=110'}}),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:[styles.rowContent]},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{flexDirection:'row'}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.titleText},title)),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:{color:'#25a4bb'}},randomText,'\u5206 / ',randomText,'\u6761\u8BC4\u8BBA'),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.alignRight,{color:'orange'}]},randomText,'\u8D77')),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:[styles.labelWrap]},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.labelText]},'label',randomText),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.labelText]},'label',randomText),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.labelText]},'label',randomText)),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.alignRight]},randomText,'\u6298vip')),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.detailText},'\u5730\u70B9\uFF1A\u9996\u90FD\u673A\u573A',randomText),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableOpacity,{style:[styles.alignRight]},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.button]},'\u9884\u5B9A'))))));





}}]);return ListViewExampleRow;}(_qunarReactNative.Component);


var styles=_qunarReactNative.StyleSheet.create({
container:{
flex:1,
backgroundColor:'#fff'},

row:{
flexDirection:'row',
alignItems:'center',
overflow:'hidden'},

rowImg:{
flex:1,
height:100,
resizeMode:'stretch'},

rowContent:{
flex:3,
padding:7},

titleText:{
fontWeight:'bold',
fontSize:14},

detailText:{
marginTop:3,
color:'#999',
fontSize:12},

alignRight:{
position:'absolute',
top:0,
right:0},

button:{
padding:2,
borderRadius:4,
color:'#fff',
backgroundColor:'#09c'},

labelWrap:{
flexDirection:'row'},

labelText:{
marginRight:3,
borderRadius:3,
borderWidth:1,
borderColor:'#09c'}});



module.exports={
title:'RefreshControl',
examples:[{
render:function render(){
return(_this6&&_this6.createElement||_qunarReactNative2.default.createElement)(InfiniteListViewExample,null);
}}]};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _this4=this;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var









InfiniteListViewExample=function(_Component){_inherits(InfiniteListViewExample,_Component);
function InfiniteListViewExample(props){_classCallCheck(this,InfiniteListViewExample);var _this=_possibleConstructorReturn(this,(InfiniteListViewExample.__proto__||Object.getPrototypeOf(InfiniteListViewExample)).call(this,
props));

var ds=new _qunarReactNative.InfiniteListView.DataSource({
rowHasChanged:function rowHasChanged(r1,r2){return r1!==r2;}});

var rows=[];
for(var i=0;i<200;i++){
rows.push(i);
}
_this.state={
rows:rows,
dataSource:ds.cloneWithRows(rows)};return _this;

}_createClass(InfiniteListViewExample,[{key:'render',value:function render()

{var _this2=this;

return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.container},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.InfiniteListView,{
ref:'InfiniteListView',
dataSource:this.state.dataSource,
configureRowHeight:function configureRowHeight(rowData,rowIndex){return rowData%10===0?120:100;},
renderRow:function renderRow(rowData){return(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(ListViewExampleRow,{title:rowData,text:_this2.state.text});}})));



}}]);return InfiniteListViewExample;}(_qunarReactNative.Component);var


ListViewExampleRow=function(_Component2){_inherits(ListViewExampleRow,_Component2);
function ListViewExampleRow(props){_classCallCheck(this,ListViewExampleRow);return _possibleConstructorReturn(this,(ListViewExampleRow.__proto__||Object.getPrototypeOf(ListViewExampleRow)).call(this,
props));
}_createClass(ListViewExampleRow,[{key:'render',value:function render()

{var _props=
this.props,title=_props.title,text=_props.text;
var url='http://placeholdit.imgix.net/~text?txtsize=33&bg=666&txtclr=fff&txt='+title+'&w=100&h=110',
randomText=Number(title)%100;

return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.row},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
style:[styles.rowImg],
source:{uri:'http://placeholdit.imgix.net/~text?txtsize=33&bg=666&txtclr=fff&txt='+title+'&w=100&h=110'}}),


(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:[styles.rowContent]},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{flexDirection:'row'}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.titleText},title)),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:{color:'#25a4bb'}},randomText,'\u5206 / ',randomText,'\u6761\u8BC4\u8BBA'),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.alignRight,{color:'orange'}]},randomText,'\u8D77')),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:[styles.labelWrap]},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.labelText]},'label',randomText),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.labelText]},'label',randomText),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.labelText]},'label',randomText)),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.alignRight]},randomText,'\u6298vip')),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.detailText},'\u5730\u70B9\uFF1A\u9996\u90FD\u673A\u573A',randomText),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableOpacity,{style:[styles.alignRight]},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.button]},'\u9884\u5B9A'))))));





}}]);return ListViewExampleRow;}(_qunarReactNative.Component);


var styles=_qunarReactNative.StyleSheet.create({
container:{
flex:1,
backgroundColor:'#fff'},

row:{
flexDirection:'row',
alignItems:'center',
overflow:'hidden'},

rowImg:{
flex:1,
height:100,
resizeMode:'stretch'},

rowContent:{
flex:3,
padding:7},

titleText:{
fontWeight:'bold',
fontSize:14},

detailText:{
marginTop:3,
color:'#999',
fontSize:12},

alignRight:{
position:'absolute',
top:0,
right:0},

button:{
padding:2,
borderRadius:4,
color:'#fff',
backgroundColor:'#09c'},

labelWrap:{
flexDirection:'row'},

labelText:{
marginRight:3,
borderRadius:3,
borderWidth:1,
borderColor:'#09c'},

operationButton:{
padding:5,
borderWidth:1,
borderColor:'#069',
borderRadius:5}});



module.exports={
title:'VariousHeight',
examples:[{
render:function render(){
return(_this4&&_this4.createElement||_qunarReactNative2.default.createElement)(InfiniteListViewExample,null);
}}]};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _this3=this;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);







var _ExampleRender=__webpack_require__(4);var _ExampleRender2=_interopRequireDefault(_ExampleRender);
var _styles=__webpack_require__(3);var _styles2=_interopRequireDefault(_styles);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var exampleList={
'ImageTextList':__webpack_require__(52),
'RefreshControl':__webpack_require__(53),
'onEndReached':__webpack_require__(55),
'RenderSectionHeader':__webpack_require__(54)};var


ExampleList=function(_React$Component){_inherits(ExampleList,_React$Component);function ExampleList(){_classCallCheck(this,ExampleList);return _possibleConstructorReturn(this,(ExampleList.__proto__||Object.getPrototypeOf(ExampleList)).apply(this,arguments));}_createClass(ExampleList,[{key:'goExampleScene',value:function goExampleScene(

example,exampleName,examplesType){
Ext.open('ExampleRender',{
title:example.title,
param:{
example:example,
name:exampleName,
type:examplesType}});


}},{key:'render',value:function render()

{var _this2=this;
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:_styles2.default.container},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.ScrollView,{style:_styles2.default.list},

Object.keys(exampleList).map(function(exampleName,i){return(
(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableOpacity,{
key:i,
style:_styles2.default.listRow,
onPress:_this2.goExampleScene.bind(_this2,exampleList[exampleName],exampleName,'ListViewExample')},
(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:_styles2.default.listRowText},exampleName)));}))));






}}]);return ExampleList;}(_qunarReactNative2.default.Component);


module.exports={
title:'ListView',
examples:[{
render:function render(){
return(
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(ExampleList,null));

}}],

exampleList:exampleList};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _this4=this;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var









ListViewExample=function(_Component){_inherits(ListViewExample,_Component);
function ListViewExample(props){_classCallCheck(this,ListViewExample);var _this=_possibleConstructorReturn(this,(ListViewExample.__proto__||Object.getPrototypeOf(ListViewExample)).call(this,
props));

var ds=new _qunarReactNative.ListView.DataSource({
rowHasChanged:function rowHasChanged(r1,r2){return r1!==r2;}});

var rows=[];
for(var i=0;i<200;i++){
rows.push(i);
}
_this.state={
rows:rows,
dataSource:ds.cloneWithRows(rows)};return _this;

}_createClass(ListViewExample,[{key:'backToTop',value:function backToTop()

{
this.refs.listView.scrollToTop({animated:true});
}},{key:'render',value:function render()

{var _this2=this;
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.container},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.ListView,{
ref:'listView',
dataSource:this.state.dataSource,
renderRow:function renderRow(rowData){return(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(ListViewExampleRow,{title:rowData});}}),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableOpacity,{onPress:function onPress(){return _this2.backToTop();},
style:{
position:'absolute',
top:0,
left:0,
right:0,
height:30,
alignItems:'center',
justifyContent:'center',
backgroundColor:'#09c',
opacity:0.5}},


(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:{color:'#fff'}},'back to top'))));





}}]);return ListViewExample;}(_qunarReactNative.Component);var


ListViewExampleRow=function(_Component2){_inherits(ListViewExampleRow,_Component2);
function ListViewExampleRow(props){_classCallCheck(this,ListViewExampleRow);return _possibleConstructorReturn(this,(ListViewExampleRow.__proto__||Object.getPrototypeOf(ListViewExampleRow)).call(this,
props));
}_createClass(ListViewExampleRow,[{key:'render',value:function render()

{var
title=this.props.title;
var url='http://placeholdit.imgix.net/~text?txtsize=33&bg=666&txtclr=fff&txt='+title+'&w=100&h=110',
randomText=Number(title)%100;

return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.row},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
style:[styles.rowImg],
source:{uri:'http://placeholdit.imgix.net/~text?txtsize=33&bg=666&txtclr=fff&txt='+title+'&w=100&h=110'}}),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:[styles.rowContent]},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{flexDirection:'row'}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.titleText},title)),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:{color:'#25a4bb'}},randomText,'\u5206 / ',randomText,'\u6761\u8BC4\u8BBA'),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.alignRight,{color:'orange'}]},randomText,'\u8D77')),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:[styles.labelWrap]},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.labelText]},'label',randomText),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.labelText]},'label',randomText),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.labelText]},'label',randomText)),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.alignRight]},randomText,'\u6298vip')),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.detailText},'\u5730\u70B9\uFF1A\u9996\u90FD\u673A\u573A',randomText),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableOpacity,{style:[styles.alignRight]},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.button]},'\u9884\u5B9A'))))));





}}]);return ListViewExampleRow;}(_qunarReactNative.Component);


var styles=_qunarReactNative.StyleSheet.create({
container:{
flex:1,
backgroundColor:'#fff'},

row:{
flexDirection:'row',
alignItems:'center',
overflow:'hidden'},

rowImg:{
flex:1,
height:100,
resizeMode:'stretch'},

rowContent:{
flex:3,
padding:7},

titleText:{
fontWeight:'bold',
fontSize:14},

detailText:{
marginTop:3,
color:'#999',
fontSize:12},

alignRight:{
position:'absolute',
top:0,
right:0},

button:{
padding:2,
borderRadius:4,
color:'#fff',
backgroundColor:'#09c'},

labelWrap:{
flexDirection:'row'},

labelText:{
marginRight:3,
borderRadius:3,
borderWidth:1,
borderColor:'#09c'}});



module.exports={
title:'ImageTextList',
examples:[{
render:function render(){
return(_this4&&_this4.createElement||_qunarReactNative2.default.createElement)(ListViewExample,null);
}}]};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _this6=this;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var












ListViewExample=function(_Component){_inherits(ListViewExample,_Component);
function ListViewExample(props){_classCallCheck(this,ListViewExample);var _this=_possibleConstructorReturn(this,(ListViewExample.__proto__||Object.getPrototypeOf(ListViewExample)).call(this,
props));

_this.componentTimeouts=[];

var ds=new _qunarReactNative.ListView.DataSource({
rowHasChanged:function rowHasChanged(r1,r2){return r1!==r2;}});

var rows=[];
for(var i=0;i<30;i++){
rows.push(i);
}
_this.state={
rows:rows,
dataSource:ds.cloneWithRows(rows)};return _this;

}_createClass(ListViewExample,[{key:'onRefresh',value:function onRefresh()


{var _this2=this;
this.componentTimeouts.push(setTimeout(function(){
_this2.pushRows(10);
_this2.refs.listview.stopRefreshing();
},2000));
}},{key:'onLoad',value:function onLoad()


{var _this3=this;
this.componentTimeouts.push(setTimeout(function(){
_this3.pushRows(20);
_this3.refs.listview.stopLoading();
},2000));
}},{key:'pushRows',value:function pushRows(

number){
var ds=new _qunarReactNative.ListView.DataSource({
rowHasChanged:function rowHasChanged(r1,r2){return r1!==r2;}});


var rows=this.state.rows,
len=rows.length;

for(var i=0;i<number;i++){
rows.push(len+i);
}

this.setState({
rows:rows,
dataSource:ds.cloneWithRows(rows)});

}},{key:'render',value:function render()

{var _this4=this;
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.container},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.ListView,{
ref:'listview',
dataSource:this.state.dataSource,
renderRow:function renderRow(rowData){return(_this4&&_this4.createElement||_qunarReactNative2.default.createElement)(ListViewExampleRow,{title:rowData});},
refreshControl:(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.RefreshControl,{onRefresh:this.onRefresh.bind(this)}),
loadControl:
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.LoadControl,{onLoad:function onLoad(){return _this4.onLoad();},
onPress:function onPress(){
_this4.refs.listview.startLoading();
_this4.onLoad();
}})})));





}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
for(var _iterator=this.componentTimeouts,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var timeout=_ref;
clearTimeout(timeout);
}
}}]);return ListViewExample;}(_qunarReactNative.Component);var



ListViewExampleRow=function(_Component2){_inherits(ListViewExampleRow,_Component2);
function ListViewExampleRow(props){_classCallCheck(this,ListViewExampleRow);return _possibleConstructorReturn(this,(ListViewExampleRow.__proto__||Object.getPrototypeOf(ListViewExampleRow)).call(this,
props));
}_createClass(ListViewExampleRow,[{key:'render',value:function render()

{var
title=this.props.title;
var url='http://placeholdit.imgix.net/~text?txtsize=33&bg=666&txtclr=fff&txt='+title+'&w=100&h=110',
randomText=Number(title)%100;

return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.row},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
style:[styles.rowImg],
source:{uri:'http://placeholdit.imgix.net/~text?txtsize=33&bg=666&txtclr=fff&txt='+title+'&w=100&h=110'}}),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:[styles.rowContent]},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{flexDirection:'row'}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.titleText},title)),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:{color:'#25a4bb'}},randomText,'\u5206 / ',randomText,'\u6761\u8BC4\u8BBA'),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.alignRight,{color:'orange'}]},randomText,'\u8D77')),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:[styles.labelWrap]},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.labelText]},'label',randomText),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.labelText]},'label',randomText),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.labelText]},'label',randomText)),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.alignRight]},randomText,'\u6298vip')),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.detailText},'\u5730\u70B9\uFF1A\u9996\u90FD\u673A\u573A',randomText),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableOpacity,{style:[styles.alignRight]},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.button]},'\u9884\u5B9A'))))));





}}]);return ListViewExampleRow;}(_qunarReactNative.Component);


var styles=_qunarReactNative.StyleSheet.create({
container:{
flex:1,
backgroundColor:'#fff'},

row:{
flexDirection:'row',
alignItems:'center',
overflow:'hidden'},

rowImg:{
flex:1,
height:100,
resizeMode:'stretch'},

rowContent:{
flex:3,
padding:7},

titleText:{
fontWeight:'bold',
fontSize:14},

detailText:{
marginTop:3,
color:'#999',
fontSize:12},

alignRight:{
position:'absolute',
top:0,
right:0},

button:{
padding:2,
borderRadius:4,
color:'#fff',
backgroundColor:'#09c'},

labelWrap:{
flexDirection:'row'},

labelText:{
marginRight:3,
borderRadius:3,
borderWidth:1,
borderColor:'#09c'}});



module.exports={
title:'RefreshControl',
examples:[{
render:function render(){
return(_this6&&_this6.createElement||_qunarReactNative2.default.createElement)(ListViewExample,null);
}}]};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _this4=this;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var









ListViewExample=function(_Component){_inherits(ListViewExample,_Component);
function ListViewExample(props){_classCallCheck(this,ListViewExample);var _this=_possibleConstructorReturn(this,(ListViewExample.__proto__||Object.getPrototypeOf(ListViewExample)).call(this,
props));

var ds=new _qunarReactNative.ListView.DataSource({
rowHasChanged:function rowHasChanged(r1,r2){return r1!==r2;},
sectionHeaderHasChanged:function sectionHeaderHasChanged(s1,s2){return s1!==s2;}});

var sections={
part1:[],
part2:[]};

for(var i=0;i<100;i++){
if(i<3){
sections.part1.push(i);
}else{
sections.part2.push(i);
}
}
_this.state={
sections:sections,
dataSource:ds.cloneWithRowsAndSections(sections)};return _this;

}_createClass(ListViewExample,[{key:'backToTop',value:function backToTop()

{
this.refs.ListView.scrollToTop({animated:true});
}},{key:'scrollTo',value:function scrollTo()

{
this.refs.ListView.scrollTo({y:5000,animated:true});
}},{key:'renderSectionHeader',value:function renderSectionHeader(

sectionData,sectionID){
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{padding:5,backgroundColor:'#09c'}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,sectionID,' - ',sectionData.length,'  items')));


}},{key:'render',value:function render()

{var _this2=this;























return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.container},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.ListView,{
ref:'ListView',
dataSource:this.state.dataSource,
renderSectionHeader:function renderSectionHeader(sectionData,sectionID){return _this2.renderSectionHeader(sectionData,sectionID);},
renderRow:function renderRow(rowData){return(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(ListViewExampleRow,{title:rowData,text:_this2.state.text});}})));



}}]);return ListViewExample;}(_qunarReactNative.Component);var


ListViewExampleRow=function(_Component2){_inherits(ListViewExampleRow,_Component2);
function ListViewExampleRow(props){_classCallCheck(this,ListViewExampleRow);return _possibleConstructorReturn(this,(ListViewExampleRow.__proto__||Object.getPrototypeOf(ListViewExampleRow)).call(this,
props));
}_createClass(ListViewExampleRow,[{key:'render',value:function render()

{var _props=
this.props,title=_props.title,text=_props.text;
var url='http://placeholdit.imgix.net/~text?txtsize=33&bg=666&txtclr=fff&txt='+title+'&w=100&h=110',
randomText=Number(title)%100;

return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableOpacity,{style:styles.row},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
style:[styles.rowImg],
source:{uri:'http://placeholdit.imgix.net/~text?txtsize=33&bg=666&txtclr=fff&txt='+title+'&w=100&h=110'}}),


(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:[styles.rowContent]},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{flexDirection:'row'}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.titleText},title)),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:{color:'#25a4bb'}},randomText,'\u5206 / ',randomText,'\u6761\u8BC4\u8BBA'),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.alignRight,{color:'orange'}]},randomText,'\u8D77')),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:[styles.labelWrap]},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.labelText]},'label',randomText),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.labelText]},'label',randomText),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.labelText]},'label',randomText)),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.alignRight]},randomText,'\u6298vip')),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.detailText},'\u5730\u70B9\uFF1A\u9996\u90FD\u673A\u573A',randomText),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableOpacity,{style:[styles.alignRight]},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.button]},'\u9884\u5B9A'))))));





}}]);return ListViewExampleRow;}(_qunarReactNative.Component);


var styles=_qunarReactNative.StyleSheet.create({
container:{
flex:1,
backgroundColor:'#fff'},

row:{
flexDirection:'row',
alignItems:'center',
overflow:'hidden'},

rowImg:{
flex:1,
height:100,
resizeMode:'stretch'},

rowContent:{
flex:3,
padding:7},

titleText:{
fontWeight:'bold',
fontSize:14},

detailText:{
marginTop:3,
color:'#999',
fontSize:12},

alignRight:{
position:'absolute',
top:0,
right:0},

button:{
padding:2,
borderRadius:4,
color:'#fff',
backgroundColor:'#09c'},

labelWrap:{
flexDirection:'row'},

labelText:{
marginRight:3,
borderRadius:3,
borderWidth:1,
borderColor:'#09c'},

operationButton:{
padding:5,
borderWidth:1,
borderColor:'#069',
borderRadius:5}});



module.exports={
title:'Section Header',
examples:[{
render:function render(){
return(_this4&&_this4.createElement||_qunarReactNative2.default.createElement)(ListViewExample,null);
}}]};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _this4=this;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var









ListViewExample=function(_Component){_inherits(ListViewExample,_Component);
function ListViewExample(props){_classCallCheck(this,ListViewExample);var _this=_possibleConstructorReturn(this,(ListViewExample.__proto__||Object.getPrototypeOf(ListViewExample)).call(this,
props));

var ds=new _qunarReactNative.ListView.DataSource({
rowHasChanged:function rowHasChanged(r1,r2){return r1!==r2;}});

var rows=[];
for(var i=0;i<30;i++){
rows.push(i);
}
_this.state={
rows:rows,
dataSource:ds.cloneWithRows(rows)};return _this;

}_createClass(ListViewExample,[{key:'render',value:function render()

{var _this2=this;
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.container},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.ListView,{
dataSource:this.state.dataSource,
onEndReached:function onEndReached(e){return alert('end');},
renderRow:function renderRow(rowData){return(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(ListViewExampleRow,{title:rowData});}})));



}}]);return ListViewExample;}(_qunarReactNative.Component);var

ListViewExampleRow=function(_Component2){_inherits(ListViewExampleRow,_Component2);
function ListViewExampleRow(props){_classCallCheck(this,ListViewExampleRow);return _possibleConstructorReturn(this,(ListViewExampleRow.__proto__||Object.getPrototypeOf(ListViewExampleRow)).call(this,
props));
}_createClass(ListViewExampleRow,[{key:'render',value:function render()

{var
title=this.props.title;
var url='http://placeholdit.imgix.net/~text?txtsize=33&bg=666&txtclr=fff&txt='+title+'&w=100&h=110',
randomText=Number(title)%100;

return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.row},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{
style:[styles.rowImg],
source:{uri:'http://placeholdit.imgix.net/~text?txtsize=33&bg=666&txtclr=fff&txt='+title+'&w=100&h=110'}}),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:[styles.rowContent]},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{flexDirection:'row'}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.titleText},title)),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:{color:'#25a4bb'}},randomText,'\u5206 / ',randomText,'\u6761\u8BC4\u8BBA'),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.alignRight,{color:'orange'}]},randomText,'\u8D77')),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:[styles.labelWrap]},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.labelText]},'label',randomText),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.labelText]},'label',randomText),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.labelText]},'label',randomText)),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.alignRight]},randomText,'\u6298vip')),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.detailText},'\u5730\u70B9\uFF1A\u9996\u90FD\u673A\u573A',randomText),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableOpacity,{style:[styles.alignRight]},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[styles.button]},'\u9884\u5B9A'))))));





}}]);return ListViewExampleRow;}(_qunarReactNative.Component);


var styles=_qunarReactNative.StyleSheet.create({
container:{
flex:1,
backgroundColor:'#fff'},

row:{
flexDirection:'row',
alignItems:'center',
overflow:'hidden'},

rowImg:{
flex:1,
height:100,
resizeMode:'stretch'},

rowContent:{
flex:3,
padding:7},

titleText:{
fontWeight:'bold',
fontSize:14},

detailText:{
marginTop:3,
color:'#999',
fontSize:12},

alignRight:{
position:'absolute',
top:0,
right:0},

button:{
padding:2,
borderRadius:4,
color:'#fff',
backgroundColor:'#09c'},

labelWrap:{
flexDirection:'row'},

labelText:{
marginRight:3,
borderRadius:3,
borderWidth:1,
borderColor:'#09c'}});



module.exports={
title:'EndReached',
examples:[{
render:function render(){
return(_this4&&_this4.createElement||_qunarReactNative2.default.createElement)(ListViewExample,null);
}}]};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _this4=this;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}









var styles=_qunarReactNative.StyleSheet.create({
operationContainer:{
paddingHorizontal:10,
marginBottom:10,
flexDirection:'row',
height:30},

operationText:{
flex:1,
alignSelf:'center'},

operationTextHighlight:{
color:'#1ba9ba'},

itemText:{
padding:5,
color:'#fff',
alignSelf:'flex-end',
fontSize:32,
fontWeight:'bold'}});var



RefreshControlExample=function(_React$Component){_inherits(RefreshControlExample,_React$Component);

function RefreshControlExample(props){_classCallCheck(this,RefreshControlExample);var _this=_possibleConstructorReturn(this,(RefreshControlExample.__proto__||Object.getPrototypeOf(RefreshControlExample)).call(this,
props));

_this.state={
noMore:false,
listData:getCoupleOfRandomColor(20)};return _this;

}_createClass(RefreshControlExample,[{key:'componentWillUnmount',value:function componentWillUnmount()

{
clearTimeout(this.timeId);
}},{key:'onLoad',value:function onLoad()

{var _this2=this;
clearTimeout(this.timeId);
this.timeId=setTimeout(function(){
_this2.setState({
listData:_this2.state.listData.concat(getCoupleOfRandomColor(20))});

_this2.refs.ScrollView.stopLoading();
},3000);
}},{key:'render',value:function render()

{var _this3=this;
var listContent=this.state.listData.map(function(item,index){
return(
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{height:50,backgroundColor:item},key:index},
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.itemText},index)));


});

var loadControl=(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.LoadControl,{
height:50,
noMore:this.state.noMore,
noticeContent:'\u81EA\u5B9A\u4E49\u63D0\u793A\u6587\u672C',
loadingContent:'\u81EA\u5B9A\u4E49\u52A0\u8F7D\u6587\u5B57',
noMoreContent:'\u81EA\u5B9A\u4E49\u6CA1\u6709\u66F4\u591A\u6587\u5B57',
style:{borderWidth:2,borderColor:'blue',height:100},
textStyle:{color:'blue'},
iconStyle:{color:'blue'},
onLoad:this.onLoad.bind(this)});

return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{flex:1,paddingTop:10}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.operationContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationText},'\u5F3A\u5236\u52A0\u8F7D'),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u5F3A\u5236\u52A0\u8F7D',onPress:function onPress(){return _this3.refs.ScrollView.startLoading();}})),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.operationContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationText},'\u8BBE\u7F6E\u662F\u5426\u6709\u66F4\u591A\u5185\u5BB9(',this.state.noMore?'没有更多':'有更多',')'),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u8BBE\u7F6E',onPress:function onPress(){return _this3.setState({noMore:!_this3.state.noMore});}})),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.ScrollView,{
ref:'ScrollView',
style:{borderTopWidth:1,borderBottomWidth:1,borderColor:'#ffffff'},
loadControl:loadControl},
listContent)));



}}]);return RefreshControlExample;}(_qunarReactNative2.default.Component);


function getCoupleOfRandomColor(num){
var colors=[];

for(var i=0;i<num;i++){
colors.push(getRandomColor());
}

return colors;
}

function getRandomColor(){
var letters='3456789ABC'.split('');
var color='#';
for(var i=0;i<6;i++){
color+=letters[Math.floor(Math.random()*10)];
}
return color;
}

module.exports={
title:'LoadControl',
examples:[{
render:function render(){
return(
(_this4&&_this4.createElement||_qunarReactNative2.default.createElement)(RefreshControlExample,null));

}}]};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _this3=this;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

LoadingExample=function(_Component){_inherits(LoadingExample,_Component);

function LoadingExample(props){_classCallCheck(this,LoadingExample);var _this=_possibleConstructorReturn(this,(LoadingExample.__proto__||Object.getPrototypeOf(LoadingExample)).call(this,
props));

_this.state={
animating:true};return _this;

}_createClass(LoadingExample,[{key:'componentDidMount',value:function componentDidMount()

{var _this2=this;
this.timer=setInterval(
function(){
_this2.setState({animating:!_this2.state.animating});
},3000);

}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
clearInterval(this.timer);
}},{key:'render',value:function render()

{
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.loadingContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Loading,{animating:this.state.animating,hidesWhenStopped:true}),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Loading,{animating:this.state.animating,hidesWhenStopped:false})));


}}]);return LoadingExample;}(_qunarReactNative.Component);


var styles=_qunarReactNative.StyleSheet.create({
loadingContainer:{
flexDirection:'row',
justifyContent:'space-around'}});



module.exports={
title:'Loading',
scroll:true,
examples:[{
subtitle:'Default settings',
render:function render(){
return(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Loading,null);
}},
{
subtitle:'Custom Size',
render:function render(){
return(
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.loadingContainer},
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Loading,{size:18}),
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Loading,{size:24}),
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Loading,{size:30})));


}},
{
subtitle:'Custom Color',
render:function render(){
return(
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.loadingContainer},
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Loading,{color:'#aa0000'}),
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Loading,{color:'#00aa00'}),
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Loading,{color:'#0000aa'})));


}},
{
subtitle:'Start/Stop(hidesWhenStopped:true | false)',
render:function render(){
return(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(LoadingExample,null);
}},
{
subtitle:'Custom Icon',
render:function render(){
return(
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.loadingContainer},
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Loading,{content:'A'}),
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Loading,{content:'B'}),
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Loading,{content:'C'})));


}},
{
subtitle:'Custom Content',
render:function render(){
return(
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.loadingContainer},
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Loading,{speed:2000,contentRender:function contentRender(){return(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{style:{width:30,height:30},source:{uri:__webpack_require__(1).loading}});}})));


}}]};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();
var _qunarReactNative=__webpack_require__(0);

























































































































































var _styles=__webpack_require__(3);var _styles2=_interopRequireDefault(_styles);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var ModalExampleList=function(_Component){_inherits(ModalExampleList,_Component);function ModalExampleList(props){_classCallCheck(this,ModalExampleList);var _this=_possibleConstructorReturn(this,(ModalExampleList.__proto__||Object.getPrototypeOf(ModalExampleList)).call(this,props));_this.state={defaultConfig:false,fade:false,slide:false,offset:false,left:false,noNavBarMask:false,actionSheet:false};return _this;}_createClass(ModalExampleList,[{key:'closeModal',value:function closeModal(modalName){this.setState(_defineProperty({},modalName,false));}},{key:'openModal',value:function openModal(modalName){this.setState(_defineProperty({},modalName,true));}},{key:'render',value:function render(){var _this2=this;return(this&&this.createElement||React.createElement)(_qunarReactNative.View,{style:{flex:1}},(this&&this.createElement||React.createElement)(_qunarReactNative.View,{style:styles.noteWrap},(this&&this.createElement||React.createElement)(_qunarReactNative.Text,{style:styles.noteWrapTextIcon},'\uF07F'),(this&&this.createElement||React.createElement)(_qunarReactNative.Text,{style:styles.noteWrapText},'Modal Example')),(this&&this.createElement||React.createElement)(_qunarReactNative.TouchableOpacity,{style:styles.listRow,onPress:function onPress(){return _this2.openModal('defaultConfig');}},(this&&this.createElement||React.createElement)(_qunarReactNative.Text,{style:styles.listRowText},'\u9ED8\u8BA4\u914D\u7F6E')),(this&&this.createElement||React.createElement)(_qunarReactNative.TouchableOpacity,{style:styles.listRow,onPress:function onPress(){return _this2.openModal('fade');}},(this&&this.createElement||React.createElement)(_qunarReactNative.Text,{style:styles.listRowText},'Fade\u52A8\u753B\u6548\u679C')),(this&&this.createElement||React.createElement)(_qunarReactNative.TouchableOpacity,{style:styles.listRow,onPress:function onPress(){return _this2.openModal('slide');}},(this&&this.createElement||React.createElement)(_qunarReactNative.Text,{style:styles.listRowText},'SlideFromBottom\u52A8\u753B\u6548\u679C')),(this&&this.createElement||React.createElement)(_qunarReactNative.TouchableOpacity,{style:styles.listRow,onPress:function onPress(){return _this2.openModal('offset');}},(this&&this.createElement||React.createElement)(_qunarReactNative.Text,{style:styles.listRowText},'\u8BBE\u7F6Eoffset\u548CslideFromTop')),(this&&this.createElement||React.createElement)(_qunarReactNative.TouchableOpacity,{style:styles.listRow,onPress:function onPress(){return _this2.openModal('left');}},(this&&this.createElement||React.createElement)(_qunarReactNative.Text,{style:styles.listRowText},'\u8BBE\u7F6Eposition:left\u548CslideFromLeft')),(this&&this.createElement||React.createElement)(_qunarReactNative.TouchableOpacity,{style:styles.listRow,onPress:function onPress(){return _this2.openModal('noNavBarMask');}},(this&&this.createElement||React.createElement)(_qunarReactNative.Text,{style:styles.listRowText},'\u8BBE\u7F6EshowNavBarMask=false')),(this&&this.createElement||React.createElement)(_qunarReactNative.TouchableOpacity,{style:styles.listRow,onPress:function onPress(){return _this2.openModal('actionSheet');}},(this&&this.createElement||React.createElement)(_qunarReactNative.Text,{style:styles.listRowText},'\u4F7F\u7528Modal\u5B9E\u73B0\u4E00\u4E2AActionSheet')),(this&&this.createElement||React.createElement)(_qunarReactNative.Modal,{visible:this.state.defaultConfig},(this&&this.createElement||React.createElement)(_qunarReactNative.View,{style:styles.content},(this&&this.createElement||React.createElement)(_qunarReactNative.Text,null,'\u8FD9\u662F\u4E00\u4E2A\u5168\u90E8\u5E94\u7528\u9ED8\u8BA4\u5C5E\u6027\u7684Modal'),(this&&this.createElement||React.createElement)(_qunarReactNative.Text,null,'\u5E76\u4E14\u6CA1\u6709\u914D\u7F6EonMaskPress'),(this&&this.createElement||React.createElement)(_qunarReactNative.TouchableOpacity,{onPress:function onPress(){return _this2.closeModal('defaultConfig');}},(this&&this.createElement||React.createElement)(_qunarReactNative.Text,{style:styles.closeBtn},'\u70B9\u51FB\u5173\u95ED')))),(this&&this.createElement||React.createElement)(_qunarReactNative.Modal,{visible:this.state.fade,animation:'fade',onMaskPress:function onMaskPress(){return _this2.closeModal('fade');}},(this&&this.createElement||React.createElement)(_qunarReactNative.View,{style:styles.content},(this&&this.createElement||React.createElement)(_qunarReactNative.Text,null,'\u8FD9\u662F\u4E00\u4E2A\u6709fade\u6548\u679C\u7684Modal'),(this&&this.createElement||React.createElement)(_qunarReactNative.TouchableOpacity,{onPress:function onPress(){return _this2.closeModal('fade');}},(this&&this.createElement||React.createElement)(_qunarReactNative.Text,{style:styles.closeBtn},'\u70B9\u51FB\u5173\u95ED')))),(this&&this.createElement||React.createElement)(_qunarReactNative.Modal,{visible:this.state.slide,animation:'slideFromBottom',onMaskPress:function onMaskPress(){return _this2.closeModal('slide');}},(this&&this.createElement||React.createElement)(_qunarReactNative.View,{style:styles.content},(this&&this.createElement||React.createElement)(_qunarReactNative.Text,null,'\u8FD9\u662F\u4E00\u4E2A\u6709slideFromBottom\u6548\u679C\u7684Modal'),(this&&this.createElement||React.createElement)(_qunarReactNative.TouchableOpacity,{onPress:function onPress(){return _this2.closeModal('slide');}},(this&&this.createElement||React.createElement)(_qunarReactNative.Text,{style:styles.closeBtn},'\u70B9\u51FB\u5173\u95ED')))),(this&&this.createElement||React.createElement)(_qunarReactNative.Modal,{visible:this.state.offset,animation:'slideFromTop',onMaskPress:function onMaskPress(){return _this2.closeModal('offset');},offset:-200},(this&&this.createElement||React.createElement)(_qunarReactNative.View,{style:styles.content},(this&&this.createElement||React.createElement)(_qunarReactNative.Text,null,'\u8FD9\u4E2AModal\u5411\u4E0A\u504F\u79FB\u4E86200\u4E2A\u50CF\u7D20,'),(this&&this.createElement||React.createElement)(_qunarReactNative.Text,null,'\u5E76\u4E14\u8BBE\u7F6E\u4E86slideFromTop\u6548\u679C'),(this&&this.createElement||React.createElement)(_qunarReactNative.TouchableOpacity,{onPress:function onPress(){return _this2.closeModal('offset');}},(this&&this.createElement||React.createElement)(_qunarReactNative.Text,{style:styles.closeBtn},'\u70B9\u51FB\u5173\u95ED')))),(this&&this.createElement||React.createElement)(_qunarReactNative.Modal,{visible:this.state.left,animation:'slideFromLeft',onMaskPress:function onMaskPress(){return _this2.closeModal('left');},position:'left'},(this&&this.createElement||React.createElement)(_qunarReactNative.View,{style:styles.content},(this&&this.createElement||React.createElement)(_qunarReactNative.Text,null,'\u8FD9\u4E2AModal\u8BBE\u7F6E\u4E86position:left'),(this&&this.createElement||React.createElement)(_qunarReactNative.Text,null,'\u5E76\u4E14\u8BBE\u7F6E\u4E86slideFromLeft\u6548\u679C'),(this&&this.createElement||React.createElement)(_qunarReactNative.TouchableOpacity,{onPress:function onPress(){return _this2.closeModal('left');}},(this&&this.createElement||React.createElement)(_qunarReactNative.Text,{style:styles.closeBtn},'\u70B9\u51FB\u5173\u95ED')))),(this&&this.createElement||React.createElement)(_qunarReactNative.Modal,{visible:this.state.noNavBarMask,animation:'slideFromRight',onMaskPress:function onMaskPress(){return _this2.closeModal('noNavBarMask');},position:'right',showNavBarMask:false},(this&&this.createElement||React.createElement)(_qunarReactNative.View,{style:styles.content},(this&&this.createElement||React.createElement)(_qunarReactNative.Text,null,'\u8FD9\u4E2AModal\u8BBE\u7F6E\u4E86position:right'),(this&&this.createElement||React.createElement)(_qunarReactNative.Text,null,'\u5E76\u4E14\u8BBE\u7F6E\u4E86slideFromRight\u6548\u679C'),(this&&this.createElement||React.createElement)(_qunarReactNative.Text,null,'\u4EE5\u53CAshowNavBarMask=false'),(this&&this.createElement||React.createElement)(_qunarReactNative.TouchableOpacity,{onPress:function onPress(){return _this2.closeModal('noNavBarMask');}},(this&&this.createElement||React.createElement)(_qunarReactNative.Text,{style:styles.closeBtn},'\u70B9\u51FB\u5173\u95ED')))),(this&&this.createElement||React.createElement)(_qunarReactNative.Modal,{visible:this.state.actionSheet,animation:'slideFromBottom',position:'bottom',onMaskPress:function onMaskPress(){return _this2.closeModal('actionSheet');}},(this&&this.createElement||React.createElement)(_qunarReactNative.View,{style:styles.actionSheetContent},(this&&this.createElement||React.createElement)(_qunarReactNative.Text,null,'\u901A\u8FC7\u914D\u7F6EModal\u7684\u4F4D\u7F6E\u548C\u52A8\u753B\u6548\u679C'),(this&&this.createElement||React.createElement)(_qunarReactNative.Text,null,'\u53EF\u4EE5\u5F88\u8F7B\u6613\u5730\u5B9E\u73B0\u4E00\u4E2AActionSheet\u7EC4\u4EF6'))));}}]);return ModalExampleList;}(_qunarReactNative.Component);

var styles=_extends({
actionSheetContent:{
width:_qunarReactNative.Dimensions.get('window').width,
height:200,
backgroundColor:'white',
padding:20},

content:{
backgroundColor:'white',
padding:20},

closeBtn:{
marginTop:10}},_styles2.default);



module.exports={
title:'Modal',
examples:[
{
render:function render(){

return(this&&this.createElement||React.createElement)(ModalExampleList,null);
}}]};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _this3=this;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var Item=_qunarReactNative.Picker.Item;

var styles=_qunarReactNative.StyleSheet.create({
picker:{
width:200},

operationContainer:{
paddingBottom:5,
paddingHorizontal:10}});var




PickerExample=function(_Component){_inherits(PickerExample,_Component);
function PickerExample(props){_classCallCheck(this,PickerExample);var _this=_possibleConstructorReturn(this,(PickerExample.__proto__||Object.getPrototypeOf(PickerExample)).call(this,
props));

_this.state={
selected:_this.props.selected,
color:'red'};return _this;

}_createClass(PickerExample,[{key:'render',value:function render()

{var _this2=this;
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.operationContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Picker,{
style:styles.picker,
itemStyle:this.props.itemStyle,
selectedValue:this.state.selected,
onValueChange:function onValueChange(value){

_this2.setState({
selected:value});

}},
this.props.children)));



}}]);return PickerExample;}(_qunarReactNative.Component);


module.exports={
title:'Picker',
scroll:true,
examples:[{
subtitle:'Default settings',
render:function render(){
return(
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(PickerExample,{selected:'key1'},
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(Item,{label:'hello',value:'key0'}),
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(Item,{label:'world',value:'key1'}),
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(Item,{label:'world1',value:'key2'}),
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(Item,{label:'world3',value:'key3'}),
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(Item,{label:'world4',value:'key4'}),
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(Item,{label:'world5',value:'key5'}),
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(Item,{label:'world6',value:'key6'}),
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(Item,{label:'world7',value:'key7'})));


}},
{
subtitle:'Custom Items Settings',
render:function render(){
return(
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(PickerExample,{selected:'key2',itemStyle:{color:'red',fontSize:40}},
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(Item,{label:'hello',value:'key0'}),
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(Item,{label:'world',value:'key1'}),
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(Item,{label:'world1',value:'key2'}),
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(Item,{label:'world3',value:'key3'})));


}}]};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _this2=this;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);
var _reactTimerMixin=__webpack_require__(8);var _reactTimerMixin2=_interopRequireDefault(_reactTimerMixin);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var ProgressViewExampleItem=_qunarReactNative2.default.createClass({displayName:'ProgressViewExampleItem',
mixins:[_reactTimerMixin2.default],

getInitialState:function getInitialState(){
return{progress:0};
},

componentDidMount:function componentDidMount(){
this.updateProgress();
},

render:function render(){
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.ProgressView,_extends({progress:this.getProgress(0)},this.props)));

},

getProgress:function getProgress(offset){
var progress=this.state.progress+offset;
return Math.sin(progress%Math.PI)%1;
},

updateProgress:function updateProgress(){var _this=this;
var progress=this.state.progress+0.01;
this.setState({progress:progress});
this.requestAnimationFrame(function(){return _this.updateProgress();});
}});


module.exports={
title:'ProgressView',
examples:[{
subtitle:'Default settings',
render:function render(){
return(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(ProgressViewExampleItem,null);
}},
{
subtitle:'trackTintColor: "orange", progressTintColor: "green"',
render:function render(){
return(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(ProgressViewExampleItem,{
trackTintColor:'orange',
progressTintColor:'green'});

}},
{
subtitle:'use trackImage and progressImage',
render:function render(){
return(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(ProgressViewExampleItem,{
trackImage:{uri:__webpack_require__(1).track},
progressImage:{uri:__webpack_require__(1).progress}});

}}]};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _this=this;

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

module.exports={
title:'QLoadingError',
scroll:true,
examples:[{
subtitle:'Default settings',
render:function render(){
return(_this&&_this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.QLoadingError,{onPress:function onPress(){return alert('Press');}});
}},
{
subtitle:'Custom Content',
render:function render(){
return(_this&&_this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.QLoadingError,{titleText:'title',hintText:'hint',buttonText:'button',onPress:function onPress(){return alert('Press2');}});
}},
{
subtitle:'Hide Content',
render:function render(){
return(_this&&_this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.QLoadingError,{hideTitle:true,hideHint:true,hideButton:true,onPress:function onPress(){return alert('Press3');}});
}},
{
subtitle:'Custom Style',
render:function render(){
return(_this&&_this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.QLoadingError,{
titleStyle:{fontSize:18,color:'red'},
hintStyle:{fontSize:16,color:'green',marginTop:10},
buttonStyle:{borderWidth:1,borderColor:'#1ba9ba',backgroundColor:'#ffffff',borderRadius:5},
buttonTextStyle:{color:'#1ba9ba'},
onPress:function onPress(){return alert('Press4');}});
}},
{
subtitle:'Custom Render Function',
render:function render(){
return(_this&&_this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.QLoadingError,{renderButton:function renderButton(){return(_this&&_this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,null);},onPress:function onPress(){return alert('Press5');}});
}}]};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _this=this;

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

module.exports={
title:'QLoading',
scroll:true,
examples:[{
subtitle:'Default settings',
render:function render(){
return(_this&&_this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.QLoading,null);
}},
{
subtitle:'Custom Width',
render:function render(){
return(
(_this&&_this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{flexDirection:'row'}},
(_this&&_this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.QLoading,{style:{width:100,borderWidth:1,borderColor:'#1ba9ba'}}),
(_this&&_this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.QLoading,{style:{width:150,borderWidth:1,borderColor:'#1ba9ba'}})));


}},
{
subtitle:'Custom Text',
render:function render(){
return(
(_this&&_this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{flexDirection:'row'}},
(_this&&_this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.QLoading,{text:'loading...'})));


}},
{
subtitle:'Hide Text',
render:function render(){
return(
(_this&&_this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{flexDirection:'row'}},
(_this&&_this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.QLoading,{hideText:true})));


}}]};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _this11=this;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


RadioSingleExample=function(_Component){_inherits(RadioSingleExample,_Component);
function RadioSingleExample(props){_classCallCheck(this,RadioSingleExample);var _this=_possibleConstructorReturn(this,(RadioSingleExample.__proto__||Object.getPrototypeOf(RadioSingleExample)).call(this,
props));
_this.state={
selectedIndex:-1};return _this;

}_createClass(RadioSingleExample,[{key:'render',value:function render()

{var _this2=this;var
exampleType=this.props.exampleType;var
selectedIndex=this.state.selectedIndex;

var ROWS_INDEX=[0,1,2];
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,

ROWS_INDEX.map(function(rowIndex){
return(
(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableOpacity,{
key:rowIndex,
activeOpacity:1,
style:styles.exampleRow,
onPress:function onPress(){return _this2.setState({selectedIndex:rowIndex});}},

(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:selectedIndex===rowIndex?{color:'#1ba9ba'}:null},'\u9009\u62E9\u8BE5\u884C\u63A7\u5236Radio'),
(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Radio,{checked:selectedIndex===rowIndex})));


})));



}}]);return RadioSingleExample;}(_qunarReactNative.Component);var



RadioMultipleExample=function(_Component2){_inherits(RadioMultipleExample,_Component2);
function RadioMultipleExample(props){_classCallCheck(this,RadioMultipleExample);var _this3=_possibleConstructorReturn(this,(RadioMultipleExample.__proto__||Object.getPrototypeOf(RadioMultipleExample)).call(this,
props));
_this3.state={
selectedIndexes:[]};return _this3;

}_createClass(RadioMultipleExample,[{key:'render',value:function render()

{var _this4=this;var
exampleType=this.props.exampleType;var
selectedIndexes=this.state.selectedIndexes;

var ROWS_INDEX=[0,1,2];
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,

ROWS_INDEX.map(function(rowIndex){
return(
(_this4&&_this4.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableOpacity,{
key:rowIndex,
activeOpacity:1,
style:styles.exampleRow,
onPress:function onPress(e){
var indexOfRowIndex=selectedIndexes.indexOf(rowIndex);
if(indexOfRowIndex>-1){
selectedIndexes.splice(indexOfRowIndex,1);
}else{
selectedIndexes.push(rowIndex);
}
_this4.setState({selectedIndexes:selectedIndexes});
}},

(_this4&&_this4.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:selectedIndexes.indexOf(rowIndex)>-1?{color:'#1ba9ba'}:null},'\u9009\u62E9\u8BE5\u884C\u63A7\u5236Radio'),


(_this4&&_this4.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Radio,{hasBorder:true,checked:selectedIndexes.indexOf(rowIndex)>-1})));


})));



}}]);return RadioMultipleExample;}(_qunarReactNative.Component);var



RadioMixedExample=function(_Component3){_inherits(RadioMixedExample,_Component3);
function RadioMixedExample(props){_classCallCheck(this,RadioMixedExample);var _this5=_possibleConstructorReturn(this,(RadioMixedExample.__proto__||Object.getPrototypeOf(RadioMixedExample)).call(this,
props));
_this5.state={
selectedAll:false,
selectedIndexes:[]};return _this5;

}_createClass(RadioMixedExample,[{key:'render',value:function render()

{var _this6=this;var
exampleType=this.props.exampleType;var _state=
this.state,selectedIndexes=_state.selectedIndexes,selectedAll=_state.selectedAll;

var ROWS_INDEX=[0,1,2];
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableOpacity,{
activeOpacity:1,
style:styles.exampleRow,
onPress:function onPress(){
if(selectedAll){
_this6.setState({
selectedAll:false,
selectedIndexes:[]});

}else{
_this6.setState({
selectedAll:true,
selectedIndexes:ROWS_INDEX});

}
}},

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:selectedAll?{color:'#1ba9ba'}:null},'\u5168\u9009'),


(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Radio,{checked:selectedAll})),


ROWS_INDEX.map(function(rowIndex){
return(
(_this6&&_this6.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableOpacity,{
key:rowIndex,
activeOpacity:1,
style:styles.exampleRow,
onPress:function onPress(){
var indexOfRowIndex=selectedIndexes.indexOf(rowIndex);
if(indexOfRowIndex>-1){
selectedIndexes.splice(indexOfRowIndex,1);
}else{
selectedIndexes.push(rowIndex);
}

selectedAll=ROWS_INDEX.length===selectedIndexes.length;

_this6.setState({selectedIndexes:selectedIndexes,selectedAll:selectedAll});
}},

(_this6&&_this6.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:selectedIndexes.indexOf(rowIndex)>-1?{color:'#1ba9ba'}:null},'\u9009\u9879',
rowIndex),

(_this6&&_this6.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Radio,{hasBorder:true,checked:selectedIndexes.indexOf(rowIndex)>-1})));


})));



}}]);return RadioMixedExample;}(_qunarReactNative.Component);var



RadioCallbackExample=function(_Component4){_inherits(RadioCallbackExample,_Component4);
function RadioCallbackExample(props){_classCallCheck(this,RadioCallbackExample);var _this7=_possibleConstructorReturn(this,(RadioCallbackExample.__proto__||Object.getPrototypeOf(RadioCallbackExample)).call(this,
props));
_this7.state={
selected:false};return _this7;

}_createClass(RadioCallbackExample,[{key:'render',value:function render()

{var _this8=this;var
exampleType=this.props.exampleType;var
selected=this.state.selected;

return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.exampleRow},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:selected?{color:'#1ba9ba'}:null},'\u70B9\u51FBRadio\u89E6\u53D1\u56DE\u8C03'),


(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Radio,{hasBorder:true,
checked:selected,
onPress:function onPress(e){_this8.setState({selected:!e.target.checked});}})));



}}]);return RadioCallbackExample;}(_qunarReactNative.Component);var



RadioStyleExample=function(_Component5){_inherits(RadioStyleExample,_Component5);
function RadioStyleExample(props){_classCallCheck(this,RadioStyleExample);var _this9=_possibleConstructorReturn(this,(RadioStyleExample.__proto__||Object.getPrototypeOf(RadioStyleExample)).call(this,
props));
_this9.state={
selectedIndex:-1};return _this9;

}_createClass(RadioStyleExample,[{key:'render',value:function render()

{var _this10=this;var
exampleType=this.props.exampleType;var
selectedIndex=this.state.selectedIndex;

return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableOpacity,{
activeOpacity:1,
style:styles.exampleRow,
onPress:function onPress(){_this10.setState({selectedIndex:0});}},

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:selectedIndex===0?{color:'#1ba9ba'}:null},'hasBorder: false - \u81EA\u5B9A\u4E49\u6837\u5F0F'),


(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Radio,{hasBorder:false,
checked:selectedIndex===0,
style:{width:20,height:20,fontSize:20},
uncheckStyle:{color:'#aaa'},
checkStyle:{color:'red'}})),


(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableOpacity,{
activeOpacity:1,
style:styles.exampleRow,
onPress:function onPress(){_this10.setState({selectedIndex:1});}},

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:selectedIndex===1?{color:'#1ba9ba'}:null},'hasBorder: true - \u81EA\u5B9A\u4E49\u6837\u5F0F'),


(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Radio,{hasBorder:true,
style:{width:20,height:20,fontSize:14,padding:2,borderRadius:0},
checked:selectedIndex===1}))));




}}]);return RadioStyleExample;}(_qunarReactNative.Component);


var styles=_qunarReactNative.StyleSheet.create({
exampleRow:{
flexDirection:'row',
justifyContent:'space-between',
paddingTop:2,
paddingBottom:2}});



module.exports={
title:'Radio',
scroll:true,
examples:[{
subtitle:'默认Radio: 单选列表',
render:function render(){
return(_this11&&_this11.createElement||_qunarReactNative2.default.createElement)(RadioSingleExample,null);
}},
{
subtitle:'Radio(hasBorder={true}): 多选列表',
render:function render(){
return(_this11&&_this11.createElement||_qunarReactNative2.default.createElement)(RadioMultipleExample,null);
}},
{
subtitle:'混合特殊列表',
render:function render(){
return(_this11&&_this11.createElement||_qunarReactNative2.default.createElement)(RadioMixedExample,null);
}},
{
subtitle:'onPress回调',
render:function render(){
return(_this11&&_this11.createElement||_qunarReactNative2.default.createElement)(RadioCallbackExample,null);
}},
{
subtitle:'单选列表 自定义样式',
render:function render(){
return(_this11&&_this11.createElement||_qunarReactNative2.default.createElement)(RadioStyleExample,null);
}}]};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _this4=this;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}









var styles=_qunarReactNative.StyleSheet.create({
operationContainer:{
paddingHorizontal:10,
marginBottom:10,
flexDirection:'row',
height:30},

operationText:{
flex:1,
alignSelf:'center'},

operationTextHighlight:{
color:'#1ba9ba'},

itemText:{
padding:5,
color:'#fff',
alignSelf:'flex-end',
fontSize:32,
fontWeight:'bold'}});var



RefreshControlExample=function(_React$Component){_inherits(RefreshControlExample,_React$Component);

function RefreshControlExample(props){_classCallCheck(this,RefreshControlExample);var _this=_possibleConstructorReturn(this,(RefreshControlExample.__proto__||Object.getPrototypeOf(RefreshControlExample)).call(this,
props));

_this.state={
listData:getCoupleOfRandomColor(20)};return _this;

}_createClass(RefreshControlExample,[{key:'onRefresh',value:function onRefresh()

{var _this2=this;
setTimeout(function(){
_this2.setState({
listData:getCoupleOfRandomColor(20)});


var _random=Math.random();
_this2.refs.ScrollView.stopRefreshing({
result:_random>0.6?undefined:_random<0.3?true:false,
duration:3000});

},3000);
}},{key:'render',value:function render()

{var _this3=this;
var listContent=this.state.listData.map(function(item,index){
return(
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{height:50,backgroundColor:item},key:index},
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.itemText},index)));


});

var refreshControl=(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.RefreshControl,{
height:50,
pullStartContent:'\u81EA\u5B9A\u4E49\u4E0B\u62C9\u6587\u5B57',
pullContinueContent:'\u81EA\u5B9A\u4E49\u7EE7\u7EED\u62C9\u52A8\u6587\u5B57',
refreshingContent:'\u81EA\u5B9A\u4E49\u5237\u65B0\u6587\u5B57',
successContent:'\u81EA\u5B9A\u4E49\u6210\u529F\u6587\u5B57',
failContent:'\u81EA\u5B9A\u4E49\u5931\u8D25\u6587\u5B57',
style:{borderWidth:2,borderColor:'blue',height:100},
iconStyle:{color:'blue'},
textStyle:{color:'blue'},
onRefresh:this.onRefresh.bind(this)});

return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{flex:1,paddingTop:10}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.operationContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationText},'\u5F3A\u5236\u5237\u65B0'),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u5F3A\u5236\u5237\u65B0',onPress:function onPress(){return _this3.refs.ScrollView.startRefreshing();}})),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.operationContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationTextHighlight},'- \u53EF\u4EE5\u81EA\u5B9A\u4E49\u5185\u5BB9\u548C\u6837\u5F0F')),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.operationContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationTextHighlight},'- \u53EF\u4EE5\u8BBE\u7F6E\u5237\u65B0\u7ED3\u679C(\u6210\u529F/\u5931\u8D25/\u9ED8\u8BA4\u65E0)')),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.operationContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationTextHighlight},'- \u53EF\u4EE5\u8BBE\u7F6E\u5237\u65B0\u4E4B\u540E\u56DE\u5230\u9876\u90E8\u662F\u5426\u9700\u8981\u52A8\u753B\u548C\u52A8\u753B\u65F6\u95F4')),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.ScrollView,{
ref:'ScrollView',
style:{borderTopWidth:1,borderBottomWidth:1,borderColor:'#ffffff'},
refreshControl:refreshControl},
listContent)));



}}]);return RefreshControlExample;}(_qunarReactNative2.default.Component);


function getCoupleOfRandomColor(num){
var colors=[];

for(var i=0;i<num;i++){
colors.push(getRandomColor());
}

return colors;
}

function getRandomColor(){
var letters='3456789ABC'.split('');
var color='#';
for(var i=0;i<6;i++){
color+=letters[Math.floor(Math.random()*10)];
}
return color;
}

module.exports={
title:'RefreshControl',
examples:[{
render:function render(){
return(
(_this4&&_this4.createElement||_qunarReactNative2.default.createElement)(RefreshControlExample,null));

}}]};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _this3=this;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);










var _ExampleRender=__webpack_require__(4);var _ExampleRender2=_interopRequireDefault(_ExampleRender);
var _styles=__webpack_require__(3);var _styles2=_interopRequireDefault(_styles);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var exampleList={
'纵向滚动':__webpack_require__(66),
'横向滚动':__webpack_require__(67),
'分页滚动(轮播图必备)':__webpack_require__(68),
'contentInset':__webpack_require__(69),
'下拉刷新/加载更多':__webpack_require__(70),
'scrollTo':__webpack_require__(71),
'KeyboardDismiss':__webpack_require__(72),
'StickyHeader':__webpack_require__(73)};var










ScrollViewList=function(_React$Component){_inherits(ScrollViewList,_React$Component);function ScrollViewList(){_classCallCheck(this,ScrollViewList);return _possibleConstructorReturn(this,(ScrollViewList.__proto__||Object.getPrototypeOf(ScrollViewList)).apply(this,arguments));}_createClass(ScrollViewList,[{key:'goExampleScene',value:function goExampleScene(

example,exampleName,examplesType){
Ext.open('ExampleRender',{
title:example.title,
param:{
example:example,
name:exampleName,
type:examplesType}});


}},{key:'render',value:function render()

{var _this2=this;
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:_styles2.default.container},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.ScrollView,{style:_styles2.default.list},

Object.keys(exampleList).map(function(exampleName,i){return(
(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TouchableOpacity,{
key:i,
style:_styles2.default.listRow,
onPress:_this2.goExampleScene.bind(_this2,exampleList[exampleName],exampleName,'ScrollViewList')},
(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:_styles2.default.listRowText},exampleName)));}))));






}}]);return ScrollViewList;}(_qunarReactNative2.default.Component);


module.exports={
title:'ScrollView',
examples:[{
render:function render(){
return(
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(ScrollViewList,null));

}}],

exampleList:exampleList};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _this3=this;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);













var _reactNative=__webpack_require__(2);var _reactNative2=_interopRequireDefault(_reactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=_qunarReactNative.StyleSheet.create({
operationContainer:{
paddingBottom:5,
paddingHorizontal:10,
flexDirection:'row'},

operationText:{
flex:1,
alignSelf:'center'},

operationTextHighlight:{
color:'#1ba9ba'},

itemText:{
padding:5,
color:'#fff',
alignSelf:'flex-end',
fontSize:32,
fontWeight:'bold'}});var



ScrollViewExample=function(_React$Component){_inherits(ScrollViewExample,_React$Component);

function ScrollViewExample(props){_classCallCheck(this,ScrollViewExample);var _this=_possibleConstructorReturn(this,(ScrollViewExample.__proto__||Object.getPrototypeOf(ScrollViewExample)).call(this,
props));

_this.state={
data:getCoupleOfRandomColor(30),
qrn:true,
long:true,
alwaysBounceVertical:true,
alwaysBounceHorizontal:false,
bounces:true,
showsVerticalScrollIndicator:true,
showsHorizontalScrollIndicator:true};return _this;

}_createClass(ScrollViewExample,[{key:'switch',value:function _switch(

prop){
this.setState(_defineProperty({},
prop,!this.state[prop]));

}},{key:'render',value:function render()

{var _this2=this;

var ScrollViewComponent=this.state.qrn?_qunarReactNative.ScrollView:_reactNative2.default.ScrollView;
var content=this.state.data.map(function(item,index){
if(index>=(_this2.state.long?30:3)){
return;
}
return(
(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{height:50,backgroundColor:item},key:index},
(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.itemText},index)));


});

return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{flex:1,paddingTop:5}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.operationContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationText},'\xB7 ',(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationTextHighlight},this.state.qrn?'QRN':'RN'),' \u7684ScrollView'),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u5207\u6362',onPress:function onPress(){return _this2.switch('qrn');}})),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.operationContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationText},'\xB7 bounces ',(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationTextHighlight},this.state.bounces?'true':'false')),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u5207\u6362',onPress:function onPress(){return _this2.switch('bounces');}})),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.operationContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationText},'\xB7 \u5185\u5BB9\u957F\u5EA6 ',(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationTextHighlight},this.state.long?'足够':'不够'),' \u6EDA\u52A8'),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u5207\u6362',onPress:function onPress(){return _this2.switch('long');}})),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.operationContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationText},'\xB7 ',(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationTextHighlight},this.state.alwaysBounceVertical?'允许(默认)':'不允许(非默认)'),' \u7EB5\u5411\u5185\u5BB9\u4E0D\u8DB3\u65F6\u6EDA\u52A8(alwaysBounceVertical)'),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u5207\u6362',onPress:function onPress(){return _this2.switch('alwaysBounceVertical');}})),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.operationContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationText},'\xB7 ',(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationTextHighlight},this.state.alwaysBounceHorizontal?'允许(非默认)':'不允许(默认)'),' \u6A2A\u5411\u5185\u5BB9\u4E0D\u8DB3\u65F6\u6EDA\u52A8(alwaysBounceHorizontal)'),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u5207\u6362',onPress:function onPress(){return _this2.switch('alwaysBounceHorizontal');}})),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.operationContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationText},'\xB7 ',(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationTextHighlight},this.state.showsVerticalScrollIndicator?'显示(默认)':'不显示(非默认)'),' \u7EB5\u5411\u6EDA\u52A8\u6761showsVerticalScrollIndicator\uFF08\u957F\u5EA6\u4E0D\u591F\u6EDA\u52A8\u4E0D\u4F1A\u663E\u793A\uFF09'),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u5207\u6362',onPress:function onPress(){return _this2.switch('showsVerticalScrollIndicator');}})),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.operationContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationText},'\xB7 ',(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationTextHighlight},this.state.showsHorizontalScrollIndicator?'显示(默认)':'不显示(非默认)'),' \u6A2A\u5411\u6EDA\u52A8\u6761showsHorizontalScrollIndicator\uFF08\u957F\u5EA6\u4E0D\u591F\u6EDA\u52A8\u4E0D\u4F1A\u663E\u793A\uFF09'),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u5207\u6362',onPress:function onPress(){return _this2.switch('showsHorizontalScrollIndicator');}})),

(this&&this.createElement||_qunarReactNative2.default.createElement)(ScrollViewComponent,{
bounces:this.state.bounces,
alwaysBounceVertical:this.state.alwaysBounceVertical,
alwaysBounceHorizontal:this.state.alwaysBounceHorizontal,
showsVerticalScrollIndicator:this.state.showsVerticalScrollIndicator,
showsHorizontalScrollIndicator:this.state.showsHorizontalScrollIndicator},

content)));



}}]);return ScrollViewExample;}(_qunarReactNative2.default.Component);


function getCoupleOfRandomColor(num){
var colors=[];

for(var i=0;i<num;i++){
colors.push(getRandomColor());
}

return colors;
}

function getRandomColor(){
var letters='3456789ABC'.split('');
var color='#';
for(var i=0;i<6;i++){
color+=letters[Math.floor(Math.random()*10)];
}
return color;
}

module.exports={
title:'纵向滚动',
examples:[{
render:function render(){
return(
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(ScrollViewExample,null));

}}]};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _this3=this;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);













var _reactNative=__webpack_require__(2);var _reactNative2=_interopRequireDefault(_reactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=_qunarReactNative.StyleSheet.create({
operationContainer:{
paddingBottom:5,
paddingHorizontal:10,
flexDirection:'row'},

operationText:{
flex:1,
alignSelf:'center'},

operationTextHighlight:{
color:'#1ba9ba'},

itemText:{
padding:5,
color:'#fff',
alignSelf:'flex-end',
fontSize:26,
fontWeight:'bold'}});var



ScrollViewExample=function(_React$Component){_inherits(ScrollViewExample,_React$Component);

function ScrollViewExample(props){_classCallCheck(this,ScrollViewExample);var _this=_possibleConstructorReturn(this,(ScrollViewExample.__proto__||Object.getPrototypeOf(ScrollViewExample)).call(this,
props));

_this.state={
data:getCoupleOfRandomColor(30),
qrn:true,
long:true,
bounces:true,
alwaysBounceVertical:false,
alwaysBounceHorizontal:true,
showsVerticalScrollIndicator:true,
showsHorizontalScrollIndicator:true};return _this;

}_createClass(ScrollViewExample,[{key:'switch',value:function _switch(

prop){
this.setState(_defineProperty({},
prop,!this.state[prop]));

}},{key:'render',value:function render()

{var _this2=this;

var ScrollViewComponent=this.state.qrn?_qunarReactNative.ScrollView:_reactNative2.default.ScrollView;
var content=this.state.data.map(function(item,index){
if(index>=(_this2.state.long?30:3)){
return;
}
return(
(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{width:50,backgroundColor:item},key:index},
(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.itemText},index)));


});

return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{flex:1,paddingTop:5}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.operationContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationText},'\xB7 ',(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationTextHighlight},this.state.qrn?'QRN':'RN'),' \u7684ScrollView'),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u5207\u6362',onPress:function onPress(){return _this2.switch('qrn');}})),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.operationContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationText},'\xB7 bounces ',(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationTextHighlight},this.state.bounces?'true':'false')),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u5207\u6362',onPress:function onPress(){return _this2.switch('bounces');}})),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.operationContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationText},'\xB7 \u5185\u5BB9\u957F\u5EA6 ',(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationTextHighlight},this.state.long?'足够':'不够'),' \u6EDA\u52A8'),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u5207\u6362',onPress:function onPress(){return _this2.switch('long');}})),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.operationContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationText},'\xB7 ',(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationTextHighlight},this.state.alwaysBounceVertical?'允许(非默认)':'不允许(默认)'),' \u7EB5\u5411\u5185\u5BB9\u4E0D\u8DB3\u65F6\u6EDA\u52A8(alwaysBounceVertical)'),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u5207\u6362',onPress:function onPress(){return _this2.switch('alwaysBounceVertical');}})),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.operationContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationText},'\xB7 ',(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationTextHighlight},this.state.alwaysBounceHorizontal?'允许(默认)':'不允许(非默认)'),' \u6A2A\u5411\u5185\u5BB9\u4E0D\u8DB3\u65F6\u6EDA\u52A8(alwaysBounceHorizontal)'),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u5207\u6362',onPress:function onPress(){return _this2.switch('alwaysBounceHorizontal');}})),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.operationContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationText},'\xB7 ',(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationTextHighlight},this.state.showsVerticalScrollIndicator?'显示(默认)':'不显示(非默认)'),' \u7EB5\u5411\u6EDA\u52A8\u6761showsVerticalScrollIndicator\uFF08\u957F\u5EA6\u4E0D\u591F\u6EDA\u52A8\u4E0D\u4F1A\u663E\u793A\uFF09'),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u5207\u6362',onPress:function onPress(){return _this2.switch('showsVerticalScrollIndicator');}})),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.operationContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationText},'\xB7 ',(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationTextHighlight},this.state.showsHorizontalScrollIndicator?'显示(默认)':'不显示(非默认)'),' \u6A2A\u5411\u6EDA\u52A8\u6761showsHorizontalScrollIndicator\uFF08\u957F\u5EA6\u4E0D\u591F\u6EDA\u52A8\u4E0D\u4F1A\u663E\u793A\uFF09'),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u5207\u6362',onPress:function onPress(){return _this2.switch('showsHorizontalScrollIndicator');}})),

(this&&this.createElement||_qunarReactNative2.default.createElement)(ScrollViewComponent,{horizontal:true,
bounces:this.state.bounces,
alwaysBounceVertical:this.state.alwaysBounceVertical,
alwaysBounceHorizontal:this.state.alwaysBounceHorizontal,
showsVerticalScrollIndicator:this.state.showsVerticalScrollIndicator,
showsHorizontalScrollIndicator:this.state.showsHorizontalScrollIndicator,
contentContainerStyle:{height:200}},
content)));



}}]);return ScrollViewExample;}(_qunarReactNative2.default.Component);


function getCoupleOfRandomColor(num){
var colors=[];

for(var i=0;i<num;i++){
colors.push(getRandomColor());
}

return colors;
}

function getRandomColor(){
var letters='3456789ABC'.split('');
var color='#';
for(var i=0;i<6;i++){
color+=letters[Math.floor(Math.random()*10)];
}
return color;
}

module.exports={
title:'横向滚动',
examples:[{
render:function render(){
return(
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(ScrollViewExample,null));

}}]};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _this3=this;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);
















var _reactNative=__webpack_require__(2);var _reactNative2=_interopRequireDefault(_reactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var _Dimensions$get=_qunarReactNative.Dimensions.get('window'),windowWidth=_Dimensions$get.width,windowHeight=_Dimensions$get.height;

var styles=_qunarReactNative.StyleSheet.create({
operationContainer:{
paddingBottom:5,
paddingHorizontal:10,
flexDirection:'row'},

operationText:{
flex:1,
alignSelf:'center'},

operationTextHighlight:{
color:'#1ba9ba'}});var



ScrollViewExample=function(_React$Component){_inherits(ScrollViewExample,_React$Component);

function ScrollViewExample(props){_classCallCheck(this,ScrollViewExample);var _this=_possibleConstructorReturn(this,(ScrollViewExample.__proto__||Object.getPrototypeOf(ScrollViewExample)).call(this,
props));

_this.state={
qrn:true};return _this;

}_createClass(ScrollViewExample,[{key:'switch',value:function _switch(

prop){
this.setState(_defineProperty({},
prop,!this.state[prop]));

}},{key:'render',value:function render()

{var _this2=this;

var ScrollViewComponent=this.state.qrn?_qunarReactNative.ScrollView:_reactNative2.default.ScrollView;

var scrollItemStyle={
height:200,
alignItems:'center',
justifyContent:'center'},
scrollItemTextStyle={
color:'#fff',
fontSize:30};


return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{flex:1,paddingTop:5}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.operationContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationText},'\u5F53\u524D: ',(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationTextHighlight},this.state.qrn?'QRN':'RN'),' \u7684ScrollView'),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u5207\u6362',onPress:function onPress(){return _this2.switch('qrn');}})),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{height:200}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(ScrollViewComponent,{
pagingEnabled:true,
onScrollAnimationEnd:function onScrollAnimationEnd(e){return console.log('onScrollAnimationEnd',e);}},


new Array(15).fill('').map(function(item,index){return(
(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{key:index,style:[scrollItemStyle,{backgroundColor:getRandomColor()}]},
(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[scrollItemTextStyle]},'\u7EB5\u5411\u6EDA\u52A8',index)));}))),





(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{height:200}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(ScrollViewComponent,{
horizontal:true,
pagingEnabled:true,
onScrollAnimationEnd:function onScrollAnimationEnd(e){return console.log('onScrollAnimationEnd',e);}},

new Array(15).fill('').map(function(item,index){return(
(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{key:index,style:[scrollItemStyle,{width:windowWidth,backgroundColor:getRandomColor()}]},
(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:[scrollItemTextStyle]},'\u6A2A\u5411\u6EDA\u52A8',index)));})))));







}}]);return ScrollViewExample;}(_qunarReactNative2.default.Component);


function getRandomColor(){
var letters='3456789ABC'.split('');
var color='#';
for(var i=0;i<6;i++){
color+=letters[Math.floor(Math.random()*10)];
}
return color;
}

module.exports={
title:'PagingEnabled ScrollView',
examples:[{
render:function render(){
return(
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(ScrollViewExample,null));

}}]};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _this3=this;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);













var _reactNative=__webpack_require__(2);var _reactNative2=_interopRequireDefault(_reactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=_qunarReactNative.StyleSheet.create({
operationContainer:{
paddingBottom:5,
paddingHorizontal:10,
flexDirection:'row',
height:30},

operationText:{
flex:1,
alignSelf:'center'},

operationTextHighlight:{
color:'#1ba9ba'}});var



ScrollViewExample=function(_React$Component){_inherits(ScrollViewExample,_React$Component);

function ScrollViewExample(props){_classCallCheck(this,ScrollViewExample);var _this=_possibleConstructorReturn(this,(ScrollViewExample.__proto__||Object.getPrototypeOf(ScrollViewExample)).call(this,
props));

_this.state={
qrn:true};return _this;

}_createClass(ScrollViewExample,[{key:'switch',value:function _switch(

prop){
this.setState(_defineProperty({},
prop,!this.state[prop]));

}},{key:'render',value:function render()

{var _this2=this;

var ScrollViewComponent=this.state.qrn?_qunarReactNative.ScrollView:_reactNative2.default.ScrollView;
var content=new Array(30).fill('').map(function(item,index){return(
(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{height:50,backgroundColor:getRandomColor()},key:index}));});


return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{flex:1,paddingTop:5}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.operationContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationText},'\xB7 ',(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationTextHighlight},this.state.qrn?'QRN':'RN'),' \u7684ScrollView'),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u5207\u6362',onPress:function onPress(){return _this2.switch('qrn');}})),

(this&&this.createElement||_qunarReactNative2.default.createElement)(ScrollViewComponent,{
contentOffset:{x:0,y:-50},
contentInset:{top:50,left:0,bottom:50,right:0}},
content),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{height:50,backgroundColor:'black',opacity:0.6,position:'absolute',top:35,left:0,right:0,alignItems:'center',justifyContent:'center'}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:{color:'#fff',fontSize:16,paddingHorizontal:10}},'\u6211\u662F\u7528\u6765\u505A\u906E\u6321\u7684\uFF0C\u4E0A\u6ED1\u8BD5\u8BD5\u5427\uFF0C\u7136\u540E\u4E0B\u6ED1\u5230\u9876\u90E8')),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{height:50,backgroundColor:'black',opacity:0.6,position:'absolute',bottom:0,left:0,right:0,alignItems:'center',justifyContent:'center'}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:{color:'#fff',fontSize:16,paddingHorizontal:10}},'\u6211\u662F\u7528\u6765\u505A\u906E\u6321\u7684\uFF0C\u4E0B\u6ED1\u8BD5\u8BD5\u5427\uFF0C\u7136\u540E\u4E0A\u6ED1\u5230\u9876\u90E8'))));



}}]);return ScrollViewExample;}(_qunarReactNative2.default.Component);


function getRandomColor(){
var letters='3456789ABC'.split('');
var color='#';
for(var i=0;i<6;i++){
color+=letters[Math.floor(Math.random()*10)];
}
return color;
}

module.exports={
title:'ContentInset ScrollView',
examples:[{
render:function render(){
return(
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(ScrollViewExample,null));

}}]};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _this3=this;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}












var styles=_qunarReactNative.StyleSheet.create({
operationContainer:{
paddingHorizontal:10,
marginBottom:10,
flexDirection:'row',
height:30},

operationText:{
flex:1,
alignSelf:'center'},

operationTextHighlight:{
color:'#1ba9ba'},

itemText:{
padding:5,
color:'#fff',
alignSelf:'flex-end',
fontSize:32,
fontWeight:'bold'}});var



ScrollViewExample=function(_React$Component){_inherits(ScrollViewExample,_React$Component);

function ScrollViewExample(props){_classCallCheck(this,ScrollViewExample);var _this=_possibleConstructorReturn(this,(ScrollViewExample.__proto__||Object.getPrototypeOf(ScrollViewExample)).call(this,
props));

_this.state={
refreshing:false,
loading:false,
listData:getCoupleOfRandomColor(20),
noMore:false};return _this;

}_createClass(ScrollViewExample,[{key:'onRefresh',value:function onRefresh()

{
this.setState({
refreshing:true});

}},{key:'onLoad',value:function onLoad()

{
this.setState({
loading:true});

}},{key:'changeRefreshState',value:function changeRefreshState()

{
if(!this.state.refreshing){
this.refs.ScrollView.startRefreshing();
this.setState({
refreshing:true});

}else{
this.refs.ScrollView.stopRefreshing({
result:Math.random()>0.5?true:false});


this.setState({
refreshing:false,
listData:getCoupleOfRandomColor(20)});


if(this.state.isLoading){
this.refs.ScrollView.stopLoading();

this.setState({
loading:false});

}
}
}},{key:'changeLoadState',value:function changeLoadState()

{
if(!this.state.loading){
this.refs.ScrollView.startLoading();
this.setState({
loading:true});

return;
}else{
this.refs.ScrollView.stopLoading();

this.setState({
loading:false,
listData:this.state.listData.concat(getCoupleOfRandomColor(20))});


if(this.state.refreshing){
this.refs.ScrollView.stopRefreshing({
result:Math.random()>0.5?true:false});

this.setState({
refreshing:false});

}
}
}},{key:'changeNoMoreState',value:function changeNoMoreState()

{
this.setState({
noMore:!this.state.noMore});

}},{key:'render',value:function render()

{var _this2=this;
var listContent=this.state.listData.map(function(item,index){
return(
(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{height:50,backgroundColor:item},key:index},
(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.itemText},index)));


});

return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{flex:1,paddingTop:10}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.operationContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationText},'\u5F3A\u5236\u5237\u65B0\uFF1A\u8BE5\u529F\u80FD\u4F1A\u81EA\u52A8\u56DE\u5230\u9876\u90E8\uFF0C\u5E76\u5F00\u542F\u5237\u65B0',this.state.refreshing?'(正在刷新，无法强制刷新)':''),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:this.state.refreshing?'无法刷新':'强制刷新',disabled:this.state.refreshing,onPress:function onPress(){return _this2.changeRefreshState();}})),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.operationContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationText},'\u505C\u6B62\u5237\u65B0\uFF1A\u8BE5\u529F\u80FD\u4E5F\u4F1A\u81EA\u52A8\u56DE\u5230\u9876\u90E8',!this.state.refreshing?'(没有刷新，无法停止刷新)':''),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:this.state.refreshing?'停止刷新':'无法停止',disabled:!this.state.refreshing,onPress:function onPress(){return _this2.changeRefreshState();}})),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.ScrollView,{
ref:'ScrollView',
style:{borderTopWidth:1,borderBottomWidth:1,borderColor:'#ffffff'},
refreshControl:
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.RefreshControl,{onRefresh:this.onRefresh.bind(this)}),

loadControl:
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.LoadControl,{noMore:this.state.noMore,onLoad:this.onLoad.bind(this),onPress:function onPress(){
_this2.refs.ScrollView.startLoading();
_this2.setState({
loading:true});

}})},

listContent),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.operationContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationText},'\u5F3A\u5236\u52A0\u8F7D\uFF1A',this.state.loading?'(正在加载，无法强制加载)':''),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:this.state.loading?'无法加载':'强制加载',disabled:this.state.loading,onPress:function onPress(){return _this2.changeLoadState();}})),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.operationContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationText},'\u505C\u6B62\u52A0\u8F7D\uFF1A',!this.state.loading?'(没有加载，无法停止加载)':''),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:this.state.loading?'停止加载':'无法停止',disabled:!this.state.loading,onPress:function onPress(){return _this2.changeLoadState();}})),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.operationContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationText},'\u6CA1\u6709\u66F4\u591A\uFF1A\u6B64\u5C5E\u6027\u7528\u6765\u63A7\u5236\u662F\u5426\u8FD8\u6709\u66F4\u591A\u5185\u5BB9\uFF0C\u6CA1\u6709\u5C31\u65E0\u6CD5\u52A0\u8F7D\u66F4\u591A\u4E86(',this.state.noMore?'没有更多了':'还有更多的',')'),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:this.state.noMore?'有数据了！':'没数据了！',onPress:function onPress(){return _this2.changeNoMoreState();}}))));



}}]);return ScrollViewExample;}(_qunarReactNative2.default.Component);


function getCoupleOfRandomColor(num){
var colors=[];

for(var i=0;i<num;i++){
colors.push(getRandomColor());
}

return colors;
}

function getRandomColor(){
var letters='3456789ABC'.split('');
var color='#';
for(var i=0;i<6;i++){
color+=letters[Math.floor(Math.random()*10)];
}
return color;
}

module.exports={
title:'下拉刷新/加载更多',
examples:[{
render:function render(){
return(
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(ScrollViewExample,null));

}}]};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _this3=this;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);














var _reactNative=__webpack_require__(2);var _reactNative2=_interopRequireDefault(_reactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=_qunarReactNative.StyleSheet.create({
operationContainer:{
paddingBottom:5,
paddingHorizontal:10,
flexDirection:'row'},

operationText:{
flex:1,
alignSelf:'center'},

operationTextHighlight:{
color:'#1ba9ba'},

itemText:{
padding:5,
color:'#fff',
alignSelf:'flex-end',
fontSize:32,
fontWeight:'bold'}});var



ScrollViewExample=function(_React$Component){_inherits(ScrollViewExample,_React$Component);

function ScrollViewExample(props){_classCallCheck(this,ScrollViewExample);var _this=_possibleConstructorReturn(this,(ScrollViewExample.__proto__||Object.getPrototypeOf(ScrollViewExample)).call(this,
props));

_this.state={
qrn:true,
animated:true,
data:getCoupleOfRandomColor(50)};return _this;

}_createClass(ScrollViewExample,[{key:'switch',value:function _switch(

prop){
this.setState(_defineProperty({},
prop,!this.state[prop]));

}},{key:'render',value:function render()

{var _this2=this;

var ScrollViewComponent=this.state.qrn?_qunarReactNative.ScrollView:_reactNative2.default.ScrollView;
var content=this.state.data.map(function(item,index){
return(
(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{height:50,backgroundColor:item},key:index},
(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.itemText},index)));


});

return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{flex:1,paddingTop:5}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.operationContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationText},'scrollTo\u53EF\u4EE5\u6EDA\u52A8\u5230\u67D0\u4E00\u4E2A\u4F4D\u7F6E\uFF0CscrollTo\u9ED8\u8BA4\u662F\u5E26\u52A8\u753B\u7684\u3002\u901A\u8FC7onScrollAnimationEnd\u53EF\u4EE5\u76D1\u542C\u5230\u6EDA\u52A8\u52A8\u753B\u7ED3\u675F\u7684\u4E8B\u4EF6\u3002'),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u6EDA\u52A8',onPress:function onPress(){return _this2.refs.scrollView.scrollTo({y:Math.random()*2000,animated:_this2.state.animated});}})),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.operationContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationText},'\u5F53\u524DscrollTo',(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationTextHighlight},this.state.animated?'带动画':'不带动画'),' \uFF08\u9ED8\u8BA4\u662F\u5E26\u52A8\u753B\u7684\uFF0C\u901A\u8FC7onScrollAnimationEnd\u53EF\u4EE5\u76D1\u542C\u5230\u6EDA\u52A8\u52A8\u753B\u7ED3\u675F\u7684\u4E8B\u4EF6\u3002\u5982\u679C\u4E0D\u5E26\u52A8\u753B\uFF0ConScrollAnimationEnd\u5219\u65E0\u6CD5\u76D1\u542C\u5230\u7ED3\u675F\u4E8B\u4EF6\u3002\uFF09'),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u5207\u6362',onPress:function onPress(){return _this2.switch('animated');}})),

(this&&this.createElement||_qunarReactNative2.default.createElement)(ScrollViewComponent,{ref:'scrollView',
onScrollAnimationEnd:function onScrollAnimationEnd(){return _qunarReactNative.Toast.show('滚动结束了',1000,_qunarReactNative.Toast.BOTTOM);}},
content)));



}}]);return ScrollViewExample;}(_qunarReactNative2.default.Component);


function getCoupleOfRandomColor(num){
var colors=[];

for(var i=0;i<num;i++){
colors.push(getRandomColor());
}

return colors;
}

function getRandomColor(){
var letters='3456789ABC'.split('');
var color='#';
for(var i=0;i<6;i++){
color+=letters[Math.floor(Math.random()*10)];
}
return color;
}

module.exports={
title:'scrollTo',
examples:[{
render:function render(){
return(
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(ScrollViewExample,null));

}}]};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _this3=this;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);














var _reactNative=__webpack_require__(2);var _reactNative2=_interopRequireDefault(_reactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=_qunarReactNative.StyleSheet.create({
operationContainer:{
paddingBottom:5,
paddingHorizontal:10,
flexDirection:'row',
height:30},

operationText:{
flex:1,
alignSelf:'center'},

operationTextHighlight:{
color:'#1ba9ba'},

textInput:{
flex:1,
height:25,
margin:10,
marginTop:20,
marginBottom:20,
borderWidth:1,
borderColor:'#eee'},

textContaier:{
flexDirection:'row'}});var



KeyboardExample=function(_React$Component){_inherits(KeyboardExample,_React$Component);

function KeyboardExample(props){_classCallCheck(this,KeyboardExample);var _this=_possibleConstructorReturn(this,(KeyboardExample.__proto__||Object.getPrototypeOf(KeyboardExample)).call(this,
props));

_this.state={
qrn:true,
keyboardDismissMode:false,
keyboardShouldPersistTaps:true};return _this;

}_createClass(KeyboardExample,[{key:'switch',value:function _switch(

prop){
this.setState(_defineProperty({},
prop,!this.state[prop]));

}},{key:'render',value:function render()

{var _this2=this;

var ScrollViewComponent=this.state.qrn?_qunarReactNative.ScrollView:_reactNative2.default.ScrollView;
var content=new Array(5).fill('').map(function(item,index){return(
(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{height:50,backgroundColor:getRandomColor()},key:index}));});


return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{flex:1,paddingTop:5}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.operationContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationText},'\xB7 ',(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationTextHighlight},this.state.qrn?'QRN':'RN'),' \u7684ScrollView'),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u5207\u6362',onPress:function onPress(){return _this2.switch('qrn');}})),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.operationContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationText},'\xB7 keyboardDismissMode: ',(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationTextHighlight},this.state.keyboardDismissMode?'on-drag（非默认）':'none（默认）')),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u5207\u6362',onPress:function onPress(){return _this2.switch('keyboardDismissMode');}})),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.operationContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationText},'\xB7 keyboardShouldPersistTaps: ',(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationTextHighlight},this.state.keyboardShouldPersistTaps?'true（默认）':'false（非默认）')),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u5207\u6362',onPress:function onPress(){return _this2.switch('keyboardShouldPersistTaps');}})),

(this&&this.createElement||_qunarReactNative2.default.createElement)(ScrollViewComponent,{keyboardShouldPersistTaps:this.state.keyboardShouldPersistTaps,keyboardDismissMode:this.state.keyboardDismissMode?'on-drag':'none'},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.textContaier},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TextInput,{style:styles.textInput}),(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{onPress:function onPress(){return console.log(0);}})),

content,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.textContaier},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TextInput,{style:styles.textInput}),(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{onPress:function onPress(){return console.log(0);}})),

content,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.textContaier},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TextInput,{style:styles.textInput}),(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{onPress:function onPress(){return console.log(0);}})),

content,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.textContaier},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TextInput,{style:styles.textInput}),(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{onPress:function onPress(){return console.log(0);}})),

content,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.textContaier},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TextInput,{style:styles.textInput}),(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{onPress:function onPress(){return console.log(0);}})),

content)));



}}]);return KeyboardExample;}(_qunarReactNative2.default.Component);


function getRandomColor(){
var letters='3456789ABC'.split('');
var color='#';
for(var i=0;i<6;i++){
color+=letters[Math.floor(Math.random()*10)];
}
return color;
}

module.exports={
title:'ContentInset ScrollView',
examples:[{
render:function render(){
return(
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(KeyboardExample,null));

}}]};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _this3=this;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);














var _reactNative=__webpack_require__(2);var _reactNative2=_interopRequireDefault(_reactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=_qunarReactNative.StyleSheet.create({
operationContainer:{
paddingBottom:5,
paddingHorizontal:10,
flexDirection:'row'},

operationText:{
flex:1,
alignSelf:'center'},

operationTextHighlight:{
color:'#1ba9ba'},

itemText:{
padding:5,
color:'#fff',
alignSelf:'flex-end',
fontSize:32,
fontWeight:'bold'},

listIndex:{
backgroundColor:'#1ba9ba',
color:'#ffffff',
padding:5,
fontSize:14},

listItem:{
padding:10,
fontSize:16}});



function getRandomList(){
var list=[];

for(var i=0;i<26;i++){
list.push({
type:'index',
content:String.fromCharCode(65+i)});

var randomItems=Math.random()*5+1;

for(var j=0;j<randomItems;j++){
list.push({
type:'item',
content:String.fromCharCode(65+i)+j});

}
}
return list;
}var

ScrollViewExample=function(_React$Component){_inherits(ScrollViewExample,_React$Component);

function ScrollViewExample(props){_classCallCheck(this,ScrollViewExample);var _this=_possibleConstructorReturn(this,(ScrollViewExample.__proto__||Object.getPrototypeOf(ScrollViewExample)).call(this,
props));

_this.state={
qrn:true,
list:getRandomList()};return _this;

}_createClass(ScrollViewExample,[{key:'switch',value:function _switch(

prop){
this.setState(_defineProperty({},
prop,!this.state[prop]));

}},{key:'render',value:function render()

{var _this2=this;
var ScrollViewComponent=this.state.qrn?_qunarReactNative.ScrollView:_reactNative2.default.ScrollView;

var content=[],
stickyHeaderIndices=[];

for(var i=0,len=this.state.list.length;i<len;i++){
var item=this.state.list[i];

if(item.type=='index'){
var index=i;
stickyHeaderIndices.push(index);
}

content.push(item.type=='index'?
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{key:i},(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.listIndex},item.content)):
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{key:i},(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.listItem},item.content)));
}

return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{flex:1,paddingTop:5}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.operationContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationText},'\xB7 ',(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationTextHighlight},this.state.qrn?'QRN':'RN'),' \u7684ScrollView'),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u5207\u6362',onPress:function onPress(){return _this2.switch('qrn');}})),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.operationContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationText},'\xB7 \u968F\u673A\u8BBE\u7F6E\u5185\u5BB9'),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u8BBE\u7F6E',onPress:function onPress(){return _this2.setState({list:getRandomList()});}})),

(this&&this.createElement||_qunarReactNative2.default.createElement)(ScrollViewComponent,{stickyHeaderIndices:stickyHeaderIndices},
content)));



}}]);return ScrollViewExample;}(_qunarReactNative2.default.Component);


module.exports={
title:'StickyHeader ScrollView',
examples:[{
render:function render(){
return(
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(ScrollViewExample,null));

}}]};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _this2=this;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

SliderExampleItem=function(_Component){_inherits(SliderExampleItem,_Component);
function SliderExampleItem(props){_classCallCheck(this,SliderExampleItem);var _this=_possibleConstructorReturn(this,(SliderExampleItem.__proto__||Object.getPrototypeOf(SliderExampleItem)).call(this,
props));

_this.state={
sliderValue:0};return _this;

}_createClass(SliderExampleItem,[{key:'render',value:function render()
{var _props=
this.props,step=_props.step,minimumValue=_props.minimumValue,maximumValue=_props.maximumValue;

return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.valueText},this.state.sliderValue),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Slider,{
step:step,
value:this.state.sliderValue,
minimumValue:minimumValue,
maximumValue:maximumValue,
onValueChange:this.onValueChange.bind(this),
onSlidingComplete:this.onSlidingComplete.bind(this)})));



}},{key:'onValueChange',value:function onValueChange(
v){
this.setState({
sliderValue:v});

}},{key:'onSlidingComplete',value:function onSlidingComplete(
v){
console.log(v);
}}]);return SliderExampleItem;}(_qunarReactNative.Component);


var styles=_qunarReactNative.StyleSheet.create({
valueText:{
marginBottom:12,
textAlign:'center'}});



module.exports={
title:'Slider',
scroll:true,
examples:[{
subtitle:'Default settings',
render:function render(){
return(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(SliderExampleItem,null);
}},
{
subtitle:'minimumValue: -1, maximumValue: 2',
render:function render(){
return(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(SliderExampleItem,{minimumValue:0,maximumValue:24,step:1});
}},
{
subtitle:'step: 0.25',
render:function render(){
return(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(SliderExampleItem,{step:0.25});
}}]};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

















var React=__webpack_require__(2);var

Switch=


React.Switch,Text=React.Text,View=React.View;

var BasicSwitchExample=React.createClass({displayName:'BasicSwitchExample',
getInitialState:function getInitialState(){
return{
trueSwitchIsOn:true,
falseSwitchIsOn:false};

},
render:function render(){var _this=this;
return(
(this&&this.createElement||React.createElement)(View,null,
(this&&this.createElement||React.createElement)(Switch,{
onValueChange:function onValueChange(value){return _this.setState({falseSwitchIsOn:value});},
style:{marginBottom:10},
value:this.state.falseSwitchIsOn}),
(this&&this.createElement||React.createElement)(Switch,{
onValueChange:function onValueChange(value){return _this.setState({trueSwitchIsOn:value});},
value:this.state.trueSwitchIsOn})));


}});


var DisabledSwitchExample=React.createClass({displayName:'DisabledSwitchExample',
render:function render(){
return(
(this&&this.createElement||React.createElement)(View,null,
(this&&this.createElement||React.createElement)(Switch,{
disabled:true,
style:{marginBottom:10},
value:true}),
(this&&this.createElement||React.createElement)(Switch,{
disabled:true,
value:false})));


}});


var ColorSwitchExample=React.createClass({displayName:'ColorSwitchExample',
getInitialState:function getInitialState(){
return{
colorTrueSwitchIsOn:true,
colorFalseSwitchIsOn:false};

},
render:function render(){var _this2=this;
return(
(this&&this.createElement||React.createElement)(View,null,
(this&&this.createElement||React.createElement)(Switch,{
onValueChange:function onValueChange(value){return _this2.setState({colorFalseSwitchIsOn:value});},
onTintColor:'#1BA9BA',
style:{marginBottom:10},
thumbTintColor:'#0000ff',
tintColor:'#ff0000',
value:this.state.colorFalseSwitchIsOn}),
(this&&this.createElement||React.createElement)(Switch,{
onValueChange:function onValueChange(value){return _this2.setState({colorTrueSwitchIsOn:value});},
onTintColor:'#1BA9BA',
thumbTintColor:'#0000ff',
tintColor:"#ff0000",
value:this.state.colorTrueSwitchIsOn})));


}});


var EventSwitchExample=React.createClass({displayName:'EventSwitchExample',
getInitialState:function getInitialState(){
return{
eventSwitchIsOn:false,
eventSwitchRegressionIsOn:true};

},
render:function render(){var _this3=this;
return(
(this&&this.createElement||React.createElement)(View,{style:{flexDirection:'row',justifyContent:'space-around'}},
(this&&this.createElement||React.createElement)(View,null,
(this&&this.createElement||React.createElement)(Switch,{
onValueChange:function onValueChange(value){return _this3.setState({eventSwitchIsOn:value});},
style:{marginBottom:10},
value:this.state.eventSwitchIsOn}),
(this&&this.createElement||React.createElement)(Switch,{
onValueChange:function onValueChange(value){return _this3.setState({eventSwitchIsOn:value});},
style:{marginBottom:10},
value:this.state.eventSwitchIsOn}),
(this&&this.createElement||React.createElement)(Text,null,this.state.eventSwitchIsOn?'On':'Off')),

(this&&this.createElement||React.createElement)(View,null,
(this&&this.createElement||React.createElement)(Switch,{
onValueChange:function onValueChange(value){return _this3.setState({eventSwitchRegressionIsOn:value});},
style:{marginBottom:10},
value:this.state.eventSwitchRegressionIsOn}),
(this&&this.createElement||React.createElement)(Switch,{
onValueChange:function onValueChange(value){return _this3.setState({eventSwitchRegressionIsOn:value});},
style:{marginBottom:10},
value:this.state.eventSwitchRegressionIsOn}),
(this&&this.createElement||React.createElement)(Text,null,this.state.eventSwitchRegressionIsOn?'On':'Off'))));



}});


module.exports={
title:'Switch',
scroll:true,
examples:[
{
subtitle:'Switches can be set to true or false',
render:function render(){
return(this&&this.createElement||React.createElement)(BasicSwitchExample,null);
}},

{
subtitle:'Switches can be disabled',
render:function render(){
return(this&&this.createElement||React.createElement)(DisabledSwitchExample,null);
}},

{
subtitle:'Switch with custom color',
render:function render(){
return(this&&this.createElement||React.createElement)(ColorSwitchExample,null);
}},

{
subtitle:'Change events can be detected',
render:function render(){
return(this&&this.createElement||React.createElement)(EventSwitchExample,null);
}},

{
subtitle:'Switches are controlled components',
render:function render(){
return(this&&this.createElement||React.createElement)(Switch,null);
}}]};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _this3=this;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

TabBarExample=function(_React$Component){_inherits(TabBarExample,_React$Component);
function TabBarExample(props){_classCallCheck(this,TabBarExample);var _this=_possibleConstructorReturn(this,(TabBarExample.__proto__||Object.getPrototypeOf(TabBarExample)).call(this,
props));
_this.state={
selectedTab:'wifi',
badgeVisible:true};return _this;

}_createClass(TabBarExample,[{key:'renderIcon',value:function renderIcon(

tab){
var iconfonts={
wifi:'\uF04B',
find:'\uF067',
money:'\uF238'};

return(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:{fontFamily:'qunar_react_native',fontSize:22}},iconfonts[tab]);
}},{key:'render',value:function render()

{var _this2=this;
var tabs=['wifi','find','money'];

return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TabBar,{
style:styles.tabBar,
barTintColor:'#fff'},

tabs.map(function(tab,i){return(
(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TabBar.item,{
key:i,
title:tab,
badge:tab==='find'&&_this2.state.badgeVisible?'1':undefined,
selected:_this2.state.selectedTab===tab,
onPress:function onPress(){return _this2.onTabPress(tab);},
renderIcon:function renderIcon(){return _this2.renderIcon(tab);},
titleStyle:{fontSize:14},
iconStyle:{fontSize:22}},

_this2.renderPageContent(tab)));})));




}},{key:'renderPageContent',value:function renderPageContent(

pageText){
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.pageContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:[styles.pageContent,{backgroundColor:getRandomColor()}]},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.pageContentText},'\u5F53\u524D\u9875\u9762: ',pageText))));




function getRandomColor(){
var letters='3456789ABC'.split('');
var color='#';
for(var i=0;i<6;i++){
color+=letters[Math.floor(Math.random()*10)];
}
return color;
}
}},{key:'onTabPress',value:function onTabPress(

tab){
if(tab==='find'){
this.state.badgeVisible=false;
}

this.setState({
selectedTab:tab,
badgeVisible:this.state.badgeVisible});

}}]);return TabBarExample;}(_qunarReactNative2.default.Component);


var styles=_qunarReactNative.StyleSheet.create({
tabBar:{
flex:1,
borderTopWidth:1,
borderColor:'#ccc',
backgroundColor:'#ddd'},

pageContainer:{
flex:1},

pageContent:{
flex:1,
alignItems:'center',
justifyContent:'center'},

pageContentText:{
fontSize:20,
color:'#fff'}});



module.exports={
title:'TabBar',
examples:[{
render:function render(){
return(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(TabBarExample,null);
}}]};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _this2=this;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

TabExampleItem=function(_Component){_inherits(TabExampleItem,_Component);

function TabExampleItem(props){_classCallCheck(this,TabExampleItem);var _this=_possibleConstructorReturn(this,(TabExampleItem.__proto__||Object.getPrototypeOf(TabExampleItem)).call(this,
props));

_this.state={
selectedIndex:_this.props.selectedIndex,
value:typeof _this.props.selectedIndex!=='undefined'?_this.props.values[_this.props.selectedIndex]:undefined};return _this;

}_createClass(TabExampleItem,[{key:'render',value:function render()

{var _props=
this.props,values=_props.values,tintColor=_props.tintColor,enabled=_props.enabled,momentary=_props.momentary,selectedIndex=_props.selectedIndex,tintTextColor=_props.tintTextColor;

return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Tab,{
values:values,
tintColor:tintColor,
enabled:enabled,
momentary:momentary,
tintTextColor:tintTextColor,
selectedIndex:this.state.selectedIndex,
onChange:this._onChange.bind(this)}),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.text},'Value: ',
this.state.value,'  Index: ',this.state.selectedIndex)));




}},{key:'_onChange',value:function _onChange(

event,index,value){
this.setState({
selectedIndex:index,
value:value});

}}]);return TabExampleItem;}(_qunarReactNative.Component);
;

var styles=_qunarReactNative.StyleSheet.create({
text:{
fontSize:14,
textAlign:'center',
fontWeight:'500',
margin:10}});



module.exports={
title:'Tab',
scroll:true,
examples:[{
subtitle:'Tab can have values',
render:function render(){
return(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(TabExampleItem,{values:['One','Two']});
}},
{
subtitle:'Tab can have many values',
render:function render(){
return(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(TabExampleItem,{values:['One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten']});
}},
{
subtitle:'Tab can have a pre-selected value',
render:function render(){
return(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(TabExampleItem,{values:['One','Two','Three'],selectedIndex:2});
}},
{
subtitle:'Tab can be momentary',
render:function render(){
return(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(TabExampleItem,{values:['One','Two','Three'],momentary:true});
}},
{
subtitle:'Tab can be disabled',
render:function render(){
return(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(TabExampleItem,{values:['One','Two','Three'],selectedIndex:0,enabled:false});
}},
{
subtitle:'Custom colors can be provided',
render:function render(){
return(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(TabExampleItem,{values:['One','Two','Three'],tintColor:'gray',tintTextColor:'red',selectedIndex:0});
}},
{
subtitle:'Change events can be detected',
render:function render(){
return(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(TabExampleItem,{values:['One','Two','Three'],selectedIndex:0});
}}]};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _this3=this;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=_qunarReactNative.StyleSheet.create({
operationContainer:{
paddingBottom:5,
paddingHorizontal:10,
flexDirection:'row'},

operationText:{
flex:1,
alignSelf:'center'},

operationTextHighlight:{
color:'#1ba9ba'},

itemText:{
padding:5,
color:'#fff',
alignSelf:'flex-end',
fontSize:32,
fontWeight:'bold'}});var



TimePickerExample=function(_Component){_inherits(TimePickerExample,_Component);
function TimePickerExample(props){_classCallCheck(this,TimePickerExample);var _this=_possibleConstructorReturn(this,(TimePickerExample.__proto__||Object.getPrototypeOf(TimePickerExample)).call(this,
props));

_this.state={
date:new Date(),
minimumDate:_this.props.mode==='time'?getRandomMinTime():getRandomMinDate(),
maximumDate:_this.props.mode==='time'?getRandomMaxTime():getRandomMaxDate(),
minuteInterval:1};return _this;

}_createClass(TimePickerExample,[{key:'render',value:function render()

{var _this2=this;
return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{flex:1}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.operationContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationText},'\u6700\u5C0F\u503C\uFF1A',(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationTextHighlight},this.state.minimumDate?formatDate(this.state.minimumDate):'None')),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u5207\u6362',onPress:function onPress(){return _this2.setState({minimumDate:_this2.state.minimumDate?null:_this2.props.mode==='time'?getRandomMinTime():getRandomMinDate()});}})),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.operationContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationText},'\u6700\u5927\u503C\uFF1A',(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationTextHighlight},this.state.maximumDate?formatDate(this.state.maximumDate):'None')),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u5207\u6362',onPress:function onPress(){return _this2.setState({maximumDate:_this2.state.maximumDate?null:_this2.props.mode==='time'?getRandomMaxTime():getRandomMaxDate()});}})),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.operationContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationText},'minuteInterval\uFF1A',(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:styles.operationTextHighlight},this.state.minuteInterval)),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u5207\u6362',onPress:function onPress(){return _this2.setState({minuteInterval:getRandomInterval()});}})),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.TimePicker,{
mode:this.props.mode,
date:this.state.date,
onDateChange:function onDateChange(currentDate){console.log(currentDate);_this2.setState({date:currentDate});},
minimumDate:this.state.minimumDate,
maximumDate:this.state.maximumDate,
minuteInterval:this.state.minuteInterval})));



}}]);return TimePickerExample;}(_qunarReactNative.Component);


function getRandomInterval(){
var intervals=[1,2,3,5,6,10,12,15,20,30,1];
return intervals[Math.floor(Math.random()*10)];
}

function getRandomMinDate(){
var date=new Date();

date.setFullYear(date.getFullYear()-Math.floor(Math.random()*5));
date.setMonth(date.getMonth()-Math.floor(Math.random()*12));
date.setDate(date.getDate()-Math.floor(Math.random()*31));
date.setHours(Math.floor(Math.random()*24));
date.setMinutes(Math.floor(Math.random()*60));

return date;
}

function getRandomMaxDate(){
var date=new Date();

date.setFullYear(date.getFullYear()+Math.floor(Math.random()*5));
date.setMonth(date.getMonth()+Math.floor(Math.random()*12));
date.setDate(date.getDate()+Math.floor(Math.random()*31));
date.setHours(Math.floor(Math.random()*24));
date.setMinutes(Math.floor(Math.random()*60));

return date;
}

function getRandomMinTime(){
var date=new Date(),
_date=date.getDate(),
_hour=date.getHours(),
_minute=date.getMinutes();

var _isYesterday=Math.random()>0.5;

date.setDate(_isYesterday?_date-1:_date);
date.setHours(Math.floor(Math.random()*(_isYesterday?24:_hour)));
date.setMinutes(Math.floor(Math.random()*_minute));

return date;
}

function getRandomMaxTime(){
var date=new Date(),
_hour=date.getHours(),
_minute=date.getMinutes();

date.setHours(_hour+Math.floor(Math.random()*(24-_hour)));
date.setMinutes(_minute+Math.floor(Math.random()*(60-_minute)));

return date;
}

function formatDate(date){
return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes();
}

module.exports={
title:'TimePicker',
scroll:true,
examples:[
{
subtitle:'Default settings',
render:function render(){
return(
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(TimePickerExample,null),
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(TimePickerExample,{mode:'time'}),
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(TimePickerExample,{mode:'date'})));


}}]};

/***/ }),
/* 79 */
/***/ (function(module, exports) {




module.exports={};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _this7=this;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=_qunarReactNative.StyleSheet.create({
container:{
flex:1,
marginLeft:10,
marginRight:10},

buttonContainer:{
flexDirection:'row'},

sliderContainer:{
flexDirection:'row',
alignItems:'center',
height:50},

button:{
flex:1,
margin:10},

textContainer:{
margin:10},

textRow:{
flexDirection:'row',
padding:5},

textLeft:{
width:100},

textMiddle:{
width:50},

textRight:{
flex:1}});var



CameraRollDemo=function(_Component){_inherits(CameraRollDemo,_Component);

function CameraRollDemo(props){_classCallCheck(this,CameraRollDemo);var _this=_possibleConstructorReturn(this,(CameraRollDemo.__proto__||Object.getPrototypeOf(CameraRollDemo)).call(this,
props));

_this.state={
groups:[],
savedPhoto:null,
uploadedPhoto:null,
maxWidth:200,
noMaxWidth:false,
maxHeight:200,
noMaxHeight:false,
quality:100};


_this.photoNum=5;
_this.photoGroups={};return _this;
}_createClass(CameraRollDemo,[{key:'getPhotoGroups',value:function getPhotoGroups()

{var _this2=this;
_qunarReactNative.CameraRoll.getPhotoGroups(function(data){
for(var i=0,len=data.length;i<len;i++){
data[i].photo=[];
data[i].hasMore=true;
data[i].endCursor=null;
}
_this2.setState({
groups:data});

},function(err){
_this2.setState({
groups:[]});

});
}},{key:'getPhotosFromGroup',value:function getPhotosFromGroup(

index){var _this3=this;
var item=this.state.groups[index],
id=item.id;

var _param={
first:this.photoNum};


if(item.hasMore&&item.endCursor){
_param.after=item.endCursor;
}

_qunarReactNative.CameraRoll.getPhotosFromGroup(id,_param,function(albumData){
item.photo=item.photo.concat(albumData.edges);
item.hasMore=albumData.page_info.has_next_page;
item.endCursor=albumData.page_info.end_cursor;

_qunarReactNative.Toast.show('获取相册 '+id+' 图片成功！');

_this3.setState({
groups:_this3.state.groups});

},function(err){
_qunarReactNative.Toast.show('获取相册详情失败！');
_this3.setState({
groups:_this3.state.groups});

});
}},{key:'clearPhotosFromGroup',value:function clearPhotosFromGroup(

index){
var item=this.state.groups[index];

item.photo=[];
item.endCursor=null;
item.hasMore=true;

this.setState({
groups:this.state.groups});

}},{key:'takePhotoAndSave',value:function takePhotoAndSave()

{var _this4=this;
_qunarReactNative.CameraRoll.takePhotoAndSave(function(photo){
_this4.setState({
savedPhoto:photo});

},function(err){
_qunarReactNative.Toast.show(err.message);
});
}},{key:'uploadImage',value:function uploadImage()

{var _this5=this;
var option={
serverAddress:'http://hyimg.dev.qunar.com/upload',

quality:this.state.quality};


if(!this.state.noMaxWidth){
option.maxWidth=this.state.maxWidth;
}
if(!this.state.noMaxHeight){
option.maxHeight=this.state.maxHeight;
}

_qunarReactNative.ImageUploader.uploadImage(this.state.savedPhoto.uri,option,function(responseData){
var data=void 0;

try{
data=JSON.parse(responseData);
}catch(e){

}
if(data&&data.ret)
_this5.setState({
uploadedPhoto:{
uri:data.data}});


_qunarReactNative.Toast.show('上传成功!');
},function(err){
console.log('error',err);
_qunarReactNative.Toast.show('上传失败!');
});
}},{key:'render',value:function render()

{var _this6=this;

return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.container},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.buttonContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u83B7\u53D6\u7528\u6237\u76F8\u518C\u4FE1\u606F',style:styles.button,onPress:function onPress(){return _this6.getPhotoGroups();}})),


this.state.groups.map(function(item,index){
return(
(_this6&&_this6.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(_this6&&_this6.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{key:index,style:[styles.textRow,{backgroundColor:index%2==1?'#ffffff':'#eeeeee'}]},
(_this6&&_this6.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.textLeft},(_this6&&_this6.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,item.name)),
(_this6&&_this6.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.textMiddle},(_this6&&_this6.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,item.count)),
(_this6&&_this6.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.textRight},(_this6&&_this6.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,item.id))),


item.photo&&item.photo.map(function(_item,_index){
return(_this6&&_this6.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{style:{height:200,width:200*_item.node.image.width/_item.node.image.height},source:{uri:_item.node.image.uri}});
}),


item.hasMore&&item.count>0?(_this6&&_this6.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u83B7\u53D65\u5F20\u56FE\u7247',style:{margin:5},onPress:function onPress(){return _this6.getPhotosFromGroup(index);}}):null,


!item.hasMore&&item.count>0?(_this6&&_this6.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u5173\u95ED\u5168\u90E8\u56FE\u7247',style:{margin:5},onPress:function onPress(){return _this6.clearPhotosFromGroup(index);}}):null));



}),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.buttonContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u62CD\u7167',style:styles.button,onPress:function onPress(){return _this6.takePhotoAndSave();}})),


this.state.savedPhoto?
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{alignItems:'center'}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'\u62CD\u6444\u7684\u7167\u7247\uFF1A'),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{style:{height:300,width:300*this.state.savedPhoto.width/this.state.savedPhoto.height},source:{uri:this.state.savedPhoto.uri}})):

null,


this.state.savedPhoto?
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.buttonContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u4E0A\u4F20\u7167\u7247',style:styles.button,onPress:function onPress(){return _this6.uploadImage();}})),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.sliderContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:{width:100}},'maxWidth: ',this.state.noMaxWidth?'':this.state.maxWidth),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Radio,{hasBorder:true,checked:this.state.noMaxWidth}),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:{width:30},onPress:function onPress(){return _this6.setState({noMaxWidth:!_this6.state.noMaxWidth});}},'\u4E0D\u9650'),

this.state.noMaxWidth?null:(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{flex:1,marginTop:5}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Slider,{
step:10,
value:this.state.maxWidth,
minimumValue:50,
maximumValue:500,
onValueChange:function onValueChange(v){return _this6.setState({maxWidth:v});}}))),




(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.sliderContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:{width:100}},'maxHeight: ',this.state.noMaxHeight?'':this.state.maxHeight),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Radio,{hasBorder:true,checked:this.state.noMaxHeight}),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:{width:30},onPress:function onPress(){return _this6.setState({noMaxHeight:!_this6.state.noMaxHeight});}},'\u4E0D\u9650'),

this.state.noMaxHeight?null:(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{flex:1,marginTop:5}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Slider,{
step:10,
value:this.state.maxHeight,
minimumValue:50,
maximumValue:500,
onValueChange:function onValueChange(v){return _this6.setState({maxHeight:v});}}))),




(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.sliderContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:{width:150}},'quality: ',this.state.quality),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{flex:1,marginTop:5}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Slider,{
step:10,
value:this.state.quality,
minimumValue:10,
maximumValue:100,
onValueChange:function onValueChange(v){return _this6.setState({quality:v});}})))):




null,


this.state.uploadedPhoto?
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{alignItems:'center'}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'\u4E0A\u4F20\u7684\u7167\u7247\uFF1A'),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{style:{height:300,width:300*this.state.savedPhoto.width/this.state.savedPhoto.height},source:{uri:this.state.uploadedPhoto.uri}})):

null));



}}]);return CameraRollDemo;}(_qunarReactNative.Component);


module.exports={
title:'CameraRoll',
scroll:true,
examples:[{
render:function render(){
return(
(_this7&&_this7.createElement||_qunarReactNative2.default.createElement)(CameraRollDemo,null));

}}]};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _this4=this;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=_qunarReactNative.StyleSheet.create({
container:{
flex:1,
marginLeft:10,
marginRight:10},

buttonContainer:{
flexDirection:'row'},

button:{
flex:1,
margin:10},

textContainer:{
margin:10},

textRow:{
flexDirection:'row',
padding:5},

textLeft:{
width:100},

textRight:{
flex:1}});var



CookieManagerDemo=function(_Component){_inherits(CookieManagerDemo,_Component);

function CookieManagerDemo(props){_classCallCheck(this,CookieManagerDemo);var _this=_possibleConstructorReturn(this,(CookieManagerDemo.__proto__||Object.getPrototypeOf(CookieManagerDemo)).call(this,
props));

_this.state={
key:'__testCookie',
domain:'.qunar.com',
url:'http://wap.qunar.com',
cookieValue:Math.random()+'',
cookie_get:null};return _this;

}_createClass(CookieManagerDemo,[{key:'setCookie',value:function setCookie()

{
var cookie={
key:this.state.key,
domain:this.state.domain,
value:this.state.cookieValue};


_qunarReactNative.CookieManager.setCookie(cookie,function(){
_qunarReactNative.Alert.alert('设置成功');
});
}},{key:'getCookie',value:function getCookie()

{var _this2=this;
_qunarReactNative.CookieManager.getCookieForKey(this.state.key,this.state.url,function(cookie){
_this2.setState({
cookie_get:cookie});

console.log('success',cookie);
},function(error){
console.log('error',error);
_this2.setState({
cookie_get:null});

});
}},{key:'removeCookie',value:function removeCookie()

{
var cookie={
key:this.state.key,
domain:this.state.domain,
path:'/'};


_qunarReactNative.CookieManager.removeCookie(cookie,function(){
_qunarReactNative.Alert.alert('删除成功');
});
}},{key:'removeCookieForKey',value:function removeCookieForKey()

{

_qunarReactNative.CookieManager.removeCookieForKey(this.state.key,this.state.url,function(){
_qunarReactNative.Alert.alert('清除成功');
});
}},{key:'render',value:function render()

{var _this3=this;

var context_get=void 0;

if(this.state.cookie_get){
context_get=
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,null,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.textContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'\u83B7\u53D6\u7684cookie\uFF1A')),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:[styles.textRow,{backgroundColor:'#eeeeee'}]},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.textLeft},(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'key')),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.textRight},(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,this.state.cookie_get.key))),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:[styles.textRow,{backgroundColor:'#ffffff'}]},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.textLeft},(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'domain')),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.textRight},(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,this.state.cookie_get.domain))),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:[styles.textRow,{backgroundColor:'#eeeeee'}]},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.textLeft},(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'value')),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.textRight},(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,this.state.cookie_get.value))));



}

return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.container},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.textContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'\u8BBE\u7F6E\u7684cookie\uFF1A')),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:[styles.textRow,{backgroundColor:'#eeeeee'}]},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.textLeft},(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'key')),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.textRight},(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'__testCookie'))),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:[styles.textRow,{backgroundColor:'#ffffff'}]},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.textLeft},(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'domain')),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.textRight},(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'.qunar.com'))),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:[styles.textRow,{backgroundColor:'#eeeeee'}]},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.textLeft},(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'value')),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.textRight},(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,this.state.cookieValue)),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u968F\u673A',onPress:function onPress(){return _this3.setState({cookieValue:Math.random()+''});}})),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.buttonContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u8BBE\u7F6Ecookie',style:styles.button,onPress:function onPress(){return _this3.setCookie();}})),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.buttonContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u83B7\u53D6\u8BBE\u7F6E\u7684cookie',style:styles.button,onPress:function onPress(){return _this3.getCookie();}})),

context_get,
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.buttonContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u5220\u9664cookie(removeCookie)',style:styles.button,onPress:function onPress(){return _this3.removeCookie();}})),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.buttonContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u5220\u9664cookie(removeCookieForKey)',style:styles.button,onPress:function onPress(){return _this3.removeCookieForKey();}}))));



}}]);return CookieManagerDemo;}(_qunarReactNative.Component);


module.exports={
title:'CookieManager',
scroll:true,
examples:[{
render:function render(){
return(
(_this4&&_this4.createElement||_qunarReactNative2.default.createElement)(CookieManagerDemo,null));

}}]};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _this2=this;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=_qunarReactNative.StyleSheet.create({
container:{
flex:1,
paddingLeft:5,
paddingRight:5},

textRow:{
flexDirection:'row',
padding:5},

textLeft:{
width:100},

textRight:{
flex:1}});var



DeviceInfoDemo=function(_Component){_inherits(DeviceInfoDemo,_Component);function DeviceInfoDemo(){_classCallCheck(this,DeviceInfoDemo);return _possibleConstructorReturn(this,(DeviceInfoDemo.__proto__||Object.getPrototypeOf(DeviceInfoDemo)).apply(this,arguments));}_createClass(DeviceInfoDemo,[{key:'render',value:function render()
{
var content=[],
counter=0;

var keys={
'isIOS':'boolean',
'isAndroid':'boolean',
'vid':'string',
'pid':'string',
'cid':'string',
'uid':'string',
'sid':'string',
'gid':'string',
'mac':'string',
'model':'string',
'manufacturer':'string',
'platform':'string',
'osVersion':'string',
'scheme':'string',
'qrn_version':'string',
'releaseType':'string'};


for(var prop in keys){
var checked=false;

if(typeof _qunarReactNative.DeviceInfo[prop]!=='undefined'&&typeof _qunarReactNative.DeviceInfo[prop]===keys[prop]){
checked=true;
}

var _backgroundColor=checked?counter%2==1?'#ffffff':'#eeeeee':'#f9f2f4',
_fontColor=checked?'#333333':'#c7254e';

content.push(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{key:counter,style:[styles.textRow,{backgroundColor:_backgroundColor}]},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.textLeft},(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:{color:_fontColor}},prop)),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.textRight},(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:{color:_fontColor}},_qunarReactNative.DeviceInfo[prop]+''))));


counter++;
}

return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.container},
content));


}}]);return DeviceInfoDemo;}(_qunarReactNative.Component);


module.exports={
title:'DeviceInfo',
scroll:true,
examples:[{
render:function render(){
return(
(_this2&&_this2.createElement||_qunarReactNative2.default.createElement)(DeviceInfoDemo,null));

}}]};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _this4=this;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=_qunarReactNative.StyleSheet.create({
container:{
flex:1,
marginLeft:10,
marginRight:10},

buttonContainer:{
flexDirection:'row'},

button:{
flex:1,
margin:10},

textContainer:{
margin:10},

textRow:{
flexDirection:'row',
padding:5},

textLeft:{
width:100},

textRight:{
flex:1}});var



LoginManagerDemo=function(_Component){_inherits(LoginManagerDemo,_Component);

function LoginManagerDemo(props){_classCallCheck(this,LoginManagerDemo);var _this=_possibleConstructorReturn(this,(LoginManagerDemo.__proto__||Object.getPrototypeOf(LoginManagerDemo)).call(this,
props));

_this.state={
isLogin:-2,
userInfo:null};return _this;

}_createClass(LoginManagerDemo,[{key:'getLoginInfo',value:function getLoginInfo()

{var _this2=this;
_qunarReactNative.LoginManager.getLoginInfo(function(data){
_this2.setState({
isLogin:0,
userInfo:data});

},function(data){
_this2.setState({
isLogin:-1,
userInfo:null});

});
}},{key:'login',value:function login()

{var _this3=this;
_qunarReactNative.LoginManager.login(function(data){
_this3.setState({
isLogin:0,
userInfo:data});

},function(data){
_this3.setState({
userInfo:null});

});
}},{key:'render',value:function render()

{

var context=void 0;

switch(this.state.isLogin){
case-2:
context='尚未获取用户登录信息。';
break;
case-1:
context='用户未登录。';
break;
case 0:
context='用户已登录。';
break;}


var userInfoContext=[];

if(this.state.isLogin==0&&this.state.userInfo){

var keys={
'userName':'string',
'userID':'string',
'userEmail':'string',
'userNickname':'string',
'userAvatar':'string',
'userUserID':'string'};


var counter=0,
userInfo=this.state.userInfo;

for(var prop in keys){
var checked=false;

if(typeof userInfo[prop]!=='undefined'&&typeof userInfo[prop]===keys[prop]){
checked=true;
}

var _backgroundColor=checked?counter%2==1?'#ffffff':'#eeeeee':'#f9f2f4',
_fontColor=checked?'#333333':'#c7254e';

var _image=prop=='userAvatar'&&userInfo[prop]?(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Image,{style:{width:80,height:80},source:{uri:userInfo[prop]}}):null;

userInfoContext.push(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{key:counter,style:[styles.textRow,{backgroundColor:_backgroundColor}]},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.textLeft},(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:{color:_fontColor}},prop)),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.textRight},_image,(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:{color:_fontColor}},userInfo[prop]+''))));


counter++;
}
}

return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.container},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.textContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,context)),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.buttonContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u70B9\u51FB\u83B7\u53D6\u767B\u5F55\u4FE1\u606F',style:styles.button,onPress:this.getLoginInfo.bind(this)})),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.buttonContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u70B9\u51FB\u767B\u5F55',style:styles.button,onPress:this.login.bind(this)})),

userInfoContext));


}}]);return LoginManagerDemo;}(_qunarReactNative.Component);


module.exports={
title:'LoginManager',
scroll:true,
examples:[{
render:function render(){
return(
(_this4&&_this4.createElement||_qunarReactNative2.default.createElement)(LoginManagerDemo,null));

}}]};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _this3=this;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=_qunarReactNative.StyleSheet.create({
container:{
flex:1,
marginLeft:10,
marginRight:10,
marginTop:10},

buttonContainer:{
flexDirection:'row'},

button:{
flex:1,
margin:5,
padding:5},

textContainer:{
flexDirection:'row',
padding:10,
alignItems:'center'},

textRow:{
flexDirection:'row',
padding:5},

textLeft:{
width:100},

textMiddle:{
width:50},

textRight:{
flex:1}});var



QStatusBarDemo=function(_Component){_inherits(QStatusBarDemo,_Component);

function QStatusBarDemo(props){_classCallCheck(this,QStatusBarDemo);var _this=_possibleConstructorReturn(this,(QStatusBarDemo.__proto__||Object.getPrototypeOf(QStatusBarDemo)).call(this,
props));

_this.state={
hidden:false};return _this;

}_createClass(QStatusBarDemo,[{key:'setHidden',value:function setHidden(

status){
_qunarReactNative.QStatusBar.setHidden(status,function(){
_qunarReactNative.Toast.show('设置成功',_qunarReactNative.Toast.SHORT,_qunarReactNative.Toast.MIDDLE);
},function(){
_qunarReactNative.Toast.show('设置失败',_qunarReactNative.Toast.SHORT,_qunarReactNative.Toast.MIDDLE);
});
}},{key:'setStyle',value:function setStyle(

style){
_qunarReactNative.QStatusBar.setStyle(style,function(){
_qunarReactNative.Toast.show('设置成功',1000,_qunarReactNative.Toast.MIDDLE);
},function(){
_qunarReactNative.Toast.show('设置失败',1000,_qunarReactNative.Toast.MIDDLE);
});
}},{key:'render',value:function render()

{var _this2=this;

return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.container},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.buttonContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u663E\u793A\u72B6\u6001\u680F',style:styles.button,onPress:function onPress(){return _this2.setHidden(false);}}),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'\u9690\u85CF\u72B6\u6001\u680F',style:styles.button,onPress:function onPress(){return _this2.setHidden(true);}})),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.buttonContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'iOS\u8BBE\u7F6E\u4E3Alight',style:styles.button,onPress:function onPress(){return _this2.setStyle('light');}}),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{text:'iOS\u8BBE\u7F6E\u4E3Adefault',style:styles.button,onPress:function onPress(){return _this2.setStyle('default');}}))));



}}]);return QStatusBarDemo;}(_qunarReactNative.Component);


module.exports={
title:'QStatusBar',
scroll:true,
examples:[{
render:function render(){
return(
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(QStatusBarDemo,null));

}}]};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _this3=this;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var _Dimensions$get=

_qunarReactNative.Dimensions.get('window'),width=_Dimensions$get.width,height=_Dimensions$get.height;

var styles=_qunarReactNative.StyleSheet.create({
container:{
flex:1,
marginLeft:10,
marginRight:10},

buttonContainer:{
flexDirection:'row'},

sliderContainer:{
flexDirection:'row',
alignItems:'center',
height:50},

button:{
flex:1,
margin:10},

radio:{
marginLeft:10},

textContainer:{
flexDirection:'row',
padding:10,
alignItems:'center'},

textRow:{
flexDirection:'row',
padding:5},

textLeft:{
width:100},

textMiddle:{
width:50},

textRight:{
flex:1}});var



ToastDemo=function(_Component){_inherits(ToastDemo,_Component);

function ToastDemo(props){_classCallCheck(this,ToastDemo);var _this=_possibleConstructorReturn(this,(ToastDemo.__proto__||Object.getPrototypeOf(ToastDemo)).call(this,
props));

_this.state={
message:Math.floor(Math.random()*10000)+'',
duration:'SHORT',
customDuration:1000,
offset:'TOP',
customOffset:0};return _this;

}_createClass(ToastDemo,[{key:'showToast',value:function showToast()

{
var duration=void 0,offset=void 0;

duration=this.state.duration!=='CUSTOM'?_qunarReactNative.Toast[this.state.duration]:this.state.customDuration;
offset=this.state.offset!=='CUSTOM'?_qunarReactNative.Toast[this.state.offset]:this.state.customOffset;

_qunarReactNative.Toast.show(this.state.message,duration,offset);
}},{key:'render',value:function render()

{var _this2=this;

return(
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.container},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:[styles.textContainer,{backgroundColor:'#eeeeee'}]},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'\u5185\u5BB9\uFF1A'),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{style:{width:50,marginLeft:10},text:'\u91CD\u7F6E',onPress:function onPress(){return _this2.setState({message:Math.floor(Math.random()*10000)+''});}}),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{style:{width:50,marginLeft:10},text:'\u592A\u77ED',onPress:function onPress(){return _this2.setState({message:_this2.state.message+Math.floor(Math.random()*10000)});}})),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.textContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:{flex:1}},this.state.message)),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:[styles.textContainer,{backgroundColor:'#eeeeee'}]},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'\u65F6\u957F\uFF1A  ',this.state.duration!=='CUSTOM'?this.state.duration:this.state.customDuration,' ms')),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.textContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Radio,{style:{marginLeft:10},hasBorder:true,checked:this.state.duration==='SHORT'}),(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:{marginLeft:5},onPress:function onPress(){return _this2.setState({duration:'SHORT'});}},'SHORT'),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Radio,{style:{marginLeft:10},hasBorder:true,checked:this.state.duration==='LONG'}),(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:{marginLeft:5},onPress:function onPress(){return _this2.setState({duration:'LONG'});}},'LONG'),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Radio,{style:{marginLeft:10},hasBorder:true,checked:this.state.duration==='CUSTOM'}),(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:{marginLeft:5},onPress:function onPress(){return _this2.setState({duration:'CUSTOM'});}},'\u81EA\u5B9A\u4E49(\u5B89\u5353\u4E0D\u652F\u6301)')),


this.state.duration==='CUSTOM'?
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.textContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{flex:1}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Slider,{
step:100,
value:this.state.customDuration,
minimumValue:100,
maximumValue:5000,
onValueChange:function onValueChange(v){return _this2.setState({customDuration:v});}}))):



null,

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:[styles.textContainer,{backgroundColor:'#eeeeee'}]},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,null,'\u4F4D\u7F6E\uFF1A(\u5B89\u5353\u4E0D\u652F\u6301) ',this.state.offset!=='CUSTOM'?this.state.offset:this.state.customOffset)),

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.textContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Radio,{style:{marginLeft:10},hasBorder:true,checked:this.state.offset==='TOP'}),(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:{marginLeft:5},onPress:function onPress(){return _this2.setState({offset:'TOP'});}},'TOP'),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Radio,{style:{marginLeft:10},hasBorder:true,checked:this.state.offset==='MIDDLE'}),(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:{marginLeft:5},onPress:function onPress(){return _this2.setState({offset:'MIDDLE'});}},'MIDDLE'),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Radio,{style:{marginLeft:10},hasBorder:true,checked:this.state.offset==='BOTTOM'}),(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:{marginLeft:5},onPress:function onPress(){return _this2.setState({offset:'BOTTOM'});}},'BOTTOM'),
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Radio,{style:{marginLeft:10},hasBorder:true,checked:this.state.offset==='CUSTOM'}),(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Text,{style:{marginLeft:5},onPress:function onPress(){return _this2.setState({offset:'CUSTOM'});}},'CUSTOM')),


this.state.offset==='CUSTOM'?
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.textContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:{flex:1}},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Slider,{
step:50,
value:this.state.customOffset,
minimumValue:0,
maximumValue:height,
onValueChange:function onValueChange(v){return _this2.setState({customOffset:v});}}))):



null,

(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.View,{style:styles.buttonContainer},
(this&&this.createElement||_qunarReactNative2.default.createElement)(_qunarReactNative.Button,{style:styles.button,text:'\u70B9\u51FB\u629B\u51FA\u4E00\u4E2AToast',onPress:function onPress(){return _this2.showToast();}}))));



}}]);return ToastDemo;}(_qunarReactNative.Component);


module.exports={
title:'Toast',
scroll:true,
examples:[{
render:function render(){
return(
(_this3&&_this3.createElement||_qunarReactNative2.default.createElement)(ToastDemo,null));

}}]};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";





var _qunarReactNative=__webpack_require__(0);var _qunarReactNative2=_interopRequireDefault(_qunarReactNative);
__webpack_require__(87);
__webpack_require__(7);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

Ext.defaults.indexView='BasicDemo';
Ext.defaults.navBar={
isShow:true};

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = QunarReactWebExt;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(12);
__webpack_require__(10);
module.exports = __webpack_require__(11);


/***/ })
/******/ ]);
//# sourceMappingURL=DemoApp.js.map
                                ;(function(){
                                    function _(n) {
                                        var m = Object.create(window.__mappings || null);
                                        for (var i in n) {
                                            m[i] = n[i]
                                        }
                                        window.__mappings = m
                                    }
                                    ;_({})
                                    ;EventEmitter.emit("rn:beforeReady", {
                                    hybridId: 'test',
                                    qrn_version: window._qrnverion || '1.5.0',
                                    releaseType: 'dev'})
                                })()
                                