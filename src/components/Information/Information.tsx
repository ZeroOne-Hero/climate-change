import React from 'react';
import "./Information.css"
import Statistics from "../Statistics/Statistics";
import Gallery from "../Gallery/Gallery";
import bee from "../../assets/info-images/bee.webp";
import turtle from "../../assets/info-images/turtle.webp";
import cow from "../../assets/info-images/cow.webp";
import penguin from "../../assets/info-images/penguin.webp";
import coral from "../../assets/info-images/coral.webp";
import whale from "../../assets/info-images/whale.webp";
import human from "../../assets/info-images/family.webp";
import {Tooltip} from 'react-tooltip';
import Drops from "../Drops/Drops";
import WildFire from "../WildFire/WildFire";


const Information = () => {
    return (
        <section id="information" className="information">
            <div className="info-header info-header1">
                <h1>What's the damage?</h1>
            </div>
            <div className="statistics-container">
                <Statistics/>
                <div className="info-stats background-general">
                    <Drops/>
                    <h2>68% of world's glaciers will disappear by year 2100.</h2>
                    <p>
                        Since the late 1800s, Earth's average yearly surface temperature has risen about 1°C, leading to
                        significant environmental changes. These include more extreme weather, reduced ice and snow, and
                        shifts in species habitats. Land is warming faster than oceans, with the Arctic heating up the
                        quickest. In 2022, global temperatures were 0.86°C above the 20th-century average, marking it
                        the sixth warmest year. All top 10 warmest years have occurred since 2010. If carbon emissions
                        persist, temperatures could soar between 2.8 to 5.7°C by century's end, emphasizing the need for
                        quick action to lower emissions and adopt greener energy.
                    </p>
                    <p>*data source for creating this graph: NASA's Goddard Institute for Space Studies </p>
                </div>
            </div>
            <div className="info-list background-general info-list-top">
                <Drops/>
                <p>Global warming represents an alarming, long-term rise in Earth's average temperature—a
                    surge that has gained dangerous momentum in recent decades due to human activities. For a deeper
                    understanding of this climatic shift, consider the following critical facts:</p>
                <ul>
                    <li><b>Deforestation:</b> Deforestation, largely fueled by activities like logging and land
                        conversion for agriculture,
                        represents a critical disruption to the delicate carbon equilibrium of our planet. In the last
                        half-century, we've lost nearly one-fifth of the Amazon rainforest. Trees act as Earth's carbon
                        filters, capturing CO2 from the atmosphere. When we lose these trees, we not only lose the
                        ability to capture CO2 but also release stored carbon, making climate change worse.
                    </li>
                    <li><b>Unprecedented CO2 Levels:</b> Measurements at Mauna Loa Observatory indicated CO2 levels of
                        419 ppm in May 2021, a record high in the last 800,000 years. Burning fossil fuels and clearing
                        forests are the primary culprits, and they cause CO2 to trap more heat in our atmosphere.
                    </li>
                    <li><b>Plastic Pollution:</b> Around 8 million tons of plastic end up in our oceans each year. Aside
                        from the visible environmental damage, the decay process of this plastic also emits greenhouse
                        gases, adding to the global warming issue.
                    </li>
                    <li><b>Air Pollution:</b> The World Health Organization reports that polluted air affects 90% of the
                        global population, leading to 7 million premature deaths annually. The pollution comes primarily
                        from burning fossil fuels and contributes to both poor health and climate change.
                    </li>
                    <li><b>Ocean Acidification:</b> As the amount of CO2 in the atmosphere increases, a significant
                        portion
                        is absorbed by the oceans. Since the beginning of the industrial era, ocean acidity has
                        increased by 26%. This level of acidification puts marine ecosystems, including coral reefs that
                        host a quarter of marine biodiversity, at high risk.
                    </li>
                    <li><b>Positive Feedback Loops:</b> The pace of Arctic sea ice melting is around 13.1% per decade,
                        according to official data. This melting decreases Earth's ability to reflect solar radiation,
                        causing it to absorb more heat and further quicken the warming process.
                    </li>
                </ul>
            </div>
            <div className="info-list background-general info-list-bottom">
                <div className="info-list-item">
                    <Drops/>
                    <img className="info-img" src={bee} alt="bee" data-tooltip-id="bee-tooltip"
                         data-tooltip-content="Bees have an exceptional sense of smell. They can detect certain scents and pheromones from flowers up to 5 miles (8 kilometers) away, helping them locate nectar-rich blooms."
                         data-tooltip-delay-show={50}/>
                    <p>Climate change is negatively impacting bees through altered plant scents, disrupted seasonal
                        timing, habitat loss, and increased disease risk. These factors pose a serious threat to both
                        domesticated and wild bee populations, leading to repercussions for ecosystems and human food
                        supply.
                    </p>
                </div>
                <div className="info-list-item">
                    <img className="info-img" src={coral} alt="coral" data-tooltip-id="coral-tooltip"
                         data-tooltip-content="Despite covering less than 1% of the ocean floor, coral reefs support around 25% of all marine life, making them one of the most biodiverse ecosystems on the planet."
                         data-tooltip-delay-show={50}/>
                    <p>Coral reefs, dubbed the "marine rainforests," are crucial for oceanic biodiversity and mitigating
                        storm damage along coastlines. Climate-induced coral bleaching poses risks to these reefs and
                        the ecosystems they support. Reducing emissions of greenhouse gases is key to their ongoing
                        health.
                    </p>
                </div>
                <div className="info-list-item">
                    <img className="info-img" src={whale} alt="whale" data-tooltip-id="whale-tooltip"
                         data-tooltip-content="Some whales are known to have songs that can last up to 30 minutes and can be heard by other whales from hundreds of miles away. These complex and mysterious songs are a fascinating aspect of whale communication and behavior."
                         data-tooltip-delay-show={50}/>
                    <p> Whales store substantial
                        amounts of CO2 in their bodies and help fertilise the phytoplankton that
                        absorbs 40% of the world's CO2. Researchers suggest that if we help whales in reaching their
                        pre-whaling population levels of 4 to 5 million they could potentially capture a 1.7 billion
                        tonnes of CO2 annually.
                    </p>
                </div>
                <div className="info-list-item">
                    <Drops/>
                    <img className="info-img" src={penguin} alt="penguin" data-tooltip-id="penguin-tooltip"
                         data-tooltip-content="Penguins are exceptional divers, with some species capable of diving to depths of over 1,800 feet (550 meters) in search of food."
                         data-tooltip-delay-show={50}/>

                    <p>In late 2022, nearly 10,000 emperor penguin chicks died when the ice platform fractured in the
                        Bellingshausen Sea. Penguins heavily depend on sea ice for
                        its existence. Present studies suggest that the loss of sea ice could lead to the extinction of
                        more than 90% of the emperor penguin population by century's end.
                    </p>
                </div>
                <div className="info-list-item">
                    <img className="info-img" src={turtle} alt="turtle" data-tooltip-id="turtle-tooltip"
                         data-tooltip-content="Sea turtles exist for about 110 million years! This means they shared the planet with dinosaurs and have witnessed the Earth's history unfold over countless generations."
                         data-tooltip-delay-show={50}/>
                    <p>Recent studies show that sea turtles may not adapt their nesting habits enough to combat rising
                        sea temperatures. The research found that laying eggs earlier would offset only about 55% of a
                        1.5°C temperature rise.
                        Hotter nests yield more females and lower hatching success, raising extinction risks.
                    </p>
                </div>
                <div className="info-list-item">
                    <img className="info-img" src={cow} alt="cow" data-tooltip-id="cow-tooltip"
                         data-tooltip-content="Cows have a keen social structure and form close bonds with their herd members. They often have best friends within the group and can become stressed when separated from their companions."
                         data-tooltip-delay-show={50}/>
                    <p>Cows are the saddest animal on Earth. Beef cows live an average of just 18 months before being
                        slaughtered. Their rearing is resource-heavy, with one kilogram of beef emitting 100 kg of
                        CO2-equivalent. Food production contributes to 35% of global emissions, and meat accounts for
                        almost 60% of this.
                    </p>
                </div>
            </div>
            <div className="info-list-human background-general">
                <Drops/>
                <img className="human" src={human} alt="human" data-tooltip-id="human-tooltip"
                     data-tooltip-content="Every time you take a 10-minute shower with hot water, you can release approximately 0.1 pounds (0.045 kilograms) of carbon dioxide into the atmosphere. While it might not seem like much, it highlights the environmental impact of everyday activities."
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
                <a href="/calculator" className="calculator-link">
                    <div>
                        <h1>Click here to go to CO2 calculator</h1>
                    </div>
                </a>
            </div>
            <div className="info-header">
                <h1>Too hot to be cool. Look what we've done.</h1>
            </div>
            <Tooltip id="turtle-tooltip" className="style-tooltip" arrowColor="transparent"/>
            <Tooltip id="penguin-tooltip" className="style-tooltip" arrowColor="transparent"/>
            <Tooltip id="bee-tooltip" className="style-tooltip" arrowColor="transparent"/>
            <Tooltip id="whale-tooltip" className="style-tooltip" arrowColor="transparent"/>
            <Tooltip id="coral-tooltip" className="style-tooltip" arrowColor="transparent"/>
            <Tooltip id="cow-tooltip" className="style-tooltip" arrowColor="transparent"/>
            <Tooltip id="human-tooltip" className="style-tooltip " arrowColor="transparent"/>
            <Gallery/>
            <WildFire/>
        </section>
    );
};

export default Information;
