import React, {ChangeEvent, FormEvent, useState} from 'react';
import axios from 'axios';
import flightsLogo from "../../assets/icons/flightLogo.webp";

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
                <img className="calc-logo" src={flightsLogo} alt="plane"/>
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
                        <input type="number"
                               value={passengers || ""}
                               placeholder=""
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
                    <p><b>Total CO2e:</b> {customerResult.co2e.toFixed(2)} {customerResult.co2e_unit} ({(parseFloat(customerResult.co2e) * 2.20462).toFixed(2)} lb) *rounded to 2 decimal places</p>
                    <p>Did you know that the aviation industry is responsible for approximately 2.5% of global carbon dioxide emissions?
                        Notably, France has taken legislative steps to curb this by banning domestic short-haul flights
                        where train alternatives are available, aiming to reduce the country's carbon footprint.</p>
                    <p>*this calculation was done using climatiq API</p>
                </div>
            )}
        </section>
    );
};

export default CalculatorFlights;
