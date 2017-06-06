since using preact && preact-compat in projects，I met several problems. a primary reason is the differences between p & react, so i list out these i found.


### VNODE 

##### props.children data structure

in preact props.children is always Array, while can be Object if with only child in react. so 
using these code to judge if only child won't work in preact.

```jsx
    this.props.children && !this.props.children.length
``` 

using insted:

```jsx
    function getOnlyChild(props) {
        var children = props.children;
        if (children) {
            if (!children.length) return children;
            if (chilldren.length === 1) return children[0];
        }
    }
```

### DIFF ALGORITHM

##### render/rerender

in preact each render/rerender may cause dom move/reorder even seems unnecessary in react.

```jsx
    componentDidMount() {
        this.namedDiv = this.refs.namedDiv
    }
    componentDidUpdate() {
        this.namedDiv = this.refs.namedDiv // required in preact or this.namedDiv target wrong if balabala changed
    }
    render() {
        return (
            <div>
                {
                    this.state.balabala ? <div></div> : null
                }
                <div ref="namedDiv"></div>
            </div>
        )
    }
```

using insted:

```jsx
    ref={(ref) => {
        this.namedDiv = ref
    }}
```

##### lifecycle

in preact parent's componentDidUpdate trigger before child's componentDidMount [#312](https://github.com/developit/preact-compat/issues/312). 

tips: 

    avoid any dependence on tigger order of these two.


##### setState is async

if callback depends on newState, u'd better:

```jsx
    this.setState(newState, callback)
```




+ preact findDOMNode 逻辑: return component && component.base || component 【无 return null】
+ VNode instance.children 【instance.props.children】
+ ReactChildren.forEach(instance.children, callback) - callback(child, index, children) 【不传 children】
+ <span key="simple" /> -> key="simple" 而不是 key=".$simple", key=".0"
+ instance.children Array 【可以是 child object】
+ vnode.children 只有一个child的时候， react 会是一个 Object, preact 是 [Object]
+ preact 每次 render 都有可能造成节点变化，业务逻辑内不能缓存 dom 节点
+ parent 的 componentDidUpdate 可能在 child 的 componentDidMount 之前触发
+ preact 的 setState 是异步的，可能比 React 生效的晚，所以存在强依赖的情况需要 setState({}, callback)


+ preact findDOMNode 逻辑: return component && component.base || component 【无 return null】
+ VNode instance.children 【instance.props.children】
+ ReactChildren.forEach(instance.children, callback) - callback(child, index, children) 【不传 children】
+ <span key="simple" /> -> key="simple" 而不是 key=".$simple", key=".0"
+ instance.children Array 【可以是 child object】
+ vnode.children 只有一个child的时候， react 会是一个 Object, preact 是 [Object]
+ preact 每次 render 都有可能造成节点变化，业务逻辑内不能缓存 dom 节点
+ parent 的 componentDidUpdate 可能在 child 的 componentDidMount 之前触发
+ preact 的 setState 是异步的，可能比 React 生效的晚，所以存在强依赖的情况需要 setState({}, callback)


