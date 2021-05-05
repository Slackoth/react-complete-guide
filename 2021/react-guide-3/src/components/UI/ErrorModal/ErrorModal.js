import React from 'react';
import Card from '../Card/Card';
import Button from '../Button/Button';
import Style from './ErrorModal.module.css';

const ErrorModal = props => (
    <div>
        <div className={Style.backdrop} onClick={props.onClose}></div>
        <Card className={Style.modal}>
            <header className={Style.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={Style.content}>
                <p>{props.message}</p>
            </div>
            <footer className={Style.actions}>
                <Button onClick={props.onClose}>Ok</Button>
            </footer>
        </Card>
    </div>
);

export default ErrorModal;