import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addMessage, getAllChats } from '../../features/chat/ChatUtils';
import { LocalChats } from '..';

const UserChats = () => {
  const { user } = useSelector((store) => store.user);
  const params = useParams();
  const [chat, setChat] = useState(null);
  const [paramState, setParamState] = useState('');
  const [conversation, setConversation] = [];

  useEffect(() => {
    setParamState(params.chatId);
  }, [params]);
  // console.log(chat);
  // console.log('userOne msgs', chat.userOne.msgs);
  // console.log('userTwo msgs', chat.userTwo.msgs);

  useEffect(() => {
    (async () => {
      const thing = await getAllChats();
      await setChat(thing.find((item) => item.id === params.chatId));
      await getConversation();
    })();
  }, [paramState]);

  const getConversation = () => {
    const conv = [...chat.userOne.msgs, ...chat.userTwo.msgs];
    console.log(conv);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(e.target.content.value);
    console.log(params.chatId);

    const msg = {
      content: e.target.content.value,
      author: user.type,
      time: Date.now(),
    };

    if (user.type === 'traveler') {
      const existingMsgs = chat.userOne.msgs;
      const update = {
        id: params.chatId,
        userOne: {
          msgs: [msg, ...existingMsgs],
        },
      };
      addMessage(update);
    } else {
      const existingMsgs = chat.userTwo.msgs;
      const update = {
        id: params.chatId,
        userTwo: {
          msgs: [msg, ...existingMsgs],
        },
      };
      addMessage(update);
    }
  };

  return (
    <section>
      <side>{/* <LocalChats /> */}</side>
      <h2>Chats</h2>
      {chat?.id}
      <form onSubmit={sendMessage}>
        <textarea name='content' id='' cols='30' rows='10'></textarea>
        <button type='submit'>Send</button>
      </form>
    </section>
  );
};

export default UserChats;
