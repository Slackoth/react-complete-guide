import './ExpenseItems.css';
import Card from '../UI/Card/Card';
import React, {useState} from 'react';
import ExpenseList from './ExpenseList/ExpenseList';
import ExpenseFilter from './ExpenseFilter/ExpenseFilter';
import ExpenseChart from './ExpenseChar/ExpenseChart';

const ExpenseItems = props => {
    const [state, setState] = useState({year: '2022'});

    const filterExpenses = () => {      
        return props.expenses.filter(expense =>
            expense.date.getFullYear() === parseInt(state.year));
    };

    const filterHanlder = selectedYear => {
        setState({year: selectedYear});
    };

    const expenses = filterExpenses();
    
    return (
        <Card className='expenses'>
            <ExpenseFilter onFilter={filterHanlder} selectedYear={state.year}/>
            <ExpenseChart expenses={expenses}/>
            <ExpenseList filteredExpenses={expenses}/>
        </Card>
    );
};

export default ExpenseItems;