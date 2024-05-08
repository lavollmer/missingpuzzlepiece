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
      <div className="flex flex-col items-center text-white text-center text-xl md:text-2xl space-y-6 mt-20 px-6 py-6">
        <h1 className="text-2xl md:text-4xl text-bold mb-2">The Missing Puzzle Piece</h1>
        <p className="text-md md:text-lg text-green-500 mb-6">A Free Application</p>
        <p className="text-lg md:text-xl mb-8">Lost a puzzle piece? Let us help!</p>
        <button onClick={handleClick} className='bg-blue-500 hover:bg-blue-700 text-white text-md font-bold py-2 px-4 rounded'>Start</button>
      </div>
    </>
  );
};

export default HomePage;
