import React from 'react'

const Footer = () => {
    
  const quickShop=[
    "Men",
    'Women',
    'Kids',
    "Electronics"
  ]

  const information=[
    "About us",
    "Privacy",
    "Terms & conditions"
  ]
  const customerService=[
    "FAQ's",
    "Orders and returns",
    'Personal data'

  ]
  
  return (
    <div className='max-[768px]:flex-col max-[768px]:gap-6  w-full mt-2 flex md:justify-center m-auto py-5 md:pl-40 bg-gray-100 max-[768px]:justify-center max-[768px]:pl-20'>
      <div className=" flex-1">
        <h3 className='max-[768px]:text-[17px] max-[768px]:mb-2 text-[20px] font-medium mb-2 underline'>Quick Shop</h3>
        <ul className='flex flex-col gap-1 max-[768px]:gap-1'>
        {quickShop.map((link) => (
              <li className='max-[768px]:text-[15px]' key={link}>{link}</li>
            ))}
        </ul>
      </div>
      <div className=" flex-1">
        <h3 className='max-[768px]:text-[17px] max-[768px]:mb-2 text-[20px] font-medium mb-2 underline'>Information</h3>
        <ul className='flex flex-col gap-1 max-[768px]:gap-1'>
        {information.map((link) => (
              <li className='max-[768px]:text-[15px]' key={link}>{link}</li>
            ))}
        </ul>
      </div>
      <div className=" flex-1">
        <h3 className='max-[768px]:text-[17px] max-[768px]:mb-2 text-[20px] font-medium mb-2 underline'>Service</h3>
        <ul className='flex flex-col gap-1 max-[768px]:gap-1'>
        {customerService.map((link) => (
              <li className='max-[768px]:text-[15px]' key={link}>{link}</li>
            ))}
        </ul>
      </div>
      <div className=" flex-1">
        <h3 className='max-[768px]:text-[17px] max-[768px]:mb-2 text-[20px] font-medium mb-2 underline'>Contact Us</h3>
        <ul className='flex flex-col gap-1 max-[768px]:gap-1'>
          <li className='max-[768px]:text-[15px]'>Phone: +1 12346586</li>
          <li className='max-[768px]:text-[15px]'>Email: xyz@xyz.com</li>
          <li className='max-[768px]:text-[15px]'>Address: London, USA</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
