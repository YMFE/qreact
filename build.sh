#!bin/bash

echo 'start build'

# build qreact-react-web.js
echo 'build umd'
configs="_rollup.config.js _reactweb.config.js"

for config in $configs;do
    cp -f rollup.config.js $config;
done

sed -i "" "s/\/\/ comment-start/\/\* comment-start/g" src/preact-compat.js
sed -i "" "s/\/\/ comment-end/comment-end *\//g" src/preact-compat.js
sed -i "" "s/\/\/ comment-start/\/\* comment-start/g" src/preact-compat-react-web.js
sed -i "" "s/\/\/ comment-end/comment-end *\//g" src/preact-compat-react-web.js

# special replace for react native web
cp -f src/preact-compat.js src/preact-compat-react-web.js
sed -i "" "s/dist\/qreact\.js/dist\/qreact-react-web.js/g" _reactweb.config.js
sed -i "" "s/src\/preact-compat\.js/src\/preact-compat-react-web.js/g" _reactweb.config.js
sed -i "" "s/\/\/ import '.\/event\/injectResponderEventPlugin'/import '.\/event\/injectResponderEventPlugin'/" src/preact-compat-react-web.js
rollup -c _reactweb.config.js
uglifyjs dist/qreact-react-web.js -o dist/qreact-react-web.min.js -p relative -m --source-map dist/qreact-react-web.min.map

# build qreact.js with rollup
rollup -c rollup.config.js


sed -i "" "s/\/\* comment-start/\/\/ comment-start/g" src/preact-compat.js
sed -i "" "s/comment-end \*\//\/\/ comment-end/g" src/preact-compat.js
sed -i "" "s/\/\* comment-start/\/\/ comment-start/g" src/preact-compat-react-web.js
sed -i "" "s/comment-end \*\//\/\/ comment-end/g" src/preact-compat-react-web.js

echo 'build es'
for config in $configs;do
    sed -i "" "s/dist\//es\//g" $config
    sed -i "" "s/'default'/'named'/g" $config
    sed -i "" "s/\'umd\'/\'es\'/g" $config
    rollup -c $config
done


sed -i "" "s/\/\/ comment-start/\/\* comment-start/g" src/preact-compat.js
sed -i "" "s/\/\/ comment-end/comment-end *\//g" src/preact-compat.js
sed -i "" "s/\/\/ comment-start/\/\* comment-start/g" src/preact-compat-react-web.js
sed -i "" "s/\/\/ comment-end/comment-end *\//g" src/preact-compat-react-web.js

echo 'build cjs'
for config in $configs;do
    sed -i "" "s/es\//cjs\//g" $config
    sed -i "" "s/\'es\'/\'cjs\'/g" $config
    sed -i "" "s/'named'/'default'/g" $config
    rollup -c $config
done

for config in $configs;do
    rm -f $config
done
# rm -f src/preact-compat-react-web.js
sed -i "" "s/\/\* comment-start/\/\/ comment-start/g" src/preact-compat.js
sed -i "" "s/comment-end \*\//\/\/ comment-end/g" src/preact-compat.js

# since rollup didn't remove comments, remove "[//|/*|*] @provides" with sed
sed -i "" "s/@provides//g" dist/qreact.js

# minify qreact.min.js
# -m, --mangle names/pass mangler true
uglifyjs dist/qreact.js -o dist/qreact.min.js -p relative -m --source-map dist/qreact.min.map

# try to get gzipped size
checkgzip=$(which gzip)
if [[ -x $checkgzip ]];then
    gzip -fk dist/qreact.min.js
    if [[ $res -ne 0 ]];then
        echo 'gzip faild'
        exit 250
    fi
    echo "gziped size $(ls -lh dist/qreact.min.js.gz | awk '{print $5}')"
    rm dist/qreact.min.js.gz
fi


echo 'start copy lib'

if [ ! -d lib ];then
    mkdir lib
else
    rm -rf lib/*
fi

# react event libs
# exclude: onlyChild findNodeHandle CSSPropertyOperations TouchHistoryMath
libsToExports="EventConstants EventPluginRegistry PooledClass reactProdInvariant EventPluginUtils SyntheticUIEvent EventPropagators accumulate EventPluginHub SyntheticEvent ViewportMetrics ReactBrowserEventEmitter"
for lib in $libsToExports;do
    cp -rf src/lib/${lib}.js lib/
done

# ResponderEventPlugin dependences, TapEventPlugin
libsToExports="injectResponderEventPlugin normalizeNativeEvent ResponderTouchHistoryStore ResponderEventPlugin TapEventPlugin ResponderSyntheticEvent findNodeHandle CSSPropertyOperations TouchHistoryMath"
for lib in $libsToExports;do
    #babel src/event/${lib}.js --out-file lib/${lib}.js
    #echo "stupid transform: "src/event/${lib}.js" you'd better check"
    filename=src/event/${lib}.js
    if [ ! -f $filename ];then
        filename=src/lib/${lib}.js
    fi
    node scripts/es6-2-es5.js $filename > lib/${lib}.js
done

# preact-compat libs
compatLibs=$(find src/compat-lib -name "*.js")
for lib in $compatLibs;do
    filename=`basename $lib`
    sed "s/preact-compat/qreact/g" $lib > lib/${filename}
done

echo 'build devtools'
rollup -c ./rollup.devtools.config.js

echo 'done'