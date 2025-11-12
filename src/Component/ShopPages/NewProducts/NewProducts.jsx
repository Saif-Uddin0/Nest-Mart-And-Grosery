import React from 'react';
import { FaStar } from 'react-icons/fa';

const NewProducts = ({sections}) => {
 
    return (
        <div>
           <div className='bg-white rounded-xl p-3 mt-3 shadow-sm'>
            <h1 className='font-bold text-1xl text-[#253D4E] ml-2'>New Products</h1>
            <div className='border border-gray-300 h-0.1 my-2'>
                <div className='border border-[#b9f4d8] w-20'></div>
            </div>

            <div className='my-2'>
                {
                    sections.slice(-3).map(product => (
                        <div className=" mt-5 flex items-center hover:-translate-y-1.5 duration-500 gap-3 bg-base-100 relative transition cursor-pointer   ">
                            <img className='w-15 rounded-1xl '
                                src={product.image}
                                alt="Shoes" />
                            <div className="">
                                <h2 className="card-title text-sm hover:text-orange-300 text-[#3BB77E] ">
                                    {product.category}
                                </h2>
                                  <p className='text-gray-500  mt-1 text-sm'>${product.price} </p>
                                <div className='text-[#FDC040] text-xs flex items-center'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar className='text-[#B6B6B6]' />
                                </div>

                              


                            </div>
                        </div>
                    ))
                }
            </div>

        </div> 
        </div>
    );
};

export default NewProducts;