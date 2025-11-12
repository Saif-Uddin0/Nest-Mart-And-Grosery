import React from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import map from "../../assets/map1.jpeg";
import contact from "../../assets/contact-2.png";
import Banner2 from '../SharedFolder/Banner2/Banner2';
import banner9 from '../../assets/banner-13.png';
import banner10 from '../../assets/banner-10.png';
import TopFooter from '../Footer/TopFooter/TopFooter';

const ContactPage = () => {
  return (
    <div className="mt-4 mb-4">
      {/* Breadcrumb */}
      <div className="mx-auto container px-4 sm:px-6 flex flex-wrap items-center gap-3 border-b pb-4 border-gray-300 shadow-sm">
        <p className="flex text-sm items-center gap-1 text-[#3BB77E]">
          <IoHomeOutline />
          <span className="text-[14px] mt-1">Home</span>
        </p>
        <p className="text-sm hover:text-[#3BB77E] text-gray-500">Pages</p>
        <p className="text-sm hover:text-[#3BB77E] text-gray-500">Contact</p>
      </div>

      {/* Info Section */}
      <div className="bg-white pt-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-center px-4 md:px-12 lg:px-20 py-6">
          <div className="flex flex-col lg:flex-row justify-center gap-10 text-left">
            {/* Card 1 */}
            <div className="flex-1">
              <p className="text-sm font-semibold text-green-600 tracking-widest uppercase mb-3">
                How can help you ?
              </p>
              <h1 className="text-2xl sm:text-4xl md:text-3xl font-extrabold text-gray-900 mb-6">
                Let us know how <br /> we can help you
              </h1>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <p className="text-gray-600 text-sm mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex-1 mt-6 lg:mt-10">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">01. Visit Feedback</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-bold text-gray-900 mb-3">02. Employer Services</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex-1 mt-6 lg:mt-10">
              <div>
                <h3 className="text-lg font-bold text-green-600 mb-3">03. Billing Inquiries</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-bold text-gray-900 mb-3">04. General Inquiries</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

   {/* Map */}
<div className="mx-auto container px-4 lg:px-8 rounded-3xl mt-6">
  <div className="w-full h-[250px] sm:h-[350px] lg:h-[400px] rounded-xl overflow-hidden border border-gray-300">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.105119429501!2d90.40648320895892!3d23.779270778561656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c709957ed997%3A0x242bac45778271fc!2sMohakhali%20TB%20Gate%20Mosque!5e0!3m2!1sen!2sbd!4v1762963890934!5m2!1sen!2sbd"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map"
      className="w-full h-full"
    ></iframe>
  </div>
</div>


      {/* Address Section */}
      <div className="px-4 sm:px-6 lg:px-20 py-6 mx-auto container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-7 text-gray-500">
        {/* Office */}
        <div>
          <h4 className="text-lg mb-3 font-semibold text-[#3BB78F]">Office</h4>
          <p>205 North Michigan Avenue, Suite 810</p>
          <p>Chicago, 60601, USA</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: contact@Evara.com</p>
          <button className="text-xs px-5 py-2 text-white bg-[#29A56C] rounded-md mt-4">View Maps</button>
        </div>

        {/* Studio */}
        <div>
          <h4 className="text-lg mb-3 font-semibold text-[#3BB78F]">Studio</h4>
          <p>205 North Michigan Avenue, Suite 810</p>
          <p>Chicago, 60601, USA</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: contact@Evara.com</p>
          <button className="text-xs px-5 py-2 text-white bg-[#29A56C] rounded-md mt-4">View Maps</button>
        </div>

        {/* Shop */}
        <div>
          <h4 className="text-lg mb-3 font-semibold text-[#3BB78F]">Shop</h4>
          <p>205 North Michigan Avenue, Suite 810</p>
          <p>Chicago, 60601, USA</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: contact@Evara.com</p>
          <button className="text-xs px-5 py-2 text-white bg-[#29A56C] rounded-md mt-4">View Maps</button>
        </div>
      </div>

      {/* Contact Form */}
      <div className="px-4 sm:px-6 lg:px-20 py-6 mx-auto container mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form */}
          <div className="w-full lg:w-[70%]">
            <h4 className="text-lg text-[#61D0EA] font-semibold">Contact form</h4>
            <h2 className="text-2xl text-gray-800 font-semibold">Drop Us a Line</h2>
            <p className="text-gray-400 text-sm mt-2">
              Your email address will not be published. Required fields are marked *
            </p>
            <div className="mt-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  placeholder="First Name"
                  type="text"
                  className="px-4 w-full py-2 border border-gray-300 rounded-md"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-2 mt-5">
                <input
                  type="number"
                  placeholder="Your Number"
                  className="px-4 py-2 border border-gray-300 rounded-md w-full"
                />
                <input
                  placeholder="Subject"
                  type="text"
                  className="px-4 py-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <textarea
                className="mt-4 h-[150px] rounded-md w-full px-3 border border-gray-300"
                placeholder="Message"
              ></textarea>
              <button className="text-sm px-5 py-2 text-white bg-[#29A56C] rounded-md mt-4">
                Send Message
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-[30%] flex justify-center lg:justify-end">
            <img className="w-[250px] sm:w-[300px] rounded-xl mt-6 lg:mt-14" src={contact} alt="Contact" />
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="mx-auto container lg:px-8 px-4">
        <Banner2
          bgImage1={banner10}
          w="w-100"
          mt="mt-17"
          ml="ml-20"
          image={banner9}
          title="Stay home & get your daily needs from our shop"
          highlight="Nest Mart"
          subtitle="Start You'r Daily Shopping with "
        />
      </div>

      <TopFooter />
    </div>
  );
};

export default ContactPage;
