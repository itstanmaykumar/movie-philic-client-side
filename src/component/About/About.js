import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../media/logo.png'
import Whyus from '../Home/Whyus';

const About = () => {
    return (
        <div className='container'>
            <div className="mt-4 col-lg-6 col-sm-10 mx-auto">
                <div className="pb-2">
                    <Link className="navbar-brand d-flex align-items-center justify-content-center" to="/home">
                        <img className='d-block' width="50" src={logo} alt="hashtag logo" />
                        <h2 className="fs-2 fw-bolder text-dark">Posterisks</h2>
                    </Link>
                </div>
                <small className="text-second d-block text-center"><span className="text-dark">Posterisks, Inc.</span> provides great deals on our huge selection of posters & prints, with fast shipping, free returns, and custom framing options you'll love!</small>
            </div>
            <Whyus></Whyus>
        </div>
    );
};

export default About;