import React from 'react';
import { Link } from 'react-router-dom';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='mt-32'
        style={{
            background: `url(${appointment})`
        }}
            >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} alt="" className="-mt-32 hidden md:block lg:w-1/2 rounded-lg shadow-2xl" />
                    <div>
                        <h4 className='text-lg text-primary font-bold'>Appointment</h4>
                        <h1 className=" text-white text-4xl font-bold">Make an appointment Today</h1>
                        <p className="text-white py-6">We will be your trust-worthy partner, helping you keep your mouth and gums healthy and strong. Whether you want your teeth straightened or require treatment for dental complications, we are here to help. Our dental surgeons possess both experience and expertise in different fields of dentistry and can help you with the right treatment for your oral problems.</p>
                        <PrimaryButton><Link to="/appointment">Appointment</Link></PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;