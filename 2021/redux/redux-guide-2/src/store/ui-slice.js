import { createSlice } from "@reduxjs/toolkit";

const initial = {notification: null};

const notification = (state, action) => {
    state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message
    };
};

const uiSlice = createSlice({
    name: 'ui',
    initialState: initial,
    reducers: {
        showNotification: notification
    }
})

export default uiSlice;