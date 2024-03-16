"use client"
import React from 'react'
import Marquee from "react-fast-marquee";

const Cards = ()=>{
    return <>
        <div className="card mx-4  rounded-[3rem] relative  w-full md:w-[273px] overflow-hidden h-[340px] bg-red-500 shadow">
            <img src="https://cdn.dribbble.com/userupload/12810279/file/original-ea500c98b7e85a5e75c82629be0948cb.jpg?format=webp&resize=263x197&vertical=center " className='w-full grayscale h-full object-cover   ' alt="" />        
                        <div className="lower-text absolute text-white  bottom-[20px] px-4">
                            <h1 className="capitalize text-lg">Kerishna</h1>
                            <h2 className="capitalize text-lg">web developer</h2>
                            <div className="btn-pills flex flex-shrink gap-x-3">
                               
                               {
                                ['Brand'].map((cur,i)=>{
                                    return <button key={i} className="border border-white rounded-full text-xs px-4 py-1">
                                        {cur}
                                    </button>
                                })
                               }
                   
                                
                            </div>
                        </div>
                    </div>
    </>
}

const MarqueeComponent = () => {

    // let scale = 0.5;

    // if (size && size.width > 800) {
    //     scale = 0.65;
    // }

    // if (size && size.width > 1100) {
    //     scale = 0.8;
    // }

    // if (size && size.width > 1400) {
    //     scale = 1;
    // }
  return (
      <div style={{ height: "500px" }} className="flex  w-[100%] justify-center pb-24">
                {/* {
                    Array(1).fill(null).map((cur,i)=>{
                        return <Cards key={i}/>
                    })
                } */}

          <Marquee className={'gap-x-4   '} velocity={25} minScale={0.7}  >
              {Array(10).fill({a:'s'}).map(({ _cur, i }: { _cur:any,i:number}) => (
                  
                   <Cards key={i} />  
              ))}
          </Marquee>

    </div>
  )
}

export default MarqueeComponent