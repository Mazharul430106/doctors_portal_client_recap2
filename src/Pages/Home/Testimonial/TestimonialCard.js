import React from 'react';

const TestimonialCard = ({ testimonialInfo }) => {
    // console.log(testimonialInfo);

    const { name, id, img, description, country } = testimonialInfo;


    return (
        <div className="card w-full shadow-xl">
            <div className="card-body">
                <p className='pb-10'>{description}</p>
                <div className='flex items-center gap-[14px]'>
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-[#19D3AE] ring-offset-base-100 ring-offset-2">
                            <img src={img} />
                        </div>
                    </div>
                    <div>
                        <h2 className='font-semibold text-xl'>{name}</h2>
                        <h3 className='text-base'>{country}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;