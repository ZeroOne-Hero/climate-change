import React from 'react';
import {useLocation} from 'react-router-dom';
import "./Footer.css";
import Drops from "../Drops/Drops";
import nasa from "../../assets/icons/nasa.webp";
import who from "../../assets/icons/who.webp";
import linkedin from "../../assets/icons/linkedin.webp";

const Footer: React.FC = () => {
    const location = useLocation();
    let footerClass = "footer";
    let animationClass = "";

    if (location.pathname === "/calculator") {
        footerClass += " calc-page";
        animationClass = "footer-animation";
    } else if (location.pathname === "/") {
        footerClass += " home-page background-general";
    }

    return (
        <footer className="footer">
            <div className={`top-footer ${footerClass}`}>
                <div className={`animation ${animationClass}`}><Drops/></div>
                <h3>Learn more about climate change here:</h3>
                <div className="footer-logo">
                    <div className="footer-image">
                        <a href="https://climate.nasa.gov/" className="footer-link"target="_blank" rel="noopener noreferrer">
                            <img src={nasa} alt="NASA logo"/>
                        </a>
                        <a href="https://www.who.int/health-topics/climate-change#tab=tab_1" className="footer-link" target="_blank" rel="noopener noreferrer">
                            <img src={who} alt="WHO logo"/>
                        </a>
                    </div>
                </div>
                <div className="footer-gratitude">
                    <p>
                        <a  href="https://www.linkedin.com/in/mari-dvlpr/"className="footer-link" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="LinkedIn logo"/>
                        </a>
                        Hey there! If you spot something that doesn't look right, or if you have any questions, I'd love to hear from you. Feel free to contact me, just cklick on the logo!
                    </p>
                    <p>Special thanks to Annie Spratt, a UK-based photographer, for generously providing this stunning iceberg photograph for free use.</p>
                </div>
            </div>
            <div className="lower-footer">
                <p>2023</p>
            </div>
        </footer>
    );
};

export default Footer;
