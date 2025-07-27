import React from 'react'

export default function Search({ searchQuery, setSearchQuery,  setSortOption }) {
  return (
    <>
    <div className="px-8 mb-6 space-y-2">
          <input 
  type="text"
  placeholder="Search by name..."
   value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
  className="input w-full dark:bg-gray-800 dark:text-white placeholder:text-black dark:placeholder:text-white "
/>

   <select onChange={(e) => setSortOption(e.target.value)} className="input w-full dark:bg-gray-800 dark:text-white">
  <option value=" ">Sort by</option>
  <option value="price-low-high">Price: Low to High</option>
  <option value="price-high-low">Price: High to Low</option>
  <option value="name-a-z">Name: A–Z</option>
</select>
    </div>

 

  

    </>
  )
}
