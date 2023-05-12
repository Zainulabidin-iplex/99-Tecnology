import React from 'react'
import { FaSearch, FaGreaterThan } from 'react-icons/fa';
import Header from "../../../components/header/index"
import Pc from "../../../assest/pc.png";
import  Card from "./Card"

const index = () => {
  const data = ["1", "2", "3", "4" ,"5", "6"]
  return (
    <div className='w-full h-full'>
      <Header/>
      <div className='xl:w-[70%] lg:w-[80%] md:w-[70%] sm:w-[80%] xs:w-[90%] mt-3 mx-auto'>
        <div className='grid grid-cols-3 space-x-5'>
          <div className='2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-3 sm:col-span-3 xs:col-span-3'>
            <div className='flex items-center '>
              <p className='text-[#797979] items-center text-[16px]'>Your Account</p>
              <FaGreaterThan className='mx-2 font-[10px]' size={'10px'}/>
              <p className='text-[#e69047] items-center text-[16px]'>Your Order</p>
            </div>
            <p className='text-[22px] mt-4 text-[#00000] font-bold'>Your Orders</p>
            <div className='w-[90%] flex justify-between items-center ml-5 mt-3'>
              <p className='text-[#e69047] text-[14px] font-semibold pb-3 border-[#e69047] border-b-2'>Orders</p>
              <p className='text-[#38c056] text-[14px] font-semibold pb-3'>Shipped or not</p>
              <p className='text-[#38c056] text-[14px] font-semibold pb-3'>Cancle Order</p>
            </div>
            <hr className='w-full h-[2px]'/>
            <div className='flex items-center mt-3'>
              <p className='text-[#000000] text-[16px] font-bold'>1 Order placed in</p>
              <div className='ml-5 border-solid border-2 border-[#797979] px-2 rounded-[5px]'>
                <p>Last 2 month</p>
              </div>
            </div>
          </div>
          <div className='xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-3 xs:col-span-3 xl:flex lg:flex md:hidden sm:hidden xs:hidden flex-col'>
            <p className='text-[#000000] items-center text-[16px]'>Enter tracking id to search</p>
            <div className='flex mt-2 items-center'>
              <div className='border-solid mt-2 flex items-center border-[#38c056] px-3 py-2 rounded-[5px] border-2 '>
                <FaSearch className='text-[#38c056]'/>
                <input className='outline-none ml-2  bg-transparent ' placeholder='Search all order'/>
              </div>
              <button className='ml-3 bg-[#38c056] mt-2  text-white px-5 py-2 rounded-[5px]'>
                Search
              </button>
            </div>
          </div>  
        </div>
        <div className='grid grid-cols-3 2xl:space-x-5 xl:space-x-5 lg:space-x-5  mt-6'>
          <div className='xl:col-span-2 lg:col-span-2 md:col-span-3 sm:col-span-3 xs:col-span-3  border-2 border-[#797979] border-solid xl:max-h-[280px] lg:max-h-[280px] md:max-h-[280px] sm:max-h-[280px] xs:max-h-full  rounded-[10px] md:mb-5 sm:mb-5 xs:mb-5'>
            <div className='grid grid-cols-5 h-[60px] bg-[#f5f6f7] rounded-t-[10px] space-x-5 px-10 py-3 xs:hidden'>
              <p className='col-span-1 text-[#000000] text-[14px] font-normal text-center'> Order Placed <br/> April 17,2023</p>
              <p className='col-span-1 text-[#000000] text-[14px] font-normal text-center'>Total <br/> $150.5</p>
              <p className='col-span-1 text-[#000000] text-[14px] font-normal text-center'> Ship to <br/>Jonh Nick</p>
              <p className='col-span-2 text-[#000000] text-[14px] font-normal text-center'> Order #1234-56789123 <br/> ViewOrderDetail</p>
            </div>
            <div className='px-10 xs:px-2 mt-3 flex justify-between items-center'>
              <p className='text-[#000000] text-[16px] xs:text-[11px] font-bold pb-3'>Arriving Apr 20 - May 8</p>
              <button className='ml-3 bg-[#38c056] text-white px-5 py-2 rounded-[5px]'>
                Track Pakege
              </button>
            </div>
            <div className='flex px-10 xs:px-2 mt-2'>
              <img src={Pc} alt="img" className='w-[100px] h-[100px] bg-cover bg-center object-cover'/>
              <p className='text-[#38c056] text-12 font-normal ml-4'>Gaming shouldn't be a choice between frames. Get fluid, artifact-free performance at virtually </p>
            </div>
            <hr/>
            <p className='pl-10 xs:pl-2 my-5 text-[14] text-blue-500'>Cancle my order</p>
          </div>
          <div className='xl:col-span-1 lg:col-span-1 md:col-span-3 sm:col-span-3 xs:col-span-3  border-2 border-[#797979] border-solid   rounded-[10px]'>
            <div className='w-[90%] mx-auto mt-3'>
              <button className='w-full bg-[#38c056] text-white px-5 py-2 rounded-[10px]'>
                Order Invoice
              </button>
              <p className='text-[14px] text-center mt-2 font-normal'>
                Dummy text of the printing and typesetting industry. Lorem Ipsum has been.
              </p>
              <hr className='mt-2'/>
              <div className='flex items-center justify-between mt-2'>
                <p className='text-[14px] font-normal'>Item</p>
                <p className='text-[14px] font-normal'>Product Name</p>
              </div>
              <div className='flex items-center justify-between mt-2'>
                <p className='text-[14px] font-normal'>Price</p>
                <p className='text-[14px] font-bold'>$59.5</p>
              </div>
              <div className='flex items-center justify-between mt-2'>
                <p className='text-[14px] font-normal'>Shipping & handling</p>
                <p className='text-[14px] font-bold'>--</p>
              </div>
              <div className='flex items-center justify-between mt-2'>
                <p className='text-[14px] font-normal'>Ttotal before tax</p>
                <p className='text-[14px] font-bold'>--</p>
              </div>
              <div className='flex items-center justify-between mt-2'>
                <p className='text-[14px] font-normal'>Estimated tax cancle</p>
                <p className='text-[14px] font-bold'>--</p>
              </div>
              <hr className='mt-2'/>
              <div className='flex items-center justify-between mt-2'>
                <p className='text-[14px] text-[#e69047] font-bold'>Order Total</p>
                <p className='text-[14px] text-[#e69047]  font-bold'>$59.5</p>
              </div>
             
            </div>
            <div className='h-[50px] mt-4 bg-[#f5f6f7] rounded-b-[10px] flex items-center '>
                <p className='w-[90%] mx-auto text-[16px] text-blue-500 font-normal'>How shipping cost calculat e ?</p>
              </div>
          </div>
        </div>
      </div>
      <hr className='mt-5 w-full xs:w-full text-red-500 mb-10'/>
      <div className='grid  xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 w-[90%] mx-auto space-x-3 mt-6'>
        {data.map((x)=>(
          <div className='col-span-1 mb-5'>
            <Card/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default index


// #e69047 org

// #38c056 green