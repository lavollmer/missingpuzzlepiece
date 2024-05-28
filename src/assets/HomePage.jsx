import React from "react";
import { useNavigate } from "react-router-dom";
import {useEffect} from "react";
import {useState} from "react";
import Modal from './Modal.jsx';

const HomePage = () => {
  //notification modal will open when the page loads as the intial state is true
const [showModal, setShowModal] = useState(true);

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
    
      <div className="flex flex-col items-center justify-center text-center space-y-6 m-6 text-white text-lg md:text-2xl  font-montserrat font-medium">
        <h1 className="text-2xl">Find My Puzzle Piece</h1>
        <p className="font-bold text-green-500 mb-6">A Free Application</p>
        <p className=" mb-8">Lost a puzzle piece? Let us help!</p>
        <button onClick={handleClick} className='bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-2 px-10 rounded'>Start</button>
        <button onClick={handleFAQClick} className='bg-purple-500 hover:bg-purple-700 text-white text-xl font-bold py-2 px-10 rounded'>FAQ</button>
        {showModal && <Modal setShowModal={setShowModal} />}
      </div>
    </>
  );
};

export default HomePage;
