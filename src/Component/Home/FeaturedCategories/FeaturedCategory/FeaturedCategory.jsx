import React from 'react';

const FeaturedCategory = ({category}) => {
    return (
        <div style={{backgroundColor:`${category.background}`}} className="rounded-xl py-4 text-center flex flex-col justify-between h-full items-center" >
            <img className='w-20 h-20'  src={category.image} alt="" /> 
            <h6  className='font-semibold text-sm'>{category.name}</h6>
            <p className='text-[14px]'>{category.items} items</p>
        </div>
    );
};

export default FeaturedCategory;