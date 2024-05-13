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
        Copyright &copy; 2024. A creation by Laura Developer |
        <p> An application made for
        puzzlers developed by a puzzler |</p>
        <a onClick={handleClick} className="text-green hover:text-yellow-100">? Have Feedback for Me ?</a>
        
      </div>
    </div>
  );
};

export default Footer;
