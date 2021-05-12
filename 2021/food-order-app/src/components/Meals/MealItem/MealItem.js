import React, { useContext } from 'react';
import { CartContext } from '../../../store/cart-context';
import Styles from './MealItem.module.css';
import MealItemForm from './MealItemForm/MealItemForm';

const MealItem = props => {
    const context = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;

    const addMealItemHandler = amount => {
        context.addItem(
            {id: props.id, name: props.name, amount: amount, price: props.price}
        );
    };

    return (
        <li className={Styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={Styles.description}>{props.description}</div>
                <div className={Styles.price}>{price}</div>
            </div>
            <div><MealItemForm id={props.id} onAddMealItem={addMealItemHandler}/></div>
        </li>
    );
};

export default MealItem;