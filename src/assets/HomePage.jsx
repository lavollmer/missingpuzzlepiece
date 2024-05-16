import React from "react";
import { useNavigate } from "react-router-dom";
import {useEffect} from "react";

const HomePage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // useNavigate is a hook provided by react-router-dom and ways of navigating between pages
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/info");
  };

  const handleFAQClick = () => {
    navigate("/faq");
  };

  return (
    <>
      <div className="flex flex-col items-center text-white text-center text-xl md:text-2xl space-y-6 mt-20 px-6 py-6">
        <h1 className="text-4xl md:text-4xl text-bold mb-2">Find My <br/> Puzzle Piece</h1>
        <p className="font-bold text-xl md:text-2xl text-green-500 mb-6">A Free Application</p>
        <p className="text-xl md:text-2xl mb-8">Lost a puzzle piece? Let us help!</p>
        <button onClick={handleClick} className='bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-2 px-10 rounded'>Start</button>
        <button onClick={handleFAQClick} className='bg-purple-500 hover:bg-purple-700 text-white text-xl font-bold py-2 px-10 rounded'>FAQ</button>
      </div>
    </>
  );
};

export default HomePage;
