import { Link } from "react-router-dom";

// COMPONENTS
import Button from "../../buttton/Button";

// CSS STYLES
import styles from "./User.module.css";

// STATIC ASSETS
import profileDefault from "../../../../assets/profileDefault.webp";
import { useState } from "react";
import { useUser } from "../../../../contexts/AuthContext";
import LogoutButton from "./LogoutButton";
function User() {
  const {
    user: {
      profilePicture: { url },
    },
  } = useUser();
  const [optionDisplay, setOptionDisplay] = useState(false);
  function handleClick() {
    setOptionDisplay((prev) => !prev);
  }
  return (
    <div className={styles.container}>
      <Button handleClick={handleClick} customClass={styles.userBtn}>
        <div className={styles.userImageContainer}>
          <img
            src={url || profileDefault}
            alt="User"
            className={styles.userImage}
          />
        </div>
        <span
          className={`${styles.arrowDown} ${
            optionDisplay ? styles.arrowDownRotate : ""
          }`}
        >
          <i className="las la-angle-down"></i>
        </span>
      </Button>
      <div
        className={`${styles.dropdown} ${
          optionDisplay ? styles.dropdownShow : ""
        }`}
      >
        <Link to="/user" className={styles.dropdownBtn}>
          profile
        </Link>
        <Link to="/setting" className={styles.dropdownBtn}>
          setting
        </Link>
        <LogoutButton customClass={styles.dropdownBtn} />
      </div>
    </div>
  );
}

export default User;
