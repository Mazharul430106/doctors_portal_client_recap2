import React from 'react';
import fluridaImage from '../../../assets/images/fluoride.png';
import cavatyImage from '../../../assets/images/cavity.png';
import whitheningImage from '../../../assets/images/whitening.png';
import treatment from '../../../assets/images/treatment.png';
import SingleService from './SingleService';


const Services = () => {

    const serviceData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            icon: fluridaImage,
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        },
        {
            id: 2,
            name: 'Cavity Filling',
            icon: cavatyImage,
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        },
        {
            id: 1,
            name: 'Teeth Whitening',
            icon: whitheningImage,
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        },
    ]

    return (

        <div className=''>
            <div className='text-center mb-[70px]'>
                <h3 className='text-[#19D3AE] font-bold text-[20px]'>OUR SERVICES</h3>
                <h2 className='text-[36px]'>Services We Provide</h2>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-3 md:gap-3 gap-5'>
                {
                    serviceData.map(singleService => <SingleService singleService={singleService} key={singleService.id} ></SingleService>)
                }
            </div>

            <div className="hero mt-[154px]">
                <div className="hero-content flex-col lg:flex-row gap-20">
                    <img src={treatment} className="w-full lg:h-[576px] md:h-[576px] h-full rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;