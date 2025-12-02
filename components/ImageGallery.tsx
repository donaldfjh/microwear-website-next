"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./ImageGallery.css";

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images, alt }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Auto-play: cycle through images every 3 seconds
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  if (!images || images.length === 0) {
    return (
      <div className="image-gallery-empty">
        <p>No images available</p>
      </div>
    );
  }

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  // Generate descriptive alt text for each image
  const getImageAlt = (index: number) => {
    const imageDescriptions = [
      "Product Overview",
      "Front View",
      "Side View",
      "Back View",
      "Display Screen",
      "Features Detail",
    ];
    const description = imageDescriptions[index] || `View ${index + 1}`;
    return `${alt} - ${description} | Premium Smartwatch`;
  };

  return (
    <div className="image-gallery">
      <div className="image-gallery-main">
        <Image
          src={images[selectedImageIndex]}
          alt={getImageAlt(selectedImageIndex)}
          title={`${alt} - High Quality Image`}
          className="main-image"
          width={600}
          height={600}
          priority
        />
      </div>

      {images.length > 1 && (
        <div className="image-gallery-thumbnails">
          {images.map((image, index) => (
            <button
              key={index}
              className={`thumbnail ${
                index === selectedImageIndex ? "active" : ""
              }`}
              onClick={() => handleThumbnailClick(index)}
              aria-label={`View image ${index + 1}`}
            >
              <Image
                src={image}
                alt={getImageAlt(index)}
                title={`View ${alt} ${index + 1}`}
                width={100}
                height={100}
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
