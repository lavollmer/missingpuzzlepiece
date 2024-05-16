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
      <div className="flex flex-col items-center text-center text-xs md:text-md">
        <p className="text-white">
          Copyright &copy; 2024. A creation by Laura Developer | An application
          made for puzzlers developed by a puzzler |
        </p>
        <a onClick={handleClick} className="text-green-300 hover:text-yellow-100">
          ? Have Feedback for Me ?
        </a>
      </div>
    </div>
  );
};

export default Footer;
