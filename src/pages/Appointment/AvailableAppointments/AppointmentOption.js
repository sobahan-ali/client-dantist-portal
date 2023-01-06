import React from 'react';

const AppointmentOption = ({ appointment, setTreatment }) => {
    const { name, slots } = appointment;
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center ">
                <h2 className="text-2xl text-secondary font-semibold">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} available</p>
                <button onClick={() => setTreatment(appointment)}>
                    <label htmlFor="booking-modal" className="btn btn-secondary text-white">book appointment</label>
                </button>
            </div>
        </div>
    );
};

export default AppointmentOption;