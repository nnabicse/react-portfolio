import React from 'react';
import refriimg from '../../src/images/projects/refri.png'

const Refri = () => {
    return (
        <div>
            <div className='text-center text-dark bg-light'>
                <h1 className='py-5'>NNABI Refrigeretor -Product Review Site</h1>
            </div>
            <div className='container my-5'>
                <div class="card mb-3 w-75 m-auto">
                    <img class="card-img-top" src={refriimg} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">NNABI Refrigeretor -Product Review of a  Website</h5>
                        <p class="card-text">NNABI Refrigeretor is a simple product review website functionality that helps someone to see the reviuew of a product. It's a modern looking design with qa consistant UI. This websitr built with HTML5, CSS3, Javascript, Bootstrap CSS5 and other technologies.</p>
                        <p>Used Technology: </p>
                        <ul>
                            <li>Hyper Text Markup Language 5</li>
                            <li>Cascading Style Sheet 3</li>
                            <li>Bootstrap CSS Version 5</li>
                            <li>Javascript Programming</li>
                        </ul>
                        <div className='container'>
                            <div className='row text-center'>
                                <div className='col-sm-12 col-md-6 col-lg-6'>
                                    <a target="_blank" href="https://nnabi-refrigeretor.netlify.app/" className='btn btn-primary w-100'>Live</a>
                                </div>
                                <div className='col-sm-12 col-md-6 col-lg-6'>
                                    <a target="_blank" href="https://github.com/nnabicse/NNABI-Refrigeretor" className='btn btn-primary w-100'>Code</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Refri;