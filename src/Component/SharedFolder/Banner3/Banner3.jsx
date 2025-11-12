import React from 'react';
import { Link } from "react-router-dom";
import { FaHome, FaTimes } from "react-icons/fa";
import bgImage from "../../../assets/header-bg.png"


const Banner3 = () => {
    return (
        <div className='mx-auto container lg:px-8 px-4'>
           <div
      className="w-full rounded-3xl lg:py-16 py-14 px-6 lg:px-20 bg-cover bg-center relative "
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className=" flex items-center justify-between">

      <div>
          {/* Title */}
        <h1 className="text-4xl lg:text-5xl font-semibold text-[#1D1D1F]">
          Snack
        </h1>

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mt-8 text-gray-700">
          <FaHome className="text-green-600" />
          <Link to="/" className="text-green-600 hover:underline">Home</Link>
          <span>›</span>
          <span>Shop</span>
          <span>›</span>
          <span className="text-gray-900 font-medium">Snack</span>
        </div>
      </div>

        {/* Tags */}
      <div className='hidden lg:block'>
          <div className="flex flex-wrap gap-4 mt-10 ">

          <div className="flex items-center gap-2 px-6 py-2 transition-transform hover:-translate-y-2 bg-white rounded-full shadow-sm border border-gray-200 text-gray-700 text-sm">
            <FaTimes className="text-gray-400" />
            <span className="font-medium text-[#3BB77E] hover:text-[#FDC040]">Cabbage</span>
          </div>

          <div className="flex items-center gap-2 px-6 py-2 text-sm bg-white rounded-full shadow-sm border border-gray-200 text-gray-800 transition-transform hover:-translate-y-2">
            <FaTimes className="text-gray-400" />
            <span className="font-medium hover:text-[#FDC040]">Broccoli</span>
          </div>

          <div className="flex items-center gap-2 px-6 py-2 text-sm bg-white rounded-full shadow-sm border border-gray-200 text-gray-700 transition-transform hover:-translate-y-2">
            <FaTimes className="text-gray-400" />
            <span className="font-medium text-[#3BB77E] hover:text-[#FDC040]">Artichoke</span>
          </div>

          <div className="flex items-center gap-2 px-6 py-2 text-sm  bg-white rounded-full shadow-sm border border-gray-200 text-gray-700 transition-transform hover:-translate-y-2">
            <FaTimes className="text-gray-400" />
            <span className="font-medium text-[#3BB77E] hover:text-[#FDC040]">Celery</span>
          </div>

          <div className="flex items-center gap-2 px-6 py-2 text-sm bg-white rounded-full shadow-sm border border-gray-200 text-gray-700 transition-transform hover:-translate-y-2">
            <FaTimes className="text-gray-500" />
            <span className="font-medium text-[#3BB77E] hover:text-[#FDC040]">Spinach</span>
          </div>

        </div>
      </div>
      </div>
    </div>
        </div>
    );
};

export default Banner3;