import React from 'react';

const PatientComment = ({ review }) => {
    const { description, img, address, name } = review;
    return (
        <div className="card bg-base-100 shadow-xl p-8 mt-20">
            <div className="card-body">
                <p>{description}</p>
            </div>
            <div className='flex items-center'>
                <figure className='pr-4 ml-7'>
                    <img src={img} alt="Shoes" />
                </figure>
                <div>
                    <h2 className='text-xl font-semibold'>{name}</h2>
                    <p> {address} </p>
                </div>
            </div>
        </div>
    );
};

export default PatientComment;