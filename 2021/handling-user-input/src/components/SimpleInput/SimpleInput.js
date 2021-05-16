import React from 'react'
import useInput from '../../hooks/use-input';

const SimpleInput = (props) => {
  // Boolean functions check input validity
  const inputIsNotEmpty = value => value.trim() !== '';
  const checkEmail = email => email.trim().includes('@');

  const {
    value: name, valueIsValid: nameIsValid, valueIsInvalid: nameIsInvalid,
    valueInputChangeHandler: nameInputChangeHandler,
    valueInputBlurHandler: nameInputBlurHandler,
    cleanInput: cleanName
  } = useInput(inputIsNotEmpty);
  const {
    value: email, valueIsValid: emailIsValid, valueIsInvalid: emailIsInvalid,
    valueInputChangeHandler: emailInputChangeHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    cleanInput: cleanEmail
  } = useInput(checkEmail);

  const formIsValid = nameIsValid && emailIsValid;

  const submitHandler = event => {
    event.preventDefault();

    if(nameIsInvalid || emailIsInvalid) 
      return;

    console.log(name);
    console.log(email);
    cleanName(); cleanEmail();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={`form-control ${nameIsInvalid ? 'invalid' : ''}`}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler} value={name}/>
        {nameIsInvalid && <p className='error-text'>Name must not be empty!</p>}
      </div>
      <div className={`form-control ${emailIsInvalid ? 'invalid' : ''}`}>
        <label htmlFor='email'>Your Email</label>
        <input type='email' id='email' onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler} value={email}/>
        {emailIsInvalid && <p className='error-text'>Email is not valid!</p>} 
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
