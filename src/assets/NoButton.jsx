import React from 'react'

const NoButton = () => {
    consthandleClick => () => {
        alert('did not find!');
    }
  return (
    <div>
        <button onClick={handleClick}> Did not find</button>
    </div>
  )
}

export default NoButton