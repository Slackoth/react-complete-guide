const redux = require('redux');

// Reducer function
const counterReducer = (prevState = {counter: 0}, dispatchedAction) => {
    switch(dispatchedAction.type) {
        case 'INCREMENT':
            return {counter: prevState.counter + 1};
        
        case 'DECREMENT':
            return {counter: prevState.counter - 1};
        
        default:
            return prevState;
    }
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
    const state = store.getState();

    console.log(state);
};

store.subscribe(counterSubscriber);
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'DECREMENT'});