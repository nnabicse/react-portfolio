import React from 'react';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Education from './Education';
import Footer from './Footer';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {
    return (
        <div>
            <div className='my-5'>
                <Banner></Banner>
            </div>
            <div className='my-5'>
                <About></About>
            </div>
            
            <Skills></Skills>
            
            <Projects></Projects>
            
            <Education></Education>
            
            <Contact></Contact>
        </div>
    );
};

export default Home;