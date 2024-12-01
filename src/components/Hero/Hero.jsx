import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>

      <img src={profile_img} alt="" />
      <h1><span>I'm Leuk Virapha,</span> Software Development </h1>
      <p>I am glad for all of you visited my website to
        share about experience to each other.
        Currently I have studied at Norton University
        year fourth, Department Computer Studied,
        Major Software Development.  
        </p>
        <div className="hero-action">
          <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#work'>Connect with me </AnchorLink> </div>
          <div className="hero-resume">My Resume</div>
        </div>




    </div>
  )
}

export default Hero
