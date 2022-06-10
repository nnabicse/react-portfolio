import React from 'react';
import ppml1 from '../../src/images/projects/ppml1.png'
import ware1 from '../../src/images/projects/ware1.png'
import data1 from '../../src/images/projects/data1.png'
import eye1 from '../../src/images/projects/eye1.png'
import mobile2 from '../../src/images/projects/mobile2.png'
import refri1 from '../../src/images/projects/refri1.png'
import { useNavigate } from 'react-router-dom';

const Projects = () => {
    const navigate = useNavigate();
    const handleEyeFrameDetail = () => {
        navigate('/eframe')
    }
    const handleIdsDetail = () => {
        navigate('/ids')
    }
    const handleNnabiPpmlDetail = () => {
        navigate('/nnabippml')
    }
    const handleNnabiWarehouseDetail = () => {
        navigate('/nnabiwarehouse')
    }
    const handleMobileDetail = () => {
        navigate('/mobile')
    }
    const handleRefriDetail = () => {
        navigate('/refri')
    }
    return (
        <div>
            <div className='text-center text-dark bg-light mb-5'>
                <h1 className='py-5'>Projects</h1>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-4 my-5">
                        <div class="card">
                            <img className='img-fluid' src={ppml1} alt="" />
                            <div class="card-body">
                                <h5 class="card-title">NNABI Printing Parts Manufacturer Ltd.</h5>
                                <p class="card-text" style={{ "textAlign": "justify" }}>NNABI Printing Parts Manufacturer Limited is manufacturer online selling palce where an individual can buy products in wholesell</p>
                            </div>
                            <div class="card-footer bg-white container">
                                <div className='row'>
                                    <div className='text-center'>
                                        <button onClick={handleNnabiPpmlDetail} className='btn btn-primary col-sm-12 col-md-8 col-lg-8'>Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4 my-5">
                        <div class="card">
                            <img className='img-fluid' src={ware1} alt="" />
                            <div class="card-body">
                                <h5 class="card-title">NNABI Warehouse</h5>
                                <p class="card-text" style={{ "textAlign": "justify" }}>NNABI Warehouse is an inventory management system where a business person can manage stocks of products and incomin or outgoing orders.</p>
                            </div>
                            <div class="card-footer bg-white container">
                                <div className='row'>
                                    <div className='text-center'>
                                        <button onClick={handleNnabiWarehouseDetail} className='btn btn-primary col-sm-12 col-md-8 col-lg-8'>Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4 my-5">
                        <div class="card">
                            <img className='img-fluid' src={data1} alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Independent Data Scientist</h5>
                                <p class="card-text" style={{ "textAlign": "justify" }}>Independent Data Scientist is indivial service provider application where an individual can book any service provided by the data scientist.</p>
                            </div>
                            <div class="card-footer bg-white container">
                                <div className='row'>
                                    <div className='text-center'>
                                        <button onClick={handleIdsDetail} className='btn btn-primary col-sm-12 col-md-8 col-lg-8'>Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4 my-5">
                        <div class="card">
                            <img className='img-fluid' src={eye1} alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Eye Frame -Simple Ecommerce</h5>
                                <p class="card-text" style={{ "textAlign": "justify" }}>Eye Frame is a simple ecommerce cart functionality where an individual can select 5 frames and the application will chosse one for the individual.</p>
                            </div>
                            <div class="card-footer bg-white container">
                                <div className='row'>
                                    <div className='text-center'>
                                        <button onClick={handleEyeFrameDetail} className='btn btn-primary col-sm-12 col-md-8 col-lg-8'>Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4 my-5">
                        <div class="card">
                            <img className='img-fluid' src={mobile2} alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Mobile Pedia -Simple Phone Database</h5>
                                <p class="card-text" style={{ "textAlign": "justify" }}>Mobile-Pedia is a simple phone database where an individual can search any phone and can see the latest specification and prices of the phone.</p>
                            </div>
                            <div class="card-footer bg-white container">
                                <div className='row'>
                                    <div className='text-center'>
                                        <button onClick={handleMobileDetail} className='btn btn-primary col-sm-12 col-md-8 col-lg-8'>Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4 my-5">
                        <div class="card">
                            <img className='img-fluid' src={refri1} alt="" />
                            <div class="card-body">
                                <h5 class="card-title">NNABI Refrigeretor -Product Review</h5>
                                <p class="card-text" style={{ "textAlign": "justify" }}>NNABI Refrigeretor is a website based product review fuctionality where anyone can see the other people reviews about the product and specification.</p>
                            </div>
                            <div class="card-footer bg-white container">
                                <div className='row'>
                                    <div className='text-center'>
                                        <button onClick={handleRefriDetail} className='btn btn-primary col-sm-12 col-md-8 col-lg-8'>Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='row my-5 container'>
                    <div className='text-center'>
                        <button className='btn btn-primary col-sm-12 col-md-2 col-lg-2'>All Skills</button>
                    </div>
                </div> */}
            </div >
        </div>
    );
};

export default Projects;