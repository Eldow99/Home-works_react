import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
function ExpenseItem(props) {
	const expenseTitle = props.title
	const expensePrice = props.amount

	return (
		<div className='expense-item'>
			<ExpenseDate date={props.date} />
			<h2 className='expense-item__description'>{expenseTitle}</h2>
			<div className='expense-item__price'>${expensePrice}</div>
		</div>
	)
}
export default ExpenseItem
