import React, { useState, useEffect } from 'react';
import CalculatorFlights from '../CalculatorFlights';
import CalculatorMeat from '../CalculatorMeat';
import CalculatorPlastic from '../CalculatorPlastic';
import "./CalculatorMain.css";
import "../CalcCommon.css";
import foot1 from "../../../assets/footprint1.jpg"
import foot2 from "../../../assets/footprint2.jpg"
import cloud from "../../../assets/cloud.jpg"
const CalculatorMain = () => {
    const [activeCalculator, setActiveCalculator] = useState('flights');

    useEffect(() => {
        const resetAnimation = () => {
            for (let i = 1; i <= 10; i++) {
                const foot = document.getElementById(`foot${i}`);
                foot.style.animation = 'none';
                void foot.offsetWidth;
                foot.style.animation = `fade-in-out 5s 1 ${i}s, wait 6s infinite`;
            }
        };


        const intervalId = setInterval(resetAnimation, 14000);


        return () => clearInterval(intervalId);
    }, []);
    return (

        <section id="calculator-main" className="calculator-main">
            <h1>CO2 FOOTPRINT CALCULATOR</h1>
            <div className="calc-button-wrapper">
            <div className="calculator-buttons">
                <button onClick={() => setActiveCalculator('flights')}>Flights Taken</button>
                <button onClick={() => setActiveCalculator('plastic')}>Plastic Waste</button>
            <button onClick={() => setActiveCalculator('meat')}>Meat Consumption</button>
            </div>
            {activeCalculator === 'flights' && <CalculatorFlights />}
            {activeCalculator === 'meat' && <CalculatorMeat />}
            {activeCalculator === 'plastic' && <CalculatorPlastic />}
            </div>
           <div className="cloud">
               <img src={cloud}/>
           </div>
            <div className="footprint">
                <div className="foot" id="foot10">
                    <img src={foot1} alt="Foot 1"/>
                </div>
                <div className="foot" id="foot9">
                    <img src={foot2} alt="Foot 2"/>
                </div>
                <div className="foot" id="foot8">
                    <img src={foot1} alt="Foot 1"/>
                </div>
                <div className="foot" id="foot7">
                    <img src={foot2} alt="Foot 2"/>
                </div>
                <div className="foot" id="foot6">
                    <img src={foot1} alt="Foot 1"/>
                </div>
                <div className="foot" id="foot5">
                    <img src={foot2} alt="Foot 2"/>
                </div>
                <div className="foot" id="foot4">
                    <img src={foot1} alt="Foot 3"/>
                </div>
                <div className="foot" id="foot3">
                    <img src={foot2} alt="Foot 4"/>
                </div>
                <div className="foot" id="foot2">
                    <img src={foot1} alt="Foot 5"/>
                </div>
                <div className="foot" id="foot1">
                    <img src={foot2} alt="Foot 6"/>
                </div>
            </div>
        </section>
    );
};

export default CalculatorMain;
