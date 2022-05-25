import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosPrivate from '../../api/axiosPrivate';
import { auth } from '../../firebase.init';

const MyProducts = () => {
    const [posters, setPosters] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        const getMyProducts = async () => {
            const email = user?.email;
            const url = `https://posterisks.herokuapp.com/myproducts?admin=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                setPosters(data);
            }
            catch (error) {
                //console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/signin')
                }
            }
        }
        getMyProducts();
    }, [user]);

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