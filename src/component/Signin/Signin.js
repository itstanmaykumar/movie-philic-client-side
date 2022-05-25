import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { auth } from "../../firebase.init";
import GoogleLogo from "../../media/google.svg";
import signinImg from '../../media/signin.png';


const Signin = () => {

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    })

    const [signInWithEmail, user, loading, hookError] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, loadingGoogle, googleError] = useSignInWithGoogle(auth);

    const handleEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value })
            setErrors({ ...errors, email: "" })
        } else {
            setErrors({ ...errors, email: "Invalid Email" })
            setUserInfo({ ...userInfo, email: "" })
        }
    }
    const handlePasswordChange = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Must Conatin Minimum 6 Characters!" });
            setUserInfo({ ...userInfo, password: "" })
        }

    }

    const handleSignin = async (e) => {
        e.preventDefault();
        signInWithEmail(userInfo.email, userInfo.password);
    }

    const handleGoogle = () => {
        signInWithGoogle();
    }

    const handleResetPassword = () => {
        if (userInfo.email !== "") {
            toast.success("Your password reset link was sent to your mail,");
        } else {
            toast("Enter your email.");
        }
    }

    useEffect(() => {
        const error = hookError || googleError;
        if (error) {
            //console.log(error?.code);
            switch (error?.code) {
                case "auth/wrong-password":
                    toast.error("Wrong password. Intruder!!")
                    break;
                case "auth/user-not-found":
                    toast.error("Email is not registered.")
                    break;
                case "auth/popup-closed-by-user":
                    toast.error("Popup closed before login.")
                    break;
                default:
                    toast.error("Something went wrong.")
            }
        }
    }, [hookError, googleError])


    const getToken = async (admin) => {
        const email = admin?.user?.email;
        //console.log(email);
        if (email) {
            const { data } = await axios.post('https://posterisks.herokuapp.com/signin', { email });
            localStorage.setItem('accessToken', data.accessToken);
            //console.log(localStorage);
        }
    };

    if (googleUser || user) {
        const admin = googleUser || user;
        getToken(admin);
    }

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/home";

    useEffect(() => {
        // console.log(googleUser);
        if (user || googleUser) {
            navigate(from, { replace: true });
        }
    }, [user, googleUser]);

    return (
        <div className='container my-5'>
            <div className="row justify-content-between align-items-center">
                <div className="col-lg-6">
                    <img className="w-100" src={signinImg}></img>
                </div>
                <div className='col-lg-6 p-5 shadow rounded-10 bg-light-pro'>
                    <h2 className="text-center">Sign In To Your Account</h2>
                    <form onSubmit={handleSignin}>
                        <div className='mb-2 mt-2'>
                            <label htmlFor='email'>Email</label>
                            <div className=''>
                                <input className="form-control" type='text' name='email'
                                    id='email' onBlur={handleEmailChange} required />
                            </div>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='password'>Password</label>
                            <div className=''>
                                <input className="form-control"
                                    type='password'
                                    name='password'
                                    id='password' onBlur={handlePasswordChange} required
                                />
                            </div>
                        </div>
                        {
                            (loading || loadingGoogle) && (
                                <button className="btn btn-dark" type="button">
                                    <span className="me-2 spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                    Loading...
                                </button>
                            )
                        }
                        <div>
                            <p onClick={handleResetPassword} className="text-primary btn ps-0">Forgot Password?</p>
                        </div>
                        <button type='submit' className='btn btn-dark d-block w-100'>
                            Sign In
                        </button>
                    </form>

                    <ToastContainer />
                    <p className='mt-2'>
                        New to posterisks?{" "}
                        <Link to="/signup">Create New Account</Link>
                    </p>
                    <div className='row justify-content-between align-items-center'>
                        <hr className="col-5" />
                        <p className="col-1">or</p>
                        <hr className="col-5" />
                    </div>
                    <div className=''>
                        <button onClick={handleGoogle} className='px-5 btn btn-outline-dark d-flex justify-content-center align-items-center w-100'
                        >
                            <img className="d-block" src={GoogleLogo} alt='' />
                            <p className="mt-3 fs-5 ms-3"> Google Sign In </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;