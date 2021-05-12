import ReactDOM from 'react-dom';
import React, { Fragment } from 'react';
import Styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const ModalOverlay = props => {
    return (
        <div className={Styles.modal}>
            <div className={Styles.content}>{props.children}</div>
        </div>
    );
};


const Modal = props => {
    const portalElement = document.getElementById('overlay');

    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClose}/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, 
            portalElement)}
        </Fragment>
    );
};

export default Modal;