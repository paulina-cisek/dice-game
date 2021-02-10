import {
  START_GAME,
  ADD_PLAYER,
  REMOVE_PLAYER,
  UPDATE_SCORE_AND_CHANGE_PLAYER,
} from '../actions/actionTypes';
import { getBonus } from '../../utils/scores-utils';

const initialState = {
  players: [],
  currentPlayer: null,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME:
      let newPlayers = [...state.players].map((player) => ({
        id: player.id,
        scores: {},
        total: 0,
        bonus: 0,
        name: player.name,
      }));

      return { ...state, players: newPlayers, currentPlayer: newPlayers[0] };
    case ADD_PLAYER:
      return {
        ...state,
        players: [...state.players, action.payload],
      };
    case REMOVE_PLAYER:
      return {
        ...state,
        players: [
          ...state.players.filter((player) => player.id !== action.payload),
        ],
      };
    case UPDATE_SCORE_AND_CHANGE_PLAYER:
      let currentPlayer = state.players.indexOf(state.currentPlayer);
      let nextPlayerIndex = currentPlayer + 1;
      if (state.players.length <= nextPlayerIndex) nextPlayerIndex = 0;
      currentPlayer = state.players[nextPlayerIndex];

      return {
        ...state,
        players: [
          ...state.players.map((player) =>
            player.id === state.currentPlayer.id
              ? {
                  ...player,
                  ...updatePlayerScores(player, action.payload),
                }
              : player
          ),
        ],
        currentPlayer: currentPlayer,
      };
    default:
      return state;
  }
};
export default gameReducer;

const updatePlayerScores = (player, payload) => {
  let newScores = {
    ...player.scores,
    [payload.name]: payload.value,
  };

  let bonus = getBonus(newScores);
  let total = player.total + payload.value;
  let newState = { scores: newScores, total: total, bonus: bonus };
  return newState;
};
