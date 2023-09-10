import React, {useState} from 'react';
import "./Gallery.css";
import gImg1 from "../../assets/galleryPhotos/1.webp";
import gImg2 from "../../assets/galleryPhotos/2.webp";
import gImg3 from "../../assets/galleryPhotos/3.webp";
import gImg4 from "../../assets/galleryPhotos/4.webp";
import gImg5 from "../../assets/galleryPhotos/5.webp";
import gImg6 from "../../assets/galleryPhotos/6.webp";
import gImg7 from "../../assets/galleryPhotos/7.webp";
import gImg8 from "../../assets/galleryPhotos/8.webp";
import gImg9 from "../../assets/galleryPhotos/9.webp";
import {GalleryImage} from "../../types/types";
import Drops from "../Drops/Drops";

const Gallery = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
    const isExtraSmallScreen = window.innerWidth <= 768;

    const galleryImages = [
        {
            src: gImg1,
            info: 'Plastic pollution',
            detail: 'Plastic pollution poses a significant threat to marine ecosystems, leading to the deaths of countless sea creatures.',
            alt: 'plastic-polution'
        },
        {
            src: gImg5,
            info: 'Deforestation',
            alt: 'deforestation',
            detail: 'Deforestation is not only destroying critical habitats for diverse species but also reduces the Earth\'s capacity to CO2.'
        },
        {
            src: gImg3,
            info: 'Desertification',
            alt: 'desertification',
            detail: 'Desertification erodes arable land, aggravating food insecurity, and forcing local populations into poverty or migration.'
        },
        {
            src: gImg2,
            info: 'Air pollution',
            alt: 'air-pollution',
            detail: 'Air pollution poses severe health risks, contributing to respiratory illnesses and other diseases in humans and animals.'
        },
        {
            src: gImg9,
            info: 'Wildfires',
            alt: 'wildfires',
            detail: 'Wildfires, exacerbated by climate change, destroy habitats, contribute to air pollution, and release stored CO2.'
        },
        {
            src: gImg6,
            info: 'Ocean Acidification',
            alt: 'ocean-acidification',
            detail: 'Ocean acidification threatens marine life, particularly organisms that rely on calcium carbonate for shell and skeleton formation.'
        },
        {
            src: gImg7,
            info: 'Species extinction',
            alt: 'species-extinction',
            detail: 'Species extinction disrupts ecosystems, reduces biodiversity, and creates imbalances affecting both wildlife and humans.'
        },
        {
            src: gImg8,
            info: 'Melting of glaciers',
            alt: 'melting-of-glaciers',
            detail: 'The melting of glaciers contributes to rising sea levels, altering global weather patterns.'
        },
        {
            src: gImg4,
            info: 'Coral Bleaching',
            alt: 'coral-bleaching',
            detail: 'Coral bleaching is an alarming indicator of ocean health, leading to a domino effect of marine biodiversity loss.'
        },

    ];
    const toggleModal = (image: GalleryImage | null) => {
        setSelectedImage(image);
        setModalOpen(!modalOpen);

        if (!modalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    return (
        <section className="gallery">
            <div className="photos">
                {galleryImages.map((image, index) => (
                    <div
                        onClick={isExtraSmallScreen ? undefined : () => toggleModal(image)}
                        className={`g-photo photo${index + 1}`}
                        key={index}
                    >
                        {index % 2 === 0 && <Drops />}
                        <div className="g-photos-wrapper">
                            <img src={image.src} alt={image.alt} />
                        </div>
                       <div className="gallery-drops"></div>
                        <div className="gallery-overlayer"></div>
                        <div className="gallery-info">
                            <h2>{image.info}</h2>
                        </div>
                    </div>
                ))}

                {modalOpen && selectedImage && (
                    <div className="modal" onClick={() => toggleModal(null)}>
                        <img src={selectedImage.src} alt={selectedImage.alt} className="modal-image" />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Gallery;
