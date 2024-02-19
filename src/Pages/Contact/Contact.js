import React from 'react';
import Appointment from '../../assets/images/appointment.png';

const Contact = () => {
    return (
        <section className='py-16 w-full' style={{
            background: `url(${Appointment})`,
            backgroundSize: 'cover'
        }}>
            <div className='text-center'>
                <h3 className='text-xl text-secondary font-bold'>Contact Us</h3>
                <h2 className='text-4xl text-white'>Stay connected with us</h2>
            </div>

            <div className="hero">
                <div className="hero-content w-full lg:max-w-[550px] md:max-w-[450px]  flex-col lg:flex-row-reverse ">
                    <div className="card rounded-md w-full lg:max-w-[550px] md:max-w-[450px] shrink-0 bg-base-100">
                        <form action="">
                            <div className="card-body p-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email *" className="input input-bordered focus:outline-none" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Subject</span>
                                    </label>
                                    <input type="text" placeholder="subject *" className="input input-bordered focus:outline-none" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea className="textarea h-[136px] textarea-bordered focus:outline-none" placeholder="Your Message *"></textarea>
                                </div>
                                <div className="text-center form-control mt-6">
                                    <button className='btn  text-white bg-gradient-to-r from-primary to-secondary'>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Contact;