import React, { useEffect, useState } from 'react';
import Styles from './CartButton.module.css';
import CartIcon from '../../../Cart/CartIcon/CartIcon';

const CartButton = props => {
    const [highligthed, setHighlighted] = useState(false);
    const btnStyles = `${Styles.button} ${highligthed ? Styles.bump : ''}`;
    const amountItems = props.amountItems;

    useEffect(() => {
        if(amountItems > 0)
            setHighlighted(true)
        
        const timer = setTimeout(() => setHighlighted(false), 300);
        
        return () => clearTimeout(timer);
    }, [amountItems]);

    return <button className={btnStyles} onClick={props.onClick}>
        <span className={Styles.icon}><CartIcon/></span>
        <span>Your Cart</span>
        <span className={Styles.badge}>
            {amountItems}
        </span>
    </button>
};

export default CartButton;