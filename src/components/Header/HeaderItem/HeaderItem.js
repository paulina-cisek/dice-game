import React from 'react';
import styles from './HeaderItem.module.css';

export const HeaderItem = ({ winner, name, total }) => {
  let attachedClasses = !winner
    ? [styles.winner, styles.hide]
    : [styles.winner, styles.show];

  return (
    <React.Fragment>
      <li className={styles.headerItem}>
        <span className={attachedClasses.join(' ')}></span>
        <span>
          {name}: {total}
        </span>
      </li>
      <li className={styles.headerItem}>•</li>
    </React.Fragment>
  );
};
