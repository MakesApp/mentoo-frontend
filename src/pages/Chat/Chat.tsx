import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import Header from './components/Header/Header';
import userAvatar from '../../assets/images/user-avatar.png';
import sendIcon from '../../assets/images/send-icon.svg';
import { useAuthContext } from '../../context/useAuth';
import style from './Chat.module.css';

type MessageType = {
  messageId?: string;
  sender: string;
  message: string;
  isCurrentUser?: boolean;
  seenBy?: string;
  _id?: string;
};
const baseURL = import.meta.env.VITE_API_BASE_URL;

const socket = io(baseURL);

interface MatchParams {
  partnerId: string;
}

const Chat: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLUListElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<MessageType[]>([]);
  const { partnerId } = useParams<MatchParams>();
  const { user } = useAuthContext();
  const userId = user._id;
  const ids = [userId, partnerId].sort();
  const roomName = `${ids[0]}_${ids[1]}`;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    socket.emit('join room', roomName, userId, partnerId);
    socket.on('chat message', (msg: MessageType) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: msg.sender,
          message: msg.message,
          isCurrentUser: msg.sender === userId,
        },
      ]);
    });
    socket.on('chat history', (chatHistory: MessageType[]) => {
      setMessages(
        chatHistory.map((msg) => ({
          ...msg,
          isCurrentUser: msg.sender === userId,
        }))
      );

      const unseenMessageIds = chatHistory
        .filter((msg) => msg.sender !== userId && !msg.seenBy)
        .map((msg) => msg._id);

      if (unseenMessageIds.length > 0) {
        socket.emit('messages seen', unseenMessageIds, roomName, userId);
      }
    });
    return () => {
      socket.off('chat message');
      socket.off('chat history');
    };
  }, [roomName]);

  useEffect(() => {
    socket.on('messages seen', (seenMessageIds: string[]) => {
      setMessages((prevMessages) =>
        prevMessages.map((msg) => {
      if (seenMessageIds.includes(msg.messageId ?? '')) {
            return {
              ...msg,
              seenBy: userId,
            };
          }
          return msg;
        })
      );
    });

    return () => {
      socket.off('messages seen');
    };
  }, [userId]);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newMessage: MessageType = {
      messageId: Date.now().toString(),
      sender: userId,
      message,
      isCurrentUser: true,
      _id: '', // Assign a value to _id
    };
    socket.emit('chat message', newMessage, roomName);

    setMessage('');
  };

  const offsets =
    (headerRef.current?.offsetHeight || 0) +
    (formRef.current?.offsetHeight || 0);

 

  return (
    <div className={style.container}>
      <Header  ref={headerRef} />
      <div className={style.content}>
        <ul
          ref={messagesEndRef}
          className={style.messages}
          style={{ maxHeight: `calc(100vh - ${offsets + 75}px)` }}
        >
          {messages.map((msg) => {
            const isFirstMessage =
              messages.indexOf(msg) === 0 ||
              messages[messages.indexOf(msg) - 1].sender !== msg.sender;
            return (
              <li
                key={msg._id}
                className={`${msg.isCurrentUser ? style.right : style.left} ${
                  isFirstMessage ? style.first : ''
                }`}
              >
                {isFirstMessage && (
                  <img
                    src={user?.avatarUrl || userAvatar}
                    className={style.avatar}
                    alt="user avatar"
                  />
                )}
                <p className={style.message}>{msg.message}</p>
              </li>
            );
          })}
        </ul>
        <form className={style.form} onSubmit={onSubmit} ref={formRef}>
          <input
            id="m"
            autoComplete="off"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={style.inputField}
          />
          <button className={style.submitBtn} type="submit">
            <img src={sendIcon} alt="send icon" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
