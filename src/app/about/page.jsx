import Image from 'next/image'
import about1 from '../../../public/about1.svg'

const AboutPage = () => {
  return (
    <section>
      <main className='container mx-auto py-16 flex justify-between gap-8 items-center flex-col-reverse md:grid md:grid-cols-2 text-center md:text-start'>
        <div>
          <h2 className='text-[#0D1317] text-[64px] leading-[72px] font-[600] max-w-[596px]'>We value human, organizational, and operational intelligence, not just artificial</h2>
          <p className='text-[#5B5B5B] text-lg font-[500] max-w-[570px] py-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.</p>
          <button className='font-[600] text-[18px] text-[#ffffff] px-5 py-3 cursor-pointer bg-[#F58A07] rounded-[31px] hover:opacity-80 active:scale-90 duration-325'>Work With Us</button>
        </div>
        <div>
          <Image src={about1} alt='opani rasmi bor'/>
        </div>
        </main>
    </section>
  )
}

export default AboutPage