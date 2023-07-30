import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles.scss";

const Lvl3: React.FC = () => {
  // set time and clicks
  const time = 10;
  const clicks = 80;

  // set states
  const [value, setValue] = useState(clicks); // clicks left to beat the game
  const [timer, setTimer] = useState(time); // time left to beat the game
  const [isGameStarted, setIsGameStarted] = useState(false); // track when the game has started
  const [words, setWords] = useState<string[]>([]); // array of words
  const [displayedSentence, setDisplayedSentence] = useState(""); // displayed sentence
  const navigate = useNavigate(); // setup navigation to next level

  // Array of words to be displayed on each click
  useEffect(() => {
    const wordArray: string[] = [
      "Frightened,",
      "they escape",
      "through",
      "a vessel",
      "loading up",
      "for a mission",
      "in South America.",
      "In Buenos Aires",
      "they meet",
      "the governor",
      "who takes",
      "an interest",
      "in Cunégonde.",
      "Heartbroken,",
      "Candide",
      "cannot fight",
      "and must flee.",
      "Candide",
      "ends up",
      "in Eldorado,",
      "a country",
      "filled",
      "with gold",
      "for which",
      "the citizens",
      "have no use",
      "because",
      "everyone's",
      "needs are met.",
      "Eager",
      "to find",
      "Cunégonde,",
      "Candide",
      "leaves",
      "loaded",
      "with gold,",
      "and other",
      "supplies.",
      "An informant",
      "tells",
      "him that",
      "Cunégonde",
      "is now",
      "in Constantinople,",
      "working",
      "as a servant.",
      "Candide",
      "sets off to",
      "find",
      "Cunégonde,",
      "during the trip",
      "most",
      "of his",
      "fortune",
      "gets lost,",
      "but once",
      "arrived,",
      "he buys",
      "her",
      "freedom.",
      "The two",
      "get married",
      "and buy",
      "a small farm",
      "with the last",
      "of his",
      "Eldorado",
      "fortune.",
      "Candide",
      "decides",
      "that this",
      "is how",
      "they will find",
      "happiness,",
      "and they",
      "begin",
      "to work",
      "on their",
      "farm.",
    ];
    setWords(wordArray);
  }, []);

  // Display sentence effect
  useEffect(() => {
    if (isGameStarted && value !== clicks) {
      setDisplayedSentence(
        (prevSentence) => prevSentence + words[clicks - value - 1] + " "
      );
    }
  }, [isGameStarted, value, words, clicks]);

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

  // game over logic by time
  useEffect(() => {
    if (isGameStarted && timer === 0) {
      alert("Time's Up! - Game Over");
      setValue(clicks);
      resetTimer();
      setIsGameStarted(false); // Reset the game state
      setDisplayedSentence(""); // Reset the displayed sentence
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
        navigate("/home");
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
      <h1>Final Act: Wheel of Fortune</h1>
      {!isGameStarted && <button onClick={handleStartClick}>Start</button>}
      {isGameStarted && value !== clicks && <p>{displayedSentence}</p>}
      <p>Time remaining: {timer} seconds</p>
      <button onClick={handleClick}>clicker</button>
    </div>
  );
};

export default Lvl3;
