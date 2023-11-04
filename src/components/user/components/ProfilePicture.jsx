import Button from "../../reusable/buttton/Button";
import styles from "./ProfilePicture.module.css";
function ProfilePicture() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.imageCont}>
          <img
            src="https://res.cloudinary.com/dy287fhyg/image/upload/v1699014386/profiledefault_qie9w2.webp"
            alt="profile picture"
            className={styles.profilePicture}
          />
        </div>
      </div>
      <div className={styles.innerContainer}>
        <Button customClass={`cta ${styles.createButton}`}>Create Post</Button>
      </div>
    </div>
  );
}

export default ProfilePicture;
