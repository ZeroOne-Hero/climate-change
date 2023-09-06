import React, {useState} from 'react';
import "./Gallery.css";
import gImg1 from "../../assets/galleryPhotos/1.jpg";
import gImg2 from "../../assets/galleryPhotos/2.jpg";
import gImg3 from "../../assets/galleryPhotos/3.jpg";
import gImg4 from "../../assets/galleryPhotos/4.jpg";
import gImg5 from "../../assets/galleryPhotos/5.jpg";
import gImg6 from "../../assets/galleryPhotos/6.jpg";
import gImg7 from "../../assets/galleryPhotos/7.jpg";
import gImg8 from "../../assets/galleryPhotos/8.jpg";
import gImg9 from "../../assets/galleryPhotos/9.jpg";
import smog1 from "../../assets/gallery-smog1.jpg";
import smog2 from "../../assets/gallery-smog2.jpg";
import {GalleryImage} from "../../types/types";
import drops from "../../assets/bulletsBackground.jpg"
import Drops from "../Drops/Drops";

const Gallery = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    const galleryImages = [
        {
            src: gImg1,
            info: 'Plastic pollution',
            detail: 'Plastic pollution poses a significant threat to marine ecosystems, leading to the deaths of countless sea creatures.'
        },
        {
            src: gImg5,
            info: 'Deforestation',
            detail: 'Deforestation is not only destroying critical habitats for diverse species but also reduces the Earth\'s capacity to CO2.'
        },
        {
            src: gImg3,
            info: 'Desertification',
            detail: 'Desertification erodes arable land, aggravating food insecurity, and forcing local populations into poverty or migration.'
        },
        {
            src: gImg2,
            info: 'Air pollution',
            detail: 'Air pollution poses severe health risks, contributing to respiratory illnesses and other diseases in humans and animals.'
        },
        {
            src: gImg9,
            info: 'Wildfires',
            detail: 'Wildfires, exacerbated by climate change, destroy habitats, contribute to air pollution, and release stored CO2.'
        },
        {
            src: gImg6,
            info: 'Ocean Acidification',
            detail: 'Ocean acidification threatens marine life, particularly organisms that rely on calcium carbonate for shell and skeleton formation.'
        },
        {
            src: gImg7,
            info: 'Species extinction',
            detail: 'Species extinction disrupts ecosystems, reduces biodiversity, and creates imbalances affecting both wildlife and humans.'
        },
        {
            src: gImg8,
            info: 'Melting of glaciers',
            detail: 'The melting of glaciers contributes to rising sea levels, altering global weather patterns.'
        },
        {
            src: gImg4,
            info: 'Coral Bleaching',
            detail: 'Coral bleaching is an alarming indicator of ocean health, leading to a domino effect of marine biodiversity loss.'
        },

    ];

    const toggleModal = (image: GalleryImage | null) => {
        setSelectedImage(image);
        setModalOpen(!modalOpen);
    };
    return (
        <section className="gallery">
            {/*<div className="info-header">*/}
            {/*    <h1>Look what we've done...</h1>*/}
            {/*</div>*/}
            <div className="photos">
                {galleryImages.map((image, index) => (
                    <div onClick={() => toggleModal(image)} className={`g-photo photo${index + 1}`} key={index}>
                        <div className="gallery-animation"><Drops/></div>
                        <div className="g-photos-wrapper">
                        <img src={image.src}/>
                        </div>
                        {/*<img className="smog1" src={smog1}/>*/}
                        <img className="gallery-drops" src={drops} alt="drops"/>
                        <div className="gallery-overlayer">
                        </div>
                        {/*<img className="smog2" src={smog2}/>*/}
                        <div className="gallery-info">
                            <h2>{image.info}</h2>
                            {/*<div className="gallery-details">*/}
                            {/*    <p>{image.detail}</p>*/}
                            {/*   */}
                            {/*</div>*/}

                        </div>
                    </div>
                ))}

                {modalOpen && selectedImage && (
                    <div className="modal" onClick={(e) => toggleModal(null)}>
                        <img src={selectedImage.src} loading="lazy" className="modal-image"/>
                    </div>
                )}
            </div>
        </section>
    );

};
export default Gallery;
