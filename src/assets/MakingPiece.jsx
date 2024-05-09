import React from "react";
import { useNavigate } from "react-router-dom";

const MakingPiece = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/result");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center text-white text-xl md:text-2xl space-y-6 mt-20 px-6 py-6">
      <h1 className="text-2xl md:text-4xl text-bold mb-2">
        Making a Puzzle Piece
      </h1>
      <p>
        There are services on the internet, Youtube videos, and articles of how
        to make a puzzle piece. Below are a sample of instructions on how to
        make a puzzle piece.
      </p>
      <h2 className="text-xl md:text-2xl text-bold mb-2">Materials</h2>
      <div>
        <ul className="text-white">
          <ol>Cardboard</ol>
          <ol>Scissors or Box cutter</ol>
          <ol>Glue</ol>
          <ol>Pen</ol>
          <ol>Marker</ol>
        </ul>
      </div>
      <h2 className="text-xl md:text-2xl text-bold mb-2 text-left">
        Instructions
      </h2>
      <ol>
        <li>
          1. Find a piece of cardboard that is similar in thickness to the puzzle
          piece you are missing.
        </li>
        <li>
          2. Place the cardboard below the puzzle and trace around the
          empty section with the piece with a pen or marker.
        </li>
        <li>
          3. Cut out the shape of the puzzle piece with scissors or a box cutter
          safely.
        </li>
        <li>4. Color or add the image of the piece with glue to the cardboard.</li>
      </ol>
      <p>
        Let us know if you made the puzzle piece.
      </p>
      <div className="flex flex-col space-y-6">
        <button
          onClick={handleClick}
          className="bg-green-500 hover:bg-green-700 text-white text-lg py-2 px-4 rounded"
        >
          Created the puzzle piece!
        </button>
        <button
          onClick={handleHomeClick}
          className="bg-blue-500 hover:bg-blue-700 text-white text-lg  py-2 px-4 rounded"
        >
          Home Page
        </button>
      </div>
    </div>
  );
};

export default MakingPiece;
