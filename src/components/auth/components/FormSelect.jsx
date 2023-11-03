import { useId, useState } from "react";
import styles from "./FormSelect.module.css";
function FormSelect({
  selectPlacehoder = "",
  selectRef,
  isRequired = true,
  labelText = "",
  optionsValues = [],
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
      <select
        placeholder={selectPlacehoder}
        ref={selectRef}
        required={isRequired}
        value={inputVlaue}
        onChange={handleChange}
        className={styles.select}
      >
        {optionsValues.map((optionValue) => (
          <option value={optionValue}>{optionValue}</option>
        ))}
      </select>
    </div>
  );
}

export default FormSelect;
