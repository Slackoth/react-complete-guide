import './App.css';
import React, {useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import ExpenseItems from './components/ExpenseItems/ExpenseItems';

const DUMMY_EXPENSES = [
    {date: new Date(2020, 2, 28), title: 'Car insurance', amount: 275.75},
    {date: new Date(2021, 3, 28), title: 'House insurance', amount: 375.75},
    {date: new Date(2022, 4, 28), title: 'PC insurance', amount: 475.75}
];

const App = () => {
    const [state, setState] = useState(DUMMY_EXPENSES);

    const newExpenseHandler = expense => {
        setState(prevState => [expense, ...prevState]);
    };

    return (
        <div className="App">
            <NewExpense onNewExpense={newExpenseHandler}/>
            <ExpenseItems expenses={state}/>
        </div>
    );
}

export default App;