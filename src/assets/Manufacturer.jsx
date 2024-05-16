import React from "react";
//importing navigate from react-router-dom
import { useNavigate } from "react-router-dom";
import {useEffect} from 'react';

const Manufacturer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/makingapuzzlepiece");
  };

  return (
    <div className="flex flex-col items-center text-white text-center text-xl md:text-2xl space-y-6 mt-20 px-6 py-6">
      <p>
        Sorry you could not find the puzzle piece. Take a deep breath, we have
        more options.
      </p>
      <h1 className="text-2xl md:text-4xl text-bold mb-2">
        Contact the Manufacturer
      </h1>
      <p>
        Below are a list of the most popular puzzle manufacturers.
      </p>
      <h2 className="text-xl md:text-2xl text-bold mb-2">Ravensburger</h2>
      <a
        href="https://www.ravensburger.us/service/contact-us/index.html"
        rel="nooperner noreferrer"
        className="underline"
      >
        Ravensburger Contact Us
      </a>
      <h2>Cobble Hill</h2>
      <a
        href="https://www.cobblehillpuzzles.com/pages/puzzle-issues"
        rel="nooperner noreferrer"
        className="underline"
      >
        Cobble Hill Contact Us
      </a>
      <h2>Buffalo Games</h2>
      <a
        href="https://buffalogames.com/missing-puzzle-pieces/?gad_source=1&gclid=CjwKCAjwouexBhAuEiwAtW_Zx1ANpnIA9iVzR9R3F4K4U_002syDsYKjwuBWMKClXeSua4l5lK6ZLhoCg0sQAvD_BwE"
        rel="nooperner noreferrer"
        className="underline"
      >
        Buffalo Games Contact Us
      </a>
      <h2>Pomegranate</h2>
      <a
        href="https://www.pomegranate.com/pages/contact-us?gad_source=1&gclid=CjwKCAjwouexBhAuEiwAtW_Zxx-93rvro5Ra0rX1EmjqXQcJcoTbFbiKMfypHEG8f9Om9h1rKRfLURoCy1cQAvD_BwE"
        rel="nooperner noreferrer"
        className="underline"
      >
        Pomegranate Contact Us
      </a>
      <div className="flex flex-col items-center text-white text-center text-xl md:text-2xl space-y-6 mt-20 px-6 py-6">
        <h2 className="font-bold text-green-500 ">
          I would like to make my own puzzle piece.
        </h2>
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white text-md py-2 px-4 rounded"
        >
          Making a Puzzle Piece
        </button>
      </div>
    </div>
  );
};

export default Manufacturer;
