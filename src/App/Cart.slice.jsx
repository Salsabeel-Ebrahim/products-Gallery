import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const x= createSlice({
    name: "cart" ,
    initialState : {cart : null},
extraReducers: function(builder) {
        builder.addCase(addToCart)
 

}

})

export const cartReducer = x.reducer



// async function addToCart(productId){
//     const loading = toast.loading("loading")
//        try {
//         const options = {
//             method: "POST", 
//             url: "https://ecommerce.routemisr.com/api/v1/cart", 
//             data : {
//                productId  },
           
//             headers: {
//               token: token 
//                            }
//         }
//         const {data} = await axios.request(options)
//         if(data.status == "success")
//              toast.success(data.message)
//             //  getAllCart()
        
//             } catch (error) {
//         console.log(error);
//    }finally{
//     toast.dismiss(loading)
//    }
        
//     }