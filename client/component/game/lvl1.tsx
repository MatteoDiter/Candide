import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { wordArray1 } from "./storyline";
import "../../styles.scss";

const Lvl1: React.FC = () => {
  // set time and clicks
  const time = 5;
  const clicks = 30;

  // set states
  const [remainingClicks, setRemainingClicks] = useState(clicks); // clicks left to beat the game
  const [timer, setTimer] = useState(time); // time left to beat the game
  const [isGameStarted, setIsGameStarted] = useState(false); // track when the game has started
  const [words, setWords] = useState<string[]>([]); // array of words
  const [displayedSentence, setDisplayedSentence] = useState(""); // displayed sentence
  const [progressWidth, setProgressWidth] = useState(0); // progress bar
  const [engagementWidth, setEngagementWidth] = useState(0); // engagement bar
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
      const progress = 100 - ((remainingClicks - 1) / clicks) * 100;
      const newProgressWidth = progress;
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
    const newEngagementWidth = engagement;
    setEngagementWidth(newEngagementWidth);
  }, [timer]);

  // game over logic by time
  useEffect(() => {
    if (isGameStarted && timer === 0) {
      // set a delay before navigate or will cause re-rendering issue // cant render at the same time
      setTimeout(() => {
        alert("You Lost");
        setRemainingClicks(clicks);
        resetTimer(); // reset timer
        setProgressWidth(0); // reset progress
        setIsGameStarted(false); // Reset the game state
        setDisplayedSentence(""); // Reset the displayed sentence
      }, 10);
    }
  }, [isGameStarted, timer, clicks]);

  // game win logic by clicks
  useEffect(() => {
    if (isGameStarted && remainingClicks === 0) {
      // set a delay before navigate or will cause re-rendering issue // cant render at the same time
      setTimeout(() => {
        alert("You Win");
        resetTimer();
        setIsGameStarted(false); // Reset the game state
        navigate("/lvl2");
      }, 10);
    }
  }, [isGameStarted, remainingClicks, navigate]);

  return (
    <div>
      {/* <div className="center-line" /> */}
      {/* <p>{clicks - value}</p> */}
      <div className="container">
        <hr
          className="total-progress"
          style={{
            width: `calc(var(--screen-width) - 2px)`,
          }}
        />
        <div
          className="progress"
          style={{
            width: `calc(var(--screen-width) * ${progressWidth / 100})`,
          }}
        />
        <h3 className="title">First Act: Lovers</h3>
        <hr
          className="total-engagement"
          style={{
            width: `calc(var(--screen-width) - 2px)`,
          }}
        />
        <div
          className="engagement"
          style={{
            width: `calc(var(--screen-width) * ${engagementWidth / 100})`,
          }}
        />
        {isGameStarted && remainingClicks !== clicks && (
          <p className="paragraph1">{displayedSentence}</p>
        )}
        {/* <p>Time remaining: {timer} seconds</p> */}
        <a href="#" className="btn2" onClick={handleClick}>
          keep typing
        </a>
        {!isGameStarted && (
          <a href="#" className="btn" onClick={handleStartClick}>
            click to type
          </a>
        )}
      </div>
    </div>
  );
};

export default Lvl1;
