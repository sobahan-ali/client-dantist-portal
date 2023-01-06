import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';
import { AuthContext } from '../contexts/AuthProvider';

const Login = () => {
    const [loginError, setLoginError] = useState('');
    const { logIn } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const [createLoginEmail, setCreateLoginEmail] = useState('');
    const [token] = useToken(createLoginEmail)

    if (token) {
        navigate(from, { replace: true });
    }

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSignIn = (data, e) => {
        const form = e.target;
        console.log(data);
        setLoginError('');
        logIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                if (user?.uid) {
                    setCreateLoginEmail(data.email);
                    toast.success('log in success');
                    form.reset();
                }
            })
            .catch(error => {
                setLoginError(error.message);
            })
    }
    return (
        <div>
            <div className="hero mt-10">
                <form onSubmit={handleSubmit(handleSignIn)} className="card w-96 shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <h1 className="text-3xl font-bold text-center">Login now!</h1>

                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input type="email"
                                {...register("email", {
                                    required: "Email Address is required",
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: "Entered value does not match email format"
                                    }
                                })}
                                className="input input-bordered" />
                        </div>
                        {errors.email && <p className='text-center text-red-600'>{errors.email?.message}</p>}
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input type="password"
                                {...register("password", {
                                    required: "required",
                                    minLength: {
                                        value: 6,
                                        message: 'Minimum length is must be six characters'
                                    },

                                })}
                                className="input input-bordered" />

                            {errors.password && <p className='text-center text-red-600'>{errors.password.message}</p>}
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                            <p className='text-center text-red-600'> {loginError}</p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-accent">Login</button>
                        </div>
                        <p>New to Doctors Portal? <Link className='text-primary ml-2' to='/signup'> Create new account</Link> </p>
                        <div className="divider">OR</div>
                        <button className='btn btn-outline btn-accent'>CONTINUE WITH GOOGLE</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Login;