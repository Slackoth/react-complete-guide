import React from 'react';
import BurgerStyle from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

/**
 * Returns an array of BurgerIngredients which their number and type is determined by
 * each key and value of the ingredients object.
 */
const mapIngredients = ingredients => {
    return Object.keys(ingredients).map(key => {
        /**
        * Returns an array of arrays where each inner array holds a number and type 
        * of BurgerIngredients determined by the value of each property in the 
        * ingredients object.
        */
        return [...Array(ingredients[key])].map((_, index) => {
            return <BurgerIngredient key={key + index} type={key}/>;
        })
    })
    /**
     * Reduces the array of BurgerIngredients arrays to an array of only
     * BurgerIngredients due to merging each array with the concat function.
     */
    .reduce((accumulator, currentValue) => {
        return accumulator.concat(currentValue);
    }, [] /*Initial value of accumulator*/);
};

const burger = props => {
    let burgerIngredients = mapIngredients(props.ingredients);

    if(burgerIngredients.length === 0)
        burgerIngredients = <p>Please start adding ingredients!</p>

    return (
        <div className={BurgerStyle.Burger}>
            <BurgerIngredient type='bread-top'/>
            {burgerIngredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
};

export default burger;