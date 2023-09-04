import React, { useState } from 'react';
import plasticLogo from "../../assets/plasticLogo.jpg";
const CalculatorPlastic = () => {
    const [bottlesPerWeek, setBottlesPerWeek] = useState(0);
    const [totalCO2e, setTotalCO2e] = useState(0);
    const [totalArea, setTotalArea] = useState(0);

    const co2ePerBottle = 82.8;
    const averageHumanLifespan = 73;
    const weeksInAYear = 52;

    const bottleArea = 0.012;
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const lifetimeBottles = bottlesPerWeek * weeksInAYear * averageHumanLifespan;

        const lifetimeCO2e = lifetimeBottles * co2ePerBottle;
        const lifetimeArea = lifetimeBottles * bottleArea;

        setTotalCO2e(lifetimeCO2e / 1000);
        setTotalArea(lifetimeArea );
    };

    return (
        <div className="calculator">
            <div className="calc-form">
                <img className="calc-logo" src={plasticLogo}/>
            <form onSubmit={handleSubmit}>
                <label>
                    Bottles per week:
                    <input type="number" value={bottlesPerWeek} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBottlesPerWeek(Number(e.target.value))}/>.

                </label>
                <button type="submit">Calculate</button>
            </form>
            </div>
            {totalCO2e > 0 && (
                <div className="calc-results">
                    <h3>Results</h3>
                    <p>Total CO2e over a lifetime: {totalCO2e.toFixed(2)} kg</p>
                    <p>Total area required: {totalArea.toFixed(2)} square m</p>
                </div>
            )}
        </div>
    );
};
export default CalculatorPlastic;
