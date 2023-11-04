import { useEffect, useState } from "react";
import styles from "./Error.module.css";
function Error({ msg }) {
  const [errorMsg, setErrMsg] = useState(null);

  useEffect(
    function () {
      setErrMsg(msg);
    },
    [msg]
  );
  return (
    <>
      {errorMsg && (
        <div className={styles.container}>
          <p>{errorMsg.message}</p>
          <div>
            <button onClick={() => setErrMsg("")} className={styles.closeBtn}>
              <i className="las la-times"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Error;
