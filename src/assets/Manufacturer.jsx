import React from "react";
//importing navigate from react-router-dom
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Manufacturer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/makingapuzzlepiece");
  };

  return (
    <div className="flex flex-col text-white text-center text-xl md:text-2xl space-y-6 mt-20 px-6 py-6">
      <h1 className="text-2xl md:text-3xl text-bold mb-2 text-blue-300">
        Contact the Manufacturer
      </h1>
      <p>
        Below are a list of the most popular puzzle manufacturers in the USA. If
        your manufacturer is not listed, please Google your manufacturer or
        proceed to making a puzzle piece.
      </p>
      <div className="border bg-white p-2 rounded w-1/2 mx-auto shadow-lg">
        <h2 className="text-xl md:text-2xl text-bold mb-2 text-black">
          Ravensburger
        </h2>
        <a
          href="https://www.ravensburger.us/service/contact-us/index.html"
          rel="nooperner noreferrer"
          className="underline text-blue-500"
        >
          Ravensburger Contact Us
        </a>
      </div>
      <div className="border bg-white p-2 rounded w-1/2 mx-auto shadow-lg">
        <h2 className="text-xl md:text-2xl text-bold mb-2 text-black">
          Cobble Hill
        </h2>
        <a
          href="https://www.cobblehillpuzzles.com/pages/puzzle-issues"
          rel="nooperner noreferrer"
          className="underline text-blue-500"
        >
          Cobble Hill Contact Us
        </a>
      </div>
      <div className="border bg-white p-2 rounded w-1/2 mx-auto shadow-lg">
        <h2 className="text-xl md:text-2xl text-bold mb-2 text-black">
          Buffalo Games
        </h2>
        <a
          href="https://buffalogames.com/missing-puzzle-pieces/?gad_source=1&gclid=CjwKCAjwouexBhAuEiwAtW_Zx1ANpnIA9iVzR9R3F4K4U_002syDsYKjwuBWMKClXeSua4l5lK6ZLhoCg0sQAvD_BwE"
          rel="nooperner noreferrer"
          className="underline text-blue-500"
        >
          Buffalo Games Contact Us
        </a>
      </div>
      <div className="border bg-white p-2 rounded w-1/2 mx-auto shadow-lg">
        <h2 className="text-xl md:text-2xl text-bold mb-2 text-black">
          Pomegranate
        </h2>
        <a
          href="https://www.pomegranate.com/pages/contact-us?gad_source=1&gclid=CjwKCAjwouexBhAuEiwAtW_Zxx-93rvro5Ra0rX1EmjqXQcJcoTbFbiKMfypHEG8f9Om9h1rKRfLURoCy1cQAvD_BwE"
          rel="nooperner noreferrer"
          className="underline text-blue-500"
        >
          Pomegranate Contact Us
        </a>
      </div>
      <div className="flex flex-col items-center text-white text-center text-xl md:text-2xl space-y-6 mt-20 px-6 py-6">
        <h2>I would like to make my own puzzle piece.</h2>
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
