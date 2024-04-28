import React from 'react';
import './contact.scss';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
    return (
        <div className='contact-container'>
            <h2>CONTACT US</h2>
            <div className='contact-us-flex-container'>
                <div className='contact-us-details'>
                    <h4>TRAINING AND PLACEMENT OFFICE</h4>
                    <div className='cnt-details'> <LocationOnIcon /> Academic Block-11, NIT Mizoram <br />Chaltlang Ding di Veng, Chaltlang <br /> Aizawl, Mizoram – 796012</div>
                    <div className='cnt-details'><PhoneIcon /> <span className="icon-text">+91-9035385841</span></div>
                    <div className='cnt-details phone'><EmailIcon /> <span className="icon-text">tnp@nitmz.ac.in</span></div>
                </div>
                <div className="contact-lottie-animation">
                    <lottie-player
                        src="https://lottie.host/7cb4846d-9ab2-4e11-be53-7bceac8b7ae5/5cQhkcXmZN.json"
                        background="transparent"
                        speed="1"
                        loop
                        autoplay
                    ></lottie-player>
                </div>
            </div>
        </div>
    );
};

export default Contact;
