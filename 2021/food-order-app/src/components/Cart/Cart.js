import React, {Fragment, useContext, useState} from 'react';
import Modal from '../UI/Modal/Modal';
import Styles from './Cart.module.css';
import CartItem from './CartItem/CartItem';
import {CartContext} from '../../store/cart-context'
import Checkout from './Checkout/Checkout';

const Cart = props => {
    const context = useContext(CartContext);
    const hasItems = context.items.length > 0;
    const totalAmount = `$${context.totalAmount.toFixed(2)}`
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);

    const addItemHandler = item => {
        context.addItem({...item, amount: 1});
    };

    const removeItemHandler = id => {
        context.removeItem(id);
    };

    const toCartItem = () => {
        return context.items.map(item => {
            return <CartItem key={item.id} 
            name={item.name} amount={item.amount} price={item.price} 
            onAdd={addItemHandler.bind(null, item)} 
            onRemove={removeItemHandler.bind(null, item.id)}/>
        });
    };

    const orderHandler = () => {
        setIsCheckout(true);
    };

    const submitOrderHandler = async userData => {
        setIsSubmitting(true);
        await fetch('https://react-http-689f4-default-rtdb.firebaseio.com/orders.json', {
            method: 'post',
            body: JSON.stringify({
                user: userData,
                items: context.items
            }),
            headers: {'Content-Type': 'application/json'}
        });
        setIsSubmitting(false);
        setDidSubmit(true);
        context.cleanCart();
    };

    const showCheckout = () => {
        return isCheckout ? <Checkout onClose={props.onClose} 
            onSubmit={submitOrderHandler}/> : 
            (<div className={Styles.actions}>
                <button className={Styles['button--alt']}
                    onClick={props.onClose}>Close</button>
                {hasItems && <button className={Styles.button}
                    onClick={orderHandler}>Order</button>}
            </div>);
    };

    const cartContent = <Fragment>
            <ul className={Styles['cart-items']}>
                {toCartItem()}
            </ul>
            <div className={Styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {showCheckout()}
        </Fragment>;
    const isSubmittingContent = <p>Sending order...</p>;
    const didSubmitContent = <Fragment>
        <p>Order sent successfully!</p>
        <div className={Styles.actions}>
            <button className={Styles.button}
                onClick={props.onClose}>Close</button>
        </div>
    </Fragment>

    return (
        <Modal onClose={props.onClose}>
            {!isSubmitting && !didSubmit && cartContent}
            {isSubmitting && isSubmittingContent}
            {!isSubmitting && didSubmit && didSubmitContent}
        </Modal>
    );
};

export default Cart;