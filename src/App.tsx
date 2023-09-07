import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import CalculatorMain from "./components/Calculators/CalculatorMain/CalculatorMain";
import "./App.css";

const App: React.FC = () => {
    return (
        <Router>
            <div className="app">
                <div className="app-background"></div>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/calculator" element={<CalculatorMain/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
};
export default App;
