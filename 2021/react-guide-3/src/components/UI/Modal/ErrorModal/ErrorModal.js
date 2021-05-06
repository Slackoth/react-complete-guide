import ReactDOM from 'react-dom';
import Modal from '../Modal';
import React, { Fragment } from 'react';
import Backdrop from '../../Backdrop/Backdrop';

const ErrorModal = props => (
    <Fragment>
        {ReactDOM.createPortal(<Backdrop onClick={props.onClose}/>, 
            document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(<Modal title={props.title} message={props.message}
            onClose={props.onClose}/>, document.getElementById('overlay-root'))}
    </Fragment>
);

export default ErrorModal;