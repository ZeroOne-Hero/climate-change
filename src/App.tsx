import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import CalculatorMain from "./components/Calculators/CalculatorMain/CalculatorMain";
import "./App.css";
import background from  "./assets/homepage.jpg"
import {Helmet} from "react-helmet";

const App: React.FC = () => {
    return (
        <Router>
            <div className="app">
                <Helmet>
                    <title>Stop Climate Change - Save the Earth</title>
                    <meta
                        name="description"
                        content="Learn about climate change and how to make a positive impact on the environment."
                    />
                    <meta
                        name="keywords"
                        content="climate change, environment, sustainability, eco-friendly"
                    />
                    <meta name="author" content="Your Name" />
                </Helmet>
                <div className="app-background">
                    <img src={background} alt="background"/>
                </div>
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
