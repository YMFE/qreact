## 这里是qreact demo
### 运行方法

> cd demo
> npm install
> webpack-dev-server
> 打开http://127.0.0.1:8080访问


### 切换react或是qreact
在webpack.config.js 中决定是否添加alias进行切换
```
resolve: {
    extensions: ['', '.js'],
    root: __dirname,
    alias: {
        'react': path.resolve(
              __dirname,'../src/index'),
        'react-dom': path.resolve(
              __dirname,'../src/index')

    }
}
```
