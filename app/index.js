import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Popular from '../app/components/Popular';

// state + lifecycle + ui
class App extends Component {
    render() {
        return(
            <div className='container'>
                <Popular />
            </div>
            
        )
    }
}

// render the react element to the dom
ReactDOM.render(
    <App />,
    document.getElementById('app')
)