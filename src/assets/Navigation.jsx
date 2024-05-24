import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BrowserRouter, Link } from "react-router-dom";
import { RiCloseLargeFill } from "react-icons/ri";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden block text-white p-10"
      >
        <RxHamburgerMenu size={30} />
      </button>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 transform transition-transform duration-200 ease-in-out ${
          isOpen ? "translate-y-0" : "translate-y-full"
        } md:relative md:translate-y-0 md:bg-transparent`}
      >
        <div className="bg-white h-full md:flex md:items-center md:justify-center md:h-auto md:bg-transparent">
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden block text-black"
          >
            <RiCloseLargeFill size={30} />
          </button>
          <ul className="md:flex md:space-x-6">
            <li>
              <Link to="/" className="block p-4 text-black" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/question" className="block p-4 text-black" onClick={() => setIsOpen(false)}>
                Questions
              </Link>
            </li>
            <li>
              <Link to="/manufacturer" className="block p-4 text-black" onClick={() => setIsOpen(false)}>
                Contact Manufacturer
              </Link>
            </li>
            <li>
              <Link to="/makingapuzzlepiece" className="block p-4 text-black" onClick={() => setIsOpen(false)}>
                Make a Puzzle Piece
              </Link>
            </li>
            <li>
              <Link to="/feedback" className="block p-4 text-black" onClick={() => setIsOpen(false)}>
                Feedback
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
