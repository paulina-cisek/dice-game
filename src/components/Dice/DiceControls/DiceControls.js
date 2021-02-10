import React from 'react';
import styles from './DiceControls.module.css';
import Button from '../../Button/Button';

export const DiceControls = (props) => {
  return (
    <div className={styles.wrapper}>
      {props.isEnd ? (
        <Button text={'Again!'} handleClick={props.newGameHandler} />
      ) : (
        <React.Fragment>
          {props.rollCount > 0 ? (
            <Button
              handleClick={props.rollDice}
              text={'Roll!'}
              optionalText={`${props.rollCount}x`}
            />
          ) : null}
          <Button handleClick={props.selectNextPlayer} text={'Next!'} />
        </React.Fragment>
      )}
    </div>
  );
};
export default DiceControls;
