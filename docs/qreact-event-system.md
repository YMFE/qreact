react的事件机制总结一句,就是事件代理


事件代理是通过事件冒泡实现的

当我们用编译工具转换JSX为虚拟DOM时,会抽取里面的onXXX属性(`<View onClick={this.clickFn} ></View>`)

这时它就会将onXXX的值(一个回调函数)放在listnerBank对象中,并且找到这个虚拟DOM的根节点

这个虚拟DOM如果是包含在一个组件中,那么根节点就是这个组件的真实DOM
这个虚拟DOM如果不存在于任何组件中,那么根节点就是document

在qreact中,直接就是document,绑定xxx事件,如onClick --> click, onMouseOver --> mouseover
然后直接在元素上添加一个_onXxx属性,如onClick --> _onClick, onMouseOver --> _onMouseOver
值为回调方法.

当我们点击页面时,所有事件都会冒泡到document,然后取得事件源对象,找到其事件类型,得到_xxx属性,得到回调

然后在往上找其父节点或父父节点的_onXxx属性,收集整条路径上的回调与元素

最后将执行它们

```
//
function accumulateDispatches(inst, ignoredDirection, event) {
  if (event && event.dispatchConfig.registrationName) {
    var registrationName = event.dispatchConfig.registrationName;
    var listener = getListener(inst, registrationName);
    if (listener) {
      event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
      event._dispatchInstances = accumulateInto(event._dispatchInstances, inst);
    }
  }
}
``

```
function accumulateDirectDispatchesSingle(event) {
  if (event && event.dispatchConfig.registrationName) {
    accumulateDispatches(event._targetInst, null, event);
  }
}
```
