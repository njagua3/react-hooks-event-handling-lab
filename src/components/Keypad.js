import React from "react";

function Keypad() {
  // Event handler for the change event
  const handleChange = () => {
    console.log('Entering password...');
  };

  return (
    <div>
      {/* Render an input of type password with the change event handler */}
      <input type="password" onChange={handleChange} />
    </div>
  );
}

export default Keypad;
