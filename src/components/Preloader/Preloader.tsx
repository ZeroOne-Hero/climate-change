import { useEffect } from 'react';
import homepage from "../../assets/homepage.webp";
import calcBG from "../../assets/backgroundMain.webp";
const PreloadImages = () => {
    useEffect(() => {
        const img1 = new Image();
        const img2 = new Image();

        img1.onload = () => {
            console.log("Image 1 loaded");
        };

        img1.onerror = () => {
            console.log("Error loading image 1");
        };

        img2.onload = () => {
            console.log("Image 2 loaded");
        };

        img2.onerror = () => {
            console.log("Error loading image 2");
        };

        img1.src = homepage;
        img1.src = calcBG;
    }, []);

    return null;
};

export default PreloadImages
