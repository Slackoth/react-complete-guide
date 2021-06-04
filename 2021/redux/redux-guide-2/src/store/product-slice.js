import { createSlice } from "@reduxjs/toolkit";

const initial = {
    items: [
        {
            title: 'Mr. Peanutbutter', 
            price: 6,
            description: `Who's that dog?`
        },
        {
            title: 'Bojack Horseman', 
            price: 0.5,
            description: `Horsin' around`
        },
        {
            title: 'Sara Lynn', 
            price: 5,
            description: `I wanna be an architect`
        },
    ]
};

const productSlice = createSlice({
    name: 'product',
    initialState: initial,
    reducers: {}
});

export default productSlice;