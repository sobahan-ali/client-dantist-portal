import React from 'react';

const Service = ({ service }) => {
    const { icon, name, description } = service;
    return (
        <div className="card card-compact shadow-xl p-3">
            <figure><img src={icon} alt="Shoes" /></figure>
            <div className="card-body text-center">
                <h2 className="text-center text-xl">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;