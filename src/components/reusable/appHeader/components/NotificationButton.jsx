import AppHeaderButton from "./AppHeaderButton";
import styles from "./NotificationButton.module.css";
function NotificationButton() {
  function handleClick() {}
  return (
    <AppHeaderButton
      handleClick={handleClick}
      content={
        <>
          <span className={styles.notificationCount}>
            <span>6</span>
          </span>
          <i className="las la-bell"></i>
        </>
      }
    />
  );
}

export default NotificationButton;
