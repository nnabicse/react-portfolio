import React from 'react';
import { Carousel } from 'react-bootstrap';
import mobile1 from '../../src/images/projects/mobile1.png'
import mobile2 from '../../src/images/projects/mobile2.png'
import mobile3 from '../../src/images/projects/mobile3.png'

const Mobile = () => {
    return (
        <div>
            <div className='text-center text-dark bg-light'>
                <h1 className='py-5'>Mobile Pedia -Simple Phone Database</h1>
            </div>
            <div className='container my-5'>
                <div className='row justify-content-center'>
                    <div className='col-sm-12 col-md-6 col-lg-6'>
                        <div class="card mb-3">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={mobile1}
                                        alt="First slide"
                                    />

                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={mobile2}
                                        alt="Second slide"
                                    />


                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={mobile3}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>

                            {/* <img class="card-img-top" src={mobile} alt="Card image cap" /> */}
                            <div class="card-body">
                                <h5 class="card-title">Mobile Pedia -Simple Phone Database with Search</h5>
                                <p class="card-text">Mobile Pedia is a simple phone database functionality that helps someone to choose or find phone information simply by searching. It's a modern looking design with qa consistant UI. This websitr built with HTML5, CSS3, Javascript, Bootstrap CSS5 and other technologies.</p>
                                <p>Used Technology: </p>
                                <ul>
                                    <li>Hyper Text Markup Language 5</li>
                                    <li>Cascading Style Sheet 3</li>
                                    <li>Bootstrap CSS Version 5</li>
                                    <li>Javascript Programming</li>
                                </ul>
                                <div className='container'>
                                    <div className='row text-center g-2'>
                                        <div className='col-sm-12 col-md-6 col-lg-6'>
                                            <a target="_blank" href="https://mobile-pedia.netlify.app/" className='btn btn-primary w-100'>Live</a>
                                        </div>
                                        <div className='col-sm-12 col-md-6 col-lg-6'>
                                            <a target="_blank" href="https://github.com/nnabicse/Mobilepedia" className='btn btn-primary w-100'>Code</a>
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

export default Mobile;