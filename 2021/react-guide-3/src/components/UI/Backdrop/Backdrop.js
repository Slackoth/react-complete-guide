import React from 'react';
import Style from './Backdrop.module.css';

const Backdrop  = props => (
    <div className={Style.backdrop} onClick={props.onClick}></div>
);

export default Backdrop;