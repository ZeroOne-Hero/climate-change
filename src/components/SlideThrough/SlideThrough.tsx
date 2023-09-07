import React, { useEffect, useRef } from 'react';
import './SlideThrough.css';
import slider1 from '../../assets/slider-cloud1.jpg';
import slider2 from '../../assets/slider-cloud2.jpg';
import background from "../../assets/backgroundMain.jpg"
interface SlideThroughProps {
    h1Text: string;
}

const SlideThrough: React.FC<SlideThroughProps> = ({ h1Text }) => {
    const slideRef = useRef<HTMLElement | null>(null);
    const h1Ref = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (slideRef.current && h1Ref.current) {
                        const slider1Img = slideRef.current.querySelector('.slider1 img');
                        const slider2Img = slideRef.current.querySelector('.slider2 img');
                        if (slider1Img && slider2Img) {
                            if (entry.isIntersecting) {
                                slider1Img.classList.add('animate-slider1');
                                slider2Img.classList.add('animate-slider2');
                                h1Ref.current.classList.add('animate-fade-in');
                                observer.unobserve(slideRef.current);
                            }
                        }
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        if (slideRef.current) {
            observer.observe(slideRef.current);
        }

        return () => {
            if (slideRef.current) {
                observer.unobserve(slideRef.current);
            }
        };
    }, []);

    return (
        <section className="slide" ref={slideRef}>
            <h1 className="slide-through-text" ref={h1Ref}>{h1Text}</h1>
            <div className="slider1">
                <img src={slider1} alt="Slider 1" />
            </div>
            <div className="slider2">
                <img src={slider2} alt="Slider 2" />
            </div>
        </section>
    );
};

export default SlideThrough;
