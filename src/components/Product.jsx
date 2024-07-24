import React from 'react';

const Product = ({ product, onAddToCart, onRemoveFromCart, inCart }) => (
  <div className="card mb-4">
    <div className="card-body">
      <h5 className="card-title">{product.name}</h5>
      <p className="card-text">{product.description}</p>
      {inCart ? (
        <button className="btn btn-danger" onClick={() => onRemoveFromCart(product.id)}>Remove from Cart</button>
      ) : (
        <button className="btn btn-primary" onClick={() => onAddToCart(product.id)}>Add to Cart</button>
      )}
    </div>
  </div>
);

export default Product;
