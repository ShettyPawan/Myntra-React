import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers:{
    addToBag: (state,actions)=>{
      state.push(actions.payload);
    },
    removeFromBag: (state,actions)=>{
      return state.filter(itemID => itemID!=actions.payload);
    },
    resetBag:(state,actions)=>{
      return(actions.payload);
    }
  }
})

export default bagSlice;

export const bagSliceAction = bagSlice.actions;

