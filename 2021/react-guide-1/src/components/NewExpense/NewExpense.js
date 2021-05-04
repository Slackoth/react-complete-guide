import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm/ExpenseForm';

const NewExpenses = props => {
    const [state, setState] = useState(false);

    const submitExpenseHandler = expense => {
        // const newExpense = {...expense, id: Math.random().toString()};

        props.onNewExpense(expense);
    };

    const showFormHandler = () => {
        setState(prevState => {
            return !prevState;
        });
    };

    return (
        <div className='new-expense'>
            {/* If the condition before "&&" is true, then do what's after the "&&" */}
            {state && <ExpenseForm onCancelExpense={showFormHandler} 
                onSubmitExpense={submitExpenseHandler}/>}
            {!state && <button onClick={showFormHandler}>Add New Expense</button>}
        </div>
    );
};

export default NewExpenses;