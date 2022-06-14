import React from 'react';
import { Outlet } from 'react-router-dom';
import { TravelerChats, LocalChats } from '.';

const ChatSystem = () => {
  return (
    <div
      className='whole-chat-system'
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <LocalChats />
      <Outlet />
    </div>
  );
};

export default ChatSystem;
