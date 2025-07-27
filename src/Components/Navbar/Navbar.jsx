import {  FaCartShopping, FaMoon, FaSun } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/paper-bag_10999636.png'
export default function Navbar() {
  const [isDark, setIsDark] = useState(() => {
    const userTheme = localStorage.getItem("theme");
    return userTheme === "dark";
  });

   useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);
  return (
    <nav className=" bg-white dark:bg-black/70 shadow-md px-6 py-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className=" flex items-center gap-3">
        <img src={logo} alt="logo image"  loading="lazy" className="w-6 h-6 "/>
        <h1 className="text-2xl font-bold text-mainColor dark:text-white ">MyShop</h1>

        </div>
      
       
        <div className="flex items-center gap-6 text-gray-700 dark:text-gray-200 text-xl">
          <Link to="/" className="hover:text-mainColor transition font-semibold">
           Home
          </Link>

          <Link to="/cart" className="hover:text-mainColor relative transition font-semibold">
            <FaCartShopping />
      </Link>

   
          <button onClick={() =>{   
             setIsDark(!isDark)
       } } className="font-semibold hover:text-mainColor transition">
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
}
