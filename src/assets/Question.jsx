import React from "react";
import FoundButton from "./FoundButton.jsx";
import NoButton from "./NoButton.jsx";

const Question = () => {
  const handleFoundClick = () => {
    alert("Button found!");
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
