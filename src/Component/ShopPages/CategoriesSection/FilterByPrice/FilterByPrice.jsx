import React from "react";
import lettuceImg from "../../../../assets/fillter-widget-bg.png"; 
const FilterByPrice = () => {
  return (
    <div className="bg-white p-5 rounded-3xl shadow-sm  mt-4">

  
       <h2 className="text-2xl font-semibold text-gray-800">Fill by price</h2>
      <div className="mt-2 mb-2 h-[2px] bg-gray-300">
                      <p className="w-[50%] h-[2px] bg-[#BCE3C9] "> </p>
                  </div>
 

      {/* Price Range (static design) */}
    
      <input type="range" className="w-full accent-green-600 mt-2 h-1" />

      <div className="flex justify-between mt-3 text-gray-700">
        <p className="flex text-xs gap-1">From: <span className="text-green-600 font-semibold">$500</span></p>
        <p className="flex text-xs gap-1">To: <span className="text-green-600 font-semibold">$1,000</span></p>
      </div>

      {/* Color */}
      <h3 className="font-semibold text-gray-800 mt-6 mb-2 text-sm">Color</h3>

      <div className="space-y-2 text-sm">
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          <span className="">Red (56)</span>
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" />
          <span>Green (78)</span>
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" />
          <span>Blue (54)</span>
        </label>
      </div>

      {/* Item Condition */}
      <h3 className="font-semibold text-gray-800 mt-6 mb-2 text-sm">Item Condition</h3>

      <div className="space-y-2 text-sm">
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          <span>New (1506)</span>
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" />
          <span>Refurbished (27)</span>
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" />
          <span>Used (45)</span>
        </label>
      </div>

    <div className="flex items-center justify-between gap-6">
          {/* Button */}
      <button className="bg-green-600 text-white px-3 py-2 rounded-md font-medium mt-5 text-sm">
        Fillter
      </button>

      {/* Image bottom right */}
      <img
        src={lettuceImg}
        alt=""
        className=" bottom-2 right-3 w-20 "
      />
    </div>
    </div>
  );
};

export default FilterByPrice;
