import React, {Component} from 'react';
import ModalStyle from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import AuxWrapper from '../../../hoc/AuxWrapper/AuxWrapper';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        console.log(`${Modal.name} shouldComponentUpdate`);
        
        // Render OrderSummary only when necessary
        return nextProps.show !== this.props.show;
    }

    componentDidUpdate() {
        console.log(`${Modal.name} componentDidUpdate`);
    }

    render() {
        return(
            <AuxWrapper>
                <Backdrop show={this.props.show} clicked={this.props.close}/>
                <div className={ModalStyle.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </AuxWrapper>
        );
    }
};

export default Modal;