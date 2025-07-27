import { configureStore} from "@reduxjs/toolkit";
import { cartReducer } from './Cart.slice';

export const myStore = configureStore(
    {
        reducer : {cartReducer}
    }
)
