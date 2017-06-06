import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

export default {
    entry: 'devtools/index.js',
    format: 'umd',
    dest: 'dist/devtools.js',
    sourceMap: true,
    external: ['qreact'],
    globals: {
        'qreact': 'qreact'
    },
    moduleName: 'qreactDevTools',
    plugins: [
        nodeResolve({
            jsnext: true, // Default: false
            main: true
        }),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            babelrc: false,
            presets: [
                ['es2015', {
                    'modules': false
                }]
            ],
            plugins: [
                "external-helpers"
            ]
        })
    ]
};