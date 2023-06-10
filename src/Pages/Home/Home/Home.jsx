import React from 'react';
import Marque from './Marque/Marque';
import Slider from './slider/Slider';
import PopularClass from './PopularClass/PopularClass';
import PopularInstructors from './PopularInstructors/PopularInstructors';
import Gallery from './Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Slider/>
            <Marque/>
            <PopularClass/>
            <PopularInstructors/>
            <Gallery/>
        </div>
    );
};

export default Home;