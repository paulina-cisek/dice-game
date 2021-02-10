import React from 'react';
import styles from './ScoreBoardRow.module.css';

export const ScoreBoardRow = (props) => {
  const appliedClass = props.used
    ? [styles.scoreBoardRow, styles.used]
    : [styles.scoreBoardRow];

  appliedClass.push(
    props.selected ? styles.selected : props.updated ? styles.updated : 'black'
  );

  return (
    <li
      onClick={() => props.selectedHandler(props.id)}
      className={appliedClass.join(' ')}
    >
      <span>{props.displayName}: </span>
      <span>{props.value}</span>
    </li>
  );
};
export default React.memo(ScoreBoardRow);
