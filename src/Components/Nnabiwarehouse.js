import React from 'react';
import { Carousel } from 'react-bootstrap';
import ware1 from '../../src/images/projects/ware1.png'
import ware2 from '../../src/images/projects/ware2.png'
import ware3 from '../../src/images/projects/ware3.png'

const Nnabiwarehouse = () => {
    return (
        <div>
            <div className='text-center text-dark bg-light'>
                <h1 className='py-5'>NNABI Warehouse</h1>
            </div>
            <div className='container my-5'>
                <div className='row justify-content-center'>
                    <div className='col-sm-12 col-md-9 col-lg-9'>
                    </div>
                    <div class="card mb-3">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={ware1}
                                    alt="First slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={ware2}
                                    alt="Second slide"
                                />


                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={ware3}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                        {/* <img class="card-img-top" src={ware} alt="Card image cap" /> */}
                        <div class="card-body">
                            <h5 class="card-title">NNABI Warehouse -Inventory Management Application</h5>
                            <p class="card-text">NNABI Warehouse is a inventory management application functionality that helps someone manage his or her business products stock. It's a modern looking design with qa consistant UI. This website built with HTML5, CSS3, Javascript, Bootstrap CSS5, React Js, Firebase, Node JS,MongoDB and other technologies.</p>
                            <p>Used Technology: </p>
                            <ul>
                                <li>Hyper Text Markup Language 5</li>
                                <li>Cascading Style Sheet 3</li>
                                <li>Bootstrap CSS Version 5</li>
                                <li>Javascript Programming</li>
                                <li>React Javascript Library</li>
                                <li>React Bootstrap CSS</li>
                                <li>Google Firebase Authentication</li>
                                <li>Node Javascript Framework</li>
                                <li>MongoDB Online Database</li>
                            </ul>
                            <div className='container'>
                                <div className='row text-center g-2'>
                                    <div className='col-sm-12 col-md-4 col-lg-4'>
                                        <a target="_blank" href="https://nnabi-warehouse.web.app/" className='btn btn-primary w-100'>Live</a>
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
    );
};

export default Nnabiwarehouse;