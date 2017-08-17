# qreact

qreact is a small size React implementation. It is highly compatible with React.

## Difference to React

- In order to minimize the size, `React.PropTypes` does not been implement.

## Switch to qreact

If you use webpack, you can set `alias` options:

```javascript
module.exports = {
    /*
    ...
    */
    resolve: {
        alias: {
            'react': 'qreact',
            'react-dom': 'qreact'
        }
    }
    /*
    ...
    */
};
```

If you use `script` tag include javascript directly, you can replace `react` and `react-dom` with `qreact`:


```diff
- <script src="react.js"></script>
- <script src="react-dom.js"></script>
+ <script src="qreact.js"></script>
```

```javascript
module.exports = {
    /*
    ...
    */
    externals: {
        'react': 'qreact',
        'react-dom': 'qreact', // extract qreact
    },
    resolve: {
        alias: {
            'react': 'qreact',
            'react-dom': 'qreact'
        }
    }
    /*
    ...
    */
};

## Installation

```sh
npm install qreact
```

## License

qreact is under BSD License.
