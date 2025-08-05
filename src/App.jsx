import { useStoreSelector } from "@/hooks/useStoreSelector";
import { store } from "@/store";
import "./AppLayout.module.css";
import AppLayout from "./AppLayout";
import Information from "./components/Information";
import Field from "./components/Field";

function App() {
  const currentPlayer = useStoreSelector((s) => s.currentPlayer);
  const isGameEnded = useStoreSelector((s) => s.isGameEnded);
  const field = useStoreSelector((s) => s.field);

  const resetGame = () => {
    store.dispatch({ type: "RESET_GAME" });
  };

  const winningCombinations = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // main diagonal
    [2, 4, 6], // anti-diagonal
  ];

  const handleClick = (index) => {
    if (field[index] !== "" || isGameEnded) return;

    const updatedField = [...field];
    updatedField[index] = currentPlayer;
    store.dispatch({ type: "UPDATE_FIELD", payload: updatedField });

    const isWin = winningCombinations.some((combo) => {
      return combo.every((i) => updatedField[i] === currentPlayer);
    });

    if (isWin) {
      store.dispatch({ type: "SET_IS_GAME_ENDED", payload: true });
      return;
    }

    const isFull = updatedField.every((cell) => cell !== "");

    if (isFull) {
      store.dispatch({ type: "SET_IS_DRAW", payload: true });
      store.dispatch({ type: "SET_IS_GAME_ENDED", payload: true });
      return;
    }

    const nextPlayer = currentPlayer === "X" ? "O" : "X";
    store.dispatch({ type: "SET_CURRENT_PLAYER", payload: nextPlayer });
  };

  return (
    <AppLayout onReset={resetGame}>
      <Information />
      <Field onCellClick={handleClick} />
    </AppLayout>
  );
}

export default App;
