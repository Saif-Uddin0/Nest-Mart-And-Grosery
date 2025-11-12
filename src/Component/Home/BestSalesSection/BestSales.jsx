
import banner4 from '../../../assets/banner-4.png'
import Button from '../../SharedFolder/Button';
import BestSalesCard from './BestSalesCard';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const BestSales = ({products}) => { 

  
    return (
        <div className='mx-auto container lg:px-8 px-5  mt-8 mb-4'>
             <div className='lg:flex lg:flex-row flex flex-col lg:justify-between  gap-2'> 
                          
                               <h1 className='text-[#253D4E] text-3xl font-semibold'>Daily Best Sales</h1>
                              <div className='flex gap-4 items-center text-sm '>
                                <p className='hover:text-[#3BB77E] transition-transform duration-300   hover:-translate-y-1' >Featured</p>
                                <p className='hover:text-[#3BB77E] transition-transform duration-300   hover:-translate-y-1' >Popular</p>
                                <p className='hover:text-[#3BB77E] transition-transform duration-300   hover:-translate-y-1' >New added</p>
                                
                              </div>
                         
                          </div>
                          <div className='flex gap-0 lg:gap-6 mt-8'>
                            <div>
                               <div className='relative h-full lg:block hidden'>
                                 <div className='absolute top-26 left-10'>
                                <h1 className='text-4xl font-semibold mb-20 text-[#253D4E]'>Bring nature <br /> into your <br /> home</h1>
                                <Button></Button>
                               </div>
                                 <img className='w-[900px] h-full object-cover rounded-md' src={banner4} alt="" />
                               </div>
                            

                            </div>

                          <div className=' gap-4 carousel'>
                                {
                                    products.map(product => <BestSalesCard key={product.id} product={product}></BestSalesCard>)
                                }
                            </div>
                          
                          </div>
        </div>
    );
};

export default BestSales;