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
                        Fueled by human actions, climate change is quickly becoming a critical issue. Sea levels have
                        risen approximately 8 inches, putting coastal areas and millions of people at risk. The alarming
                        rate of Arctic sea ice loss, about 13% per decade, not only jeopardizes polar habitats but also
                        has a ripple effect on global climate. Additionally, the increasing frequency and severity of
                        extreme weather events cause extensive damage and financial strain. Human activities, emitting
                        around 40 billion metric tons of CO2 annually, are a significant factor. Immediate intervention
                        is needed to prevent irreversible harm to Earth and future generations.
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
