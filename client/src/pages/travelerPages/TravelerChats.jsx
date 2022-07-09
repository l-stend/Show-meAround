import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addMessage, getAllChats } from '../../features/chat/ChatUtils';
import { LocalChats } from '..';
import '../pages-style/TravelersChatStyle.css';

const UserChats = () => {
  const { user } = useSelector((store) => store.user);
  const params = useParams();
  const [chat, setChat] = useState(null);
  const [paramState, setParamState] = useState('');
  const [conversation, setConversation] = useState(chat?.messages);

  useEffect(() => {
    chat && setConversation(chat.messages);
  }, [chat]);

  useEffect(() => {
    setParamState(params.chatId);
  }, [params]);

  useEffect(() => {
    (async () => {
      const thing = await getAllChats();
      setChat(thing.find((item) => item.id === params.chatId));
    })();
  }, [paramState]);

  const sendMessage = (e) => {
    e.preventDefault();

    const msg = {
      content: e.target.content.value,
      author: user.type,
      time: Date.now(),
    };

    const existingMsgs = conversation;
    const update = {
      id: params.chatId,
      messages: [...existingMsgs, msg],
    };
    setConversation([...existingMsgs, msg]);
    addMessage(update);
    e.target.content.value = '';
  };

  return (
    <section className='chat-body'>
      <div className='conversation'>
        {conversation?.map((msg) => {
          if (msg.author === 'local') {
            return <div className='local-msg text-end'>{msg.content}</div>;
          } else return <div className='traveler-msg'>{msg.content}</div>;
        })}
      </div>
      <form className='chat-send-message' onSubmit={sendMessage}>
        <textarea className='chat-textarea' name='content'></textarea>
        <button className='chat-send-btn' type='submit'>
          Send
        </button>
      </form>
    </section>
  );
};

export default UserChats;
