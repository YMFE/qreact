import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';

export default {
    entry: 'src/preact-compat.js',
    format: 'umd',
    exports: 'default',
    dest: 'dist/qreact.js',
    sourceMap: true,
    moduleName: 'qreact',
    useStrict: false,
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
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
};