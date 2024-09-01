'use client'
import React from 'react'

export const Footer = () => {
  return (
    <footer  className='bg-black text-gray-400 py-12 '>
    <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-4 lg:grid-col-4 gap-8 px-4 sm:px-6 lg:px-12 '>
        
        <div>
            <h3 className='text-white font-semibold'>About Us</h3>
            <p>Music School is a premier institution dedicated to teaching the art and science of music  </p>
        </div>

        <div>
            <h3 className='text-white font-semibold'>Quick Links</h3>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>

         <div>
            <h3 className='text-white font-semibold'>Follow Us</h3>
            <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">LinkedIn</a></li>
            </ul>
        </div>

        <div>
            <h3 className='text-white font-semibold'>Contact Us</h3>
            <p>Email: info@example.com Phone: +1234567890</p>
        </div>
        
    </div>
        <p className='text-center text-xs pt-8'>2024 Music School. All rights reserved.</p>
    </footer>
  )
}
export default Footer