import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css'

function ExpenseItem(props) {
    const clickHandler = ()=>{
        console.log("clicked")
    }

    const deleteHandler = ()=>{
        console.log("deleted")
    }

    return  <div className='expense-item'> 
        <ExpenseDate expenseDate={props.expenseDate}></ExpenseDate>
        <ExpenseDetails title={props.title} amount={props.amount} Location={props.Location}></ExpenseDetails>
        <button onClick={clickHandler}>Change Title</button>
        <button onClick={deleteHandler}>Delete</button>
    </div>
}

export default ExpenseItem