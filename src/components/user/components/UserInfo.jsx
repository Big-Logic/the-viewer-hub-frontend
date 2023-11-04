import styles from "./UserInfo.module.css";
function UserInfo({ userData }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.userName}>Alfred Ngwayah</h2>
      <p className={styles.profession}>Developer at gentle tech</p>
      <ul className={styles.items}>
        <li className={styles.item}>
          <span className={styles.figure}>100</span> Posts
        </li>
        <li className={styles.item}>
          <span className={styles.figure}>300</span> Likes
        </li>
        <li className={styles.item}>
          <span className={styles.figure}>10</span> Comments
        </li>
      </ul>
    </div>
  );
}

export default UserInfo;
