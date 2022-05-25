import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../media/logo.png'
import Whyus from '../Home/Whyus';

const About = () => {
    return (
        <div className='container'>
            <div className="mt-4 col-lg-8 col-sm-10 mx-auto">
                <div className="pb-4 pt-5">
                    <Link className="navbar-brand d-flex align-items-center justify-content-center" to="/home">
                        <img className='d-block' width="50" src={logo} alt="hashtag logo" />
                        <h2 className="fs-2 fw-bolder text-dark">Posterisks</h2>
                    </Link>
                </div>
                <p className="fs-5 text-second d-block text-center"><span className="text-dark">Posterisks, Inc.</span> provides great deals on our huge selection of posters & prints, with fast shipping, free returns, and custom framing options you'll love!</p>
            </div>
            <Whyus></Whyus>
        </div>
    );
};

export default About;