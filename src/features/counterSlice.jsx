import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name:"counter",
    initialState:{
        count:0,
    },
    reducers:{
        increment:(state, action)=>{
            console.log("this is action=>", action);
            state.count++;
        },
        decrement:(state)=>{
            state.count--;
        }
    }
});

console.log("slice", counterSlice);

export const {increment, decrement} = counterSlice.actions;

export default counterSlice.reducer;
