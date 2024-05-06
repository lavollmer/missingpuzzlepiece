import React from 'react'

const FoundButton = ({onClick, label}) => {

  return (
    <div>
        <button onClick={onClick}>{label}</button>
    </div>
  )
}

export default FoundButton