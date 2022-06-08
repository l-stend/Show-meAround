import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import customFetch from '../../components/utils/axios';
import { toast } from 'react-toastify';

const initialState = {
  isLoading: false,
  user: null,
};

export const registerUser = createAsyncThunk(
  'action/registerUser',
  async (user, ThunkAPI) => {
    try {
      const { email, password } = user;
      const newUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (newUser) {
        const res = await customFetch.post('/register', user);
        console.log(res.data);
        return res.data;
      } else {
        throw new Error();
      }
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      console.log('logging out');
      toast('Logging Out');
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.isLoading = true;
      state.user = payload;
      toast('User Created');
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = true;
      toast.error('Registering Failed');
    },
  },
});

export const { logoutUser } = userSlice.actions;

export default userSlice.reducer;
