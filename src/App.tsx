import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
// import PreloadImages from './components/Preloader/Preloader';
import CalculatorMain from './components/Calculators/CalculatorMain/CalculatorMain';
import './App.css';
import background from './assets/homepage.webp';
import calculatorBackground from './assets/backgroundMain.webp';
import {Helmet, HelmetProvider} from 'react-helmet-async';
import {inject} from '@vercel/analytics';
// import Loader from "./components/Loader/Loader";

inject();

const BackgroundSwitcher = () => {
    const location = useLocation();
    const isCalculatorPage = location.pathname === '/calculator';

    return (
        <div className={`app-background ${isCalculatorPage ? 'calc-bg' : 'home-bg'}`}>
            <img src={isCalculatorPage ? calculatorBackground : background} alt="background"/>
        </div>
    );
};

const App: React.FC = () => {
    // const [loading, setLoading] = useState(true);
    //
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setLoading(false);
    //     }, 1000);

    //     return () => {
    //         clearTimeout(timer);
    //     };
    // }, []);

    return (
        <Router>
            <HelmetProvider>
                <div className="app">
                    <Helmet>
                        <title>Stop Climate Change - Save the Earth</title>
                        <meta name="description"
                              content="Learn about climate change and how to make a positive impact on the environment."/>
                        <meta name="keywords" content="climate change, environment, sustainability, eco-friendly"/>
                        <meta name="author" content="Your Name"/>
                    </Helmet>
                    {/*<PreloadImages/>*/}
                    {/*{loading ? (*/}
                    {/*    <Loader />*/}
                    {/*) : (*/}
                    {/*    <>*/}
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/calculator" element={<CalculatorMain/>}/>
                    </Routes>
                    <Footer/>
                    <BackgroundSwitcher/>
                    {/*    </>*/}
                    {/*)}*/}
                </div>
            </HelmetProvider>
        </Router>
    );
};

export default App;
