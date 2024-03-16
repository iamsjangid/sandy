import Link from 'next/link'
import React from 'react'
import { GrLocation } from "react-icons/gr";
import { SiMinutemailer } from "react-icons/si";
import { RiFacebookFill,RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { TiSocialPinterest } from "react-icons/ti";
import { ImYoutube } from "react-icons/im";
const Footer = () => {
  return (
    <>
    
      <footer className=" w-full  px-10 ">


  <section className="section-padding footer-mid">
    <div className="container pt-15 pb-20">
      <div className="flex justify-between gap-x-3">
        <div className="flex flex-col px-4 mr-10 ">
          <div className="widget-about text-xl md:mb-9 lg:mb-9 xl:mb-0">
            <div className="logo mb-[30px]">
              {/* <a href="/" class="mb-15"><img src="{% static 'assets/imgs/theme/logo.svg' %}" alt="logo" /></a> */}
              <div className="logo logo-width-1 ">
                <a href="/"> 
                {/* want if image */}
                    </a>
              </div>
              <div>
                                          <Link href='/' className="text-2xl logo-font text-[--text-color1] font-bold"  >MynStars</Link>
                <div className="punch-line text-zinc-500 text-sm">Keep it simple</div>
              </div>
              <p className="text-sm text-heading">Joy brought to you by artists</p>
            </div>
            <ul className="contact-infor">
              <li className='flex flex-col'>
                                        
                                          <p className='inline-flex items-center '>  <GrLocation className='text-xl text-brand' />    <strong className='text-sm font-bold'>Address: </strong></p>
              <span className='text-sm font-regular'>GPA T G ARTE CONSTRUCTION REP B,SY NO46/4KNO72 AECS Bommanahalli South Bangalore Karnataka - 560068- India
                  {/* <li><img src="{% static 'assets/imgs/theme/icons/icon-contact.svg' %}" alt="" /><strong>Call Us:</strong><span>(+91) - 7043304340</span></li> */}
                </span></li>
                
                                      <li className='flex flex-row gap-x-2'>

                                          <p className='inline-flex items-center  '>  <SiMinutemailer className='text-xl text-brand ' />    <strong className='text-sm font-bold'>Email: </strong></p>
                                          <span className='text-sm font-regular'>sales@gmail.com
                                         
                                          </span></li>
                 
            </ul>
          </div>
        </div>
        <div className="footer-link-widget flex flex-col">
          <h4 className="text-xl font-semibold py-2">Company</h4>
          <ul className="footer-list mb-sm-5 mb-md-0">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Delivery Information</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms &amp; Conditions</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Support Center</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div className="footer-link-widget flex flex-col">
          <h4 className="text-xl font-semibold py-2">Account</h4>
          <ul className="footer-list mb-sm-5 mb-md-0">
            <li><a href="#">Sign In</a></li>
            <li><a href="#">View Cart</a></li>
            <li><a href="#">My Wishlist</a></li>
            <li><a href="#">Track My Order</a></li>
            <li><a href="#">Help Ticket</a></li>
            <li><a href="#">Shipping Details</a></li>
            <li><a href="#">Compare products</a></li>
          </ul>
        </div>
                          <div className="footer-link-widget flex flex-col">
          <h4 className="text-xl font-semibold py-2">Corporate</h4>
          <ul className="footer-list sm:mb-[3rem] md:mb-0">
            <li><a href="#">Become a Vendor</a></li>
            <li><a href="#">Affiliate Program</a></li>
            <li><a href="#">Farm Business</a></li>
            <li><a href="#">Farm Careers</a></li>
            <li><a href="#">Our Suppliers</a></li>
            <li><a href="#">Accessibility</a></li>
            <li><a href="#">Promotions</a></li>
          </ul>
        </div>
                          <div className="footer-link-widget flex flex-col">
          <h4 className="text-xl font-semibold py-2">Popular</h4>
                              <ul className="footer-list  sm:mb-[3rem] md:mb-0">
            <li><a href="#">Milk &amp; Flavoured Milk</a></li>
            <li><a href="#">Butter and Margarine</a></li>
            <li><a href="#">Eggs Substitutes</a></li>
            <li><a href="#">Marmalades</a></li>
            <li><a href="#">Sour Cream and Dips</a></li>
            <li><a href="#">Tea &amp; Kombucha</a></li>
            <li><a href="#">Cheese</a></li>
          </ul>
        </div>
                          <div className="footer-link-widget widget-install-app flex flex-col">
          <h4 className="text-xl font-semibold py-2">Install App</h4>
          <p className="wow fadeIn animated">From App Store or Google Play</p>
          <div className=" flex  py-4 items-center justify-between gap-x-1">
          
                                  <a href="#" className=" w-[100%] md:mb-0">
                                      <img className="hover:-translate-y-2 object-cover  duration-300 transition-all " src="https://w7.pngwing.com/pngs/34/523/png-transparent-app-store-apple-logo-apple-text-logo-video-game.png" alt />
                </a>
                                  <a href="#" className=" w-[100%]">
                                      <img src="https://www.freepnglogos.com/uploads/play-store-logo-png/play-store-logo-nisi-filters-australia-11.png" className='hover:-translate-y-2 duration-300 object-cover transition-all aspect-[4/1.3]' alt />
                </a>
          </div>
          <p className="">Secured Payment Gateways</p>
                              <img className=" transition-all w-[80%] hover:-translate-y-2 duration-300 " src="https://help.zazzle.com/hc/article_attachments/360010513393/Logos-01.png" alt />
        </div>
      </div>
    </div>
  </section>
  <div className="container pb-[30px]">
    <div className="flex flex-col items-center">
      <div className="w-full  mb-[30px]">
        <div className="footer-bottom" />
      </div>
      <div className="flex justify-between w-full items-center">

                          <div className="xl:w-1/4 lg:w-1/6 md:w-1/2 flex">
                              <p className="text-xs text-zinc-500 mb-0">© 2023, <strong className="text-brand">MynStars</strong> - Retail Private Limited <br />All rights reserved</p>
                          </div>
                          <div className="xl:w-1/4 lg:w-1/6 text-center hidden xl:flex gap-x-5">

                              <div className="flex items-center gap-x-2">
                                  <FiPhone className='text-4xl text-zinc-500 ' />
                                  <div className="flex flex-col gap-y-0">
                                      <p className='text-2xl font-semibold text-[--text-color1]'>7043304340</p>
                                      <p className='text-xs text-zinc-500'>Working 10:00 - 18:00</p>
                                  </div>
                              </div>
                              <div className="flex items-center gap-x-2">
                                  <FiPhone className='text-4xl text-zinc-500 ' />
                                  <div className="flex flex-col">
                                      <p className='text-2xl font-semibold text-[--text-color1]'>7043304340</p>
                                      <p className='text-xs text-zinc-500'>Working 10:00 - 18:00</p>
                                  </div>
                              </div>
             



                          </div>
                          <div className="xl:w-1/4 lg:w-1/6  md:w-1/2 text-end  none  md:block">
                              <div className="flex gap-x-2 items-center justify-center">
                                  <h6 className='text-sm font-semibold'>Follow Us</h6>
                                  <Link href="/" className='p-2 rounded-full bg-[--text-color1]'> <RiFacebookFill className='text-white text-lg' /> </Link>
                                  <Link href="/" className='p-2 rounded-full bg-[--text-color1]'> <RiInstagramFill className='text-white text-lg' /> </Link>
                                  <Link href="/" className='p-2 rounded-full bg-[--text-color1]'> 
                                  <FaTwitter className='text-white text-lg' /> </Link>
                                  <Link href="/" className='p-2 rounded-full bg-[--text-color1]'> <TiSocialPinterest className='text-white text-lg' /> </Link>
                                  <Link href="/" className='p-2 rounded-full bg-[--text-color1]'> <ImYoutube className='text-white text-lg' /> </Link>
                              </div>
                              <p className="text-xs text-zinc-500 ml-10  text-start">Up to 15% discount on your first subscribe</p>
                          </div>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer