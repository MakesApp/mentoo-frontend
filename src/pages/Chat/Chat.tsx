import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import Header from './components/Header/Header';
import userAvatar from '../../assets/images/user-avatar.png'
import sendIcon from '../../assets/images/send-icon.svg'
import { useAuthContext } from '../../context/useAuth';
import style from './Chat.module.css'
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
  const headerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<null | HTMLUListElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<MessageType[]>([]);
  const { partnerId } = useParams<MatchParams>();
  const { user }=useAuthContext();
  const userId=user._id;
  const ids = [userId, partnerId].sort();
  const roomName = `${ids[0]}_${ids[1]}`;

useEffect(() => {
  console.log('====================================');
  console.log(messagesEndRef?.current);
  console.log('====================================');
  messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
}, [messages]);

  useEffect(() => {
    socket.emit('join room', roomName);
    socket.on('chat message', (msg: MessageType) => {
      setMessages((prevMessages) => [...prevMessages, {
        sender: msg.sender,
        message: msg.message,
        isCurrentUser: msg.sender === userId,
      }]);
    });
    socket.on('chat history', (chatHistory: MessageType[]) => {
      setMessages(chatHistory.map(msg => ({
        sender: msg.sender,
        message: msg.message,
        isCurrentUser: msg.sender === userId,
      })));
    });

    return () => {
      socket.off('chat message');
      socket.off('chat history');
    };
  }, [roomName]);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    socket.emit('chat message',{
      sender: userId,
      partnerId,
      message,
      isCurrentUser: true,
    }, roomName);
    setMessage('');
  };

  const offsets = headerRef.current?.offsetHeight + formRef.current?.offsetHeight || 0;
console.log( offsets);

  return (
    <div className={style.container}>
      <Header ref={headerRef}/>
      <div className={style.content}>
        <ul ref={messagesEndRef} className={style.messages} style={{ maxHeight: `calc(100vh - ${offsets+75}px)` }}>
          {messages.map((msg, index) => {
            const isFirstMessage = index === 0 || messages[index - 1].sender !== msg.sender;
            return (
              <li key={index} className={`${msg.isCurrentUser ? style.right : style.left} ${isFirstMessage ? style.first : ''}`}>
                {isFirstMessage && <img src={`${user?.avatar||userAvatar}`}  className={style.avatar} alt="user avatar" />}
                <p className={style.message}>{msg.message}</p>
              </li>
            );
          })}
        </ul>
        <form className={style.form} onSubmit={onSubmit} ref={formRef}>
          <input id="m" autoComplete="off" value={message} onChange={(e) => setMessage(e.target.value)}  className={style.inputField}/>
          <button className={style.submitBtn}  type="submit"><img src={sendIcon} alt="send icon"/></button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
