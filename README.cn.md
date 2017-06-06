# Qreact

## 简介

Qreact 是 React 的兼容实现，具有高度一致的 API 和行为，及更小的体积。

    minified: 60KB
    gzipped : 20KB

## 使用

[参见](./README.md)

## 呼谢

Qreact 基于开源项目 [developit preact@7.1.0](https://github.com/developit/preact/tree/7.1.0/) [developit preact-compat@3.14.1](https://github.com/developit/preact-compat/tree/3.14.1) 及 [Facebook React@v15.3.1](https://github.com/facebook/react/tree/v15.3.1)。

Qreact 的包括虚拟 DOM 以及 diff 机制等核心部分，基于 Preact，通过修改数据结构及 diff 逻辑进一步减小与原生 React 的差异。

此外，整合原生 React 的事件系统替换了 Preact 的事件绑定，并提供包含了 PanResponder 的 React Native Web 版本。

## 与 Preact 的差异

### 去除 PropTypes

React.PropTypes 是空实现，不会校验类型。

### 事件绑定

整合 React 事件系统。


## License

MIT