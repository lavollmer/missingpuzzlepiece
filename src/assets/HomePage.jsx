import React from "react";

const HomePage = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };
  return (
    <>
      <h1>The Missing Puzzle Piece</h1>
      <p>Lost a puzzle piece? Let us help!</p>
      <button onClick={handleClick}>START</button>
    </>
  );
};

export default HomePage;
