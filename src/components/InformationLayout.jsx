import styles from "./InformationLayout.module.css";

const InformationLayout = ({ title, status }) => {
  return (
    <div className={styles.information}>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.status}>{status}</h3>
    </div>
  );
};

export default InformationLayout;
