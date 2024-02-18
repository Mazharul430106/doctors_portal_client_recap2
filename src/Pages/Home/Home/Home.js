import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';

const Home = () => {
    return (
        <div className='px-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <MakeAppoinment></MakeAppoinment>
        </div>
    );
};

export default Home;