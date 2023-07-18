import React, { useState } from "react";

const Clicker: React.FC = () => {
  const [value, setValue] = useState(100);

  const handleClick = () => {
    setValue((preValue) => preValue - 1);
  };

  return (
    <div>
      <button onClick={handleClick}>clicker</button>
      <p>{value}</p>
    </div>
  );
};

export default Clicker;
