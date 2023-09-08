import React from 'react';
import {useLocation} from 'react-router-dom';
import "./Footer.css";
import Drops from "../Drops/Drops";

const Footer: React.FC = () => {
    const location = useLocation();
    let footerClass = "footer";
    let animationClass = "";

    if (location.pathname === "/calculator") {
        footerClass += " calc-page";
        animationClass = "footer-animation";
    } else if (location.pathname === "/") {
        footerClass += " home-page";
    }

    return (
        <section className="footer">
            <div className={footerClass}>
                <div className={`animation ${animationClass}`}><Drops/></div>
            </div>

            <div className="lower-footer">
                <p>2023</p>
            </div>
        </section>
    );
};

export default Footer;
