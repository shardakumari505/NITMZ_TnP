import React from 'react';
import './recruiters.scss';
import Recruiter from '../assets/recruiters.png'

const Recruiters = () => {
    

    return (
        <div className='recruiters-container'>
            <h2 className='recruiters-title'>PAST RECRUITERS</h2>
            <div className='recruiters-img-div'><img className='recruiters-img' src={Recruiter} alt="Recruiters" /></div>
        </div>
    );
};

export default Recruiters;