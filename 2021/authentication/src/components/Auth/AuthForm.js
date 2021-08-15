import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../store/auth-context';
import {API_KEY} from '../../utils/utils';
import {useHistory} from 'react-router-dom';
import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const emailInput = useRef();
  const passwordInput = useRef();
  const context = useContext(AuthContext);
  const history = useHistory();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = event => {
    event.preventDefault();

    let url = '';
    const email = emailInput.current.value;
    const password = passwordInput.current.value;
    const body = {email, password, returnSecureToken: true}

    setIsLoading(true);

    if(isLogin) 
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`
    else 
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {'Content-Type': 'application/json'}
    }).then(response => {
      setIsLoading(false);

      if(response.ok) 
        return response.json();
      else {
        return response.json().then(data => {
          let message = 'Authentication failed!';

          if(data && data.error && data.error.message)
            message = data.error.message;
          
          throw new Error(message);
        });
      }
    }).then(data => {
        const expirationDate = new Date(new Date().getTime() + (+data.expiresIn * 1000));

        console.log(`AuthForm: ${expirationDate.toISOString()}`);

        context.login(data.idToken, expirationDate.toISOString());
        history.replace('/');
    }).catch(err => alert(err.message));;
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required  ref={emailInput}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInput}/>
        </div>
        <div className={classes.actions}>
          {isLoading && <p>Sending request...</p>}
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
