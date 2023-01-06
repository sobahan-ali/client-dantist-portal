import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import bgAppointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='' style={{ background: `url(${bgAppointment})`, borderRadius: '12px', backgroundPositionY: '-50px' }}>
            <div className="hero mt-32">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className=" lg:w-1/2 hidden md:block rounded-lg shadow-2xl -mt-32" alt='' />
                    <div className='text-white'>
                        <h2 className="text-xl font-bold">Appointment</h2>
                        <h1 className='text-2xl font-semibold'>Make an appointment Today</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                        <PrimaryButton>Appointment</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;