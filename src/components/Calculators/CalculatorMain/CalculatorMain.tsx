import React, {useState, useEffect} from 'react';
import CalculatorFlights from '../CalculatorFlights';
import CalculatorMeat from '../CalculatorMeat';
import CalculatorPlastic from '../CalculatorPlastic';
import "./CalculatorMain.css";
import foot1 from "../../../assets/icons/footprint1.png"
import foot2 from "../../../assets/icons/footprint2.png"


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


        const intervalId = setInterval(resetAnimation, 14000);


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

            <div className="calc-button-wrapper">
                <h1>CO2 FOOTPRINT CALCULATOR</h1>
                <div className="calculator-buttons">
                    <button onClick={() => setActiveCalculator('plastic')}>Plastic Waste</button>
                    <button onClick={() => setActiveCalculator('flights')}>Flights Taken</button>
                    <button onClick={() => setActiveCalculator('meat')}>Meat Consumption</button>
                </div>
                {activeCalculator === 'plastic' && <CalculatorPlastic/>}
                {activeCalculator === 'flights' && <CalculatorFlights/>}
                {activeCalculator === 'meat' && <CalculatorMeat/>}
            </div>
            <div className="footprint">{footprints}</div>
        </section>
    );
};

export default CalculatorMain;
