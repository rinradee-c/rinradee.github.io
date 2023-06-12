import React from 'react'
import Navitems from './Navitems'
import './nav.css'
import { useState } from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><i class="fas fa-home"></i></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>about</a>
            <a href="#education" onClick={() => setActiveNav('#education')} className={activeNav === '#education' ? 'active' : ''}>contact</a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>experience</a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>contact</a>
        </nav>
    );
}

export default Nav;