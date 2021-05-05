import React from 'react';
import Style from './Button.module.css';

const Button = props => (
    <button className={Style.button} type={props.type || 'button'}
        onClick={props.onClick}>{props.children}</button>
);

export default Button;