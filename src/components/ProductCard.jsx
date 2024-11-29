import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded-md" />
      <h3 className="text-xl font-semibold mt-4">{product.title}</h3>
      <p className="text-lg text-red-600 mt-2">{product.price}</p>
      <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded-md">Buy Now</button>
    </div>
  );
};

export default ProductCard;
