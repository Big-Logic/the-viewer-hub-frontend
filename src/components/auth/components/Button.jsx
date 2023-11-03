import Loader from "../../reusable/Loader/Loader";
import styles from "./Button.module.css";
function Button({ children, loading }) {
  return (
    <div className={styles.container}>
      {loading && <Loader />}
      <button
        className={`cta ${styles.button} ${loading ? styles.loading : ""}`}
        type="submit"
        disabled={loading}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
