import React from 'react'
import {
  UserCircleIcon
} from "@heroicons/react/outline";

function Contract() {
  return (
    <div>
      <div className="flex flex-row shadow-md rounded-lg mt-4 pt-4 pr-4 pl-2 w-80 h-24 hover:bg-slate-100 bg-white">
        <UserCircleIcon className="flex-none w-12 h-12 mr-2" />
        <div className="flex-auto flex-col">
          <div>Name</div>
          <div className='text-gray-600'>Message</div>
        </div>
        <div className="flex-none flex-col">
          <div className="flex justify-end text-xs">12-06-2022</div>
          <div className="flex justify-end text-xs">10:11</div>
          <div className="flex justify-end">
            <p className='bg-red-500 w-6 h-6 p-1 rounded-full text-center text-white text-xs'>10</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contract
