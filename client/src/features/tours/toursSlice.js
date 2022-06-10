import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import customFetch from '../../utils/axios';
import { toast } from 'react-toastify';

const initialState = {
  isLoading: false,
  toursArr: [],
};

export const getAllTours = createAsyncThunk(
  'tours/getAllTours',
  async (_, thunkAPI) => {
    try {
      const res = await customFetch.get('/tours');
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const createTour = createAsyncThunk('tours/createTour');

const toursSlice = createSlice({
  name: 'tours',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllTours.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllTours.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.toursArr = payload;
    },
    [getAllTours.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const {} = toursSlice.actions;

export default toursSlice.reducer;
