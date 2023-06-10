import React from 'react';
import Marque from './Marque/Marque';
import Slider from './slider/Slider';
import PopularClass from './PopularClass/PopularClass';

const Home = () => {
    return (
        <div>
            <Slider/>
            <Marque/>
            <PopularClass/>
        </div>
    );
};

export default Home;