import React from 'react';

const Cart = ({ cartItems, products }) => (
  <div className="cart">
    <h4>Shopping Cart</h4>
    <ul className="list-group">
      {cartItems.map(itemId => {
        const product = products.find(p => p.id === itemId);
        return (
          <li className="list-group-item" key={itemId}>
            {product.name}
          </li>
        );
      })}
    </ul>
  </div>
);

export default Cart;
