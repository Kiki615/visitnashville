import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Eats from './EatsComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './ContactComponent';
import Music from './MusicComponent';
import { RESTAURANTS } from '../shared/restaurants';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: RESTAURANTS
        };
    }



    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/eats' render={() => <Eats restaurants={this.state.restaurants} />} />
                    <Route exact path='/contactus' component={Contact} />
                    <Route exact path='/music' component={Music} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default Main;