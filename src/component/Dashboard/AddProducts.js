import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../firebase.init';

const AddProduct = () => {

    const [user] = useAuthState(auth);
    let navigate = useNavigate();

    const handleNewProduct = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const img = e.target.img.value;
        const supplier = e.target.supplier.value;
        const text = e.target.text.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const admin = user?.email;
        e.target.reset();

        const newProduct = { title, supplier, img, text, price, quantity, admin };

        console.log(newProduct);

        axios.post("https://posterisks.herokuapp.com/posters", newProduct)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success("Product is added.");
                }
            });

        alert("Product is added. Redirecting you to Gallery...");
        navigate(`/posters`);
    }

    return (
        <div className="container of-x-h">
            <div className="row">
                <div className="col-lg-6 col-md-10 mx-auto">
                    <div className="ms-lg-3 mt-lg-3 container">
                        <form onSubmit={handleNewProduct} className="px-5 pt-3 pb-5 bg-dark-pro rounded-10 shadow-lg text-main">
                            <h3 className="mt-4 mb-0 text-main">Add A New Product</h3>
                            <small className="mb-3 text-second d-block">Please fill up this form to add the product.</small>
                            <div className="my-4">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input name="title" type="text" className="form-control" id="title" defaultValue="Apollo 18 (2011)" required />
                            </div>
                            <div className="my-4">
                                <label htmlFor="img" className="form-label">Poster Image URL</label>
                                <input name="img" type="text" className="form-control" id="img" defaultValue="https://i.ibb.co/x8tcWtN/ap18.jpg" required />
                            </div>
                            <div className="my-4">
                                <label htmlFor="supplier" className="form-label">Supplier Name</label>
                                <input name="supplier" type="text" className="form-control" id="supplier" placeholder="Ex- Jane Doe" required />
                            </div>
                            <div className="my-4">
                                <label htmlFor="pPrice" className="form-label">Poster Price</label>
                                <input name="price" type="text" min='1' className="form-control" id="pPrice" placeholder="Ex- 11.99" required />
                            </div>
                            <div className="my-4">
                                <label htmlFor="pQuantity" className="form-label">Poster Quantity</label>
                                <input name="quantity" type="number" min='0' className="form-control" id="pQuantity" placeholder="Ex- 115" required />
                            </div>
                            <div className="my-4">
                                <label htmlFor="Description" className="form-label">Poster Description</label>
                                <textarea name="text" maxLength="250" type="text" className="form-control" id="Description" placeholder="A Brief Description of The Poster" required />
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