
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import CartProvider from './Context/Cart.context'
import { Toaster } from 'react-hot-toast'
import Cart from './Pages/Cart/Cart'
import MainLayout from './layout/MainLayout'
import NotFound from './Components/NotFound/NotFound';
import { useEffect } from 'react'

function App() {
useEffect(() => {
  const userTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const theme = userTheme || (systemPrefersDark ? "dark" : "light");

  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, []);

const routes = createBrowserRouter([
{ path:"/" ,   element: <MainLayout/>,

  children : [
  { index: true,        element: <Home /> },
  { path:"/Cart" , element: <Cart/>},
{ path:"/ProductDetails/:id" , element: <ProductDetails/>},
{ path:"*" , element: <NotFound/>},

  ]
},

            ])
  return (
  
    <>
       <CartProvider>
           <Toaster position="top-center" reverseOrder={false} />
            <RouterProvider router={routes}/>
       </CartProvider>


    </>
  )
}

export default App
