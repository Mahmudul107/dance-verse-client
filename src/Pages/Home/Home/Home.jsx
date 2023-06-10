import React from 'react';
import Marque from './Marque/Marque';
import Slider from './slider/Slider';
import PopularClass from './PopularClass/PopularClass';
import PopularInstructors from './PopularInstructors/PopularInstructors';

const Home = () => {
    return (
        <div>
            <Slider/>
            <Marque/>
            <PopularClass/>
            <PopularInstructors/>
        </div>
    );
};

export default Home;