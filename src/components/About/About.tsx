import React, {useEffect, useRef} from 'react';
import "animate.css"
import "./About.css";
import Drops from "../Drops/Drops";
import earth from "../../assets/earthAbout.jpg"

const About = () => {
    const headerRef = useRef<HTMLDivElement | null>(null);
    const infoRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.target.id === 'about' && entry.intersectionRatio >= 0.7) {
                        if (headerRef.current) {
                            headerRef.current.classList.add('slide-from-right');
                        }
                        infoRefs.current.forEach(infoRef => {
                            if (infoRef) {
                                infoRef.classList.add('slide-from-left');
                            }
                        });
                    }
                });
            },
            {
                threshold: 0.7,
            }
        );

        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            observer.observe(aboutSection);
        }

        return () => {
            if (aboutSection) {
                observer.unobserve(aboutSection);
            }
        };
    }, []);


    return (
        <div className="about" id="about">

            <div className="info-wrapper">
                <div className="about-header" ref={headerRef} id="about-header">
                    <h1>
                        The Earth Called.  It Wants Its Cool Back.
                    </h1>
                </div>
                {/*<div className="info" ref={el => infoRefs.current[0] = el as HTMLDivElement}>*/}
                {/*    <p>*/}
                {/*        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.*/}
                {/*    </p>*/}
                {/*    /!*<Drops/>*!/*/}
                {/*</div>*/}
                <div className="info" ref={el => infoRefs.current[1] = el as HTMLDivElement}>
                    <p>
                        Driven by human activities, global warming is causing Earth's average temperature to soar, with
                        a host of detrimental outcomes. Sea levels have increased by about 8 inches, jeopardizing coastal
                        regions. The accelerated decline of Arctic sea ice, at a rate of around 13% per decade, puts
                        polar ecosystems at risk. Incidences of extreme weather like hurricanes and heatwaves are
                        becoming more common and severe. We release roughly 40 billion metric tons of CO2 each year,
                        worsening the situation. Urgent action is required to avert lasting damage to the planet and its
                        future inhabitants.
                    </p>
                    <Drops/>
                </div>
            </div>
            <div className="earth-about">
                <img src={earth} alt="earth"/>
            </div>
        </div>
    );
};

export default About;
