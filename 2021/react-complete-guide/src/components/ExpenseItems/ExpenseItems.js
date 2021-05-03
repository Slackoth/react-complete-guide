import React from 'react';
import './ExpenseItems.css';
import Card from '../UI/Card/Card';
import ExpenseItem from './ExpenseItem/ExpenseItem';

const ExpenseItems = props => {
    const toExpenseItem = () => {
        return props.expenses.map((expense, index) => {
            return <ExpenseItem key={index} date={expense.date} title={expense.title}
                amount={expense.amount}/>;
        });
    };
    
    return (
        <Card className='expenses'>
            {toExpenseItem()}
        </Card>
    );
};

export default ExpenseItems;