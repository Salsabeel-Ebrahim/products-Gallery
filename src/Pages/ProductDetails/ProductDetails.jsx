import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loading from '../../../../freshCart/src/components/Loading/Loading'
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { CartContext } from '../../Context/Cart.context'

export default function ProductDetails() {
    let {id} = useParams()
  const {addToCart} = useContext(CartContext)
async function getSpecificProduct() {
  
const options ={
  method: "GET" , 
  url :`https://fakestoreapi.com/products/${id}`
}
return  await axios.request(options)

  }
  

  const {data , isLoading } = useQuery({
  queryKey : ['ProductDetails', id],
  queryFn : getSpecificProduct ,
  staleTime : 43200000,
  refetchOnMount:true,
   cacheTime: 86400000 

 })

 
 if(isLoading){
  return <Loading/>
 }

console.log("data.data",data.data);

  return (
    <>
    <div className="min-h-screen dark:bg-black bg-white flex items-center">
     {
      data.data?  
     <div className="container      mx-auto p-4 shadow-lg rounded-2xl overflow-hidden px-6  ">
  <div className="flex flex-col md:flex-row gap-10 dark:bg-black bg-white ">

  <div className="md:w-1/2 space-y-6">
    
      <img   loading="lazy" 
        src={ data.data?.image} 
        alt={data.data?.title} 
        className="rounded-2xl w-full max-h-[300px] object-contain dark:bg-black/20 bg-gray-50 p-4 shadow-sm" 
      />
      </div>
   
    <div className="md:w-1/2 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-yellow-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="font-medium dark:text-white text-gray-700">{data.data?.ratingsAverage}</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </div>

      <div className="space-y-1">
        <h2 className="text-3xl font-bold text-mainColor">{data.data?.title}</h2>
        <h3 className="text-2xl font-semibold dark:text-white text-gray-600 ">{data.data?.category}</h3>
   </div>

      <p className="dark:text-white text-gray-600 leading-relaxed">{data.data?.description}</p>
        <p className="text-2xl font-bold text-mainColor">{data.data?.price} EGP</p>
    
   <button className="mt-4 btn text-white bg-mainColor px-6 py-2 rounded-full flex items-center justify-center gap-2 font-semibold shadow-md hover:bg-opacity-90 hover:scale-105 transition-all duration-300"
       onClick={()=>{
         addToCart(id)
       }}
    >
   
     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M10 21a1 1 0 100-2 1 1 0 000 2zm8 1a1 1 0 100-2 1 1 0 000 2zM5 4h2l3.6 7.59-1.35 2.45A1 1 0 0010 16h9v-2h-8.42a.25.25 0 01-.23-.15L11 13h7a1 1 0 00.92-.62l3-7A1 1 0 0021 4H5z" />
      </svg>
           Add to Cart </button>

    </div>

</div>
</div>
  : <Loading/>  }
    
    </div>
    </>
  )
}
