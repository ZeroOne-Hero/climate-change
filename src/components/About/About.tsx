import React, {useEffect, useRef }from 'react';
import "animate.css"
import "./About.css";
import Drops from "../Drops/Drops";
import earth from "../../assets/earthAbout.png"
const About = () => {
    const headerRef = useRef(null);
    const infoRef = useRef(null);


    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (entry.target.id === 'about-header') {
                            entry.target.classList.add('slide-from-right');
                        } else if (entry.target.id === 'info') {
                            entry.target.classList.add('slide-from-left');
                        }
                    }
                });
            },
            {
                threshold: 0.7
            }
        );

        if (headerRef.current) {
            observer.observe(headerRef.current);
        }

        if (infoRef.current) {
            observer.observe(infoRef.current);
        }

        return () => {
            if (headerRef.current) {
                observer.unobserve(headerRef.current);
            }
            if (infoRef.current) {
                observer.unobserve(infoRef.current);
            }
        };
    }, []);


    return (
        <div className="about" id="about">
            <div className="about-header" ref={headerRef} id="about-header">
                <h1>
                    The Earth Called. It Wants Its Cool Back.
                </h1>
            </div>
            <div className="info-wrapper">
                <div className="info" ref={infoRef} id="info">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <Drops/>
                </div>
                <div className="earth-about">
                   <img src={earth}/>
                </div>
            </div>
        </div>
    );
};

export default About;
