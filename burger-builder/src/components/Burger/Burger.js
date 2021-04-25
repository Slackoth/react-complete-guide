import React from 'react';
import BurgerStyle from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
    return (
        <div className={BurgerStyle.Burger}>
            <BurgerIngredient type='bread-top'/>
            <BurgerIngredient type='cheese'/>
            <BurgerIngredient type='meat'/>
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
};

export default burger;