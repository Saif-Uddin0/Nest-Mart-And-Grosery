import React, { useState } from "react";
import Product from "../Product/Product";

const Products = ({ products }) => {
  const [selected, setSelected] = useState(null);

  const handleSelected = (id) => {
    setSelected(id);
  };

  const filterData = selected
    ? products.filter((product) => product.id === selected)
    : products;

  return (
    <div className="container mx-auto px-4 lg:px-8 mt-12 mb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <h1 className="text-[#253D4E] text-2xl sm:text-3xl font-semibold">
          Popular Products
        </h1>

        {/* Filter Menu */}
        <div className="flex flex-wrap sm:justify-end gap-3 text-sm">
          {/* ALL Button */}
          <p
            className={`cursor-pointer transition-all ${
              !selected
                ? "text-[#3BB77E] font-semibold"
                : "text-gray-600 hover:text-[#3BB77E]"
            }`}
            onClick={() => setSelected(null)}
          >
            All
          </p>

          {/* Dynamic Filters */}
          {products.slice(0, 7).map((product) => (
            <p
              key={product.id}
              className={`cursor-pointer transition-all ${
                selected === product.id
                  ? "text-[#3BB77E] font-semibold"
                  : "text-gray-600 hover:text-[#3BB77E]"
              }`}
              onClick={() => handleSelected(product.id)}
            >
              {product.category}
            </p>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div
        className="
          grid 
          grid-cols-2
          sm:grid-cols-2
          md:grid-cols-3 
          lg:grid-cols-5 
          gap-5 
          mt-10
        "
      >
        {filterData.map((product) => (
          <div key={product.id} className="h-full">
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
