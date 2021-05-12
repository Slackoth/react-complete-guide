import React from 'react';
import Styles from './Input.module.css';

const Input =  React.forwardRef(
    (props, ref) => {
        return (<div className={Styles.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input} ref={ref}/>
        </div>);
    }
);

export default Input;