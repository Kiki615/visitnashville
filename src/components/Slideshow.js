import React, { Component } from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const fadeImages = [
    'assets/images/grandolopry.jpg',
    'assets/images/legends-corner.jpg',
    'assets/images/nashville-acme.jpg',
    'assets/images/nashville-skyline.jpg',
    'assets/images/tinpansouth.jpg'];

    const fadeProperties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true
      }


const Slideshow = () => {
    return (
        <div className="slide-container">
            <Fade {...fadeProperties}>
                <div className="each-fade">
                <div className="image-container">
                    <img src={fadeImages[0]} alt="img" />
                </div>
             
                </div>
                <div className="each-fade">
                <div className="image-container">
                    <img src={fadeImages[1]} alt="img"/>
                </div>
                
                </div>
                <div className="each-fade">
                <div className="image-container">
                    <img src={fadeImages[2]} alt="img"/>
                </div>
               
                </div>
                <div className="each-fade">
                <div className="image-container">
                    <img src={fadeImages[3]} alt="img"/>
                </div>
              
                </div>
                <div className="each-fade">
                <div className="image-container">
                    <img src={fadeImages[4]} alt="img"/>
                </div>
               
                </div>
            </Fade>
        </div>
    );
}


export default Slideshow;