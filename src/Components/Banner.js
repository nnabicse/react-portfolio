import { faFacebook, faGithub, faLinkedin, faSkype, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import bannerimg from '../../src/images/banner3.png'
import resume from '../../src/docs/Nurun_Nabi_Resume_Phero.pdf'

const Banner = () => {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <img className='img-fluid p-3' style={{ "border-radius": "20px" }} src={bannerimg} alt="" />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <h1>Nurun Nabi</h1>
                    <h5>Full Stack Web Applicaiton Developer</h5>
                    <p>
                        <a target="_blank" href="mailto:nnabi.cse@gmail.com" className='me-3'><FontAwesomeIcon style={{ "fontSize": "30px" }} icon={faEnvelope}></FontAwesomeIcon></a>
                        <a target="_blank" href="https://github.com/nnabicse" className='me-3'><FontAwesomeIcon style={{ "fontSize": "30px" }} icon={faGithub}></FontAwesomeIcon></a>
                        <a target="_blank" href="https://www.linkedin.com/in/nnabi-cse/" className='me-3'><FontAwesomeIcon style={{ "fontSize": "30px" }} icon={faLinkedin}></FontAwesomeIcon></a>
                        <a target="_blank" href="https://join.skype.com/invite/UNMdTQl6SzHO" className='me-3'><FontAwesomeIcon style={{ "fontSize": "30px" }} icon={faSkype}></FontAwesomeIcon></a>
                        <a target="_blank" href="https://www.facebook.com/nnabicse/" className='me-3'><FontAwesomeIcon style={{ "fontSize": "30px" }} icon={faFacebook}></FontAwesomeIcon></a>
                        <a target="_blank" href="https://twitter.com/nnabicse" className='me-3'><FontAwesomeIcon style={{ "fontSize": "30px" }} icon={faTwitter}></FontAwesomeIcon></a>
                        <a target="_blank" href="https://wa.me/01319209757" className='me-3'><FontAwesomeIcon style={{ "fontSize": "30px" }} icon={faWhatsapp}></FontAwesomeIcon></a>

                    </p>
                    <p style={{ "text-align": "justify" }} className='my-3'>Hi, I'm Nurun Nabi from Dhaka, Bangladesh, a Computer and Information Technology Personnel and an expert web application developer. I have experties in MERN stack for web application development and Javascript for programming. I also have fair knowledge in Artificial Intelligence  and Machine Learning. I use the puthon stack for AI/ML model development.</p>
                    <a className='btn btn-primary' download href={resume} style={{ "text-decoration": "none" }}>Download Resume</a>

                </div>
            </div>
        </div>
    );
};

export default Banner;