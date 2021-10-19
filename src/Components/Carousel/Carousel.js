import React from 'react';
import { Link } from 'react-router-dom';
import './Carousel.css'
const Carousel = () => {
    return (
        <div>

            <div id="carouselExampleCaptions" class="carousel slide mb-5" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active slide-bg1 row">
                        <div className='col-md-6 slide-text'>
                            <br /><br /><br />
                            <h1>Are You <br />Sick?</h1> <br />
                            <p>If you are looking for a good doctor for your health this is for you.</p> <br />
                            <Link to='/services'><button className='btn btn-outline-success'>See Our Service</button></Link> <br /> <br />
                        </div>
                    </div>
                    <div class="carousel-item slide-bg2">
                        <div className='col-md-6 slide-text'>
                            <br /><br /><br />
                            <h1>Are you Disapointed for your<br />Heart disease??</h1> <br />
                            <p>This is the most popular hospital for you. Here you can discuss or treatment from experienced doctor.</p> <br />
                            <Link to='/services'><button className='btn btn-outline-success'>See Our Service</button></Link> <br /> <br />
                        </div>
                    </div>
                    <div class="carousel-item slide-bg3">
                        <div className='col-md-6 slide-text'>
                            <br /><br /><br />
                            <h1>Do you want to  Test your Eye ?Don't Panic!</h1> <br />
                            <p> You can easily do it here.Here have most expert and experienced peron for testing</p> <br />
                            <Link to='/services'><button className='btn btn-outline-success'>See Our Service</button></Link> <br /> <br />
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;