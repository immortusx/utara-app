import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';

import imgutsav from '../../asset/Images/75utasav2022.jpg'
import Mahamantr from '../../asset/Images/Mahamantr.jpeg';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
    return (
        <section className='bgcontainer shadow p-3 mb-5 bg-white rounded py-5'>
            <NavBar />
            <div className='bannrer shadow p-3 mb-5 bg-white rounded py-5'>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={imgutsav}
                            alt="First slide"
                            width='250px'
                            height='450px'
                        />
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Mahamantr}
                            alt="Second slide"
                            width='250px'
                            height='450px'
                        />

                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={imgutsav}
                            alt="Third slide"
                            width='250px'
                            height='450px'
                        />                        
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className=''>
                <div className='container'>
                    <div className='my-5 positionform'>
                        <img src={Mahamantr} className='img-fluid w-100' alt='Mahamantr' />
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default Home