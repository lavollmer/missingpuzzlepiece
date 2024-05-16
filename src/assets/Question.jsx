import React, { useState } from "react";
import FoundButton from "./FoundButton.jsx";
import NoButton from "./NoButton.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Question = () => {
  const navigate = useNavigate();

  //currentQuestionIndex is the current question that is being displayed
  const [currentQuestionIndex, setCurrentQuestion] = useState(0);

  //function that counts how many times the found button has been clicked
  const [foundClickCount, setFoundClickCount] = useState(0);

  const handleFoundClick = () => {
    let newCount = foundClickCount + 1;
    setFoundClickCount(newCount);
    console.log(`Found Click Count: , New count: ${newCount}`);
    navigate("/result", { state: { foundClickCount: newCount } });
  };

    //variable represents an array of questions used in the quiz
    const questions = [
      "To start, look around your physical location for the puzzle piece.",
      "Look under the table.",
      "Look at the packaging the puzzle came in.",
      "Check the plastic wrap the puzzle came in (if applicable).",
      "Check the puzzle box.",
      "Check your puzzle bag (if applicable).",
      "Look under the chairs around you or in the cushions.",
      "Look under the couch or in the cushions.",
      "Check your pockets or have others check the pockets of those around you.",
      "Check any counters located around you.",
      "Check every room the puzzle was located in.",
      "If you have vacuumed, check the vacuum bag or canister.",
      "Check the trash can or recycling bin.",
      "Check the laundry basket.",
      "If you have children, check their toy box.",
      "If you have a pet, check their bed.",
      "If you have a pet, check their paw and fur.",
      "If others are aware you are working on the puzzle, ask if they are pulling a prank on you.",
      "If all the other pieces are placed, check that the pieces are in the right place.",
      "Check that you completed the puzzle minus the missing pieces. If missing pieces still, proceed."
    ];

    const handleNoClick = () => {
      // If there are more questions, show the next question
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestion(currentQuestionIndex + 1);
      } else {
        //if the condition is false, there are no more questions to display
        navigate("/manufacturer");
      }
    };

    return (
      <>
        <div className="flex flex-col items-center text-white text-center text-2xl md:text-3xl space-y-6 mt-20 px-6 py-6">
          <h1>{questions[currentQuestionIndex]}</h1>
          <div className="flex flex-col space-y-6">
            <FoundButton onClick={handleFoundClick} label="Found" />
            <NoButton onClick={handleNoClick} label="No" />
          </div>
        </div>
      </>
    );
  }

export default Question;
