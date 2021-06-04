import React from 'react';
import Slideshow from './SlideshowComponent';
import Events from './EventsComponent';

function Home(props) {
    return (
        <div>
            <Slideshow />
            <Events />
        </div>
    );
}

export default Home;   