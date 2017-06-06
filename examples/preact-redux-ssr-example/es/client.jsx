import React from 'react';
import ReactDOM from 'react-dom';
import container from './container';

const data = window.__backend_data__;

ReactDOM.render(
    container(data),
    document.body,
    document.getElementById('app')
);
