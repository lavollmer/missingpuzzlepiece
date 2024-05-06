import React, { useState } from "react";
import FoundButton from "./FoundButton.jsx";
import NoButton from "./NoButton.jsx";
import { useNavigate } from "react-router-dom";

const Question = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestion] = useState(0);

  const handleFoundClick = () => {
    alert("Button found!");
    navigate("/result");
  };

  const questions = [
    "Have you looked around your area?",
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
    "Pause, take a moment to breath."
  ];

  const handleNoClick = () => {
    alert("I did not find the piece!");
    if (currentQuestionIndex < questions.length -1) {
      setCurrentQuestion(currentQuestionIndex + 1);
    } else {
      alert("I did not find the piece!");
    }
  };

  return (
    <>
      {questions.map((questions, index) => (
        <div key={index}>
          <h1>{questions}</h1>
          <div>
            <FoundButton onClick={handleFoundClick} label="Found" />
            <NoButton onClick={handleNoClick} label="No" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Question;
