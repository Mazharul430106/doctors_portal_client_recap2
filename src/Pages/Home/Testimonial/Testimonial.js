import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import TestimonialCard from './TestimonialCard';
import ImgOne from '../../../assets/images/people1.png';
import ImgTwo from '../../../assets/images/people2.png';
import ImgThree from '../../../assets/images/people3.png';

const Testimonial = () => {

    const testimonialInfos = [

        {
            id: 1,
            name: 'Winson Herry',
            country: 'California',
            img: ImgOne,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            id: 2,
            name: 'Russi Angle',
            country: 'Indunasia',
            img: ImgTwo,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            id: 3,
            name: 'Helen Smith',
            country: 'Japan',
            img: ImgThree,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },

    ]

    return (
        <section className='pb-[150px] pt-20'>
            <div className='flex items-center justify-between'>
                <div>
                    <h3 className='font-bold text-xl text-[#19D3AE]'>Testimonial</h3>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <div className=''>
                    <img className='w-[192px] h-[156px]' src={quote} alt="Image Not Found" />
                </div>
            </div>

            <div className='grid lg:grid-cols-3 mdl:grid-cols-2 grid-cols-1 gap-10 pt-20'>
                {
                    testimonialInfos.map(testimonialInfo => <TestimonialCard testimonialInfo={testimonialInfo} key={testimonialInfo.id}></TestimonialCard>)
                }
            </div>

        </section>
    );
};

export default Testimonial;