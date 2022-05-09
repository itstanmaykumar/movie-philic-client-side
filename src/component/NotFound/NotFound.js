import React from 'react';
import { Link } from 'react-router-dom';
import img404 from '../../media/404.png';

const NotFound = () => {
    return (
        <div className='container'>
            <div className='text-center mt-2 mb-5 pb-5 mx-5'>
                <h1 className='fw-bolder mt-4'>Oopss! Sorry for that...</h1>
                <img className='w-50 mx-auto d-block' src={img404} alt="404 image" />
                <h1 className='fw-bolder mt-2'>Page Not Found</h1>
                <p>We're sorry, the page you requested could not be found. <br></br> Please go back to the homepage.</p>
                <Link className='btn btn-dark rounded-10' to='/home'>GO HOME</Link>
            </div>
        </div>
    );
};

export default NotFound;