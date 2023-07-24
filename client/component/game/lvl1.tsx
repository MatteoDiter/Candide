import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Lvl1: React.FC = () => {
  // set time and clicks
  const time = 5;
  const clicks = 10;

  // set states
  const [value, setValue] = useState(clicks); // clicks left to beat the game
  const [timer, setTimer] = useState(time); // time left to beat the game
  const [isGameStarted, setIsGameStarted] = useState(false); // track when the game has started
  const navigate = useNavigate(); // setup navigation to next level

  // setting reset timer
  const resetTimer = () => {
    setTimer(time + 1);
  };
  // timer logic
  useEffect(() => {
    if (isGameStarted) {
      const timeInterval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(timeInterval);
    }
  }, [isGameStarted]);

  // game over logic by time
  useEffect(() => {
    if (isGameStarted && timer === 0) {
      alert("Time's Up! - Game Over");
      setValue(clicks);
      resetTimer();
      setIsGameStarted(false); // Reset the game state
    }
  }, [isGameStarted, timer, clicks]);

  // game win logic by clicks
  useEffect(() => {
    if (isGameStarted && value === 0) {
      alert("You Win");
      resetTimer();
      setIsGameStarted(false); // Reset the game state
      // set a delay before navigate or will cause re-rendering issue // cant render at the same time
      setTimeout(() => {
        navigate("/lvl2");
      }, 100);
    }
  }, [isGameStarted, value, navigate]);

  // handle game start
  const handleStartClick = () => {
    setIsGameStarted(true);
  };

  // handle click logic
  const handleClick = () => {
    if (isGameStarted) {
      setValue((prevValue) => prevValue - 1);
    }
  };

  return (
    <div>
      <h1>Level 1!</h1>
      {!isGameStarted && <button onClick={handleStartClick}>Start</button>}
      <p>Time remaining: {timer} seconds</p>
      <button onClick={handleClick}>clicker</button>
      <p>{value}</p>
    </div>
  );
};

export default Lvl1;
