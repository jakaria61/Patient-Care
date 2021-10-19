
import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import SingleDoctor from './SingleDoctor';
const Doctors = () => {
    const [doctors, setDoctor] = useState([])
    useEffect(() => {
        fetch('./fake.json')
            .then(res => res.json())
            .then(data => setDoctor(data))
    }, []);
    return (
        <div >
            <div className='row justify-content-center w-100'>
                <h1 className='text-center text-danger'>our doctors</h1>
                {
                    doctors.map(doctor => <SingleDoctor key={doctor.id} singel={doctor}></SingleDoctor>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Doctors;