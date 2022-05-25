import axios from 'axios';
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import usePoster from '../../hooks/usePoster';
import manage from "../../media/server.png";

const ProductDetails = () => {
    const { posterId } = useParams();
    const navigate = useNavigate();

    let [poster, setPoster] = usePoster(posterId);

    const handleQuantityUpdate = async (updatedQuantity) => {
        const url = `https://posterisks.herokuapp.com/posters/${posterId}`;
        await axios.put(url, updatedQuantity);
    }

    const handleDeliver = (e) => {
        var { quantity, ...rest } = poster;
        if (quantity == 0) {
            toast.error("Product is unavailable. Please restock the product.");
        }
        else {
            quantity--;
            var updatedQuantity = { newQuantity: quantity };
            handleQuantityUpdate(updatedQuantity);
            const resolveTime = new Promise(resolve => setTimeout(resolve, 500));
            toast.promise(
                resolveTime,
                {
                    pending: 'Processing...',
                    success: 'Poster is delievered.'
                }
            )
            setPoster({ quantity, ...rest })
        }
    };

    const handleAdd = (e) => {
        e.preventDefault();
        const restockQuantity = parseInt(e.target.quantityUpdate.value);
        e.target.quantityUpdate.value = '';
        var { quantity, ...rest } = poster;

        quantity += restockQuantity;
        var updatedQuantity = { newQuantity: quantity };
        handleQuantityUpdate(updatedQuantity);
        const resolveTime = new Promise(resolve => setTimeout(resolve, 500));
        toast.promise(
            resolveTime,
            {
                pending: 'Processing...',
                success: 'Stock is updated.'
            }
        )
        setPoster({ quantity, ...rest })
    }

    return (
        <div className='container'>
            <div className='my-5'>
                <div className='row justify-content-between align-items-center '>
                    <div className='col-md-5'>
                        <img className='d-block w-75 mx-auto rounded-20 shadow' src={poster.img}></img>
                    </div>
                    <div className='col-md-6'>
                        <h1 className='my-3 fw-bolder'>{poster.title}</h1>
                        <p className='fs-5'><span className='fw-bolder'>Supplier: </span>{poster.supplier}</p>
                        <h5 className='fw-bolder'>Movie Synopsis</h5>
                        <p>{poster.text}</p>
                        <p className='fs-5'><span className='fw-bolder'>Price: </span>${poster.price}</p>
                        <div className='py-1'>
                            <h3>Available: <span className='fw-bolder text-main'>{poster.quantity} Copies</span></h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center align-items-center p-md-5 pt-md-0'>
                <div className='col-lg-6 p-5 pt-0 rounded-20 shadow bg-light-pro mb-5'>
                    <p onClick={handleDeliver} type='submit' className='btn btn-main d-inline-block mt-5'>Deliver This Poster</p>
                    <div className='px-2 row justify-content-between align-items-center'>
                        <hr className="ms-1 col-5" />
                        <p className="col-1">or</p>
                        <hr className="col-5 me-1" />
                    </div>
                    <h4 className=''>Restock this Poster</h4>
                    <form onSubmit={handleAdd} className="mt-3">
                        <label className="form-label">New Product Quantity</label>
                        <input type="number" min="1" className="form-control" name="quantityUpdate" required />
                        <button type='submit' className='mt-3 btn btn-dark d-inline-block'>Add <i className="ps-1 fas fa-angle-double-right"></i></button>
                    </form>
                </div>
                <div className='col-12 mx-auto text-center mb-5'>
                    <Link className='btn btn-dark px-4 py-3' to='/manageproducts'>
                        <img width="30" src={manage} alt="manage" />
                        <span className='ps-3 fs-5'>Manage All Inventories</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;