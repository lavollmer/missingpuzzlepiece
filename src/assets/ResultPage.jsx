import React from "react";
import { FoundContext } from "../FoundContext.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ResultPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { foundCount } = React.useContext(FoundContext);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const handleFeedbackClick = () => {
    navigate("/feedback");
  };

  return (
    <div className="flex flex-col items-center text-white text-center text-xl md:text-2xl space-y-6 mt-20 px-6 py-6">
      <h1 className="text-green-200 text-4xl">Congrats!</h1>
      <h1>We have saved {foundCount} puzzles and counting!</h1>
      <h1>Thank you for using the Find My Puzzle Piece application!</h1>
      <div>
        <h2>I hope you enjoyed it!</h2>
      </div>
      <button
        onClick={handleFeedbackClick}
        className="bg-yellow-500 hover:bg-yellow-700 text-white text-md py-2 px-4 rounded"
      >
        Feedback
      </button>
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white text-md py-2 px-4 rounded"
      >
        Return Home
      </button>
    </div>
  );
};

export default ResultPage;
