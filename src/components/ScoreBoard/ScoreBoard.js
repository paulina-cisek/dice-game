import React, { useState, useCallback } from 'react';
import styles from './ScoreBoard.module.css';
import ScoreBoardRow from './ScoreRow/ScoreBoardRow';
import { useSelector } from 'react-redux';
import {
  getScoreBoardValues,
  updateValues,
  getTotalScore,
} from '../../utils/scores-utils';
import { getDiceValues } from '../../store/selectors';

export const ScoreBoard = ({
  roundStarted,
  selectedScore,
  setSelectedScore,
  error,
  isFirstRoll,
}) => {
  const currentPlayer = useSelector((state) => state.game.currentPlayer);
  const [scores, setScores] = useState(null);
  const dice = useSelector(getDiceValues);

  React.useEffect(() => {
    setScores(getScoreBoardValues(currentPlayer.scores));
  }, [currentPlayer]);

  React.useEffect(() => {
    if (roundStarted)
      setScores((prevState) => {
        return { ...prevState, ...updateValues(prevState, dice, isFirstRoll) };
      });
  }, [dice]);

  const scoreSelectHandler = useCallback(
    (id) => {
      setSelectedScore((prev) => {
        if (prev && prev.name === id) return {};
        else if (!scores[id].used) {
          return scores[id];
        }
      });
    },
    [setSelectedScore, scores]
  );

  const total = getTotalScore(selectedScore, currentPlayer.total);
  const rows =
    scores &&
    Object.keys(scores)
      .filter((item) => item !== 'bonus')
      .map((item) => {
        let row = (
          <ScoreBoardRow
            selectedHandler={scoreSelectHandler}
            id={scores[item].name}
            key={`${scores[item].name}`}
            used={scores[item].used}
            updated={!scores[item].used && scores[item].value !== 0}
            selected={selectedScore && selectedScore.name === scores[item].name}
            displayName={scores[item].displayName}
            value={scores[item].value}
          />
        );
        return row;
      });

  return (
    <div className={styles.wrapper}>
      <div className={styles.ScoreBoard}>
        <div className={styles.content}>
          <h1 className={styles.title}>{currentPlayer.name}</h1>
          <ul className={styles.scoresWrapper}>{rows}</ul>
          {error && <span className={styles.error}>{error}</span>}
          <h1 className={styles.total}>
            Total: {total}{' '}
            {scores && scores['bonus'] !== 0 ? `(+${scores['bonus']})` : null}
          </h1>
        </div>
      </div>
    </div>
  );
};
export default React.memo(ScoreBoard);
