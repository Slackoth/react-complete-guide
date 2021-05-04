import React, {useState} from 'react';
import './ExpenseItem.css';
import Card from '../../UI/Card/Card';
import ExpenseDate from './ExpenseDate/ExpenseDate';

const ExpenseItem = props => {
    const [state, setState] = useState({
        date: props.date, 
        title: props.title,
        amount: props.amount
    });

    const changeTitleHandler = () => {
        const newState = {...state};
        newState.title = 'Changed title!';

        setState(newState);
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate date={state.date}/>
            <div className='expense-item__description'>
                <h2>{state.title}</h2>
                <div className='expense-item__price'>${state.amount}</div>
            </div>
            <button onClick={changeTitleHandler}>CHANGE TITLE</button>
        </Card>
    );
}

export default ExpenseItem;
