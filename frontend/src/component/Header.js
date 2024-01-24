import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Mylogo from "../assest/brand.png";
import {FaCartArrowDown} from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";
import NewProducts from '../pages/NewProducts';
import Login from '../pages/Login';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRedux } from '../redux/userSlice';
import toast from 'react-hot-toast';



function Header() {
    const [showMenu,setShowMenu] = useState(false)
    const userData = useSelector((state)=>state.user)
    const dispatch = useDispatch()

    const handleShowMenu =()=> {
      setShowMenu(preve => !preve)
    }

    const handleLogout = ()=>{
      dispatch(logoutRedux());
      toast("Logout successfully");
    }

    const cartItemNumber = useSelector((state)=>state.product.cartItem)
  return (
    <header className='fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white'>
    {/* desktop */}
     <div  className='flex iteam-center h-full justify-between'>
       <Link to={""} className='flex items-center'>
        <div className='h-16'>
            <img src={Mylogo} className='h-full'/>
          </div>
          <div className='ml-2'>
              <span className='cursive-font text-orange-500 text-base md:text-lg font-bold'>Fresh</span>
              <span className='text-red-500 text-base md:text-lg font-bold'>.</span>
              <span className='cursive-font text-orange-500 text-base md:text-lg font-bold'>Shopping</span>
          </div>
       </Link>
       <div className="flex items-center gap-4 md:gap-7">
        <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
           <Link to={""}>Home</Link>
           {/* <Link to={"Menu/"}>Menu</Link> */}
           {/* <Link to={"About"}>About</Link> */}
           <Link to={"Contact"}>Contact Us</Link>
        </nav>

        <div className="text-2xl text-slate-600 relative">
          <Link to={"Cart"}><FaCartArrowDown />
            <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center ">{cartItemNumber.length}</div>
          </Link> 
        </div>

        <div className="text-slate-600" onClick={handleShowMenu}>
           <div className='text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md' >
           {userData.image ? (
                <img src={userData.image} className="h-full w-full" />
              ) : (
                <HiOutlineUserCircle />
              )}
           </div>
           {
            showMenu && (
              <div className="absolute right-2 bg-white py-2  shadow drop-shadow-md flex flex-col min-w-[120px] text-center">
              {
                userData.email === process.env.REACT_APP_ADMIN_EMAIL && <Link to={"NewProducts"} className='whitespace-nowrap cursor-pointer px-2'>New Product</Link>
              }
            
              {
                userData.image || userData.firstName ? (
                  <p className="cursor-pointer text-white px-2 bg-red-500" onClick={handleLogout}>Logout ({userData.firstName || 'User'})</p>
                ) : (
                  <Link to={"Login"} className='whitespace-nowrap cursor-pointer px-2'>Login</Link>
                )
              }
            
              <nav className="text-base md:text-lg flex flex-col md:hidden">
                <Link to={""}>Home</Link>
                <Link to={"Menu/65a903aff0960881ec4ed356"}>Menu</Link>
                {/* <Link to={"About"}>About</Link> */}
                <Link to={"Contact"}>Contact</Link>
              </nav>
            </div>
            
            )}
        </div>
          

       </div>
     </div>



        {/* Mobile */}
  </header>
  )
}

export default Header
