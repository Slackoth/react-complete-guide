import React from 'react';
import Styles from './Backdrop.module.css';

const Backdrop = props => (<div className={Styles.backdrop} 
    onClick={props.onClick}></div>);

export default Backdrop;