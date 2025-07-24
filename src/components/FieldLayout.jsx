import styles from "./FieldLayout.module.css";

const FieldLayout = ({ field, onCellClick }) => {
  return (
    <div className={styles.grid}>
      {field.map((cell, index) => (
        <button
          key={index}
          className={styles.cell}
          onClick={() => onCellClick(index)}
        >
          {cell}
        </button>
      ))}
    </div>
  );
};

export default FieldLayout;
