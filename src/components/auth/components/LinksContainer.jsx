import styles from "./LinksContainer.module.css";
function LinksContainer({ children }) {
  return <div className={styles.linksContainer}>{children}</div>;
}

export default LinksContainer;
