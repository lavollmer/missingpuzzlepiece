import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Feedback = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const [feedback, setFeedback] = useState("");
  const [thumbsUp, setThumbsUp] = useState(false);
  const [thumbsDown, setThumbsDown] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(feedback);

    try {
      const response = await fetch(
        "https://missing-puzzle-piece-b568b18a56c7.herokuapp.com/feedback",
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
        navigate("/");
      } else {
        alert("Feedback submission failed.");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col text-black text-center">
      <div className="border bg-white p-4 rounded w-3/4 mx-auto shadow-md">
        <h1 className="text-bold text-2xl p-2 font-bold">Feedback</h1>
        <div className="text-lg">
          <p className="mb-4">
            We're always striving to improve. Please share your thoughts about
            the site!
          </p>
          <div className="mb-4 ">
            <p className="font-bold">Did you find our site helpful? (select one)</p>
            <button type="button" onClick={() => setThumbsUp(!thumbsUp)}>
              {thumbsUp ? "Yes👍" : "Yes👍"}
            </button>
            <button type="button" onClick={() => setThumbsDown(!thumbsDown)}>
              {thumbsDown ? "No👎" : "No👎"}
            </button>
          </div>
          <p className="mb-4 font-bold">
            Could you share more about your experience? Any areas for
            improvement?
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
                className="bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
          <div>
            <button
              onClick={handleHomeClick}
              style={{ maxWidth: "200px" }}
              className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Return Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
