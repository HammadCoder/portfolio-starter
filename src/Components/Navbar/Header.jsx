import React, { useEffect, useState } from "react";
import Drawer from 'react-modern-drawer'
import { RxHamburgerMenu } from 'react-icons/rx';
import 'react-modern-drawer/dist/index.css'
import './Navbar.css'
import { IconBase } from "react-icons";
const Navbar = () => {

    // const headerLink = [
    //     {name:"Home", path:'#home'},
    //     {name:"About", path:'about'},
    //     {name:"Service", path:'service'},
    //     {name:"Resume", path:'resume'},
    // ]

    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true)
        }
        else {
            setScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])
    return (
        <div className={`n-wrapper ${scrolled ? "scrolled" : ''}`}>
            <div className="test">
                <div className="n-left">
                    <div className="n-name">M.Hammad</div>
                </div>
                <div className="n-right">
                    <div className="n-link">
                        <ul >
                            <a href="#home">Home</a>
                            <a href="#about">About</a>
                            <a href="#service">Service</a>
                            <a href="#resume">Resume</a>
                        </ul>
                    </div>
                </div>
                <div className="contact">
                    <button className="button n-btn">Contact</button>
            <div onClick={toggleDrawer} className="nav-icon"><RxHamburgerMenu /></div>
                </div>
            </div>

            <Drawer
                open={isOpen}
                onClose={onclose}
                direction='right'
                className='bla bla bla'
            >
                <div className="header-mob">
                    <ul >
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#service">Service</a>
                        <a href="#resume">Resume</a>
                    </ul>
                </div>
            </Drawer>

        </div>
    )
}

export default Navbar;

