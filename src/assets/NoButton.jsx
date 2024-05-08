import React from 'react'

const NoButton = ({onClick, label}) => {

  return (
    <div>
        <button onClick={onClick} className='bg-red-500 hover:bg-red-700 text-white text-lg py-2 px-4 rounded'>{label}</button>
    </div>
  )
}

export default NoButton