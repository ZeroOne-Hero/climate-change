import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Information from "./components/Information/Information";
import WildFire from "./components/WildFire/WildFire";
import CalculatorMain from "./components/Calculators/CalculatorMain/CalculatorMain";
import "./App.css";
import Gallery from "./components/Gallery/Gallery";

const App: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <Router>
            <div className={isLoaded ? "app-with-home" : "app-without-home"}>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/calculator" element={<CalculatorMain />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
