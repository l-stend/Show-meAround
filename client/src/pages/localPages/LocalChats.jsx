import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TravelerChats } from '..';
import { getAllChats } from '../../features/chat/ChatUtils';

const LocalChats = () => {
  const { user } = useSelector((store) => store.user);
  const [chatsArr, setChatsArr] = useState([]);
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
      <section>
        <h2>LocalChats</h2>
        {chatsArr.map((chat) => (
          <article>
            <div>{chat.userOne.email}</div>
            <div>{chat.userTwo.email}</div>
            <div>{chat.time}</div>
          </article>
        ))}
      </section>

      <section>
        <TravelerChats />
      </section>
    </main>
  );
};

export default LocalChats;

// const bla = getAllChats();
// setChatsArr(bla);
// console.log(chatsArr);
// console.log('cristo');
