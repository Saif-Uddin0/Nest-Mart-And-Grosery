import React from 'react';
import { FaStar } from "react-icons/fa";

const Card = ({ card }) => {
  const { image, name, rating, price, oldPrice } = card;

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex gap-4 py-2 px-3 w-full sm:w-[250px] md:w-[280px]">
      {/* Image */}
      <div className="w-16 sm:w-20 h-full flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain rounded-lg"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col justify-between flex-1">
        <h3 className="text-xs font-semibold text-[#253D4E] hover:text-[#3BB77E] line-clamp-2 mb-1">
          {name}
        </h3>

        <div className="flex items-center gap-1 mb-2">
          <FaStar className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          <FaStar className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          <FaStar className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          <FaStar className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          <FaStar className="w-3 h-3 text-gray-300" />
          <span className="text-xs text-gray-600 ml-1">({rating})</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-green-600">${price}</span>
          <span className="text-xs text-gray-500 line-through">${oldPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
