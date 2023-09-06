import React from 'react';
import "./Footer.css";
import Drops from "../Drops/Drops";

const Footer: React.FC = () => {
    return (
        <section className="footer">
            <Drops/>
            <div className="lover-footer">
                <p>2023</p>
            </div>
        </section>
    );
};

export default Footer;
