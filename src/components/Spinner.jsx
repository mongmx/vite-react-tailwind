import React from 'react'

function Spinner({ ...props }) {
  return (
    <div
      className='w-6 h-6 rounded-full animate-spin
        border-4 border-solid border-gray-300 border-t-transparent'
    >
    </div>
  )
}

export default Spinner
