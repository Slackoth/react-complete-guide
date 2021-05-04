import './ExpenseForm.css';
import React, {useState} from 'react';

const ExpenseForm = props => {
    const [state, setState] = useState({date: '', title: '', amount: ''});

    const titleOnChangeHandler = event => {
        setState(prevState => {
            return {...prevState, title: event.target.value};
        });
    };

    const amountOnChangeHandler = event => {
        setState(prevState => {
            return {...prevState, amount: event.target.value};
        });
    };

    const dateOnChangeHandler = event => {
        setState(prevState => {
            return {...prevState, date: event.target.value};
        });
    };

    const submitFormHandler = event => {
        // Prevents page reloading
        event.preventDefault();
        
        const data = {
            ...state,
            date: new Date(state.date),
            // Convert it to number
            amount: +state.amount
        };

        props.onSubmitExpense(data);
        cancelFormHanlder();
    };

    const cancelFormHanlder = () => {
        props.onCancelExpense();
        setState({title: '', amount: '', date: ''});
    };

    return (
        <form onSubmit={submitFormHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleOnChangeHandler}
                        value={state.title}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' 
                        onChange={amountOnChangeHandler} value={state.amount}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31'
                        onChange={dateOnChangeHandler} value={state.date}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={cancelFormHanlder}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
