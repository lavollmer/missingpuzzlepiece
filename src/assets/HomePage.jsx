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
      <div className="bg-black h-screen w-screen text-white text-center">
        <h1 className="text-xl text-bold">The Missing Puzzle Piece</h1>
        <p className="text-sm">A Free Application</p>
        <p className="text-md">Lost a puzzle piece? Let us help!</p>
        <button onClick={handleClick} className='bg-blue-500 hover:bg-blue-700 text-white text-md font-bold py-2 px-4 rounded'>Start</button>
      </div>
    </>
  );
};

export default HomePage;
