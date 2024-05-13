import React from "react";
import { useNavigate } from "react-router-dom";

const FAQ = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center text-white text-lg m-10">
      <h1 className="text-green-300">Frequently Asked Questions (FAQ)</h1>
      <div className="flex flex-col items-left">
        <h2 className="text-blue-200">What is Find My Puzzle Piece?</h2>
        <p>
          Find My Puzzle Piece is a web application that helps users find a
          missing puzzle piece. 
        </p>
        <h2 className="text-blue-200">How does Find My Puzzle Piece work?</h2>
        <p>Find My Puzzle Piece is a web application that helps users find a
          missing puzzle piece. The user will go through a series of most common places where a puzzle piece is lost. If unable to find with the questions listed, then the user will be directed to a manufacturer contact site.</p>
      </div>
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white text-md py-2 px-4 rounded"
      >
        Return Home
      </button>
    </div>
  );
};

export default FAQ;
