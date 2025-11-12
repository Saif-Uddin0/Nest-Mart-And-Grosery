
import ShopCard from '../CategoriesSection/ShopCard/ShopCard';

const ShopCards = ({products}) => {
   
    return (
        <div className=''>
                <div className='flex lg:flex-row flex-col justify-between gap-4 lg:gap-0 lg:items-center mt-2'> 
                          
                         <p className='text-gray-600 text-sm'>We found 29 items for you!</p>
                     <div className='flex items-center gap-2'>
                          <button className='text-gray-600 text-sm px-5 py-2 bg-white rounded-md shadow-sm'>Show: 50</button>
                         <button  className='text-gray-600 text-sm px-5 py-2 bg-white rounded-md shadow-sm' >Sort by price</button>
                     </div>
                         
                          </div>
                          <div className='grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4  mt-8'>
                       {
                            products.map(product=> <ShopCard product={product}></ShopCard>)
                       }
                          </div>
        </div>
    );
};

export default ShopCards;