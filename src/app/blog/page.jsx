import Image from 'next/image'
import { FaArrowRightLong } from "react-icons/fa6";
import blog1 from '../../../public/blog1.png';
import blog2 from '../../../public/blog2.png';
import { AllPostData, cardData } from '@/components/data/data';
import Card from '@/components/card/Card';


const BlogPage = () => {
  return (
    <section>
      <main className='bg-[#DCEAF5]'>
        <div className='container mx-auto flex justify-center items-center flex-col-reverse gap-6 md:grid md:grid-cols-2 px-4 py-24'>
          <div className='text-center md:text-start'>
            <span className='flex items-center gap-2 py-6'>
              <Image src={blog1} alt='rasm bor' />
              <h3 className='text-[#394149] text-sm md:text-lg'>Andrew Jonson</h3>
              <p className='text-[#394149] mx-4 text-sm md:text-lg'>Posted on 27th January 2021</p>
            </span>
            <h2 className='text-[#1D3444] text-[32px] md:text-[64px] font-[600] leading-[36px] md:leading-[72px] max-w-[527px]'>Our internal process and longerm vision</h2>
            <p className='text-[#5B5B5B] text-sm md:text-lg font-[500] max-w-[557px] py-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the</p>
            <a href="#" className='flex gap-2 items-center text-[#f58a07] font-[500]'>Read More <FaArrowRightLong/></a>
          </div>
          <div>
            <Image src={blog2} alt='rasm bor' /> 
          </div>
        </div>
      </main>

      <main className='container mx-auto py-24 px-4'>
        <h1>All Posts</h1>
        <div className='flex flex-col items-center gap-6 md:grid md:grid-cols-2 lg:grid-cols-3'>
        {AllPostData.map((item, index) => (
          <Card key={index} {...item}/>
        ))}
        </div>
      </main>
    </section>
  )
}

export default BlogPage