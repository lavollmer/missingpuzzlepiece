import React from "react";
import { useState } from "react";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [thumbsUp, setThumbsUp] = useState(false);
  const [thumbsDown, setThumbsDown] = useState(false);

  const handleSubmit = (e) => {
    event.preventDefault();
    console.log(feedback);
  };

  return (
    <div className="flex flex-col text-white text-center text-2xl mb-6">
      <h1 className="mb-6">Feedback Form</h1>
      <p>Please feel out this feedback form so we can improve our site!</p>
      <form onSubmit={handleSubmit}>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="feedback"
          type="text"
          placeholder="Enter your feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <div className="mb-4 text-2xl">
          <p>Did you enjoy using the site?</p>
          <button type="button" onClick={() => setThumbsUp(!thumbsUp)}>
            {thumbsUp ? "👍" : "👍"}
          </button>
          <button type="button" onClick={() => setThumbsDown(!thumbsDown)}>
            {thumbsDown ? "👎" : "👎"}
          </button>
        </div>
        <div className="flex flex-col items-center justify-between">
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
