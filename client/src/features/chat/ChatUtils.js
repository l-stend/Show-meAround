import customFetch from '../../utils/axios';

export const getAllChats = async () => {
  try {
    const res = await customFetch.get('/chats');
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const createChat = async (chat) => {
  try {
    const res = await customFetch.post('/chat', chat);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const addMessage = async (chat) => {
  try {
    const { id } = chat;
    const res = await customFetch.patch(`/chat/${id}`, chat);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
