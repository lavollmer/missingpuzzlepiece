import React from "react";
import { useNavigate } from "react-router-dom";

const Info = () => {
  // useNavigate is a hook provided by react-router-dom and ways of navigating between pages
  const navigate = useNavigate();

  const handleQuestionClick = () => {
    navigate("/question");
  };

  return (
    <div className="flex flex-col text-white items-center justify-content m-6">
      <h1 className="text-xl font-bold mb-10">Before You Begin</h1>
      <h2 className="text-xl mb-10">
        You will be shown a series of questions (one at a time) to help find
        your puzzle piece. Results are best if you review each question and search for your puzzle piece in the location described.
      </h2>
      <h2 className="text-xl mb-10">Select the FOUND button if you have found your puzzle piece.</h2>
      <h2 className="text-xl mb-10">Select the NO button if you have not found your puzzle piece in the location described.</h2>
      <button onClick={handleQuestionClick} className='bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-2 px-8 rounded'>START</button>
    </div>
  );
};

export default Info;
