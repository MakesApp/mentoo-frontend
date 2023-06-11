import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import style from './Chat.module.css';
import Header from './components/Header/Header';

type MessageType = {
  user: string;
  message: string;
  isCurrentUser: boolean;
}

const socket = io('http://localhost:8080');

interface MatchParams {
  userId: string;
  partnerId: string;
}

const Chat: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<MessageType[]>([]);
  const { userId, partnerId } = useParams<MatchParams>();
  const roomName = `${userId}_${partnerId}`;

  
 useEffect(() => {
    // Join a room
    socket.emit('join room', roomName);

    // Register the event listener for receiving chat messages
  socket.on('chat message', handleChatMessage);

  // Register the event listener for receiving chat history
  socket.on('chat history', handleChatHistory);

  return () => {
    // Unregister the event listeners when the component is unmounted
    socket.off('chat message', handleChatMessage);
    socket.off('chat history', handleChatHistory);
  };
  
  }, [roomName]);

  const handleChatMessage = (msg: MessageType) => {
    console.log(msg);
    setMessages((prevMessages) => [...prevMessages, {
      sender: msg.sender,
      message: msg.message,
      isCurrentUser: msg.sender === userId, // Check if the message was sent by the current user
    }]);
  };

  const handleChatHistory = (chatHistory: MessageType[]) => {
    setMessages(chatHistory.map(msg => ({
      user: msg.sender,
      message: msg.message,
      isCurrentUser: msg.sender === userId, // Check if the message was sent by the current user
    })));
  };
  
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
const msg= {
      sender: userId,
      message,
      isCurrentUser: true,
    }
    // Emit a chat message to the room
    socket.emit('chat message',msg, roomName);
    setMessage('');
  };

  
  
  return (
    <div >
      <Header/>
      <div className={style.content}>
      <ul className={style.messages}>
        {messages.map((msg, index) => (
          <li key={index} className={msg.isCurrentUser ? style.right : style.left}>
            {/* <img src={`http://path-to-your-image-server/${msg.user}.png`} onError={(e)=>{e.target.onerror = null; e.target.src="default_avatar.png"}} alt="user avatar"/> */}
            <p className={style.message}>{msg.message}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={onSubmit}>
        <input id="m" autoComplete="off" value={message} onChange={(e) => setMessage(e.target.value)} />
        <button type="submit">Send</button>
      </form>
      </div>
    </div>
  );
};

export default Chat;
