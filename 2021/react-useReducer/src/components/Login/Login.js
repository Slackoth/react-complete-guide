import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (prevState, action) => {
  switch (action.type) {
    case 'EMAIL_INPUT':
      return {value: action.value, isValid: action.value.includes('@')};

    case 'INPUT_BLUR':
        return {value: prevState.value, isValid: prevState.value.includes('@')};
    
    default:
      break;
  }

  return {value: '', isValid: false};
};
const passwordReducer = (prevState, action) => {
  switch (action.type) {
    case 'PASSWORD_INPUT':
      return {value: action.value, isValid: action.value.trim().length > 6};

    case 'INPUT_BLUR':
        return {value: prevState.value, isValid: prevState.value.trim().length > 6};
    
    default:
      break;
  }

  return {value: '', isValid: false};
};

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = 
    useReducer(emailReducer, {value: '', isValid: null});
  const [passwordState, dispatchPassword] = 
    useReducer(passwordReducer, {value: '', isValid: null});
  const {isValid: isEmailValid} = emailState;
  const {isValid: isPasswordValid} = passwordState;
  console.log(isEmailValid);

  useEffect(() => {
    console.log('Checking form validity...');

    const timeout = setTimeout(() => {
      setFormIsValid(isEmailValid && isPasswordValid);
    }, 500);

    return () => clearTimeout(timeout);
  }, [isEmailValid, isPasswordValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'EMAIL_INPUT', value: event.target.value});
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'PASSWORD_INPUT', value: event.target.value});
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'INPUT_BLUR', value: null});
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'INPUT_BLUR', value: null});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
