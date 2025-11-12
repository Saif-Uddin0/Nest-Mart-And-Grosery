import React from "react";
import Card from "../Card/Card";

const Cards = ({ cards }) => {
  console.log(cards);

  return (
    <div className="mx-auto container px-4 sm:px-6 lg:px-8 mt-12 lg:mb-20 mb-10">
      {/* Header Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Top Selling */}
        <div>
          <h4 className="text-xl sm:text-2xl text-[#253D4E] font-semibold">
            Top Selling
          </h4>
          <div className="w-full bg-gray-100 rounded-full h-0.5 mt-3">
            <div className="bg-green-300 h-0.5 rounded-full lg:w-1/2 transition-all w-[30%]" />
          </div>
          <div className="flex flex-col lg:gap-4 mt-6 gap-6">
            {cards.slice(0, 3).map((card, index) => (
              <Card key={index} card={card} />
            ))}
          </div>
        </div>

        {/* Trending Product */}
        <div>
          <h4 className="text-xl sm:text-2xl text-[#253D4E] font-semibold">
            Trending Product
          </h4>
          <div className="w-full bg-gray-100 rounded-full h-0.5 mt-3">
            <div className="bg-green-300 h-0.5 rounded-full lg:w-1/2 transition-all w-[30%]" />
          </div>
          <div className="flex flex-col lg:gap-4 mt-6 gap-6">
            {cards.slice(3, 6).map((card, index) => (
              <Card key={index} card={card} />
            ))}
          </div>
        </div>

        {/* Recently Added */}
        <div className="hidden lg:block">
          <h4 className="text-2xl text-[#253D4E] font-semibold">
            Recently Added
          </h4>
          <div className="w-full bg-gray-100 rounded-full h-0.5 mt-3">
            <div className="bg-green-300 h-0.5 rounded-full w-1/2 transition-all" />
          </div>
          <div className="flex flex-col gap-4 mt-6">
            {cards.slice(6, 9).map((card, index) => (
              <Card key={index} card={card} />
            ))}
          </div>
        </div>

        {/* Top Rate */}
        <div className="hidden lg:block">
          <h4 className="text-2xl text-[#253D4E] font-semibold">Top Rate</h4>
          <div className="w-full bg-gray-100 rounded-full h-0.5 mt-3">
            <div className="bg-green-300 h-0.5 rounded-full w-1/2 transition-all" />
          </div>
          <div className="flex flex-col gap-4 mt-6">
            {cards.slice(-3).map((card, index) => (
              <Card key={index} card={card} />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile view for all cards */}
    
    </div>
  );
};

export default Cards;
