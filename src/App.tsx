import React, { useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Loader from "./components/Loader/Loader";
import CalculatorMain from './components/Calculators/CalculatorMain/CalculatorMain';
import './App.css';
import {Helmet, HelmetProvider} from 'react-helmet-async';
import {inject} from '@vercel/analytics';
inject();


const App: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const handleLoaderFadeOutComplete = () => {
        setLoading(false);
    };
    return (
        <Router>
            <HelmetProvider>
                <div className="app">
                    <div className="background"></div>
                    <Helmet>
                        <title>Stop Climate Change - Save the Earth</title>
                        <meta name="description"
                              content="Learn about climate change and how to make a positive impact on the environment."/>
                        <meta name="keywords" content="climate change, environment, sustainability, eco-friendly"/>
                        <meta name="author" content="Your Name"/>
                    </Helmet>
                    {loading && <Loader onFadeOutComplete={handleLoaderFadeOutComplete}/>}
                    <Header/>
                    {!loading && (
                        <section id="main" className="main">
                            <Routes>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/calculator" element={<CalculatorMain/>}/>
                            </Routes>
                            <Footer/>
                        </section>
                    )}
                </div>
            </HelmetProvider>
        </Router>
    );
};

export default App;
