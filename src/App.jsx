import "tailwindcss/tailwind.css";
import "./App.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./assets/HomePage.jsx";
import Question from "./assets/Question.jsx";
import Result from "./assets/ResultPage.jsx";
import Manufacturer from "./assets/Manufacturer.jsx";
import MakingPiece from "./assets/MakingPiece.jsx";
import Footer from "./assets/Footer.jsx";
import Feedback from "./assets/Feedback.jsx";
import FAQ from "./assets/FAQ.jsx";
import Info from "./assets/Info.jsx";

function App() {
  return (
    <div className="bg-black min-h-screen w-screen space-y-4">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/question" element={<Question />} />
        <Route exact path="/manufacturer" element={<Manufacturer />} />
        <Route exact path="/makingapuzzlepiece" element={<MakingPiece />} />
        <Route exact path="/result" element={<Result />} />
        <Route exact path="/feedback" element={<Feedback />} />
        <Route exact path="/faq" element={<FAQ />} />
        <Route exact path="/info" element={<Info />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
