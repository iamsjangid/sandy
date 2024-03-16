"use client";
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { CiShoppingCart } from "react-icons/ci";
import Link from 'next/link';
import { CiSearch } from "react-icons/ci";

import CartBar from './Sidebar/CartBar'
import { usePathname } from 'next/navigation';
import { white_routes_hidden_header_footer } from '@/helpers/routes';
import { useSelector } from 'react-redux';
import { UserSlicePath } from '@/redux/Slices/user.slice';
import { useCheckIntoCartQuery } from '@/redux/queries/AddToCart';

const ItemWithIcon = ({   Icon, title ,...props }:any)=>{
    
    

    return      <>
        <li {...props}>
            <div className="relative">
                <Icon className="text-4xl" />
                <span className='absolute -top-2 -right-2 bg-red-500 text-white px-2 rounded-full'>0</span>
            </div>
            <span className="capitalize">{title}</span>

        </li>
    </>
}
const ItemWithIconWithBadge = ({ user, Icon, title, badgeValue, ...props }: any) => {



    return <>
        {
            user ? <>
                <li {...props}>
                    <div className="relative">
                        <Icon className="text-4xl" />
                        <span className='absolute -top-2 -right-2 bg-red-500 text-white px-2 rounded-full'>{badgeValue}</span>
                    </div>
                    <span className="capitalize">{title}</span>

                </li>
            </> : <>
                <li {...props}>
                    <Icon className="text-4xl" />
                    <span className="capitalize">{title}</span>

                </li>
            </>
        }

    </>
}


const Item = ({ title, link, }: { title: string, link:string }) => {


    return <li>
        <Link   href={link} className="capitalize  px-7 py-4  bg-black rounded-full text-white">{title}</Link>

    </li>
}


const Header = () => {

    const [Cartbar, setCartbar] = useState(false);
    const pathname = usePathname()
    const user = useSelector(UserSlicePath)

    const {data} = useCheckIntoCartQuery({})

    const SetCartState = () =>{

                console.log("sadsada");
                
        setCartbar(!Cartbar);
    }
   
    return (
        <>
            <div className=' py-2 px-4 w-full '>
                <nav className={'flex justify-between   mt-3 items-center w-[93%]  md:w-[90%] mx-auto gap-x-2'}>

                    <div className="logo flex items-center  w-[50%] gap-x-3">
                        <img src='https://s3-alpha-sig.figma.com/plugins/1048610713268120902/25176/eb9c2b87-35ba-4567-90f1-ddbc4f025b04-cover?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R5bCYuTktLHgZj7IA4KWj4xunCcNXHzgFYw5uUs64tIc4bKtKq2xGOlvDcZLzQobCByqHQMRsLdaPdEE2Qd4VzUfbMGgEkOICzwXK1O08cZMluhuws-S0Y~imZmcIhuPUVGZCktxVEGqSG4Etr~tUSFDix9s498K4wOToXGpb8039o7aNVQhf624SGG-MMuq7FQTG8a~bKdBVlwDb1kcR94Bo5B6fIO4EWyBZgtx9QRkOg5afhYCRTm5ifeuv49s8Ultkb1SWuz2eum~z598kKdeMTgMXQE2QCJiLgDXS65yotu0Z2KxqAP6mGfRHUxiECeLvhE5Q4-d6NrOCn3Hdw__' alt="logo"
                            // width={1000} height={1000}
                            className='w-[30%]' />
                        <div>
                            <Link href='/' className="text-2xl logo-font text-[--text-color1] font-bold"  >MynStars</Link>
                            <div className="punch-line text-zinc-500 text-sm">Keep it simple</div>
                        </div>
                    </div>


                    <form className="search w-full flex bg-white items-center gap-x-2 rounded-full px-2">
                        <CiSearch className="text-black text-4xl " />
                        <input type="text" className="w-full  rounded-full border border-none outline-none  px-3 py-4" placeholder="search someting" />

                    </form>

                    <ul className="flex w-[50%] gap-x-4 items-center   justify-end">
                        <Item title='Login' link={'/signup'} />
                        <ItemWithIconWithBadge user={user} badgeValue={data?.total} onClick={SetCartState}  Icon={CiShoppingCart} />
                    </ul>



                </nav>


            </div>
        
            <CartBar setCartbar={SetCartState} Cartbar={Cartbar} />

        </>
    )
}

export default Header