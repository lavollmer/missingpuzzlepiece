import React from "react";
import { FoundContext } from "../FoundContext.jsx";
import {useNavigate} from "react-router-dom";

const FoundButton = ({ onClick, label }) => {
  const { incrementFound } = React.useContext(FoundContext);

  const handleClick = () => {
    incrementFound();
    onClick();
  }


  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-green-500 hover:bg-green-700 text-white font-bold text-lg md:text-2xl py-4 px-8 rounded"
      >
        {label}
      </button>
    </div>
  );
};

export default FoundButton;
