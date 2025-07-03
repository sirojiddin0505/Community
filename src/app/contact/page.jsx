import React from 'react'

const ContactPage = () => {
  return (
    <section>
      <main className='container mx-auto py-20 '>
        <div className='flex justify-between items-center pb-12'>
          <span>
            <h2>Have a question ? Let’s get in touch with us.</h2>
            <p>Fill up the Form  and ou team will get back to within 24 hrs</p>
          </span>
          <span>
            <h3>Location</h3>
            <p>DLF Cybercity, Bhubaneswar</p>
            <p>India, &52050</p>
          </span>
          <span>
            <h3>Contact Us</h3>
            <p>020 7993 2905</p>
            <p>hi@finsweet.com</p>
          </span>
        </div>
        <div>
          <span>
            <form className='max-w-[600px] space-y-4'>
              <input type="text"   placeholder='First name'  className='border block py-2 px-3 outline-none bg-[#D2DAED2B] rounded-[27px] w-full text-[#9C9C9C] font-[500] focus:bg-blue-50 ' />
              <input type="text"    placeholder='Last name'  className='border block py-2 px-3 outline-none bg-[#D2DAED2B] rounded-[27px] w-full text-[#9C9C9C] font-[500] focus:bg-blue-50 ' />
              <input type="email" placeholder='Email adress' className='border block py-2 px-3 outline-none bg-[#D2DAED2B] rounded-[27px] w-full text-[#9C9C9C] font-[500] focus:bg-blue-50 ' />
              <textarea row={4} placeholder='Type message' className='border block py-2 px-3 outline-none bg-[#D2DAED2B] rounded-[12px] w-full text-[#9C9C9C] font-[500] focus:bg-blue-50 '></textarea>
              <button type='submit' className='bg-[#F58A07] text-[#ffff] py-2 px-6 rounded-full cursor-pointer hover:opacity-90 active:scale-90 duration-325'>Submit</button>
            </form>
          </span>
          <span></span>
        </div>
        <div></div>
      </main>
    </section>
  )
}

export default ContactPage