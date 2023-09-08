import React from 'react';
import "./Home.css";
import About from "../About/About";
import dLogo1 from "../../assets/bLogo1.png";
import dLogo2 from "../../assets/bLogo2.png";
import dLogo3 from "../../assets/bLogo3.png";
import Drops from "../Drops/Drops";
import SlideThrough from "../SlideThrough/SlideThrough";
import Information from "../Information/Information";
import Solution from "../Solution/Solution";

const Home: React.FC = () => {
    return (
        <div>
            <section className="home" id="home">
                <div className="home-container">

                <div className="home-header slideInLeft">
                    <h1>Don't Let Our Future Melt Away:</h1>
                    <h2>Stop Climate Change!</h2>
                    <Drops/>
                </div>

                <div className="home-bullets">
                    <div className="bullet slideInDown">
                        <img className="bLogo" src={dLogo1} alt="Logo 1" />
                        <h2>Every year, around 40 billion tonnes of carbon dioxide are emitted into the atmosphere.</h2>
                        <Drops/>
                    </div>
                    <div className="bullet bullet2 slideInRight">
                        <img className="bLogo" src={dLogo2} alt="Logo 2" />
                        <h2>More than 171 trillion plastic pieces are floating in the world's ocean.</h2>

                    </div>
                    <div className="bullet bullet3 slideInUp">
                        <img className="bLogo" src={dLogo3} alt="Logo 3 "  />
                        <h2>Approximately 1 in 10 people worldwide die from air pollution-related deaths.</h2>
                        <Drops/>
                    </div>
                </div>
                </div>
            </section>
            <SlideThrough h1Text={"July 2023 was Earth’s hottest month on record."}/>
            <About/>
            <Information/>
            <Solution/>
        </div>
    );
};

export default Home;
