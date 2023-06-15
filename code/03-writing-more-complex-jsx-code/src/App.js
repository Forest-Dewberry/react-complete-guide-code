import ExpenseItem from './components/ExpenseItem';

function App() {
  // don't change the Component name "App"
  const expenseArray = [
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
      <ExpenseItem expenseArrayInput={expenseArray} />
    </div>
  );
}

export default App;

// import React from 'react';

// import Product from './Product';

// // don't change the Component name "App"
// export default function App() {
//     let productArray = [
//         {
//             title: 'Product 1',
//             price: 10,
//             description: 'First product'
//         },
//         {
//             title: 'Product 2',
//             price: 20,
//             description: 'Second product'
//         }
//         ]
//     return (
//         <div>
//             <h1>My Demo Shop</h1>
//             <Product 
//             title={productArray[0].title}
//             price={productArray[0].price}
//             description={productArray[0].description}
//             />
//             <Product 
//             title={productArray[1].title}
//             price={productArray[1].price}
//             description={productArray[1].description}
//             />
//         </div>
//     );
// }