import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import DisplayAvailableAppointment from './DisplayAvailableAppointment';

const AvailableAppointment = ({ selectedDate }) => {
   const [appointments, setAppointments] = useState([]);

   useEffect(()=>{
    fetch('appointmentOptions.json')
    .then(res=> res.json())
    .then(data=> setAppointments(data))
   },[])

    return (
        <section className='mt-16 mb-24'>
            <div className='pb-20'>
                <p className='text-center '>Available Appointments on {format(selectedDate, 'PP')}</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                {
                    appointments.map(appoinment => <DisplayAvailableAppointment appoinment={appoinment}></DisplayAvailableAppointment>)
                }
            </div>
        </section >
    );
};

export default AvailableAppointment;