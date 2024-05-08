import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ResultPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const foundClickCount = location.state ? location.state.foundClickCount : 0;
  console.log("Found Click Count: ", foundClickCount);

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center text-white text-center text-xl md:text-2xl space-y-6 mt-20 px-6 py-6">
      <h1>Congrats!</h1>
      <h1>Thank you for using the Missing Puzzle Piece application!</h1>
      <div>
        <h2>We have saved {foundClickCount} of puzzle pieces!</h2>
      </div>
      <button onClick={handleClick} className='bg-blue-500 hover:bg-blue-700 text-white text-md py-2 px-4 rounded'>Return Home</button>
    </div>
  );
};

export default ResultPage;
