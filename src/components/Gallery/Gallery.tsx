import React, { useState } from 'react';
import "./Gallery.css";
// import "./Modal.css";
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

const Gallery = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const galleryImages = [
        { src: gImg1, info: 'Plastic polution', detail: 'Plastic pollution poses a significant threat to marine ecosystems, leading to the deaths of countless sea creatures.'},
        { src: gImg5, info: 'Deforestation', detail: 'Deforestation is not only destroying critical habitats for diverse species but also reduces the Earth\'s capacity to absorb carbon dioxide.'},
        { src: gImg3, info: 'Desertification', detail: 'Desertification erodes arable land, aggravating food insecurity, water scarcity, and forcing local populations into poverty or migration.'},
        { src: gImg2, info: 'Air polution', detail: 'Air pollution poses severe health risks, contributing to respiratory illnesses and other diseases in humans and animals.'},
        { src: gImg9, info: 'Wildfires', detail: 'Wildfires, exacerbated by climate change, destroy habitats, contribute to air pollution, and release stored CO2, intensifying global warming.'},
        { src: gImg6, info: 'Ocean Acidification', detail: 'Ocean acidification threatens marine life, particularly organisms that rely on calcium carbonate for shell and skeleton formation.'},
        { src: gImg7, info: 'Species extinction', detail: 'Species extinction disrupts ecosystems, leads to loss of biodiversity, and can create imbalances that affect both wildlife and human populations.'},
        { src: gImg8, info: 'Melting of glaciers', detail: 'The melting of glaciers contributes to rising sea levels, jeopardizing coastal communities and altering global weather patterns.'},
        { src: gImg4, info: 'Coral Bleaching', detail: 'Coral bleaching is an alarming indicator of ocean health, leading to a domino effect of marine biodiversity loss.'},

    ];

    const toggleModal = (image) => {
        setSelectedImage(image);
        setModalOpen(!modalOpen);
    };

    return (
        <section className="gallery">
            <div className="gallery-header">
                <h1>
                    Look what we've done.
                </h1>
            </div>
            <div className="photos">
                {galleryImages.map((image, index) => (
                    <div className={`g-photo photo${index + 1}`} key={index}>
                        <img src={image.src} loading="lazy" onClick={() => toggleModal(image)} />
                        <img className="smog1" src={smog1} />
                        <img className="smog2" src={smog2} />
                        <div className="gallery-info">
                            <h2>{image.info}</h2>
                            <p>{image.detail}</p>
                        </div>
                    </div>
                ))}

                {modalOpen && (
                    <div className="modal" onClick={(e) => {{
                            toggleModal(null);
                        }
                    }}>
                         <img src={selectedImage.src} loading="lazy" className="modal-image" />
                    </div>
                )}

            </div>
        </section>
    );
};

export default Gallery;
