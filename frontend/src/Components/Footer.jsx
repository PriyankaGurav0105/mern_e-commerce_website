/**
 * Functional component representing the footer section of a website.
 * @returns {JSX.Element} Footer component JSX
 */
/* eslint-disable no-unused-vars */
import React from 'react'
import { assets } from "../assets/frontend_assets/assets";


const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
        <div>
            <img src={assets.logo} className='mb-5 w-32'/>
            <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quod consectetur dolor tempore, delectus optio aut, neque provident, adipisci nihil quam quasi voluptates iusto doloremque aliquam porro expedita facilis quidem?</p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>

            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91-9874563210</li>
                <li>forever2025@gmail.com</li>
                <li>Bandra West, Mumbai-400050, India</li>
                <li>Privacy policy</li>

            </ul>
        </div>

      </div>
      <div>
        <hr/>
        <p className='py-5 text-sm text-center'>Copyright 2025@ for forever.dev - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
