import React from 'react';
import Footer from '../Footer/Footer';
import api from '../Images/api.jpg'
import './Apoinment.css'
const Apoinment = () => {
    return (
        <div className='container'>
            <h1 className='text-center text-success'> Set a apoinment for your family </h1>
            <p className='text-center'> <small>He is very Excelent doctor.</small> </p>
            <div className='row my-5 apoinment-container'>
                <div className='col-md-6'>
                    <form>
                        <div class="mb-2">
                            <label for="exampleInputEmail1" class="form-label">Name</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <label for="exampleInputEmail1" class="form-label">Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <label for="exampleInputEmail1" class="form-label">Phone Number</label>
                            <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <label for="exampleInputEmail1" class="form-label">Age</label>
                            <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <p>Describe your Problem:</p>
                            <textarea name="" id="" cols="60" rows="5"></textarea>

                        </div>

                        <button type="submit" class="btn btn-outline-success mb-3"> Send Request <i class="far fa-paper-plane"></i></button>
                    </form>
                </div>
                <div className='col-md-6'>
                    <img src={api} alt="" className='img-fluid api-img ' />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Apoinment;