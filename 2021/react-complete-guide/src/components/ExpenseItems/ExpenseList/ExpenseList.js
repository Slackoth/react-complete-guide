import React from 'react';
import './ExpenseList.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

const ExpenseList = props => {
    const toExpenseItem = expenses => {      
        return expenses.map((expense, index) => {
            return <ExpenseItem key={index} date={expense.date} title={expense.title} 
                amount={expense.amount}/>;
        });
    };

    if(props.filteredExpenses.length === 0) {
        return <h2 className='expense-list__fallback'>No expenses found...</h2>;
    }
    else {
        return <ul className='expense-list'>{toExpenseItem(props.filteredExpenses)}</ul>
    }
};

export default ExpenseList;