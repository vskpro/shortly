import React from "react";
import './style.css';
import hero from './hero.svg';
function Hero() {
    return (
        <div className="hero-wrapper c-padding">
            <div className="hero-img">
                <img src={hero} alt="Hero"/>
            </div>
            <div className="hero-left">
                <div className="hero-text">More than just<br/>shorter links</div>
                <div className="hero-desc">Build your brand's recognition and get detailed insights on how your links are performing.</div>
                <button className="action-btn">Get started</button>
            </div>
        </div>
    );
}

export default Hero;