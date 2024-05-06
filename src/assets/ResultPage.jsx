import React from "react";
import { useNavigate } from "react-router-dom";

const ResultPage = () => {
  const navigate= useNavigate();

  const handleClick = () => {
    navigate("/");
  }

  return (
    <div>
      <h1>Congrats! Continue puzzling.</h1>
      <h1>Thank you for using the Missing Puzzle Piece application!</h1>
      <div>This many puzzle pieces saved!</div>
      <button onClick={handleClick}>Return Home</button>
    </div>
  );
};

export default ResultPage;
