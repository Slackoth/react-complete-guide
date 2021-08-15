import { useContext, useRef } from 'react';
import { AuthContext } from '../../store/auth-context';
import { API_KEY } from '../../utils/utils';
import classes from './ProfileForm.module.css';
import {useHistory} from 'react-router-dom';

const ProfileForm = () => {
  const passwordInput = useRef();
  const context = useContext(AuthContext);
  const history = useHistory();

  const submitHandler = event => {
    event.preventDefault();

    const password = passwordInput.current.value;
    const body = {idToken: context.token, password, returnSecureToken: true};

    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {'Content-Type': 'application/json'}
    }).then(response => {
      history.replace('/');
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength='6' ref={passwordInput}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
