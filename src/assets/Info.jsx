import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Info = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // useNavigate is a hook provided by react-router-dom and ways of navigating between pages
  const navigate = useNavigate();

  const handleQuestionClick = () => {
    navigate("/question");
  };

  const handleManufacturerClick = () => {
    navigate("/Manufacturer");
  };

  const handleMakeAPieceClick = () => {
    navigate("/makingapuzzlepiece");
  };

  return (
    <div className="flex flex-col text-white items-center m-10 space-y-6 font-montserrat font-regular">
      <h1 className="text-2xl font-bold mb-6">Before You Begin</h1>
      <h2 className="text-lg mb-10">
        You will be shown a series of 19 questions (one at a time) to help find
        your puzzle piece. Results are best if you review each question and
        search for your puzzle piece in the location described.
      </h2>
      <h2 className="text-lg mb-10">
        Select the FOUND button if you have found your puzzle piece.
      </h2>
      <h2 className="text-lg mb-10">
        Select the NO button if you have not found your puzzle piece in the
        location described. The application will direct you to the next location question.
      </h2>
      <h2 className="text-lg mb-10">
        If you have went through all location questions, you will be given other
        resources to replace or create your missing piece.
      </h2>
      <button
        onClick={handleQuestionClick}
        className="bg-blue-500 hover:bg-blue-700 text-white text-lg py-2 px-4 rounded"
      >
        Start Location Questions
      </button>

      <h2 className="text-lg mb-4">
        If you would like to skip the location questions and move to the next section - select one of the buttons below.
      </h2>

      <button
        onClick={handleManufacturerClick}
        className="bg-blue-500 hover:bg-blue-700 text-white text-lg py-2 px-4 rounded"
      >
        Contact Manufacturer
      </button>
      <button
        onClick={handleMakeAPieceClick}
        className="bg-blue-500 hover:bg-blue-700 text-white text-lg py-2 px-4 rounded"
      >
        Make a Puzzle Piece
      </button>
    </div>
  );
};

export default Info;
