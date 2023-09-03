import React, {useEffect, useRef }from 'react';
import "animate.css"
import "./About.css";
import Drops from "../Drops/Drops";
import earth from "../../assets/earthAbout.jpg"
const About = () => {
    const headerRef = useRef(null);
    const infoRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    console.log("observed:", entry);
                    if (entry.isIntersecting) {
                        if (entry.target.id === 'about-header') {
                            entry.target.classList.add('slide-from-right');
                        } else if (entry.target.classList.contains('info')) {
                            entry.target.classList.add('slide-from-left');
                        }
                    }
                });
            },
            {
                threshold: 0.8
            }
        );

        if (headerRef.current) {
            observer.observe(headerRef.current);
        }

        infoRefs.current.forEach(infoRef => {
            if (infoRef) {
                observer.observe(infoRef);
            }
        });

        return () => {
            if (headerRef.current) {
                observer.unobserve(headerRef.current);
            }
            infoRefs.current.forEach(infoRef => {
                if (infoRef) {
                    observer.unobserve(infoRef);
                }
            });
        };
    }, []);



    return (
        <div className="about" id="about">

            <div className="info-wrapper">
                <div className="about-header" ref={headerRef} id="about-header">
                    <h1>
                        The Earth Called. It Wants Its Cool Back.
                    </h1>
                </div>
                <div className="info" ref={el => infoRefs.current[0] = el}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <Drops/>
                </div>
                <div className="info" ref={el => infoRefs.current[1] = el}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <Drops/>
                </div>
            </div>
            <div className="earth-about">
                <img src={earth}/>
            </div>
        </div>
    );
};

export default About;
