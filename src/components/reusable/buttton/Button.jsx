function Button({ handleClick, customClass, btnType, children }) {
  return (
    <button onClick={handleClick} className={customClass} type={btnType}>
      {children}
    </button>
  );
}

export default Button;
