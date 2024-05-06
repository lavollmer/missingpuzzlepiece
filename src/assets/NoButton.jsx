import React from 'react'

const NoButton = ({onClick, label}) => {

  return (
    <div>
        <button onClick={onClick}>{label}</button>
    </div>
  )
}

export default NoButton