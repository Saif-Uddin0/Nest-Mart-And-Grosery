import React from 'react';
import banner1 from '../../../assets/banner-1 (1).png';
import banner2 from '../../../assets/banner-2 (1).png';
import banner3 from '../../../assets/banner-3.png';
import Button from '../../SharedFolder/Button';

const Banner = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto container lg:px-8 px-5 my-8">
      {/* Banner 1 */}
      <div className="relative overflow-hidden">
        <img className="rounded-md w-full object-cover" src={banner1} alt="Banner 1" />
        <div className="absolute top-10 sm:top-14 left-5 sm:left-8">
          <h1 className="font-semibold text-lg sm:text-xl mb-4 text-[#253D4E] leading-snug">
            Everyday Fresh & <br /> Clean with Our <br />Products
          </h1>
          <Button />
        </div>
      </div>

      {/* Banner 2 */}
      <div className="relative overflow-hidden">
        <img className="rounded-md w-full object-cover" src={banner2} alt="Banner 2" />
        <div className="absolute top-10 sm:top-14 left-5 sm:left-8">
          <h1 className="font-semibold text-lg sm:text-xl mb-6 text-[#253D4E] leading-snug">
            Make your Breakfast <br />Healthy and Easy
          </h1>
          <Button />
        </div>
      </div>

      {/* Banner 3 */}
      <div className="relative overflow-hidden">
        <img className="rounded-md w-full object-cover" src={banner3} alt="Banner 3" />
        <div className="absolute top-10 sm:top-14 left-5 sm:left-8">
          <h1 className="font-semibold text-lg sm:text-xl mb-6 text-[#253D4E] leading-snug">
            The best Organic <br />Products Online
          </h1>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Banner;
