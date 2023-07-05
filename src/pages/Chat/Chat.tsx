import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import Header from './components/Header/Header';
import userAvatar from '../../assets/images/user-avatar.png';
import sendIcon from '../../assets/images/send-icon.svg';
import { useAuthContext } from '../../context/useAuth';
import style from './Chat.module.css';
import {  useQuery } from 'react-query';
import { getUserById } from '../../api/services/api';
import Spinner from '../../components/Spinner/Spinner';
import { formatGroupDate, formatTimestamp } from '../../utils/utils';
import queryClient from '../../config/reactQuery';

type MessageType = {
  messageId?: string;
  sender: string;
  message: string;
  isCurrentUser?: boolean;
  seenBy?: string;
  _id?: string;
  createdAt?: string;
};

const baseURL = import.meta.env.VITE_API_BASE_URL;

interface MatchParams {
  partnerId: string;
}

const Chat: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLUListElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [socket, setSocket] = useState<any>(null);
  const { partnerId } = useParams<MatchParams>();
  const { user } = useAuthContext();
  const { data: partner, isLoading } = useQuery(['getUser', partnerId], getUserById, { enabled: !!partnerId });
  const userId = user._id;
  const ids = [userId, partnerId].sort();
  const roomName = `${ids[0]}_${ids[1]}`;

  useEffect(() => {
    const messagesList = messagesEndRef.current;
    if (messagesList) {
      messagesList.scrollTop = messagesList.scrollHeight;
    }
  }, [messages]);


  useEffect(() => {
    const socketIo = io(baseURL);
    setSocket(socketIo);
    if (socketIo) {
      socketIo.emit('join room', roomName, userId, partnerId);
      socketIo.on('chat message', (msg: MessageType) => {
        queryClient.invalidateQueries('unreadMessages');
        queryClient.invalidateQueries('place');
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            ...msg,
            isCurrentUser: msg.sender === userId,
          },
        ]);
      });
      socketIo.on('chat history', (chatHistory: MessageType[]) => {
        setMessages(
          chatHistory.map((msg) => ({
            ...msg,
            isCurrentUser: msg.sender === userId,
          }))
        );
      });
    }

    return () => {
      if (socketIo) {
        socketIo.off('chat message');
        socketIo.off('chat history');
        socketIo.disconnect();
      }
    };
  }, [roomName]);

  useEffect(() => {
    if (socket) {
      socket.on('messages seen', (seenMessageIds: string[]) => {
        queryClient.invalidateQueries('unreadMessages');
        queryClient.invalidateQueries('place');
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
    }
  }, [userId, socket]);


  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newMessage: MessageType = {
      messageId: Date.now().toString(),
      sender: userId,
      message,
      isCurrentUser: true,
    };
    socket.emit('chat message', newMessage, roomName);
    queryClient.invalidateQueries('unreadMessages')
    queryClient.invalidateQueries('place')

    setMessage('');
  };

  const offsets =
    (headerRef.current?.offsetHeight || 0) +
    (formRef.current?.offsetHeight || 0);


  if (isLoading) {
    return <Spinner />;
  }

  const groupedMessages: { [key: string]: MessageType[] } = {};

  messages.forEach((msg) => {
    
    const date = new Date(msg.createdAt || '');
    const dateString = formatGroupDate(date);

    if (groupedMessages[dateString]) {
      groupedMessages[dateString].push(msg);
    } else {
      groupedMessages[dateString] = [msg];
    }
  });

  return (
    <div className={style.container}>
      <Header user={partner} ref={headerRef} />
      <div className={style.content}>
        <ul
          ref={messagesEndRef}
          className={style.messages}
        >
          {Object.entries(groupedMessages).map(([date, messages]) => (
            <React.Fragment key={date}>
              <li className={style.dateSection}>{date}</li>
              {messages.map((msg) => {
                const isFirstMessage =
                  messages.indexOf(msg) === 0 ||
                  messages[messages.indexOf(msg) - 1].sender !== msg.sender;
                return (
                  <li
  key={msg.createdAt}
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
  <div className={style.message}>
    {msg.message.split('\n').map((item, key) => {
      return <p key={key}>{item}</p>
    })}
    {msg.createdAt&&<span className={style.timestamp}>{formatTimestamp(msg.createdAt)}</span>}
  </div>
</li>

                );
              })}
            </React.Fragment>
          ))}
        </ul>
        <form className={style.form} onSubmit={onSubmit} ref={formRef}>
         <textarea
     id="m"
     autoComplete="off"
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    className={style.textField}
     onKeyDown={(e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault(); // prevent form submission or textarea default behaviour
        setMessage(prevMessage => prevMessage + '\n');
      }
    }}
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
