import { store } from "@/store";
import { checkWin, checkDraw } from "@/utils";

export const useGame = () => {
  const resetGame = () => {
    store.dispatch({ type: "RESET_GAME" });
  };

  const handleClick = (field, isGameEnded, currentPlayer, index) => {
    if (field[index] !== "" || isGameEnded) return;

    const updatedField = [...field];
    updatedField[index] = currentPlayer;
    store.dispatch({ type: "UPDATE_FIELD", payload: updatedField });

    if (checkWin(updatedField, currentPlayer)) {
      store.dispatch({ type: "SET_IS_GAME_ENDED", payload: true });
      return;
    }

    if (checkDraw(updatedField)) {
      store.dispatch({ type: "SET_IS_DRAW", payload: true });
      store.dispatch({ type: "SET_IS_GAME_ENDED", payload: true });
      return;
    }

    const nextPlayer = currentPlayer === "X" ? "O" : "X";
    store.dispatch({ type: "SET_CURRENT_PLAYER", payload: nextPlayer });
  };

  return { resetGame, handleClick };
};
