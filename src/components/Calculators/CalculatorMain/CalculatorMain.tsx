import React, { useState, useEffect, startTransition } from 'react';
import "./CalculatorMain.css";
import foot1 from "../../../assets/footprint1.png";
import foot2 from "../../../assets/footprint2.png";
import { Helmet } from "react-helmet";
import CalculatorFlights from '../CalculatorFlights';
import CalculatorMeat from '../CalculatorMeat';
import CalculatorPlastic from '../CalculatorPlastic';

const CalculatorMain = () => {
    const [activeCalculator, setActiveCalculator] = useState('flights');

    useEffect(() => {
        const resetAnimation = () => {
            for (let i = 1; i <= 10; i++) {
                const foot = document.getElementById(`foot${i}`);
                if (foot) {
                    foot.style.animation = 'none';
                    void foot.offsetWidth;
                    foot.style.animation = `fade-in-out 5s 1 ${i}s, wait 6s infinite`;
                }
            }
        };

        const intervalId = setInterval(resetAnimation, 15000);

        return () => clearInterval(intervalId);
    }, []);

    const footprints = [];

    for (let i = 1; i <= 10; i++) {
        footprints.push(
            <div className="foot" id={`foot${i}`} key={`foot${i}`}>
                <img  src={i % 2 === 0 ? foot2 : foot1} alt={`Foot ${i}`}/>
            </div>
        );
    }

    return (
        <section id="calculator-main" className="calculator-main">
            <Helmet>
                <title>CO2 Emissions Calculator - Calculate Your Carbon Footprint</title>
                <meta
                    name="description"
                    content="Use our CO2 emissions calculator to estimate your carbon footprint. Learn how your lifestyle choices impact the environment and discover ways to reduce your carbon footprint."
                />
                <meta name="author" content="Your Name" />
            </Helmet>
            <div className="calc-button-wrapper">
                <h1>CO2 FOOTPRINT CALCULATOR</h1>
                <div className="calculator-buttons">
                    <button onClick={() => {
                        startTransition(() => setActiveCalculator('flights'));
                    }}>Flights Taken
                    </button>
                    <button onClick={() => {
                        startTransition(() => setActiveCalculator('plastic'));
                    }}>Plastic Waste
                    </button>
                    <button onClick={() => {
                        startTransition(() => setActiveCalculator('meat'));
                    }}>Meat Consumption
                    </button>
                </div>
                {activeCalculator === 'flights' && <CalculatorFlights />}
                {activeCalculator === 'meat' && <CalculatorMeat />}
                {activeCalculator === 'plastic' && <CalculatorPlastic />}
            </div>
            <div className="footprint">{footprints}</div>
        </section>
    );
};

export default CalculatorMain;
