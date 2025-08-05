import { useStoreSelector } from "@/hooks/useStoreSelector";
import FieldLayout from "./FieldLayout";

const Field = ({ onCellClick }) => {
  const field = useStoreSelector((s) => s.field);
  return <FieldLayout field={field} onCellClick={onCellClick} />;
};

export default Field;
