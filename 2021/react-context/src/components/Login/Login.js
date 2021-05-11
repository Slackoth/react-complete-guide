import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import { AuthContext } from '../../store/auth-context';
import Input from '../UI/Input/Input';

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
  const context = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();

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
    
    if(formIsValid)
      context.onLogin(emailState.value, passwordState.value);
    else if(!isEmailValid) {
      emailRef.current.focus();
    }
    else {
      passwordRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input id='email' label='E-Mail' type='email' isValid={isEmailValid}
          value={emailState.value} onChange={emailChangeHandler} ref={emailRef}
          onBlur={validateEmailHandler}/>
        <Input id='password' label='Password' type='password' isValid={isPasswordValid}
          value={passwordState.value} onChange={passwordChangeHandler} 
          ref={passwordRef} onBlur={validatePasswordHandler}/>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
