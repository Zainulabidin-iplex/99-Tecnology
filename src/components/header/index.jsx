import React from 'react'
import { FaSearch, FaAngleDown, FaCartPlus, FaBars } from 'react-icons/fa';
import Logo from "../../assest/sjLogoT.png"
import Flag from "../../assest/flaf.png"
import {useWindowSize} from 'react-use';


const Header = () => {

  const { width } = useWindowSize();
  
  return (
    <>
        <div className='w-full py-3 bg-[#0170B9]'>
          <div className='w-[95%] grid grid-cols-10 mx-auto  items-center space-x-5'>
            <div className='xl:col-span-2 lg:col-span-2  md:col-span-2 sm:col-span-2 xs:col-span-7 flex justify-between items-center h-full'>
              <img src={Logo} alt="logo" className='w-[50px] h-[50px]'/>
              <p className='text-white text-[14px] font-normal xl:flex lg:flex md:flex sm:flex xs:hidden flex-col'>Deliver to <br/><span className='font-bold'>California</span></p>
            </div>
            <div className='xl:col-span-5 lg:col-span-5 md:col-span-4 sm:col-span-5  2xl:flex xl:flex lg:flex md:flex sm:flex xs:hidden bg-white rounded-[3px] items-center h-full xs:max-w-[200px]'>
              <div className='bg-gray-400 flex h-full items-center justify-center  w-[50px]'>
                <p className='text-white text-[12px] font-bold'> All</p>
                <FaAngleDown className='text-white ml-1'/>
              </div>
              <input className='grow outline-none px-3 xs:max-w-[100px]'/>
              <div className='bg-[#38c056] flex h-full items-center justify-center text-white w-[50px]'>
                <FaSearch className='text-white'/>
              </div>
            </div>
            <div className='xl:col-span-3 lg:col-span-3 md:col-span-4 sm:col-span-3 xs:col-span-3 flex justify-between xs:justify-end items-center h-full'>
              <div className='xl:flex lg:flex md:flex sm:hidden xs:hidden items-center '>
                <img src={Flag} alt="flg" className='w-[25px] h-[15px]'/>
                <FaAngleDown className='ml-2 text-white'/>
              </div>
                <p className='text-white text-[14px] font-normal xl:flex lg:flex md:flex sm:flex xs:hidden flex-col'>Login <br/><span className='font-bold flex items-center'>Register <FaAngleDown className='ml-2 text-white'/> </span></p>
                <p className='text-white text-[14px] font-normal xl:flex lg:flex md:flex sm:hidden xs:hidden flex-col'>Return <br/><span className='font-bold'>& Order</span></p>
                <div className='flex items-center relative'>
                  <p className='absolute -top-5 left-1 text-center text-red-500 text-[18px] font-bold'>0</p>
                  <FaCartPlus className='text-white '/>
                  <p className='text-white text-[14px] font-bold ml-2 '>Cart</p>
                </div>
            </div>
          </div>
        </div>
        <div className='w-full py-3 bg-[#1140A7]'>
          <div className='flex justify-between items-center w-[95%] mx-auto'>
            <div className='xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-[60%] 2xl:flex xl:flex lg:flex md:flex sm:flex xs:hidden  justify-between items-center'>
              <div className='flex items-center'>
                <FaBars className='text-white'/>
                <p className='text-[11px] text-white font-bold ml-2'>All</p>
              </div>
              <p className='text-[11px] text-white font-bold'>Today Deal Laptops</p>
              <p className='text-[11px] text-white font-bold'>Desktops</p>
              <p className='text-[11px] text-white font-bold'>Monitors</p>
              <p className='text-[11px] text-white font-bold'>BTO</p>
            </div>
            {width < 641 && (
                 <FaBars className='text-white'/>
            )}
           <div className="xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-[40%] xs: w-[70%] flex justify-end">
              <p className='text-[11px] text-white font-bold'>Get Top Deals Now</p>
           </div>
          </div>
        </div>
    </>
  )
}

export default Header
