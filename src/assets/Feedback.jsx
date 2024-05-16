import React from "react";
import { useState } from "react";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [thumbsUp, setThumbsUp] = useState(false);
  const [thumbsDown, setThumbsDown] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(feedback);

    const response = await fetch(
      "https://findmypuzzlepiece.herokuapp.com/feedback",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ feedback: feedback }),
      }
    );

    if (response.ok) {
      setFeedback("");
      alert("Feedback submitted successfully!");
    } else {
      alert("Feedback submission failed.");
    }
  };

  return (
    <div className="flex flex-col text-white text-center text-xl m-10">
      <h1 className="text-bold text-2xl text-green-200">Feedback Form</h1>
      <p className="mb-4">
        Please fill out this feedback form so we can improve our site!
      </p>
      <div className="mb-4 text-xl">
        <p>Did you enjoy using the site? (select one)</p>
        <button type="button" onClick={() => setThumbsUp(!thumbsUp)}>
          {thumbsUp ? "Yes👍" : "Yes👍"}
        </button>
        <button type="button" onClick={() => setThumbsDown(!thumbsDown)}>
          {thumbsDown ? "No👎" : "No👎"}
        </button>
      </div>
      <p className="mb-4">
        How was your experience with our site? Any suggestions?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="feedback"
          type="text"
          placeholder="Enter your feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <div className="flex flex-col items-center justify-between mb-4">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Feedback;
