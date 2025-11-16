import React, { useEffect, useState } from 'react';
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { IoIosArrowForward } from 'react-icons/io';

const DealsDay = ({ products }) => {
  const targetDate = new Date("2025-12-31T23:59:59").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="mx-auto container lg:px-8 px-5 mt-16 mb-20">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#18181B]">Deals Of The Day</h1>
        <div className="flex items-center gap-2 text-[#18181B] hover:text-[#3BB77E] cursor-pointer hover:-translate-x-1 duration-300">
          <p className="text-[15px]">All Deals</p>
          <IoIosArrowForward />
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-6">

        {products.slice(0, 4).map((product) => (
          <div 
            key={product.id} 
            className="relative flex justify-center group"
          >
            {/* Image */}
            <img
              className="w-full max-w-[320px] rounded-lg shadow-md group-hover:shadow-xl duration-300"
              src={product.bgImg}
              alt=""
            />

            {/* Countdown centered */}
            <div className="grid grid-flow-col absolute top-5 left-1/2 -translate-x-1/2 gap-2 text-center auto-cols-max">
              {[
                { label: "days", value: timeLeft.days },
                { label: "hours", value: timeLeft.hours },
                { label: "min", value: timeLeft.minutes },
                { label: "sec", value: timeLeft.seconds },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex flex-col p-3 bg-white rounded-md shadow-md text-[#97A3A7] min-w-[60px]"
                >
                  <span className="countdown font-mono text-2xl text-[#3BB77E]">
                    <span style={{ "--value": item.value }}></span>
                  </span>
                  {item.label}
                </div>
              ))}
            </div>

            {/* Product Info Card */}
            <div className="p-4 shadow-md absolute rounded-md bg-white w-[85%] sm:w-60 -bottom-10 group-hover:-bottom-12 duration-300">
              <h2 className="text-[13px] text-[#253D4E] font-semibold">{product.name}</h2>

              <div className="text-[#FDC040] flex items-center mt-1">
                <FaStar /><FaStar /><FaStar /><FaStar />
                <FaStar className="text-[#B6B6B6]" />
                <p className="text-[#B6B6B6] ml-2">({product.rating})</p>
              </div>

              <p className="text-[#B6B6B6] text-sm">
                By : <span className="text-[#3BB77E]">{product.brand}</span>
              </p>

              <div className="flex justify-between items-center mt-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-green-600">
                    ${product.price}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    ${product.oldPrice}
                  </span>
                </div>

                <button className="bg-green-100 text-green-700 py-2 px-3 rounded-md flex items-center gap-2 hover:bg-green-200 transition text-xs font-medium">
                  <FaShoppingCart />
                  Add
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsDay;
