import Image from 'next/image';
import logo from '../../../public/Logo (1).svg';
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube  } from "react-icons/fa";


const Footer = () => {
  return (
    <section className='bg-[#063255]'>
      <div className='container mx-auto flex flex-col justify-between pl-4 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-20'>
        <div className='pb-8'>
          <Image src={logo} alt='logo bor' className='pb-6'/>
          <h2 className='text-[#ffff] text-[36px] font-[600] leading-10 tracking-3% max-w-[351px]'>Bespoke software solutions</h2>
          <span className='flex gap-4 pt-6'>
            <FaFacebook className='text-xl text-[#ffff] font-bold'/>
            <FaYoutube className='text-xl text-[#ffff] font-bold'/>
            <FaInstagram className='text-xl text-[#ffff] font-bold'/>
            <FaTwitter className='text-xl text-[#ffff] font-bold'/>
          </span>
        </div>
        <div className='pb-8 md:pl-8'>
          <h3 className='text-[#ffffff] text-[18px] pb-6'>Company</h3>
          <p className='text-[#ffffff] pb-4'>About Us</p>
          <p className='text-[#ffffff] pb-4'>Careers</p>
          <p className='text-[#ffffff] pb-4'>Services</p>
          <p className='text-[#ffffff] pb-4'>Blog</p>
        </div>
        <div className='pb-8'>
          <h3 className='font-[600] text-[18px] text-[#ffffff] pb-6'>Connect</h3>
          <p className='font-[500] text-[#ffffff] pb-4'>hi@finsweet.com</p>
          <a href="" className='font-[500] text-[#ffffff]'>+(123) 456-7890</a>
        </div>
        <div className='pb-8'>
          <h3 className='font-[600] text-[18px] text-[#ffffff] pb-6'>Join Newslatter</h3>
          <input type="email" placeholder='Type email here' className='block bg-[#ffff] outline-none border border-gray-600 px-8 py-3 rounded-[31px] mb-4 focus:opacity-85'/>
          <button className='font-[600] text-[18px] text-[#ffffff] px-8 py-3 cursor-pointer bg-[#F58A07] rounded-[31px] hover:opacity-80 active:scale-90 duration-325'>Subscribe</button>
        </div>
      </div>
    </section>
  )
}

export default Footer