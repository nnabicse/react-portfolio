import React from 'react';
import { Carousel } from 'react-bootstrap';
import data1 from '../../src/images/projects/data1.png'
import data2 from '../../src/images/projects/data2.png'
import data3 from '../../src/images/projects/data3.png'

const Ids = () => {
    return (
        <div>
            <div className='text-center text-dark bg-light'>
                <h1 className='py-5'>Independent Data Scientist -Service Site</h1>
            </div>
            <div className='container my-5'>
                <div className='row justify-content-center'>
                    <div className='col-sm-12 col-md-9 col-lg-9'>
                        <div class="card mb-3">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={data1}
                                        alt="First slide"
                                    />

                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={data2}
                                        alt="Second slide"
                                    />


                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={data3}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                            {/* <img class="card-img-top" src={idsimg} alt="Card image cap" /> */}
                            <div class="card-body">
                                <h5 class="card-title">Independent Data Scientist -Simple Website to Book Data Sciecne Services</h5>
                                <p class="card-text">Independent Data Scientist is a individual service selling ecommerce functionality that helps someone to book any service from the service provider. It's a modern looking design with qa consistant UI. This website built with HTML5, CSS3, Javascript, Bootstrap CSS5, React Js and other technologies.</p>
                                <p>Used Technology: </p>
                                <ul>
                                    <li>Hyper Text Markup Language 5</li>
                                    <li>Cascading Style Sheet 3</li>
                                    <li>Bootstrap CSS Version 5</li>
                                    <li>Javascript Programming</li>
                                    <li>React Javascript Library</li>
                                    <li>Reaact Bootstrap CSS</li>
                                </ul>
                                <div className='container'>
                                    <div className='row text-center g-2'>
                                        <div className='col-sm-12 col-md-6 col-lg-6'>
                                            <a target="_blank" href="https://independent-data-scientist.web.app/" className='btn btn-primary w-100'>Live</a>
                                        </div>
                                        <div className='col-sm-12 col-md-6 col-lg-6'>
                                            <a target="_blank" href="https://github.com/nnabicse/Independent-Data-Scientist" className='btn btn-primary w-100'>Code</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Ids;