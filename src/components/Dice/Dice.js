import React from 'react';
import styles from './Dice.module.css';
import { useDispatch } from 'react-redux';
import { selectDice } from '../../store/actions/diceActions';

export const Dice = (props) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!props.disabledSelect) dispatch(selectDice(props.id));
  };

  const diceStyles =
    props.rolling && !props.selected
      ? [styles.face, styles.rolling].join(' ')
      : styles.face;
  const wrapperStyles = props.selected
    ? [styles.wrapper, styles.selected].join(' ')
    : styles.wrapper;

  const getDots = () => {
    switch (props.number) {
      default:
      case 1:
        return (
          <div className={diceStyles}>
            <div className={styles.dot} />
          </div>
        );
      case 2:
        return (
          <div className={diceStyles}>
            <div className={styles.dotWrapper}>
              <div className={styles.dot} />
              <div className={styles.dot} style={{ alignSelf: 'flex-end' }} />
            </div>
          </div>
        );
      case 3:
        return (
          <div className={diceStyles}>
            <div className={styles.dotWrapper}>
              <div className={styles.dot} style={{ alignSelf: 'flex-end' }} />
              <div className={styles.dot} style={{ alignSelf: 'center' }} />
              <div className={styles.dot} />
            </div>
          </div>
        );
      case 4:
        return (
          <div className={diceStyles}>
            <div className={styles.dotWrapper}>
              <div className={styles.dotColumn}>
                <div className={styles.dot} />
                <div className={styles.dot} />
              </div>
              <div className={styles.dotColumn}>
                <div className={styles.dot} />
                <div className={styles.dot} />
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className={diceStyles}>
            <div className={styles.dotWrapper}>
              <div className={styles.dotColumn}>
                <div className={styles.dot} />
                <div className={styles.dot} />
              </div>
              <div
                className={styles.dotColumn}
                style={{ justifyContent: 'center' }}
              >
                <div className={styles.dot} />
              </div>
              <div className={styles.dotColumn}>
                <div className={styles.dot} />
                <div className={styles.dot} />
              </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div className={diceStyles}>
            <div className={styles.dotWrapper}>
              <div className={styles.dotColumn}>
                <div className={styles.dot} />
                <div className={styles.dot} />
                <div className={styles.dot} />
              </div>
              <div className={styles.dotColumn}>
                <div className={styles.dot} />
                <div className={styles.dot} />
                <div className={styles.dot} />
              </div>
            </div>
          </div>
        );
    }
  };

  const diceType = getDots();
  return (
    <div className={wrapperStyles} onClick={handleClick}>
      <div className={styles.dice}>{diceType}</div>
    </div>
  );
};

export default React.memo(Dice);
