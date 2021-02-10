import React from 'react';
import styles from './InfoModal.module.css';

export const InfoModal = (props) => {
  return (
    <React.Fragment>
      <div className={styles.closeButton} onClick={props.closeModal}>
        X
      </div>
      <div className={styles.wrapper}>
        <div>
          <h1>Rules</h1>
          <p>
            The objective of this game is to get as many points as possible, by
            trying to get different combinations of the dice.
            <br />
          </p>
          <br />
          <p>
            {`In each turn, the player may roll the dice up to three times, but
         doesn't have to roll all of them. Before rolling for the second or
         third time, the player can 'save' any dice by clicking on it.`}{' '}
            On the first roll, the score is doubled for all combinations except
            for Ones, Twos, Threes, Fours, Fives and Sixes.
          </p>
          <p>
            <br />
            After each roll, if there are possible combinations, the matches are
            highlighted on the scoreboard. At the end of each turn, the player
            has to choose one of the options on the score board, even if the
            player gets no points. (E.g. because the combination of dice does
            not match any on the board.)
          </p>

          <br />
          <br />
          <h1>Combinations</h1>
          <br />
          <p>
            <span>Ones, Twos, Threes, Fours, Fives, Sixes</span> The sum of dice
            with the specified value. <br />
            E.g. for Sixes, if you have three dice with the value of 6 it will
            be 3 * 6 (18 points).
          </p>
          <br />
          <p>
            If the sum of the above six categories is 63 or more, the player
            will get a bonus of 35 points.
          </p>
          <br />
          <p>
            <span>Pair</span> Two dice of the same kind. <br />
            Points equal the sum of matching dice. <br />
            <br />
            <span>Two pairs</span> Two pairs of dice with the same number (or
            four of the same kind). <br />
            Points equal the sum of the matching dice. <br />
            <br />
            <span>Three of a kind</span> Three dice with the same number. <br />
            Points equal the sum of the matching dice. <br />
            <br />
            <span>Four of a kind</span> Four dice with the same number. <br />
            Points equal the sum of the matching dice.
            <br />
            <br />
            <span>Full house</span>
            Three of a kind and a pair, for example 2,2,4,4,4. <br />
            Scores 25 points. <br />
            <br />
            <span>Small straight</span>
            Get five sequential dice - 1,2,3,4,5. <br />
            Scores 30 points. <br />
            <br />
            <span>Large straight</span>
            Get five sequential dice - 2,3,4,5,6. <br />
            Scores 35 points. <br />
            <br />
            <span>Chance</span>
            Sum of all dice. <br />
            <br />
            <span>Poker</span>
            Five of a kind. Scores 50 points.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};
export default React.memo(InfoModal);
