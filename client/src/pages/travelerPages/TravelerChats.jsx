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

  useEffect(() => {
    (async () => {
      const thing = await getAllChats();
      setChat(thing.find((item) => item.id === params.chatId));
      console.log(thing.find((item) => item.id === params.chatId));
    })();
    // getAllChats().map((item) => console.log(' la mamma di max'));
    // const thing = getAllChats().find((item) => item.id === params.chatId);
    // setChat(thing);
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(e.target.content.value);
    console.log(params.chatId);

    const msg = e.target.content.value;

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
      <form onSubmit={sendMessage}>
        <textarea name='content' id='' cols='30' rows='10'></textarea>
        <button type='submit'>Send</button>
      </form>
    </section>
  );
};

export default UserChats;
