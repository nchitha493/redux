import {createStore} from 'redux';
import { createSlice,configureStore } from '@reduxjs/toolkit';

//const couterReducer = 
const counterSlice = createSlice({
    name:'couter',
    initialState:{counter:0},
    reducers:{
        increment(state){
            state.couter ++;
        },
        decrement(state){
            state.couter --;
        }
    }
})

const store =configureStore({
    reducer:counterSlice.reducer
});
// const store = createStore((state ={couter: 0}, action)=>{
//     if(action.type ==='increment'){
//         console.log(state);
//         return {  
//             couter: state.couter+1
//         }
//     }
//     if(action.type ==='decrement'){
//         console.log(state);
//         return {  
//             couter: state.couter-1
//         }
//     }
//     return state
// });

export default store;

// store.subscribe(()=>{
//     const latestState = store.getState();
//     //console.log(latestState);
// });
// store.dispatch({type: 'increment'});store.dispatch({type: 'increment'});store.dispatch({type: 'increment'});store.dispatch({type: 'increment'});store.dispatch({type: 'increment'});