import React, {useEffect} from 'react';
import "./Solution.css";
import fashion from "../../assets/solution-fashion.jpg";
import energy from "../../assets/solution-energy.jpg";
import litter from "../../assets/solution-litter.jpg";
import repair from "../../assets/solution-repair.jpg";
import recycle from "../../assets/solution-recycle.jpg";
import transport from "../../assets/solution-transport.jpg";
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
                        } // } else if (targetElement.classList.contains('solutions-header')) {
                        //     console.log("Animating from top");
                        //     targetElement.classList.add('animate-from-left');
                        // }
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
            <div ref={solutionsRef} className="solutions">
                <div className="solutions-header">
                    {/*<Drops/>*/}
                    <h1>Not lost yet. What we can do to fix it.</h1>
                </div>
                <div className="solutions-wrapper ">
                    <div className="solutions-block block1">
                        <div className="solutions-inner solution-left">
                            <Drops/>
                            <p>Recycle: Proper recycling of materials like plastic, paper, and metal minimizes the need
                                for new production, reducing both resource extraction and emissions that contribute to
                                global warming.</p>
                            <img className="solution-img" src={recycle} alt="recycle"/>
                        </div>
                        <div className="solutions-inner solution-left">
                            <p>Repair: Fixing and maintaining products instead of discarding them extends their life
                                cycle, which in turn reduces the need for new items to be manufactured, thereby saving
                                energy and reducing emissions.</p>
                            <img className="solution-img" src={repair} alt="repair"/>
                        </div>
                        <div className="solutions-inner solution-left">
                            <p>Repair: Fixing and maintaining products instead of discarding them extends their life
                                cycle, which in turn reduces the need for new items to be manufactured, thereby saving
                                energy and reducing emissions.</p>
                            <img className="solution-img" src={transport} alt="transport"/>
                        </div>
                    </div>
                    <div className="solutions-block">
                        <div className="solutions-inner solution-right ">
                            <img className="solution-img" src={fashion} alt="fashion"/>
                            <p>Fast Fashion: Ditch the one-season wonders! Rock timeless pieces that not only make you
                                look like a style god but also give Mother Earth a well-deserved break.</p>
                        </div>
                        <div className="solutions-inner solution-right">
                            <Drops/>
                            <img className="solution-img" src={litter} alt="litter"/>
                            <p>Do Not Litter: Approximately 8 million metric tons of plastic enter the ocean each year,
                                posing a significant threat to marine life through ingestion and entanglement. </p>
                        </div>
                        <div className="solutions-inner solution-right">
                            <img className="solution-img" src={energy} alt="energy"/>
                            <p>Green Energy: Transitioning to renewable energy sources like solar, wind, and
                                hydroelectric power can drastically cut greenhouse gas emissions, reducing the Earth's
                                overall temperature and mitigating climate change impacts. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Solution;
