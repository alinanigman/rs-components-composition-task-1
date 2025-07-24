import FieldLayout from "./FieldLayout";

const Field = ({ field, setField }) => {
  const handleClick = (index) => {
    // пока просто заглушка: если пусто — ставим "X"
    if (field[index] === "") {
      const newField = [...field];
      newField[index] = "X";
      setField(newField);
    }
  };

  return <FieldLayout field={field} onCellClick={handleClick} />;
};

export default Field;
