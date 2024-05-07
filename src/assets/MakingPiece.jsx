import React from "react";
import { useNavigate} from "react-router-dom";

const MakingPiece = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/result");
    }

    const handleHomeClick = () => {
        navigate ("/");
    }

  return (
    <div>
      <h1>Making a Puzzle Piece</h1>
      <p>
        There are services on the internet, Youtube videos, and articles of how
        to make a puzzle piece.
      </p>
      <p>Below are a sample of instructions on how to make a puzzle piece.</p>
      <h2>Materials</h2>
      <ul>
        <li>Cardboard</li>
        <li>Scissors or Box cutter</li>
        <li>Glue</li>
        <li>Pen</li>
        <li>Marker</li>
      </ul>
      <h2>Instructions</h2>
      <ol>
        <li>
          Find a piece of cardboard that is similar in thickness to the puzzle
          piece you are missing.
        </li>
        <li>
          Place the puzzle piece on top of the cardboard and trace around the
          piece with a pen or marker.
        </li>
        <li>
          Cut out the shape of the puzzle piece with scissors or a box cutter
          safely.
        </li>
        <li>Color or add the image of the piece with glue to the cardboard.</li>
      </ol>
      <p>
        Let us know if you made the puzzle piece or decided it was time to let
        it go.
      </p>
      <div>
        <button onClick={handleClick}>Made the puzzle piece</button>
        <button onClick={handleHomeClick}>Home Page</button>
      </div>
    </div>
  );
};

export default MakingPiece;
