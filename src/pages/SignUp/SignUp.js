import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
// import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';
import { AuthContext } from '../contexts/AuthProvider';

const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext);

    const [createEmail, setCreateEmail] = useState('');
    const [token] = useToken(createEmail);
    const navigate = useNavigate();

    if (token) {
        navigate('/')
    }


    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleSignUp = (data, e) => {
        const form = e.target;

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                const userProfile = {
                    displayName: data.name,
                };
                updateUser(userProfile)
                    .then(() => {
                        toast.success('user created success')
                        savedUser(data.name, data.email);
                        form.reset();
                    })
                    .catch(err => console.error(err.message))

            })
            .catch(err => console.error(err.message))
    }

    const savedUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setCreateEmail(email)

            })
    }

    // const getUserToken = email => {
    //     fetch(`http://localhost:5000/jwt?email=${email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data);
    //             if (data.accessToken) {
    //                 localStorage.setItem('accessToken', data.accessToken)
    //             }
    //             navigate('/')
    //         })
    // }
    return (
        <div className="hero mt-5">
            <form onSubmit={handleSubmit(handleSignUp)} className="card w-96 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-3xl font-bold text-center">Signup now!</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>

                        <input type="text"
                            {...register('name', {
                                required: true,
                                maxLength: 30
                            })}
                            className="input input-bordered" />

                    </div>
                    {errors.name && errors.name.type === "required" && (
                        <span className='text-red-600 text-center'>This is required</span>
                    )}
                    {errors.name && errors.name.type === "maxLength" && <span className='text-red-600 text-center'>must be less than thirty characters</span>}
                    <div className="form-control mt-5">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>

                        <input {...register("email", {
                            required: "required",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Entered value does not match email format"
                            }
                        })}
                            type="email"
                            className="input input-bordered" />
                    </div>
                    {errors.email && <span className='text-red-600 text-center'>{errors.email.message}</span>}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>

                        <input type="password"
                            {...register("password", {
                                required: "required",
                                minLength: {
                                    value: 6,
                                    message: "min length is 6"
                                },
                                pattern: {
                                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                                    message: 'password must be strong'
                                }
                            })}
                            className="input input-bordered" />
                    </div>
                    {errors.password && <span className='text-red-600 text-center'>{errors.password.message}</span>}
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Signup</button>
                    </div>
                    <p>Already have an account <Link to='/login' className='text-primary ml-2'>please log in</Link></p>
                    <div className="divider">OR</div>
                    <button className='btn btn-outline btn-primary'>CONTINUE WITH GOOGLE</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;