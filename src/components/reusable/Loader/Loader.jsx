import styles from './Loader.module.css';

function Loader({ customClassName }) {
  return (
    <div className={styles.loaderCont}>
      <span
        className={`${customClassName || styles.loaderBorderStyle} ${
          styles.loader
        }`}
      ></span>
    </div>
  );
}

export default Loader;
