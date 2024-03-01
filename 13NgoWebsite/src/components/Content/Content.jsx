import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faMoneyBill1, faLemon } from '@fortawesome/free-regular-svg-icons'

export function Content() {
  return (
    <>
      <div className='relative bg-mainImageMobile md:bg-mainImageDesktop bg-center bg-cover'>
        <div className=' w-full h-[635px] flex flex-col justify-center md:justify-start md:pt-28 items-center bg-black/25'>
          <div className='uppercase text-center flex text-background flex-col justify-center items-center'>
            <div className='text-7xl md:text-8xl font-extrabold mb-8'>Donate</div>
            <div className='border-b-[4px] border-accent w-56 md:w-64 mb-4'></div>
            <div className='text-xl md:text-2xl font-bold'>For a good cause</div>
          </div>
          <div className='mt-28 md:mt-12'>
            <button className='bg-accent text-primary py-[12px] text-base px-5 font-bold rounded-sm align-middle uppercase'>
              Donate Now
            </button>
          </div>

          {/* Desktop Highlights */}
          <div className='bg-accent hidden md:inline-flex absolute bottom-0 left-24 right-24 space-x-8 py-6 pl-8'>
            <div className='flex space-x-4'>
              <FontAwesomeIcon className='bg-background rounded-full p-5' icon={faMoneyBill1} size='xl' />
              <div className='inline-flex flex-col items-start'>
                <div className='uppercase font-bold text-xl inline-block mb-1'>donate now</div>
                <div className='border-b-4 border-amber-400 inline-block mb-2 w-24'></div>
                <div className='text-md inline-block line'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, similique!</div>
              </div>
            </div>
            <div className='flex space-x-4'>
              <FontAwesomeIcon className='bg-background rounded-full p-5' icon={faLemon} size='xl' />
              <div className='inline-flex flex-col items-start'>
                <div className='uppercase font-bold text-xl inline-block mb-1'>Give Scholarship</div>
                <div className='border-b-4 border-amber-400 inline-block mb-2 w-28'></div>
                <div className='text-md inline-block line'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, similique!</div>
              </div>
            </div>
            <div className='flex space-x-4'>
              <FontAwesomeIcon className='bg-background rounded-full p-5' icon={faHeart} size='xl' />
              <div className='inline-flex flex-col items-start'>
                <div className='uppercase font-bold text-xl inline-block mb-1'>Save Children</div>
                <div className='border-b-4 border-amber-400 inline-block mb-2 w-28'></div>
                <div className='text-md inline-block line'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, similique!</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Highlights */}
      <div className='bg-accent pt-12 pb-12 space-y-8 md:hidden'>
        <div className=' text-center px-8 space-y-4'>
          <div className='bg-background inline-block p-6 rounded-full shadow-sm'><FontAwesomeIcon icon={faMoneyBill1} size='2xl' /></div>
          <div className='text-center'>
            <div className='uppercase font-bold text-xl'>donate now</div>
            <div className='border-b-4 border-amber-400 mx-28 mb-4'></div>
            <div className='font-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, similique!</div>
          </div>
        </div>
        <div className='text-center px-8 space-y-4'>
          <div className='bg-background inline-block p-6 rounded-full shadow-sm'><FontAwesomeIcon icon={faLemon} size='2xl' /></div>
          <div className='text-center'>
            <div className='uppercase font-bold text-xl'>Give Scholarship</div>
            <div className='border-b-4 border-amber-400 mx-24 mb-4'></div>
            <div className='font-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, similique!</div>
          </div>
        </div>
        <div className='text-center px-8 space-y-4'>
          <div className='bg-background inline-block p-6 rounded-full shadow-sm'><FontAwesomeIcon icon={faHeart} size='2xl' /></div>
          <div className='text-center'>
            <div className='uppercase font-bold text-xl'>Save Children</div>
            <div className='border-b-4 border-amber-400 mx-28 mb-4'></div>
            <div className='font-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, similique!</div>
          </div>
        </div>
      </div>

      {/* Latest Donations */}
      <div className='bg-background py-10 px-9'>
        <div className='uppercase text-3xl md:text-5xl tracking-wider mb-10 pl-4 mr-12 border-accent/70 md:mt-8 border-l-4'>
          Latest Donations
        </div>
        <div className='flex align-middle pb-6'>
          <div className='p-2 border-2 border-gray-300 rounded-full shadow-md'><img className='h-14 w-14 rounded-full object-cover object-top' src='https://images.pexels.com/photos/2918513/pexels-photo-2918513.jpeg?fm=png&w=640&h=960' /></div>
          <div className= 'ml-4 space-y-1'>
            <div className='font-semibold pl-1'>Jack Daniels</div>
            <div className='flex font-extrabold text-xs'>
              <div className='bg-accent py-2 px-4 rounded-l-md'>Donated</div>
              <div className='bg-text text-white/80 py-2 px-4 rounded-r-md text-center'>Rs. 1000</div>
            </div>
          </div>
        </div>
        <div className='flex align-middle pb-6'>
          <div className='p-2 border-2 border-gray-300 rounded-full shadow-md'><img className='h-14 w-14 rounded-full object-cover object-top' src='https://images.pexels.com/photos/2080382/pexels-photo-2080382.jpeg?fm=png&w=640&h=844' /></div>
          <div className=' ml-4 space-y-1'>
            <div className='font-semibold pl-1'>John Doe</div>
            <div className='flex font-extrabold text-xs'>
              <div className='bg-accent py-2 px-4 rounded-l-md'>Donated</div>
              <div className='bg-text text-white/80 py-2 px-4 rounded-r-md text-center'>Rs. 100</div>
            </div>
          </div>
        </div>
        <div className='flex align-middle pb-6'>
          <div className='p-2 border-2 border-gray-300 rounded-full shadow-md'><img className='h-14 w-14 rounded-full object-cover object-top' src='https://images.pexels.com/photos/2179241/pexels-photo-2179241.jpeg?fm=png&w=640&h=960' /></div>
          <div className=' ml-4 space-y-1'>
            <div className='font-semibold pl-1'>Bob Doe</div>
            <div className='flex font-extrabold text-xs'>
              <div className='bg-accent py-2 px-4 rounded-l-md'>Donated</div>
              <div className='bg-text text-white/80 py-2 px-4 rounded-r-md text-center'>Rs. 5000</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}