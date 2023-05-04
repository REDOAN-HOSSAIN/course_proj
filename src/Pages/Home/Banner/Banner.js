import React from 'react';
import chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Smile With Dentistry!</h1>
                    <p className="py-6">Our dental practitioners aim to give you straighter teeth and a gorgeous smile. From dental implants to teeth whitening, dental veneers to invisible braces, we have in-depth knowledge, offering you the best solutions for the perfect smile you have always wanted.</p>
                    <PrimaryButton>Getting Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;