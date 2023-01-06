import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { data: specials, isLoading } = useQuery({
        queryKey: ['special'],
        queryFn: async () => {
            const res = fetch('http://localhost:5000/appointmentSpecial');
            const data = (await res).json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleAddDoctor = (data) => {
        console.log(data);
    }
    return (
        <div>

            <form onSubmit={handleSubmit(handleAddDoctor)} className="card w-96 shadow-2xl">
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
                            <span className="label-text">Specialty</span>
                        </label>
                        <select {...register('Specialty')} className="select input-bordered w-full max-w-xs">
                            {
                                specials.map(special => <option
                                    key={special._id}
                                    value={special.name}
                                >{special.name}</option>)
                            }


                        </select>
                    </div>
                    {errors.password && <span className='text-red-600 text-center'>{errors.password.message}</span>}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">image</span>
                        </label>

                        <input type="file"
                            {...register('image', {
                                required: true,
                                maxLength: 30
                            })}
                            className="input input-bordered" />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add A Doctor</button>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default AddDoctor;