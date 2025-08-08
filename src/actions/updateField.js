export const updateField = (updatedField) => ({
  type: "UPDATE_FIELD",
  payload: updatedField,
});

export const setGameEnded = (value) => ({
  type: "SET_IS_GAME_ENDED",
  payload: value,
});

export const setDraw = (value) => ({
  type: "SET_IS_DRAW",
  payload: value,
});

export const setCurrentPlayer = (player) => ({
  type: "SET_CURRENT_PLAYER",
  payload: player,
});
