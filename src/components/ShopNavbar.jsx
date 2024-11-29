import React, { useState } from "react";
import { Link } from "react-router-dom";

const ShopNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu visibility

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle mobile menu state
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-white bg-opacity-100 backdrop-blur-md shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-2">
        {/* Logo */}
        <Link to="/" className="text-xl md:text-3xl font-bold text-red-600">rd_rava.art</Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <Link to="/" className="hover:text-red-600">Home</Link>
          </li>
          {/*
          <li>
            <Link to="/shop" className="hover:text-red-600">Shop</Link>
          </li>
          */}
        </ul>

        {/* Mobile Menu Icon (Hamburger) */}
        <button
          className="md:hidden text-3xl text-red-600 focus:outline-none"
          onClick={handleMenuToggle}
        >
          <i className={`fa ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-white py-4 shadow-lg`}
      >
        <ul className="space-y-4 text-center">
          <li>
            <Link to="/" className="block px-6 py-2 text-xl text-gray-800 hover:text-red-600">Home</Link>
          </li>
          {/*
          <li>
            <Link to="/shop" className="block px-6 py-2 text-xl text-gray-800 hover:text-red-600">Shop</Link>
          </li>
          */}
        </ul>
      </div>
    </nav>
  );
};

export default ShopNavbar;
