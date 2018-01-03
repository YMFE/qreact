import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

export default {
  entry: "./server/index.js",
  format: "umd",
  exports: "default",
  dest: "./dist/ReactDOMServer.js",
  plugins: [
    // ssr 中用到了 babel helpers
    // 需要从 node_modules 中引入
    // 下面两个插件可以让 rollup 顺利将 babel helpers 函数引入
    commonjs(),
    resolve({
      module: true
    }),
    babel({
      babelrc: false,
      presets: [
        [
          "env",
          {
            modules: false
          }
        ]
      ],
      // ssr 中用到了 generator
      // 下面的配置会将 babel helpers 包括在编译文件中
      // 以支持低版本 node 的运行
      runtimeHelpers: true,
      externalHelpers: true,
      plugins: ["external-helpers", "transform-runtime"],
      exclude: "node_modules/**"
    })
  ],
  moduleName: "ReactDOMServer",
  useStrict: false
};
