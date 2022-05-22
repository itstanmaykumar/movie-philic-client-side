import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductItem = ({ poster }) => {
    const { _id, title, supplier, img, text, price, quantity } = poster;
    let navigate = useNavigate();

    const handlePosterDetails = (id) => {
        navigate(`/posters/${id}`);
    }

    return (
        <div className="col-xl-4 col-md-6 text-start mx-auto">
            <div className="p-2 h-100">
                <div className="d-flex flex-column box justify-content-between bg-white h-100 rounded-10 shadow shadow-hover">
                    <div className=''>
                        <img className='mb-3 w-100 d-block rounded-10 shadow' src={img} />
                        <div className='px-3'>
                            <h5 className='fw-bolder'>{title}</h5>
                            <small className='d-flex justify-content-between text-secondary'>
                                <span className='d-block'>By <span className='fw-bolder'>{supplier}</span></span>
                                <span className='d-block fw-bolder text-dark'>${price}</span>
                            </small>
                        </div>
                        <div className='pt-2 pb-3 px-3'>
                            <small className='text-secondary'>{text}</small>
                        </div>
                    </div>
                    <div className="pb-3 text-center">
                        <p className='py-1 px-3 text-start'>Available Copies: <span className='fw-bolder text-main'>{quantity}</span></p>
                        <button onClick={() => handlePosterDetails(_id)} className='btn btn-dark shadow' to='/posterdtails'>Update Stock</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;