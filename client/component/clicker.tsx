import React, { useState } from "react";

const Clicker: React.FC = () => {
  const [value, setValue] = useState(100);

  const handleClick = () => {
    setValue((preValue) => {
      let newValue = preValue - 1;
      // game over conditional
      if (newValue === 0) {
        alert("Game Over");
        newValue = 100;
      }
      return newValue;
    });
  };

  return (
    <div>
      <button onClick={handleClick}>clicker</button>
      <p>{value}</p>
    </div>
  );
};

export default Clicker;
