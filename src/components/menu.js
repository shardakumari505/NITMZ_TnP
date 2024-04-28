import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import './navbar.scss'

export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [scrolled, setScrolled] = React.useState(false);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="">
            <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                className="menu-basic-button"
            >
                <h3 className="navbar-menu-text " style={{ color: scrolled ? "black" : "rgba(254, 254, 255, 1)" }} >Training & Placement Office</h3>
                <MenuIcon style={{ fontSize: "64px", color: scrolled ? "black" : "rgba(254, 254, 255, 1)" }} />
            </Button>
            <Menu
                id="basic-menu"
                className="nav-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                <Link className="navbar-menu-text" to='/'><h3 className="navbar-menu-text navbar-menu-title">Students</h3></Link>
                <Link className="navbar-menu-text" to='/'><h3 className="navbar-menu-text navbar-menu-title">Recruiters</h3></Link>
                <Link className="navbar-menu-text" to='/'><h3 className="navbar-menu-text navbar-menu-title">Our Team</h3></Link>
                <Link className="navbar-menu-text" to='/'><h3 className="navbar-menu-text navbar-menu-title">Contact Us</h3></Link>
            </Menu>
        </div>
    );
}
