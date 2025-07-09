import React from 'react'

const Footer = () => {
  return (
    <div className='text-[#737373] md:px-8'>
    <div className='py-20'>
      <p>Developed By Anmol Raj Srivastav</p>
      <p>Contact Us</p>
    </div>   

      <div className='grid grid-cols-2 md:grid-cols-4 text-sm pb-10 max-w-5xl'>
        <ul>
            <li>FAQ</li>
            <li>Privacy</li>
            <li>Speed Test</li>
        </ul>

        <ul>
            <li>Help Center</li>
            <li>Cookie Preferences</li>
            <li>Legal Notice</li>
        </ul>

    
      </div>
    </div>
  )
}

export default Footer
