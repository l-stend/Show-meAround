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

export const getMyTours = createAsyncThunk(
  'tours/getMyTours',
  async (userEmail, thunkAPI) => {
    try {
      const res = await customFetch.get('/tours');
      console.log(res.data.filter((item) => item.author === userEmail));
      const filtered = res.data.filter((item) => item.author === userEmail);
      return filtered;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const createTour = createAsyncThunk(
  'tours/createTour',
  async (user, ThunkAPI) => {
    try {
      const res = await customFetch.post('/tour', user);
      console.log('res.data    ', res.data);
      return res.data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const updateTour = createAsyncThunk(
  'tours/updateTour',
  async (tour, ThunkAPI) => {
    try {
      const { _id } = tour;
      console.log('tourUpdate from Slice', _id);
      console.log('tourUpdate from Slice', tour);
      const res = await customFetch.patch(`/tour/${_id}`, tour);
      return res.data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

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
    [updateTour.pending]: (state) => {
      state.isLoading = true;
    },
    [updateTour.fulfilled]: (state, { payload }) => {
      const tour = payload;
      state.isLoading = false;
      state.tour = tour;

      // addUserToLocalStorage(tour);
      toast('User Updated');
    },
    [updateTour.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const {} = toursSlice.actions;

export default toursSlice.reducer;
