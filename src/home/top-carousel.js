import React from 'react';
import './top-carousel.scss';
import TnP_1 from '../assets/TnP_img1.jpg';
import TnP_2 from '../assets/TnP_img2.jpg';
import TnP_3 from '../assets/TnP_img3.jpg';
import TnP_4 from '../assets/TnP_img4.jpg';

const HomeTopCarousel = () => {
    // Array containing imported images
    const images = [TnP_1, TnP_2, TnP_3, TnP_4];

    return (
        <div className='home-top-carousel-container'>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    {images.map((image, index) => (
                        <li key={index} data-target="#carouselExampleIndicators" data-slide-to={index} className={index === 0 ? "active" : ""}></li>
                    ))}
                </ol>
                <div className="carousel-inner">
                    {images.map((image, index) => (
                        <div key={index} className={index === 0 ? "carousel-item active" : "carousel-item"}>
                            <img className="carousel-image" src={image} alt={`Slide ${index + 1}`} />
                            <div className="carousel-overlay"></div>
                        </div>
                    ))}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
};

export default HomeTopCarousel;
