
import { Link } from 'react-router-dom';
import { FaCartShopping, FaEye } from "react-icons/fa6"
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useContext } from 'react';
import { CartContext } from '../../Context/Cart.context';

export default function ProductCard({productInfo}) {

  const {addToCart} = useContext(CartContext)
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} className="text-yellow-500" />);
  }

  if (halfStar) {
    stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-500" />);
  }

  return <div className="flex items-center gap-1">{stars}</div>;
};

  const {image , title ,  rating , id } =  productInfo
  return (
  
    
    <>


      <Link  to ={`/ProductDetails/${id}`} className='rounded-lg dark:bg-black bg-white shadow-md hover:shadow-lg transition-shadow duration-300'>
        <div className="relative group overflow-hidden" tabIndex={0}>
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-[150px] object-contain transition-transform duration-500 group-hover:scale-105 group-focus:scale-104"
          />

          <div className="absolute inset-0 bg-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 flex justify-center items-center gap-3">
            <div className="flex gap-2 transform translate-y-110 group-hover:translate-y-0 group-focus:translate-y-0 transition-all duration-400">
           <button   className="bg-white text-mainColor hover:bg-mainColor hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
           onClick={
      (e)=>{
        e.preventDefault();       
        e.stopPropagation();
        addToCart(id)   }}>
    {  <FaCartShopping   />} 
  </button>


            </div>
          </div>
        </div>

        <div className="px-4 py-3 space-y-2">
          <h2 className="text-xl font-semibold line-clamp-1  text-black dark:text-white ">{title}</h2>
          <span className="text-yellow-500 flex items-center justify-center gap-1">
          <StarRating rating={rating?.rate} />
          </span>
        </div>
      </Link>
  
    </>
  )
}

