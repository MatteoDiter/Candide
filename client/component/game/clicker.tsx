import React, { useState, useEffect } from "react";

const Clicker: React.FC = () => {
  // set time and clicks
  const time = 10;
  const clicks = 10;

  // set states
  const [value, setValue] = useState(time); // clicks left to beat the game
  const [timer, setTimer] = useState(clicks); // time left to beat the game

  // setting reset timer
  const resetTimer = () => {
    setTimer(time);
  };
  // timer logic
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(timeInterval);
  }, [value]);

  // game over logic by time
  useEffect(() => {
    if (timer === 0) {
      alert("Time's Up! - Game Over");
      setValue(10);
      resetTimer();
    }
  }, [timer]);

  // game win logic by clicks
  const handleClick = () => {
    setValue((preValue) => {
      let newValue = preValue - 1;
      // winning game conditional
      if (newValue === 0) {
        alert("You Win");
        newValue = clicks;
        resetTimer();
      }
      return newValue;
    });
  };

  return (
    <div>
      <p>Time remaining: {timer} seconds</p>
      <button onClick={handleClick}>clicker</button>
      <p>{value}</p>
    </div>
  );
};

export default Clicker;
