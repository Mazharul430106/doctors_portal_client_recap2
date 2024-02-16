import React from 'react';
import chare from '../../../assets/images/chair.png';

const Banner = () => {
    return (
        <div className="hero pt-[242px] pb-[240px]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chare} className="lg:w-1/2 w-full rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button className="btn uppercase text-white bg-gradient-to-r from-primary to-secondary ...">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;