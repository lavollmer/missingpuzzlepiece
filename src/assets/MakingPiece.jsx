import React from "react";
import { useNavigate } from "react-router-dom";
import {useEffect} from "react";

const MakingPiece = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/result");
  };

  const handleHomeClick = () => {
    navigate("/");
  };



  return (
    <div className="flex flex-col text-white text-xl md:text-2xl space-y-6 mt-6 px-6 py-6">
      <h1 className="text-2xl md:text-4xl text-center text-bold text-blue-300 mb-2">
        Making a Puzzle Piece
      </h1>
      <p>
        There are various online services, informative YouTube videos, and
        helpful articles available that provide guidance on creating your own
        puzzle piece. Below, you'll find a selection of instructions to help you
        make your very own puzzle piece
      </p>
      <div className="flex flex-col text-left">
        <h2 className="text-xl md:text-2xl text-bold mb-2 text-blue-300">
          Materials
        </h2>
        <ul className="text-white">
          <ol>Cardboard</ol>
          <ol>Scissors or Box cutter</ol>
          <ol>Glue</ol>
          <ol>Pen</ol>
          <ol>Marker</ol>
        </ul>
      </div>
      <h2 className="text-xl md:text-2xl text-bold mb-2 text-blue-300">
        Instructions
      </h2>
      <ol className="space-y-4">
        <li>
          1. Find a piece of cardboard that is similar in thickness to the
          puzzle piece you are missing. The ideal thickness for a puzzle backing
          is around one-eighth inch (0.3 cm).
        </li>
        <li>
          2. Place the cardboard below the puzzle and trace around the empty
          section with the missing piece using a pen or marker.
        </li>
        <li>
          3. Cut out the shape of the puzzle piece from the cardboard using
          scissors or a box cutter. It may be helpful to use small scissors for
          cutting out smaller pieces.
        </li>
        <li>
          4. Color or add the image of the missing puzzle piece to the cardboard
          using glue . You can add the image by gluing a printed picture or
          drawing onto the cardboard.
        </li>
        <li>
          5. Let the glue dry completely before using the puzzle piece. To
          ensure a good bond, you can place a heavy object, such as a book or
          box, on top of the puzzle while it dried.
        </li>
        <li>
          6.Once the glue has dried, remove any uneven edges or excess cardboard
          that may be sticking out.
        </li>
      </ol>
      <p className="flex flex-col items-center">
        Let us know if you made the puzzle piece!
      </p>
      <div className="flex flex-col space-y-6">
        <button
          onClick={handleClick}
          className="bg-green-500 hover:bg-green-700 font-bold text-white text-lg py-2 px-4 rounded"
        >
          Created the puzzle piece!
        </button>
        <button
          onClick={handleHomeClick}
          className="bg-blue-500 hover:bg-blue-700 font-bold text-white text-lg  py-2 px-4 rounded"
        >
          Return Home
        </button>
      </div>
    </div>
  );
};

export default MakingPiece;
