import React, { useState, useEffect } from "react";

const Lvl3: React.FC = () => {
  // set time and clicks
  const time = 10;
  const clicks = 80;

  // set states
  const [value, setValue] = useState(clicks); // clicks left to beat the game
  const [timer, setTimer] = useState(time); // time left to beat the game

  // setting reset timer
  const resetTimer = () => {
    setTimer(time + 1);
  };
  // timer logic
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  // game over logic by time
  useEffect(() => {
    if (timer === 0) {
      alert("Time's Up! - Game Over");
      setValue(clicks);
      resetTimer();
    }
  }, [timer, clicks]);

  // game win logic by clicks
  useEffect(() => {
    if (value === 0) {
      alert("You Win");
      resetTimer();
    }
  }, [value]);

  // handle click logic
  const handleClick = () => {
    setValue((preValue) => preValue - 1);
  };

  return (
    <div>
      <h1>Level 3!</h1>
      <p>Time remaining: {timer} seconds</p>
      <button onClick={handleClick}>clicker</button>
      <p>{value}</p>
    </div>
  );
};

export default Lvl3;
