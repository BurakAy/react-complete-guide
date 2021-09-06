import ExpenseItem from "./components/ExpenseItem";

const App = () => {
  const expenses = [
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
      date: new Date(2021, 8, 3)
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
      date: new Date(2021, 7, 28)
    },
  ];

  return (
    <div className="App">
      <h2>
        Let's get started!
      </h2>

      <ExpenseItem 
        title={expenses[0].title} 
        amount={expenses[0].amount} 
        date={expenses[0].date} 
      />

      <ExpenseItem 
        title={expenses[1].title} 
        amount={expenses[1].amount} 
        date={expenses[1].date} 
      />
      <ExpenseItem 
        title={expenses[2].title} 
        amount={expenses[2].amount} 
        date={expenses[2].date} 
      />
      <ExpenseItem 
        title={expenses[3].title} 
        amount={expenses[3].amount} 
        date={expenses[3].date} 
      />
    </div>
  );
}

export default App;
