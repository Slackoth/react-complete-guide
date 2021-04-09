// import './Person.css';
import React from 'react';
import styled from 'styled-components';
// import Radium from 'radium';

// This is already a react component
const StyledDiv = styled.div `
    width: 60%;
    margin: 16px auto;
    padding: 16px;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    text-align: center;

    @media(min - width : 500 px) {
        width : '450px'
    }`;


const person = props => {
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };

    return (
        // <div className='Person' style={style}>
        <StyledDiv>
            <p onClick={props.clickEvent}>I'm a person, my name is {props.name} and I'm years {props.age} old!</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changeEvent}
                value={props.name}/>
        </StyledDiv>
        // </div>
    );
};

export default person;
// export default Radium(person);