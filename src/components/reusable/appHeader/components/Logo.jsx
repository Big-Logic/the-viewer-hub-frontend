import { Link } from "react-router-dom";
import styles from "./Logo.Module.css";
function Logo() {
  return (
    <div>
      <Link to="/" className={styles.logo}>
        TVH
      </Link>
    </div>
  );
}

export default Logo;
