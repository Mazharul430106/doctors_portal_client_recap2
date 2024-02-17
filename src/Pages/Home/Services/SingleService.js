import React from 'react';

const SingleService = ({ singleService }) => {
    console.log(singleService)

    const {name, icon, description} = singleService;


    return (
        <div className="card pt-11 w-full bg-base-100 shadow-xl">
            <figure><img src={icon} alt="Image Not Found" /></figure>
            <div className="card-body">
                <h2 className="text-center font-semibold text-[20px]">{name}</h2>
                <p className='text-center'>{description}</p>
            </div>
        </div>
    );
};

export default SingleService;