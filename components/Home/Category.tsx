"use client"
import { useGetAllCategoriesQuery } from '@/redux/queries/Product.query';
import Link from 'next/link';
import React from 'react'
import Marquee from "react-fast-marquee";
import Loader from '../Loader';

const Cards = ({ data }:any)=>{
    console.log(data);
    
    return <>
        <Link href={`/products/${data?.slug}`} className="   relative w-full   md:w-[200px] overflow-hidden min-h-[150px]  ">
            <img
                src={data?.category_image?.uri}
                className='w-full grayscale h-full object-cover rounded-[1rem]'
                onError={(e) => {
                    e.target.src = 'https://cdn.dribbble.com/userupload/12805829/file/original-f44d088af41702336027b17cf44fdd5e.png?format=webp&resize=273x205&vertical=center';
                }}
                alt=""
            />      
                                <div className="footer px-3">
                <span>{data?.title}</span>
                                </div>
                    </Link>
    </>
}

const CategoryComponent = () => {

    const { data,isLoading}:any = useGetAllCategoriesQuery({});

    if(isLoading){
        return <>
        <Loader/>
        </>
    }
 
  return (
      <div style={{ height: "500px" }} className="flex  w-[100%] justify-center pb-24">
                {/* {
                    Array(1).fill(null).map((cur,i)=>{
                        return <Cards key={i}/>
                    })
                } */}       

          {/* {JSON.stringify(data.categories && data.categories.length > 0 && data)} */}
                                         {/* @ts-ignore  */}
          <Marquee className={'gap-x-4 p-4   '} velocity={25} minScale={0.7}  >
              {data.categories && data.categories.length > 0 && data.categories.map((cur:any,i:number)=>{
                  return <div key={i} className="mx-4">
                      <Cards   data={cur} />
                      <h1>Hello world</h1>
                  </div> 
              })}
          </Marquee>

    </div>
  )
}

export default CategoryComponent