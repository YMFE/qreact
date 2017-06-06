
import React from 'react';
import { renderToString } from 'qreact-render-to-string';
import container from './container';

module.exports = function (initData) {
    // Render the component to a string
    let a = container(initData);
    const html = renderToString(a);

    return {
        html,
        state: initData
    };
};
