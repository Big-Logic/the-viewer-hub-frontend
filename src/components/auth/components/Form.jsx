// STYLES
import styles from "./Form.module.css";
function Form({ children, title, handleSubmit }) {
  return (
    <section className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.logoContainer}>
          <div className={styles.logoCont}>
            <span className={styles.logo}>TVH</span>
          </div>
        </div>
        <h1 className={styles.formTitle}>{title}</h1>
        {children}
      </form>
    </section>
  );
}

export default Form;
