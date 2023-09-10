import React, {lazy, Suspense} from 'react';
import "./Home.css";
import About from "../About/About";
import dLogo1 from "../../assets/icons/bLogo1.webp";
import dLogo2 from "../../assets/icons/bLogo2.webp";
import dLogo3 from "../../assets/icons/bLogo3.webp";
import Drops from "../Drops/Drops";
import SlideThrough from "../SlideThrough/SlideThrough";
import Solution from "../Solution/Solution";
const Information = lazy(() => import('../../components/Information/Information'));

const Home: React.FC = () => {
    return (
        <div>
            <section className="home" id="home">
                <div className="home-container">
                <div className="home-header slideInLeft background-general">
                    <h1>Don't Let Our Future Melt Away:</h1>
                    <h2>Stop Climate Change!</h2>
                    <Drops/>
                </div>

                <div className="home-bullets">
                    <div className="bullet slideInDown background-general">
                        <img className="bLogo" src={dLogo1} alt="Logo 1" />
                        <h2>Every year, around 40 billion tonnes of carbon dioxide are emitted into the atmosphere.</h2>
                        <Drops/>
                    </div>
                    <div className="bullet bullet2 slideInRight background-general">
                        <img className="bLogo" src={dLogo2} alt="Logo 2" />
                        <h2>More than 171 trillion plastic pieces are floating in the world's ocean.</h2>

                    </div>
                    <div className="bullet bullet3 slideInUp background-general">
                        <img className="bLogo" src={dLogo3} alt="Logo 3 "  />
                        <h2>Approximately 1 in 10 people worldwide die from air pollution-related deaths.</h2>
                        <Drops/>
                    </div>
                </div>
                </div>
            </section>
            <SlideThrough h1Text={"July 2023 was Earth’s hottest month on record."}/>
            <About/>
            <Suspense fallback={<div>...Loading</div>}>
                <Information/>
            </Suspense>
                <Solution/>
        </div>
    );
};

export default Home;
