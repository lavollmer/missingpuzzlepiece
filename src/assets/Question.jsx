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
      "Look around your physical location for the puzzle piece.",
      "Have you checked under the table?",
      "Have you checked the puzzle packaging?",
      "Have you checked the plastic wrap that the puzzle comes in?",
      "Have you checked the puzzle box?",
      "Have you checked the puzzle bag?",
      "Have you checked under the chairs?",
      "Have you checked under the couch?",
      "Have you checked your pockets?",
      "Have you checked the counter?",
      "Have you checked every room that the puzzle was physically in?",
      "Have you vacuumed the area? Have you checked the vacuum bag?",
      "Have you checked the trash can? Have you checked the trash bag?",
      "Have you checked the laundry basket?",
      "If you have children, have you checked their toy box?",
      "If you have a pet, have you checked their bed?",
      "If you have a pet, have you checked their paw?",
      "If others are aware you are working on the puzzle, is someone pulling a prank on you?",
      "If all the other pieces are placed, are they where they belong on the puzzle?",
    ];

    const handleNoClick = () => {
      // If there are more questions, show the next question
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestion(currentQuestionIndex + 1);
      } else {
        //if the condition is false, there are no more questions to display
        alert("I did not find the piece!");
        navigate("/manufacturer");
      }
    };

    return (
      <>
        <div className="text-white text-center">
          <h1>{questions[currentQuestionIndex]}</h1>
          <div>
            <FoundButton onClick={handleFoundClick} label="Found" />
            <NoButton onClick={handleNoClick} label="No" />
          </div>
        </div>
      </>
    );
  }

export default Question;
