import React from 'react'
import FoundButton from "./FoundButton.jsx";
import NoButton from "./NoButton.jsx";

const Question = () => {
  const handleClick = () => {
    alert ("Button found!")
  }

  return (
    <div>
      <h1>Have you looked around your area?</h1>
      <div>
        <FoundButton onClick={handleClick} label="Found" />
        <NoButton onClick={handleClick} label="No"/>  
      </div>
    </div>
  )
}

export default Question