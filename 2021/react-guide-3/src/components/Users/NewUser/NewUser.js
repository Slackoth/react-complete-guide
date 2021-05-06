import Card from '../../UI/Card/Card';
import Style from './NewUser.module.css';
import Button from '../../UI/Button/Button';
import React, { useState, useRef } from 'react';
import Wrapper from '../../Helpers/Wrapper/Wrapper';
import ErrorModal from '../../UI/Modal/ErrorModal/ErrorModal';

const NewUser = props => {
    const nameInpRef = useRef();
    const ageInpRef = useRef();
    // const [username, setUsername] = useState('');
    // const [age, setAge] = useState('');
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

        const username = nameInpRef.current.value;
        const age = ageInpRef.current.value;
        
        if(checkEmptyFields(username.trim(), age.trim())) {
            setErrorState('Empty fields!', 'Please fill all fields.');
            return;
        }

        if(checkAge(+age)) {
            setErrorState('Invalid age', 'Please enter an age between 8 and 100!');
            return;
        }
        
        props.onNewUser({username: username, age: age});
        nameInpRef.current.value = ''
        ageInpRef.current.value = ''
        // setUsername('');
        // setAge('');
    };

    // const changeUsernameHandler = event => {
    //     setUsername(event.target.value);
    // };

    // const changeAgeHandler =  event => {
    //     setAge(event.target.value);
    // };

    const closeErrorHandler = () => {
        setError({title: '', message: '', show: false});
    }

   return  (
       <Wrapper>
           {error.show && <ErrorModal title={error.title} message={error.message}
            onClose={closeErrorHandler}/>}
            <Card className={Style.input}>
                <form onSubmit={submitFormHandler}>
                    <div>
                        <label htmlFor='username'>Username</label>
                        <input type='text' id='username' ref={nameInpRef}/>
                    </div>
                    <div>
                        <label htmlFor='age'>Age</label>
                        <input type='number' id='age' ref={ageInpRef}/>
                    </div>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default NewUser;