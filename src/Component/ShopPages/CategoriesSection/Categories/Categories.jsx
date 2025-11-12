// src/components/Categories.jsx
import React from "react";

const Categories = ({ categories }) => {
  return (
        <div className="bg-white p-4 rounded-xl shadow-sm ">
             <div>
                <div>
                    <h1 className="text-2xl font-semibold  text-[#253D4E]">Category</h1>
                  <div className="mt-2 h-[1px] bg-gray-200">
                      <p className="w-[50%] h-[1px] bg-[#BCE3C9] "> </p>
                  </div>
                </div>

                <div>
                    <div>
                        {
                            categories.slice(0,5).map(category=>(<div className="px-3 py-4 rounded-xl flex items-center justify-between mt-3 bg-[#FFFFFF] shadow-sm">
                                    <div className="flex items-center gap-2">
                                          <div>
                                        <img className="w-6 h-6" src={category.icon} alt="" />

                                      </div>
                                      <div><h4 className="text-xs">{category.name}</h4></div>
                                    </div>
                                      <div>
                                        <p className=" bg-[#BCE3C9] text-[10px] text-gray-800 p-1 rounded-full">{category.items}</p>
                                      </div>
                                    
                                </div>))
                        }
                    </div>
                </div>
             </div>
        </div>
  );
};

export default Categories;