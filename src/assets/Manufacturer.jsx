import React from "react";
//importing navigate from react-router-dom
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FaPuzzlePiece } from "react-icons/fa";

const Manufacturer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/makingapuzzlepiece");
  };

  return (
    <div className="flex flex-col text-white text-center text-lg md:text-2xl space-y-6 mt-20 px-6 py-6">
      <h1 className="text-xl md:text-3xl text-bold mb-2 text-blue-300">
        Contact the Manufacturer
      </h1>
      <p>
      Here is a list of the most popular puzzle makers with links to their Contact Us pages. If you can't find your favorite manufacturer here, don't worry! You can always search for them online. 
      </p>
      <div className="border bg-white p-2 rounded w-1/2 mx-auto shadow-lg">
        <div className="bg-blue-500 rounded-full p-2 inline-flex items-center justify-center">
          <FaPuzzlePiece className="text-white" />
        </div>
        <h2 className="text-lg md:text-2xl text-bold mb-2 text-black">
          Ravensburger
        </h2>
        <a
          href="https://www.ravensburger.us/service/contact-us/index.html"
          rel="nooperner noreferrer"
          className="text-blue-500"
        >
          Contact Ravensburger &rarr;
        </a>
      </div>
      <div className="border bg-white p-2 rounded w-1/2 mx-auto shadow-lg">
        <div className="bg-blue-500 rounded-full p-2 inline-flex items-center justify-center">
          <FaPuzzlePiece className="text-white" />
        </div>
        <h2 className="text-lg md:text-2xl text-bold mb-2 text-black">
          Cobble Hill
        </h2>
        <a
          href="https://www.cobblehillpuzzles.com/pages/puzzle-issues"
          rel="nooperner noreferrer"
          className="text-blue-500"
        >
          Contact Cobble Hill &rarr;
        </a>
      </div>
      <div className="border bg-white p-2 rounded w-1/2 mx-auto shadow-lg">
        <div className="bg-blue-500 rounded-full p-2 inline-flex items-center justify-center">
          <FaPuzzlePiece className="text-white" />
        </div>
        <h2 className="text-lg md:text-2xl text-bold mb-2 text-black">
          Buffalo Games
        </h2>
        <a
          href="https://buffalogames.com/missing-puzzle-pieces/?gad_source=1&gclid=CjwKCAjwouexBhAuEiwAtW_Zx1ANpnIA9iVzR9R3F4K4U_002syDsYKjwuBWMKClXeSua4l5lK6ZLhoCg0sQAvD_BwE"
          rel="nooperner noreferrer"
          className="text-blue-500"
        >
          Contact Buffalo Games &rarr;
        </a>
      </div>
      <div className="border bg-white p-2 rounded w-1/2 mx-auto shadow-lg">
        <div className="bg-blue-500 rounded-full p-2 inline-flex items-center justify-center">
          <FaPuzzlePiece className="text-white" />
        </div>
        <h2 className="text-lg md:text-2xl text-bold mb-2 text-black">
          Pomegranate
        </h2>
        <a
          href="https://www.pomegranate.com/pages/contact-us?gad_source=1&gclid=CjwKCAjwouexBhAuEiwAtW_Zxx-93rvro5Ra0rX1EmjqXQcJcoTbFbiKMfypHEG8f9Om9h1rKRfLURoCy1cQAvD_BwE"
          rel="nooperner noreferrer"
          className="text-blue-500"
        >
          Contact Pomegranate &rarr;
        </a>
      </div>
      <div className="flex flex-col items-center text-white text-center text-lg md:text-2xl space-y-6 mt-20 px-6 py-6">
        <h2>Or better yet, why not start creating your very own puzzle piece? </h2>
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white text-md py-2 px-4 rounded"
        >
          Make a Puzzle Piece
        </button>
      </div>
    </div>
  );
};

export default Manufacturer;
