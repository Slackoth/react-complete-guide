import { cartActions, uiActions } from "./index";

const sendRequest = async cartItems => {
    const response = await fetch('https://react-http-689f4-default-rtdb.firebaseio.com/redux-cart.json', {
        method: 'PUT',
        body: JSON.stringify(cartItems)
    });

    if(!response.ok) 
        throw new Error('Sending cart data failed.');
};

export const sendCartItems = cartItems => {
    return async dispatch => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data!'
        }));

        try {
            await sendRequest(cartItems);    

            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success',
                message: 'Cart data sent successfully!'
            }));
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error...',
                message: 'Sending cart items failed!'
            }));
        }
    };
};

const fetchItems = async () => {
    const response = await fetch('https://react-http-689f4-default-rtdb.firebaseio.com/redux-cart.json');

    if(!response.ok)
        throw new Error('Could not fetch cart items!');

    const data = await response.json();

    return data;
};

export const fetchCartItems = () => {
    return async dispatch => {
        try {
            const cartItems = await fetchItems();
            
            // In case firebase returns undefined due we emptied the cart
            dispatch(cartActions.replace(cartItems || []));
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error...',
                message: 'Fetching cart items failed!'
            }));
        };
    };
};