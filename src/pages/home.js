import React from 'react';
import './home.scss';
import HomeTopCarousel from '../home/top-carousel';
import Team from '../home/team';
import Contact from '../home/contact';
import WelcomeMessage from '../home/welcome_message';
import Statistics from '../home/statistics';
import Recruiters from '../home/recruiters';
import AboutNitmz from '../home/aboutnitmz';

const HomeScreen = () => {
    

    return (
        <div className='home-page-container'>
            <HomeTopCarousel />
            <AboutNitmz />
            <WelcomeMessage />
            <Statistics />
            <Team />
            <Recruiters />
            <Contact />

        </div>
    );
};

export default HomeScreen;