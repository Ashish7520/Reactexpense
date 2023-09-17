import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
    console.log(props.items)
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filterdExpenses = props.items.filter(expense=>{
    return expense.date.getFullYear().toString() == filteredYear
  })


  let expenseContent = <p>No content found ...</p>

  if(filterdExpenses.length > 0){
    expenseContent = filterdExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}  // Add a unique key for each ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))
  }


  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {expenseContent}
      </Card>
    </div>
  );
};

export default Expenses;