// const redux = require('redux');
import {configureStore} from '@reduxjs/toolkit';
import authSlice from './auth-slice';
import counterSlice from './counter-slice';

// Without redux toolkit
const counterReducer = (prevState = {counter: 0, show: false}, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                counter: prevState.counter + action.amount,
                show: prevState.show
            };
        
        case 'DECREMENT':
            return {
                counter: prevState.counter - action.amount,
                show: prevState.show
            };
        
        case 'TOGGLE':
            return {
                counter: prevState.counter,
                show: !prevState.show
            };
        
        default:
            return {...prevState};
    }
};

// Without redux toolkit
// const store = redux.createStore(counterReducer);

// With redux toolkit
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;