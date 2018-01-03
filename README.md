## 简介

`QReact`是去哪儿网推出的一款**高度兼容 React**迷你的 React 框架，让 React 在业务线上更具通用价值。

众所周知，React 一直存在体积过大的诟病，集成了许多在线上环境不需要功能。YMFE 团队在熟读其源码的基础上，去芜存精，重新实现了 React 所有公开接口，体积只有 React 的约三分之一，从而解决它在移动端上加载过慢的问题。由于没有使用高级 API，因此只需在 webpack ,uglify 上修改配置，便能运用于 IE8 上，从而解决 PC 端同学使用 React 的问题。

它对比官方 react, preact, inferno, react-lite 等框架，它具有以下优势。

* 对比 `preact`等迷你框架，QReact 的事件系统更为完善，更具扩展性。像 `mouseenter/mouseleave`,`focus/blur` 等不冒泡的事件，`preact` 简单的基于**addEventListener(type,fn,true)**是无法正常运行。

* 对比 `preact`等迷你框架，QReact 在处理混杂着 ref 与生命周期钩子的逻辑时，与官方的行为是保持一致。React.Children 与 React.cloneElement 在 key 生成策略上也是与官方行为一致。其他迷你框架则出入很大，或干脆没有实现。简而言之，QReact 与 React 高度兼容，在细节上做得原汁原味。因此它 99％上运行阿里的**antd**这样复杂的 UI 框架，当然我们不限于此，会努力做到完全兼容。

* QReact 实现了官方 `react/lib` 下的许多子模块，它们的实现也非常简洁，从而整体减少 bundle 的大小。如果没有实现它们，许多第三方库就会直接引用官方提供的 `react/lib` 子模块，但由于迷你 React 们的内部实现与官方不一样，因此即便引用，也会运行出错。其次，RN 也用到它们，，这也为 QReact 支持三端合一的 QRN-WEB 做技术支撑。

- QReact 包含了 `react` 及 `react-dom` 的全部功能，同时有着更小的体积（`minified: 24KB gzipped : 10KB`），作为对比， `react@15.6.1` + `react-dom@15.6.1` 的体积则大了很多（`minified: 42.5KB + 182KB = 224.5KB gzipped: 9.1KB + 46.1KB = 55.2KB`）。

- QReact 支持 IE6 - IE8，详细信息请[参见使用](https://qreact.ymfe.org/usage.html)中的“在 IE 6 - IE 8 及以下使用”。

- QReact 是一个充满活力的库，它的开发版本[anujs](https://github.com/RubyLouvre/anu)几乎每天都有更新，不断跟进官方 React 的新特性，React 16 的一些新功能也渐渐加入。

## 如何使用

详细使用方式请[参见使用](https://qreact.ymfe.org/usage.html)。

## 组件规范

为了减少常见的编码错误，请尽量遵循[编码规范](https://qreact.ymfe.org/standard.html)。

## 鸣谢

QReact 基于开源项目 [developit preact@7.1.0](https://github.com/developit/preact/tree/7.1.0/) [developit preact-compat@3.14.1](https://github.com/developit/preact-compat/tree/3.14.1) 及 [Facebook React@v15.3.1](https://github.com/facebook/react/tree/v15.3.1)。

QReact 在开发过程，从 Preact,react-lite 的源码受到许多启迪，特此鸣谢。

欢迎大家对 QReact 与 anujs 进行试用与提 Issue 与 PR！
