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
      <div className="bg-black min-h-screen">
        <h1 className="text-white text-center mt-50">The Missing Puzzle Piece</h1>
        <p className="text-white text-center">
          Lost a puzzle piece? Let us help!
        </p>
        <button className="text-white" onClick={handleClick}>START</button>
      </div>
    </>
  );
};

export default HomePage;
