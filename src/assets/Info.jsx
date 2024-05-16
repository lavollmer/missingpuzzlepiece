import React from "react";
import { useNavigate } from "react-router-dom";

const Info = () => {
  // useNavigate is a hook provided by react-router-dom and ways of navigating between pages
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/question");
  };

  return (
    <div>
      <h1>
        You will be shown a series of questions (one at a time) to help find
        your puzzle piece.Select the FOUND button if you find your puzzle piece.
        Select the NO Button if you do not find your puzzle piece in the
        location described.
      </h1>
    </div>
  );
};

export default Info;
