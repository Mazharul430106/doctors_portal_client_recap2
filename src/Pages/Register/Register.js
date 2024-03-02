import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Register = () => {

    const { register, handleSubmit } = useForm();

    const { createUser } = useContext(AuthContext);


    const handleRegister = (data) => {
        console.log(data);

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                
            })
            .catch(error => console.log(error))


    }


    return (
        <div className="hero pt-10 pb-10">
            <div className="hero-content w-full lg:max-w-[550px] md:max-w-[550px] flex-col lg:flex-row-reverse">
                <div className="card shrink-0 w-full lg:max-w-[550px] md:max-w-[550px] shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(handleRegister)}>
                        <div className="card-body">
                            <h1 className='text-center font-semibold text-3xl'>Register Now</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register('name')} type="text" name='name' placeholder="name *" className="input input-bordered focus:outline-none " />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input {...register('url')} type="url" name='url' placeholder="url *" className="input input-bordered focus:outline-none " />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register('email')} type="email" name='email' placeholder="email *" className="input input-bordered focus:outline-none " />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register('password')} type="password" name='password' placeholder="password *" className="input input-bordered focus:outline-none " />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#3A4256] text-white hover:bg-emerald-400 uppercase">Register</button>
                            </div>

                            <div className='flex items-center justify-between'>
                                <span className='text-[#19D3AE]'>All Ready Have an Account ?</span>
                                <Link to='/login' className='text-[#19D3AE]'>Please Login</Link>
                            </div>

                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;