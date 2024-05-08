import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  // useNavigate is a hook provided by react-router-dom and ways of navigating between pages
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/question");
  };
  return (
    <>
      <h1 className="text-blue">The Missing Puzzle Piece</h1>
      <p>Lost a puzzle piece? Let us help!</p>
      <button onClick={handleClick}>START</button>
    </>
  );
};

export default HomePage;
