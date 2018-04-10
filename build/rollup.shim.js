import babel from "rollup-plugin-babel";
import replace from "rollup-plugin-re";
import filesize from "rollup-plugin-filesize";
import cleanup from "rollup-plugin-cleanup";
import strip from "rollup-plugin-strip";
import license from "rollup-plugin-license";

const json = require("../package.json");

export default {
  entry: "./src/ReactShim.js",
  format: "umd",
  exports: "default",
  dest: "./dist/ReactShim.js",
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
    license({
      banner: "Powered by YMFE (https://ymfe.org)"
    }),
    replace({
      patterns: [
        {
          test: "VERSION",
          replace: json.version
        },
        {
          test: "el.attachEvent(\"on\" + type, fn);",
          replace: ""
        }
      ]
    }),
    filesize(),
    strip({
      debugger: true,
      functions: ["console.*", "assert.*", "debug", "alert"]
    })
  ],
  moduleName: "React",
  useStrict: false
};
