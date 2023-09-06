import React from 'react';
import "./Information.css"
import Statistics from "../Statistics/Statistics";
import Gallery from "../Gallery/Gallery";
import bee from "../../assets/bee.jpg";
import turtle from "../../assets/turtle.jpg";
import cow from "../../assets/cow.jpg";
import penguin from "../../assets/penguin.jpg";
import coral from "../../assets/coral.jpg";
import tree from "../../assets/tree.jpg";
import human from "../../assets/family.jpg";
import {Tooltip} from 'react-tooltip';
import WildFire from "../WildFire/WildFire";
import Drops from "../Drops/Drops";

const Information = () => {
    return (
        <section id="information" className="information">
            <div className="info-header">
                <h1>Lets talk numbers</h1>
            </div>
            <div className="statistics-container">
                <Statistics/>
                <div className="info-stats">
                    <Drops/>
                    <h2>LOREM IPSUM DOLOR SIT AMET</h2>
                    <p>
                        Since the late 1800s, Earth's average yearly surface temperature has risen about 1°C, leading to
                        significant environmental changes. These include more extreme weather, reduced ice and snow, and
                        shifts in species habitats. Land is warming faster than oceans, with the Arctic heating up the
                        quickest. In 2022, global temperatures were 0.86°C above the 20th-century average, marking it
                        the sixth warmest year. All top 10 warmest years have occurred since 2010. If carbon emissions
                        persist, temperatures could soar between 2.8 to 5.7°C by century's end, emphasizing the need for
                        quick action to lower emissions and adopt greener energy.
                    </p>
                </div>
            </div>
            <div className="info-list">

                <div className="info-list-item">
                    <img className="info-img" src={turtle} alt="turtle" data-tooltip-id="turtle-tooltip" data-tooltip-content="Seal tooltip"
                         data-tooltip-delay-show={50}/>
                    <p>Recent studies show that sea turtles may not adapt their nesting habits enough to combat rising
                        sea temperatures. The research, covering 58 global nesting sites and all seven marine turtle
                        species, found that laying eggs earlier would offset only about 55% of a 1.5°C temperature rise.
                        Hotter nests yield more females and lower hatchling success, raising extinction risks.
                    </p>
                </div>

                <div className="info-list-item">
                    <Drops/>
                    <img className="info-img" src={tree} alt="tree" data-tooltip-id="tree-tooltip" data-tooltip-content="Tree tooltip"
                         data-tooltip-delay-show={50}/>
                    <p>Deforestation accelerates climate change by cutting down carbon-absorbing forests and emitting
                        CO2. It's driven by agriculture and palm oil production, impacting global warming, weather, and
                        water cycles. Covering 30% of Earth, the loss of forests is urgent. At this rate, rainforests
                        may be gone in 100 years.
                    </p>
                </div>
                <div className="info-list-item">
                    <Drops/>
                    <img className="info-img" src={penguin} alt="penguin" data-tooltip-id="penguin-tooltip"
                         data-tooltip-content="Penguin tooltip" data-tooltip-delay-show={50}/>
                    <p>In late 2022, nearly 10,000 young emperor penguins perished when the ice platform they were
                        residing on fractured in the Bellingshausen Sea near the Antarctic Peninsula. This event marks a
                        disastrous setback in the reproduction of the species, which is heavily dependent on sea ice for
                        its existence. Present studies suggest that the loss of sea ice could lead to the extinction of
                        more than 90% of the emperor penguin population by century's end.
                    </p>
                </div>
                <div className="info-list-item">
                    <img className="info-img" src={bee} alt="bee" data-tooltip-id="bee-tooltip" data-tooltip-content="Bee tooltip"
                         data-tooltip-delay-show={50}/>
                    <p>Climate change is negatively impacting bees through altered plant scents, disrupted seasonal
                        timing, habitat loss, and increased disease risk. These factors pose a serious threat to both
                        domesticated and wild bee populations, leading to repercussions for ecosystems and human food
                        supply. Measures like habitat protection, sustainable farming, and planting bee-friendly flora
                        are recommended for conservation.
                    </p>
                </div>
                <div className="info-list-item">
                    <img className="info-img" src={coral} alt="coral" data-tooltip-id="coral-tooltip" data-tooltip-content="Coral tooltip"
                         data-tooltip-delay-show={50}/>
                    <p>Coral reefs, dubbed the "marine rainforests," are crucial for oceanic biodiversity and mitigating
                        storm damage along coastlines. Climate-induced coral bleaching poses risks to these reefs and
                        the ecosystems they support. Reducing emissions of greenhouse gases is key to their ongoing
                        health.
                    </p>
                </div>
                <div className="info-list-item">
                    <img className="info-img" src={cow} alt="cow" data-tooltip-id="cow-tooltip" data-tooltip-content="Cow tooltip"
                         data-tooltip-delay-show={50}/>
                    <p>Cows are the saddest animal on Earth. Beef cows live an average of just 18 months before being
                        slaughtered. Their rearing is resource-heavy, with one kilogram of beef emitting 100 kg of
                        CO2-equivalent. Food production contributes to 35% of global emissions, and meat accounts for
                        almost 60% of this.
                    </p>
                </div>
            </div>
            <div className="info-list-human">
                <Drops/>
                <img  className="human" src={human} alt="human" data-tooltip-id="human-tooltip" data-tooltip-content="Cow tooltip"
                     data-tooltip-delay-show={50}/>
                <p>And last but not least, we humans are not at all immune to the impact of climate change. If we don't
                    act urgently to mitigate climate change, we're looking at a potential one billion premature deaths
                    over the next century. This is based on the "1,000-ton rule," which estimates that for every 1,000
                    tons of fossil carbon burned, one future premature death is likely. This translates into a grave
                    human cost, especially for poorer countries that contribute far less to carbon emissions but bear a
                    disproportionate share of the impacts. To avoid this devastating outcome, immediate action is
                    required in the form of carbon emission reductions, transitioning to renewable energy, and
                    implementing technologies for carbon waste management. Financial incentives like carbon taxes could
                    also accelerate these crucial changes.</p>
                 <div className="calculator-link">
                     <h3>Want to know your CO2 footprint?</h3>
                     <h1>GO TO CALCULATOR</h1>
                 </div>
            </div>
            <div className="info-header">
                <h1>Look what we've done...</h1>
            </div>
            <Tooltip id="turtle-tooltip" className="style-tooltip"/>
            <Tooltip id="penguin-tooltip" className="style-tooltip"/>
            <Tooltip id="bee-tooltip" className="style-tooltip"/>
            <Tooltip id="tree-tooltip" className="style-tooltip"/>
            <Tooltip id="coral-tooltip" className="style-tooltip"/>
            <Tooltip id="cow-tooltip" className="style-tooltip"/>
            <Tooltip id="human-tooltip" className="style-tooltip"/>
            <Gallery/>

        </section>
    );
};

export default Information;
