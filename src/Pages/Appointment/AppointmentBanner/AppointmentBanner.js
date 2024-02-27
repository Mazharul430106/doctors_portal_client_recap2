import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import BannerBgImg from '../../../assets/images/bg.png';
const AppointmentBanner = ({selectedDate, setSelectedDate}) => {

    return (
        <section className='pt-10 pb-16' style={{
            background: `url(${BannerBgImg})`,
            backgroundSize: 'cover'
        }}>
            <header className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5'>
                <div className='flex items-center justify-center'>
                    <DayPicker
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    >
                    </DayPicker>
                </div>

                <div className=''>
                    <img src={chair} className="w-full rounded-lg shadow-2xl" />
                </div>
            </header>

        </section>
    );
};

export default AppointmentBanner;