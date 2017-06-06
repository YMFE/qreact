# Tests Of Qreact

## Thanks To

All those tests base on [developit preact@7.1.0 test](https://github.com/developit/preact/tree/7.1.0/test).

We have made some Modifications to fulfil the rewrite version Qreact.


## Tests Detail

### Run Test

#### Run UI Tests

```
    # test all in test/*
    # start selenium-server-standalone
    java -jar selenium-server-standalone-3.3.1.jar
    npm run test
```

#### Run Generic Tests

```
    # auto ignore test/ui/test-qrn-web.js
    ./node_modules/.bin/karma start
```

### Passed Tests

+ test/browser/components.js
+ test/browser/svg.js
+ test/browser/context.js
+ test/browser/keys.js
+ test/browser/lifecycle.js
+ test/browser/linked-state.js
+ test/browser/refs.js
+ test/browser/spec.js
+ test/browser/render.js
+ test/browser/performance.js
+ test/browser/devtools.js
+ test/shared/exports.js
+ test/shared/h.js

### Skipped Tests

null

### UI Tests Using Selenium

+ test/ui/test-qrn-web.js - test with react native web demo


