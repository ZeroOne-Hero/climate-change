import React, { useState, useEffect } from 'react';
import "./Header.css";
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768);
        };

        window.addEventListener("resize", handleResize);
        window.scrollTo(0, 0);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [location.pathname]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    return (
        <nav className="header">
            <div className="earth-logo">
                <Link className="link" to="/" onClick={closeMenu}></Link>
            </div>
            {!isDesktop && (
                <button className="menu-toggle" onClick={toggleMenu}>
                    {isMenuOpen ? "close" : "menu"}
                </button>
            )}
            <ul className={`nav-list ${isDesktop ? 'desktop' : (isMenuOpen ? 'open' : 'closed')}`}>
                <li onClick={closeMenu}>
                    {isHomePage ? (
                        <ScrollLink className="link" to="home" smooth={true} duration={500} onClick={closeMenu}>
                            HOME
                        </ScrollLink>

                    ) : (
                        <Link className="link" to="/" onClick={closeMenu}>
                            HOME
                        </Link>

                    )}
                </li>
                {isHomePage && (
                    <>
                        <li onClick={closeMenu}>
                            <ScrollLink className="link" to="about" smooth={true} duration={500} onClick={closeMenu}>
                                ABOUT
                            </ScrollLink>
                        </li>
                        <li onClick={closeMenu}>
                            <ScrollLink className="link" to="information" smooth={true} duration={500} onClick={closeMenu}>
                                INFO
                            </ScrollLink>
                        </li>
                        <li onClick={closeMenu}>
                            <Link className="link" to="/calculator" onClick={closeMenu}>
                                CALCULATOR
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Header;
