import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css'

function ExpenseItem(props) {
    return  <div className='expense-item'> 
        <ExpenseDate expenseDate={props.expenseDate}></ExpenseDate>
        <ExpenseDetails title={props.title} amount={props.amount} Location={props.Location}></ExpenseDetails>
    </div>
}

export default ExpenseItem