import React from 'react';
import { Outlet } from 'react-router-dom';
import { TravelerChats, LocalChats } from '.';

const ChatSystem = () => {
  return (
    <div>
      <LocalChats />
      <Outlet />
    </div>
  );
};

export default ChatSystem;
