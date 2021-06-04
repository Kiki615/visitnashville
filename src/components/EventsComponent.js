import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { EVENTS } from '../shared/events';

var cardStyle = {
    display: 'block',
    width: '30vw',
    transitionDuration: '0.3s',
    height: 'auto',
    padding: '20px'
}
class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: EVENTS
        };
    };
    

    render() { 
        const featuredEvents = this.state.events.map(event => {
            return (
            
                    <div className="row mx-auto justify-content-md-center mb-5">
                        <div key={event.id} className="col-md-6">
                            <Card>
                                <CardImg width="100px" src={event.image} alt={event.name} /> 
                            </Card>
                        </div>
                        <div key={event.id} className="col-md-6">
                            <Card style={cardStyle}>
                                <CardTitle>{event.name}</CardTitle>
                                <CardText>{event.description}</CardText>
                            </Card>
                        </div>
                    </div>
            ); 
        });

        return (
            <div className="container">
                <div className="row">
                    {featuredEvents}
                </div>
            </div>
        );
    }
}

export default Events;