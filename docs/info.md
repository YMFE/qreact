# qreact

## 修改说明

### 定制 [developit preact](https://github.com/developit/preact/)

+ 注入事件系统需要的 _hostNode, _hostParent, node[internalInstanceKey]
+ 节点销毁、回收时，解除 VNode 和 Node 的循环引用

### 定制 [developit preact-compat](https://github.com/developit/preact-compat/)

暂未做修改

### 定制 [facebook react](https://github.com/facebook/react) 事件系统

+ 精简各个文件代码
+ 精简支持的事件类型
+ 提供注入接口 - ReactDefaultInjection.js
+ 修改构建 VNodeInstance <-> Node Cache Tree的逻辑，只构建绑定了事件的节点 - ReactDOMComponentTree.js
+ 修改 findParent - ReactEventListener.js

### 其他模块

+ 置空 proptypes

## 接口说明

### 差异性接口

+ preact findDOMNode 逻辑: return component && component.base || component 【无 return null】
+ VNode instance.children 【instance.props.children】
+ ReactChildren.forEach(instance.children, callback) - callback(child, index, children) 【不传 children】
+ <span key="simple" /> -> key="simple" 而不是 key=".$simple", key=".0"
+ instance.children Array 【可以是 child object】
+ vnode.children 只有一个child的时候， react 会是一个 Object, preact 是 [Object]
+ preact 每次 render 都有可能造成节点变化，业务逻辑内不能缓存 dom 节点
+ parent 的 componentDidUpdate 可能在 child 的 componentDidMount 之前触发
+ preact 的 setState 是异步的，可能比 React 生效的晚，所以存在强依赖的情况需要 setState({}, callback)


tips：

+ 【】 - 表示 react-lite
+ 否则表示 react & react-lite

### 不支持接口


## 测试

### 方法

1. 执行
```
    sh rtest.sh [1-20]
```

2.check

是否通过，如果不通过，则需修改 __tests__2 内对应 test文件，必要时修改 框架代码

### 已通过
+ __tests__2/findDOMNode-test.js

移除依赖：

+ "preact-transition-group": "^1.1.0",
+ "preact-render-to-string": "^3.3.0",
