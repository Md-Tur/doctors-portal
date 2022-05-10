import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard bgclass="bg-gradient-to-r from-secondary to-primary" cardTitle="Opening Hours" img={clock}></InfoCard>
            <InfoCard bgclass="bg-accent" cardTitle="Visit Our Location" img={marker}></InfoCard>
            <InfoCard bgclass="bg-gradient-to-r from-secondary to-primary" cardTitle="Contact Us Now" img={phone}></InfoCard>
        </div>
    );
};

export default Info;