import React, {useEffect} from 'react';
import "./Solution.css";
import fashion from "../../assets/icons/solution-fashion.png";
import energy from "../../assets/icons/solution-energy.png";
import litter from "../../assets/icons/solution-litter.png";
import repair from "../../assets/icons/solution-repair.png";
import recycle from "../../assets/icons/solution-recycle.png";
import transport from "../../assets/icons/solution-transport.png";
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
                            <Drops/>
                            <p><b>Recycle:</b> Proper recycling of materials like plastic, paper, and metal minimizes the need
                                for new production, reducing both resource extraction and emissions that contribute to
                                global warming.</p>
                            <img className="solution-img" src={recycle} alt="recycle"/>
                        </div>
                        <div className="solutions-inner solution-left background-general">
                            <p><b>Repair:</b> Fixing and maintaining products instead of discarding them extends their life
                                cycle, which in turn reduces the need for new items to be manufactured, thereby saving
                                energy and reducing emissions.</p>
                            <img className="solution-img" src={repair} alt="repair"/>
                        </div>
                        <div className="solutions-inner solution-left background-general">
                            <p><b>Repair:</b> Fixing and maintaining products instead of discarding them extends their life
                                cycle, which in turn reduces the need for new items to be manufactured, thereby saving
                                energy and reducing emissions.</p>
                            <img className="solution-img" src={transport} alt="transport" />
                        </div>
                    </div>
                    <div className="solutions-block">
                        <div className="solutions-inner solution-right background-general">
                            <img className="solution-img" src={fashion} alt="fashion" />
                            <p><b>Fast Fashion:</b> Ditch the one-season wonders! Rock timeless pieces that not only make you
                                look like a style god but also give Mother Earth a well-deserved break.</p>
                        </div>
                        <div className="solutions-inner solution-right background-general">
                            <Drops/>
                            <img className="solution-img" src={litter} alt="litter" />
                            <p><b>Do Not Litter:</b> Approximately 8 million metric tons of plastic enter the ocean each year,
                                posing a significant threat to marine life through ingestion and entanglement. </p>
                        </div>
                        <div className="solutions-inner solution-right background-general">
                            <img className="solution-img" src={energy} alt="energy" />
                            <p><b>Green Energy:</b> Transitioning to renewable energy sources can drastically cut greenhouse gas emissions, reducing the Earth's
                                overall temperature and mitigating climate change impacts. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Solution;
