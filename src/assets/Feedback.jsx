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
    <div className="text-white">
      <h1>Feedback Form</h1>
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
      </form>
    </div>
  );
};

export default Feedback;
