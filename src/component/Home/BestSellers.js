import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import usePosters from '../../hooks/usePosters';
import ProductItem from '../Products/ProductItem';

const BestSellers = () => {
    const [posters, setPosters] = usePosters();

    const bestSeller = posters.slice(0, 6);

    return (
        <div className="px-2">
            <div className="container p-5 pb-3 text-center bg-light-pro rounded-10">
                <h2 className="mb-3">Top Tr<span className="border-bottom border-main border-3">ending Po</span>sters</h2>
                <div className="row g-4 pt-5">
                    {
                        bestSeller.length === 0 ?
                            (
                                <div className="d-flex justify-content-center text-main">
                                    <h1>Loading.....</h1>
                                    <div className="mt-2 ms-2 spinner-border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                            )
                            :
                            (
                                bestSeller.map((poster) => (
                                    <ProductItem key={poster._id} poster={poster}></ProductItem>
                                ))
                            )

                    }
                </div>
                <div className='my-5 text-center'>
                    <Link className="mt-4 px-4 border-2 fw-bolder btn btn-outline-main" to="/posters">Manage Inventories</Link>
                </div>
            </div>
        </div>
    );
};

export default BestSellers;