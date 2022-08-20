import React from 'react'
import "./hero.css"
import MAGIC from '../assets/pexels-rostislav-uzunov-9867271.mp4'

const Hero = () => {
  return (
    <>

    <div className="videoContainer">
        <video src={MAGIC} autoPlay loop muted></video>
    </div>
    </>

    )
}

export default Hero