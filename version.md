# 更新日志

## v2.2.1（2018.7.27）

1. 添加cacheContext, mergeContext等方法，如果上面的context不变，那么下方的也不会，这样就阻止了无效的cwrp钩子的触发. instance.unmaskedContext更名为instance.__unmaskedContext.
2. miniCreateClass添加对微信小程序无法动态执行代码的处理
3. createElement添加对input的处理，高级浏览器不会进行最下面的分支
4. 调整依赖，不再添加webpack相关的模块
5. 修复对react-hot-loader的支持
6. 修复IE8的input onChange事件的光标问题
7. 修复resetStack BUG
8. 去掉diffProps中的数组解构，减少体积
9. 修复插入点的BUG，现在dfs遍历过程不再查询元素节点的insertPoint是否存在，updateHostComponent方法也不会调用getInsertPoint，性能大大提升
10. 修复componentWillUnmount钩子中访问this.refs.xxx.parentNode,其父节点不存在的BUG

## v2.2.0 

见 https://qreact.ymfe.org/documents/changelog-v2.html