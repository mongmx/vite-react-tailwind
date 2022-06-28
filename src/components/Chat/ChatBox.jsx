import React from 'react'

function ChatBox({ text, username, handleTextChange }) {
  return (
    <div className='bg-white shadow-md rounded-lg h-full'>
      <div>
        <div>
          <div className='chat'>
            <div>
              <input 
              type="text" 
              value={text} 
              placeholder="chat here..."
              className='form-control'
              onChange={handleTextChange}
              onKeyDown={handleTextChange} />
            </div>
            <div className='clearfix'></div>
          </div>
        </div>
        <h4 className='greetings'>Hello, {username}</h4>
      </div>
    </div>
  )
}

export default ChatBox
