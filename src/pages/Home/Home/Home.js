import React from 'react';

import Banner from '../Banner/Banner';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import PatientComments from '../PatientComments/PatientComments';
import Services from '../Services/Services';
import Testmonial from '../Testmonial/Testmonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testmonial></Testmonial>
            <PatientComments></PatientComments>
        </div>
    );
};

export default Home;