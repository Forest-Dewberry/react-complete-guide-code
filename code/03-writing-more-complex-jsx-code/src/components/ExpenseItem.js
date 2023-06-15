import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem({id, date, title, amount}) {
  return (
    <div>
      <div><ExpenseDate dateinput={date} /></div>
      <div>
        <h2>{title}</h2>
        <div>{amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
