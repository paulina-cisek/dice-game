import React, { useState } from 'react';
import styles from './StartGameModal.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  addPlayer,
  removePlayer,
  startGame,
} from '../../../store/actions/gameActions';

export const StartGameModal = (props) => {
  const [errors, setErrors] = useState('');
  const players = useSelector((state) => state.game.players);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (players.length === 8) setErrors('Maximum number of players reached.');
    else setErrors('');
  }, [players]);

  const input = players.length !== 8 && (
    <React.Fragment>
      <input
        name='playerName'
        placeholder='Player...'
        className={styles.playerInput}
        required
        maxLength='10'
      />
      <button
        className={[styles.outlined, styles.skewed].join(' ')}
        style={{ fontSize: '3rem' }}
        type='submit'
      >
        +
      </button>
    </React.Fragment>
  );

  const startGameHandler = () => {
    if (players.length > 1) {
      dispatch(startGame());
      props.closeModal();
    } else setErrors('Please add at least 2 players.');
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (players.length <= 8) {
      dispatch(addPlayer(e.target.playerName.value));
      e.target.reset();
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={[styles.outlined, styles.title].join(' ')}>New Game</h1>
      <div className={styles.formWrapper}>
        {players.map((item) => (
          <div key={item.id}>
            {item.name}
            <span
              onClick={() => dispatch(removePlayer(item.id))}
              className={[styles.deleteButton, styles.skewed].join(' ')}
            >
              X
            </span>
          </div>
        ))}
        <form onSubmit={submitHandler}>
          {input}
          {errors && <span className={styles.error}>{errors}</span>}
        </form>
      </div>
      <button
        onClick={startGameHandler}
        className={[styles.button, styles.outlined, styles.title].join(' ')}
      >
        Play!
      </button>
    </div>
  );
};
export default React.memo(StartGameModal);
