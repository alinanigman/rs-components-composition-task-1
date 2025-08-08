import { useSelector } from "react-redux";
import { selectField } from "@/selectors";
import FieldLayout from "./FieldLayout";

const Field = ({ onCellClick }) => {
  const field = useSelector(selectField);
  return <FieldLayout field={field} onCellClick={onCellClick} />;
};

export default Field;
