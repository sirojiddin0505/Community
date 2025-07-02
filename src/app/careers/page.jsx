import Image from 'next/image'
import React from 'react'
import careers1 from '../../../public/careers1.svg'

const ServicesPage = () => {
  return (
    <section>
      <main className='container mx-auto py-16 flex justify-between gap-8 items-center flex-col-reverse md:grid md:grid-cols-2 text-center md:text-start'>
        <div>
          <h2 className='text-[#0D1317] text-[64px] leading-[72px] font-[600] max-w-[596px]'>We hired people who are very passionate about what they do</h2>
          <p className='text-[#5B5B5B] text-lg font-[500] max-w-[570px] py-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.</p>
          <button className='font-[600] text-[18px] text-[#ffffff] px-5 py-3 cursor-pointer bg-[#F58A07] rounded-[31px] hover:opacity-80 active:scale-90 duration-325'>View Positions</button>
        </div>
        <div>
          <Image src={careers1} alt='opani rasmi bor' />
        </div>
      </main>
    </section>
  )
}

export default ServicesPage