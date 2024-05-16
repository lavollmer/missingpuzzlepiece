import React from 'react'

const FoundButton = ({onClick, label}) => {

  return (
    <div>
        <button onClick={onClick} className='bg-green-500 hover:bg-green-700 text-white text-lg py-2 px-8 rounded'>{label}</button>
    </div>
  )
}

export default FoundButton