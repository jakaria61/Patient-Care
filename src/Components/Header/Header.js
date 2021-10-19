
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import logo from '../Images/logo.png'
import './Header.css'
const Header = () => {
    const { logOut, user } = useAuth()
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary sticky-top" >
            <div className="container-fluid">
                <Nav.Link className="navbar-brand text-white" href="#"> <img src={logo} alt="" className='logo-img' /> </Nav.Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"> </span>
                </button>
                <div className="collapse navbar-collapse  justify-content-end" id="navbarNav">
                    <Nav.Link className="text-white" as={Link} to="/home"><button className='btn btn-outline-light' >Home</button></Nav.Link >
                    <Nav.Link className="text-white" as={Link} to="/services"><button className='btn btn-outline-light' >Services</button></Nav.Link >
                    <Nav.Link className="text-white" as={Link} to="/doctors"><button className='btn btn-outline-light' >Doctors</button></Nav.Link >
                    <Nav.Link className="text-white" as={Link} to="/apoinment"><button className='btn btn-outline-light' >Get Apoinment</button></Nav.Link >
                    {user.email ?
                        <button className='btn btn-outline-light' onClick={logOut} >LogOut</button>
                        : <Nav.Link className="text-white" as={Link} to="/login"><button className='btn btn-outline-light' >Login</button></Nav.Link >}
                    <Nav.Link className="text-white" as={Link} to="/register"><button className='btn btn-outline-light' >Sign Up</button></Nav.Link >
                    {user.displayName === null ? <Nav.Link>No Name</Nav.Link> : <Nav.Link>{user.displayName}</Nav.Link>}
                </div>
            </div>
        </nav>
    );
};

export default Header;