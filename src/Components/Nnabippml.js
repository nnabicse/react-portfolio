import React from 'react';
import { Carousel } from 'react-bootstrap';
import ppml1 from '../../src/images/projects/ppml1.png'
import ppml2 from '../../src/images/projects/ppml2.png'
import ppml3 from '../../src/images/projects/ppml3.png'
import ppml4 from '../../src/images/projects/ppml4.png'
import ppml5 from '../../src/images/projects/ppml5.png'

const Nnabippml = () => {
    return (
        <div>
            <div className='text-center text-dark bg-light'>
                <h1 className='py-5'>NNABI Printing Parts Manufacturer Limited</h1>
            </div>
            <div className='container my-5'>
                <div className='row justify-content-center'>
                    <div className='col-sm-12 col-md-9 col-lg-9'>
                        <div class="card mb-3">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={ppml1}
                                        alt="First slide"
                                    />

                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={ppml2}
                                        alt="Second slide"
                                    />


                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={ppml3}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={ppml4}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={ppml5}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                            {/* <img class="card-img-top" src={ppmlimg} alt="Card image cap" /> */}
                            <div class="card-body">
                                <h5 class="card-title">NNABI Printing Parts Manufacturer Limited</h5>
                                <p class="card-text">NNABI Printing Parts Manufacturer Limited is a manufacturer product selling website functionality that helps someone to buy any product from the manufacturer. It's a modern looking design with qa consistant UI. This website built with HTML5, CSS3, Javascript, Bootstrap CSS5, React Js, Firebase, Node JS,MongoDB and other technologies.</p>
                                <p>Used Technology: </p>
                                <ul>
                                    <li>Hyper Text Markup Language 5</li>
                                    <li>Cascading Style Sheet 3</li>
                                    <li>Bootstrap CSS Version 5</li>
                                    <li>Javascript Programming</li>
                                    <li>React Javascript Library</li>
                                    <li>Reaact Bootstrap CSS</li>
                                    <li>Google Firebase Authentication</li>
                                    <li>Node Javascript Framework</li>
                                    <li>MongoDB Online Database</li>
                                </ul>
                                <div className='container'>
                                    <div className='row text-center g-2'>
                                        <div className='col-sm-12 col-md-4 col-lg-4'>
                                            <a target="_blank" href="https://nnabippml.web.app/" className='btn btn-primary w-100'>Live</a>
                                        </div>
                                        <div className='col-sm-12 col-md-4 col-lg-4'>
                                            <a target="_blank" href="https://github.com/nnabicse/NNABI-Warehouse-Full-Stack-Client" className='btn btn-primary w-100'>Frontend</a>
                                        </div>
                                        <div className='col-sm-12 col-md-4 col-lg-4'>
                                            <a target="_blank" href="https://github.com/nnabicse/NNABI-Warehouse-Full-Stack-Server" className='btn btn-primary w-100'>Backend</a>
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

export default Nnabippml;