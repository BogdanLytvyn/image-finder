import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

export default class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.heandlerCloseModal);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.heandlerCloseModal);
  }
  heandlerCloseModal = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    return (
      <>
        <div className={styles.Overlay} onClick={this.props.onClose}>
          <div className={styles.Modal} onClick={this.props.onClose}>
            {this.props.children}
          </div>
        </div>
      </>
    );
  }
}
