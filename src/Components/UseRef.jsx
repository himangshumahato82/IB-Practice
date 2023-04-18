import React, { useRef } from 'react';

function MyComponent() {
  const inputRef = useRef(null);
  console.log(inputRef)

  function handleButtonClick() {
    inputRef.current.value = 'himu';
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleButtonClick}>Update input value</button>
    </div>
  );
}
export default MyComponent;
