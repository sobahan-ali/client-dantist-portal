import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    // treatment means appointmentOption another name
    const { user } = useContext(AuthContext);

    console.log(user);
    const { name: treatmentName, slots } = treatment;
    const date = format(selectedDate, 'PP');
    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const slot = form.slot.value;
        const phone = form.phone.value;

        const booking = {
            patientName: name,
            treatment: treatmentName,
            appointmentDate: date,
            email,
            slot,
            phone,

        }
        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('booking success')
                    refetch();
                }
                else {
                    toast.error(data.message)

                }

            })
            .catch((error) => {
                console.error('Error:', error);
            });


    }


    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-10 mt-5'>
                        <input type="text" value={date} disabled className="input input-bordered w-full" />

                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, index) => {
                                    return <option
                                        value={slot}
                                        key={index}
                                    >{slot}
                                    </option>
                                })
                            }

                        </select>
                        <input type="text" name='name' defaultValue={user?.displayName} disabled placeholder="Type your name" className="input input-bordered w-full" />
                        <input type="email" defaultValue={user?.email} name='email' readOnly placeholder="Type your email" className="input input-bordered w-full" />
                        <input type="phone" name='phone' placeholder="Type here phone" className="input input-bordered w-full" />
                        <input className=' btn btn-accent' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;