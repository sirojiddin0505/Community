"use client";

import Image from 'next/image';
import logo from '../../../public/Logo.svg';
import { TbMenuDeep } from "react-icons/tb";
import { TfiClose } from "react-icons/tfi";
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className=' bg-white md:px-0'>
      <div className='container mx-auto flex justify-between items-center py-4 md:px-1 lg:px-6 px-6'>
      <div>
        <Link href='/'>
          <Image src={logo} alt='logo bor' />
        </Link>
      </div>

      <div className='hidden md:flex items-center gap-10'>
        <nav className='flex gap-8'>
          <Link href='/about' className='text-[#394149] font-[600] leading-6 cursor-pointer'>About</Link>
          <Link href='/careers' className='text-[#394149] font-[600] leading-6 cursor-pointer'>Careers</Link>
          <Link href='/services' className='text-[#394149] font-[600] leading-6 cursor-pointer'>Services</Link>
          <Link href='/blog' className='text-[#394149] font-[600] leading-6 cursor-pointer'>Blog</Link>
          <Link href='/contact' className='text-[#394149] font-[600] leading-6 cursor-pointer'>Contact Us</Link>
        </nav>
        <button className='py-3.5 px-8 font-[600] text-[#F58A07] bg-[#F58A071A] rounded-[31px] cursor-pointer hover:bg-[#f4c48b91] hover:text-gray-600 active:scale-90 duration-325'>
          Clone project
        </button>
      </div>

      <div className='flex md:hidden'>
        <TbMenuDeep
          className='text-2xl font-bold text-gray-800 cursor-pointer'
          onClick={() => setShowModal(true)}
        />
      </div>

      {showModal && (
        <div className='fixed top-0 left- right-0 w-full h-[400px] bg-[#b6b3b3] z-50 flex flex-col gap-10 p-6 md:hidden'>
          <div className='flex border justify-between items-center'>
            <Image src={logo} alt='logo bor' width={100} />
            <TfiClose
              className='text-2xl cursor-pointer text-gray-800'
              onClick={() => setShowModal(false)}
            />
          </div>
          <nav className='flex flex-col gap-4'>
            <Link href='/about' className='text-[#394149] font-[600] leading-6 cursor-pointer' onClick={() => setShowModal(false)}>About</Link>
            <Link href='/careers' className='text-[#394149] font-[600] leading-6 cursor-pointer' onClick={() => setShowModal(false)}>Careers</Link>
            <Link href='/services' className='text-[#394149] font-[600] leading-6 cursor-pointer' onClick={() => setShowModal(false)}>Services</Link>
            <Link href='/blog' className='text-[#394149] font-[600] leading-6 cursor-pointer' onClick={() => setShowModal(false)}>Blog</Link>
            <Link href='/contact' className='text-[#394149] font-[600] leading-6 cursor-pointer' onClick={() => setShowModal(false)}>Contact Us</Link>
          </nav>
          <button className='py-3.5 px-8 font-[600] text-[#F58A07] bg-[#F58A071A] rounded-[31px] cursor-pointer hover:bg-[#f4c48b91] hover:text-gray-600 active:scale-90 duration-325'>
            Clone project
          </button>
        </div>
      )}
      </div>
    </header>
  );
};

export default Header;
