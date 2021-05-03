import React from 'react';
import BackdropStyle from './Backdrop.module.css';

const backdrop = props => {
    return (
        props.show ? 
            <div className={BackdropStyle.Backdrop} onClick={props.clicked}></div>
            : null
    );
};

export default backdrop;