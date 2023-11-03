import styles from "./Button.module.css";
function Button({ children, loading }) {
  return (
    <div className={styles.container}>
      <button className={`${styles.button} ${loading ? styles.loading : ""}`} type="submit" disabled={loading}>
        {children}
      </button>
    </div>
  );
}

export default Button;
