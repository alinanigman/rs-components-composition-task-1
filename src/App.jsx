import { useState } from "react";
import "./AppLayout.module.css";
import AppLayout from "./AppLayout";
import Information from "./components/Information";
import Field from "./components/Field";
function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState(["", "", "", "", "", "", "", "", ""]);
  const resetGame = () => {
    setCurrentPlayer("X");
    setIsGameEnded(false);
    setIsDraw(false);
    setField(["", "", "", "", "", "", "", "", ""]);
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
    setField(updatedField);

    const isWin = winningCombinations.some((combo) => {
      return combo.every((i) => updatedField[i] === currentPlayer);
    });

    if (isWin) {
      setIsGameEnded(true);
      return;
    }

    const isFull = updatedField.every((cell) => cell !== "");
    if (isFull) {
      setIsDraw(true);
      setIsGameEnded(true);
      return;
    }

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  return (
    <AppLayout onReset={resetGame}>
      <Information
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
      />
      <Field field={field} onCellClick={handleClick} />
    </AppLayout>
  );
}

export default App;
