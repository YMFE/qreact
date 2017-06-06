webpackJsonp([1],{

/***/ 4:
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports,"__esModule",{value:true});var _this=this;var _react=__webpack_require__(10);var _react2=_interopRequireDefault(_react);
	var _reactNative=__webpack_require__(8);




	var _reactNativeRouterFlux=__webpack_require__(11);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

	var BlueScreen=function BlueScreen(){
	return(
	(_this&&_this.createElement||_react2.default.createElement)(_reactNative.View,{style:styles.container},
	(_this&&_this.createElement||_react2.default.createElement)(_reactNative.Text,{
	style:styles.welcome,
	onPress:function onPress(){return _reactNativeRouterFlux.Actions.maize();}},'Blue Screen'),



	(_this&&_this.createElement||_react2.default.createElement)(_reactNative.Text,{
	style:styles.welcome,
	onPress:function onPress(){return _reactNativeRouterFlux.Actions.modal();}},'Open Modal')));





	};

	var styles=_reactNative.StyleSheet.create({
	container:{
	flex:1,
	justifyContent:'center',
	alignItems:'center',
	backgroundColor:'#00274c'},

	welcome:{
	fontSize:20,
	textAlign:'center',
	margin:10,
	color:'#ffffff'}});exports.default=



	BlueScreen;

/***/ }

});