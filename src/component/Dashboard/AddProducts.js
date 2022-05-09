import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const AddProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("/posters.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const history = useLocation();

    const refTitle = useRef();
    const refImg = useRef();
    const refSupplier = useRef();
    const refDes = useRef();
    const refPrice = useRef();
    const refQuantity = useRef();

    const handleNewProduct = (e) => {
        const totalCurrentProducts = products.length;
        const id = parseInt(totalCurrentProducts);
        const title = refTitle.current.value;
        const img = refImg.current.value;
        const supplier = refSupplier.current.value;
        const text = refDes.current.value;
        const price = refPrice.current.value;
        const quantity = refQuantity.current.value;

        const newProduct = { id, title, supplier, img, text, price, quantity };

        axios.post("/posters.json", newProduct)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Your Feedback Is Posted!! Redirecting you to Dashboard...");
                    history.push("/dashboard");
                }
            })
        e.preventDefault();
    }

    return (
        <div className="container of-x-h">
            <div className="row">
                <div className="">
                    <div className="ms-lg-3 mt-lg-3 container">
                        <form onSubmit={handleNewProduct} className="px-5 pt-3 pb-5 bg-dark-pro rounded-10 shadow-lg text-main">
                            <h3 className="mt-4 mb-0 text-main">Add A New Product</h3>
                            <small className="mb-3 text-second d-block">Please fill up this form to add the product.</small>
                            <div className="my-4">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input ref={refTitle} type="text" className="form-control" id="title" placeholder="Ex- The Fault In Our Stars" required />
                            </div>
                            <div className="my-4">
                                <label htmlFor="img" className="form-label">Poster Image Url</label>
                                <input ref={refImg} type="text" className="form-control" id="img" placeholder="Ex- https://i.ibb.co/C6wvWLr/Prometheus-2012.jpg" required />
                            </div>
                            <div className="my-4">
                                <label htmlFor="supplier" className="form-label">Supplier Name</label>
                                <input ref={refSupplier} type="text" className="form-control" id="supplier" placeholder="Ex- Jane Doe" required />
                            </div>
                            <div className="my-4">
                                <label htmlFor="pImg" className="form-label">Poster Price</label>
                                <input ref={refPrice} type="text" className="form-control" id="pPrice" placeholder="Ex- 11.99" required />
                            </div>
                            <div className="my-4">
                                <label htmlFor="year" className="form-label">Poster Quantity</label>
                                <input ref={refQuantity} type="text" className="form-control" id="pQuantity" placeholder="Ex- 115" required />
                            </div>
                            <div className="my-4">
                                <label htmlFor="Description" className="form-label">Poster Description</label>
                                <textarea ref={refDes} maxLength="200" type="text" className="form-control" id="Description" placeholder="Provide a brief and short description of the poster" required />
                            </div>
                            <button type="submit" className="mt-4 btn btn-main">Add New Poster</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="my-5"></div>
        </div>
    );
};

export default AddProduct;