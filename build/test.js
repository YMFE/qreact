const path = require("path");
var p = path.resolve(__dirname, "../");
console.log(p); // eslint-disable-line
module.exports = {
  context: p,
  entry: {
    index9: "./build/test.js"
  },
  output: {
    path: p + "/dist/",
    filename: "[name].js"
  },
  //plugins: [new es3ifyPlugin()],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: path.resolve(p, "node_modules")
      }
    ]
  },

  resolve: {
    //如果不使用anu，就可以把这里注释掉
    alias: {
      react: "./dist/ReactIE.js",
      "react-dom": "./dist/ReactIE.js"
    }
  }
};


