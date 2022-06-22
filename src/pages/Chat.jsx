import React from 'react'
import ChatBox from '../components/Chat/ChatBox'
import Contract from '../components/Chat/Contract'

function Chat() {
  return (
    <div className='flex flex-row h-full bg-gray-100'>
      <div className='flex-col mr-4'>
        <Contract />
        <Contract />
        <Contract />
        <Contract />
      </div>
      <div className='flex-auto'>
        <ChatBox />
      </div>
    </div>
  )
}

export default Chat
