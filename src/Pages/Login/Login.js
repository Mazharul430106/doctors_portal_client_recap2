import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {

    const { register, handleSubmit } = useForm();
    const { signInUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = (data) => {
        console.log(data)
        signInUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);

                navigate(from, { replace: true })

            })
            .catch(error => console.log(error))
    }

    return (
        <div className="hero pt-10 pb-10">
            <div className="hero-content w-full lg:max-w-[550px] md:max-w-[550px] flex-col lg:flex-row-reverse">
                <div className="card shrink-0 w-full lg:max-w-[550px] md:max-w-[550px] shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(handleLogin)}>
                            <h1 className='text-center font-semibold text-3xl'>Login Now</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register('email')} type="email" name='email' placeholder="email" className="input input-bordered focus:outline-none" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register('password')} type="password" name='password' placeholder="password" className="input input-bordered focus:outline-none" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <button className="btn bg-[#3A4256] text-white hover:bg-emerald-400 uppercase">Login</button>
                            </div>
                            <div className="divider">OR</div>
                            <div className="form-control">
                                <button className="btn bg-[#3A4256] text-white hover:bg-emerald-400 uppercase">Login With Google</button>
                            </div>

                            <div className='flex items-center justify-between'>
                                <span className='text-[#19D3AE]'>Create a New Account ?</span>
                                <Link to='/register' className='text-[#19D3AE]' >Please Register</Link>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;