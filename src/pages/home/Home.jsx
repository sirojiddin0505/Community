import Image from 'next/image'
import homepage1 from '../../../public/homePage1.svg'
import homepage2 from '../../../public/homePage2.svg'
import homepage3 from '../../../public/homePage3.svg'
import homepage4 from '../../../public/homePage4.svg'
import { FaArrowRightLong } from "react-icons/fa6";


const Home = () => {
    const data = [
        {
            id:1,
            image: '../../../public/homePage5.png',
            title: 'Business strategy',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,'
        },
        {
            id:2,
            image: '../../../public/homePage6.svg',
            title: 'Digitalization',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,'
        },
        {
            id:3,
            image: '../../../public/homePage7.png',
            title: 'Risk assessment',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,'
        },
    ]
  return (
    <section>
        <div className='bg-[#DCEAF5]'>
            <div className='container mx-auto flex flex-col-reverse justify-between lg:grid lg:grid-cols-2 gap-2 pt-12'>
                <div className='text-center lg:text-start px-2 lg:w-[500px]'>
                    <h2 className='text-[#1D3444] text-[45px] leading-[50px] lg:text-[56px] lg:leading-[60px] font-[600] max-w-[576px] py-6 lg:pt-20 '>Prosper with our bespoke solutions</h2>
                    <p className='text-[#5B5B5B] text-[18px] font-[500] max-w-[571px] pt-4 pb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique</p>
                    <span className='flex gap-10 items-center justify-center mx-auto lg:mx-0 lg:justify-start'>
                        <button  className='font-[600] text-[18px] text-[#ffffff] px-8 py-3 cursor-pointer bg-[#F58A07] rounded-[31px] hover:opacity-80 active:scale-90 duration-325'>See Our Services</button>
                        <a className='text-[#1D3444] font-[500]'>See All Services</a>
                    </span>
                    <p className='text-[#39414980] text-[18px] py-8'>Worked with 100+ Companies</p>
                    <span className='flex justify-around gap-4 flex-wrap pb-4'>
                        <Image src={homepage1} alt='rasm bor'/>
                        <Image src={homepage2} alt='rasm bor'/>
                        <Image src={homepage3} alt='rasm bor'/>
                    </span>
                </div>
                <div>
                    <Image src={homepage4} alt='bratni rasmi bor' className=''/>
                </div>
            </div>
        </div>

        <div className='container mx-auto'>
            <h2 className='text-[#1D3444] text-[48px] font-600 leading-[56px] max-w-[735px]'>We help more than 1500 companies from all sectors</h2>
            <p className='text-[#5B5B5B] text-lg max-w-[735px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
            <div>
                <div className='border max-w-[400px] rounded-xl'>
                    <div>image</div>
                    <h3 className='text-[#0D1317] text-2xl font-[500]'>title</h3>
                    <p className='text-[#5B5B5B] font-[500]'>desc</p>
                    <span className='text-[#F58A07] flex items-center gap-2'>
                      <a href="#" className='font-[500]'>Learn More</a>
                      <FaArrowRightLong/>
                    </span>
                </div>
                <div className='border max-w-[400px]'>
                    <div>image</div>
                    <h3>title</h3>
                    <p>desc</p>
                    <span className='text-[#F58A07] flex items-center gap-2'>
                      <a href="#">Learn More</a>
                      <FaArrowRightLong/>
                    </span>
                </div>
                <div className='border max-w-[400px]'>
                    <div>image</div>
                    <h3>title</h3>
                    <p>desc</p>
                    <span className='text-[#F58A07] flex items-center gap-2'>
                      <a href="#">Learn More</a>
                      <FaArrowRightLong/>
                    </span>
                </div>
            </div>
        </div>

        <div className='bg-[#EDF7FF]'>
          <div className='container mx-auto py-20'>
            <div className='flex justify-between items-center'>
              <h2 className='text-[#0D1317] text-4xl font-[600] max-w-[619px]'>We are building software solution that solves your business challenges</h2>
              <p className='text-[#0D1317] text-lg font-[500] max-w-[619px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
            </div>
            <div>
                <div className='bg-[#FFFFFF]'>
                    <h3 className='text-[#0D1317] text-2xl font-500'>Invoicing</h3>
                    <p className='text-[#5B5B5B] font-[500] max-w-[536px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
                </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Home