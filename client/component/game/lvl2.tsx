import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Lvl2: React.FC = () => {
  // set time and clicks
  const time = 5;
  const clicks = 20;

  // set states
  const [value, setValue] = useState(clicks); // clicks left to beat the game
  const [timer, setTimer] = useState(time); // time left to beat the game
  const navigate = useNavigate(); // setup navigation to next level

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
      // set a delay before navigate or will cause re-rendering issue // cant render at the same time
      setTimeout(() => {
        navigate("/lvl3");
      }, 100);
    }
  }, [value, navigate]);

  // handle click logic
  const handleClick = () => {
    setValue((preValue) => preValue - 1);
  };

  return (
    <div>
      <h1>Level 2!</h1>
      <p>Time remaining: {timer} seconds</p>
      <button onClick={handleClick}>clicker</button>
      <p>{value}</p>
    </div>
  );
};

export default Lvl2;
