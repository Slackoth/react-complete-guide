import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './cart-slice';
import productSlice from './product-slice';
import uiSlice from './ui-slice';

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        product: productSlice.reducer,
        ui: uiSlice.reducer
    }
});

export const cartActions = cartSlice.actions;
export const uiActions = uiSlice.actions;

export default store;