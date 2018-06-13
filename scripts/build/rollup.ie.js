import babel from "rollup-plugin-babel";
import replace from "rollup-plugin-re";
import filesize from "rollup-plugin-filesize";
import cleanup from "rollup-plugin-cleanup";

const license = require("rollup-plugin-license");
const json = require("../../package.json");

export default {
    input: "./packages/render/dom/index.ie8.js",
    output: {
        strict: false,
        format: "umd",
        exports: "default",
        file: "./dist/ReactIE.js",
        name: "React"
    },
    plugins: [
        babel(),

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
        filesize()
    ]
};
