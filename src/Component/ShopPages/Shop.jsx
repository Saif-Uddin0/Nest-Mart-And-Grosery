import React from "react";
import Banner3 from "../SharedFolder/Banner3/Banner3";
import useData from "../../hooks/useData";
import ShopCards from "./ShopCards/ShopCards";
import RightPart from "./RightPart/RightPart";
import ShopDeals from "./ShopDeals/ShopDeals";
import Banner2 from "../SharedFolder/Banner2/Banner2";
import banner9 from "../../assets/banner-9.png";
import banner10 from "../../assets/banner-10.png";
import TopFooter from "../Footer/TopFooter/TopFooter";

const Shop = () => {
    const { products, categories, sections } = useData();

    return (
        <div className="my-8">
            {/* Top Banner */}
            <Banner3 />

            {/* Main Layout */}
            <div className="container mx-auto px-4 lg:px-8 mt-8 grid lg:grid-cols-12 gap-6">

                {/* Left Content */}
                <div className="lg:col-span-10">
                    <ShopCards products={products} />
                    <ShopDeals products={products} />
                </div>

                {/* Right Sidebar */}
                <div className="lg:col-span-2">
                    <RightPart categories={categories} sections={sections} />
                </div>
            </div>

            {/* Bottom Banner */}
            <div className="container mx-auto px-4 lg:px-8 mt-12">
                <Banner2
                    bgImage1={banner10}
                    w="w-100"
                    mt="mt-10"
                    ml="ml-10 lg:ml-20"
                    image={banner9}
                    title="Stay home & get your daily needs from our shop"
                    highlight="Nest Mart"
                    subtitle="Start You'r Daily Shopping with "
                />
            </div>

            {/* Footer */}
            <TopFooter />
        </div>
    );
};

export default Shop;
