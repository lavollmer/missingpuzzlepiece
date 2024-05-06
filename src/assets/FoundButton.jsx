import React from 'react'

const FoundButton = () => {
    const handleClick = () => {
        alert("Button clicked!");
    };
  return (
    <div>
        <button onClick={handleClick}>FOUND</button>
    </div>
  )
}

export default FoundButton