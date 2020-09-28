import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// state + lifecycle + ui
class App extends Component {
    render() {
        return(
            <div>Hello world!</div>
        )
    }
}

// render the react element to the dom
ReactDOM.render(
    <App />,
    document.getElementById('app')
)