import contact from '../assets/contact.png'
import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function Contect({darkMode}) {
  const form = useRef();
  const [isSent , setIsSent] =  useState(false)

  const sendMessage = (e)=>{
    e.prevant()
  }
  return (
   <section 
   id='contact'
   style={{
    backgroundColor : darkMode ? '#111827' : '#f9fafb'
   }}
   className='py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden'>
    <div className='text-center mb-8 sm:mb-10 md: mb:12'
    data-aos='fade-up'>
      <h2  
      className='text-2xl sm:text-3xl md: text-4xl font-bold mb-2 sm:mb-3'
      style={{
        color: darkMode ? 'white' : '#1f2937'
      }}>
        Get In<span 
        style={{
          background : 'linear-gradient(to right, #f97326, #f59e0b)',
          WebkitBackgroundClip:'text',
          backgroundClip: 'text',
          color:'transparent'

        }}
        >
          Touch
        </span>

      </h2>

        <p
        style={{
          color:darkMode ? '#d1d5db' : '#6b2280'
        }}
        >
          Let's discuss your project
        </p>



    </div>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center'>
      <div
      className='flex justify-center order-2 lg:order-1 '
      data-aos='fade-right'
      >
        <img src={contact} alt="contact"
        className='w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto object-contain'
        />

      </div>
        <form ref={form} onSubmit={sendMessage}
        style={{background : darkMode
          ? 'linear-gradient(to right, #1f2937, #111827)'
          : 'linear-gradient(to right, #ffffff, #f9fafb)',
          borderColor: darkMode ? '#374151' : '#e5e7eb'
        }}
        className='rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border shadow-lg 
        sm:gap-4 mb-3 sm:mb-4'>
          <div className='grid grid-cols-1 sm:grid-cols-2  gap-3  sm:gap-4  mb-3  sm:mb-4'>
          <input 
          type='text'
          placeholder='First Name'
          style={{
            backgroundColor: darkMode ? '#374151' : '#faede3',
            borderColor : darkMode ? '#4b5563' : '#d1d5db',
            color : darkMode ? 'white' : '#1f2937' 
          }}
          className='w-full px-3 sm:px-4 sm:py-3 
          rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 ``
          focus:ring-orange-500/20  transition-all   mb-3  sm-mb-4'
          required
         />

          <input 
          type='text'
          placeholder='Last Name'
          style={{
            backgroundColor: darkMode ? '#374151' : '#faede3',
            borderColor : darkMode ? '#4b5563' : '#d1d5db',
            color : darkMode ? 'white' : '#1f2937' 
          }}
          className='w-full px-3 sm:px-4 sm:py-3 
          rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 ``
          focus:ring-orange-500/20  transition-all  mb-3  sm-mb-4'
          required
         />

          </div>
           <input 
          type='email'
          placeholder='Email  Address'
          style={{
            backgroundColor: darkMode ? '#374151' : '#faede3',
            borderColor : darkMode ? '#4b5563' : '#d1d5db',
            color : darkMode ? 'white' : '#1f2937' 
          }}
          className='w-full px-3 sm:px-4 sm:py-3 
          rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 ``
          focus:ring-orange-500/20  transition-all   mb-3  sm-mb-4'
          required
         />
          <input 
          type='number'
          placeholder='Phone Number'
          style={{
            backgroundColor: darkMode ? '#374151' : '#faede3',
            borderColor : darkMode ? '#4b5563' : '#d1d5db',
            color : darkMode ? 'white' : '#1f2937' 
          }}
          className='w-full px-3 sm:px-4 sm:py-3 
          rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 ``
          focus:ring-orange-500/20  transition-all  mb-3  sm-mb-4'
          required
         />

         <textarea
          rows='4'
          placeholder='Your Message'
          style={{
            backgroundColor: darkMode ? '#374151' : '#faede3',
            borderColor : darkMode ? '#4b5563' : '#d1d5db',
            color : darkMode ? 'white' : '#1f2937' 
          }}
          className='w-full px-3 sm:px-4 sm:py-3 
          rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 ``
          focus:ring-orange-500/20  transition-all  
          mb-4 sm-mb-6  resize-none'
          required
         />
         <button  
         
         type='submit'
         style={{background : 'linear-gradient(to right, #f97316, #f59e0b'}}
         className='w-full py-2  sm:py-3 text`-white font-semibold  rounded-lg text-sm sm:text-base
         hover:shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02] transition-all'
         >
          Send Message
         </button>
        </form>
    </div>

  
   </section>
  )
}

export default Contect