import React from 'react';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import PatientComment from './PatientComment';

const PatientComments = () => {
    const comments = [
        {
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1,
            name: 'imam safi',
            address: 'bangladesh'
        },
        {
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2,
            name: 'subha',
            address: 'kurigram'
        },
        {
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3,
            name: 'Barker',
            address: 'bangladesh'
        },
    ]
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 md:gap-14'>
            {
                comments.map((review, index) => <PatientComment
                    key={index}
                    review={review}
                ></PatientComment>)
            }
        </div>
    );
};

export default PatientComments;