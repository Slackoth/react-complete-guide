import React from 'react';
import Style from './Card.module.css';

const Card = props => (
    <div className={`${Style.card} ${props.className}`}>
        {props.children}
    </div>
);

export default Card;