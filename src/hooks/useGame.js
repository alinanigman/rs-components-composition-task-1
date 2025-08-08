import { useDispatch } from "react-redux";
import {
  RESET_GAME as resetGameAction,
  updateField,
  setGameEnded,
  setDraw,
  setCurrentPlayer,
} from "@/actions";
import { checkWin, checkDraw } from "@/utils";

export const useGame = () => {
  const dispatch = useDispatch();

  const resetGame = () => {
    dispatch(resetGameAction());
  };

  const handleClick = (field, isGameEnded, currentPlayer, index) => {
    if (field[index] !== "" || isGameEnded) return;

    const updatedField = [...field];
    updatedField[index] = currentPlayer;
    dispatch(updateField(updatedField));

    if (checkWin(updatedField, currentPlayer)) {
      dispatch(setGameEnded(true));
      return;
    }

    if (checkDraw(updatedField)) {
      dispatch(setDraw(true));
      dispatch(setGameEnded(true));
      return;
    }

    const nextPlayer = currentPlayer === "X" ? "O" : "X";
    dispatch(setCurrentPlayer(nextPlayer));
  };

  return { resetGame, handleClick };
};
