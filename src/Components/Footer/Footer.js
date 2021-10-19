import React from 'react';
import logo from '../Images/loogo.png'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='row w-100 '>

                <div className="col-md-4 px-5 ">
                    <h1 className='text-center text-success'><img src={logo} alt="" className='logo-img' /></h1>
                    <hr />
                    <p>Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis augue duis dolore te feugait nulla facilisi mazim placerat</p>

                    <p><i class="fas fa-map-marker-alt"></i> Street, 11000 Boikaly, Khulna</p>
                    <p><i class="fas fa-phone-alt"></i> +8989898989</p>
                    <p><i class="fas fa-envelope"></i> support@yahoo.com</p>

                    <a href="#"><i class="fab fa-facebook " ></i></a>
                    <a href="#"><i class="fab fa-twitter-square"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                </div>
                <div className="col-md-4 px-5 ">
                    <h1 className='text-center text-success'>Leatest service</h1>
                    <hr />
                    <i class="fas fa-arrow-circle-right"> Asthema</i> <br />
                    <i class="fas fa-arrow-circle-right"> Corona</i> <br />
                    <i class="fas fa-arrow-circle-right"> Allergic</i> <br />
                    <i class="fas fa-arrow-circle-right"> Surgery</i> <br />
                    <i class="fas fa-arrow-circle-right"> Eye Operation</i> <br />
                    <p>Take Treatment for your good health.Don't forget to Take decesion for your body.Stay safe stay healthy.</p>
                </div>
                <div className="col-md-4 px-5">
                    <h1 className='text-center text-success'>Get In Touch</h1>
                    <hr />
                    <input type="text" className="form-control w-75" placeholder=" Enter Your Email" name="" id="" /><br />
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea><br />
                    <button className='btn btn-outline-success'>Massage</button>

                </div>
            </div>
            <hr />
            <p className='text-center text-secondary'> &copy; All Rights Reserved Paitent Care.</p>
        </div>
    );
};

export default Footer;