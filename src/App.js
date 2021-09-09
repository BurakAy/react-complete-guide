import React, { useState } from "react";
import Expenses from "../src/components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
    { 
      id: 'e1', 
      title: 'Car Insurance', 
      amount: 294.67, 
      date: new Date(2021, 8, 1)
    },
    { 
      id: 'e2', 
      title: 'Groceries', 
      amount: 129.89, 
      date: new Date(2019, 8, 3)
    },
    { 
      id: 'e3', 
      title: 'Cell Phone', 
      amount: 82.14, 
      date: new Date(2021, 8, 6)
    },
    { 
      id: 'e4', 
      title: 'Internet', 
      amount: 72.10, 
      date: new Date(2020, 7, 28)
    },
];

const App = () => {
  const [expenses, setNewExpense] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setNewExpense(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
