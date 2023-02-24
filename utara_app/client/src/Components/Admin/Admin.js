import React from 'react'
import { Link } from 'react-router-dom';
import '../../asset/css/adminrole.css';
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';
import imgutsav from '../../asset/Images/75utasav2022.jpg'

const Admin = () => {
    return (
        <section>
            <NavBar />
            <div className='container-fluid bgdarkprimary bannerheight'>
                <div className='d-flex align-items-center justify-content-center w-100 h-100'>
                    <h1 className='text-light'>Balkrushna Technology</h1>
                </div>
            </div>

            <div className='container'>
                <div className='row my-5'>
                    <div className='col-md-4'>
                        <div class="card text-white bg-dark">
                            <img src={imgutsav} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="card text-dark bg-light">
                            <img src={imgutsav} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="card text-dark bg-info">
                            <img src={imgutsav} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row my-5'>
                    <div className='col-md-4'>
                        <div class="card text-dark bg-warning">
                            <img src={imgutsav} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="card text-white bg-danger">
                            <img src={imgutsav} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="card text-white bg-success">
                            <img src={imgutsav} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row my-5'>
                    <div className='col-md-4'>
                        <div class="card text-white bg-secondary">
                            <img src={imgutsav} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="card text-white bg-primary ">
                            <img src={imgutsav} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="card text-white bg-dark mb-3">
                            <img src={imgutsav} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </section>
    )
}

export default Admin;