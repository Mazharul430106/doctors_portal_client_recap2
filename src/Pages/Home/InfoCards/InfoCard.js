import React from 'react';

const InfoCard = ({ card }) => {
    const { name, description, icon, backgroud } = card;
    return (
        <div className={`shadow-xl rounded-md ${backgroud}`}>
            <div className=' xl:p-10 p-5 xl:flex lg:flex items-center gap-5'>
                <img className='' src={icon} alt="Image Not Found" />
                <div className="">
                    <h2 className="card-title text-white">{name}</h2>
                    <p className='text-white'>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;