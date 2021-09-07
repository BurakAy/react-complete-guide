import Expenses from "../src/components/Expenses/Expenses";

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
        Expenses
      </h2>

      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
