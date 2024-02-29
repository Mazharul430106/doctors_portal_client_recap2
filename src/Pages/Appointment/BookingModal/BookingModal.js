import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');
    return (
        <div>
            <dialog id="BookingModal" className="modal">
                <div className="modal-box">
                    <form action='' method="dialog">
                        <button className="text-secondary hover:bg-gradient-to-r from-primary to-secondary hover:text-white btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <div>
                            <h1 className='font-semibold text-2xl'>{name}</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"></span>
                                </label>
                                <input type="email" disabled value={date} className="input input-bordered" />
                            </div>
                            <select className="select select-bordered focus:outline-none w-full mt-5">
                                <option disabled selected>Select Your Time Slot</option>
                                {
                                    slots.map(slot => <option value={slot}>{slot}</option>)
                                }
                            </select>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"></span>
                                </label>
                                <input name='text' type="text" placeholder='name' className=" focus:outline-none input input-bordered"/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"></span>
                                </label>
                                <input type="email" placeholder='email' className="input input-bordered focus:outline-none " />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"></span>
                                </label>
                                <input type="text" placeholder='phone number' className="input input-bordered focus:outline-none " />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn  hover:text-white uppercase bg-gradient-to-r from-primary to-secondary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default BookingModal;