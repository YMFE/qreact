# Qreact

## 简介

Qreact 是 React 的迷你兼容实现，它在dist目录包括以下几个文件
1. React.js 支持IE9＋,包含一些官方React已经声明废弃或分离出去的API，没有特殊要求，业务线同学直接可以使用该文件。
2. ReactIE.js 支持IE6－8（打包时记得配合lib/polyfill.js一起使用）,包含一些官方React已经声明废弃或分离出去的API。一般对兼容性有要求的PC平台。
3. ReactShim.js 要求浏览器支持[es6 Map对象](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map), 不再包含PropTypes, createClass, createFactory。 一般用于移动端


## 使用

```
npm install anujs
npm install qreact

```
webpack或yit中的配置

```
resolve: {
    alias: {
        'react': 'anujs',
        'react-dom': 'anujs',
        'react-tap-event-plugin': 'anujs/lib/injectTapEventPlugin' 　//如果你用到了onTouchTap事件
    }
}

```
或者 直接使用ykit-config-anu

anujs是qreact的开发代号，线上环境使用请务必使用qreact. 有问题请联系qincheng.zhong.


使用方法与React大同小异。

## 与官方React

> preact(-compat) 是指preact+ peact-compat

| 名称                                           | 类别            | React | qreact    | preact(-compat) |
|----------------------------------------------|---------------|-------|--------|-----------------|
| React.Component                              | class         | ✔️    | ✔️     | ✔️              |
| React.PureComponent                          | class         | ✔️    | ✔️     | ✔️              |
| React.createClass                            | Top-Level API | ✔️    | ✔️     | ✔️              |
| React.createElement                          | Top-Level API | ✔️    | ✔️     | ✔️              |
| React.cloneElement                           | Top-Level API | ✔️    | ✔️     | ✔️              |
| React.createFactory                          | Top-Level API | ✔️    | ✔️     | ✔️              |
| React.isValidElement                         | Top-Level API | ✔️    | ✔️     | ✔️              |
| React.DOM                                    | Top-Level API | ✔️    | ✖️     | ✔️              |
| React.PropTypes                              | Top-Level API | ✔️    | compat | compat          |
| React.Children                               | Top-Level API | ✔️    | ✔️     | ✔️              |
| ReactDOM.render                              | Top-Level API | ✔️    | ✔️     | ✔️              |
| ReactDOM.unmountComponentAtNode              | Top-Level API | ✔️    | ✔️     | ✔️              |
| ReactDOM.unstable_renderSubtreeIntoContainer | Top-Level API | ✔️    | ✔️     | ✔️              |
| ReactDOM.findDOMNode                         | Top-Level API | ✔️    | ✔️     | ✔️              |
| ReactDOMServer.renderToString                | Top-Level API | ✔️    | ✔️     | ✔️              |
| ReactDOMServer.renderToStaticMarkup          | Top-Level API | ✔️    | ✖️     | ✖️              |

其中，createClass，isValidElement，PropTypes，Children，unmountComponentAtNode，unstable_renderSubtreeIntoContainer不建议大家使用了。

## 组件实例API 对照表

| 名称                     | 类别            | React | qreact | preact(-compat) |
|------------------------|---------------|-------|-----|-----------------|
| Instance .setState     | Component API | ✔️    | ✔️  | ✔️              |
| Instance .replaceState | Component API | ✔️    | ✖️  | ✔️              |
| Instance .forceUpdate  | Component API | ✔️    | ✔️  | ✔️              |
| Instance .isMounted    | Component API | ✔️    | ✖️  | ✔️              |

## 组件Specs 对照表


| 名称           | 类别        | Specs | React | anu | preact(-compat) |
|--------------|-----------|-------|-------|-----|-----------------|
| render       | Component | Specs | ✔️    | ✔️  | ✔️              |
| state        | Component | Specs | ✔️    | ✔️  | ✔️              |
| defaultProps | Component | Specs | ✔️    | ✔️  | ✔️              |
| propTypes    | Component | Specs | ✔️    | ✔️  | ✔️              |



## 组件生命周期 对照表

| 名称                                    | 类别                 | React | qreact | preact(-compat) |
|---------------------------------------|--------------------|-------|-----|-----------------|
| componentWillMount(合并setState)        | Component Lifecyle | ✔️    | ✔️  | ✔️              |
| componentDidMount                     | Component Lifecyle | ✔️    | ✔️  | ✔️              |
| componentWillReceiveProps(合并setState) | Component Lifecyle | ✔️    | ✔️  | ✔️              |
| shouldComponentUpdate                 | Component Lifecyle | ✔️    | ✔️  | ✔️              |
| componentWillUpdate                   | Component Lifecyle | ✔️    | ✔️  | ✔️              |
| componentDidUpdate                    | Component Lifecyle | ✔️    | ✔️  | ✔️              |
| componentWillUnmount                  | Component Lifecyle | ✔️    | ✔️  | ✔️              |

## 特性支持对照

| 名称                      | 类别  | React      | qreact    | preact(-compat) |
|-------------------------|-----|------------|--------|-----------------|
| contextTypes            | 特性  | ✔️         | ✔️     | ✔️              |
| getChildContext         | 特性  | ✔️         | compat | compat          |
| ref                     | 特性  | ✔️         | ✔️     | ✔️️             |
| getDOMNode              | 特性  | ✔️         | ✔️     | ✖️              |
| style                   | 特性  | ✔️         | ✔️     | ✖️              |
| onEvent                 | 特性  | ✔️         | ✔️     | ✔️              |
| onEventCapture          | 特性  | ✔️         | ✔️     | ✖️              |
| dangerouslySetInnerHTML | 特性  | ✔️         | ✔️     | ✖️              |
| （非）受控组件                 | 特性  | ✔️         | ✔️     | ✖️              |
| IE8支持                   | 特性  | ✔️（高版本不支持） | ✔️     | ✖️              |

三方都支持React官方的Chrome DevTools


## License

MIT

