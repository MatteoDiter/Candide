import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { wordArray1 } from "./storyline";
import ChapterApprovedModal from "../modals/approved";
import ChapterRejectedModal from "../modals/rejected";
import NextModal from "../modals/next";
import RetryModal from "../modals/retry";
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
      // set a delay before navigate or will cause re-rendering issue // cant render at the same time
      setIsGameStarted(false); // Reset the game state
      // setTimeout(() => {
      //   // alert("Chapter Rejected");
      //   setRemainingClicks(clicks);
      //   resetTimer(); // reset timer
      //   setProgressWidth(0); // reset progress
      //   setEngagementWidth(0); // reset engagement
      //   setDisplayedSentence(""); // Reset the displayed sentence
      // }, 10000);
    }
  }, [isGameStarted, timer, clicks, remainingClicks]);

  // game win logic by clicks
  useEffect(() => {
    if (isGameStarted && remainingClicks === 0) {
      // set a delay before navigate or will cause re-rendering issue // cant render at the same time
      setIsGameStarted(false); // Reset the game state
      // setTimeout(() => {
      //   // alert("Chapter Approved");
      //   resetTimer();
      //   navigate("/lvl2");
      // }, 10000);
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
        <h3 className="title">Chapter I: The Lovers</h3>
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
        {remainingClicks !== clicks && (
          <p className="paragraph1">{displayedSentence}</p>
        )}
        {/* Modals*/}
        <ChapterApprovedModal
          showModal={remainingClicks === 0}
          // onClose={() => {
          //   resetTimer();
          //   setIsGameStarted(false);
          //   navigate("/lvl2");
          // }}
        />
        <ChapterRejectedModal
          showModal={timer === 0}
          // onClose={() => {
          //   setRemainingClicks(clicks);
          //   resetTimer();
          //   setProgressWidth(0);
          //   setIsGameStarted(false);
          //   setDisplayedSentence("");
          // }}
        />
        <NextModal
          showModal={remainingClicks === 0}
          onClose={() => {
            setIsGameStarted(false);
            resetTimer();
            navigate("/lvl2");
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
        {/* <p>Time remaining: {timer} seconds</p> */}
        <a href="#" className="btn2" onClick={handleClick}>
          _keep_going_
        </a>
        {!isGameStarted && timer !== 0 && (
          <a href="#" className="btn" onClick={handleStartClick}>
            __type_here__
          </a>
        )}
      </div>
    </div>
  );
};

export default Lvl1;
