import './ExpenseDate.css'
function ExpenseDate(props) {
	const month = props.date.toLocaleString('en-Us', { month: 'long' })
	const day = props.date.toLocaleString('en-Us', { day: '2-digit' })
	const year = props.date.getFullYear()
	const nowYear = new Date().getFullYear() - year
	console.log()
	return (
		<div className='expense-date'>
			{/* <div className='expense-date__month'>{month}</div> */}
			{/* <div className='expense-date__day'>{day}</div> */}
			<div className='expense-date__year'>{nowYear + ' years ago'}</div>
		</div>
	)
}
export default ExpenseDate
