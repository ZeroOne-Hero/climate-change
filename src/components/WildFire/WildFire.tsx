import React from 'react';
import "./WildFire.css";
import fire from "../../assets/fire.jpg";
import hand1 from "../../assets/hand1.jpg";
import hand2 from "../../assets/hand2.jpg";
import { useEffect, useRef } from 'react';
const WildFire = () => {
    const wildfireWarningRef = useRef(null);
    const fireAnimationRef = useRef(null);
    const burntLayerRef = useRef(null);
    const darkOverlayRef = useRef(null);

    const handleIntersect = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    };

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3,
        };

        const observer = new IntersectionObserver(handleIntersect, options);

        if (wildfireWarningRef.current) {
            observer.observe(wildfireWarningRef.current);
        }
        if (fireAnimationRef.current) {
            observer.observe(fireAnimationRef.current);
        }
        if (burntLayerRef.current) {
            observer.observe(burntLayerRef.current);
        }
        if (darkOverlayRef.current) {
            observer.observe(darkOverlayRef.current);
        }
    }, []);
    return (
        <section id="wildfire" className="wild-fire">
            <div ref={wildfireWarningRef} className="wildfire-warning">
                <div className="hands">
                <h1>Climate change is increasing the risk of wildfires.</h1>
                </div>
                <div className="wildfire-image">
                    <img src={hand2}/>
                  <img src={hand1}/>
                </div>
            </div>
            <div ref={fireAnimationRef} className="fire-animation">
                <img src={fire}/>
            </div>
            <div ref={burntLayerRef} className="burnt-layer"> </div>

            <div ref={darkOverlayRef} className="dark-overlay"></div>

        </section>
    );
};

export default WildFire;
