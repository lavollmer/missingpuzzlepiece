import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center text-white text-lg m-10">
      <h1 className="text-green-300 mb-6 font-bold">
        Frequently Asked Questions (FAQ)
      </h1>
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-blue-200 mb-2">
          What is the Find My Puzzle Piece Application?
        </h2>
        <p className="mb-4">
          Find My Puzzle Piece is a web application that helps users find a
          missing puzzle piece. Many puzzle pieces go missing and there are not
          many resources to help find them.
        </p>
        <h2 className="text-blue-200 mb-2">
          How does Find My Puzzle Piece Application work?
        </h2>
        <p className="mb-4">
          Find My Puzzle Piece is a web application that helps users find a
          missing puzzle piece. The user will go through a series of most common
          places where a puzzle piece is lost. If unable to find with the
          questions listed, then the user will be directed to a manufacturer
          contact site. If unable to contact the manufacturer, the user will be
          directed to making a puzzle piece.
        </p>
        <h2 className="text-blue-200 mb-2">
          Why was Find My Puzzle Piece created?
        </h2>
        <p className="mb-4">
          Find My Puzzle Piece was created because the developer saw a need for
          it in the puzzle community.
        </p>
        <h2 className="text-blue-200 mb-2">
          Does Fine My Puzzle Piece cost any money?
        </h2>
        <p className="mb-2">
          Find My Puzzle Piece is a FREE web application resource. If you
          enjoyed your experience, please submit feedback to help improve the
          product.
        </p>
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
