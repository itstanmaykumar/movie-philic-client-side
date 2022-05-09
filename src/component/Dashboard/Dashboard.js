import React from 'react';
import { Link } from 'react-router-dom';
import add from "../../media/add.png"
import manage from "../../media/manage.png"
import info from "../../media/info.png"

const Dashboard = () => {
    return (
        <div className='container my-5'>
            <div className='row justify-content-between align-items-center py-5'>
                <div className='col-lg-4'>
                    <Link className='d-flex flex-column align-items-center bg-light-pro p-5 rounded-20 shadow box' to='/manageproducts'>
                        <img className='w-25 d-block' width="" src={manage}></img>
                        <h4 className='text-dark mt-3'>Manage Products</h4>
                    </Link>
                </div>
                <div className='col-lg-4'>
                    <Link className='d-flex flex-column align-items-center bg-light-pro p-5 rounded-20 shadow box' to='/addproducts'>
                        <img className='w-25 d-block' width="" src={add}></img>
                        <h4 className='text-dark mt-3'>Add Products</h4>
                    </Link>
                </div>
                <div className='col-lg-4'>
                    <Link className='d-flex flex-column align-items-center bg-light-pro p-5 rounded-20 shadow box' to='/myproducts'>
                        <img className='w-25 d-block' width="" src={info}></img>
                        <h4 className='text-dark mt-3'>My Products</h4>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;