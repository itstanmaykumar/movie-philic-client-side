import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductDetails = () => {
    const { posterId } = useParams();
    const navigate = useNavigate();

    const [poster, setPoster] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/posters/${posterId}`)
            .then(res => res.json())
            .then(data => setPoster(data))
    }, {});

    const id = poster?._id;
    const title = poster?.title;
    const img = poster?.img;
    const text = poster?.text;
    const supplier = poster?.supplier;
    const price = poster?.price;
    const quantity = poster?.quantity;

    const handleAdd = () => toast.success("fg Successful!");

    return (
        <div className='container'>
            <div className='my-5'>
                <div className='row justify-content-between align-items-center '>
                    <div className='col-md-5'>
                        <img className='d-block w-75 mx-auto rounded-20 shadow' src={img}></img>
                    </div>
                    <div className='col-md-6'>
                        <h1 className='my-3 fw-bolder'>{title}</h1>
                        <p className='fs-5'><span className='fw-bolder'>Supplier: </span>{supplier}</p>
                        <h3>Movie Synopsis</h3>
                        <p>{text}</p>
                        <p className='fs-5'><span className='fw-bolder'>Price: </span>${price}</p>
                        <div className='py-1'>
                            <h3>Available: <span className='fw-bolder text-main'>{quantity} Copies</span></h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center align-items-center p-md-5 pt-md-0'>
                <form className='col-lg-6 p-5 pt-0 rounded-20 shadow bg-light-pro mb-5'>
                    <p onClick={handleAdd} type='submit' className='btn btn-main d-inline-block mt-5'>Deliver This Poster</p>
                    <div className='px-2 row justify-content-between align-items-center'>
                        <hr className="col-5" />
                        <p className="col-1">or</p>
                        <hr className="col-5" />
                    </div>
                    <h4 className=''>Restock of this Poster</h4>
                    <div className="my-3">
                        <label htmlFor="cardId" className="form-label">Add Quantity Number</label>
                        <input type="number" className="form-control" id="cardId" required />
                    </div>
                    <p onClick={handleAdd} type='submit' className='btn btn-dark d-inline-block'>Add <i className="ps-1 fas fa-angle-double-right"></i></p>
                </form>
            </div>
        </div>
    );
};

export default ProductDetails;