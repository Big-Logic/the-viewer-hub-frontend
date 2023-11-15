import Button from "../../reusable/buttton/Button";

function Form({ formTitle, handleClick, children }) {
  return (
    <form>
      <h2>{formTitle}</h2>
      {children}
      <Button handleClick={handleClick} btnType={"submit"}>
        Save
      </Button>
    </form>
  );
}

export default Form;
