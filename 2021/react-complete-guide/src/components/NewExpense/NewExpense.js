import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm/ExpenseForm';

const NewExpenses = props => {
    const submitExpenseHandler = expense => {
        const newExpense = {...expense, id: Math.random().toString()};

        props.onNewExpense(newExpense);
    };

    return (
        <div className='new-expense'>
            <ExpenseForm onSubmitExpense={submitExpenseHandler}/>
        </div>
    );
};

export default NewExpenses;