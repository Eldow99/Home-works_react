import ExpenseItem from './ExpenseItem'
import './Expenses.css'

function Expenses(props) {
	return (
		<div>
			{props.data.map((el, index) => (
				<ExpenseItem
					key={index}
					title={el.title}
					date={el.date}
					amount={el.amount}
				/>
			))}
		</div>
	)
}
export default Expenses
