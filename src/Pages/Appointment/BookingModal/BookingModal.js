import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import toast from 'react-hot-toast';

const BookingModal = ({ treatment, selectedDate }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');
    const { user, loading } = useContext(AuthContext);

    const handleBookingData = (event) => {
        const form = event.target;
        // const date = form.date.value;
        const slot = form.slot.value;
        const userName = form.userName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        // console.log(date, slot, name, email, phone);

        const bookingData = {
            appoinmentDate: date,
            treatment: name,
            patient: userName,
            email,
            phone,
            slot
        }
        console.log(bookingData)

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('booking seccess')
                }
            })
    }

    return (
        <div>
            <dialog id="BookingModal" className="modal">
                <div className="modal-box">
                    <div className='flex justify-between mb-5'>
                        <h1 className='font-semibold text-2xl'>{name}</h1>
                        <button className=' text-secondary hover:bg-gradient-to-r from-primary to-secondary hover:text-white btn btn-sm btn-circle btn-ghost' onClick={() => document.getElementById('BookingModal').close()}>✕</button>
                    </div>
                    <form onSubmit={handleBookingData} action="" method="dialog">
                        <div>


                            <div className="form-control mb-3">
                                <input name='date' type="text" disabled value={date} className="input input-bordered" />
                            </div>
                            <select name='slot' className="select select-bordered focus:outline-none w-full mt-1 mb-3">
                                {/* <option disabled selected>Select Your Time Slot</option> */}
                                {
                                    slots.map((slot, i) => <option value={slot} key={i}>{slot}</option>)
                                }
                            </select>
                            <div className="form-control mb-3">
                                <input name='userName' type="text" placeholder='name' defaultValue={user?.displayName} readOnly className=" focus:outline-none input input-bordered" />
                            </div>
                            <div className="form-control mb-3">
                                <input name='email' type="email" placeholder='email' defaultValue={user?.email} readOnly className="input input-bordered focus:outline-none " />
                            </div>
                            <div className="form-control mb-3">
                                <input name='phone' type="text" placeholder='phone number' className="input input-bordered focus:outline-none " />
                            </div>
                            <div className="form-control mb-0 mt-6">
                                <input type="submit" value='submit' className="btn  hover:text-white uppercase bg-gradient-to-r from-primary to-secondary" />
                            </div>
                        </div>

                    </form>
                </div>
            </dialog>
        </div >
    );
};

export default BookingModal;