import babel from "rollup-plugin-babel";
import replace from "rollup-plugin-re";
import filesize from "rollup-plugin-filesize";
import cleanup from "rollup-plugin-cleanup";

const license = require("rollup-plugin-license");
const json = require("../../package.json");

export default {
    input: "./packages/router/index.jsx",

    output: {
        strict: false,
        format: "umd",
        exports: "default",
        file: "./dist/Router.js",
        name: "ReachRouter",
        globals: {
            react: "React",
            "react-dom": "ReactDOM"
        }
    },
    external: ["react", "react-dom"],

    plugins: [
        babel(),

        license({
            banner: "Powered by YMFE (https://ymfe.org)"
        }),
        cleanup(),
        replace({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
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
