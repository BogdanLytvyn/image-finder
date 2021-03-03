import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from 'prop-types';
import styles from "./ImageGallery.module.css";

 function ImageGallery({ images, onOpen }) {
  return (
    <ul className={styles.ImageGallery}>
      {images.map((image, id) => (
        <ImageGalleryItem
          key={id}
          image={image.webformatURL}
          onOpen={() => onOpen(image.largeImageURL)}
        ></ImageGalleryItem>
      ))}
    </ul>
  );
}
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(Object).isRequired,
  onOpen: PropTypes.func.isRequired,
}

export default ImageGallery;