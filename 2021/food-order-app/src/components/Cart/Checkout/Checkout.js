import React, { useRef, useState } from 'react';
import Styles from './Checkout.module.css';

const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.trim().length === 5;
function isFormValid() { return this.name && this.street && this.postal && this.city };

const Checkout = props => {
    const nameInput = useRef();
    const streetInput = useRef();
    const postalInput = useRef();
    const cityInput = useRef();
    const [formValidity, setFormValidity] = useState({
        name: true, street: true, city: true, postal: true
    })

    const submitHandler = event => {
        event.preventDefault();

        let boolBody = {};
        const body = {
            name: nameInput.current.value,
            street: streetInput.current.value,
            postal: postalInput.current.value,
            city: cityInput.current.value
        }

        for(let key in body) {
            let isValid = false;

            if(key === 'postal')
                isValid = isFiveChars(body[key]);
            else
                isValid = !isEmpty(body[key]);
            
            boolBody[key] = isValid;
        }

        setFormValidity({...boolBody});
        
        boolBody.isTrue = isFormValid;
        
        if(!boolBody.isTrue()) {
            return;
        }
        
        props.onSubmit(body);
    };

    return (
        <form className={Styles.form} onSubmit={submitHandler}>
            <div className={`${Styles.control} ${formValidity.name ? '' : Styles.invalid}`}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameInput}/>
                {!formValidity.name && <p>Enter a valid name!</p>}
            </div>
            <div className={`${Styles.control} ${formValidity.street ? '' : Styles.invalid}`}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetInput}/>
                {!formValidity.street && <p>Enter a valid street!</p>}
            </div>
            <div className={`${Styles.control} ${formValidity.postal ? '' : Styles.invalid}`}>
                <label htmlFor='postal'>Postal code</label>
                <input type='text' id='postal' ref={postalInput}/>
                {!formValidity.postal && <p>Enter a five long postal code!</p>}
            </div>
            <div className={`${Styles.control} ${formValidity.city ? '' : Styles.invalid}`}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityInput}/>
                {!formValidity.city && <p>Enter a valid city!</p>}
            </div>
            <div className={Styles.actions}>
                <button type='button' onClick={props.onClose}>Cancel</button>
                <button className={Styles.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;