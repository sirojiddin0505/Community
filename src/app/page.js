import Image from 'next/image'
import homepage1 from '../../public/homePage1.svg'
import homepage2 from '../../public/homePage2.svg'
import homepage3 from '../../public/homePage3.svg'
import homepage4 from '../../public/homePage4.svg'
import homepage8 from '../../public/homePage8.svg'
import homepage9 from '../../public/homePage9.svg'
import homepage10 from '../../public/homePage10.svg'
import homepage11 from '../../public/homePage11.svg'        
import homepage12 from '../../public/homePage12.svg'        
import Card from '@/components/card/Card'
import { cardData } from '@/components/data/data'


const Home = () => {
  return (
    <section>
        <main className='bg-[#DCEAF5]'>
            <div className='container mx-auto flex flex-col-reverse justify-between lg:grid lg:grid-cols-2 gap-2 pt-12'>
                <div className='text-center lg:text-start px-2 lg:w-[500px]'>
                    <h2 className='text-[#1D3444] text-[45px] leading-[50px] lg:text-[56px] lg:leading-[60px] font-[600] max-w-[576px] py-6 lg:pt-20 '>Prosper with our bespoke solutions</h2>
                    <p className='text-[#5B5B5B] text-[18px] font-[500] max-w-[571px] pt-4 pb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique</p>
                    <span className='flex gap-10 items-center justify-center mx-auto lg:mx-0 lg:justify-start'>
                        <button  className='font-[600] text-[18px] text-[#ffffff] px-5 py-3 cursor-pointer bg-[#F58A07] rounded-[31px] hover:opacity-80 active:scale-90 duration-325'>See Our Services</button>
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
        </main>

        <main className='container mx-auto py-17 '>
          <h2 className='text-center lg:text-start text-[#1D3444] text-[48px] font-[600] leading-[56px] max-w-[735px] py-7'>We help more than 1500 companies from all sectors</h2>
          <p className='text-center lg:text-start text-[#5B5B5B] text-lg max-w-[735px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
            <div className="flex flex-col justify-around items-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-14">
              {cardData.map((item, index) => (
              <Card key={index} {...item} />
              ))}
            </div>
        </main>

        <main className='bg-[#EDF7FF]'>
          <div className='container mx-auto py-16'>
            <div className='flex flex-wrap text-center md:grid md:grid-cols-2 md:text-start justify-between items-center gap-8 px-2'>
              <h2 className='text-[#0D1317] text-3xl md:text-4xl font-[600] max-w-[619px]'>We are building software solution that solves your business challenges</h2>
              <p className='text-[#0D1317] md:text-lg font-[500] max-w-[619px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
            </div>
            <div className='flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-between py-16'>
                <div className='bg-[#FFFFFF] p-8 rounded-[20px]'>
                    <Image src={homepage8} className='pb-8' alt='rasm bor'/>
                    <h3 className='text-[#0D1317] text-2xl font-[600] pb-4'>Invoicing</h3>
                    <p className='text-[#5B5B5B] font-[500] max-w-[336px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
                </div>
                <div className='bg-[#FFFFFF] p-8 rounded-[20px]'>
                    <Image src={homepage9} alt='rasm bor' className='pb-8'/>
                    <h3 className='text-[#0D1317] text-2xl font-[600] pb-4'>Invoicing</h3>
                    <p className='text-[#5B5B5B] font-[500] max-w-[336px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
                </div>
                <div className='bg-[#FFFFFF] p-8 rounded-[20px]'>
                    <Image src={homepage10} alt='rasm bor' className='pb-8'/>
                    <h3 className='text-[#0D1317] text-2xl font-[600] pb-4'>Invoicing</h3>
                    <p className='text-[#5B5B5B] font-[500] max-w-[336px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
                </div>
            </div>
          </div>
        </main>

        <main className='container mx-auto py-16 flex justify-between gap-8 items-center flex-col-reverse md:grid md:grid-cols-2'>
            <div>
                <h2 className='text-[#0D1317] text-[48px] leading-[58px] font-[600] max-w-[596px]'>The energy of a start-up combined with 30 years of experience.</h2>
                <p className='text-[#5B5B5B] text-lg font-[500] max-w-[570px] py-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
                <div className='flex justify-between gap-7'>
                    <div>
                        <h3 className='text-[#F58A07] text-[36px] font-[700] py-4'>15+</h3>
                        <h3 className='text-[#0D1317] text-2xl font-[600]'>Awards received</h3>
                        <p className='text-[#5B5B5B] text-lg font-[500] max-w-[264px] py-4'>Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.</p>
                    </div>
                    <div>
                        <h3 className='text-[#F58A07] text-[36px] font-[700] py-4'>500</h3>
                        <h3 className='text-[#0D1317] text-2xl font-[600]'>Clients served</h3>
                        <p className='text-[#5B5B5B] text-lg font-[500] max-w-[264px] py-4'>Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.</p>
                    </div>
                </div>
            </div>
            <div>
                <Image src={homepage11} alt='opani rasmi bor'/>
            </div>
        </main>

        <main className='bg-[#EDF7FF]'>
            <div className='container mx-auto '>
                <span className='flex gap-6 py-12'>
                    <button className='bg-[#EDF7FF] py-2 px-6 rounded-[31px] font-[600] text-[#0632554D] border border-[#A8BCCC] cursor-pointer hover:border-white hover:bg-[white] hover:text-[#F58A07]'>Business Strategy</button>
                    <button className='bg-[#EDF7FF] py-2 px-6 rounded-[31px] font-[600] text-[#0632554D] border border-[#A8BCCC] cursor-pointer hover:border-white hover:bg-[white] hover:text-[#F58A07]'>Digitalization</button>
                    <button className='bg-[#EDF7FF] py-2 px-6 rounded-[31px] font-[600] text-[#0632554D] border border-[#A8BCCC] cursor-pointer hover:border-white hover:bg-[white] hover:text-[#F58A07]'>Risk assessment</button>
                </span>
                <div>
                    <div>
                        <h2>Helping clients with research and strategy for their business</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
                        <p>Mattis purus. Vivamus commodo suscipit tellus et pellent. Curabitur sit amet eros blan esque. </p>
                        <a>See all services →</a>
                    </div>
                    <div>
                        <Image src={homepage12} alt='rasm bor'/>
                    </div>
                </div>
            </div>
        </main>
    </section>
  )
}

export default Home