import React from 'react';
import eye from '../../src/images/projects/eyeframe.png'

const Eyeframe = () => {
    return (
        <div>
            <div className='text-center text-dark bg-light'>
                <h1 className='py-5'>Eye Frame -Simple Ecommerce</h1>
            </div>
            <div className='container my-5'>
                <div className='row justify-content-center'>
                    <div className='col-sm-12 col-md-9 col-lg-9'>
                        <div class="card mb-3">
                            <img class="card-img-top" src={eye} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Eyeframe -Simple Ecommerce Cart for Eye Frames</h5>
                                <p class="card-text">Eyeframe is a simple ecommerce cart functionality that helps someone to choose one of five frames. It's a modern looking design with qa consistant UI. This websitr built with HTML5, CSS3, Javascript, Bootstrap CSS5 and other technologies.</p>
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
                                            <a target="_blank" href="https://eyeframe.netlify.app/" className='btn btn-primary w-100'>Live</a>
                                        </div>
                                        <div className='col-sm-12 col-md-6 col-lg-6'>
                                            <a target="_blank" href="https://github.com/nnabicse/EyeFrame" className='btn btn-primary w-100'>Code</a>
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

export default Eyeframe;