import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-hot-toast";


export const CartContext = createContext(null)

export default function CartProvider({children}){


  const [cartInfo , setCartInfo] = useState(null)


  async function addToCart(productId){
    const loading = toast.loading("loading")
       try {
        const options = {
            method: "POST", 
            url: "https://fakestoreapi.com/carts", 
            data : {
               userId: 1, 
      date: new Date().toISOString().split("T")[0], 
      products: [
        {
          productId: productId,
          quantity: 1
        } ]  },
           
        
        }
        const {data} = await axios.request(options)
       
             toast.success("Product added to cart successfully!")
             getAllCart()

        
            } catch (error) {
        console.log(error);
   }finally{
    toast.dismiss(loading)
   }
        
    }
 
    async function getAllCart() {
  try {
    const { data } = await axios.get("https://fakestoreapi.com/carts/user/1");

    const lastCart = data[data.length - 1]; 

    const enrichedProducts = await Promise.all(
      lastCart.products.map(async (item) => {
        const res = await axios.get(`https://fakestoreapi.com/products/${item.productId}`);
        return {
          ...res.data,
          quantity: item.quantity
        };
      })
    );

    setCartInfo({
      products: enrichedProducts,
      numOfCartItems: enrichedProducts.length
    });

  } catch (error) {
    console.log(error);
  }
}

   async function removeFromCart(id){
       const loading = toast.loading("loading")
    try {
    setCartInfo((prev) => {
      const filtered = prev.products.filter(p => p.id !== id);
      return {
        ...prev,
        products: filtered,
        numOfCartItems: filtered.length
      };
    });
    toast.success("Product removed from cart");
  } catch (error) {
    console.log(error);
  }finally{
               toast.dismiss(loading)  }



        
    }

   async function updateCart(productId, newQuantity){
  try {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartInfo((prev) => {
      const updated = prev.products.map((p) =>
        p.id === productId ? { ...p, quantity: newQuantity } : p
      );
      return {
        ...prev,
        products: updated,
        numOfCartItems: updated.length
      };
    });
    toast.success("Quantity updated");
  } catch (error) {
    console.log(error);
  }
}

    
    return <>
    <CartContext.Provider value={{addToCart ,  cartInfo , 
    getAllCart , removeFromCart, updateCart
       
       
       }}>
{children}
    </CartContext.Provider>
    
    </>
}