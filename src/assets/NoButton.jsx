import React from 'react'

const NoButton = ({onClick, label}) => {

  return (
    <div>
        <button onClick={onClick} className='bg-red-500 hover:bg-red-700 text-white font-bold text-lg md:text-2xl py-4 px-8 rounded'>{label}</button>
    </div>
  )
}

export default NoButton