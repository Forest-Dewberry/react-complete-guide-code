import React from 'react';

import Product from './Product';

// don't change the Component name "App"
export default function App() {
    let productArray = [
        {
            title: 'Product 1',
            price: 10,
            description: 'First product'
        },
        {
            title: 'Product 2',
            price: 20,
            description: 'Second product'
        }
        ]
    return (
        <div>
            <h1>My Demo Shop</h1>
            <Product 
            title={productArray[0].title}
            price={productArray[0].price}
            description={productArray[0].description}
            />
            <Product 
            title={productArray[1].title}
            price={productArray[1].price}
            description={productArray[1].description}
            />
        </div>
    );
}