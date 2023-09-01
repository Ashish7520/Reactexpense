import './ExpenseItem.css'

function ExpenseItem() {
 
    //use dynamic data
    const expenseDate = new Date(2023, 8, 1);
    const expenseTitle = 'Car insurance';
    const expenseAmount = 49.99
    const LocationOfExpenditure = 'Garage'

    return  <div className='expense-item'> 
        <div>{expenseDate.toISOString()}</div>
        <div className='expense-item__description '> 
            <h2>{expenseTitle}</h2>
            <div className='expense-item__price'>${expenseAmount}</div>
            <div className='expense-item__location'>{LocationOfExpenditure}</div>
        </div>
    </div>
}

export default ExpenseItem