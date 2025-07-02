import Image from 'next/image'

const Card = ({ img, title, desc }) => {
  return (
    <div className="rounded-lg shadow-md max-w-sm bg-white">
       <div className='overflow-hidden rounded-lg hover:bg-[black/70]'>
           <Image src={img} alt={title} width={400} height={250} className="w-full h-60 object-cover transition-transform duration-300 ease-in-out hover:scale-110 "/>
       </div> 
       <div className='p-4'>
         <h3 className="mt-4 text-lg font-semibold">{title}</h3>
         <p className="text-gray-600 text-sm py-4">{desc}</p>
         <a href="#" className="text-orange-500 mt-2 inline-block">Learn More →</a>
       </div>
  </div>
  )
}

export default Card