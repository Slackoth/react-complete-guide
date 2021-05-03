import React from 'react';
import ButtonStyle from './Button.module.css';

const button = props => {
    return(
        <button 
            className={[ButtonStyle.Button, ButtonStyle[props.btnType]].join(' ')}
            onClick={props.clicked}>{props.children}</button>
    );
};

export default button;