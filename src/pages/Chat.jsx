import React, { useEffect, useRef, useState } from 'react'
// import ChatBox from '../components/Chat/ChatBox'
// import Contract from '../components/Chat/Contract'
// import {
//   UserCircleIcon
// } from "@heroicons/react/outline";
// import { MessageList } from "react-chat-elements";
// import "react-chat-elements/dist/main.css";
import { apiClient } from '../api/client'
import Pusher from 'pusher-js';

function Chat() {

  // const messageListReferance = useRef();

  const [username, setUsername] = useState('username');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  let allMessages = [];

  useEffect(() => {
    // Pusher.logToConsole = true;
    const pusher = new Pusher('eb239b5d5f1790174f89', {
      cluster: 'ap1'
    });
    const channel = pusher.subscribe('chat');
    channel.bind('new-message', (data) => {
      allMessages.push(data);
      setMessages(allMessages);
    });
  }, []);

  const submit = async e => {
    e.preventDefault();
    // post message to api server
    await apiClient.post('/chat', {
      username,
      message
    });
    setMessage('');
  }

  return (
    <div className='flex flex-row h-full bg-gray-100'>
      <div className="container">
        <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white">
          <div
            className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
            <input className="fs-5 fw-semibold" value={username}
              onChange={e => setUsername(e.target.value)} />
          </div>
          <div className="list-group list-group-flush border-bottom scrollarea">
            {messages.map(message => {
              return (
                <div className="list-group-item list-group-item-action py-3 lh-tight">
                  <div className="d-flex w-100 align-items-center justify-content-between">
                    <strong className="mb-1">{message.username}</strong>
                  </div>
                  <div className="col-10 mb-1 small">{message.message}</div>
                </div>
              )
            })}
          </div>
        </div>
        <form onSubmit={e => submit(e)}>
          <input className="form-control" placeholder="Write a message" value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </form>
      </div>
      {/* <MessageList
        referance={messageListReferance}
        className='message-list'
        lockable={true}
        toBottomHeight={'100%'}
        dataSource={[
          {
            position: 'right',
            type: 'text',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            date: new Date(),
          },
          {
            position: 'right',
            type: 'text',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            date: new Date(),
          },
          {
            position: 'right',
            type: 'text',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            date: new Date(),
          },
          {
            position: 'right',
            type: 'text',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            date: new Date(),
          },
          {
            position: 'left',
            type: 'text',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            date: new Date(),
          },
        ]} /> */}
      {/* <div className='flex-col mr-4'>
        <Contract />
        <Contract />
        <Contract />
        <Contract />
      </div>
      <div className='flex-auto'>
        <ChatBox />
      </div> */}
      {/* <div class="main flex-1 flex flex-col">
        <div class="hidden lg:block heading flex-2">
          <h1 class="text-3xl text-gray-700 mb-4">Chat</h1>
        </div>

        <div class="flex-1 flex h-full">
          <div class="sidebar hidden lg:flex w-1/3 flex-2 flex-col pr-6">
            <div class="search flex-2 pb-6 px-2">
              <input type="text" class="outline-none py-2 block w-full bg-transparent border-b-2 border-gray-200" placeholder="Search" />
            </div>
            <div class="flex-1 h-full overflow-auto px-2">
              <div class="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md">
                <div class="flex-2">
                  <div class="w-12 h-12 relative">
                    <UserCircleIcon className="flex-none w-12 h-12 mr-2" />
                    <span class="absolute w-4 h-4 bg-green-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                  </div>
                </div>
                <div class="flex-1 px-2">
                  <div class="truncate w-32"><span class="text-gray-800">Ryann Remo</span></div>
                  <div><small class="text-gray-600">Yea, Sure!</small></div>
                </div>
                <div class="flex-2 text-right">
                  <div><small class="text-gray-500">15 April</small></div>
                  <div>
                    <small class="text-xs bg-red-500 text-white rounded-full h-6 w-6 leading-6 text-center inline-block">
                      23
                    </small>
                  </div>
                </div>
              </div>
              <div class="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md">
                <div class="flex-2">
                  <div class="w-12 h-12 relative">
                    <UserCircleIcon className="flex-none w-12 h-12 mr-2" />
                    <span class="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                  </div>
                </div>
                <div class="flex-1 px-2">
                  <div class="truncate w-32"><span class="text-gray-800">Karp Bonolo</span></div>
                  <div><small class="text-gray-600">Yea, Sure!</small></div>
                </div>
                <div class="flex-2 text-right">
                  <div><small class="text-gray-500">15 April</small></div>
                  <div>
                    <small class="text-xs bg-red-500 text-white rounded-full h-6 w-6 leading-6 text-center inline-block">
                      10
                    </small>
                  </div>
                </div>
              </div>
              <div class="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md border-l-4 border-red-500">
                <div class="flex-2">
                  <div class="w-12 h-12 relative">
                    <UserCircleIcon className="flex-none w-12 h-12 mr-2" />
                    <span class="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                  </div>
                </div>
                <div class="flex-1 px-2">
                  <div class="truncate w-32"><span class="text-gray-800">Mercedes Yemelyan</span></div>
                  <div><small class="text-gray-600">Yea, Sure!</small></div>
                </div>
                <div class="flex-2 text-right">
                  <div><small class="text-gray-500">15 April</small></div>
                </div>
              </div>
              <div class="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md">
                <div class="flex-2">
                  <div class="w-12 h-12 relative">
                    <UserCircleIcon className="flex-none w-12 h-12 mr-2" />
                    <span class="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                  </div>
                </div>
                <div class="flex-1 px-2">
                  <div class="truncate w-32"><span class="text-gray-800">Cadi Kajetán</span></div>
                  <div><small class="text-gray-600">Yea, Sure!</small></div>
                </div>
                <div class="flex-2 text-right">
                  <div><small class="text-gray-500">15 April</small></div>
                </div>
              </div>
              <div class="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md">
                <div class="flex-2">
                  <div class="w-12 h-12 relative">
                    <UserCircleIcon className="flex-none w-12 h-12 mr-2" />
                    <span class="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                  </div>
                </div>
                <div class="flex-1 px-2">
                  <div class="truncate w-32"><span class="text-gray-800">Rina Samuel</span></div>
                  <div><small class="text-gray-600">Yea, Sure!</small></div>
                </div>
                <div class="flex-2 text-right">
                  <div><small class="text-gray-500">15 April</small></div>
                </div>
              </div>
            </div>
          </div>
          <div class="chat-area flex-1 flex flex-col">
            <div class="flex-3">
              <h2 class="text-xl py-1 mb-8 border-b-2 border-gray-200">Chatting with <b>Mercedes Yemelyan</b></h2>
            </div>
            <div class="messages flex-1 overflow-auto">
              <div class="message mb-4 flex">
                <div class="flex-2">
                  <div class="w-12 h-12 relative">
                    <UserCircleIcon className="flex-none w-12 h-12 mr-2" />
                    <span class="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                  </div>
                </div>
                <div class="flex-1 px-2">
                  <div class="inline-block bg-gray-300 rounded-full p-2 px-6 text-gray-700">
                    <span>Hey there. We would like to invite you over to our office for a visit. How about it?</span>
                  </div>
                  <div class="pl-4"><small class="text-gray-500">15 April</small></div>
                </div>
              </div>
              <div class="message mb-4 flex">
                <div class="flex-2">
                  <div class="w-12 h-12 relative">
                    <UserCircleIcon className="flex-none w-12 h-12 mr-2" />
                    <span class="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                  </div>
                </div>
                <div class="flex-1 px-2">
                  <div class="inline-block bg-gray-300 rounded-full p-2 px-6 text-gray-700">
                    <span>All travel expenses are covered by us of course :D</span>
                  </div>
                  <div class="pl-4"><small class="text-gray-500">15 April</small></div>
                </div>
              </div>
              <div class="message me mb-4 flex text-right">
                <div class="flex-1 px-2">
                  <div class="inline-block bg-blue-600 rounded-full p-2 px-6 text-white">
                    <span>It's like a dream come true</span>
                  </div>
                  <div class="pr-4"><small class="text-gray-500">15 April</small></div>
                </div>
              </div>
              <div class="message me mb-4 flex text-right">
                <div class="flex-1 px-2">
                  <div class="inline-block bg-blue-600 rounded-full p-2 px-6 text-white">
                    <span>I accept. Thank you very much.</span>
                  </div>
                  <div class="pr-4"><small class="text-gray-500">15 April</small></div>
                </div>
              </div>
              <div class="message mb-4 flex">
                <div class="flex-2">
                  <div class="w-12 h-12 relative">
                    <UserCircleIcon className="flex-none w-12 h-12 mr-2" />
                    <span class="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                  </div>
                </div>
                <div class="flex-1 px-2">
                  <div class="inline-block bg-gray-300 rounded-full p-2 px-6 text-gray-700">
                    <span>You are welome. We will stay in touch.</span>
                  </div>
                  <div class="pl-4"><small class="text-gray-500">15 April</small></div>
                </div>
              </div>
            </div>
            <div class="flex-2 pt-4 pb-10">
              <div class="write bg-white shadow flex rounded-lg">
                <div class="flex-3 flex content-center items-center text-center p-4 pr-0">
                  <span class="block text-center text-gray-400 hover:text-gray-800">
                    <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" class="h-6 w-6"><path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </span>
                </div>
                <div class="flex-1">
                  <textarea name="message" class="w-full block outline-none py-4 px-4 bg-transparent" rows="1" placeholder="Type a message..." autofocus></textarea>
                </div>
                <div class="flex-2 w-32 p-2 flex content-center items-center">
                  <div class="flex-1 text-center">
                    <span class="text-gray-400 hover:text-gray-800">
                      <span class="inline-block align-text-bottom">
                        <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" class="w-6 h-6"><path d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
                      </span>
                    </span>
                  </div>
                  <div class="flex-1">
                    <button class="bg-blue-400 w-10 h-10 rounded-full inline-block">
                      <span class="inline-block align-text-bottom">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-4 h-4 text-white"><path d="M5 13l4 4L19 7"></path></svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Chat
