import React, { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';
import flightsLogo from "../../assets/icons/flightLogo.webp";

const CalculatorFlights = () => {
    const [from, setFrom] = useState<string>('');
    const [to, setTo] = useState<string>('');
    const [passengers, setPassengers] = useState<number>(1);
    const [flightClass, setFlightClass] = useState<string>('unknown');
    const [customerResult, setCustomerResult] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setCustomerResult(null);
        setError(null);
        setIsSubmitted(true);

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
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred while calculating. Please try again.');
        }
    };

    return (
        <section className="calculator">
            <div className="calc-form">
                <img className="calc-logo" src={flightsLogo} alt="plane" />
                <form onSubmit={handleSubmit}>
                    <label>
                        From:
                        <input type="text"
                               value={from}
                               placeholder="IATA airport code"
                               onChange={(e: ChangeEvent<HTMLInputElement>) => setFrom(e.target.value)}
                        />
                    </label>
                    <label>
                        To:
                        <input type="text"
                               value={to}
                               placeholder="IATA airport code"
                               onChange={(e: ChangeEvent<HTMLInputElement>) => setTo(e.target.value)}
                        />
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
            {isSubmitted && (
                <div className="calc-results">
                    {error ? (
                        <p className="error-message">{error}</p>
                    ) : customerResult ? (
                        <>
                            <h2 className="results-header">Results</h2>
                            <p><b>Total CO2e:</b> {customerResult.co2e.toFixed(2)} {customerResult.co2e_unit} ({(parseFloat(customerResult.co2e) * 2.20462).toFixed(2)} lb) *rounded to 2 decimal places</p>
                            <p>Did you know that the aviation industry is responsible for approximately 2.5% of global carbon dioxide emissions? Notably, France has taken legislative steps to curb this by banning domestic short-haul flights where train alternatives are available, aiming to reduce the country's carbon footprint.</p>
                            <p>*this calculation was done using climatiq API</p>
                        </>
                    ) : null}
                </div>
            )}
        </section>
    );
};

export default CalculatorFlights;
