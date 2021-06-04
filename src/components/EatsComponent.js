import React, { Component } from 'react';
import { Card, Container, CardGroup, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Eats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedEats: null
        };
    };
    

    render() { 
        const eats = this.props.restaurants.map(restaurant => {
            return (
               
                    <div key={restaurant.id} className="col">
                        <Card>
                            <CardImg width="200px" src={restaurant.image} alt={restaurant.name} />
                            <CardBody>
                                <CardTitle>{restaurant.name}</CardTitle>
                                <CardText className='mx-auto p-2'>{restaurant.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
               
            );
        });

        return (
            <div className="container mt-3">
                <h1>Local Restaurants</h1>
                <div className="row">
                    {eats}
                </div>
            </div>
        );
    }
}

export default Eats;