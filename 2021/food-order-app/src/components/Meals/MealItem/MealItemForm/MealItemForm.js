import React, { useRef, useState } from 'react';
import Input from '../../../UI/Input/Input';
import Styles from './MealItemForm.module.css';

const MealItemForm = props => {
    const inputRef = useRef();
    const [isValid, setIsValid] = useState(true);

    const setAmountIsValid = flag => setIsValid(flag);

    const checkAmountInput = amount => 
        amount.trim().length !== 0 && (+amount >= 1 && +amount <= 5);
    

    const submitHandler = event => {
        event.preventDefault();

        const amountInput = inputRef.current.value;
        
        if(!checkAmountInput(amountInput)) {
            setAmountIsValid(false);
            return;
        }

        props.onAddMealItem(+amountInput);
        setAmountIsValid(true);    
    };

    return <form className={Styles.form} onSubmit={submitHandler}>
        <Input label='Amount' input={{
            id: `amount_${props.id}`,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
        }} ref={inputRef}/>
        <button type='submit'>+ Add</button>
        {!isValid && <p>Please enter a valid amount!</p>}
    </form>
};

export default MealItemForm;