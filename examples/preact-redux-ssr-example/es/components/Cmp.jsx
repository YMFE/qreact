import React, { Component } from 'react';

export default class Clock extends Component {
    constructor() {
        super();
        // set initial time:
        this.state.time = Date.now();
    }
    componentDidMount() {
        // update time every second
        this.timer = setInterval(() => {
            const time = Date.now();
            this.setState({
                time
            });
        }, 1000);
    }
    componentWillUnmount() {
        // stop when not renderable
        clearInterval(this.timer);
    }
    render({ setAge }, state) {
        const time = new Date(state.time).toLocaleTimeString();
        return (
          <div>
            <p><button onClick={ () => setAge(0) }>Reset Age</button></p>
            <p>It is <span>{ time }</span> now!</p>
          </div>);
    }
}
