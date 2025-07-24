import styles from "./AppLayout.module.css";

const AppLayout = ({ children, onReset }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Крестики-Нолики</h1>
      <button className={styles.resetButton} onClick={onReset}>
        Начать заново
      </button>
      {children}
    </div>
  );
};

export default AppLayout;
