import React, {ChangeEvent, useState} from 'react';
import meatLogo from "../../assets/icons/meatLogo.webp";

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
                <img className="calc-logo" src={meatLogo} alt="meat"/>
                <form onSubmit={handleSubmit}>
                    <label>
                        Beef consumed per week:
                        <input
                            type="number"
                            value={meatPerWeek || ''}
                            placeholder=""
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
                    <h2 className="results-header">Results</h2>
                    <p><b>Your estimated CO2 emissions from beef consumption over an average human lifetime:</b></p>
                    <p>{totalCO2e.toFixed(2)} kg ({(totalCO2e * 2.20462).toFixed(2)} lbs)</p>
                    <p>While going completely vegetarian may not be feasible for everyone, even small reductions in meat
                        consumption can have a positive impact on the planet. Making conscious choices to eat less meat,
                        particularly red meat, can significantly lower your carbon footprint. It's a step that's both
                        good for you and the Earth.</p>
                    <p>*calculation based on data from Joseph Poore and Thomas Nemecek (2018) study published in the journal Science. Calculation includes both the CO2 required to raise the stock and methane produced by cows. </p>
                </div>
            )}
        </div>
    );
};

export default CalculatorMeat;
