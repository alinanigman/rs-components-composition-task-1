import styles from "./AppLayout.module.css";

const AppLayout = ({ children, onReset }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Tic-Tac-Toe</h1>
      <button className={styles.resetButton} onClick={onReset}>
        Restart
      </button>
      {children}
    </div>
  );
};

export default AppLayout;
