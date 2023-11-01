import Button from "../../buttton/Button";
import styles from "./AppHeaderButton.module.css";
function AppHeaderButton({ handleClick, content }) {
  return (
    <Button handleClick={handleClick} customClass={styles.headerBtn}>
      {content}
    </Button>
  );
}

export default AppHeaderButton;
