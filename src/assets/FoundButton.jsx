import React from 'react'

const FoundButton = ({onClick, label}) => {

  return (
    <div>
        <button onClick={onClick} className='bg-green-500 hover:bg-green-700 text-white font-bold text-lg md:text-2xl py-4 px-8 rounded'>{label}</button>
    </div>
  )
}

export default FoundButton