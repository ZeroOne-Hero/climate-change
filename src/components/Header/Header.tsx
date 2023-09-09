import React, {useEffect} from 'react';
import "./Header.css"
import {Link, useLocation} from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll';


const Header: React.FC = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    // const isCalculatorPage = location.pathname === '/calculator';
    const isBlogPage = location.pathname === '/blog';
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);


    return (
        <nav className="header">
            {/*<div className="drops-container">   <Drops/></div>*/}
            <div className="earth-logo">
                <Link className="link" to="/">
                    {/*<img src={earth} alt="Earth" />*/}
                </Link>
            </div>
            <ul className="nav-list">
                <li>
                    {isHomePage ? (
                        <ScrollLink className="link" to="home" smooth={true} duration={500}>
                            HOME
                        </ScrollLink>
                    ) : (
                        <Link className="link" to="/">
                            HOME
                        </Link>
                    )}
                </li>

                {/*{isCalculatorPage && (*/}
                {/*    <li>*/}
                {/*        <Link className="link" to="/blog">*/}
                {/*            BLOG*/}
                {/*        </Link>*/}
                {/*    </li>*/}
                {/*)}*/}

                {isBlogPage && (
                    <>
                        <li>
                            <Link className="link" to="/calculator">
                                CALCULATOR
                            </Link>
                        </li>
                    </>
                )}

                {isHomePage && (
                    <>
                        <li>
                            <ScrollLink className="link" to="about" smooth={true} duration={500}>
                                ABOUT
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink className="link" to="information" smooth={true} duration={500}>
                                INFO
                            </ScrollLink>
                        </li>
                        <li>
                            <Link className="link" to="/calculator">
                                CALCULATOR
                            </Link>
                        </li>
                        {/*<li>*/}
                        {/*    <Link className="link" to="/blog">*/}
                        {/*        BLOG*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Header;
