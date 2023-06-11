import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import style from './Chat.module.css';
import Header from './components/Header/Header';
import userAvatar from '../../assets/images/user-avatar.png'
import { useAuthContext } from '../../context/useAuth';

type MessageType = {
  sender: string;
  message: string;
  isCurrentUser: boolean;
}

const socket = io('http://localhost:8080');

interface MatchParams {
  partnerId: string;
}

const Chat: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<MessageType[]>([]);
  const { partnerId } = useParams<MatchParams>();
  const { user }=useAuthContext();
  const userId=user._id;
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
    setMessages((prevMessages) => [...prevMessages, {
      sender: msg.sender,
      message: msg.message,
      isCurrentUser: msg.sender === userId, // Check if the message was sent by the current user
    }]);
  };

  const handleChatHistory = (chatHistory: MessageType[]) => {
    console.log(chatHistory);

    setMessages(chatHistory.map(msg => ({
      sender: msg.sender,
      message: msg.message,
      isCurrentUser: msg.sender === userId, // Check if the message was sent by the current user
    })));
  };
  
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
const msg= {
      sender: userId,
      partnerId,
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
     {messages.map((msg, index) => {
  const showAvatar = index === 0 || messages[index - 1].sender !== msg.sender;
  return (
    <li key={index} className={msg.isCurrentUser ? style.right : style.left}>
      {showAvatar && <img src={`${user?.avatar||userAvatar}`}  className={style.avatar} alt="user avatar" />}
      <p className={style.message}>{msg.message}</p>
    </li>
  );
})}
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
