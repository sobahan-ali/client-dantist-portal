import React, { useState } from 'react';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';
import AppointBanner from './AppointBanner/AppointBanner';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppointBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointBanner>
            <AvailableAppointments
                selectedDate={selectedDate}
            >
            </AvailableAppointments>
        </div>
    );
};

export default Appointment;