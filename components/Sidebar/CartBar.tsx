"use client";
import { useCheckIntoCartQuery } from '@/redux/queries/AddToCart';
import Link from 'next/link';
import React from 'react'
import { RxCross2 } from "react-icons/rx";
//bg-opacity-25 bg-slate-500
const CartBar = ({setCartbar,Cartbar}:any) => {

      const {data,isLoading} = useCheckIntoCartQuery({})

      
 
      

  return (
      <div  className={`w-full z-[10] transition-all duration-500 ${Cartbar ? 'translate-x-0' : 'translate-x-[100%]'} fixed top-0 bg-opacity-25 bg-slate-500 flex  items-end justify-end flex-col `}>
      <div  className="sidebar  h-screen w-[30%] bg-white " >
        <div className="header  border-b-[.6px] py-4 flex items-center justify-between px-4">
                  <span className="text-xl font-light">Cart</span>   

                  <RxCross2 onClick={setCartbar} className="text-3xl font-light" />

                                </div>
        {isLoading ? <>loading...</>
          : <div id="sidebar" className="w-full  h-[80vh] overflow-y-auto px-3">
                                        {
              JSON.stringify(data)
                                        }
                                      </div>}

                                      <div className="w-full"> 
          <Link onClick={setCartbar} href={'/checkout'} className="px-4 py-2 text-white bg-black w-full ">Checkout</Link>
                                      </div>
                    </div>
      </div>
  )
}

export default CartBar