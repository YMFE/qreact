import babel from "rollup-plugin-babel";
import replace from "rollup-plugin-re";
import filesize from "rollup-plugin-filesize";
import cleanup from "rollup-plugin-cleanup";
import strip from "rollup-plugin-strip";
import license from "rollup-plugin-license";

const json = require("../package.json");

export default {
  entry: "./src/React.js",
  format: "umd",
  exports: "default",
  dest: "./dist/React.js",
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
    license({
      banner: "Powered by YMFE (https://ymfe.org)"
    }),
    cleanup(),
    replace({
      patterns: [
        {
          test: "VERSION",
          replace: json.version
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
