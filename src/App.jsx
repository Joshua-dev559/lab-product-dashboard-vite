import React, { useState } from "react";
import ProductList from "./components/ProductList";

const App = () => {
  // ✅ Define products directly (NO external file)
  const initialProducts = [
    {
      id: 1,
      name: "Laptop",
      price: "$999",
      inStock: true,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Phone",
      price: "$699",
      inStock: false,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Tablet",
      price: "$499",
      inStock: true,
      image: "https://via.placeholder.com/150",
    },
  ];

  const [products, setProducts] = useState(initialProducts);

  const handleRemove = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div>
      <h1>Product Dashboard</h1>

      <ProductList products={products} onRemove={handleRemove} />
    </div>
  );
};

export default App;