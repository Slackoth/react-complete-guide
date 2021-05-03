import React from 'react';
import BuildControlStyle from './BuildControl.module.css';

const buildControl = props => {
    return (
        <div className={BuildControlStyle.BuildControl}>
            <div className={BuildControlStyle.Label}>{props.label}</div>
            <button className={BuildControlStyle.Less}
                onClick={props.removeIngredient} 
                disabled={props.disabledAddRemove}>Less</button>
            <button className={BuildControlStyle.More}
                onClick={props.addIngredient}>More</button>
        </div>
    );
};

export default buildControl;