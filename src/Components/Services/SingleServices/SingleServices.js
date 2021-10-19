import React from 'react';
import { Link } from 'react-router-dom';
import './SingleServices.css'
const SingleServices = ({ singel }) => {
    const { id, name, img, description } = singel;
    const url = `/serviceDetails/${id}`;
    return (
        <div className='col-md-3 service-container'>
            <img src={img} alt="" className='service-image' />
            <h3>{name}</h3>
            <p> <small>{description}</small> </p>
            <Link to={url}>
                <button className='btn btn-outline-success mb-2'>View Details <i class="fas fa-arrow-circle-right"></i></button>
            </Link>
        </div>
    );
};

export default SingleServices;