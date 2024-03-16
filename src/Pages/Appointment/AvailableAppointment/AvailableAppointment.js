import { format } from 'date-fns';
import DisplayAvailableAppointment from './DisplayAvailableAppointment';
import { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';



const AvailableAppointment = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');


    const { data: appointments = [], refetch } = useQuery({
        queryKey: ['appointments', date],
        queryFn: () => fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
            .then(res => res.json())
    })


    return (
        <section className='mt-16 mb-24'>
            <div className='pb-20'>
                <p className='text-center text-secondary font-semibold text-xl'>Available Appointments on {format(selectedDate, 'PP')}</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                {

                    appointments?.map(appointment =>

                        <DisplayAvailableAppointment
                            appointment={appointment} key={appointment._id}
                            setTreatment={setTreatment}
                        >
                        </DisplayAvailableAppointment>)

                }
            </div>

            {
                treatment &&
                <BookingModal treatment={treatment} selectedDate={selectedDate} refetch={refetch}></BookingModal>
            }

        </section>
    );
};

export default AvailableAppointment;