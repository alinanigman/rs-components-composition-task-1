import styles from "./AppLayout.module.css";

const AppLayout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Tic-Tac-Toe</h1>
      {children}
    </div>
  );
};

export default AppLayout;
