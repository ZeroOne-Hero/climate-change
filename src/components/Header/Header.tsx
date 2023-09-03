import React from 'react';
import "./Header.css"
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import earth from "../../assets/earthLogo.jpg"

const Header: React.FC  = () => {
    const location = useLocation();
    const isCalculatorPage = location.pathname === '/calculator';

    return (
        <nav className="header">
            <div className="earth-logo">
                {isCalculatorPage ? (
                    <Link className="link" to="/">
                        {/*<img src={earth} alt="Earth" />*/}
                    </Link>
                ) : (
                    <ScrollLink to="home" smooth={true} duration={500}>
                        {/*<img src={earth} alt="Earth" />*/}
                    </ScrollLink>
                )}
            </div>
            <ul className="nav-list">
                <li>
                    {isCalculatorPage ? (
                        <Link className="link"  to="/">
                            HOME
                        </Link>
                    ) : (
                        <ScrollLink to="home" smooth={true} duration={500}>
                            HOME
                        </ScrollLink>
                    )}
                </li>
                {!isCalculatorPage && (
                    <li>
                        <ScrollLink to="about" smooth={true} duration={500}>
                            ABOUT
                        </ScrollLink>
                    </li>
                )}
                <li>
                    <Link className="link" to="/calculator">
                        CALCULATOR
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
