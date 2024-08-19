import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { IoLogoApple } from "react-icons/io";
import { MdCopyright } from "react-icons/md";

function Footer() {
  return (
    <div className='w-full h-[20vw] flex justify-between items-center'>
      <ul className='flex mt-[17vw] ml-[5vw] mb-[3.5vw] flex-wrap gap-12'>
        <li className='font-sm w-[2vw] h-[2vw] border-2 rounded-xl  p-1 text-white items-center'><FaFacebookF /></li>
        <li className='font-sm w-[2vw] h-[2vw] border-2 rounded-xl  p-1 text-white items-center'><FaXTwitter /></li>
        <li className='font-sm w-[2vw] h-[2vw] border-2 rounded-xl  p-1 text-white items-center'><CiInstagram /></li>
        <li className='font-sm w-[2vw] h-[2vw] border-2 rounded-xl  p-1 text-white items-center'><IoLogoApple />
        </li>
      </ul>
      <p className='mt-[17vw] mr-[5vw] flex flex-row gap-2 mb-[3.5vw] '> @Reserved <MdCopyright />
      </p>
    </div>
  )
}

export default Footer
