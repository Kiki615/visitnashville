import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Slideshow from './components/Slideshow';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Visit Nashville</NavbarBrand>
                </div>
                </Navbar>
                <Slideshow />
            </div>
        );
    }
}

export default App;