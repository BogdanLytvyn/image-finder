import React from "react";
import PropTypes from 'prop-types';
import styles from "./Button.module.css";

function Button({ onClick }) {
  return (
    <div className={styles.ButtonWrap} >
      <button type="button" className={styles.Button} onClick={onClick}>
        Load More
      </button>
    </div>
  );
}
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Button;



