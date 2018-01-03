## 简介

QReact 是去哪儿网推出一个迷你 React 框架，让 React 在业务线上更具通用价值。众所周知，React 一直存在体积过大的诟病，集成了许多在线上环境不需要功能。YMFE 团队在熟读其源码的基础上，去芜存精，重新实现了 React 所有公开接口，体积只有 React 的约三分之一，从而解决它在移动端上加载过慢的问题。由于没有使用高级 API，因此只需在 webpack ,uglify 上修改配置，便能运用于 IE8 上，从而解决 PC 端同学使用 React 的问题。

对比 `preact/react-lite`，QReact 的优势在于事件系统更为完善，更具扩展性。像 `mouseenter/mouseleave`,`focus/blur` 等不冒泡的事件，`preact` 存在暇疵。

QReact 也实现了官方 `react/lib` 下的许多模块，这些模块可能被 RN 引用，这也为 QReact 支持三端合一的 QRN-WEB 做技术支撑。

- QReact 与 React 完全兼容，具有高度一致的 API 和行为。

- QReact 包含了 `react` 及 `react-dom` 的全部功能，同时有着更小的体积（`minified: 24KB gzipped : 10KB`），作为对比， `react@15.6.1` + `react-dom@15.6.1` 的体积则大了很多（`minified: 42.5KB + 182KB = 224.5KB gzipped: 9.1KB + 46.1KB = 55.2KB`）。

- QReact 支持 IE 6 - IE 8，详细信息请[参见使用](https://qreact.ymfe.org/usage.html)中的“在 IE 6 - IE 8 及以下使用”。

- 为了减小体积___没有___实现 `React.PropTypes`，但这并不意味着代码中使用了 `PropTypes` 就会报错，只是不起作用而已。

## 如何使用

**完整文档请前往[官网](https://qreact.ymfe.org)查看。**

### 注意

如果引用了 `create-react-class` 或者 `prop-types` 库，则需要配置别名让其指向 QReact 的 `createClass` 和 `PropTypes`。具体参见下面的配置中的 `alias` 部分。

### 在 ykit 中使用

如果使用 ykit 构建项目，可以在 `modifyWebpackConfig` 中配置 `alias` 来使用 `qreact` 替换 `react` 和 `react-dom`:

```javascript
module.exports = {
    /*
    ...
    */
    config: {
        modifyWebpackConfig: function(baseConfig) {
            // 其他 webpack 配置
            baseConfig.resolve = {
                alias: {
                    'react': 'qreact',
                    'react-dom': 'qreact',

                    // 若要兼容 IE 请使用以下配置
                    // 'react': 'qreact/dist/ReactIE',
                    // 'react-dom': 'qreact/dist/ReactIE',

                    // 如果引用了 prop-types 或 create-react-class
                    // 需要添加如下别名
                    'prop-types': 'qreact/lib/ReactPropTypes',
                    'create-react-class': 'qreact/lib/createClass'
                }
            }

            return baseConfig;
        }
    },
    /*
    ...
    */
};
```

### 在 webpack 中使用

如果使用 webpack 构建项目，可以通过配置 `webpack` 的 `alias` 来使用 `qreact` 替换 `react` 和 `react-dom`:

```javascript
module.exports = {
    /*
    ...
    */
    resolve: {
        alias: {
            'react': 'qreact',
            'react-dom': 'qreact',

            // 若要兼容 IE 请使用以下配置
            // 'react': 'qreact/dist/ReactIE',
            // 'react-dom': 'qreact/dist/ReactIE'

            // 如果引用了 prop-types 或 create-react-class
            // 需要添加如下别名
            'prop-types': 'qreact/lib/ReactPropTypes',
            'create-react-class': 'qreact/lib/createClass'
        }
    }
    /*
    ...
    */
};
```

### 在 script 标签中使用

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
    // 将 qreact 从打包的 js 文件中抽出
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
    /*
    ...
    */
};
```

### 在 IE 6 - IE 8 中使用

在 IE 6 - IE 8 中使用需要注意以下几个问题：

- `ykit.js` 中的 `alias` 字段配置需要指向 `qreact/dist/ReactIE` 而不是 `qreact`。

- 如果项目直接或间接（比如 `CSSTransitionGroup`）中用到了 `requestAnimatioin` 的话，需要单独引入 `requestAnimatioin` 的 polyfill。

- `.babelrc` 中需要在 `plugins` 中添加 `add-module-exports`。

```javascript
{
    "plugins": [
        "transform-export-extensions",
        // babel@6 不再以 commonJS 方式输出模块
        // 而在入口文件中中必须以 require 方式引入模块
        // 否则无法正常渲染
        // 详细信息请查看 https://github.com/59naga/babel-plugin-add-module-exports
        "add-module-exports"
    ],
    "presets": [
        "es2015",
        "react"
    ]
}
```
- 入口文件不能使用 `import` 方式引入包或者组件，且需要引入 `es5-shim` 和 `es5-sham`。

```javascript
// 引入 shim 解决 IE 8 下 Object.defineProperty 的问题
require('es5-shim');
require('es5-shim/es5-sham');

// 入口文件处不可用 import 引入模块，其他页面不受影响
// 因为 babel 把 import 编译成了 Object.defineProperty
// 而 IE8 中没有这个方法，上方引入的 shim 解决了这个问题
const React = require('react');
const ReactDOM = require('react-dom');
const Hello = require('./component/Hello');

ReactDOM.render(
    <Hello/>,
    document.getElementById('app')
);
```

## 组件规范

为了减少常见的编码错误，请尽量遵循[编码规范](https://qreact.ymfe.org/standard.html)。

## Pull Request

如果你想提 Pull Request，请先 fork 一份代码，clone 到本地之后新建一个分支，修改代码之后请在 PR 中填写你修改了哪里，为什么这么修改，并保证通过自动化测试。

## 如何启动自动化测试
```bash
# 先将代码 clone 到本地
cd qreact
npm install

# 安装 selenium-standalone
npm install -g selenium-standalone
selenium-standalone install
selenium-standalone start

# 新开一个命令行窗口
npm test
```

## 鸣谢

QReact 基于开源项目 [developit preact@7.1.0](https://github.com/developit/preact/tree/7.1.0/) [developit preact-compat@3.14.1](https://github.com/developit/preact-compat/tree/3.14.1) 及 [Facebook React@v15.3.1](https://github.com/facebook/react/tree/v15.3.1)。

QReact 中包括 Virtual DOM 以及 diff 机制等核心部分基于 Preact，通过修改数据结构及 diff 逻辑进一步减小与原生 React 的差异。

此外，QReact 使用 React 的原生事件系统替换了 Preact 的事件绑定。
