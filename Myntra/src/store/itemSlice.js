import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers:{
    addInitialItems: (state,actions)=>{
      return actions.payload;
    }
  }
})

export default itemSlice;

export const itemSliceAction = itemSlice.actions;

