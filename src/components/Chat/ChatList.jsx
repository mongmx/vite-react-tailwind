import React from 'react'
import {
  UserCircleIcon
} from "@heroicons/react/outline";

function ChatList({ chats }) {
  return (
    <ul>
      {chats.map(chat => {
        return (
          <div>
            <div>
              <div>
                <div className='chatMessage'>
                  <div key={chat.id} className='box'>
                    <p>
                      <strong>{chat.username}</strong>
                    </p>
                    <p>
                      {chat.message}
                    </p>
                  </div>
                  <dir className='imageHolder'>
                    <UserCircleIcon className='flex-none w-12 h-12 mr-2' />
                  </dir>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </ul>
  )
}

export default ChatList
