import React from 'react';
import ewu from '../../src/images/edu/eastwest.png'
import edu from '../../src/images/edu/eastdelta.png'
import cpi from '../../src/images/edu/cpi.png'

const Education = () => {
    return (
        <div>
            <div className='text-center text-dark bg-light mb-5'>
                <h1 className='py-5'>Education</h1>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-4 my-5">
                        <div class="card">
                            <div className='container'>
                                <div className='row align-items-center'>
                                    <div class="col-sm-12 col-md-6 col-lg-4 my-5"><img className='img-fluid' src={ewu} alt="" /></div>
                                    <div class="col-sm-12 col-md-6 col-lg-8">
                                        <div class="card-body">
                                            <h5 class="card-title">East West University</h5>
                                            <small class="card-text fw-bold">Master of Science</small><br />
                                            <small class="card-text">Computer Science & Engg.</small> <br />
                                            <small class="card-text">Major Data Science</small> <br />
                                            <small class="card-text">Session 2021-2022.</small> <br />
                                            <small class="card-text">CGPA of 4 out of 4</small>
                                        </div>
                                    </div>
                                    {/* <div class="card-footer container">
                                    <div className='row'>
                                        <div className='text-center'>
                                            <button className='btn btn-primary col-sm-12 col-md-8 col-lg-8'>Details</button>
                                        </div>
                                    </div>
                                </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4 my-5">
                        <div class="card">
                            <div className='container'>
                                <div className='row align-items-center'>
                                    <div class="col-sm-12 col-md-6 col-lg-4 my-5"><img className='img-fluid' src={edu} alt="" /></div>
                                    <div class="col-sm-12 col-md-6 col-lg-8">
                                        <div class="card-body">
                                            <h5 class="card-title">East Delta University</h5>
                                            <small class="card-text fw-bold">Bachelor of Science</small><br />
                                            <small class="card-text">Computer Science & Engg.</small> <br />
                                            <small class="card-text">Major Computer Science</small> <br />
                                            <small class="card-text">Session 2018-2021.</small> <br />
                                            <small class="card-text">CGPA of 3.50 out of 4</small>
                                        </div>
                                    </div>
                                    {/* <div class="card-footer container">
                                    <div className='row'>
                                        <div className='text-center'>
                                            <button className='btn btn-primary col-sm-12 col-md-8 col-lg-8'>Details</button>
                                        </div>
                                    </div>
                                </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4 my-5">
                        <div class="card">
                            <div className='container'>
                                <div className='row align-items-center'>
                                    <div class="col-sm-12 col-md-6 col-lg-4 my-5"><img className='img-fluid' src={cpi} alt="" /></div>
                                    <div class="col-sm-12 col-md-6 col-lg-8">
                                        <div class="card-body">
                                            <h5 class="card-title">CTG Polytechnic Inst.</h5>
                                            <small class="card-text fw-bold">Diploma in Engineering</small><br />
                                            <small class="card-text">Computer Technology</small> <br />
                                            <small class="card-text">Major Computer Tech</small> <br />
                                            <small class="card-text">Session 2014-2018.</small> <br />
                                            <small class="card-text">CGPA of 2.78 out of 4</small>
                                        </div>
                                    </div>
                                    {/* <div class="card-footer container">
                                    <div className='row'>
                                        <div className='text-center'>
                                            <button className='btn btn-primary col-sm-12 col-md-8 col-lg-8'>Details</button>
                                        </div>
                                    </div>
                                </div> */}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Education;