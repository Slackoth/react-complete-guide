import './Person.css';
import React from 'react';
import Radium from 'radium';

const person = props => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };

    return (
        <div className='Person' style={style}>
            <p onClick={props.clickEvent}>I'm a person, my name is {props.name} and I'm years {props.age} old!</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changeEvent}
                value={props.name}/>
        </div>
    );
};

export default Radium(person);