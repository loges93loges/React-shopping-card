import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const products = [
    { id: 1, name: 'laptop', description: 'This is product' },
    { id: 2, name: 'phone', description: 'This is product' },
    { id: 3, name: 'dress', description: 'This is product' },
  ];

  const handleAddToCart = id => {
    setCartItems([...cartItems, id]);
  };

  const handleRemoveFromCart = id => {
    setCartItems(cartItems.filter(item => item !== id));
  };

  return (
    <div className="container">
      <h1 className="my-4">Shopping Cart</h1>
      <div className="row">
        <div className="col-md-8">
          <ProductList
            products={products}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
            cartItems={cartItems}
          />
        </div>
        <div className="col-md-4">
          <Cart cartItems={cartItems} products={products} />
        </div>
      </div>
    </div>
  );
};

export default App;
