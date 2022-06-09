import { faFacebook, faGithub, faLinkedin, faSkype, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <footer class="pt-4 pb-4 text-center bg-light mt-5">
            <div class="container">
                <div class="my-3">
                    <div class="h4">Nurun Nabi</div>
                    <p>IT Personnel and Full Stack Web Application Developer</p>
                    <div class="social-nav">
                        <p>
                            <a target="_blank" href="mailto:nnabi.cse@gmail.com" className='me-3'><FontAwesomeIcon style={{ "fontSize": "30px" }} icon={faEnvelope}></FontAwesomeIcon></a>
                            <a target="_blank" href="https://github.com/nnabicse" className='me-3'><FontAwesomeIcon style={{ "fontSize": "30px" }} icon={faGithub}></FontAwesomeIcon></a>
                            <a target="_blank" href="https://www.linkedin.com/in/nnabi-cse/" className='me-3'><FontAwesomeIcon style={{ "fontSize": "30px" }} icon={faLinkedin}></FontAwesomeIcon></a>
                            <a target="_blank" href="https://join.skype.com/invite/UNMdTQl6SzHO" className='me-3'><FontAwesomeIcon style={{ "fontSize": "30px" }} icon={faSkype}></FontAwesomeIcon></a>
                            <a target="_blank" href="https://www.facebook.com/nnabicse/" className='me-3'><FontAwesomeIcon style={{ "fontSize": "30px" }} icon={faFacebook}></FontAwesomeIcon></a>
                            <a target="_blank" href="https://twitter.com/nnabicse" className='me-3'><FontAwesomeIcon style={{ "fontSize": "30px" }} icon={faTwitter}></FontAwesomeIcon></a>
                            <a target="_blank" href="https://wa.me/01319209757" className='me-3'><FontAwesomeIcon style={{ "fontSize": "30px" }} icon={faWhatsapp}></FontAwesomeIcon></a>

                        </p>
                    </div>
                </div>
                <div class="text-small text-secondary">
                    <div class="mb-1">&copy; 2022 Nurun Nabi. All rights reserved.</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;