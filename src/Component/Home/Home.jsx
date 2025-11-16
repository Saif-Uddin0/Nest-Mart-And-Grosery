import { useLoaderData } from "react-router";
import { useEffect, useState } from "react";

import Hero from "../Hero/Hero";
import Banner from "./Banner/Banner";
import FeaturedCategories from "./FeaturedCategories/FeaturedCategories";
import Products from "./PopularProductsSection/Products/Products";
import BestSales from "./BestSalesSection/BestSales";
import DealsDay from "./DealsDaySection/DealsDay/DealsDay";
import Cards from "./TopSeelingProduct/Cards/Cards";
import Banner2 from "../SharedFolder/Banner2/Banner2";
import TopFooter from "../Footer/TopFooter/TopFooter";

import banner9 from "../../assets/banner-9.png";
import banner10 from "../../assets/banner-10.png";

const Home = () => {
  const categories = useLoaderData();
  const [products, setProducts] = useState([]);
  const [cards, setCards] = useState([]);

  // Fetch products
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Fetch sections/cards
  useEffect(() => {
    fetch("/sections.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div>
      <Hero />

      <FeaturedCategories categories={categories} />

      <Banner />

      <Products products={products} />

      <BestSales products={products} />

      <DealsDay products={products} />

      <Cards cards={cards} />

      {/* Banner 2 section */}
      <div className="mx-auto container lg:px-8 px-5">
        <Banner2
          bgImage1={banner10}
          image={banner9}
          w="w-130"
          mt="mt-17"
          ml="lg:ml-20"
          title="Stay home & get your daily needs from our shop"
          highlight="Nest Mart"
          subtitle="Start You'r Daily Shopping with"
        />
      </div>

      <TopFooter />
    </div>
  );
};

export default Home;
