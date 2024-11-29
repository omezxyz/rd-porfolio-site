import React from "react";
import { Link } from "react-router-dom";

const ShopNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-white bg-opacity-100 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-2">
        <h1 className="text-xl md:text-3xl font-bold text-red-600">rd_rava.art</h1>
        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <Link to="/" className="hover:text-red-600">Home</Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-red-600">Shop</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default ShopNavbar;
