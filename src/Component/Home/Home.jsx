
import { useLoaderData } from 'react-router';
import FeaturedCategories from './FeaturedCategories/FeaturedCategories';
import Hero from '../Hero/Hero';
import Banner from './Banner/Banner';
import Products from './PopularProductsSection/Products/Products';
import BestSales from './BestSalesSection/BestSales';
import { useEffect, useState } from 'react';
import DealsDay from './DealsDaySection/DealsDay/DealsDay';
import Cards from './TopSeelingProduct/Cards/Cards';
import Banner2 from '../SharedFolder/Banner2/Banner2';
import banner9 from '../../assets/banner-9.png'
import banner10 from '../../assets/banner-10.png'
import TopFooter from '../Footer/TopFooter/TopFooter';




const Home = () => {
    const categories =useLoaderData();
      const [cards,setCards]=useState([])
    const [products,setProducts]=useState([]);
  
     useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);
    useEffect(()=>{
        fetch("sections.json")
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])
   
    
    return (
        <div>
            <Hero></Hero>
    <FeaturedCategories categories={categories} ></FeaturedCategories>
            <Banner></Banner>
            <Products products={products}></Products>
            <BestSales products={products}></BestSales>
            <DealsDay products={products} ></DealsDay>
        <Cards cards={cards}></Cards>
     <div className='mx-auto container lg:px-8 px-5'>
         <Banner2 bgImage1={banner10} image={banner9} w="w-130 " mt="mt-17" ml="lg:ml-20 " title={"Stay home & get your daily needs from our shop"} highlight="Nest Mart" subtitle="Start You'r Daily Shopping with "></Banner2>
     </div>
  <TopFooter></TopFooter>
           
        </div>
    );
};

export default Home;