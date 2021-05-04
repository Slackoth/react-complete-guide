import './ExpenseItems.css';
import Card from '../UI/Card/Card';
import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem/ExpenseItem';
import ExpenseFilter from './ExpenseFilter/ExpenseFilter';

const ExpenseItems = props => {
    const [state, setState] = useState({year: '2019'});

    const toExpenseItem = () => {
        return props.expenses.map((expense, index) => {
            return <ExpenseItem key={index} date={expense.date} title={expense.title}
                amount={expense.amount}/>;
        });
    };

    const filterHanlder = selectedYear => {
        setState({year: selectedYear});
    };
    
    return (
        <Card className='expenses'>
            <ExpenseFilter onFilter={filterHanlder} selectedYear={state.year}/>
            {toExpenseItem()}
        </Card>
    );
};

export default ExpenseItems;