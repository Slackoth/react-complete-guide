import { createSlice } from "@reduxjs/toolkit";

const initial = {
    show: false,
    items: [],
    changed: false
};

const showCart = state => {state.show = !state.show;};

const addItem = (state, action) => {
    const item = action.payload;
    const index = state.items.findIndex(cartItem => cartItem.title === item.title);

    state.changed = true;

    if(index !== -1) {
        state.items[index].quantity += 1;
        state.items[index].total += item.price;
    }
    else {
        const newItem = {...item, quantity: 1, total: item.price}
        state.items.push(newItem);
    }
};

const removeItem = (state, action) => {
    const title = action.payload;
    const index = state.items.findIndex(item => item.title === title);
    const quantity = state.items[index].quantity;
    const price = state.items[index].price;

    state.changed = true;

    if(index !== -1) {
        if(quantity > 1) {
            state.items[index].quantity -= 1;
            state.items[index].total -= price;
        }
        else state.items.splice(index, 1);
    }
    else return;
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initial,
    reducers: {
        show: showCart,
        add: addItem,
        remove: removeItem,
        replace: (state, action) => {state.items = action.payload;}
    }
});

export default cartSlice;