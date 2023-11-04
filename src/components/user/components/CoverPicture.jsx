import styles from "./CoverPicture.module.css";
function CoverPicture({ url }) {
  return (
    <div className={styles.container}>
      <img
        src="https://res.cloudinary.com/dy287fhyg/image/upload/v1699110665/defaultcover_szdkys.webp"
        alt="Cover default"
        className={styles.pic}
      />
    </div>
  );
}

export default CoverPicture;
