import styles from "./MainContainer.module.css";

function MainContainer({ children }) {
  return <main className={styles.main}>{children}</main>;
}

export default MainContainer;
