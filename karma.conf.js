/*eslint no-var:0, object-shorthand:0 */
var runUITests = require.main.filename.indexOf('run-test.js') !== -1 && process.env.seleniumEnable !== 'false' || process.env.TRAVIS;
var coverage = String(process.env.COVERAGE) !== 'false' && false,
    ci = String(process.env.CI).match(/^(1|true)$/gi),
    pullRequest = !String(process.env.TRAVIS_PULL_REQUEST).match(/^(0|false|undefined)$/gi),
    masterBranch = String(process.env.TRAVIS_BRANCH).match(/^master$/gi),
    realBrowser = String(process.env.BROWSER).match(/^(1|true)$/gi),
    performance = !coverage && !realBrowser && String(process.env.PERFORMANCE) !== 'false',
    webpack = require('webpack');

var path = require('path');

module.exports = function(config) {
    config.set({
        start: function() {

        },
        basePath: __dirname,

        // hostname: '127.0.0.1',
        // hostname: '100.80.21.128',
        // hostname: '192.168.59.3',
        customLaunchers: runUITests ? {
            'Chrome': {
                base: 'WebDriverio',
                browserName: 'chrome',
                name: 'Karma'
            },
            'android-default': { // webView
                base: 'WebDriverio',
                browserName: 'chrome',
                name: 'Karma',
                config: {
                    desiredCapabilities: {
                        chromeOptions: {
                            androidPackage: 'com.android.browser',
                            androidActivity: '.BrowserActivity',
                            windowTypes: ['webview']
                        },
                        deviceName: '4_0',
                        browserName: 'chrome',
                        platformName: 'Android'
                    },
                    logLevel: 'none'//'verbose'
                }
            },
            'Chrome-Android': {
                base: 'WebDriverio',
                browserName: 'chrome',
                name: 'Karma',
                config: {
                    desiredCapabilities: {
                        chromeOptions: {
                            androidPackage: 'com.android.chrome'
                        },
                        deviceName: '4_0',
                        browserName: 'chrome',
                        platformName: 'Android'
                    },
                    logLevel: 'none'//'verbose'
                }
            },
            'Chrome-SauceLabs': {
                base: 'WebDriverio',
                browserName: 'chrome',
                version: '57.0',
                mobileEmulationEnabled: true,
                name: 'Karma',
                config: {
                    host: 'localhost',
                    port: 4445,
                    logLevel: 'verbose',
                    name: 'integration',
                    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
                    user: process.env.SAUCE_USERNAME,
                    key: process.env.SAUCE_ACCESS_KEY
                }
            }
        } : {},
        // customLaunchers: sauceLabs ? sauceLabsLaunchers : travisLaunchers,
        // browsers: ['android-default'],
        // browsers: ['Chrome-Android'],
        browsers: process.env.TRAVIS ? ['Chrome-SauceLabs'] : ['Chrome'],
        frameworks: ['source-map-support', 'mocha', 'chai-sinon'],

        reporters: ['mocha', 'coverage'],

        mochaReporter: {
            showDiff: true
        },

        browserLogOptions: {
            terminal: true
        },
        browserConsoleLogOptions: {
            terminal: true
        },

        browserNoActivityTimeout: 5 * 60 * 1000,

        // Use only two browsers concurrently, works better with open source Sauce Labs remote testing
        concurrency: 2,

        // sauceLabs: {
        // 	tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER || ('local'+require('./package.json').version),
        // 	startConnect: false
        // },

        files: [
            {
                pattern: 'test/polyfills.js',
                watched: false,
                webdriver: true
            },
            {
                pattern: 'test/{browser,shared}/**.js',
                webdriver: true,
                watched: false
            },
            {
                pattern: runUITests ? 'test/ui/test-qrn-web.js' : 'Ignore UI Tests',
                webdriver: true,
                watched: false
            }
        ],

        preprocessors: {
            'src/**/*.js': ['webpack', 'sourcemap'],
            'test/**/*.js': ['webpack', 'sourcemap']
        },
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        },

        singleRun: process.env.singleRun === 'true',

        webpack: {
            devtool: 'inline-source-map',
            module: {
                /* Transpile source and test files */
                preLoaders: [{
                    test: /\.js$/,
                    exclude: path.resolve(__dirname, 'node_modules'),
                    loader: 'babel-loader',
                    query: {
                        presets: [
                            ['latest', {
                                es2015: {
                                    loose: true
                                }
                            }], 'stage-0', 'react'
                        ],
                        plugins: (coverage ? ['istanbul'] : []).concat(['syntax-async-generators', ["transform-runtime", {
                            "helpers": true,
                            "polyfill": true,
                            "regenerator": true,
                            "moduleName": "babel-runtime"
                        }]]),
                        babelrc: false
                    }
                }],
                /* Only Instrument our source files for coverage */
                loaders: []
            },
            resolve: {
                // The React DevTools integration requires preact as a module
                // rather than referencing source files inside the module
                // directly
                alias: {
                    qreact: __dirname + '/src/preact',
                    preact: __dirname + '/src/preact-compat',
                    'preact-react-web': __dirname + '/src/preact-compat-react-web'
                },
                modulesDirectories: [__dirname, 'node_modules']
            },
            externals: {
                'qrn-web': 'QunarReactWeb'
            },
            plugins: [
                new webpack.DefinePlugin({
                    coverage: coverage,
                    NODE_ENV: JSON.stringify(process.env.NODE_ENV || ''),
                    ENABLE_PERFORMANCE: performance,
                    DISABLE_FLAKEY: !!String(process.env.FLAKEY).match(/^(0|false)$/gi)
                })
            ]
        },

        webpackMiddleware: {
            noInfo: true
        }
    });
};