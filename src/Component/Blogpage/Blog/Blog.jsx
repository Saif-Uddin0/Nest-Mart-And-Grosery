import React from 'react';

import { FaAngleDown } from 'react-icons/fa6';

import banner10 from '../../../assets/banner-10.png';
import banner9 from '../../../assets/banner-13.png'

import Banner3 from '../../SharedFolder/Banner3/Banner3';
import Blogs from '../Blogs/Blogs';
import useData from '../../../hooks/useData';
import TopFooter from '../../Footer/TopFooter/TopFooter';
import Banner2 from '../../SharedFolder/Banner2/Banner2';

import RightPart from '../../ShopPages/RightPart/RightPart';

const Blog = () => {
    const {categories,sections}=useData()
    return (
        <div className='my-3'>
         <Banner3></Banner3>
            <div className='lg:flex flex-row items-center justify-between  my-2 lg:px-8 px-5 mx-auto container'>
                <div className='flex items-center gap-5 '>
                   
                    <p className='font-bold lg:text-2xl text-[24px] '>Recips Articles</p>
                </div>
                <div className='flex items-center gap-2 text-[12px] text-gray-400 mt-6'>
                    <p className='cursor-pointer flex items-center gap-3 hover:shadow-md p-2 my-3 rounded-md border border-gray-300'>
                        Show : 50 <span><FaAngleDown /></span>
                    </p>
                    <p className='cursor-pointer flex items-center gap-3 hover:shadow-md p-2 my-3 rounded-md border border-gray-300'>
                        Sort Bt : Featured <span><FaAngleDown /></span>
                    </p>
                </div>
            </div>
           <div className='lg:grid lg:grid-cols-12 gap-4 mx-auto container lg:px-8 mt-6 px-5'>

            <div className='lg:col-span-9 '>
             <Blogs></Blogs>
         
            </div>
            <div className='lg:col-span-3'>
                   <RightPart categories={categories} sections={sections}></RightPart>
            </div>
            </div>
              <div className='mx-auto container lg:px-8 px-5'>
          <Banner2  bgImage1={banner10} w="w-100" mt="mt-17" ml="ml-20" image={banner9} title={"Stay home & get your daily needs from our shop"} highlight="Nest Mart" subtitle="Start You'r Daily Shopping with "></Banner2>
     </div>
           <TopFooter></TopFooter>
        </div>
    );
};

export default Blog;

