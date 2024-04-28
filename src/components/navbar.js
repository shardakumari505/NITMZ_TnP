import React from "react";
import './navbar.scss';
import { Link } from "react-router-dom";
import BasicMenu from './menu';

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isMobileScreen: false,
        };

        this.handleResize = this.handleResize.bind(this);
        this.handleScrollTop = this.handleScrollTop.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScrollTop);
        window.addEventListener('resize', this.handleResize);

        // Initial check on mount
        this.handleResize();
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScrollTop);
        window.removeEventListener('resize', this.handleResize);
    }

    handleScrollTop = () => {
        if (window.scrollY > 10) {
            document.querySelector(".navbar-container-md").className = "navbar-container-md scroll";
        }
        else {
            document.querySelector(".navbar-container-md").className = "navbar-container-md";
        }
    };
    handleResize() {
        this.setState({
            isMobileScreen: window.innerWidth < 1400,
        });
    }

    render() {
        const { isMobileScreen } = this.state;
        return (
            <div className="navbar-container">
                <div className="navbar-container-md">
                    <Link><div className="image-container"><img className="insti-logo" src="https://www.nitmz.ac.in/Electronics%20and%20Communication%20Engineering/InstituteLogo_Colour.png" alt="insti-logo" ></img></div></Link>
                    {isMobileScreen ? (
                        <BasicMenu />
                    ) : (
                        <div className="navbar-right-content">
                            <Link className="navbar-text" to='/'><h3 className="navbar-text navbar-title">Statistics</h3></Link>
                            <Link className="navbar-text" to='/'><h3 className="navbar-text navbar-title">Recruiters</h3></Link>
                            <Link className="navbar-text" to='/'><h3 className="navbar-text navbar-title">Our Team</h3></Link>
                            <Link className="navbar-text" to='/'><h3 className="navbar-text navbar-title">Brochure</h3></Link>
                            <Link className="navbar-text" to='/'><h3 className="navbar-text navbar-title">Contact Us</h3></Link>
                            <Link className="navbar-text" to='/'><h3 className="navbar-text navbar-title"><span style={{color: "rgb(236, 202, 89)"}}>Training & Placement Office</span></h3></Link>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Navbar;