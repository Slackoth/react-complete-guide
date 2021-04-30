import React from 'react';
import ModalStyle from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import AuxWrapper from '../../../hoc/AuxWrapper';

const modal = props => {
    return(
        <AuxWrapper>
            <Backdrop show={props.show} clicked={props.close}/>
            <div className={ModalStyle.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                {props.children}
            </div>
        </AuxWrapper>
    );
};

export default modal;