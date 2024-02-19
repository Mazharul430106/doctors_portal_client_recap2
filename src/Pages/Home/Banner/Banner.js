import React from 'react';
import chare from '../../../assets/images/chair.png';
import PrimaryButton from '../../../Components/PrimaryButton';
import bannerBgImg from '../../../assets/images/bg.png'

const Banner = () => {
    return (
        <section className='w-full h-full' style={{
            background: `url(${bannerBgImg})`
        }}>
            <div className="hero w-full flex justify-between lg:pt-12 md:pt-12 pt-6 lg:pb-12 md:pb-12 pb-6">
                <div className="flex lg:justify-between items-center flex-col lg:flex-row-reverse">
                    <img src={chare} className="lg:w-1/2 w-full rounded-lg shadow-2xl" />
                    <div className=''>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <PrimaryButton>get started</PrimaryButton>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;