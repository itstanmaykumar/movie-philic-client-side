import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogo from "../../media/google.svg";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { auth } from "../../firebase.init";
import signupImg from '../../media/signup.png';



const Signup = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    });


    const [createUserWithEmailAndPassword, user, loading, hookError] =
        useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [signInWithGoogle, googleUser, loading2, googleError] = useSignInWithGoogle(auth);

    const handleEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({ ...errors, email: "" });
        } else {
            setErrors({ ...errors, email: "Invalid email" });
            setUserInfo({ ...userInfo, email: "" });
        }

    };
    const handlePasswordChange = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Minimum 6 characters!" });
            setUserInfo({ ...userInfo, password: "" });
        }
    };

    const handleSignup = (e) => {
        e.preventDefault();
        console.log(userInfo);
        createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    };

    const handleGoogle = () => {
        signInWithGoogle();
    }

    useEffect(() => {
        if (hookError) {
            switch (hookError?.code) {
                case "auth/invalid-email":
                    toast("Invalid Email.");
                    break;
                case "auth/invalid-password":
                    toast("Wrong Password.");
                    break;
                default:
                    toast("Something Went Wrong");
            }
        }
    }, [hookError]);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user || googleUser) {
            navigate(from, { replace: true });
        }
    }, [user]);



    return (
        <div className='container my-5'>
            <div className="row justify-content-between align-items-center">
                <div className="col-lg-6">
                    <img className="w-100" src={signupImg}></img>
                </div>
                <div className='col-lg-6 p-5 shadow rounded-10 bg-light-pro'>
                    <h2 className="text-center">Create A Free Account</h2>
                    <form onSubmit={handleSignup}>
                        <div className='mb-2 mt-2'>
                            <label htmlFor='email'>Email</label>
                            <div className=''>
                                <input className="form-control" type='email' name='email'
                                    id='email' onBlur={handleEmailChange} required />
                            </div>
                        </div>
                        <div className='mb-4'>
                            <label htmlFor='password'>Password</label>
                            <div className=''>
                                <input className="form-control"
                                    type='password'
                                    name='password'
                                    id='password' onBlur={handlePasswordChange} required
                                />
                            </div>
                        </div>
                        <button type='submit' className='btn btn-dark d-block w-100'>
                            Sign Up
                        </button>
                    </form>
                    <p className='mt-2'>
                        Already have an account?
                        <Link to="/signin" > Sign in</Link>
                    </p>
                    <div className='row justify-content-between align-items-center '>
                        <hr className="col-5" />
                        <p className="col-1">or</p>
                        <hr className="col-5" />
                    </div>
                    <div className=''>
                        <button onClick={handleGoogle} className='px-5 mb-3 btn btn-outline-dark d-flex justify-content-center align-items-center w-100'
                        >
                            <img className="d-block" src={GoogleLogo} alt='' />
                            <p className="mt-3 fs-5 ms-3"> Google Sign Up </p>
                        </button>
                        <small className="text-secondary">By clicking Sign up, I agree to hashtag's Terms and Privacy Policy</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;