import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./assets/HomePage.jsx";
import Question from "./assets/Question.jsx";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/question">
          <Question />
        </Route>
      </Switch>
    </>
  );
}

export default App;
