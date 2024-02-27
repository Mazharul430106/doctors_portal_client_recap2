import React from 'react';
import PrimaryButton from '../../../Components/PrimaryButton';

const DisplayAvailableAppointment = ({ appoinment }) => {
    // console.log(appoinment)
    const { name, slots } = appoinment;
    return (
        <div className="card w-full bg-base-100 shadow-xl p-12">
            <div className='text-center'>
                <h2 className='text-2xl font-semibold text-secondary'>{name}</h2>
                <h3 className='text-sm py-3'>{slots.length > 0 ? slots[0] : 'Try another day'}</h3>
                <p className='pb-3'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <PrimaryButton>Book Appoinment</PrimaryButton>
            </div>
        </div>
    );
};

export default DisplayAvailableAppointment;