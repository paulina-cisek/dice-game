import React, { useState } from 'react';
import styles from './DiceWrapper.module.css';
import Dice from '../Dice';
import DiceControls from '../DiceControls/DiceControls';
import { useSelector, useDispatch } from 'react-redux';
import { rollDice, resetDice } from '../../../store/actions/diceActions';
import { updateScoreAndChangePlayer } from '../../../store/actions/gameActions';

export const DiceWrapper = (props) => {
  const [rolling, setRolling] = useState(false);

  const dice = useSelector((state) => state.dice);
  const dispatch = useDispatch();

  const rollDiceHandler = () => {
    if (props.rollCount !== 0) {
      let count = props.rollCount - 1;
      props.setRollCount(count);
      setRolling(true);
      props.startRound(true);

      setTimeout(() => {
        dispatch(rollDice());
        setRolling(false);
      }, 500);
    }
  };

  const nextPlayerHandler = () => {
    if (
      props.isEnd ||
      (props.selectedScore && props.selectedScore.value !== undefined)
    ) {
      dispatch(updateScoreAndChangePlayer(props.selectedScore));
      props.setSelectedScore({});
      props.setRollCount(3);
      dispatch(resetDice());
      props.startRound(false);
      props.setError('');
    } else {
      props.setError('Please select one of the above.');
    }
  };

  const diceValues = dice.map((item) => (
    <div key={item.id} className={styles.diceGridDiv}>
      <Dice
        number={item.value}
        selected={dice.filter((el) => el.id === item.id)[0].selected}
        id={item.id}
        disabledSelect={props.rollCount === 3}
        rolling={rolling}
      />
    </div>
  ));

  return (
    <div className={styles.diceWrapper}>
      <div className={styles.grid}>{diceValues}</div>
      <DiceControls
        rollDice={rollDiceHandler}
        rollCount={props.rollCount}
        selectNextPlayer={nextPlayerHandler}
        newGameHandler={props.newGameHandler}
        isEnd={props.isEnd}
      />
    </div>
  );
};
export default DiceWrapper;
