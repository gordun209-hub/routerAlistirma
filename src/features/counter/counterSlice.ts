import {createSlice} from "@reduxjs/toolkit";
import type {RootState} from "../../app/store";
interface CounterState {
    count: number;
}
const initialState:CounterState = { count: 0 };

const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:state=>{
            state.count+=1
        },
        decrement:state=>{
            state.count-=1
        },
        reset:(state)=>{
            state.count=0
        }
    }
})

export default counterSlice;
export const {increment,decrement,reset} = counterSlice.actions;
export const selectCount=(state:RootState)=>state.count