import { format } from 'date-fns';
import DisplayAvailableAppointment from './DisplayAvailableAppointment';
import { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';



const AvailableAppointment = ({ selectedDate }) => {
    // const [appointments, setAppointments] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const { data: appointments = [] } = useQuery({
        queryKey: ['appointments'],
        queryFn: () => fetch('http://localhost:5000/appointmentOptions')
            .then(res => res.json())
    })


    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppointments(data))
    // }, [])


    return (
        <section className='mt-16 mb-24'>
            <div className='pb-20'>
                <p className='text-center text-secondary font-semibold text-xl'>Available Appointments on {format(selectedDate, 'PP')}</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                {

                    appointments?.map(appointment =>

                        <DisplayAvailableAppointment
                            appointment={appointment} key={appointment.id}
                            setTreatment={setTreatment}
                        >
                        </DisplayAvailableAppointment>)

                }
            </div>

            {
                treatment &&
                <BookingModal treatment={treatment} selectedDate={selectedDate}></BookingModal>
            }

        </section>
    );
};

export default AvailableAppointment;