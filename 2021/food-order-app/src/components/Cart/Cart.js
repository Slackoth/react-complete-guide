import React, {useContext} from 'react';
import Modal from '../UI/Modal/Modal';
import Styles from './Cart.module.css';
import CartItem from './CartItem/CartItem';
import {CartContext} from '../../store/cart-context'

const Cart = props => {
    const context = useContext(CartContext);
    const hasItems = context.items.length > 0;
    const totalAmount = `$${context.totalAmount.toFixed(2)}`

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

    return (
        <Modal onClose={props.onClose}>
            <ul className={Styles['cart-items']}>
                {toCartItem()}
            </ul>
            <div className={Styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={Styles.actions}>
                <button className={Styles['button--alt']}
                    onClick={props.onClose}>Close</button>
                {hasItems && <button className={Styles.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;