import React from 'react';
import usePosters from '../../hooks/usePosters';
import ProductItem from './ProductItem';

const Products = () => {

    const [posters, setPosters] = usePosters();

    return (
        <div className="text-center">
            <div className="container">
                <p className="mt-5 mb-0 text-second">15% OFF EVERYTHING</p>
                <h2 className="text-main">Explore The Best Posters</h2>
                <div className="mx-lg-5 px-lg-5">
                    <small className="mb-2 mx-md-5 px-md-5 d-block text-secondary">Find top-selling posters and art prints and make them yours with quality canvas, handcrafted frames, or seek wood mounts.</small>
                </div>
            </div>
            <div className="container my-5 px-4">
                <div className="container px-5 py-5 rounded-10 bg-light-pro">
                    <div className="row g-4 pt-5">
                        {
                            posters.length === 0 ?
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
                                    posters.map((poster) => (
                                        <ProductItem key={poster.id} poster={poster}></ProductItem>
                                    ))
                                )

                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;