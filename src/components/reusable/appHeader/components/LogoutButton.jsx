import { useNavigate } from "react-router-dom";
import { useUser } from "../../../../contexts/AuthContext";
import Button from "../../buttton/Button";
import { useEffect, useState } from "react";

// STYLES
import styles from "./LogoutButton.module.css";

function LogoutButton({ customClass }) {
  const { logout } = useUser();
  const navigate = useNavigate();
  const [proceedLogout, setProceedLogout] = useState(false);
  useEffect(
    function () {
      if (proceedLogout) {
        (async function () {
          const res = await logout();
          if (res) {
            navigate("/auth", { replace: true });
          }
        })();
      }
    },
    [proceedLogout]
  );
  function handleClick() {
    setProceedLogout(true);
  }
  return (
    <Button
      handleClick={handleClick}
      customClass={`cta ${styles.logoutButton}`}
    >
      <span>logout</span>
    </Button>
  );
}

export default LogoutButton;
