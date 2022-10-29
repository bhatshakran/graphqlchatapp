import { useMutation, useQuery, useSubscription } from '@apollo/client';
import EmojiPicker from 'emoji-picker-react';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GET_MSGS } from '../graphql/queries.js';
import MessageCard from './MessageCard.js';
import SendIcon from '@mui/icons-material/Send';
import { SEND_MSG } from '../graphql/mutations.js';
import { MSG_SUB } from '../graphql/subscriptions.js';
import Sidebar from './Sidebar';

const ChatScreen = () => {
  const { id, name } = useParams();
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const [emojiModal, setEmojiModal] = useState(false);
  const { data, loading, error } = useQuery(GET_MSGS, {
    variables: {
      receiverId: +id,
    },

    onCompleted(data) {
      const msgs = data.messagesByUser;
      setMessages(msgs);
    },
  });

  useEffect(() => {}, [messages]);

  const [sendMessage] = useMutation(SEND_MSG);

  const { data: subData } = useSubscription(MSG_SUB, {
    onSubscriptionData({ subscriptionData: { data } }) {
      setMessages((prevMessages) => [...prevMessages, data.messageAdded]);
    },
  });

  const showEmojiModal = () => {
    setEmojiModal(!emojiModal);
  };

  const insertEmoji = (emoj) => {
    setText((prevState) => (prevState += ` ${emoj.emoji}`));
  };

  return (
    <div className='h-screen  text-white flex'>
      <Sidebar />
      <div className='   flex flex-col w-full h-full relative'>
        <div className='app-bar p-2 bg-black '>
          <div className='flex items-center'>
            <img
              src={`https://avatars.dicebear.com/api/initials/${name}.svg`}
              width={'32px'}
              height={'32px'}
              alt='avatar'
              className='mr-2 rounded-full'
            />
            <div className='text-bold font-acworth'>{name}</div>
          </div>
        </div>
        <div className='bg-black bg-opacity-90 h-full '>
          {messages.map((msg) => {
            return (
              <MessageCard
                key={msg.createdAt}
                text={msg.text}
                date={msg.createdAt}
                direction={msg.receiverId == +id ? 'end' : 'start'}
              />
            );
          })}
        </div>
        <div className='bg-black flex items-center absolute bottom-0 w-full text-white gap-2'>
          <textarea
            className=' bg-transparent text-white flex-grow  resize-none focus:outline-none p-2'
            placeholder='Enter a message'
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={2}
          />
          <EmojiEmotionsIcon
            fontSize='large'
            onClick={() => showEmojiModal()}
            className='cursor-pointer'
          />
          <SendIcon
            fontSize='large'
            className='cursor-pointer'
            onClick={() => {
              sendMessage({
                variables: {
                  receiverId: +id,
                  text,
                },
              });
              setText('');
            }}
          />
        </div>
        <div className='emoji-modal absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
          {emojiModal && (
            <EmojiPicker
              theme='dark'
              emojiStyle='native'
              lazyLoadEmojis='true'
              emojiVersion={'3.0'}
              onEmojiClick={(emoj) => insertEmoji(emoj)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
