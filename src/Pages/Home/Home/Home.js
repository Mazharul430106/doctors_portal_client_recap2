import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Testimonial from '../Testimonial/Testimonial';
import Contact from '../../Contact/Contact';

const Home = () => {
    return (
        <div className='px-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <MakeAppoinment></MakeAppoinment>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;