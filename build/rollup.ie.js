import babel from "rollup-plugin-babel";
import replace from "rollup-plugin-re";
import filesize from "rollup-plugin-filesize";

const license = require("rollup-plugin-license");
const json = require("../package.json");

export default {
  entry: "./src/ReactIE.js",
  format: "umd",
  exports: "default",
  dest: "./dist/ReactIE.js",
  plugins: [

    babel({
      //  plugins: ['external-helpers'],
      // externalHelpers: true,
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
      banner: `Maintained by YMFE Copyright ${JSON.stringify(
        new Date()
      ).replace(/T.*|"/g,"")}`
    }),

    replace({
      patterns: [
        {
          test: "VERSION",
          replace: json.version
        }
        
      ]
    }),
    filesize()
  ],
  moduleName: "React",
  useStrict: false
};
