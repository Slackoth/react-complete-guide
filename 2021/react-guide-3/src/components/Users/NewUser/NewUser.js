import Card from '../../UI/Card/Card';
import React, { useState } from 'react';
import Style from './NewUser.module.css';
import Button from '../../UI/Button/Button';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';

const NewUser = props => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState({title: '', message: '', show: false});

    const checkAge = age => {
        return age < 8 || age >= 100;
    };

    const checkEmptyFields = (username, age) => {
        return username.length === 0 || age.length === 0;
    }

    const setErrorState = (title, message) => {
        setError({title: title, message: message, show: true});
    }

    const submitFormHandler = event => {
        event.preventDefault();
        
        if(checkEmptyFields(username.trim(), age.trim())) {
            setErrorState('Empty fields!', 'Please fill all fields.');
            return;
        }

        if(checkAge(+age)) {
            setErrorState('Invalid age', 'Please enter an age between 8 and 100!');
            return;
        }
        
        props.onNewUser({username: username, age: age});
        setUsername('');
        setAge('');
    };

    const changeUsernameHandler = event => {
        setUsername(event.target.value);
    };

    const changeAgeHandler =  event => {
        setAge(event.target.value);
    };

    const closeErrorHandler = () => {
        setError({title: '', message: '', show: false});
    }

   return  (
       <div>
           {error.show && <ErrorModal title={error.title} message={error.message}
            onClose={closeErrorHandler}/>}
            <Card className={Style.input}>
                <form onSubmit={submitFormHandler}>
                    <div>
                        <label htmlFor='username'>Username</label>
                        <input type='text' id='username' value={username}
                            onChange={changeUsernameHandler}/>
                    </div>
                    <div>
                        <label htmlFor='age'>Age</label>
                        <input type='number' id='age' value={age}
                            onChange={changeAgeHandler}/>
                    </div>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default NewUser;