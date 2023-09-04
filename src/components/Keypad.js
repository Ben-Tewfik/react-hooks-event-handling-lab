// Code Keypad Component Here

function Keypad() {
  function handelChange() {
    console.log("Entering password...");
  }
  return (
    <div>
      <input type="password" onChange={handelChange} />
    </div>
  );
}

export default Keypad;
