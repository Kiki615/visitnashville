import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { MUSIC } from '../shared/music';

class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {
            music: MUSIC
        };
    };

    render () {
        const featuredMusic = this.state.music.map(music => {
            
            return (
            
                    <div className="row mx-auto justify-content-md-center mb-5">
                        
                       
                        <div key={music.id} className="col">
                       
                            <div className="p-2">
                                <h2>{music.name}</h2>
                                <CardText>{music.location}</CardText>
                                <CardText>{music.description}</CardText>
                            </div>
                        </div>
                    </div>
            ); 
        });

        return (
            <div className="page-bgrd">
                <div className="container mt-3">
                    <h1>Music Venues</h1>
                    <hr />
                    <div className="row mt-5">
                    
                        {featuredMusic}
                    </div>
                </div>
            </div>
        );
    }
}

export default Music;

