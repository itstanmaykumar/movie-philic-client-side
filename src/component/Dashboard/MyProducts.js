import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const MyProducts = () => {
    const [posters, setPosters] = useState([]);
    useEffect(() => {
        fetch('/posters.json')
            .then(res => res.json())
            .then(data => setPosters(data))
    }, []);

    // const poster = posters[posterId];

    // const id = poster?.id;
    // const title = poster?.title;
    // const img = poster?.img;
    // const text = poster?.text;
    // const supplier = poster?.supplier;
    // const price = poster?.price;
    // const quantity = poster?.quantity;

    const deleteProduct = () => toast.success("fg Successful!");

    return (
        <div className="container of-x-h">
            <div className="row">
                <div className="ms-lg-3 mt-lg-3 container">
                    <div className="m-3 py-2 bg-dark-pro container">
                        {
                            posters.length === 0 ?
                                (
                                    <h3 className="my-5 py-5 text-white text-center"><i className="far fa-folder-open pe-3"></i> Your Cart is Empty</h3>
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
                                                    <tr key={product.id}>
                                                        <td>{product.title}</td>
                                                        <td>{product.quantity}</td>
                                                        <td onClick={() => deleteProduct(product.id)} className="pointer ico text-danger">Delete</td>
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
        </div>
    );
};

export default MyProducts;