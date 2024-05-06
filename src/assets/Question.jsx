import React from "react";
import FoundButton from "./FoundButton.jsx";
import NoButton from "./NoButton.jsx";
import { useNavigate } from "react-router-dom";

const Question = () => {
  const navigate = useNavigate();

  const handleFoundClick = () => {
    alert("Button found!");
    navigate("/result");
  };

  const handleNoClick = () => {
    alert("I did not find the piece!");
  };

  return (
    <div>
      <h1>Have you looked around your area?</h1>
      <div>
        <FoundButton onClick={handleFoundClick} label="Found" />
        <NoButton onClick={handleNoClick} label="No" />
      </div>
    </div>
  );
};

export default Question;
