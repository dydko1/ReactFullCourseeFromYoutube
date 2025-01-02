function Button() {

  const handleClick = (e) => {
    e.target.textContent="2x";
  };

  return (
    <button onDoubleClick={(e) => handleClick(e)}>Click me</button>
  );
}
export default Button;
