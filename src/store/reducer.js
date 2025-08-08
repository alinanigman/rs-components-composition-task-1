export const initialState = {
  currentPlayer: "X",
  isGameEnded: false,
  isDraw: false,
  field: ["", "", "", "", "", "", "", "", ""],
};

const gameReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "RESET_GAME":
      return initialState;

    case "UPDATE_FIELD":
      return { ...state, field: payload };

    case "SET_CURRENT_PLAYER":
      return { ...state, currentPlayer: payload };

    case "SET_IS_GAME_ENDED":
      return { ...state, isGameEnded: payload };

    case "SET_IS_DRAW":
      return { ...state, isDraw: payload };

    default:
      return state;
  }
};

export default gameReducer;
