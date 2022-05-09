import React from 'react';
import info from "../../media/whyus.png";


const Whyus = () => {
    return (
        <div className="container py-4">
            <div className="row justify-content-between align-items-center">
                <div className="col-md-6 my-3">
                    <img className="w-100 px-4" src={info} alt="info img" />
                </div>
                <div className="col-lg-5 col-md-6 col-sm-8 my-3 mx-auto">
                    <div className="ps-auto">
                        <div className="m-4 mt-0 text-second">
                            <p><i className="pe-1 text-main far fa-check-circle"></i> 100% Satisfaction Guarantee</p>
                            <p><i className="pe-1 text-main far fa-check-circle"></i> Free Shipping</p>
                            <p><i className="pe-1 text-main far fa-check-circle"></i> Free Frame Customiztion</p>
                            <p><i className="pe-1 text-main far fa-check-circle"></i> Exceptional Customer Service</p>
                            <p><i className="pe-1 text-main far fa-check-circle"></i> Top-Level Quality Control</p>
                            <p><i className="pe-1 text-main far fa-check-circle"></i> 30 Days Money Back Guarantee</p>
                            <p><i className="pe-1 text-main far fa-check-circle"></i> 1k+ Happy Customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Whyus;