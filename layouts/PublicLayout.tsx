"use client";
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { white_routes_hidden_header_footer } from '@/helpers/routes';
import { usePathname, useRouter } from 'next/navigation';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react'
import { useProfileUserQuery } from '@/redux/queries/Auth.query';
import { useDispatch } from 'react-redux';
import { removeUser, setUser } from '@/redux/Slices/user.slice';

const PublicLayout = ({children}:{children:React.ReactNode}) => {

  const { data,isLoading}:any = useProfileUserQuery({});
const router = useRouter()



    const pathname = usePathname();

    const dispatch = useDispatch();


  useEffect(() => {
    if (white_routes_hidden_header_footer.includes(pathname)) {

      document.body.style.backgroundColor = "#fff";
    } else {
      document.body.style.backgroundColor = "#f9f6f6ee";
    }
  }, [pathname])

  useEffect(()=>{
    if (!isLoading && data){
           console.log(data.profile);
          

           dispatch(setUser(data.profile));
         }else{
           dispatch(removeUser({}));
         }

  }, [data])


  useEffect(() => { 
    if (!isLoading && data && white_routes_hidden_header_footer.includes(pathname)){
      router.replace("/");
    }
  }, [data, pathname])


  if (isLoading){
    return <div>loading...</div>
  }
  

 
  return (
    <>
      <ToastContainer/>
          {!white_routes_hidden_header_footer.includes(pathname) && <Header />}
          {children}
          {!white_routes_hidden_header_footer.includes(pathname) && <Footer />}
    </>
  )
}

export default PublicLayout