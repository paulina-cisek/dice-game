import React from 'react';
import styles from './Button.module.css';

const Button = ({ text, handleClick, optionalText }) => {
  return (
    <button className={styles.button}>
      {optionalText && <span className={styles.optional}>{optionalText}</span>}
      <span className={styles.clickable} onClick={handleClick}>
        {text}
      </span>
    </button>
  );
};

export default Button;
