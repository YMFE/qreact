import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import reducers from '../../redux/reducers';
import * as actions from '../../redux/actions';
import Cmp from './Cmp';

function bindActions(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}


class App extends Component {
    render({ name, age, actions }) {
        return (<div class="app" id="app">
          <h1>Hello, { name } !</h1>
          <p>
            Your age is { age }.
            <button onClick={ actions.increaseAge }>+1</button>
          </p>
          <div><Cmp {...actions} /></div>
        </div>);
    }
}

export default connect(reducers, bindActions)(App);
