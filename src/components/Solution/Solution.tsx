import React, {useEffect} from 'react';
import "./Solution.css";
import fashion from "../../assets/icons/solution-fashion.webp";
import energy from "../../assets/icons/solution-energy.webp";
import litter from "../../assets/icons/solution-litter.webp";
import repair from "../../assets/icons/solution-repair.webp";
import recycle from "../../assets/icons/solution-recycle.webp";
import transport from "../../assets/icons/solution-transport.webp";
import Drops from "../Drops/Drops";

const Solution = () => {

    const solutionsRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    console.log("Element observed:", entry.target);
                    if (entry.isIntersecting) {
                        console.log("Element is intersecting:", entry.target);
                        const targetElement = entry.target as HTMLElement;
                        if (targetElement.classList.contains('solution-left')) {
                            console.log("Animating from left");
                            targetElement.classList.add('animate-from-left');
                        } else if (targetElement.classList.contains('solution-right')) {
                            console.log("Animating from right");
                            targetElement.classList.add('animate-from-right');
                        }
                    }
                });
            },

            {
                threshold: 0.5,
            }
        );

        if (solutionsRef.current) {
            const solutionElements = solutionsRef.current.querySelectorAll('.solutions-inner, .solutions-header');
            solutionElements.forEach(element => {
                console.log("Observing element:", element);
                observer.observe(element)
            });
        }
    }, []);


    return (
        <section id="solution" className="solution">
            <div className="info-header">
                <h1>Let our kids count the stars and not pollution rates.</h1>
            </div>
            <div ref={solutionsRef} className="solutions">
                <div className="solutions-wrapper ">
                    <div className="solutions-block block1">
                        <div className="solutions-inner solution-left background-general">
                            <p><b>Recycle:</b> Proper recycling of materials like plastic, paper, and metal minimizes
                                the need
                                for new production, reducing both resource extraction and emissions that contribute to
                                global warming.</p>
                            <img className="solution-img" src={recycle} alt="recycle"/>
                        </div>
                        <div className="solutions-inner solution-left background-general">
                            <p><b>Travel:</b> Consider eco-friendly travel options to minimize your carbon footprint. By
                                opting for train travel, carpooling, or bicycle you're playing a
                                part in reducing harmful emissions and mitigating climate change.</p>
                            <img className="solution-img" src={transport} alt="transport"/>
                        </div>
                        <div className="solutions-inner solution-left background-general">
                            <Drops/>
                            <p><b>Repair:</b> Mending and upkeep of existing items, rather than throwing them away,
                                prolongs their usability, reducing the demand for new production and subsequently
                                lowering energy consumption and emissions.</p>
                            <img className="solution-img" src={repair} alt="repair"/>
                        </div>
                    </div>
                    <div className="solutions-block">
                        <div className="solutions-inner solution-right background-general">
                            <img className="solution-img" src={fashion} alt="fashion"/>
                            <p><b>Fast Fashion:</b> The fashion industry is
                                responsible for 10% of global carbon emissions. By choosing long-lasting pieces, you're
                                contributing to the reduction of waste and
                                energy consumption.</p>
                        </div>
                        <div className="solutions-inner solution-right background-general">
                            <Drops/>
                            <img className="solution-img" src={litter} alt="litter"/>
                            <p><b>Do Not Litter:</b> Approximately 8 million metric tons of plastic enter the ocean each
                                year,
                                posing a significant threat to marine life through ingestion and entanglement. </p>
                        </div>
                        <div className="solutions-inner solution-right background-general">
                            <img className="solution-img" src={energy} alt="energy"/>
                            <p><b>Green Energy:</b> Transitioning to renewable energy sources can drastically cut
                                greenhouse gas emissions, reducing the Earth's
                                overall temperature and mitigating climate change impacts. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Solution;
