import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList'
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

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesList items={filterdExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;