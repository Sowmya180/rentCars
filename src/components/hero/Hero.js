import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  const carPhotos = [
    "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    "https://images.unsplash.com/photo-1592929881470-65c6db486987?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1568559598349-dbf322d50a48?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1587376848075-0e59aed09b98?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1604705528495-8c3d81031dae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ];

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const updatePhotoIndex = () => {
      setCurrentPhotoIndex((prevIndex) =>
        prevIndex === carPhotos.length - 1 ? 0 : prevIndex + 1
      );
    };

    const intervalId = setInterval(updatePhotoIndex, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.Hero}>
      {/* Display the current car photo with the same styles */}
      <img
        className={styles.HeroImage}
        src={carPhotos[currentPhotoIndex]}
        alt={`Car ${currentPhotoIndex + 1}`}
        srcSet={`${carPhotos[currentPhotoIndex]} 1x, ${carPhotos[currentPhotoIndex]} 2x`}
      />
    </div>
  );
};

export default Hero;
