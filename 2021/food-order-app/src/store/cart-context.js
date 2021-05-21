import React, { useReducer } from 'react';

export const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: item => {},
    removeItem: id => {},
    cleanCart: () => {}
});

const defaultState = {items: [], totalAmount: 0};

const addItem = (stateItems, actionItem) => {
    const index = stateItems.findIndex(item => 
        item.id === actionItem.id);
    
    if(index > -1) {
        const newItems = [...stateItems];
        const modifiedItem = newItems[index];
        modifiedItem.amount += actionItem.amount;
        newItems[index] = modifiedItem;

        return newItems;
    }
    else return [...stateItems, actionItem];
};

const removeItem = (stateItems, index) => {
    const newItems = [...stateItems];
    const modifiedItem = newItems[index];

    if(modifiedItem.amount > 1) {
        modifiedItem.amount -= 1;
        newItems[index] = modifiedItem;
    }
    else newItems.splice(index, 1);

    return newItems;
};

const doAction = (prevState, action) => {
    let newItems = [];
    let newAmount = 0;
    switch (action.type) {
        case 'ADD_ACTION':
            newItems = addItem(prevState.items, action.value);
            newAmount = prevState.totalAmount + action.value.amount
                * action.value.price;
            
            return {items: newItems, totalAmount: newAmount};
        
        case 'REMOVE_ACTION':
            const index = prevState.items.findIndex(item => item.id === action.value);
            newItems = removeItem(prevState.items, index);
            newAmount = prevState.totalAmount - prevState.items[index].price;
            
            return {items: newItems, totalAmount: newAmount};
        
        case 'CLEAN_ACTION':
            return defaultState;
        
        default:
            return defaultState;
    }
}

const cartReducer = (prevState, action) => {
    return doAction(prevState, action);    
};

export const CartContextProvider = props => {
    const [cartState, cartDispatcher] = useReducer(cartReducer, defaultState);

    const addItemHandler = item => {
        cartDispatcher({type: 'ADD_ACTION', value: item});
    };

    const removeItemHandler = id => {
        cartDispatcher({type: 'REMOVE_ACTION', value: id});
    };

    const cleanCartHandler = () => {
        cartDispatcher({type: 'CLEAN_ACTION', value: null});
    };
    
    const context = {
        items: cartState.items, totalAmount: cartState.totalAmount, 
        addItem: addItemHandler, removeItem: removeItemHandler,
        cleanCart: cleanCartHandler
    };
    
    return (
        <CartContext.Provider value={context}>
            {props.children}
        </CartContext.Provider>
    );
};

