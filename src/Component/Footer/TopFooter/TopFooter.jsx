import React from 'react';
import priceIcon from "../../../assets/icon-1.svg";
import deliveryIcon from "../../../assets/icon-2.svg";
import dealIcon from "../../../assets/icon-3.svg";
import assortmentIcon from "../../../assets/icon-4.svg";
import returnIcon from "../../../assets/icon-5.svg";

const TopFooter = () => {
    const items = [
        { icon: priceIcon, title: "Best prices & offers", desc: "Orders $50 or more" },
        { icon: deliveryIcon, title: "Free Delivery", desc: "24/7 amazing services" },
        { icon: dealIcon, title: "Great daily deal", desc: "When you sign up" },
        { icon: assortmentIcon, title: "Wide assortment", desc: "Mega Discounts" },
        { icon: returnIcon, title: "Easy returns", desc: "Within 30 days" },
    ];

    return (
        <div className='mx-auto container px-4 sm:px-6 lg:px-8'>
            <div className="bg-white py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-[#f7f9fc] rounded-md px-4 py-3 shadow-sm hover:shadow-md transition-transform hover:-translate-y-1">
                            <img src={item.icon} alt={item.title} className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />
                            <div>
                                <h3 className="font-semibold text-sm sm:text-base text-gray-900">{item.title}</h3>
                                <p className="text-gray-500 text-xs sm:text-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopFooter;
