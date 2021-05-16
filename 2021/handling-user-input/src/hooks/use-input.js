import React, { useState } from 'react';

const useInput = (validateValue) => {
    const [value, setValue] = useState('');
    const [valueTyped, setValueTyped] = useState(false);
    const valueIsValid = validateValue(value);
    const valueIsInvalid = !valueIsValid && valueTyped;

    const valueInputChangeHandler = event => {
        setValue(event.target.value);
    };
    
    const valueInputBlurHandler = event => {
        setValueTyped(true);
    };

    const cleanInput = () => {
        setValue('');
        setValueTyped(false);
    };
    
    return {
        value, valueIsValid, valueIsInvalid, 
        valueInputChangeHandler, valueInputBlurHandler, cleanInput
    };
};

export default useInput;