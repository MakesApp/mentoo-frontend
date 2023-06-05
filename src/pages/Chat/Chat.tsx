import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import style from './Chat.module.css';

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
    if (userId !== partnerId) {
        // Join a room
        socket.emit('join room', roomName);
    socket.on('chat message', (msg: MessageType) => {
      console.log('====================================');
      console.log(msg);
      console.log('====================================');
      setMessages([...messages, msg.message]);
    });
    }

    // Don't join the room if the user is the same as the partner
    
  }, [messages]);

  
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Emit a chat message to the room
    socket.emit('chat message', {
      user: userId,
      message,
      isCurrentUser: true,
    }, roomName);

    setMessage('');
  };

  return (
    <div>
      <ul className={style.messages}>
        {messages.map((msg, index) => (
          <li key={index} className={msg.isCurrentUser ? style.right : style.left}>
            {/* <img src={`http://path-to-your-image-server/${msg.user}.png`} onError={(e)=>{e.target.onerror = null; e.target.src="default_avatar.png"}} alt="user avatar"/> */}
            <p>{msg.message}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={onSubmit}>
        <input id="m" autoComplete="off" value={message} onChange={(e) => setMessage(e.target.value)} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
