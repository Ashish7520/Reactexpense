import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css'

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title)

    const [amount, setAmount] = useState(props.amount)

    const amoundHandler = () => {
        setAmount(100)
    }

    const clickHandler = ()=>{
        setTitle("Updated")
        console.log(title)
    }

    const deleteHandler = ()=>{
        console.log("deleted")
    }

    return  <div className='expense-item'> 
        <ExpenseDate expenseDate={props.expenseDate}></ExpenseDate>
        <ExpenseDetails title={title} amount={amount} Location={props.Location}></ExpenseDetails>
        <button onClick={clickHandler}>Change Title</button>
        <button onClick={amoundHandler}>Change Expense</button>
        <button onClick={deleteHandler}>Delete</button>
    </div>
}

export default ExpenseItem