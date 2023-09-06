import React from 'react';
// , { useState, useEffect }
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import CalculatorMain from "./components/Calculators/CalculatorMain/CalculatorMain";
import "./App.css";
// import Blog from "./components/Blog/Blog";


const App: React.FC = () => {
    // const [isLoaded, setIsLoaded] = useState(false);
    //
    // useEffect(() => {
    //     setIsLoaded(true);
    // }, []);

    return (
        <Router>
            {/*<div className={isLoaded ? "app-with-home" : "app-without-home"}>*/}
            <div className="app">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/*<Route path="/blog" element={<Blog />} />*/}
                    <Route path="/calculator" element={<CalculatorMain />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
