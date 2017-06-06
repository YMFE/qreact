import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from '../redux/reducers';

export default function (initData) {
    // Create a new Redux store instance
    const store = createStore(reducers, initData);
    // universal component
    return (<Provider store={store}>
                <App />
            </Provider>);
}
