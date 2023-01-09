import React from "react";
function Input() {
  const [state, setState] = React.useState("");
  function UI(el) {
    setState(el.target.value);
  }
  function Clear() {
    setState("");
  }
  return (
    <div>
      <input value={state} placeholder=" Typing...." onChange={UI} />
      <h1>{state}</h1>
      <button onClick={Clear}>Clear Data</button>
    </div>
  );
}
export default Input;
