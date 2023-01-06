import chair from '../../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import bgImage from '../../../../assets/images/bg.png';


const AppointBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <header >
            <div className="hero" style={{ backgroundImage: `url(${bgImage})`, height: '600px', backgroundPositionY: '-200px' }}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className=" lg:w-5/12 md:w-1/2 rounded-lg shadow-2xl" alt='dentist chair' />
                    <div className='mr-10'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        ></DayPicker>
                    </div>

                </div>

            </div>
        </header>
    );
};

export default AppointBanner;