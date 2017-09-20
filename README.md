## 简介

QReact 是去哪儿网推出一个迷你 React 框架，让 React 在业务线上更具通用价值。众所周知，React 一直存在体积过大的诟病，集成了许多在线上环境不需要功能。YMFE 团队在熟读其源码的基础上，去芜存精，重新实现了 React 所有公开接口，体积只有 React 的约三分之一，从而解决它在移动端上加载过慢的问题。由于没有使用高级 API，因此只需在 webpack ,uglify 上修改配置，便能运用于 IE8 上，从而解决 PC 端同学使用 React 的问题。

对比 `preact/react-lite`，QReact 的优势在于事件系统更为完善，更具扩展性。像 `mouseenter/mouseleave`,`focus/blur` 等不冒泡的事件，`preact` 存在暇疵。

QReact 也实现了官方 `react/lib` 下的许多模块，这些模块可能被 RN 引用，这也为 QReact 支持三端合一的 QRN-WEB 做技术支撑。

- QReact 与 React 完全兼容，具有高度一致的 API 和行为。

- QReact 包含了 `react` 及 `react-dom` 的全部功能，同时有着更小的体积（`minified: 60KB gzipped : 18KB`），作为对比， `react@15.6.1` + `react-dom@15.6.1` 的体积则大了很多（`minified: 42.5KB + 182KB = 224.5KB gzipped: 9.1KB + 46.1KB = 55.2KB`）。

- QReact 支持 IE 6 - IE 8，详细信息请[参见使用](https://qreact.ymfe.org/usage.html)中的“在 IE 6 - IE 8 及以下使用”。

- 为了减小体积___没有___实现 `React.PropTypes`，但这并不意味着代码中使用了 `PropTypes` 就会报错，只是不起作用而已。

## 如何使用

详细使用方式请[参见使用](https://qreact.ymfe.org/usage.html)。

## 组件规范

为了减少常见的编码错误，请尽量遵循[编码规范](https://qreact.ymfe.org/standard.html)。

## 鸣谢

QReact 基于开源项目 [developit preact@7.1.0](https://github.com/developit/preact/tree/7.1.0/) [developit preact-compat@3.14.1](https://github.com/developit/preact-compat/tree/3.14.1) 及 [Facebook React@v15.3.1](https://github.com/facebook/react/tree/v15.3.1)。

QReact 中包括 Virtual DOM 以及 diff 机制等核心部分基于 Preact，通过修改数据结构及 diff 逻辑进一步减小与原生 React 的差异。

此外，QReact 使用 React 的原生事件系统替换了 Preact 的事件绑定，并提供包含了 PanResponder 的 React Native Web 版本。

## License

协议类型：MIT

>Copyright (C) <2017> Qunar, Inc.

>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
