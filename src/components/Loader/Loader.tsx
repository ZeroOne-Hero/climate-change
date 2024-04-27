import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader: React.FC<{ onFadeOutComplete: () => void }> = ({ onFadeOutComplete }) => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const fadeOutTimer = setTimeout(() => {
            setFadeOut(true);
            const removeTimer = setTimeout(onFadeOutComplete, 500);
            return () => clearTimeout(removeTimer);
        }, 2000);

        return () => clearTimeout(fadeOutTimer);
    }, [onFadeOutComplete]);

    return (
        <div className={`loader-container ${fadeOut ? 'fade-out' : ''}`}>
            <div className="loader">
                <div className="circle one"></div>
                <div className="circle two"></div>
                <div className="circle three"></div>

            </div>

        </div>
    );
};

export default Loader;
