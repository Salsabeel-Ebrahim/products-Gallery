import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import ProductCard from '../../Components/ProductCard/ProductCard'
import Search from '../../Components/Search/Search'
import { useState } from 'react'
import Loading from '../../components/Loading/Loading'

export default function Products() {
    const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");
 async function getAllProducts(){
  
const options ={
  method: "GET" , 
  url : "https://fakestoreapi.com/products"
}
return  await axios.request(options)

  }
  
  const {data , isLoading } = useQuery({
  queryKey : ['Products'],
  queryFn : getAllProducts ,
  staleTime : 43200000,
  refetchOnMount:true,
   cacheTime: 86400000 

 })

  const filteredProducts = data?.data
    ?.filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    ?.sort((a, b) => {
      if (sortOption === "price-low-high") return a.price - b.price;
      if (sortOption === "price-high-low") return b.price - a.price;
      if (sortOption === "name-a-z") return a.title.localeCompare(b.title);
      return 0;
    });

 if(isLoading){
  return <Loading/>
 }


  return (
    <div className='container  pb-8 pt-19 '>

  <div className="flex justify-center items-center  mb-2">
  <h2 className="relative font-bold text-lg text-mainColor text-center mb-4">
     Products
    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-24 h-[2px] bg-mainColor opacity-50"></span>
    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-6px] w-16 h-[2px] bg-mainColor opacity-50"></span>
  </h2>
</div>
<div className="my-3 w-full ">
  <Search    searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          sortOption={sortOption}
          setSortOption={setSortOption} />
</div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {filteredProducts?.map((product) => (
          <ProductCard productInfo={product} key={product.id} />
        ))}
      </div>

       
    </div>
  )
}