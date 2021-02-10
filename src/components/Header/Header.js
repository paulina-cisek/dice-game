import React from 'react';
import styles from './Header.module.css';
import { HeaderItem } from './HeaderItem/HeaderItem';
import { useSelector } from 'react-redux';
import { getWinner } from '../../store/selectors';

export const Header = ({ showWinner }) => {
  const players = useSelector((state) => state.game.players);
  const winner = useSelector(getWinner);
  return (
    <ul className={styles.header}>
      {players.map((player) => (
        <HeaderItem
          key={player.id}
          winner={showWinner && winner.includes(player.id)}
          name={player.name}
          total={player.total + player.bonus}
        />
      ))}
    </ul>
  );
};
