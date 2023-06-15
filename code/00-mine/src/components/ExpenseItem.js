import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <div className="expense-item" >
      {/* <div><ExpenseDate dateinput={props.date} /></div> */}
      <div>
        <h2 className='expense-item__description'>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;