function Button({ handleClick, customClass, children }) {
  return (
    <button onClick={handleClick} className={customClass}>
      {children}
    </button>
  );
}

export default Button;
