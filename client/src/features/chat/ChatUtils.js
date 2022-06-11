import customFetch from '../../utils/axios';

export const createChat = async (chat) => {
  try {
    const res = await customFetch.post('/chat', chat);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
