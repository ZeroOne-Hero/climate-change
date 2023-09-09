import React, {ChangeEvent, FormEvent, useState} from 'react';
import axios from 'axios';
import flightsLogo from "../../assets/icons/flightLogo.png";

const CalculatorFlights = () => {
    const [from, setFrom] = useState<string>('');
    const [to, setTo] = useState<string>('');
    const [passengers, setPassengers] = useState<number>(1);
    const [flightClass, setFlightClass] = useState<string>('unknown');
    // const [result, setResult] = useState<any>(null);
    const [customerResult, setCustomerResult] = useState<any>(null);
    const airportCodes = ['JFK', 'LAX', 'ORD', 'SFO', 'ATL', 'DFW', 'SEA', 'MIA', 'DEN', 'BOS'];
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // setResult(null);
        setCustomerResult(null);

        const API_KEY = '23YHF80V1AMCY4GQW64ZHKSF5R30';

        const postData = {
            legs: [
                {
                    from,
                    to,
                    passengers: parseInt(String(passengers), 10),
                    class: flightClass,
                },
            ],
        };

        const requestOptions = {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
            },
        };

        try {
            const response = await axios.post('https://beta4.api.climatiq.io/travel/flights', postData, requestOptions);
            setCustomerResult(response.data);

            setFrom('');
            setTo('');
            setPassengers(1);
            setFlightClass('unknown');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <section className="calculator">
            <div className="calc-form">
                <img className="calc-logo" src={flightsLogo}  alt="plane"/>
                <form onSubmit={handleSubmit}>
                    <label>
                        From:
                        <select value={from} onChange={(e: ChangeEvent<HTMLSelectElement>) => setFrom(e.target.value)}>
                            <option value="">Select</option>
                            {airportCodes.map(code => (
                                <option key={code} value={code}>{code}</option>
                            ))}
                        </select>
                    </label>
                    <label>
                        To:
                        <select value={to} onChange={(e) => setTo(e.target.value)}>
                            <option value="">Select</option>
                            {airportCodes.map(code => (
                                <option key={code} value={code}>{code}</option>
                            ))}
                        </select>
                    </label>
                    <label>
                        Passengers:
                        <input type="number" value={passengers}
                               onChange={(e: ChangeEvent<HTMLInputElement>) => setPassengers(Number(e.target.value))}/>
                    </label>
                    <label>
                        Class:
                        <select value={flightClass} onChange={(e) => setFlightClass(e.target.value)}>
                            <option value="unknown">Unknown</option>
                            <option value="economy">Economy</option>
                            <option value="business">Business</option>
                            <option value="first">First</option>
                        </select>
                    </label>
                    <button type="submit">Calculate</button>
                </form>
            </div>
            {customerResult && (
                <div className="calc-results">
                    <h2 className="results-header">Results</h2>
                    <p><b>Total CO2e:</b> {customerResult.co2e} {customerResult.co2e_unit}</p>
                </div>
            )}
        </section>
    );
};

export default CalculatorFlights;
