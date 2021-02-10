import React, { useState, useCallback } from 'react';
import Layout from '../Layout/Layout';
import { Header } from '../Header/Header';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import styles from './App.module.css';
import DiceWrapper from '../Dice/DiceWrapper/DiceWrapper';
import { Modal } from '../Modal/Modal';
import StartGameModal from '../Modal/StartGameModal/StartGameModal';
import { useSelector } from 'react-redux';
import { getLastUserValuesCount } from '../../store/selectors';
import InfoModal from '../Modal/InfoModal/InfoModal';

const App = () => {
  const currentPlayer = useSelector((state) => state.game.currentPlayer);
  const isEnd = useSelector(getLastUserValuesCount);
  const [showModal, setShowModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [roundStarted, setRoundStarted] = useState(false);
  const [selectedScore, setSelectedScore] = useState({});
  const [error, setError] = useState('');
  const [rollCount, setRollCount] = useState(3);

  const newGameHandler = useCallback(() => {
    setShowModal(true);
  }, []);

  const closeModalHandler = useCallback(() => {
    setShowModal(false);
  }, []);

  const closeInfoModalHandler = useCallback(() => {
    setShowInfoModal(false);
  }, []);

  React.useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <Layout>
      {currentPlayer && (
        <React.Fragment>
          <Header showWinner={isEnd} />
          <main className={styles.mainContent}>
            <DiceWrapper
              startRound={setRoundStarted}
              selectedScore={selectedScore}
              setSelectedScore={setSelectedScore}
              setError={setError}
              isEnd={isEnd}
              rollCount={rollCount}
              setRollCount={setRollCount}
              newGameHandler={newGameHandler}
            />
            <ScoreBoard
              roundStarted={roundStarted}
              selectedScore={selectedScore}
              setSelectedScore={setSelectedScore}
              error={error}
              isFirstRoll={rollCount === 2}
            />
          </main>
        </React.Fragment>
      )}
      <Modal show={showModal} closeModal={closeModalHandler}>
        <StartGameModal closeModal={closeModalHandler} />
      </Modal>
      <Modal
        allowCloseOnOverlayClick
        show={showInfoModal}
        closeModal={closeInfoModalHandler}
      >
        <InfoModal closeModal={closeInfoModalHandler} />
      </Modal>
      <div
        className={styles.info}
        onClick={() => setShowInfoModal(!showInfoModal)}
      >
        <div>
          <div>
            <span>?</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default App;
