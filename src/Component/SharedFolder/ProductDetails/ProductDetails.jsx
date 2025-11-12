
import { useLoaderData, useParams } from 'react-router';
import ProductDetailsCard from './ProductDetailsCard/ProductDetailsCard';
import Banner2 from '../Banner2/Banner2';
import banner9 from '../../../assets/banner-9.png'
import banner10 from '../../../assets/banner-10.png'
import TopFooter from '../../Footer/TopFooter/TopFooter';

const ProductDetails = () => {
    const {id} =useParams();
    const products =useLoaderData()
  const product =products.find(product=> product.id==id)

    
    
        
    return (
       <div>
         <div className='mx-auto container px-8'>
         <ProductDetailsCard product={product}></ProductDetailsCard>
       
       
        </div>

           <div className='mx-auto container lg:px-8 px-5'>
          <Banner2  bgImage1={banner10} w="w-100" mt="mt-17" ml="ml-20" image={banner9} title={"Stay home & get your daily needs from our shop"} highlight="Nest Mart" subtitle="Start You'r Daily Shopping with "></Banner2>
     </div>
         <TopFooter></TopFooter>
       </div>
    );
};

export default ProductDetails;