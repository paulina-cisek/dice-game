import { ROLL_DICE, SELECT_DICE, RESET_DICE } from './actionTypes';

export const rollDice = () => {
  return { type: ROLL_DICE };
};

export const resetDice = () => {
  return { type: RESET_DICE };
};

export const selectDice = (id) => {
  return { type: SELECT_DICE, payload: id };
};
