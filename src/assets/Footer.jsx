import React from "react";
//importing navigate from react-router-dom
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/feedback");
  };

  return (
    <div>
      <div className="text-white text-center text-sm md:text-md">
        Copyright 2024. A creation by Laura Developer. An application made for
        puzzlers developer by a puzzler.
      </div>
      <div>
        <a
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white text-md py-2 px-4 rounded"
        >
          Feedback
        </a>
      </div>
    </div>
  );
};

export default Footer;
