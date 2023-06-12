import React, { Component } from 'react'
import Social from '../../components/Social'
import profilepic from '../../img/propic.jpg'
import ReactTypingEffect from 'react-typing-effect'
import './header.css'

const Header = () => {
    return (
        <header>
            <div className='container header__container'>
                <img src={profilepic} alt="proflie" className="profilepic" />
                <ReactTypingEffect text={['Hello World!', 'I am Rinradee', 'I am Developer']} speed={100} eraseDelay={200} className="typingeffect" />
                <Social />
            </div>
        </header>
    );
}

export default Header;