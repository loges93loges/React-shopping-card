import React from 'react';
import Product from './Product';

const ProductList = ({ products, onAddToCart, onRemoveFromCart, cartItems }) => (
  <div className="row">
    {products.map(product => (
      <div className="col-md-4" key={product.id}>
        <Product
          product={product}
          onAddToCart={onAddToCart}
          onRemoveFromCart={onRemoveFromCart}
          inCart={cartItems.includes(product.id)}
        />
      </div>
    ))}
  </div>
);

export default ProductList;
