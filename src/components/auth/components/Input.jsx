import { useId, useState } from "react";
import styles from "./Input.module.css";
function Input({
  inputType = "text",
  inputPlacehoder = "",
  inputRef,
  isRequired = true,
  labelText = "",
}) {
  const [inputVlaue, setInputValue] = useState("");
  const inputId = useId();

  function handleChange(e) {
    setInputValue(e.target.value);
  }
  return (
    <div className={styles.container}>
      {labelText && (
        <label className={styles.label} htmlFor={inputId}>
          {labelText}
        </label>
      )}

      <input
        type={inputType}
        placeholder={inputPlacehoder}
        ref={inputRef}
        value={inputVlaue}
        required={isRequired}
        onChange={handleChange}
        className={styles.input}
        id={inputId}
      />
    </div>
  );
}

export default Input;
