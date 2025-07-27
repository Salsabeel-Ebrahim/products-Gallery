import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../Context/Cart.context'
import Loading from '../../Components/Loading/Loading'
import { Link } from 'react-router-dom';
 import useOnline from '../../Hooks/useOnline';
import CartItem from './../../Components/CartItem';

export default function Cart() {
 const {getAllCart , cartInfo 
  } = useContext(CartContext)
        const online= useOnline()
 useEffect(()=>{
      getAllCart()     } , [])
      console.log("cartInfo",cartInfo );

    

useEffect(() => {
  getAllCart();
}, []);

  return (
     <>  
  { cartInfo? 
     <div className="container pb-8 pt-[70px] dark:bg-black  bg-white">
      { cartInfo.numOfCartItems===0 ?
       <div className="container min-h-[70vh] py-8 flex items-center ">
    <div className="border-2 border-mainColor text-center py-12 px-4 rounded-lg w-full">
   <p className="text-lg text-gray-800 mb-6 dark:text-white">There are not items yet.</p>
  <Link to="/"> <button className="btn text-white font-semibold px-6 py-3 rounded-full hover:bg-purple-600 transition">
     ADD YOUR FIRST PRODUCT TO CART
   </button></Link>
    </div>
      </div>

  : 
         (
            Array.isArray(cartInfo.products) &&   cartInfo.products.map((item)=>(
            <CartItem key={item.id} itemInfo={item} />    ) ) 
 )
   
      }  

    {cartInfo.numOfCartItems !== 0 && (
  <div className="w-full border-t-[2px] border-mainColor pt-4 mt-6 dark:bg-black  bg-white shadow-sm px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex gap-3">
 <Link to="/Payment">
 {online? <button className="btn bg-purple-600 hover:bg-purple-700 text-white  font-semibold px-5 py-2 ">
     CHECKOUT
   </button> : null }
 
 </Link>
 </div>

 </div>

 )}
   </div> 
                : <Loading/> }
     </>
   )
}
