import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./assets/HomePage.jsx";
import Question from "./assets/Question.jsx";
import Result from "./assets/ResultPage.jsx";
import Manufacturer from "./assets/Manufacturer.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/question" element={<Question />} />
        <Route exact path="/manufacturer" element={<Manufacturer/>}/>
        <Route exact path="/result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
