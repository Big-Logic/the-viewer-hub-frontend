import AppHeaderButton from "./AppHeaderButton";
function SearchButton() {
  function handleClick() {}
  return (
    <AppHeaderButton
      handleClick={handleClick}
      content={<i className="las la-search"></i>}
    />
  );
}

export default SearchButton;
