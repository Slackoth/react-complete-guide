import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import ExpenseItems from './components/ExpenseItems/ExpenseItems';

const App = () => {
    const expenses = [
      {date: new Date(2021, 2, 28), title: 'Car insurance', amount: 275.75},
      {date: new Date(2021, 3, 28), title: 'House insurance', amount: 375.75},
      {date: new Date(2021, 4, 28), title: 'PC insurance', amount: 475.75}
    ];

    const newExpenseHandler = expense => {
        console.log(expense);
    };

    return (
        <div className="App">
            <NewExpense onNewExpense={newExpenseHandler}/>
            <ExpenseItems expenses={expenses}/>
        </div>
    );
}

export default App;
