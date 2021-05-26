import { createSlice } from "@reduxjs/toolkit";

const initialCounter = {counter: 0, show: false};
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounter,
    reducers: {
        // payload is the default name for any passed value in the action
        increment(state, action) {state.counter += action.payload;},
        decrement(state, action) {state.counter -= action.payload;},
        toggle(state) {state.show = !state.show;},
    }
});

export default counterSlice;