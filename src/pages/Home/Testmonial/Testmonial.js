import React from 'react';
import quote from '../../../assets/icons/quote.svg'

const Testmonial = () => {

    return (
        <div className='flex justify-between items-center mt-28'>
            <div className=''>
                <h3 className='font-bold text-primary text-xl '>Testimonial</h3>
                <h1 className='text-3xl'>What Our Patient Says</h1>
            </div>
            <div className='w-24 lg:w-48'>
                <img src={quote} alt="" />
            </div>
        </div>
    );
};

export default Testmonial;