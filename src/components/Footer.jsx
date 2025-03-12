import React from 'react'
import {logo} from '../assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
  <footer className="bg-zinc-950 py-6">
    <div className="w-full max-w-screen-2xl mx-auto py-4 md:px-12 px-3 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <Link to href="https://kemmotors.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={logo} className="h-20" alt="KemMotors Logo" />
                
            </Link>
            <ul className="flex flex-wrap items-center mb-6 font-normal text-base text-gray-500 sm:mb-0 ">
                <li>
                    <Link to href="/" className="hover:text-gold ease-in-out duration-300  me-4 md:me-6">About</Link>
                </li>
                <li>
                <Link to href="/" className="hover:text-gold ease-in-out duration-300  me-4 md:me-6">Privacy Policy</Link>
                </li>
                <li>
                <Link to href="/" className="hover:text-gold ease-in-out duration-300  me-4 md:me-6">Licensing</Link>
                </li>
                <li>
                <Link to href="/" className="hover:text-gold ease-in-out duration-300  me-4 md:me-6">Contact</Link>
                </li>
             </ul>
        </div>
        <hr className="my-6 border-zinc-700 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-400 font-normal sm:text-center">© 2025 <a href="https://kemmotors.com/" className="hover:text-gold ease-in-out duration-300 ">KemMotors™</a>. All Rights Reserved.</span>
    </div>
</footer>




  )
}

export default Footer