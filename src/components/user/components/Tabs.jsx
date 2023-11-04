import { NavLink } from "react-router-dom";
import styles from "./Tabs.module.css";
function Tabs() {
  return (
    <div className={styles.container}>
      <div className={styles.tabContainer}>
        <NavLink to="/user" className={styles.tab}>
          Posts
        </NavLink>
      </div>
      <div className={styles.tabContainer}>
        <NavLink to="/user/about" className={styles.tab}>
          About
        </NavLink>
      </div>
    </div>
  );
}

export default Tabs;
