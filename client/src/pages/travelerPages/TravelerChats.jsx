import React from 'react';
import { useSelector } from 'react-redux';

const UserChats = () => {
  const { user } = useSelector((store) => store.user);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(e.target.content.value);
  };

  return (
    <section>
      <h2>Chats</h2>
      <form onSubmit={sendMessage}>
        <textarea name='content' id='' cols='30' rows='10'></textarea>
        <button type='submit'>Send</button>
      </form>
    </section>
  );
};

export default UserChats;
