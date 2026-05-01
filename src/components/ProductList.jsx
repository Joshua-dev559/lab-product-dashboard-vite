import React from "react";

const ProductList = ({ products, onRemove }) => {
  return (
    <div id="product-list">
      {products.map((product) => (
        <div
          key={product.id}
          className={!product.inStock ? "outOfStockClass" : ""}
        >
          <h3>{product.name}</h3>

          <p>{product.price}</p>

          <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>

          <img src={product.image} alt={product.name} />

          <button onClick={() => onRemove(product.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;