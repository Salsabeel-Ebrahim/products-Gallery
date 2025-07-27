
import { useContext } from 'react';
import { CartContext } from '../Context/Cart.context';
import { FaMinus, FaPlus, FaStar, FaXmark } from 'react-icons/fa6';

export default function CartItem({itemInfo}) {
    console.log("🔍 itemInfo:", itemInfo);
  
 const {removeFromCart ,  updateCart} =  useContext(CartContext)
  const { quantity, price, image, title, id  } = itemInfo


  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-6 items-center md:justify-between dark:bg-gray-900 bg-gray-100 my-4 p-6 rounded-lg relative shadow-md">

      
      < FaXmark  onClick={()=>{removeFromCart(id)}}
        className="absolute top-3 right-3 dark:text-white text-gray-500 hover:text-red-600 cursor-pointer text-xl" 
      />

     
      <div className="rounded-lg border-[2px] overflow-hidden border-mainColor w-32 h-32">
        <img src={image} alt={title}  loading="lazy" className="w-full h-full object-contain" />
      </div>

      <div className="flex flex-col gap-1 text-gray-800 text-center md:text-start">
      <h2 className=" dark:text-white text-lg font-semibold max- w-[200px]">{title }</h2>
      <span className=" dark:text-white text-sm">Price: <span className=" dark:text-white font-medium">{price} L.E</span></span>
        <span className="text-sm text-yellow-500 flex items-center gap-1 justify-center md:justify-start">
          Rating: {}
          < FaStar className='text-xs' /> 
        </span>
        <h3 className="text-sm dark:text-white">
        "category.name"| <span className='text-mainColor font-medium'>Available</span>
        </h3>
      </div>

      <div className="flex items-center gap-3">
        < FaPlus
        onClick={()=>{updateCart(id , quantity+1)}}
        className='w-8 h-8 bg-mainColor rounded-md text-white p-2 cursor-pointer hover:bg-mainColor/90' />
        <span className='text-lg font-medium dark:text-white'>{quantity}</span>
        < FaMinus
        onClick={()=>{updateCart(id , quantity-1)}}
        className='w-8 h-8 bg-mainColor rounded-md text-white p-2 cursor-pointer hover:bg-mainColor/90' />
      </div>

    </div>
  )
}

