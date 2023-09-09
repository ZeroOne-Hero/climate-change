import React from 'react';
import drop from "../../assets/waterDrop.webp";
import "./Drops.css";

const Drops = () => {
    return (
        <div className="drops-main">
            <div className="drop-container">
                <div className="drop">
                    <img src={drop}  alt="drop"/>
                </div>
                <div className="drop">
                    <img src={drop}  alt="drop"/>
                </div>
            </div>
            <div className="drop-container">
                <div className="drop2">
                    <img src={drop}  alt="drop"/>
                </div>
                <div className="drop2">
                    <img src={drop}  alt="drop"/>
                </div>
            </div>
            <div className="drop-container">
                <div className="drop3">
                    <img src={drop}  alt="drop"/>
                </div>
                <div className="drop3">
                    <img src={drop}  alt="drop"/>
                </div>
            </div>
        </div>
    );
};

export default Drops;
