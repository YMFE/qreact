import babel from "rollup-plugin-babel";
import cleanup from "rollup-plugin-cleanup";
import strip from "rollup-plugin-strip";

export default {
  entry: "./server/index.js",
  format: "umd",
  exports: "default",
  dest: "./dist/ReactDOMServer.js",
  plugins: [
    babel({
      babelrc: false,
      presets: [
        [
          "env",
          {
            modules: false
          }
        ]
      ]
    }),
    cleanup(),
    strip({
      debugger: true,
      functions: ["console.*", "assert.*", "debug", "alert"]
    })
  ],
  moduleName: "ReactDOMServer",
  useStrict: false
};
