import React, { useEffect, useState } from 'react';
import SingleServices from './SingleServices/SingleServices';
import './Services.css'

const Services = () => {
    const [diseases, setDisease] = useState([])
    useEffect(() => {
        fetch('./docfake.json')
            .then(res => res.json())
            .then(data => setDisease(data))
    }, []);
    return (
        <div >
            <div className='row justify-content-center w-100 '>
                <h1 className='text-center m-3 text-success'>Our Treatment</h1>

                {
                    diseases.map(disease => <SingleServices key={disease.id} singel={disease}></SingleServices>)
                }
            </div>
        </div>
    );
};

export default Services;