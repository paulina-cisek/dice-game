import {
  ADD_PLAYER,
  REMOVE_PLAYER,
  START_GAME,
  UPDATE_SCORE_AND_CHANGE_PLAYER,
} from './actionTypes';
const generateId = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

export const addPlayer = (name) => {
  return {
    type: ADD_PLAYER,
    payload: { name: name, id: generateId(), scores: {}, total: 0, bonus: 0 },
  };
};

export const removePlayer = (id) => {
  return {
    type: REMOVE_PLAYER,
    payload: id,
  };
};

export const startGame = () => {
  return { type: START_GAME };
};

export const updateScoreAndChangePlayer = (selectedValue) => {
  return {
    type: UPDATE_SCORE_AND_CHANGE_PLAYER,
    payload: selectedValue,
  };
};
