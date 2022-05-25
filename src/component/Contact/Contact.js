import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import query from '../../media/query.svg'

const Contact = () => {
    const handleQuery = (e) => {
        e.preventDefault();
        const resolveTime = new Promise(resolve => setTimeout(resolve, 2000));
        toast.promise(
            resolveTime,
            {
                pending: 'Sending...',
                success: "We've got your feedback!",
                error: 'Sending Failed!'
            }
        )
    }
    return (
        <section className='container pb-5'>
            <div className='my-5'>
                <h1 className='mt-5 mb-5 text-center'>Fol<span className='border-bottom border-3'>low Us </span> On</h1>
                <div className="mt-4 mb-5 pb-5 text-center">
                    <Link to="/social"><i className="ico text-dark me-5 fs-3 fab fa-facebook-f"></i></Link>
                    <Link to="/social"><i className="ico text-dark me-5 fs-3 fab fa-twitter"></i></Link>
                    <Link to="/social"><i className="ico text-dark me-5 fs-3 fab fa-google-plus-g"></i></Link>
                    <Link to="/social"><i className="ico text-dark fs-3 fab fa-linkedin-in"></i></Link>
                </div>
            </div>
            <h1 className='text-center my-3'>Go<span className='border-bottom border-3'>t A Que</span>ry?</h1>
            <div className='row justify-content-between align-items-center'>
                <div className='col-lg-5'>
                    <img className='w-100' src={query}></img>
                </div>
                <div className='col-lg-6 px-5 py-4'>
                    <h3>Send Us Your Feedback or Query</h3>
                    <form onSubmit={handleQuery} className='mt-4'>
                        <div className="row mb-3">
                            <div className="col-sm-10">
                                <input type="email" className="form-control shadow-sm" id="inputEmail" placeholder='Your Email' required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="form-floating col-sm-10">
                                <textarea className="form-control h-100" rows="3" cols="50" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                <label className='px-4' htmlFor="floatingTextarea">Comments</label>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-10">
                                <div className="form-check">
                                    <input className="form-check-input bg-dark" type="checkbox" id="gridCheck" defaultChecked />
                                    <label className="form-check-label" htmlFor="gridCheck">
                                        Get Offers & Discount Alerts
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-dark">Submit <i className="ps-1 fas fa-angle-double-right"></i></button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;