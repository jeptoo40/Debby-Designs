import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded">
      <img src={product.image} alt={product.name} width="200" />
      <h3>{product.name}</h3>
      <p>Ksh {product.price}</p>
    </div>
  );
}