import React from 'react';
import smallbanner from '../../src/images/smallbanner.png'

const About = () => {
    return (
        <div>
            <div className='text-center text-dark bg-light'>
                <h1 className='py-5'>About Me</h1>
            </div>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-sm-12 col-md-6 col-lg-6">
                        <h2 class="h4 my-2">Hello! I’m Nurun Nabi.</h2>
                        <p>I am passionate about web application development and programming software. I am a skilled full stack developer and master of
                            MERN stack tools such as React, Express, Node and Mongo. I am a quick learner and a team worker that gets the
                            job done. I can easily capitalize on low hanging fruits and quickly maximize timely deliverables for
                            real-time schemas.</p>
                        <div class="row mt-3">
                            <div class="col-sm-2">
                                <div class="pb-1">Email:</div>
                            </div>
                            <div class="col-sm-10">
                                <div class="pb-1 fw-bolder">nnabi.cse@gmail.com</div>
                            </div>
                            <div class="col-sm-2">
                                <div class="pb-1">Skype:</div>
                            </div>
                            <div class="col-sm-10">
                                <div class="pb-1 fw-bolder">nnabi@skype.com</div>
                            </div>
                            <div class="col-sm-2">
                                <div class="pb-1">Phone:</div>
                            </div>
                            <div class="col-sm-10">
                                <div class="pb-1 fw-bolder">+88013-1920-9757</div>
                            </div>
                            <div class="col-sm-2">
                                <div class="pb-1">Address:</div>
                            </div>
                            <div class="col-sm-10">
                                <div class="pb-1 fw-bolder">Dhaka, Bangladesh</div>
                            </div>
                            <div class="col-sm-2">
                                <div class="pb-1">Staus:</div>
                            </div>
                            <div class="col-sm-10">
                                <div class="pb-1 fw-bolder">Available</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6">
                        <img className='img-fluid' src={smallbanner} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;