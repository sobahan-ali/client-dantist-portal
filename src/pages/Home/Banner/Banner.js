import React from 'react';
import chair from '../../../assets/images/chair.png';
import bgChair from '../../../assets/images/bg.png';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';


const Banner = () => {
    const bannerInfo = [
        {
            img: phone,
            name: 'Contact us now',
            location: '+204565545',
            bgClass: ' bg-gradient-to-r from-primary to-secondary'
        },
        {
            img: marker,
            name: 'visit Our location',
            location: 'Dalia, dimla, Nilphamari',
            bgClass: 'accent'
        },
        {
            img: clock,
            name: 'Opening Hours',
            location: 'If a dog chews shoes whose shoes',
            bgClass: ' bg-gradient-to-r from-primary to-secondary'
        }
    ]
    return (
        <div className='' >
            <div className="hero" >
                <div className="hero-content flex-col lg:flex-row-reverse" style={{ background: `url(${bgChair})`, backgroundSize: 'cover', backgroundPositionY: '-200px', height: '500px' }}>
                    <img src={chair} className="rounded-lg shadow-2xl lg:w-1/2" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    bannerInfo.map((info, index) => {
                        return <div className={`card w-96 bg-primary text-primary-content mt-2 ${info.bgClass}`} key={index}>
                            <div className=" flex p-10 items-center flex-col md:flex-row">
                                <div className='pr-5'>
                                    <img src={`${info.img}`} alt="" />
                                </div>
                                <div className='text-white'>
                                    <h2 className="">{info.name}</h2>
                                    <p>{info.location}</p>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Banner;