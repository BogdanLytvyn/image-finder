import React from "react";
import PropTypes from 'prop-types';
import styles from "./ImageGalleryItem.module.css";

 function ImageGalleryItem({ image, onOpen }) {
  return (
    <li className={styles.ImageGalleryItem} onClick={onOpen}>
      <img src={image} alt="" className={styles.ImageGalleryItemImage} />
    </li>
  );
}
ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  onOpen: PropTypes.func.isRequired,
}

export default ImageGalleryItem;
