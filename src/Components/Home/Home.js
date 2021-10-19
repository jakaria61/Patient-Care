import React from 'react';
import Achivement from '../Achivement/Achivement';
import Carousel from '../Carousel/Carousel';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Services></Services>
            <Achivement></Achivement>
            <Footer></Footer>
        </div>
    );
};

export default Home;