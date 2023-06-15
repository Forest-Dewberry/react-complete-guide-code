import Expenses from './components/Expenses';
import './index.css'

function App() {
  // don't change the Component name "App"
  let expenseArray = [
    {
      id: 1,
      title: 'Food',
      amount: 100,
      date: '2020-01-01'
    },
    {
      id: 2,
      title: 'Drink',
      amount: 50,
      date: '2020-01-02'
    },
    {
      id: 3,
      title: 'Groceries',
      amount: 150,
      date: '2020-01-03'
    }
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenseArray} />
    </div>
  );
}

export default App;
