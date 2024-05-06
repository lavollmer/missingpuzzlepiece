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
