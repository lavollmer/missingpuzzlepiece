import React, { useState } from "react";
import FoundButton from "./FoundButton.jsx";
import NoButton from "./NoButton.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Question = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    "Look around your immediate surroundings for the puzzle piece.",
    "Look under the table.",
    "Check the plastic wrap the puzzle came in (if applicable).",
    "Check the puzzle box.",
    "Look under or around the chairs, including the cushions.",
    "Look under the couch or in the cushions.",
    "Check your pockets or have others check the pockets of those around you.",
    "Check any counters located around you.",
    "Check every room the puzzle was located in while working on the puzzle.",
    "If you have vacuumed, check the vacuum bag or canister.",
    "Check the trash can or recycling bin.",
    "Check the laundry basket.",
    "If others are aware you are working on the puzzle, ask if they are pulling a prank on you.",
    "If all the other pieces are placed, check that the pieces are in the right place.",
    "Check that completed the puzzle minus missing pieces. If you are still missing pieces, select the NO button. ",
    "If you have children, check their toy box.",
    "If you have a pet, check their bed.",
    "If you have a pet, check their paw and fur.",
    "Determine any other areas that a puzzle piece may have gone missing. If you have checked all areas, select the NO button.",
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
      <div className="flex flex-col items-center text-white text-center text-xl md:text-3xl space-y-6 px-6 py-6 font-montserrat font-regular">
        <p className="text-blue-300 text-xl">
          QUESTION {currentQuestionIndex + 1} of {questions.length}
        </p>
        <h1>{questions[currentQuestionIndex]}</h1>
        <div className="flex flex-col space-y-6">
          <FoundButton onClick={handleFoundClick} label="Found" />
          <NoButton onClick={handleNoClick} label="No" />
        </div>
      </div>
    </>
  );
};

export default Question;
