import React from 'react';
import Banner from './Banner';
import BestSellers from './BestSellers';
import Reviews from './Reviews';
import Whyus from './Whyus';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BestSellers></BestSellers>
            <Whyus></Whyus>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;