import { ROLL_DICE, SELECT_DICE, RESET_DICE } from '../actions/actionTypes';

const roll = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const initialState = [
  { id: 1, value: roll(), selected: false },
  { id: 2, value: roll(), selected: false },
  { id: 3, value: roll(), selected: false },
  { id: 4, value: roll(), selected: false },
  { id: 5, value: roll(), selected: false },
];

export const diceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ROLL_DICE:
      return [
        ...state.map((item) =>
          !item.selected ? { ...item, value: roll() } : item
        ),
      ];
    case SELECT_DICE:
      return [
        ...state.map((item) =>
          item.id === action.payload
            ? { ...item, selected: !item.selected }
            : item
        ),
      ];
    case RESET_DICE:
      return [
        ...state.map((item) =>
          item.selected ? { ...item, selected: false } : item
        ),
      ];
    default:
      return state;
  }
};

export default diceReducer;
