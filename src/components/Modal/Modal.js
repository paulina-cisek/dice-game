import React from 'react';
import styles from './Modal.module.css';

export const Modal = (props) => {
  return (
    <React.Fragment>
      <div
        className={styles.overlay}
        onClick={() => {
          if (props.allowCloseOnOverlayClick) props.closeModal();
        }}
        style={{
          display: props.show ? 'block' : 'none',
        }}
      ></div>
      <div
        className={styles.modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-120vh)',
          WebkitTransform: props.show ? 'translateY(0)' : 'translateY(-120vh)',
        }}
      >
        {props.children}
      </div>
    </React.Fragment>
  );
};
