import React from 'react';
import mobile from '../../src/images/projects/mobile.png'

const Mobile = () => {
    return (
        <div>
            <div className='text-center text-dark bg-light'>
                <h1 className='py-5'>Mobile Pedia -Simple Phone Database</h1>
            </div>
            <div className='container my-5'>
                <div class="card mb-3 w-75 m-auto">
                    <img class="card-img-top" src={mobile} alt="Card image cap" />
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
                            <div className='row text-center'>
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
    );
};

export default Mobile;