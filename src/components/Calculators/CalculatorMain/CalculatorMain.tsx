import React, {useState, useEffect} from 'react';
import CalculatorFlights from '../CalculatorFlights';
import CalculatorMeat from '../CalculatorMeat';
import CalculatorPlastic from '../CalculatorPlastic';
import "./CalculatorMain.css";
import foot1 from "../../../assets/icons/footprint1.webp"
import foot2 from "../../../assets/icons/footprint2.webp"
import {Helmet, HelmetProvider} from 'react-helmet-async';


const CalculatorMain = () => {
    const [activeCalculator, setActiveCalculator] = useState('plastic');

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

        const intervalId = setInterval(resetAnimation, 14000);

        return () => clearInterval(intervalId);
    }, []);

    const footprints = [];

    for (let i = 1; i <= 10; i++) {
        footprints.push(
            <div className="foot" id={`foot${i}`} key={`foot${i}`}>
                <img src={i % 2 === 0 ? foot2 : foot1} alt={`Foot ${i}`}/>
            </div>
        );
    }

    return (
        <HelmetProvider>
            <section id="calculator-main" className="calculator-main">
                <div className="calc-background"></div>
                <div className="calc-button-wrapper">
                    <Helmet>
                        <title>CO2 Footprint Calculator</title>
                        <meta
                            name="description"
                            content="Calculate your carbon footprint with our eco-friendly calculator."
                        />
                    </Helmet>
                    <h1>CO2 FOOTPRINT CALCULATOR</h1>
                    <div className="calculator-buttons">
                        <button onClick={() => setActiveCalculator('plastic')}>Plastic Waste</button>
                        <button onClick={() => setActiveCalculator('flights')}>Flights Taken</button>
                        <button onClick={() => setActiveCalculator('meat')}>Beef Consumption</button>
                    </div>
                    {activeCalculator === 'plastic' && <CalculatorPlastic/>}
                    {activeCalculator === 'flights' && <CalculatorFlights/>}
                    {activeCalculator === 'meat' && <CalculatorMeat/>}
                </div>
                <div className="footprint">{footprints}</div>
            </section>
        </HelmetProvider>
    );
};

export default CalculatorMain;

