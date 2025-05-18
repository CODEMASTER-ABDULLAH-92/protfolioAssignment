import React from 'react'
import "./Hero.css"
import { assets } from '../../assets/asset'
const Hero = () => {
  return (
    <div className='hero'>
<div className="left-hero">
    <h1>Hi, I'm <span>Julia Walker</span>. <br />
    Web Developer</h1>
    <h3>Specialized in a11y and Core Web Vitals</h3>
    <div className="tw0-btn">
        <button className='btn-1'>Contact Me</button>
        <button className='btn-2'>About Me</button>
    </div>
</div>
<div className="right-hero">
   <div className="right-mini">
   <div className="right-stars">
        <img src={assets.star} className='star' alt="" />
        <img src={assets.star} className='star' alt="" />
    </div>
    <div className="shap-1"></div>
    <div className="shap-2"></div>
    <div className='big-img'><img src={assets.bigDp}alt="" />
    </div>
   </div>
</div>
    </div>
  )
}

export default Hero
