# qreact

qreact 是一个与 React 高度兼容的 React 迷你实现。

## 存在的意义

目前 React 的代码库体积过大，使用 React 引发的一个问题是，文件体积过大造成加载时间、初始化执行时间变长，在移动设备上变现尤为突出。为了减小文件体积，我们考察可目前存在的 React 轻量实现，包括 react-lite、Preact 等项目，他们都有着很小的体积，但也存在各自的局限性。比如 Preact 不支持 SyntheticEvent（合成事件），这样

## 差异点

- 为了减小体积没有实现 React.PropTypes，但这并不意味着代码中使用了 PropTypes 就会报错，只是不起作用而已。

## 迁移方案

如果使用 webpack 构建项目，可以通过配置 `webpack` 的 `alias` 来使用 `qreact` 替换 `react` 和 `react-dom`:

```javascript
module.exports = {
    /*
    ...
    */
    resolve: {
        alias: {
            'react': 'qreact',
            'react-dom': 'qreact'
        }
    }
    /*
    ...
    */
};
```

如果是直接使用 `script` 标签引入，那么可以去掉 `react` 和 `react-dom` 使用 `qreact` 取代之：

```diff
- <script src="react.js"></script>
- <script src="react-dom.js"></script>
+ <script src="qreact.js"></script>
```

```javascript
module.exports = {
    /*
    ...
    */
    externals: {
        'react': 'qreact',
        'react-dom': 'qreact', // extract qreact
    },
    resolve: {
        alias: {
            'react': 'qreact',
            'react-dom': 'qreact'
        }
    }
    /*
    ...
    */
};
```


## License

BSD
