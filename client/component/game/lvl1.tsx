import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { wordArray1 } from "./storyline";
import "../../styles.scss";

const Lvl1: React.FC = () => {
  // set time and clicks
  const time = 10;
  const clicks = 30;

  // set states
  const [remainingClicks, setRemainingClicks] = useState(clicks); // clicks left to beat the game
  const [timer, setTimer] = useState(time); // time left to beat the game
  const [isGameStarted, setIsGameStarted] = useState(false); // track when the game has started
  const [words, setWords] = useState<string[]>([]); // array of words
  const [displayedSentence, setDisplayedSentence] = useState(""); // displayed sentence
  const [progressWidth, setProgressWidth] = useState(0); // progress bar
  const [engagementWidth, setEngagementWidth] = useState(0); // progress bar
  const navigate = useNavigate(); // setup navigation to next level

  // handle game start
  const handleStartClick = () => {
    setIsGameStarted(true);
  };

  // handle click logic
  const handleClick = () => {
    if (isGameStarted) {
      setRemainingClicks((prevValue) => prevValue - 1);

      // Calculate the progress bar width based on the remaining clicks
      const progress = 100 - (remainingClicks / clicks) * 100;
      const newProgressWidth = (progress / 100) * 800;
      setProgressWidth(newProgressWidth);
    }
  };

  // Array of words to be displayed on each click
  useEffect(() => {
    wordArray1;
    setWords(wordArray1);
  }, []);

  // Display sentence effect
  useEffect(() => {
    if (isGameStarted && remainingClicks !== clicks) {
      setDisplayedSentence(
        (prevSentence) =>
          prevSentence + words[clicks - remainingClicks - 1] + " "
      );
    }
  }, [isGameStarted, remainingClicks, words, clicks]);

  // setting reset timer
  const resetTimer = () => {
    setTimer(time);
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

  // update engagement bar width whenever the timer changes
  useEffect(() => {
    const engagement = 100 - (timer / time) * 100;
    const newEngagementWidth = (engagement / 100) * 800;
    setEngagementWidth(newEngagementWidth);
  }, [timer]);

  // game over logic by time
  useEffect(() => {
    if (isGameStarted && timer === 0) {
      alert("Time's Up! - Game Over");
      setRemainingClicks(clicks);
      resetTimer();
      setIsGameStarted(false); // Reset the game state
      setDisplayedSentence(""); // Reset the displayed sentence
    }
  }, [isGameStarted, timer, clicks]);

  // game win logic by clicks
  useEffect(() => {
    if (isGameStarted && remainingClicks === 0) {
      alert("You Win");
      resetTimer();
      setIsGameStarted(false); // Reset the game state
      // set a delay before navigate or will cause re-rendering issue // cant render at the same time
      setTimeout(() => {
        navigate("/lvl2");
      }, 100);
    }
  }, [isGameStarted, remainingClicks, navigate]);

  return (
    <div>
      <h3>First Act: The Lovers</h3>
      {/* <p>{clicks - value}</p> */}
      <div
        className="progress-bar"
        style={{
          width: progressWidth,
        }}
      />
      <div
        className="engagement-bar"
        style={{
          width: engagementWidth,
        }}
      />
      {isGameStarted && remainingClicks !== clicks && (
        <p>{displayedSentence}</p>
      )}
      <p>Time remaining: {timer} seconds</p>
      {!isGameStarted && <button onClick={handleStartClick}>Start</button>}
      <button onClick={handleClick}>clicker</button>
    </div>
  );
};

export default Lvl1;
