import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/images/login.png';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import InfoCards from '../Home/InfoCards/InfoCards';

const About = () => {
    return (
        <div className='mx-5'>
            <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={login} className="rounded-lg lg:w-1/2 shadow-1xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Welcome to Dentistry!</h1>
                    <p className="py-6">Dentistry, also known as dental medicine and oral medicine, is the branch of medicine focused on the teeth, gums, and mouth. It consists of the study, diagnosis, prevention, management, and treatment of diseases, disorders, and conditions of the mouth, most commonly focused on dentition as well as the oral mucosa.</p>
                    <PrimaryButton><Link to="/appointment">Book an Appointment</Link></PrimaryButton>
                </div>
            </div>
        </div>
            <InfoCards></InfoCards>
        </div>
    );
};

export default About;