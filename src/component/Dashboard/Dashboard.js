import React from 'react';
import { Link } from 'react-router-dom';
import add from "../../media/add.png"
import manage from "../../media/server.png"
import info from "../../media/info.png"
import admin from "../../media/admin.png"
import cart from "../../media/cart.png"
import review from "../../media/review.png"

const Dashboard = () => {
    return (
        <div className='container my-5'>
            <div className='row justify-content-between align-items-center py-5 g-4'>
                <div className='col-lg-4 col-md-6'>
                    <Link className='d-flex flex-column align-items-center bg-light-pro p-4 rounded-20 shadow box' to='/manageproducts'>
                        <img className='w-25 d-block' width="" src={manage}></img>
                        <h4 className='text-dark mt-3'>Manage Products</h4>
                    </Link>
                </div>
                <div className='col-lg-4 col-md-6'>
                    <Link className='d-flex flex-column align-items-center bg-light-pro p-4 rounded-20 shadow box' to='/addproducts'>
                        <img className='w-25 d-block' width="" src={add}></img>
                        <h4 className='text-dark mt-3'>Add Products</h4>
                    </Link>
                </div>
                <div className='col-lg-4 col-md-6'>
                    <Link className='d-flex flex-column align-items-center bg-light-pro p-4 rounded-20 shadow box' to='/myproducts'>
                        <img className='w-25 d-block' width="" src={info}></img>
                        <h4 className='text-dark mt-3'>My Products</h4>
                    </Link>
                </div>
                <div className='col-lg-4 col-md-6'>
                    <Link className='d-flex flex-column align-items-center bg-light-pro p-4 rounded-20 shadow box' to='/myorders'>
                        <img className='w-25 d-block' width="" src={cart}></img>
                        <h4 className='text-dark mt-3'>My Orders</h4>
                    </Link>
                </div>
                <div className='col-lg-4 col-md-6'>
                    <Link className='d-flex flex-column align-items-center bg-light-pro p-4 rounded-20 shadow box' to='/makeadmin'>
                        <img className='w-25 d-block' width="" src={admin}></img>
                        <h4 className='text-dark mt-3'>Make Admin</h4>
                    </Link>
                </div>
                <div className='col-lg-4 col-md-6'>
                    <Link className='d-flex flex-column align-items-center bg-light-pro p-4 rounded-20 shadow box' to='/addreview'>
                        <img className='w-25 d-block' width="" src={review}></img>
                        <h4 className='text-dark mt-3'>Add Review</h4>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;