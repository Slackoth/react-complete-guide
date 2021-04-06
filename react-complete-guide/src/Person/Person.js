import './Person.css'
import React from 'react';

const person = props => {
    return (
        <div className='Person'>
            <p onClick={props.clickEvent}>I'm a person, my name is {props.name} and I'm years {props.age} old!</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changeEvent}
                value={props.name}/>
        </div>
    );
};

export default person;