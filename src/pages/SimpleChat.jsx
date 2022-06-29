import React, { useRef, useState, useEffect } from 'react'
import {
  PaperAirplaneIcon,
} from "@heroicons/react/solid";
import { apiClient } from '../api/client'
import Contract from '../components/Chat/Contract'

function SimpleChat() {
  const messageEl = useRef(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('username');
  let allMessages = [];

  useEffect(() => {
    if (messageEl) {
      messageEl.current.addEventListener('DOMNodeInserted', event => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  }, [])

  useEffect(() => {
    Pusher.logToConsole = true;
    const pusher = new Pusher('eb239b5d5f1790174f89', {
      cluster: 'ap1'
    });
    const channel = pusher.subscribe('chat');
    channel.bind('new-message', (data) => {
      // setMessages(prevMsg => [...prevMsg, data]);
      allMessages.push(data);
      setMessages(allMessages);
    });
  }, []);

  const submit = async e => {
    if (message !== '') {
      e.preventDefault();
      await apiClient.post('/chat', {
        username,
        message
      });
      setMessage('');
    }
  }

  return (
    <div className="flex flex-row">
      <div className="flex-none overflow-scroll h-5/6">
        <Contract />
        <Contract />
        <Contract />
        <Contract />
        <Contract />
        <Contract />
        <Contract />
      </div>
      <div className="flex-auto">
        {/* <h3 className="text-xl font-bold">
          Auto scroll to bottom in react chat app -
          <a href="https://www.cluemediator.com" target="_blank" rel="noopener noreferrer">
            Clue Mediator
          </a>
        </h3> */}
        <div className="overflow-hidden shadow-md rounded-lg border-0 border-blue-900 ml-8 bg-white">
          {/* <div className="bg-blue-900 p-2 font-semibold text-white">ChatBot</div> */}
          <div className="h-[560px] overflow-y-auto p-4" ref={messageEl}>
            {messages.map((message, i) => {
              return (
                <div key={i} className={`mb-1 clear-both${i % 2 !== 0 ? ' float-right' : ' float-left'}`}>
                  <div className={`${i % 2 !== 0 ? 'text-right' : 'text-left'}`}>
                    <small>{message.username}</small>
                  </div>
                  <div className={`inline-block mb-1 px-4 py-2 border border-gray-400 rounded-xl${i % 2 !== 0 ? ' bg-gray-200' : ''}`}>
                    {message.message}
                  </div>
                </div>
              )
            })}
          </div>
          <form onSubmit={e => submit(e)}>
            <div className="flex flex-row border-0 border-gray-800 bg-gray-300">
              <input type="text" placeholder="Write a message..."
                className="flex-auto border-0 m-2 h-9 rounded-full focus:ring-0" value={message}
                onChange={e => setMessage(e.target.value)} />
              <PaperAirplaneIcon className="flex-none rotate-90 w-7 h-7 mt-3 mr-2 cursor-pointer text-blue-900"
                onClick={e => submit(e)} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SimpleChat
