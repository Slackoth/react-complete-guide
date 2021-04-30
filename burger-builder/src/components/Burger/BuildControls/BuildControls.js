import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import BuildControlsStyle from './BuildControls.module.css';

const controls = [
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
    {label: 'Salad', type: 'salad'},
];

const buildControls = props => {
    return (
        <div className={BuildControlsStyle.BuildControls}>
            <p>Total price: <strong>${props.totalPrice.toFixed(2)}</strong></p>
            {controls.map(control => {
                return <BuildControl key={control.label} label={control.label}
                addIngredient={() => props.addIngredient(control.type)} 
                removeIngredient={() => props.removeIngredient(control.type)}
                disabledAddRemove={props.disabledAddRemove[control.type]}/>
            })}
            <button className={BuildControlsStyle.OrderButton}
                disabled={!props.purchasable}
                onClick={props.purchased}>ORDER NOW</button>
        </div>
    );
};

export default buildControls;