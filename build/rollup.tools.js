import babel from "rollup-plugin-babel";
import strip from "rollup-plugin-strip";

export default {
  entry: "./build/index.js",
  format: "umd",
  exports: "default",
  dest: "./lib/devtools.js",
  plugins: [
    babel(),
    strip({
      debugger: true,
      functions: ["console.*", "assert.*", "debug", "alert"]
    })
  ],
  moduleName: "DevTools",
  useStrict: false
};
