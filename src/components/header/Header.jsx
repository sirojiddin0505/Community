import Image from 'next/image';
import logo from '../../../public/Logo.svg';
import { TbMenuDeep } from "react-icons/tb";
// import { TfiClose } from "react-icons/tfi";



const Header = () => {
  // const {showModal, setShowModal} = useState(false)
  return (
    <header className='container mx-auto border flex justify-between items-center py-4 px-6 bg-[#ffff] md:grid-cols-2 md:px-0'>
      <div>
        <Image src={logo} alt='logo bor'/>
      </div>
      <div className='hidden md:flex items-center gap-10'>
        <nav className='flex gap-8'>
          <p className='text-[#394149] font-[600] leading-6 cursor-pointer'>About Us</p>
          <p className='text-[#394149] font-[600] leading-6 cursor-pointer'>Careers</p>
          <p className='text-[#394149] font-[600] leading-6 cursor-pointer'>Services</p>
          <p className='text-[#394149] font-[600] leading-6 cursor-pointer'>Blog</p>
          <p className='text-[#394149] font-[600] leading-6 cursor-pointer'>Contact Us</p>
        </nav>
        <button className='py-3.5 px-8 font-[600] text-[#F58A07] bg-[#F58A071A] rounded-[31px] cursor-pointer hover:bg-[#f4c48b91] hover:text-gray-600 active:scale-90 duration-325'>Clone project</button>
      </div>
      <div className='flex md:hidden'><TbMenuDeep className='text-2xl font-bold text-gray-800 cursor-pointer'/></div>
      {/* {showModal (
      <div><TfiClose/><div/>
        <div className='hidden md:flex items-center gap-10'>
          <nav className='flex gap-8'>
            <p className='text-[#394149] font-[600] leading-6 cursor-pointer'>About Us</p>
            <p className='text-[#394149] font-[600] leading-6 cursor-pointer'>Careers</p>
            <p className='text-[#394149] font-[600] leading-6 cursor-pointer'>Services</p>
            <p className='text-[#394149] font-[600] leading-6 cursor-pointer'>Blog</p>
            <p className='text-[#394149] font-[600] leading-6 cursor-pointer'>Contact Us</p>
          </nav>
          <button className='py-3.5 px-8 font-[600] text-[#F58A07] bg-[#F58A071A] rounded-[31px] cursor-pointer hover:bg-[#f4c48b91] hover:text-gray-600 active:scale-90 duration-325'>Clone project</button>
        </div>
        )} */}
    </header>
  )
}

export default Header