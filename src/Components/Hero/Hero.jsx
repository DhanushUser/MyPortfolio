import React from 'react'
import './hero.css'
import profile from '../../assets/profile.jpg'
import MyResume from '../../assets/MyResume.pdf'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile} alt="" />
        <h1><span>I'm Dhanush,</span> Frontend developer.</h1>
        <p>Front-end development with a strong foundation in REACT and JAVASCRIPT.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume"><a href={MyResume} download='Resume'>My Resume</a></div>
        </div>
    </div>
  )
}

export default Hero