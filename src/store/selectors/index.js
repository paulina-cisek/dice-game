import { createSelector } from 'reselect';
const dice = (state) => state.dice;
const players = (state) => state.game.players;

export const getDiceValues = createSelector([dice], (dice) => {
  return dice.map((item) => item.value);
});

export const getLastUserValuesCount = createSelector([players], (players) => {
  if (players.length > 0 && players[players.length - 1]) {
    if (Object.keys(players[players.length - 1].scores).length === 15)
      return true;
  }
  return false;
});

export const getWinner = createSelector([players], (totals) => {
  if (!totals) return;
  let values = totals.map((item) => item.total + item.bonus);
  let max = Math.max(...values);
  return totals
    .filter((item) => item.total + item.bonus === max)
    .map((item) => item.id);
});
