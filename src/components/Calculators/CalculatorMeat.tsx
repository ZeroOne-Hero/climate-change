import React, {ChangeEvent, useState} from 'react';
import meatLogo from "../../assets/meatLogo.jpg";

const CalculatorMeat = () => {
    const [meatPerWeek, setMeatPerWeek] = useState(0);
    const [unit, setUnit] = useState('grams');
    const [totalCO2e, setTotalCO2e] = useState(0);

    const co2ePerKgMeat = 99.48;
    const averageHumanLifespan = 73;
    const weeksInAYear = 52;
    const gramsPerOunce = 28.3495;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let meatPerWeekInKg;

        if (unit === 'grams') {
            meatPerWeekInKg = meatPerWeek / 1000;
        } else {
            meatPerWeekInKg = (meatPerWeek * gramsPerOunce) / 1000;
        }

        const lifetimeMeatKg = meatPerWeekInKg * weeksInAYear * averageHumanLifespan;

        const lifetimeCO2eKg = lifetimeMeatKg * co2ePerKgMeat;

        setTotalCO2e(lifetimeCO2eKg);
    };

    return (
        <div className="calculator">
            <div className="calc-form">
                <img className="calc-logo" src={meatLogo}/>
                <form onSubmit={handleSubmit}>
                    <label>
                        Meat consumed per week:
                        <input
                            type="number"
                            value={meatPerWeek}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMeatPerWeek(Number(e.target.value))}

                        />
                    </label>
                    <label>
                        Unit:
                        <select value={unit} onChange={(e: ChangeEvent<HTMLSelectElement>) => setUnit(e.target.value)}>
                            <option value="grams">Grams</option>
                            <option value="ounces">Ounces</option>
                        </select>
                    </label>
                    <button type="submit">Calculate</button>
                </form>
            </div>
            {totalCO2e > 0 && (
                <div className="calc-results">
                    <h3>Results</h3>
                    <p>Your estimated CO2 emissions from meat consumption over an average human lifetime:</p>
                    <ul>
                        <li>{totalCO2e.toFixed(2)} kg</li>
                        <li>{(totalCO2e * 2.20462).toFixed(2)} lbs</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CalculatorMeat;
