import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { wordArray3 } from "./storyline";
import { longArray1, longArray2 } from "./longform";
import ChapterApprovedModal from "../modals/approved";
import ChapterRejectedModal from "../modals/rejected";
import NextModal from "../modals/next";
import RetryModal from "../modals/retry";
import "../../styles.scss";

const Lvl3: React.FC = () => {
  // set time and clicks
  const time = 10;
  const clicks = 80;

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
    if (isGameStarted && remainingClicks !== 0 && timer !== 0) {
      setRemainingClicks((prevValue) => prevValue - 1);

      // Calculate the progress bar width based on the remaining clicks
      const progress = 100 - ((remainingClicks - 1) / clicks) * 100;
      const newProgressWidth = progress;
      setProgressWidth(newProgressWidth);
    }
  };

  // Array of words to be displayed on each click
  useEffect(() => {
    wordArray3;
    setWords(wordArray3);
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
    if (isGameStarted && remainingClicks !== 0) {
      const timeInterval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(timeInterval);
    }
  }, [isGameStarted]);

  // update engagement bar width whenever the timer changes
  useEffect(() => {
    if (isGameStarted && remainingClicks !== 0) {
      const engagement = 100 - (timer / time) * 100;
      const newEngagementWidth = engagement;
      setEngagementWidth(newEngagementWidth);
    }
  }, [timer, isGameStarted, remainingClicks]);

  // game over logic by time
  useEffect(() => {
    if (isGameStarted && timer === 0 && remainingClicks !== 0) {
      setIsGameStarted(false); // Reset the game state
    }
  }, [isGameStarted, timer, clicks, remainingClicks]);

  // game win logic by clicks
  useEffect(() => {
    if (isGameStarted && remainingClicks === 0) {
      setIsGameStarted(false); // Reset the game state
    }
  }, [isGameStarted, remainingClicks]);

  return (
    <div>
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
        <h3 className="title">Final Chapter: The Wheel of Fortune</h3>
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
        <p className="paragraph1">{longArray1}</p>
        <p className="paragraph2">{longArray2}</p>
        {remainingClicks !== clicks && (
          <p className="paragraph3">{displayedSentence}</p>
        )}
        {/* Modals*/}
        <ChapterApprovedModal showModal={remainingClicks === 0} />
        <ChapterRejectedModal showModal={timer === 0} />
        <NextModal
          showModal={remainingClicks === 0}
          onClose={() => {
            setIsGameStarted(false);
            resetTimer();
            navigate("/endgame");
          }}
        />
        <RetryModal
          showModal={timer === 0}
          onClose={() => {
            setIsGameStarted(false);
            setRemainingClicks(clicks);
            resetTimer(); // reset timer
            setProgressWidth(0); // reset progress
            setEngagementWidth(0); // reset engagement
            setDisplayedSentence(""); // Reset the displayed sentence
          }}
        />
        <a href="#" className="btn2" onClick={handleClick}>
          _keep_going_
        </a>
        {!isGameStarted && (
          <a href="#" className="btn" onClick={handleStartClick}>
            __type_here__
          </a>
        )}
      </div>
    </div>
  );
};

export default Lvl3;
