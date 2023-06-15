import './Expenses.css';
import ExpenseItem from './ExpenseItem';

export default function Expenses(expenseArray) {
    return (
        <div >
            {/* for loop to display ExpenseItem for each props object in expenseArray */}
            {/* {expenseArray.map((expense) => (
                <ExpenseItem id={expense.id} title={expense.title} date={expense.date} amount={expense.amount} />
            ))} */}
            <ExpenseItem className="expense-item" title={expenseArray[0].title} date={expenseArray[0].date} amount={expenseArray[0].amount} />
            <ExpenseItem className="expense-item" title={expenseArray[1].title} date={expenseArray[1].date} amount={expenseArray[1].amount} />
            <ExpenseItem className="expense-item" title={expenseArray[2].title} date={expenseArray[2].date} amount={expenseArray[2].amount} />
        </div>
    );
}