import React from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { image, label, labelColor, category, name, brand, rating, price, oldPrice } = product;

  return (
    <Link to={`product/${product.id}`}>
      <div className="
        bg-white rounded-2xl p-3 sm:p-4 
        shadow-sm 
        hover:shadow-xl hover:-translate-y-1 
        transition-all duration-300 
        relative group border border-gray-100
      ">

        {/* Label */}
        <div
          className={`absolute top-0 left-0 text-[10px] sm:text-xs text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-tl-lg rounded-br-lg font-medium ${labelColor}`}
        >
          {label}
        </div>

        {/* Image Container */}
        <div className="mb-3 flex justify-center overflow-hidden rounded-lg">
          <img
            src={image}
            alt={name}
            className="
              w-full h-40 sm:h-52 md:h-60 object-contain 
              transition-transform duration-500 
              group-hover:scale-110
            "
          />
        </div>

        {/* Category */}
        <p className="text-[10px] sm:text-xs text-gray-500 mb-1 tracking-wide">
          {category}
        </p>

        {/* Name */}
        <h3 className="
          text-sm sm:text-base font-semibold 
          text-[#253D4E] 
          mb-2 leading-snug
          group-hover:text-[#3BB77E] transition-colors
        ">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`w-3.5 h-3.5 sm:w-4 sm:h-4 
                ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
              `}
            />
          ))}
          <span className="text-[11px] sm:text-xs text-gray-600 ml-1">
            ({rating})
          </span>
        </div>

        {/* Brand */}
        <p className="text-[11px] sm:text-xs text-gray-500 mb-3">
          By <span className="text-[#3BB77E] font-medium">{brand}</span>
        </p>

        {/* Price & Add button */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-sm sm:text-base font-bold text-green-600">
              ${price}
            </span>
            <span className="text-xs sm:text-sm text-gray-400 line-through">
              ${oldPrice}
            </span>
          </div>

          <button className="
            bg-green-100 text-green-700 
            py-1.5 sm:py-2 px-2 sm:px-3 
            rounded-lg flex items-center justify-center gap-1 
            hover:bg-green-200 
            active:scale-95 transition-all 
            text-[11px] sm:text-sm font-medium
          ">
            <FaShoppingCart className="text-xs sm:text-sm" />
            <p>Add</p>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Product;
