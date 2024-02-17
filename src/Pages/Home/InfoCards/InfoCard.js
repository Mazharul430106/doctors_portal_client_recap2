import React from 'react';

const InfoCard = ({ card }) => {
    const { name, description, icon, backgroud } = card;
    return (
        <div className={`card card-side shadow-xl p-5  ${backgroud}`}>
            <figure><img src={icon} alt="Image Not Found"/></figure>
            <div className="card-body">
                <h2 className="card-title text-white">{name}</h2>
                <p className='text-white'>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;