import React from 'react';
import Card from '../Card/Card';
import Button from '../Button/Button';
import Style from './Modal.module.css';

const Modal = props => (
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
);

export default Modal;