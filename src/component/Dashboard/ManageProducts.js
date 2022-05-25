import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import usePosters from '../../hooks/usePosters';
import add from "../../media/add.png";

const ManageProducts = () => {

    const [posters, setPosters] = usePosters();

    //console.log(posters);

    const deleteProduct = (id) => {
        const proceed = window.confirm("Are you sure , you want to delete this product?");
        if (proceed) {
            axios.delete(`https://posterisks.herokuapp.com/posters/${id}`)
                .then(res => {
                    if (res.data.deletedCount) {
                        toast.warn("Product is deleted. ");
                        const remainingPosters = posters.filter(poster => poster._id !== id);
                        setPosters(remainingPosters);
                    }
                })
        }
    };

    return (
        <div className="container of-x-h pb-5 mb-5">
            <div className="row pb-5">
                <h1 className='mt-5 text-center'>Current Inventory Stock</h1>
                <p className='text-center'>Manage All Product Inventories</p>
                <div className="bg-dark-pro my-5 rounded-3">
                    <div className="pt-2">
                        {
                            posters.length === 0 ?
                                (
                                    <button className="btn fs-5 text-white pb-2" type="button">
                                        <span className="me-4 spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                        Loading...
                                    </button>
                                )
                                :
                                (
                                    <table className="table text-light">
                                        <thead className="text-main">
                                            <tr>
                                                <th>Name</th>
                                                <th>Quantity</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                posters.map((product) => (
                                                    <tr key={product._id}>
                                                        <td>{product.title}</td>
                                                        <td>{product.quantity}</td>
                                                        <td onClick={() => deleteProduct(product._id)} className="pointer ico text-danger">Delete</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                )
                        }
                    </div>
                </div>
            </div>
            <div className='col-12 mx-auto text-center mb-5'>
                <Link className='btn btn-dark px-4 py-3' to='/addproducts'>
                    <img width="30" src={add} alt="manage" />
                    <span className='ps-3 fs-5'>Add A New Product</span>
                </Link>
            </div>
        </div>
    );
};

export default ManageProducts;