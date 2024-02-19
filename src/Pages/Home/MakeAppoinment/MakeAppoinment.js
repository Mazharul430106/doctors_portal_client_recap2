import React from 'react';

import doctor from '../../../assets/images/doctor-small.png';
import PrimaryButton from '../../../Components/PrimaryButton';
import Appointment from '../../../assets/images/appointment.png';



const MakeAppoinment = () => {
    return (
        <section className=' py-5 xl:py-0 lg:py-0' style={{
            background: `url(${Appointment})`,
        
        }}>
            <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-0 '>
                <div className='flex items-center justify-center'>
                    <img src={doctor} className=' xl:-mt-32 lg:-mt-12 w-full lg:w-4/5 lg:block  hidden' alt="Image Not Found" />
                </div>
                <div className='flex items-center'>
                    <div className='px-5'>
                        <h3 className='xl:pb-5 lg:pb-1 text-[#19D3AE] font-bold text-[20px]'>Appointment</h3>
                        <h2 className='text-white font-semibold xl:text-[36px] lg:text-[30px]  text-[25px]'>Make an appointment Today</h2>
                        <p className='lg:pb-5 lg:pt-1 py-4 text-white lg:pr-0 md:pr-20 pr-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppoinment;