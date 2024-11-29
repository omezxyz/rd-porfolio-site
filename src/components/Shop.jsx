import React from "react";
import ShopNavbar from "./ShopNavbar"; // Your custom navbar for shop page
import ProductCard from "./ProductCard"; // A reusable product card component

const Shop = () => {
  // Example product data for display (could be fetched from an API or database)
  const products = [
    { id: 1, title: "Digital Illustration #1", price: "$50", image: "/path/to/image1.jpg" },
    { id: 2, title: "Digital Illustration #2", price: "$70", image: "/path/to/image2.jpg" },
    { id: 3, title: "Limited Edition Print", price: "$100", image: "/path/to/image3.jpg" },
 ,
    // Add more product data as needed
  ];

  return (
<div className="min-h-screen flex flex-col bg-gray-50 relative">
      <ShopNavbar /> {/* Custom Navbar for Shop Page */}

      {/* Transparent Overlay - "Work in Progress" Message */}
      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center z-10 px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center">
          Work in Progress
        </h1>
        <p className="text-lg md:text-xl text-white text-center">
          Our shop is currently being curated. Stay tuned for amazing art pieces!
        </p>
      </div>
    
      {/* Shop Hero Section */}
      <section className="bg-cover bg-center h-96 relative" style={{ backgroundImage: "url('/path/to/hero-image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold">Shop My Art</h1>
          <p className="text-xl mt-4">Explore unique digital illustrations and prints.</p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">Browse Categories</h2>
          <div className="mt-6 flex justify-around">
            <div className="text-center">
              <h3 className="text-xl font-semibold">Illustrations</h3>
              <p className="mt-2">Handcrafted digital illustrations</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold">Digital Prints</h3>
              <p className="mt-2">High-quality digital prints for your space</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold">Merch</h3>
              <p className="mt-2">Art on T-shirts, Mugs, and More!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">Featured Products</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;

