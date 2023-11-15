import { useEffect, useId, useState } from "react";
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
  const [inputValue, setInputValue] = useState(defaultValue);
  console.log(inputValue, inputType);

  function generateDate(inp) {
    const birthDateData = new Date(inp);
    const year = birthDateData.getFullYear();
    const month = birthDateData.getMonth();
    const date = birthDateData.getDate();
    console.log(
      `${year}-${month < 10 ? "0" : ""}${month}-${date < 10 ? "0" : ""}${date}`
    );

    return `${year}-${month < 10 ? "0" : ""}${month}-${
      date < 10 ? "0" : ""
    }${date}`;
  }

  const [isFocus, setIsFocus] = useState(false);
  const inputId = useId();

  useEffect(
    function () {
      if (!isDisabled) {
        inputRef.current.focus();
        setIsFocus(true);
      } else {
        inputRef.current.blur();
        setIsFocus(false);
      }
    },
    [isDisabled]
  );

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleClick() {
    setIsDisabled(false);
    // inputRef.current.focus({ focusVisible: true });
  }

  function handleBlur() {
    setIsDisabled(true);
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
        // value={inputType === "date" ? generateDate(inputVlaue) : inputVlaue}
        defaultValue={
          inputType === "date" ? generateDate(inputValue) : inputValue
        }
        required={isRequired}
        onChange={handleChange}
        className={`${styles.input} ${!isDisabled && "isEnabled"}`}
        id={inputId}
        disabled={isDisabled}
        onBlur={handleBlur}
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
