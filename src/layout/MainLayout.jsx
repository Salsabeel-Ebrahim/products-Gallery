import { Outlet } from 'react-router-dom';

// import Footer from "../components/Footer/Footer";
import Navbar from '../Components/Navbar/Navbar';



export default function MainLayout() {
  return (
    <>
     <Navbar />
     <Outlet />
      
      {/* <Footer />  */}
       </>
  )
}
