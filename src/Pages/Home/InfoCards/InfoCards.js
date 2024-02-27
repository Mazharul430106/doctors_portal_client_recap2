import React from 'react';

import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {


    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Lorem Ipsum is simply dummy text of the pri',
            icon: clock,
            backgroud: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Visit our location',
            description: 'Brooklyn, NY 10036, United States',
            icon: marker,
            backgroud: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact us now',
            description: '+000 123 456789',
            icon: phone,
            backgroud: 'bg-gradient-to-r from-primary to-secondary'
        }
    ]


    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-3 md:gap-3 gap-5 pt-10 pb-[106px]'>
            {
                cardData.map(card => <InfoCard card={card} key={card.id}></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;