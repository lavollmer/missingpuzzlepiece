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
      <div className="flex flex-col items-center text-center text-sm md:text-lg m-10 font-montserrat font-regular">
        <p className="text-white">
          Copyright &copy; 2024. All rights reserved.
        </p>
        <p className="text-white text-xs">
        A creation by Laura Developer. An application made for puzzlers developed by a puzzler.
        </p>
        <a
          onClick={handleClick}
          className="text-green-400 hover:text-green-600 cursor-pointer"
        >
           Have Feedback for Me ?
        </a>
      </div>
    </div>
  );
};

export default Footer;
