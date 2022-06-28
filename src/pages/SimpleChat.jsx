import React, { useRef, useState, useEffect } from 'react'
import {
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { apiClient } from '../api/client'

// const generateMessage = () => {
//   const words = ["The sky", "above", "the port", "was", "the color of television", "tuned", "to", "a dead channel", ".", "All", "this happened", "more or less", ".", "I", "had", "the story", "bit by bit", "from various people", "and", "as generally", "happens", "in such cases", "each time", "it", "was", "a different story", ".", "It", "was", "a pleasure", "to", "burn"];
//   const text = [];
//   let x = 7;
//   while (--x) text.push(words[Math.floor(Math.random() * words.length)]);
//   return text.join(" ");
// }

function SimpleChat() {
  const messageEl = useRef(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('username');

  useEffect(() => {
    if (messageEl) {
      messageEl.current.addEventListener('DOMNodeInserted', event => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  }, [])

  // useEffect(() => {
  //   const generateDummyMessage = () => {
  //     setInterval(() => {
  //       setMessages(prevMsg => [...prevMsg, generateMessage()]);
  //     }, 5000);
  //   }
  //   generateDummyMessage();
  // }, []);

  useEffect(() => {
    // Pusher.logToConsole = true;
    const pusher = new Pusher('eb239b5d5f1790174f89', {
      cluster: 'ap1'
    });
    const channel = pusher.subscribe('chat');
    channel.bind('new-message', (data) => {
      // allMessages.push(data);
      setMessages(prevMsg => [...prevMsg, data]);
    });
  }, []);

  const submit = async e => {
    e.preventDefault();
    await apiClient.post('/chat', {
      username,
      message
    });
    setMessage('');
  }

  return (
    <>
      <h3 className="text-xl font-bold">Auto scroll to bottom in react chat app - <a href="https://www.cluemediator.com" target="_blank" rel="noopener noreferrer">Clue Mediator</a></h3>
      <div className="w-[800px] h-[450px] overflow-hidden border rounded border-gray-800 ml-[50px] bg-white">
        <div className="bg-gray-800 p-2 font-semibold text-white">ChatBot</div>
        <div className="h-[372px] overflow-y-auto p-4" ref={messageEl}>
          {/* {messages.map((m, i) => <div key={i} className={`border px-4 py-2 rounded-2xl mb-5 clear-both${i % 2 !== 0 ? ' float-right bg-gray-300' : ' float-left'}`}>{m}</div>)} */}

          {messages.map((message, i) => {
              return (
                <div key={i} className="list-group-item list-group-item-action py-3 lh-tight">
                  <div className="d-flex w-100 align-items-center justify-content-between">
                    <strong className="mb-1">{message.username}</strong>
                  </div>
                  <div className="col-10 mb-1 small">{message.message}</div>
                </div>
              )
            })}
        </div>
        <form onSubmit={e => submit(e)}>
          {/* <input className="form-control" placeholder="Write a message" value={message}
            
          /> */}
          <div className="flex flex-row border-t border-gray-800">
            <input type="text" placeholder="Type here..." className="flex-auto border-0 mr-2 h-9" value={message} onChange={e => setMessage(e.target.value)} />
            <PaperAirplaneIcon className="flex-none rotate-90 w-6 h-6 mt-1 mr-1" />
          </div>
        </form>
        {/* <div className="flex flex-row border-t border-gray-800">
          <input type="text" placeholder="Type here..." className="flex-auto border-0 mr-2 h-9" />
          <PaperAirplaneIcon className="flex-none rotate-90 w-6 h-6 mt-1 mr-1" />
        </div> */}
      </div>
    </>
  )
}

export default SimpleChat
