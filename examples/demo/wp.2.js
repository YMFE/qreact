
var path = require('path');
const ENV = process.env.NODE_ENV || 'development';


module.exports = {
  entry: {
    demo: './index.js',
  },
  output: {
    filename: '[name].js'
  },
  module: {
    loaders:[{
        test: /\.js|jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
     },
      {
        test: /\.scss$/,
        loader: 'style!css!sass',
        exclude: /node_modules/
      }
    ]
  },
  devtool: ENV==='production' ? 'source-map' : 'cheap-module-source-map',
  // resolve: {
  //     extensions: ['', '.js'],
  //     root: __dirname
  // }
  // externals: {
  //   'react': 'qreact',
  //   'react-dom': 'qreact',
  // },
  resolve: {
      extensions: ['', '.js'],
      root: __dirname,
      alias: {
          // 'react': path.join(
                // __dirname,'../src/preact-compact.js'),
          // 'react-dom': path.join(
                // __dirname,'../src/preact-compact.js'),
          // 'preact':path.resolve(__dirname,'../src/preact/src/preact'),
          // 'fbjs/lib/ExecutionEnvironment': path.resolve( '../src/fbjs/ExecutionEnvironment'),
          // 'proptypes': path.resolve('../src/proptypes/index'),

      }
  }

}
