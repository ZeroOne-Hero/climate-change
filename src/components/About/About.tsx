import React, {useEffect, useRef} from 'react';
import "./About.css";
import Drops from "../Drops/Drops";
import earth from "../../assets/info-images/earth3.webp"


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
        <section className="about" id="about">
            <div className="info-wrapper">
                <div className="about-header background-general" ref={headerRef} id="about-header">
                    <h1>
                        The Earth Called. It Wants Its Cool Back.
                    </h1>
                </div>
                {/*<div className="info" ref={el => infoRefs.current[0] = el as HTMLDivElement}>*/}
                {/*    <p>*/}
                {/*    </p>*/}
                {/*    /!*<Drops/>*!/*/}
                {/*</div>*/}
                <div className="info background-general" ref={el => infoRefs.current[1] = el as HTMLDivElement}>
                    <p>
                        Driven by human activities, global warming is fast becoming one of the most pressing challenges of our time. Sea levels have increased by about 8 inches, endangering coastal
                        regions and millions of inhabitants. Equally concerning is the rapid disappearance of Arctic sea ice, vanishing at a
                        staggering rate of around 13% per decade. This threatens not only polar ecosystems but also
                        disrupts global climate patterns with far-reaching consequences. Furthermore, extreme weather
                        events like hurricanes and heatwaves are intensifying in frequency and intensity, causing
                        widespread devastation and economic loss. Human activities contribute significantly to this crisis, with an annual
                        release of 40 billion metric tons of CO2 into the atmosphere, worsening the situation. Urgent
                        action is required to avert lasting damage to the planet and its
                        future inhabitants.
                    </p>
                    <Drops/>
                </div>
            </div>
            <div className="earth-about">
                <img src={earth} alt="earth"/>
            </div>

        </section>
    );
};

export default About;
