import React from 'react';
import Button from '../../UI/Button/Button';
import AuxWrapper from '../../../hoc/AuxWrapper';

const listIngredients = ingredients => {
    return Object.keys(ingredients).map(key => {
        return <li key={key}>
            <span style={{textTransform: 'capitalize'}}>{key}</span>
            : {ingredients[key]}
        </li>;
    });
};

const orderSummary = props => {
    return (
        <AuxWrapper>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {listIngredients(props.ingredients)}
            </ul>
            <p>Total price: <strong>${props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType='Danger' clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType='Success' clicked={props.purchaseContinued}>CONTINUE</Button>
        </AuxWrapper>
    );
};

export default orderSummary;