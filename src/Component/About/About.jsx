import React from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import about1 from '../../assets/about-1.png'
import about2 from '../../assets/about-2.png'
import about3 from '../../assets/about-3.png'
import about4 from '../../assets/about-4.png'
import icon1 from "../../assets/icon-1.svg"
import icon2 from "../../assets/icon-2.svg"
import icon3 from "../../assets/icon-3.svg"
import icon4 from "../../assets/icon-4.svg"
import icon5 from "../../assets/icon-5.svg"
import icon6 from "../../assets/icon-6.svg"
import about5 from "../../assets/about-5.png"
import about6 from "../../assets/about-6.png"
import about7 from "../../assets/about-8.png"
import Banner2 from '../SharedFolder/Banner2/Banner2';
import banner9 from '../../assets/banner-13.png'
import banner10 from '../../assets/banner-10.png'
import TopFooter from '../Footer/TopFooter/TopFooter';

const About = () => {
  return (
    <div className="mt-4 mb-4">
      {/* Breadcrumb */}
      <div className="mx-auto container px-4 sm:px-6 lg:px-8 flex flex-wrap items-center gap-3 border-b pb-4 border-gray-300 shadow-sm">
        <p className="flex text-sm items-center gap-1 text-[#3BB77E]">
          <IoHomeOutline />
          <span className="text-[14px] mt-1">Home</span>
        </p>
        <p className="text-sm hover:text-[#3BB77E] text-gray-500">Pages</p>
        <p className="text-sm hover:text-[#3BB77E] text-gray-500">About Us</p>
      </div>

      {/* About Section */}
      <div className="mx-auto container px-4 sm:px-6 lg:px-8 my-6">
        <div className="flex flex-col lg:flex-row gap-8 px-0 lg:px-20 py-6">
          {/* Left */}
          <div className="w-full lg:w-auto">
            <img
              className="h-auto lg:h-[550px] w-full object-cover rounded-xl"
              src={about1}
              alt=""
            />
          </div>

          {/* Right */}
          <div className="flex-1">
            <h1 className="text-2xl lg:text-3xl font-semibold mt-6 lg:mt-10 mb-6 lg:mb-8">
              Welcome to nest
            </h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>
            <p className="text-xs text-gray-400 mt-4 lg:mt-6">
              Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta
              et Ut placerat legendos interpre.Donec vitae sapien ut libero
              venenatis faucibus...
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-5">
              <img src={about2} alt="" />
              <img src={about3} alt="" />
              <img src={about4} alt="" className="hidden sm:block" />
            </div>
          </div>
        </div>

        {/* What we provide */}
        <div className="text-center my-8">
          <h1 className="text-2xl lg:text-3xl font-semibold text-[#253D4E]">
            What we provide
          </h1>
          <h1 className="bg-[#aee1c9] h-0.5 w-4/12 sm:w-3/12 mx-auto mt-3"></h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 px-0 lg:px-20 py-6">
          {[icon1, icon2, icon3, icon4, icon5, icon6].map((icon, i) => (
            <div
              key={i}
              className="bg-white shadow-md py-5 px-3 text-center rounded-xl"
            >
              <img className="mx-auto" src={icon} alt="" />
              <h4 className="text-lg lg:text-xl font-semibold mt-4">
                Best Prices & Offers
              </h4>
              <p className="text-gray-500 text-xs mt-3">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
              <p className="text-xs mt-4 text-[#3BB77E]">Read more</p>
            </div>
          ))}
        </div>

        {/* Image + text */}
        <div className="flex flex-col lg:flex-row gap-5 px-0 lg:px-20 py-6 mt-6">
          <div className="w-full lg:w-auto">
            <img src={about5} alt="" className="w-full rounded-xl" />
          </div>

          <div className="p-4 lg:p-8">
            <p className="text-lg lg:text-xl my-4 lg:my-6 text-gray-400">
              Our performance
            </p>
            <h1 className="text-[#253D4E] text-2xl lg:text-4xl font-semibold">
              Your Partner for e- <br /> commerce grocery <br /> solution
            </h1>

            <p className="text-xs text-gray-500 my-4 lg:my-6">
              Ed ut perspiciatis unde omnis iste natus error sit voluptatem...
            </p>

            <p className="text-xs text-gray-500">
              Pitatis et quasi architecto beatae vitae dicta sunt explicabo...
            </p>
          </div>
        </div>

        {/* Who we are */}
        <div className="px-0 lg:px-20 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Who we are", "Our history", "Our mission"].map((title, i) => (
            <div key={i}>
              <h1 className="text-xl lg:text-2xl text-[#253D4E] font-semibold my-2">
                {title}
              </h1>
              <p className="text-xs text-gray-400 mt-4">
                Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis
                enim ut tellus eros donec ac odio orci ultrices in.
              </p>
            </div>
          ))}
        </div>

        {/* Stats blur section */}
        <div className="my-8 lg:block hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-teal-700 to-teal-900 p-8 lg:p-12 text-white">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{
                  backgroundImage: `url('https://nest-frontend-v6.vercel.app/assets/imgs/page/about-9.png')`,
                }}
              />
              <div className="relative grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
                {["Glorious years", "Happy clients", "Projects complete", "Team advisor", "Products Sale"].map(
                  (text, i) => (
                    <div key={i}>
                      <h2 className="text-4xl lg:text-5xl font-bold">
                        0<span className="text-2xl lg:text-3xl">+</span>
                      </h2>
                      <p className="mt-2 text-base lg:text-lg">{text}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Our team */}
        <div className="mb-20 mt-12">
          <div className="text-center my-8">
            <h1 className="text-2xl lg:text-3xl font-semibold text-[#253D4E]">
              What we provide
            </h1>
            <h1 className="bg-[#aee1c9] h-0.5 w-4/12 sm:w-3/12 mx-auto mt-3"></h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 px-0 lg:px-20 lg:py-6">
            {/* Left */}
            <div className="flex-1">
              <p className="text-[#3BB77E] font-semibold lg:text-sm text-xl">Our Team</p>
              <h1 className="text-2xl lg:text-4xl font-semibold mt-2 mb-5">
                Meet Our Expert <br /> Team
              </h1>
              <p className="lg:text-xs text-sm text-gray-400">
              Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.
              </p>
              <p className="lg:text-xs text-sm text-gray-400 lg:mt-4">
            Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.
              </p>
              <button className="text-xs px-5 py-2 text-white bg-[#29A56C] rounded-md mt-4">
                View All Members
              </button>
            </div>

            {/* Right */}
          <div className="flex flex-col sm:flex-row lg:gap-4 justify-center gap-12">
  {/* First Team Member */}
  <div className="relative mx-auto">
    <img
      className="h-[250px] sm:h-[300px] w-[250px] sm:w-[300px] object-cover rounded-xl"
      src={about6}
      alt="H. Merinda"
    />
    <div className="bg-base-100 px-10 sm:px-14 py-6 sm:py-10 left-4 sm:left-6 rounded-xl shadow-md text-center absolute top-44 sm:top-60 transition-transform hover:-translate-y-1.5">
      <h4 className="font-bold text-gray-800">H. Merinda</h4>
      <p className="text-gray-500 mt-2">CEO & Co-Founder</p>
    </div>
  </div>

  {/* Second Team Member */}
  <div className="relative mx-auto">
    <img
      className="h-[250px] sm:h-[300px] w-[250px] sm:w-[300px] object-cover rounded-xl"
      src={about7}
      alt="Dilan Specter"
    />
    <div className="bg-base-100 px-10 sm:px-14 py-6 sm:py-10 left-4 sm:left-6 rounded-xl shadow-md text-center absolute top-44 sm:top-60 transition-transform hover:-translate-y-1.5">
      <h4 className="font-bold text-gray-800">Dilan Specter</h4>
      <p className="text-gray-500 mt-2">Head Engineer</p>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>

      {/* Banner + Footer */}
        <div className='mx-auto container lg:px-8 px-5'>
          <Banner2  bgImage1={banner10} w="w-100" mt="mt-17" ml="ml-20" image={banner9} title={"Stay home & get your daily needs from our shop"} highlight="Nest Mart" subtitle="Start You'r Daily Shopping with "></Banner2>
     </div>
      <TopFooter />
    </div>
  );
};

export default About;
