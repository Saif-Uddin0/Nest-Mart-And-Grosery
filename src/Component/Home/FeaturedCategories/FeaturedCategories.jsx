import React from 'react';
import FeaturedCategory from './FeaturedCategory/FeaturedCategory';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const FeaturedCategories = ({ categories }) => {
  console.log(categories.length);

  return (
    <div className="mx-auto container px-4 sm:px-6 lg:px-8 mt-12">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        {/* Left side: Title + categories */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
          <h1 className="text-2xl sm:text-3xl font-semibold text-[#253D4E]">
            Featured Categories
          </h1>

          <div className="flex flex-wrap lg:gap-2 gap-4">
            {categories?.slice(0, 4).map((category) => (
              <p
                key={category.id}
                className="hover:text-[#3BB77E] transition-transform duration-300 hover:-translate-y-1 text-sm sm:text-base"
              >
                {category?.name}
              </p>
            ))}
          </div>
        </div>

        {/* Right side: Arrow buttons */}
        <div className="flex gap-2 self-end sm:self-auto">
          <button className="bg-gray-200 p-2 sm:p-3 rounded-full hover:bg-[#3BB77E] hover:text-white text-gray-600 transition hidden lg:block">
            <FaArrowLeft className="w-3 sm:w-4" />
          </button>
          <button className="bg-gray-200 p-2 sm:p-3 rounded-full hover:bg-[#3BB77E] hover:text-white text-gray-600 transition hidden lg:block">
            <FaArrowRight className="w-3 sm:w-4" />
          </button>
        </div>
      </div>

      {/* Category Grid */}
      <div
        className="
          mt-6 grid gap-3 mb-6
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-10
         
        "
      >
        {categories?.map((category) => (
          <FeaturedCategory category={category} key={category.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;
