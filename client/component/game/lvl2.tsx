import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles.scss";

const Lvl2: React.FC = () => {
  // set time and clicks
  const time = 10;
  const clicks = 50;

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
      "Homeless,",
      "he",
      "joins",
      "the army,",
      "witnessing",
      "the",
      "horrors",
      "of war.",
      "He",
      "makes",
      "his way",
      "to",
      "Holland",
      "and",
      "finds",
      "a kind",
      "Anabaptist,",
      "who",
      "takes him",
      "away",
      "to Lisbon",
      "via",
      "ship.",
      "There",
      "Candide",
      "surprisingly",
      "finds",
      "Cunégonde,",
      "who",
      "escaped",
      "the castle",
      "that was",
      "attacked",
      "by soldiers.",
      "She",
      "is living",
      "with",
      "two",
      "powerful",
      "men",
      "who",
      "come",
      "upon",
      "the young",
      "lovers,",
      "and",
      "Candide",
      "kills",
      "them both.",
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
        navigate("/lvl3");
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
      <h3>Second Act: Death</h3>
      {!isGameStarted && <button onClick={handleStartClick}>Start</button>}
      {isGameStarted && value !== clicks && <p>{displayedSentence}</p>}
      <p>Time remaining: {timer} seconds</p>
      <button onClick={handleClick}>clicker</button>
    </div>
  );
};

export default Lvl2;
