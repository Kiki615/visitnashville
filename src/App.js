import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { RESTAURANTS } from './shared/restaurants';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: RESTAURANTS
        };
    }
    render() {
        return (
        <BrowserRouter>
            <div className="App">
                <Main />
            </div>
        </BrowserRouter>
        );
    }
}

export default App;