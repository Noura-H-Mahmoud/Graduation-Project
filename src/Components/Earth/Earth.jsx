import React from 'react';
import '../../Pages/Flight Flow/FlightBooking/FlightBooking.css';
import earth from './../../assets/images/Earth.png';
import plane from './../../assets/images/Vector1.svg';

export default function Earth() {
    return (
        <div className="animation">
            <div className="plane">
                <img src={plane} alt="plane" />
            </div>
            <div className="earth">
                <img src={earth} alt="earth" />
            </div>
        </div>
    );
}
