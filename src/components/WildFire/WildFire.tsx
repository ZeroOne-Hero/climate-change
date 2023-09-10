import React, { useState } from 'react';
import './WildFire.css';
import fire from '../../assets/fire.webp';
import hand1 from '../../assets/icons/hand1.webp';
import hand2 from '../../assets/icons/hand2.webp';
import drops from '../../assets/drops-background/opacity-drops-big.webp';
import click from '../../assets/icons/click.webp';
import Drops from "../Drops/Drops";

const WildFire = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [isAnimationStarted, setIsAnimationStarted] = useState(false);

    const handleClick = () => {
        if (!isAnimationStarted) {
            setIsClicked(true);
            setTimeout(() => {
                setIsAnimationStarted(true);
            }, 500);
        }
    };

    return (
        <section
            id="wildfire"
            className={`wild-fire ${isClicked ? 'clicked' : ''}`}
            onClick={handleClick}
        >
            <div className={`wildfire-warning ${isClicked ? 'revealed' : ''}`}>
                <div className="hands">
                    <p>Climate change is increasing the risk of wildfires.</p>
                </div>
                <div className="wildfire-image">
                    <img src={hand2} alt="hand" />
                    <img src={hand1} alt="hand" />
                </div>
            </div>
            <div className={`fire-animation ${isAnimationStarted ? 'started' : ''}`}>
                <img src={fire} alt="fire" />
            </div>
            <div className={`burnt-layer ${isClicked ? 'revealed' : ''}`}></div>
            <div className={`dark-overlay ${isClicked ? 'revealed' : ''}`}></div>
            <div
                className={`drops-image ${isClicked ? 'hidden' : ''}`}
            >    <div className="wildfire-animation">
                <Drops/>
            </div>
                <Drops/>
                <img className="wildfire-drops-img" src={drops} alt="drops" />

            </div>
            <div
                className={`drops-overlay ${isClicked ? 'hidden' : ''}`}

            >
            </div>
            <div
                className={`click ${isClicked ? 'hidden' : ''}`}
            >
                <img src={click} alt="drops" />
            </div>
        </section>
    );
};

export default WildFire;
