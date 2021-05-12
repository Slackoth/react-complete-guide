import React, { Fragment, useContext } from 'react';
import Styles from './Header.module.css';
import CartButton from './CartButton/CartButton';
import mealImg from '../../../assets/img/meals.jpg';
import { CartContext } from '../../../store/cart-context';

const Header = props => {
    const context = useContext(CartContext);
    const items = context.items;

    const getAmountItems = () => {
        return items.reduce((accumulator, currentValue) => 
            accumulator + currentValue.amount, 0);
    };

    return <Fragment>
        <header className={Styles.header}>
            <h1>Gabs Meals</h1>
            <CartButton onClick={props.onOpenCart} amountItems={getAmountItems()}/>
        </header>
        <div className={Styles['main-image']}>
            <img src={mealImg} alt='Dinner table'/>
        </div>
    </Fragment>
};

export default Header;