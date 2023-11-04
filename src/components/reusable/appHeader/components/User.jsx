import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// COMPONENTS
import Button from "../../buttton/Button";
import { useUser } from "../../../../contexts/AuthContext";
import LogoutButton from "./LogoutButton";

// CSS STYLES
import styles from "./User.module.css";

const profileDefault =
  "https://res.cloudinary.com/dy287fhyg/image/upload/v1699014386/profiledefault_qie9w2.webp";
function User() {
  const {
    user: {
      profilePicture: { url },
    },
  } = useUser();
  const [optionDisplay, setOptionDisplay] = useState(false);

  useEffect(
    function () {
      const documentBody = document.body;
      function eventCb() {
        setOptionDisplay((prev) => !prev);
      }
      if (optionDisplay) {
        documentBody.addEventListener("click", eventCb);
      }
      return () => {
        documentBody.removeEventListener("click", eventCb);
      };
    },
    [optionDisplay]
  );
  function handleClick(e) {
    e.stopPropagation();
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
          <i className={`las la-user-alt ${styles.dropdownIcon}`}></i>
          <span>profile</span>
        </Link>
        <Link to="/setting" className={styles.dropdownBtn}>
          <i className={`las la-cog ${styles.dropdownIcon}`}></i>
          <span>setting</span>
        </Link>
        <LogoutButton />
      </div>
    </div>
  );
}

export default User;
