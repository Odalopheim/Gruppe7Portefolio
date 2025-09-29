import React, { useState } from 'react';
import "./OmOssGallery.css";

const galleryImages = [
    {
        id: 1,
        title: "Techpoint 2025",
        images: [
            {
                src: "/images/techpoint.jpg",
                alt: "Techpoint 2025",
                description: "På Techpoint hvor vi fikk høre mange spennende foredrag."
            },
            {
                src: "/images/techpoint2.jpg",
                alt: "Workshop",
                description: ""
            },
            {
                src: "/images/techpoint3.jpg",
                alt: "Presentasjon",
                description: "Vi kosere oss med god mat under pausen."
            },
            {
                src: "/images/techpoint4.jpg",
                alt: "Nettverking",
                description: "Paneldiskusjon med mange engasjerte spørsmål og svar."
            }
        ]
    },
    {
        id: 2,
        title: "Teambuilding",
        images: [
            {
                src: "/images/teambuilding1.jpg",
                alt: "Teamlunsj",
                description: "Her tar vi oss en pause fra hard jobbing med en spasertur."
            },
            {
                src: "/images/teambuilding2.jpg",
                alt: "Aktivitet",
                description: "Alle sammen smil!"
            },
            {
                src: "/images/teambuilding3.jpg",
                alt: "Pizzabilde",
                description: "Vi koser oss med pizza etter en lang dag."
            },
            {
                src: "/images/teambuilding4.jpg",
                alt: "Samarbeid",
                description: "Godt samarbeid i aksjon"
            }
        ]
    }
];

function OmOssGallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentImageIndexes, setCurrentImageIndexes] = useState({});

    return (
        <section className="gallery-section">
            <h2 className="gallery-title">Bildegalleri</h2>
            <p className="gallery-description">
                Et lite innblikk i vår hverdag og samarbeid som team.
            </p>
            
            <div className="gallery-grid">
                {galleryImages.map((gallery) => {
                    const currentIndex = currentImageIndexes[gallery.id] || 0;
                    const currentImage = gallery.images[currentIndex];
                    
                    return (
                        <div key={gallery.id} className="gallery-item">
                            <img 
                                src={currentImage.src} 
                                alt={currentImage.alt}
                                className="gallery-image"
                                onClick={() => setSelectedImage({ ...gallery, currentIndex })}
                            />
                            <div className="gallery-nav">
                                <button 
                                    className="gallery-nav-button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setCurrentImageIndexes({
                                            ...currentImageIndexes,
                                            [gallery.id]: (currentIndex - 1 + gallery.images.length) % gallery.images.length
                                        });
                                    }}
                                >
                                    ‹
                                </button>
                                <div className="gallery-dots">
                                    {gallery.images.map((_, index) => (
                                        <span 
                                            key={index}
                                            className={`gallery-dot ${index === currentIndex ? 'active' : ''}`}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setCurrentImageIndexes({
                                                    ...currentImageIndexes,
                                                    [gallery.id]: index
                                                });
                                            }}
                                        />
                                    ))}
                                </div>
                                <button 
                                    className="gallery-nav-button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setCurrentImageIndexes({
                                            ...currentImageIndexes,
                                            [gallery.id]: (currentIndex + 1) % gallery.images.length
                                        });
                                    }}
                                >
                                    ›
                                </button>
                            </div>
                            <div className="gallery-item-overlay">
                                <h3>{gallery.title}</h3>
                                <p>{currentImage.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {selectedImage && (
                <div 
                    className="gallery-modal-overlay"
                    onClick={() => setSelectedImage(null)}
                >
                    <div 
                        className="gallery-modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            className="gallery-modal-close"
                            onClick={() => setSelectedImage(null)}
                        >
                            ×
                        </button>
                        <div className="gallery-modal-content">
                            <button 
                                className="gallery-modal-nav prev"
                                onClick={() => {
                                    const newIndex = (selectedImage.currentIndex - 1 + selectedImage.images.length) % selectedImage.images.length;
                                    setSelectedImage({ ...selectedImage, currentIndex: newIndex });
                                    setCurrentImageIndexes({
                                        ...currentImageIndexes,
                                        [selectedImage.id]: newIndex
                                    });
                                }}
                            >
                                ‹
                            </button>
                            <img 
                                src={selectedImage.images[selectedImage.currentIndex].src} 
                                alt={selectedImage.images[selectedImage.currentIndex].alt}
                                className="gallery-modal-image"
                            />
                            <button 
                                className="gallery-modal-nav next"
                                onClick={() => {
                                    const newIndex = (selectedImage.currentIndex + 1) % selectedImage.images.length;
                                    setSelectedImage({ ...selectedImage, currentIndex: newIndex });
                                    setCurrentImageIndexes({
                                        ...currentImageIndexes,
                                        [selectedImage.id]: newIndex
                                    });
                                }}
                            >
                                ›
                            </button>
                        </div>
                        <div className="gallery-modal-info">
                            <h3>{selectedImage.title}</h3>
                            <p className="gallery-modal-description">
                                {selectedImage.images[selectedImage.currentIndex].description}
                            </p>
                            <div className="gallery-modal-dots">
                                {selectedImage.images.map((_, index) => (
                                    <span 
                                        key={index}
                                        className={`gallery-dot ${index === selectedImage.currentIndex ? 'active' : ''}`}
                                        onClick={() => {
                                            setSelectedImage({ ...selectedImage, currentIndex: index });
                                            setCurrentImageIndexes({
                                                ...currentImageIndexes,
                                                [selectedImage.id]: index
                                            });
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default OmOssGallery;
