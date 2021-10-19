import React from 'react';
import { Link } from 'react-router-dom';
import './Doctors.css'
const SingleDoctor = (props) => {
    const { name, img, expertise, description } = props.singel;
    return (
        <div className='col-md-3  doctor-container'>
            <img src={img} alt="" className='doctor-image' />
            <h3>{name}</h3>
            <h5 className='text-success'>{expertise}</h5>
            <p> <small>{description}</small> </p>
            <div className='icon-container'>
                <a href="#"><i class="fab fa-facebook " ></i></a>
                <a href="#"><i class="fab fa-twitter-square"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>

            </div>
            <Link to='/apoinment'><button className='btn btn-outline-success'>Apoinment</button>
            </Link>
        </div>
    );
};

export default SingleDoctor;