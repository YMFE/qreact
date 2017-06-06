const webpack = require('webpack');

const ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: './es/client.jsx',
    output: {
        path: './dist',
        publicPath: '/',
        filename: 'bundle.client.js'
    },
    resolve: {
        extensions: ['', '.jsx', '.js', '.json', '.less']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules\/(?!react)/,
                loader: 'babel'
            }
        ]
    },
    plugins: ([
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(ENV)
        })
    ]).concat(ENV === 'production' ? [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin()
    ] : []),
    devtool: ENV === 'production' ? 'source-map' : 'inline-source-map'
};
