import { useId, useState } from "react";
import styles from "./Input.module.css";
import Button from "../../reusable/buttton/Button";
function Input({
  inputType = "text",
  inputPlacehoder = "",
  inputRef,
  isRequired = true,
  labelText = "",
  defaultValue,
}) {
  const [isDisabled, setIsDisabled] = useState(true);
  const [inputVlaue, setInputValue] = useState(defaultValue);
  const inputId = useId();

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleClick() {
    setIsDisabled(false);
  }
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={inputId}>
        {labelText}
      </label>

      <input
        type={inputType}
        placeholder={inputPlacehoder}
        ref={inputRef}
        value={inputVlaue}
        required={isRequired}
        onChange={handleChange}
        className={`${styles.input} ${!isDisabled && "isEnabled"}`}
        id={inputId}
        disabled={isDisabled}
      />
      <Button
        handleClick={handleClick}
        customClass={styles.editButton}
        btnType="button"
      >
        <i className="las la-edit"></i>
      </Button>
    </div>
  );
}

export default Input;
