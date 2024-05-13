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
      <div className="flex flex-col items-left ">
        <h2>What is Find My Puzzle Piece?</h2>
        <p>
          Find My Puzzle Piece is a web application that helps users find a
          missing puzzle piece. Users can upload an image of their puzzle and
          the application will search for a matching puzzle piece in its
          database.
        </p>
        <h2>How does Find My Puzzle Piece work?</h2>
        <p></p>
        <h2>How accurate is Find My Puzzle Piece?</h2>
        <p></p>
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
