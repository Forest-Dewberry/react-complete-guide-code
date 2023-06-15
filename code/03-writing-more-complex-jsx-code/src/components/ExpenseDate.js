import './ExpenseItem.css';

function ExpenseDate({date, title, amount}) {
  return (
    <div>
        <div className="expense-date">{date}</div>
        <div className="expense-title">{title}</div>
        <div className="expense-amount">{amount}</div>
    </div>
  );
}

export default ExpenseDate;
