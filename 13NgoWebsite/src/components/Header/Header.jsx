import React from 'react'

export function Header() {

  const headerItems = [
    'Home',
    'About Us',
    'Pages',
    'Events',
    'Blog',
    'Contact',
  ]

  return (
    <div className='bg-primary flex items-stretch h-[68px] justify-between px-4 md:px-12 lg:px-20'>
      <div className='text-secondary font-bold md:text-2xl my-auto mr-12 text-xl'>CHARITY</div>
      <div className='h-full flex items-center shrink-0'>
        <div className='text-background space-x-4 mr-6 h-full text-sm hidden md:inline-block lg:text-base'>
          {
            headerItems.map((item) => (
              <button key={item} className={`border-b-[4px] px-4 rounded-sm text-xs md:text-base font-medium object-cover h-full border-b-accent`}>
                {item}
              </button>
            ))
          }
        </div>
        <button className='bg-accent text-primary p-[10px] text-sm md:text-base px-4 font-semibold rounded-sm align-middle'>
          Donate Now
        </button>
      </div>
    </div>
  )
}