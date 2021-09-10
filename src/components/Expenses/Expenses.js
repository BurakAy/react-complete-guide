import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import React, { useState } from 'react';
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterDataHandler = (selectedDate) => {
      setFilteredYear(selectedDate);
    }

    const filteredExpenses = props.expenses.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
          <Card className="expenses">
            <ExpenseFilter 
              selected={filteredYear} 
              onSelectDate={filterDataHandler} 
            />
            
          <ExpensesList expenses={filteredExpenses} />
          </Card>
        </div>
    );
}

export default Expenses;

