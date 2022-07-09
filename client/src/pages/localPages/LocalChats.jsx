import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TravelerChats } from '..';
import { getAllChats } from '../../features/chat/ChatUtils';
import moment from 'moment';
import '../pages-style/LocalChatsStyle.css';

const LocalChats = () => {
  const { user } = useSelector((store) => store.user);
  const [chatsArr, setChatsArr] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const bla = await getAllChats();
      if (user.type === 'local') {
        await setChatsArr(
          bla
            .filter((chat) => chat.userTwo.email === user.email)
            .sort((b, a) => (a.time > b.time ? 1 : b.time > a.time ? -1 : 0))
        );
      } else {
        await setChatsArr(
          bla
            .filter((chat) => chat.userOne.email === user.email)
            .sort((b, a) => (a.time > b.time ? 1 : b.time > a.time ? -1 : 0))
        );
      }
    })();
  }, []);

  return (
    <main>
      <section className='chat-menu'>
        {chatsArr.map((chat) => (
          <article
            key={chat.id}
            onClick={() => navigate(`${chat.id}`)}
            className='chat-card'
          >
            <div className='user-one'>
              <h3>{chat.userOne.name}</h3>
            </div>
            <div className='breaking'></div>
            <div className='user-two'>
              <h3>{chat.userTwo.name}</h3>
            </div>
            {/* <div>{moment(chat.time).subtract(6, 'days').calendar()}</div> */}
          </article>
        ))}
      </section>

      <section>{/* <TravelerChats /> */}</section>
    </main>
  );
};

export default LocalChats;
