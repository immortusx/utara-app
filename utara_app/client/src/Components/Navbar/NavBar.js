import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import '../../asset/css/navbar.css';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
    // const { auth } = useAuth();
    // const email = auth.email;
    const [email, setEmail] = useState();

    const navigate = useNavigate();
    // const logout = useLogout();

    const signOut = async () => {
        // await logout();
        navigate('/login');
    }
    const signIn = async () => {
        navigate('/login');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bgprimary " id="navbar_top">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand utaralogo font-weight-bold mx-2">UTARA</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/User" className="nav-link active ">User</Link>
                        </li>

                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown"> */}
                        <li className="nav-item">
                            <Link to="/addusers" className="nav-link active">Add Users</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/quick" className="nav-link active">Quick</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Form" className="nav-link active">Room allocation</Link>
                        </li>

                        {/* </NavDropdown> */}
                    </ul>
                    <form className="p-0">
                        <div className='d-flex align-items-center justify-content-end mx-2 p-1'>
                            {email && email !== '' ? <>
                                <button className={`signotnbtn`} onClick={signOut}>sign-Out</button>
                            </> : <>
                                <button className={`signotnbtn`} onClick={signIn}>sign-in</button>
                            </>}
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default NavBar