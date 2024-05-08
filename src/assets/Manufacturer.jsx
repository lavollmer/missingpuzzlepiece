import React from "react";
//importing navigate from react-router-dom
import { useNavigate } from "react-router-dom";

const Manufacturer = () => {
const navigate = useNavigate ();

const handleClick = () => {
    navigate ("/makingapuzzlepiece");
}

  return (
    <div className="flex flex-col items-center text-white text-center text-xl md:text-2xl space-y-6 mt-20 px-6 py-6">
      <h1 className="text-2xl md:text-4xl text-bold mb-2">Contact the Manufacturer</h1>
      <p>Sorry you could not find the puzzle piece. Take a deep breath, we have more options.</p>
      <p>
        Below are a list of the most popular puzzle manufacturers in the USA.
      </p>
      <h2 className="text-xl md:text-2xl text-bold mb-2">Ravensburger</h2>
      <a
        href="https://www.ravensburger.us/service/contact-us/index.html"
        rel="nooperner noreferrer"
      >
        Ravensburger Contact Us
      </a>
      <h2>Cobble Hill</h2>
      <a
        href="https://www.cobblehillpuzzles.com/pages/puzzle-issues"
        rel="nooperner noreferrer"
      >
        Cobble Hill Contact Us
      </a>
      <h2>Buffalo Games</h2>
      <a
        href="https://buffalogames.com/missing-puzzle-pieces/?gad_source=1&gclid=CjwKCAjwouexBhAuEiwAtW_Zx1ANpnIA9iVzR9R3F4K4U_002syDsYKjwuBWMKClXeSua4l5lK6ZLhoCg0sQAvD_BwE"
        rel="nooperner noreferrer"
      >
        Buffalo Games Contact Us
      </a>
      <h2>Pomegranate</h2>
      <a
        href="https://www.pomegranate.com/pages/contact-us?gad_source=1&gclid=CjwKCAjwouexBhAuEiwAtW_Zxx-93rvro5Ra0rX1EmjqXQcJcoTbFbiKMfypHEG8f9Om9h1rKRfLURoCy1cQAvD_BwE"
        rel="nooperner noreferrer"
      >
        Pomegranate Contact Us
      </a>
      <div>
        <h2>Need More Help</h2>
        <p className="font-bold text-green-500">I would like to make my own puzzle piece.</p>
        <button onClick={handleClick} className='bg-blue-500 hover:bg-blue-700 text-white text-md py-2 px-4 rounded'>Making a Puzzle Piece</button>
      </div>
    </div>
  );
};

export default Manufacturer;
