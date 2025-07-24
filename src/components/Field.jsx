import FieldLayout from "./FieldLayout";

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // горизонтали
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // вертикали
  [0, 4, 8],
  [2, 4, 6], // диагонали
];

const Field = ({
  currentPlayer,
  setCurrentPlayer,
  isGameEnded,
  setIsGameEnded,
  setIsDraw,
  field,
  setField,
}) => {
  const handleClick = (index) => {
    if (field[index] !== "" || isGameEnded) return;

    const updatedField = [...field];
    updatedField[index] = currentPlayer;
    setField(updatedField);

    const isWin = winningCombinations.some((combo) =>
      combo.every((i) => updatedField[i] === currentPlayer),
    );

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

  return <FieldLayout field={field} onCellClick={handleClick} />;
};

export default Field;
