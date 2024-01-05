import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: 'fetchStatus',
  initialState: {
    fetchCompleted: false,
    isFetching: false,
  },
  reducers:{
    dataFetched: (state)=>{
      state.fetchCompleted = true;
    },
    fetchStarted: (state)=>{
      state.isFetching = true;
    },
    fetchEnded: (state)=>{
      state.isFetching = false;
    }
  }
})

export default fetchStatusSlice;

export const fetchStatusAction = fetchStatusSlice.actions;

